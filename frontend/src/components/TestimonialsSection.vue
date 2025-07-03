<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-satoshi font-bold text-text mb-4">Lo que dicen nuestros usuarios</h2>
        <p class="text-xl text-text/70">Miles de estudiantes y profesores confían en Lumo</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-3xl card-hover border border-lumo/10">
          <div class="flex items-center mb-4">
            <svg v-for="star in 5" :key="star" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <p class="text-text/70 mb-6 text-lg">
            "Lumo cambió completamente mi forma de enseñar. Las herramientas son increíbles 
            y mis estudiantes están más comprometidos que nunca."
          </p>
          <div class="flex items-center">
            <img 
              src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Profesor"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p class="font-semibold text-text">Ana García</p>
              <p class="text-text/70">Profesora de Matemáticas</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-3xl card-hover border border-lumo/10">
          <div class="flex items-center mb-4">
            <svg v-for="star in 5" :key="star" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <p class="text-text/70 mb-6 text-lg">
            "Encontré el profesor perfecto para mi hijo. Las clases son divertidas 
            y su rendimiento ha mejorado muchísimo."
          </p>
          <div class="flex items-center">
            <img 
              src="https://images.pexels.com/photos/3184636/pexels-photo-3184636.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Madre"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p class="font-semibold text-text">María López</p>
              <p class="text-text/70">Madre de estudiante</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-3xl card-hover border border-lumo/10">
          <div class="flex items-center mb-4">
            <svg v-for="star in 5" :key="star" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <p class="text-text/70 mb-6 text-lg">
            "La plataforma es súper fácil de usar. Pude mejorar mi inglés rápidamente 
            con clases personalizadas y profesores nativos."
          </p>
          <div class="flex items-center">
            <img 
              src="https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Estudiante"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p class="font-semibold text-text">Carlos Mendez</p>
              <p class="text-text/70">Estudiante universitario</p>
            </div>
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
