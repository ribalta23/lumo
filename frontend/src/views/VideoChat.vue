<!-- filepath: c:\Users\aleix\Documents\mywebs\videocall-demo\frontend\src\components\VideoChat.vue -->
<template>
  <div class="video-chat">
    <h2>Video Chat</h2>
    
    <div class="status-section">
      <div class="status">{{ status }}</div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="isMobile" class="mobile-warning">
        📱 <strong>Móvil detectado:</strong> Necesitas HTTPS para acceder a la cámara
      </div>
    </div>

    <div class="video-grid">
      <div class="video-container">
        <h3>Tu Video</h3>
        <video ref="localVideo" autoplay playsinline muted></video>
      </div>
      
      <div class="video-container">
        <h3>Video Remoto</h3>
        <video ref="remoteVideo" autoplay playsinline></video>
      </div>
    </div>

    <div class="instructions">
      <p><strong>Para conectar:</strong></p>
      <p>• Abre otra pestaña con #init al final</p>
      <p v-if="!isMobile">• Ejemplo: http://localhost:5173/videocall#init</p>
      <p v-if="isMobile">• Para móvil usa: https://tu-ip:5173/videocall#init</p>
      
      <div v-if="isMobile" class="mobile-instructions">
        <h4>🔧 Para usar en móvil:</h4>
        <ol>
          <li>Ejecuta: <code>npm run dev:https</code></li>
          <li>Acepta el certificado en tu navegador</li>
          <li>Usa la URL con HTTPS</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const localVideo = ref(null)
const remoteVideo = ref(null)
const status = ref('Inicializando...')
const error = ref('')

const isMobile = computed(() => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
})

let localStream = null
let peerConnection = null
let ws = null

const iceConfiguration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' }
  ]
}

// Detectar capacidades del navegador
function checkWebRTCSupport() {
  if (!navigator.mediaDevices) {
    throw new Error('Tu navegador no soporta mediaDevices')
  }
  
  if (!navigator.mediaDevices.getUserMedia) {
    throw new Error('getUserMedia no disponible')
  }
  
  if (!window.RTCPeerConnection) {
    throw new Error('WebRTC no soportado')
  }
  
  // Verificar si estamos en contexto seguro
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    throw new Error('Se requiere HTTPS para acceder a la cámara en dispositivos móviles')
  }
}

onMounted(async () => {
  try {
    status.value = 'Verificando compatibilidad...'
    checkWebRTCSupport()
    
    status.value = 'Obteniendo cámara...'
    
    // Configuración específica para móvil
    const constraints = {
      video: {
        width: { ideal: 640 },
        height: { ideal: 480 },
        facingMode: 'user' // Cámara frontal por defecto
      },
      audio: {
        echoCancellation: true,
        noiseSuppression: true
      }
    }
    
    localStream = await navigator.mediaDevices.getUserMedia(constraints)
    
    localVideo.value.srcObject = localStream
    status.value = 'Cámara conectada ✓'
    
    status.value = 'Conectando al servidor...'
    const wsProtocol = location.protocol === 'https:' ? 'wss:' : 'ws:'
    const wsUrl = `${wsProtocol}//${location.hostname}:8000/ws/test`
    
    ws = new WebSocket(wsUrl)
    
    ws.onopen = () => {
      status.value = 'Servidor conectado ✓ - Listo para videollamada'
      initializePeerConnection()
    }
    
    ws.onerror = () => {
      error.value = `Error: Backend no disponible en ${wsUrl}`
    }

    ws.onmessage = async (e) => {
      try {
        const message = JSON.parse(e.data)
        await handleSignalingMessage(message)
      } catch (err) {
        console.error('Error procesando mensaje:', err)
      }
    }

  } catch (err) {
    if (err.message.includes('HTTPS')) {
      error.value = '🔒 Error: Se requiere HTTPS para la cámara en móvil'
      status.value = 'Se requiere conexión segura'
    } else {
      error.value = 'Error: ' + err.message
    }
    console.error(err)
  }
})

function initializePeerConnection() {
  peerConnection = new RTCPeerConnection(iceConfiguration)
  
  // Añadir tracks locales
  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream)
  })
  
  // Manejar stream remoto
  peerConnection.ontrack = (event) => {
    console.log('Stream remoto recibido')
    remoteVideo.value.srcObject = event.streams[0]
    status.value = '¡Conectado! Videollamada activa ✓'
  }
  
  // Manejar ICE candidates
  peerConnection.onicecandidate = (event) => {
    if (event.candidate && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'ice-candidate',
        candidate: event.candidate
      }))
    }
  }
  
  // Si es iniciador, crear oferta
  const isInitiator = location.hash === '#init'
  if (isInitiator) {
    createOffer()
  }
}

async function createOffer() {
  try {
    const offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)
    
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'offer',
        offer: offer
      }))
    }
  } catch (err) {
    console.error('Error creando oferta:', err)
  }
}

async function handleSignalingMessage(message) {
  switch (message.type) {
    case 'offer':
      await peerConnection.setRemoteDescription(message.offer)
      const answer = await peerConnection.createAnswer()
      await peerConnection.setLocalDescription(answer)
      
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
          type: 'answer',
          answer: answer
        }))
      }
      break
      
    case 'answer':
      await peerConnection.setRemoteDescription(message.answer)
      break
      
    case 'ice-candidate':
      await peerConnection.addIceCandidate(message.candidate)
      break
  }
}
</script>

<style scoped>
.video-chat {
  padding: 20px;
}

.status-section {
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.status {
  padding: 8px 12px;
  background: #e3f2fd;
  color: #1976d2;
  border-radius: 4px;
  margin-bottom: 10px;
}

.error {
  background: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 4px;
}

.video-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.video-container h3 {
  margin-bottom: 10px;
}

video {
  width: 100%;
  max-height: 300px;
  border-radius: 8px;
  border: 2px solid #ddd;
  background: #000;
}

.instructions {
  background: #fff3cd;
  padding: 15px;
  border-radius: 8px;
}

.mobile-warning {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.mobile-instructions {
  background: #e7f3ff;
  border: 1px solid #b3d9ff;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.mobile-instructions h4 {
  margin-bottom: 10px;
  color: #0066cc;
}

.mobile-instructions ol {
  margin-left: 20px;
}

.mobile-instructions code {
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}

@media (max-width: 768px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
}
</style>