<template>
  <v-app>
    <!-- Initial Header -->
    <div> 
      <!-- First Header -->
      <header 
        class="v-sheet theme--light elevation-0 v-toolbar v-app-bar mx-0 d-none d-sm-flex" 
        :class="$vuetify.breakpoint.xsOnly ? '' : 'px-sm-5'" 
        style="margin-top: 0px; transform: translateY(0px); left: 0px; right: 0px; border-bottom: 1px solid #8b8b8b !important; background-color: #c4f1ff5f; box-shadow: none;" 
        z-index="1" 
        data-booted="true"
      >
        <v-toolbar style="box-shadow: none;" height="42px" color="transparent">
          <v-spacer></v-spacer>
          <div class="d-flex flex-wrap justify-end align-center">
            <a href="" class="d-flex align-start mx-3 subtitle-2 text-decoration-none black--text cursor-pointer font-weight-normal" > About us</a>
            <a href="" class="d-flex align-start mx-3 subtitle-2 text-decoration-none black--text cursor-pointer font-weight-normal" > Contact us</a>
            <a href="" class="d-flex align-start mx-3 subtitle-2 text-decoration-none black--text cursor-pointer font-weight-normal" > Press kit</a>
            <a href="" class="d-flex align-start mx-3 subtitle-2 text-decoration-none black--text cursor-pointer font-weight-normal" > Lakes</a>
            <a href="" class="d-flex align-start mx-3 subtitle-2 text-decoration-none black--text cursor-pointer font-weight-normal" > Rules</a>
            <a href="" class="d-flex align-start mx-3 subtitle-2 text-decoration-none black--text cursor-pointer font-weight-normal" > Blog</a>
            <a href="" class="d-flex align-start mx-3 subtitle-2 text-decoration-none black--text cursor-pointer font-weight-normal" > Hosting</a>
            <a href="" class="d-flex align-start mx-3 subtitle-2 text-decoration-none black--text cursor-pointer font-weight-normal" > Become a franchisee</a>
            <a href="" class="d-flex align-start mx-3 subtitle-2 text-decoration-none black--text cursor-pointer font-weight-normal" > French</a>
          </div>
        </v-toolbar>
      </header>

      <!-- Second Header -->
      <header 
        class="px-0 v-sheet theme--light elevation-0 v-toolbar v-app-bar pt-sm-2 " 
        style="transform: translateY(0px); left: 0px; right: 0px; box-shadow: none; background:#c4f1ff5f;" 
        data-booted="true" 
      >
        <v-toolbar 
          style="box-shadow: none !important;" 
          :height="$vuetify.breakpoint.xsOnly ? '50px' : '80px'" 
          color="transparent"
        >

        <!-- Setup two images for xsOnly and the other screenWidth -->
          <a href="" class="ml-n1 ml-sm-2 ml-md-4 mr-0 mb-sm-3">
            <v-img style="height: 40px; max-width: 500px;" src="https://app.navigo.club/_nuxt/img/logo_mobile.b5097fc.svg" class="d-none d-sm-flex">
             
            </v-img>
            <v-img style="width: 49%; height: fit-content;" src="https://app.navigo.club/_nuxt/img/logo_mobile.b5097fc.svg" class="d-flex d-sm-none">

            </v-img>
          </a> 
          <div class="d-flex flex-column flex-wrap flex-grow-1">
            <div class="d-flex align-start mx-3">
              <div class="d-flex align-center" :class="$vuetify.breakpoint.mdAndUp ? 'text-no-wrap' : 'text-wrap'">
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none d-none d-sm-flex"> Subscriptions</a>
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none d-none d-sm-flex"> Advantages</a>
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none d-none d-sm-flex"> Functioning</a>
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none d-none d-sm-flex"> The boats</a>
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none d-none d-sm-flex"> Boating License</a>
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none d-none d-sm-flex"> Pricing</a>
              </div>
            </div>
          </div>
          
          <!-- Button -->
          <div class="d-flex flex-column flex-wrap flex-grow-1 d-sm-none d-md-flex">
            <div class="d-flex align-start mx-0">
              <div class="d-flex align-center"></div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-end align-center mr-3 flex-grow-1 d-none d-sm-flex">
                  <a href="" class="v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--light v-size--x-large primary d-none d-sm-flex d-md-flex">
                    <span class="black--text font-weight-light">RENT A BOAT</span>
                  </a>
              </div>
            </div>
          </div>
        </v-toolbar>
      </header>
    </div>
    <v-main style="padding: 0px 0px 0px; position: relative; ">
      <v-container class="container--fluid fill-height pa-0">
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
      e1: 1,
    }
  },
}
</script>


