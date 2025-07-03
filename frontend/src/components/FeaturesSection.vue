<template>
  <section id="features" class="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref="featuresSection">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-satoshi font-bold text-text mb-4">
          Todo lo que necesitas para
          <span class="block gradient-animate">
            aprender y enseñar
          </span>
        </h2>
        <p class="text-xl text-text/70 max-w-3xl mx-auto">
          Una plataforma completa que conecta estudiantes y profesores con herramientas 
          avanzadas para una experiencia educativa excepcional.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Large Feature Card -->
        <div class="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl card-hover border border-lumo/10 animate-on-scroll" data-delay="200">
          <div class="h-full flex flex-col">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-lumo-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-satoshi font-bold text-text ml-4">Videollamadas HD</h3>
            </div>
            <p class="text-text/70 mb-6 text-lg">
              Clases en tiempo real con calidad de video HD, pizarra digital compartida, 
              grabación de sesiones y herramientas interactivas.
            </p>
            <div class="flex-1 flex items-end">
              <img 
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Videollamada de tutoría"
                class="w-full h-48 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <!-- Small Feature Cards -->
        <div class="bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl card-hover border border-lumo/10 animate-on-scroll" data-delay="300">
          <div class="w-12 h-12 bg-lumo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <h3 class="text-xl font-satoshi font-bold text-text mb-2">Chat Integrado</h3>
          <p class="text-text/70">
            Comunicación fluida antes, durante y después de las clases.
          </p>
        </div>

        <div class="bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl card-hover border border-lumo/10 animate-on-scroll" data-delay="400">
          <div class="w-12 h-12 bg-lumo-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <h3 class="text-xl font-satoshi font-bold text-text mb-2">Tareas y Ejercicios</h3>
          <p class="text-text/70">
            Asigna y recibe tareas con seguimiento automático del progreso.
          </p>
        </div>

        <div class="bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl card-hover border border-lumo/10 animate-on-scroll" data-delay="500">
          <div class="w-12 h-12 bg-lumo-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-satoshi font-bold text-text mb-2">Horarios Flexibles</h3>
          <p class="text-text/70">
            Programa clases que se adapten a tu disponibilidad.
          </p>
        </div>

        <div class="bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl card-hover border border-lumo/10 animate-on-scroll" data-delay="600">
          <div class="w-12 h-12 bg-lumo-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-satoshi font-bold text-text mb-2">Seguimiento de Progreso</h3>
          <p class="text-text/70">
            Métricas detalladas y reportes de rendimiento académico.
          </p>
        </div>

        <!-- Wide Feature Card -->
        <div class="lg:col-span-2 bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl card-hover border border-lumo/10 animate-on-scroll" data-delay="700">
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-lumo-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-satoshi font-bold text-text ml-4">Pagos Seguros</h3>
              </div>
              <p class="text-text/70 text-lg">
                Procesamiento seguro de pagos con múltiples métodos y facturación automática.
              </p>
            </div>
            <div class="ml-8">
              <div class="w-32 h-20 bg-gradient-to-br from-lumo-500 to-lumo-700 rounded-2xl flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const featuresSection = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animatedElements = entry.target.querySelectorAll('.animate-on-scroll')
        animatedElements.forEach((el) => {
          const delay = el.dataset.delay || 0
          setTimeout(() => {
            el.classList.add('animate-in')
          }, delay)
        })
        // Desconectar el observer después de la primera animación
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  })

  if (featuresSection.value) {
    observer.observe(featuresSection.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Scroll-triggered animations for bento grid */
@keyframes slideUpScale {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(60px) scale(0.8);
  transition: none;
}

.animate-on-scroll.animate-in {
  animation: slideUpScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.gradient-animate {
  background: linear-gradient(45deg, #06D6A0, #048A6A, #05B085, #1AFFB1);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 4s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
