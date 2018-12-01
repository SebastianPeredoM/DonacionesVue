<template>
  <div>
    
    <hello-metamask/>
  </div>
</template>

<script>
import HelloMetamask from '@/components/hello-metamask'
import PublicacionComponent from '@/components/publicacion-component'
export default {
  name: "donacion-dapp",
  beforeCreate() {
    console.log("registerWeb3 Action dispatched from casino-dapp.vue");
    this.$store.dispatch("registerWeb3");
  },
  components: {
    'hello-metamask': HelloMetamask,
    'publicacion-component': PublicacionComponent
  }
};
</script>
<style scoped>
</style>