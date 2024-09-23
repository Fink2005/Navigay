<template>
  <v-app dark>
    <div>
      <v-header>
        <v-toolbar outlined class="d-flex wrap justify-end">
          <a href="https://app.econavigo.com/en" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer"> About us</a>
          <a href="https://navigo.club/en/contact-us" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer"> Contact us</a>
          <a href="https://navigo.club/en/press-kit" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Press-kit</a>
          <a href="https://navigo.club/en/lakes" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Lakes</a>
          <a href="https://navigo.club/en/rules" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Rules</a>
          <a href="https://navigo.club/en/blog" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Blog</a>
          <a href="https://3ours.ca/en" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Hosting</a>
          <a href="https://navigo.club/en/franchisee" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Become a franchise</a>
          <div> French 
          </div>
        </v-toolbar>
        <v-toolbar>

        </v-toolbar>
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