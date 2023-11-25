<template>
  <div class="container mx-auto my-6">
    <NuxtPage />
    <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      <li>
        <NuxtLink :to="{ name: 'index' }">Accueil</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'about' }">Qui sommes-nous ?</NuxtLink>
      </li>
    </ul>
  </div>
</template>
