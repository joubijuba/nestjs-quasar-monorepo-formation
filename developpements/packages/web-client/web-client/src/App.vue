<template>
  <q-spinner v-if="isLoading"
             :thickness="3"
             class="poc-spinner"
             color="primary"
             size="100px" />
  <router-view />
</template>
<script lang="ts">
import { useStore } from 'src/store'
import {
  computed,
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'Formation - Nest.js, Quasar, Prisma',
  setup () {
    const store = useStore()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    const isLoading = computed(() => store.getters['spinner/isLoading'])

    return {
      isLoading
    }
  }
})
</script>
