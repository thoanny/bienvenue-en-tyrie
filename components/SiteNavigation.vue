<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const handleMenuOpen = () => {
  menuOpen.value = !menuOpen.value;
};

const handleLinkMenuOpen = () => {
  if (!menuOpen.value) return;
  menuOpen.value = !menuOpen.value;
};

useHead({
  bodyAttrs: {
    class: computed(() => {
      return menuOpen.value ? 'menu-open' : '';
    }),
  },
});
</script>

<template>
  <div>
    <div
      class="bg-neutral text-white flex justify-between items-center h-16 px-4 block lg:hidden fixed top-0 z-50 w-full border-b border-base-100"
    >
      <button class="btn btn-square btn-ghost" @click="handleMenuOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <NuxtLink
        to="/"
        class="text-base sm:text-lg leading-4 font-bold mx-4 flex gap-2 items-center hover:text-gray-300 py-2 md:py-0"
      >
        <img src="@/assets/img/logo.png" class="h-10 w-10" />
        Bienvenue en Tyrie
      </NuxtLink>
      <div class="w-12"></div>
    </div>

    <div
      class="bg-neutral fixed top-0 left-0 z-40 w-full sm:w-80 h-screen transition-transform lg:translate-x-0 pt-16 lg:pt-0"
      :class="{ '-translate-x-0': menuOpen, '-translate-x-full': !menuOpen }"
      aria-label="Sidebar"
    >
      <nav id="menu" class="h-full overflow-y-auto">
        <div
          class="text-white justify-between items-center h-16 hidden lg:flex border-b border-base-100"
        >
          <NuxtLink
            to="/"
            class="text-lg leading-4 font-bold mx-4 flex gap-2 items-center hover:text-gray-300 py-2 md:py-0"
          >
            <img src="@/assets/img/logo.png" class="h-10 w-10" />
            Bienvenue en Tyrie
          </NuxtLink>
        </div>
        <ContentNavigation v-slot="{ navigation }">
          <ul class="menu w-full">
            <li v-for="link of navigation" :key="link._path">
              <details v-if="link.children && link.children.length > 1">
                <summary>{{ link.title }}</summary>
                <ul>
                  <li v-for="child in link.children" :key="child._path">
                    <NuxtLink :to="child._path" @click="handleLinkMenuOpen">{{
                      child.title
                    }}</NuxtLink>
                  </li>
                </ul>
              </details>
              <NuxtLink :to="link._path" @click="handleLinkMenuOpen" v-else>{{
                link.title
              }}</NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
        <hr class="border-base-100" />
        <ul class="menu w-full">
          <li>
            <a href="/#contribuer">Contribuer au contenu</a>
          </li>
          <li>
            <a href="https://github.com/thoanny/bienvenue-en-tyrie" target="_blank">
              Code source du projet
            </a>
          </li>
          <li>
            <a href="https://www.patreon.com/thoanny" target="_blank"> Soutenir sur Patreon </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
