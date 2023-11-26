<template>
  <div class="container mx-auto my-6">
    <div class="navbar bg-base-100 shadow-lg rounded-box mb-6">
      <div class="flex-1">
        <NuxtLink to="/" class="btn btn-ghost text-xl">Bienvenue en Tyrie</NuxtLink>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Contribuer</a></li>
          <li><a>Source</a></li>
          <li><a>Soutenir</a></li>
        </ul>
      </div>
    </div>

    <ContentDoc v-slot="{ doc }">
      <div class="hero rounded-box overflow-hidden mb-6 h-screen max-h-72 shadow-lg"
        style="background-image: url(https://picsum.photos/1600/300);">
        <div class="hero-overlay bg-opacity-80"></div>
        <div class="hero-content text-center text-white py-12 px-24">
          <div class="text-4xl font-bold leading-10 uppercase">{{ (doc.heroTitle) ? doc.heroTitle : doc.title }}</div>
        </div>
      </div>
    </ContentDoc>

    <div class="flex gap-6 flex-col md:flex-row">
      <div class="sm:w-full md:w-1/5">
        <nav class="md:sticky top-4">
          <ContentNavigation v-slot="{ navigation }">
            <ul class="menu menu-sm bg-base-200 w-full rounded-lg">
              <li v-for="link of navigation" :key="link._path">
                <details v-if="link.children">
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
          </div>
        </div>
        <div class="w-1/5 hidden md:block">
          <nav v-if="doc.body?.toc?.links.length" class="sticky top-4">
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
