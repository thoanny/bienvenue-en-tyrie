<script setup>
const { surround } = useContent();
</script>

<template>
  <div>
    <SiteNavigation />

    <div class="lg:ml-80 bg-base-100 mt-16 lg:mt-0">
      <header class="bg-base-100 overflow-hidden relative" style="height: 600px">
        <ContentDoc v-slot="{ doc }">
          <img
            :src="`/img/header/${doc.image}`"
            class="absolute h-full w-full object-cover object-center z-10"
            alt=""
            v-if="doc.image"
          />
          <img
            src="@/assets/img/background-default.jpg"
            class="absolute h-full w-full object-cover object-center z-10"
            alt=""
            v-else
          />
          <div
            class="bg-black h-full w-full bg-opacity-50 absolute z-20 text-center uppercase text-4xl flex items-center justify-center text-center text-white font-bold pb-36 px-8"
          >
            <h1 class="drop-shadow-lg">{{ doc.heroTitle ? doc.heroTitle : doc.title }}</h1>
          </div>
        </ContentDoc>
        <Divider />
      </header>
      <div class="max-w-5xl mx-auto mb-6">
        <div class="flex gap-6 flex-col md:flex-row px-4">
          <ContentDoc v-slot="{ doc }">
            <div class="flex-1">
              <div v-if="doc">
                <!-- <pre>{{ doc }}</pre> -->
                <article class="prose lg:prose-xl">
                  <NuxtPage />
                </article>
                <div
                  class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-12 opacity-50"
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
                <div v-if="surround" class="flex gap-4 font-semibold mt-6">
                  <NuxtLink
                    :to="surround[0]._path"
                    v-if="surround[0]"
                    class="border border-neutral hover:bg-neutral p-4 w-1/2 flex gap-1 rounded-box"
                  >
                    &laquo;
                    <span class="truncate">{{ surround[0].heroTitle || surround[0].title }}</span>
                  </NuxtLink>
                  <span class="w-1/2" v-else></span>
                  <NuxtLink
                    :to="surround[1]._path"
                    v-if="surround[1]"
                    class="border border-neutral hover:bg-neutral p-4 w-1/2 flex justify-end rounded-box gap-1"
                  >
                    <span class="truncate">{{ surround[1].heroTitle || surround[1].title }}</span>
                    &raquo;
                  </NuxtLink>
                  <span class="w-1/2" v-else></span>
                </div>
              </div>
            </div>
            <div class="w-1/4 hidden md:block" v-if="doc.body?.toc?.links.length">
              <nav class="sticky top-20 lg:top-4">
                <ul class="menu menu-sm w-full rounded-box bg-neutral">
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

        <footer class="footer p-4 text-base-content text-xs mt-6 opacity-50">
          <aside>
            <p>
              © ArenaNet, Inc. Tous droits réservés. Guild Wars 2, ArenaNet, NCsoft, le logo NC et
              tous les logos et dessins associés sont les marques commerciales et/ou déposées de
              NCsoft Corporation. Toutes les autres marques appartiennent à leurs propriétaires
              respectifs. Bienvenue en Tyrie est un fansite qui n'engage que ses auteurs et en aucun
              cas les créateurs et éditeurs de Guild Wars 2.
            </p>
          </aside>
        </footer>
      </div>
    </div>
  </div>
</template>
