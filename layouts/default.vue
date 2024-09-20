<template>
  <v-app dark>
    <div>
      <v-header>
        About us
      </v-header>
      <v-header>
      </v-header>
    </div>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Step1 from '../components/step1.vue';
import Step2 from '../components/step2.vue';

  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>

</style>