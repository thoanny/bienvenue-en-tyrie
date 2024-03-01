<script setup>
const { surround } = useContent();
</script>

<template>
  <div>
    <button
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span>Open sidebar</span>
    </button>

    <div
      class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <nav id="menu" class="h-full overflow-y-auto bg-base-200">
        <div class="bg-accent-content text-white flex justify-between items-center h-16">
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
                    <NuxtLink :to="child._path">{{ child.title }}</NuxtLink>
                  </li>
                </ul>
              </details>
              <NuxtLink :to="link._path" v-else>{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
        <hr />
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

    <div class="sm:ml-80 bg-base-100">
      <header class="bg-base-100 overflow-hidden relative" style="height: 600px">
        <img
          src="@/assets/img/background-default.jpg"
          class="absolute h-full w-full object-cover object-center z-10"
          alt=""
        />
        <ContentDoc v-slot="{ doc }">
          <div
            class="bg-black h-full w-full bg-opacity-50 absolute z-20 text-center uppercase text-4xl flex items-center justify-center text-center text-white font-bold pb-44 px-8"
          >
            {{ doc.heroTitle ? doc.heroTitle : doc.title }}
          </div>
        </ContentDoc>
        <Divider />
      </header>
      <div class="max-w-5xl mx-auto mb-6">
        <div class="flex gap-6 flex-col md:flex-row">
          <ContentDoc v-slot="{ doc }">
            <div class="flex-1">
              <div v-if="doc">
                <!-- <pre>{{ doc }}</pre> -->
                <article class="prose lg:prose-xl p-4 md:p-0">
                  <NuxtPage />
                </article>
                <div
                  class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-12 opacity-50 px-4 md:px-0"
                  v-if="doc.contributors"
                >
                  <strong class="text-xs">Contributeurs&nbsp;:</strong>
                  <span
                    class="badge badge-sm badge-neutral"
                    v-for="contributor in doc.contributors"
                  >
                    {{ contributor }}
                  </span>
                </div>
                <div v-if="surround" class="flex gap-4 font-semibold mt-6 px-4 md:px-0">
                  <NuxtLink
                    :to="surround[0]._path"
                    v-if="surround[0]"
                    class="border border-base-300 hover:bg-base-200 p-4 w-1/2 flex gap-1 rounded-box"
                  >
                    &laquo;
                    <span class="truncate">{{ surround[0].heroTitle || surround[0].title }}</span>
                  </NuxtLink>
                  <span class="w-1/2" v-else></span>
                  <NuxtLink
                    :to="surround[1]._path"
                    v-if="surround[1]"
                    class="border border-base-300 hover:bg-base-200 p-4 w-1/2 flex justify-end rounded-box gap-1"
                  >
                    <span class="truncate">{{ surround[1].heroTitle || surround[1].title }}</span>
                    &raquo;
                  </NuxtLink>
                  <span class="w-1/2" v-else></span>
                </div>
              </div>
            </div>
            <div class="w-1/4 hidden md:block" v-if="doc.body?.toc?.links.length">
              <nav class="sticky top-4">
                <ul class="menu menu-sm border border-base-300 w-full rounded-box">
                  <li v-for="link in doc.body.toc.links">
                    <a :href="'#' + link.id">{{ link.text }}</a>
                    <ul v-if="link.children">
                      <li v-for="child in link.children">
                        <a :href="'#' + child.id">{{ child.text }}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </ContentDoc>
        </div>
      </div>
    </div>
  </div>
</template>
