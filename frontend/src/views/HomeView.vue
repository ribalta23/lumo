<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative px-6 py-16 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center space-x-2 bg-lumo/10 text-lumo px-4 py-2 rounded-full text-sm font-medium">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>Plataforma de tutorías líder</span>
          </div>
          
          <!-- Main Heading -->
          <div class="space-y-4">
            <h1 class="text-5xl lg:text-6xl font-bold font-satoshi text-text leading-tight">
              Aprende y enseña
              <span class="text-lumo">sin límites</span>
            </h1>
            <p class="text-xl text-text/70 font-inter leading-relaxed">
              Conecta con profesores expertos o comparte tu conocimiento. 
              Lumo es la plataforma que revoluciona la educación online con 
              videollamadas, tareas, chat y seguimiento personalizado.
            </p>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="inline-flex items-center justify-center px-8 py-4 bg-lumo text-white rounded-xl hover:bg-lumo/90 transition-all font-inter font-semibold text-lg group">
              Comenzar como Estudiante
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
            <button class="inline-flex items-center justify-center px-8 py-4 border-2 border-lumo text-lumo rounded-xl hover:bg-lumo hover:text-white transition-all font-inter font-semibold text-lg">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Ver Demo
            </button>
          </div>
          
          <!-- Rating -->
          <div class="flex items-center space-x-2">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="text-lg font-bold text-text ml-2">4.9/5</span>
            </div>
            <span class="text-text/60 font-inter">de 10,000+ usuarios</span>
            <div class="flex -space-x-2">
              <div class="w-8 h-8 bg-lumo rounded-full"></div>
              <div class="w-8 h-8 bg-lumo/80 rounded-full"></div>
              <div class="w-8 h-8 bg-lumo/60 rounded-full"></div>
              <div class="w-8 h-8 bg-lumo/40 rounded-full"></div>
              <div class="w-8 h-8 bg-lumo/20 rounded-full flex items-center justify-center text-xs font-semibold text-lumo">
                +5K
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Image Area -->
        <div class="relative">
          <!-- Main Image -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Estudiante aprendiendo online"
              class="w-full h-[600px] object-cover"
            />
          </div>
          
          <!-- Floating Cards -->
          <!-- Achievement Card -->
          <div class="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-lumo/10 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-lumo" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-text">¡Objetivo logrado!</p>
                <p class="text-xs text-text/60">Progreso: 85%</p>
              </div>
            </div>
          </div>
          
          <!-- Live Class Card -->
          <div class="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-lumo rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-text">Clase en vivo</p>
                <p class="text-xs text-lumo font-medium">Matemáticas - Nivel Avanzado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add any specific animations or styles if needed */
</style>