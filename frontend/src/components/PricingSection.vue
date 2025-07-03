<template>
  <section id="pricing" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-satoshi font-bold text-text mb-4">Planes para cada necesidad</h2>
        <p class="text-xl text-text/70">Elige el plan que mejor se adapte a tus objetivos educativos</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Basic Plan -->
        <div class="bg-gray-50 p-8 rounded-3xl shadow-lg card-hover border border-lumo/10">
          <div class="text-center">
            <h3 class="text-2xl font-satoshi font-bold text-text mb-2">Básico</h3>
            <p class="text-text/70 mb-6">Perfecto para empezar</p>
            <div class="mb-8">
              <span class="text-4xl font-satoshi font-bold text-text">$19</span>
              <span class="text-text/70">/mes</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-text/70">5 horas de clases</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-text/70">Chat básico</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-text/70">Tareas simples</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-text/70">Soporte por email</span>
              </li>
            </ul>
            <button class="w-full bg-text text-white py-3 rounded-xl hover:bg-text/80 transition-colors font-semibold">
              Comenzar ahora
            </button>
          </div>
        </div>

        <!-- Pro Plan -->
        <div class="bg-gradient-to-br from-lumo to-lumo-700 p-8 rounded-3xl shadow-xl transform scale-105 relative">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-text px-4 py-1 rounded-full text-sm font-semibold">
            Más popular
          </div>
          <div class="text-center">
            <h3 class="text-2xl font-satoshi font-bold text-white mb-2">Pro</h3>
            <p class="text-white/80 mb-6">Para estudiantes serios</p>
            <div class="mb-8">
              <span class="text-4xl font-satoshi font-bold text-white">$49</span>
              <span class="text-white/80">/mes</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-white">20 horas de clases</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-white">Chat avanzado + archivos</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-white">Tareas y evaluaciones</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-white">Soporte prioritario</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-white">Grabación de clases</span>
              </li>
            </ul>
            <button class="w-full bg-white text-lumo py-3 rounded-xl hover:bg-gray-50 transition-colors font-semibold">
              Comenzar ahora
            </button>
          </div>
        </div>

        <!-- Premium Plan -->
        <div class="bg-gray-50 p-8 rounded-3xl shadow-lg card-hover border border-lumo/10">
          <div class="text-center">
            <h3 class="text-2xl font-satoshi font-bold text-text mb-2">Premium</h3>
            <p class="text-text/70 mb-6">Sin límites</p>
            <div class="mb-8">
              <span class="text-4xl font-satoshi font-bold text-text">$99</span>
              <span class="text-text/70">/mes</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-text/70">Clases ilimitadas</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-text/70">Todas las funciones</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-text/70">Análisis avanzado</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-text/70">Soporte 24/7</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-text/70">Sesiones grupales</span>
              </li>
            </ul>
            <button class="w-full bg-gradient-to-r from-lumo to-lumo-700 text-white py-3 rounded-xl hover:shadow-lg hover:shadow-lumo/25 transition-all font-semibold">
              Comenzar ahora
            </button>
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
