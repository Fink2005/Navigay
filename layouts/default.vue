<template>
  <v-app dark>

    <div style="background-color: rgba(196, 241, 255, .373);">
      <div class="d-sm-flex d-none flex-column">
        <v-toolbar flat dense height="42px" color="transparent">
        <v-toolbar-items class="layout wrap justify-end align-center mr-3">
          <a :href=item.link class="mx-3 subtitle-2 text-decoration-none cursor-pointer" v-for="item in navLinks">{{ item.text }}</a>
          <div class="mx-3 subtitle-2 cursor-pointer">French</div>
        </v-toolbar-items>
        </v-toolbar>
        <v-divider color="#8b8b8b"></v-divider>
      </div>
      <div class="justify-space-between mt-sm-6 mb-sm-4 d-sm-flex d-none">
        <v-toolbar flat dense color="transparent">
          <v-toolbar-items class="d-flex align-center">
            <a href="/" class="ml-n1 ml-sm-2 ml-md-4 mr-3 mb-sm-3"><v-img :src="require('assets/logo.svg')" height="40px" max-width="500px"></v-img></a>  
            <a :href=item.link class="mx-2 subtitle-2 font-weight-bold cursor-pointer text-decoration-none" v-for="item in menuLinks">{{ item.text }}</a>
          </v-toolbar-items> 
        </v-toolbar>
        <v-btn color="#1976d2" rounded x-large class="mr-6 d-md-flex d-none">rent a boat</v-btn> 
      </div>
    </div>
    
    <v-main style="background-color: rgba(196, 241, 255, .373);">
      <Nuxt />
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      navLinks : [
        {link: 'https://navigo.club/en/about-us', text: 'About us'},
        {link: 'https://navigo.club/en/contact-us', text: 'Contact us'},
        {link: 'https://navigo.club/en/press-kit', text: 'Press kit'},
        {link: 'https://navigo.club/en/lakes', text: 'Lakes'},
        {link: 'https://navigo.club/en/rules', text: 'Rules'},
        {link: 'https://navigo.club/en/blog', text: 'Blog'},
        {link: 'https://3ours.ca/en', text: 'Hosting'},
        {link: 'https://navigo.club/en/franchisee', text: 'Become a franchisee'},
      ],
      menuLinks : [
        {link: '/subscription', text: 'Subcriptions'},
        {link: 'https://navigo.club/en#advantages', text: 'Advantages'},
        {link: 'https://navigo.club/en#', text: 'Functioning'},
        {link: 'https://navigo.club/en/the-boats', text: 'The boats'},
        {link: 'https://navigo.club/en#', text: 'Boating Licence'},
        {link: '/pricing', text: 'Pricing'}
      ]
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