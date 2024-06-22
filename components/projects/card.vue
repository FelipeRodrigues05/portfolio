<script setup lang="ts">
const { data }: any = await useFetch(
  "https://api.github.com/users/FelipeRodrigues05/repos"
);

</script>

<template>
  <div class="grid gap-2 max-w-7xl justify-center items-center pt-5 lg:grid-cols-3">
    <div v-for="repository in data" :key="repository.id">
      <a :href="repository.html_url" target="_blank"
        class="block max-w-sm p-6 bg-white border border-neutral-200 rounded-lg shadow hover:bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700">
        <div class="justify-between items-center flex">
          <Icon name="octicon:repo-16" size="24" />
          <h5 class="mb-2 text-2xl text-wrap font-bold tracking-tight text-neutral-900 dark:text-white">
            {{ repository.name }}
          </h5>
          <Icon name="material-symbols:link" size="24" />
        </div>
        <p class="font-normal text-neutral-700 dark:text-neutral-400 mt-5">
          <span v-if="repository.language !== null"
            class="bg-purple-900 text-purple-300 font-medium text-xs me-2 px-2.5 py-0.5 rounded">
            {{ repository.language }}
          </span>
          <span v-else class="bg-purple-900 text-purple-300 font-medium text-xs me-2 px-2.5 py-0.5 rounded">
            N\A
          </span>
        </p>
      </a>
    </div>
  </div>
</template>
