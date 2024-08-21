<template>
  <v-app dark>
    <div>
      <v-toolbar flat dense height="42px">
        <v-toolbar-items class="layout wrap justify-end align-center mr-3">
          <a href="https://navigo.club/en/about-us" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">About us</a>
          <a href="https://navigo.club/en/contact-us" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Contact us</a>
          <a href="https://navigo.club/en/press-kit" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Press kit</a>
          <a href="https://navigo.club/en/lakes" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Lakes</a>
          <a href="https://navigo.club/en/rules" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Rules</a>
          <a href="https://navigo.club/en/blog" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Blog</a>
          <a href="https://3ours.ca/en" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Hosting</a>
          <a href="https://navigo.club/en/franchisee" class="d-flex align-start mx-3 subtitle-2 text-decoration-none cursor-pointer">Become a franchisee</a>
          <div class="d-flex align-start mx-3 subtitle-2 cursor-pointer">French</div>
        </v-toolbar-items>
      </v-toolbar>
      <v-divider color="#8b8b8b"></v-divider>
    </div>
    <div class="d-flex align-center justify-space-between mt-6">
      <v-toolbar flat dense>
        <v-toolbar-items class="d-flex align-center">
          <a href="/" class="ml-n1 ml-sm-2 ml-md-4 mr-3 mb-sm-3"><v-img src="https://rc.navigo.club/_nuxt/img/logo_mobile.b5097fc.svg" height="40px" max-width="500px"></v-img></a>
          <a href="/subscription" class="mx-2 subtitle-2 font-weight-bold cursor-pointer text-decoration-none">Subcriptions</a>
          <a href="https://navigo.club/en#advantages" class="mx-2 subtitle-2 font-weight-bold cursor-pointer text-decoration-none" >Advantages</a>
          <a href="https://navigo.club/en#" class="mx-2 subtitle-2 font-weight-bold cursor-pointer text-decoration-none">Functioning</a>
          <a href="https://navigo.club/en/the-boats" class="mx-2 subtitle-2 font-weight-bold cursor-pointer text-decoration-none">The boats</a>
          <a href="https://navigo.club/en#" class="mx-2 subtitle-2 font-weight-bold cursor-pointer text-decoration-none">Boating Licence</a>
          <a href="/pricing" class="mx-2 subtitle-2 font-weight-bold cursor-pointer text-decoration-none">Pricing</a>
        </v-toolbar-items> 
      </v-toolbar>
      <v-btn color="#1976d2" rounded x-large class="mr-6">rent a boat</v-btn> 
    </div>
    
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .text-decoration-none {
    text-decoration: none;
    color: inherit;
  }
  .cursor-pointer {
    cursor: pointer;
  }
</style>