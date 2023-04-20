<template>
  <q-page class=" items-center justify-evenly">
    <customer-search-component
        active
        title="Recherche de clients"
    ></customer-search-component>
  </q-page>
</template>

<script lang="ts">
import CustomerSearchComponent from 'components/customerSearchComponent/CustomerSearchComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomerPage',
  components: { CustomerSearchComponent }
})
</script>
