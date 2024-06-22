<script setup lang="ts"></script>

<template>
  <section id="about" class="bg-neutral-900">
    <div class="flex items-center justify-end lg:flex-col">
      <div class="bg-neutral-900 flex flex-col items-center lg:flex-row">
        <img src="https://github.com/FelipeRodrigues05.png"
          class="rounded-full w-64 h-64 mb-5 ring-2 ring-purple-600 lg:mr-80 lg:w-80 lg:h-80" />
        <div class="flex flex-col max-w-xl mx-5">
          <div class="bg-gradient-to-r from-purple-600 to-indigo-400 inline-block text-transparent bg-clip-text mb-4">
            <p class="text-2xl text-center lg:text-3xl font-bold">Olá! Eu sou o Felipe Rodrigues</p>
          </div>
          <p class="text-justify text-md lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius dictum convallis. Maecenas pretium posuere purus, a tincidunt
            sapien maximus vel. Vivamus eget leo at ante commodo ornare. Mauris
            accumsan eros nunc, eget iaculis quam volutpat vitae. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Vivamus facilisis
            augue ut nulla consectetur, eget accumsan libero cursus. Nullam quis
            mi eu orci volutpat tempor. Quisque non metus quis enim rhoncus
            pulvinar eget vitae purus. Sed sit amet nisi feugiat, euismod neque
            ac, fermentum nunc. Proin ut leo sit amet ante fringilla gravida.
            Sed malesuada ut ante vitae auctor.
          </p>
        </div>
      </div>
    </div>
    <AboutExperience />
  </section>
</template>

<style scoped></style>
