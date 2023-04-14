<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
            aria-label="Menu"
            dense
            flat
            icon="menu"
            round
            @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Iorga - Formation Nest.js, Quasar, Prisma
        </q-toolbar-title>

        <div>v0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        bordered
        show-if-above
    >
      <q-list>
        <q-expansion-item
            caption="Liens intéressants"
            default-close
            group="menu"
            header-class="text-primary"
            icon="link"
            label="Framework Quasar"
        >
          <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
          />
        </q-expansion-item>

        <q-expansion-item
            caption="Nest.js, Quasar, Prisma"
            default-opened
            group="menu"
            icon="tablet"
            label="Iorga - Formation"
        >
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
import {
  defineComponent,
  ref
} from 'vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
