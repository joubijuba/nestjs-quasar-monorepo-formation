<template>
hahaha
</template>

<script lang="ts">
import { ProductDto } from 'app/../libs/shared-lib/dist';
import { refsApiService } from 'src/boot/api';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      productsList : [] as ProductDto[]
    }
  },
  mounted (){
    const wd = await refsApiService.
  }
})
</script>
