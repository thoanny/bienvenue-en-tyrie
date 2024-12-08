<template>
  <div class="flex flex-col gap-4 rounded-box bg-neutral py-4 px-5 pb-6 mb-6">
    <div class="slot font-semibold text-white">
      <slot />
    </div>

    <div class="flex gap-4">
      <img src="~/assets/img/blish-hud.png" alt="BlishHUD logo" class="w-20 h-20 shrink-0" />
      <div class="space-y-3">
        <div class="text-lg font-bold">Overlay pour Guild&nbsp;Wars&nbsp;2</div>
        <div>
          Blish&nbsp;HUD est un logiciel tiers que vous installez indépendament de GW2 et qui
          ajoute, par l'intérmédiaire de modules, tout un tas de nouvelles fonctionnalités,
          superposées à votre jeu.
        </div>
        <a href="https://blishhud.com" target="_blank" class="btn btn-sm btn-primary">
          Infos et téléchargement
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z"
            />
            <path
              d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slot :deep(p) {
  margin-bottom: 0;
}
</style>
