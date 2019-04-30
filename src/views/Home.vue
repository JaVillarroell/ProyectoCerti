<template>
  <div class="home">
    <Calculadora/>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculadora from '@/components/Calculadora.vue'

export default {
  name: 'home',
  components: {
    Calculadora
  }
}
</script>
