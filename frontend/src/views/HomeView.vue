<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative px-6 py-12 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <!-- Left Content -->
        <div class="space-y-6 animate-fade-in-up">
          <!-- Main Heading -->
          <div class="space-y-3 animate-fade-in-up animation-delay-100">
            <h1 class="text-4xl lg:text-5xl font-bold font-satoshi text-text leading-tight">
              Aprende y enseña
              <span class="text-lumo">sin límites</span>
            </h1>
            <p class="text-lg text-text/70 font-inter leading-relaxed animate-fade-in-up animation-delay-200">
              Conecta con profesores expertos o comparte tu conocimiento. 
              Lumo es la plataforma que revoluciona la educación online con 
              videollamadas, tareas, chat y seguimiento personalizado.
            </p>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 animate-fade-in-up animation-delay-300">
            <button class="inline-flex items-center justify-center px-6 py-3 bg-lumo text-white rounded-xl hover:bg-lumo/90 transition-all font-inter font-semibold group">
              Comenzar como Estudiante
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Right Image Area -->
        <div class="relative animate-fade-in-right animation-delay-400">
          <!-- Background Decorative Cubes -->
          <div class="absolute -top-8 -left-8 w-16 h-16 bg-lumo/20 rounded-lg transform rotate-12 animate-bounce-in animation-delay-800"></div>
          <div class="absolute -bottom-6 -right-6 w-12 h-12 bg-lumo/30 rounded-lg transform -rotate-12 animate-bounce-in animation-delay-900"></div>
          <div class="absolute top-1/2 -left-4 w-8 h-8 bg-lumo/15 rounded-lg animate-bounce-in animation-delay-1000"></div>
          
          <!-- Main Image -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 animate-scale-in animation-delay-500">
            <img 
              src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Estudiante aprendiendo online"
              class="w-full h-[400px] object-cover"
            />
          </div>
          
          <!-- Floating Cards -->
          <!-- Achievement Card -->
          <div class="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg p-3 border border-gray-100 animate-slide-in-right animation-delay-600">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-lumo/10 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-lumo" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-text">¡Objetivo logrado!</p>
                <p class="text-xs text-text/60">Progreso: 85%</p>
              </div>
            </div>
          </div>
          
          <!-- Live Class Card -->
          <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-3 border border-gray-100 animate-slide-in-left animation-delay-700">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-lumo rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-text">Clase en vivo</p>
                <p class="text-xs text-lumo font-medium">Matemáticas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Bento Grid -->
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
  </div>
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
/* Animation Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9) rotate(5deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(2deg);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

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

/* Animation Classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
  opacity: 0;
}

.animate-scale-in {
  animation: scaleIn 1s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.animate-bounce-in {
  animation: bounceIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(60px) scale(0.8);
  transition: none;
}

.animate-on-scroll.animate-in {
  animation: slideUpScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Animation Delays */
.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-700 {
  animation-delay: 0.7s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-900 {
  animation-delay: 0.9s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

/* Additional styles for new components */
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