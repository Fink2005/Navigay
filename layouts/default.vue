<template>
  <v-app>
    <div>
      <v-header class="v-sheet theme--light elevation-0 v-toolbar v-app-bar main-background mx-0" style="height: 42px; margin-top: 0px; transform: translateY(0px); left: 0px; right: 0px; border-bottom: 1px solid #8b8b8b !important; position: absolute; box-shadow: none;" z-index="1" data-booted="true" color="#c4f1ff5f">
        <v-toolbar style="height: 42px; box-shadow: none;" >
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
      </v-header>

      <v-header class="px-0 v-sheet theme--light elevation-0 v-toolbar v-app-bar pt-sm-2 main-background" style="height: 80px; margin-top: 42px; transform: translateY(0px); left: 0px; right: 0px; position: absolute; box-shadow: none;" data-booted="true">
        <v-toolbar style="height: 80px; box-shadow: none;">
          <a href="" class="ml-n1 ml-sm-2 ml-md-4 mr-0 mb-sm-3">
            <v-img style="height: 40px; max-width: 500px;">
              <img src="https://app.navigo.club/_nuxt/img/logo_mobile.b5097fc.svg" alt="" style="background-position: center;">
            </v-img>
          </a> 
          <div class="d-flex flex-column flex-wrap flex-grow-1">
            <div class="d-flex align-start mx-3">
              <div class="d-flex align-center">
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none"> Subscriptions</a>
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none"> Advantages</a>
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none"> Functioning</a>
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none"> The boats</a>
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none"> Boating License</a>
                <a href="" class="mx-2 subtitle-2 font-weight-bold cursor-pointer black--text text-decoration-none"> Pricing</a>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column flex-wrap flex-grow-1">
            <div class="d-flex align-start mx-0">
              <div class="d-flex align-center"></div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-end align-center mr-3 flex-grow-1">
                  <a href="" class="v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--light v-size--x-large primary">
                    <span>RENT A BOAT</span>
                  </a>
              </div>
            </div>
          </div>
        </v-toolbar>
      </v-header>
    </div>
    <v-main style="padding: 0px 0px 0px; position: relative; margin-top: 122px;">
      <v-container class="container--fluid fill-height">
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


