<script setup lang="ts"></script>

<template>
  <section id="about" class="bg-neutral-900">
    <div class="flex items-center justify-end mr-52">
      <div class="bg-neutral-900 flex flex-row items-center">
        <img
          src="https://github.com/FelipeRodrigues05.png"
          class="rounded-full mr-80 w-80 h-80 ring-2 ring-purple-600"
        />
        <div class="flex flex-col max-w-xl">
          <div
            class="bg-gradient-to-r from-purple-600 to-indigo-400 inline-block text-transparent bg-clip-text mb-4"
          >
            <p class="text-3xl font-bold">Olá! Eu sou o Felipe Rodrigues</p>
          </div>
          <p class="text-justify text-lg">
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
