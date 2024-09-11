<template>
  <v-app dark>
    <div>
      <v-header>
        About us
      </v-header>
      <v-header>

      </v-header>
      <v-header>
        <v-stepper v-model="e1">
    <v-stepper-header class=" ">
      <v-divider style="border:solid 5px; margin-left:87px"></v-divider>
      <v-stepper-step 
        :complete="e1 > 1"
        step="1" class="pa-0 active-step">
      <v-divider></v-divider>
      </v-stepper-step>

      <v-divider style="border:solid 5px"></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2" class="pa-0" :class="e1 >=2 ? 'active-step' : 'inactive-step' ">
      </v-stepper-step>

      <v-divider style="border:solid 5px"></v-divider>

      <v-stepper-step :complete="e1 > 3"
        step="3" class="pa-0" :class="e1 >=3 ? 'active-step' : 'inactive-step' ">
      </v-stepper-step>
      <v-divider style="border:solid 5px"></v-divider>
      <v-stepper-step 
        step="4" class="pa-0" :class="e1 >=4 ? 'active-step' : 'inactive-step'" style="margin-right:87px">
      </v-stepper-step>
    </v-stepper-header>
        </v-stepper>
      </v-header>
    </div>
  
    <v-main>
      <v-container>
        <step1>
          
        </step1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>
<style lang="scss" scoped>
::v-deep .active-step .v-stepper__step__step {
    color: white; 
    width: 33px; 
    height: 33px; 
    font-size: 20px; 
    background-color: #1a2444 !important;
}

::v-deep .inactive-step .v-stepper__step__step {
    color: #1a2444; 
    width: 33px; 
    height: 33px; 
    font-size: 20px; 
    background-color: #bcefff !important;
}

</style>