<script setup>
const { surround } = useContent();
</script>

<template>
  <header class="bg-primary overflow-hidden relative" style="height: 600px;">
    <div class="bg-black text-white flex justify-between items-center">
      <NuxtLink to="/" class="text-lg leading-4 font-bold mx-4 flex gap-2 items-center hover:text-gray-300 py-2 md:py-0">
        <img src="@/assets/img/logo.png" class="h-10 w-10" />
        Bienvenue en Tyrie
      </NuxtLink>
      <ul class="menu menu-horizontal px-1 uppercase text-gray-500 font-semibold hidden md:flex">
        <li>
          <a href="/#contribuer">Contribuer</a>
        </li>
        <li>
          <a href="/#code-source">Source</a>
        </li>
        <li><a>Soutenir</a></li>
      </ul>
    </div>
    <img src="@/assets/img/background-default.jpg" class="absolute h-full w-full object-cover object-center z-10" alt="">
    <ContentDoc v-slot="{ doc }">
      <div
        class="bg-black h-full w-full bg-opacity-50 absolute z-20 text-center uppercase text-4xl flex items-center justify-center text-center text-white font-bold pb-44 px-8">
        {{ (doc.heroTitle) ? doc.heroTitle : doc.title }}
      </div>
    </ContentDoc>
    <Divider />
  </header>

  <div class="container mx-auto mb-6">

    <div class="flex gap-6 flex-col md:flex-row">
      <div class="sm:w-full md:w-1/5">
        <nav class="md:sticky top-4" id="menu">
          <ContentNavigation v-slot="{ navigation }">
            <ul class="menu menu-sm bg-base-200 w-full rounded-lg">
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
        </nav>
      </div>

      <ContentDoc v-slot="{ doc }">
        <div class="flex-1">
          <div v-if="doc">
            <!-- <pre>{{ doc }}</pre> -->
            <article class="prose lg:prose-xl p-4 md:p-0">
              <ContentRenderer :value="doc" />
            </article>
            <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-12 opacity-50" v-if="doc.contributors">
              <strong class="text-xs">Contributeurs&nbsp;:</strong>
              <span class="badge badge-sm badge-neutral" v-for="c in doc.contributors">{{ c }}</span>
            </div>
            <div v-if="surround" class="flex gap-4 font-semibold mt-6">
              <NuxtLink :to="surround[0]._path" v-if="surround[0]" class="border p-4 w-1/2">
                &laquo; {{ surround[0].heroTitle || surround[0].title }}
              </NuxtLink>
              <span class="w-1/2" v-else></span>
              <NuxtLink :to="surround[1]._path" v-if="surround[1]" class="border p-4 w-1/2 text-right">
                {{ surround[1].heroTitle || surround[1].title }} &raquo;
              </NuxtLink>
              <span class="w-1/2" v-else></span>
            </div>
          </div>
        </div>
        <div class="w-1/5 hidden md:block" v-if="doc.body?.toc?.links.length">
          <nav class="sticky top-4">
            <ul class="menu menu-sm border w-full rounded-lg">
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
</template>
