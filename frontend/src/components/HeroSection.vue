<template>
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
</template>

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
</style>
