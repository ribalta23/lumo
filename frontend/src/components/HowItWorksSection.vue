<template>
  <section id="how-it-works" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-satoshi font-bold text-text mb-4">¿Cómo funciona Lumo?</h2>
        <p class="text-xl text-text/70 max-w-2xl mx-auto">
          Tres pasos simples para comenzar tu experiencia educativa
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Paso 1: Encuentra tu profesor -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gradient-to-br from-lumo to-lumo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-lg card-hover border border-lumo/10">
            <h3 class="text-2xl font-satoshi font-bold text-text mb-4">1. Encuentra tu profesor</h3>
            <p class="text-text/70">
              Busca entre miles de profesores expertos en tu materia favorita. 
              Filtra por precio, horario y especialidad.
            </p>
          </div>
        </div>

        <!-- Paso 2: Agenda tu clase -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gradient-to-br from-lumo-500 to-lumo-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-lg card-hover border border-lumo/10">
            <h3 class="text-2xl font-satoshi font-bold text-text mb-4">2. Agenda tu clase</h3>
            <p class="text-text/70">
              Elige el horario que mejor se adapte a ti. Sistema de recordatorios 
              automáticos y fácil reprogramación.
            </p>
          </div>
        </div>

        <!-- Paso 3: Aprende y crece -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gradient-to-br from-lumo-400 to-lumo-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-lg card-hover border border-lumo/10">
            <h3 class="text-2xl font-satoshi font-bold text-text mb-4">3. Aprende y crece</h3>
            <p class="text-text/70">
              Participa en clases interactivas, recibe tareas personalizadas 
              y sigue tu progreso en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
