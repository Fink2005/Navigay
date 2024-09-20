<template>
    <div height="100%">
      <v-stepper v-model="e1" height="100%" width="100%">
        <v-stepper-header class="">
          <v-divider style="border:solid 5px; margin-left:87px"></v-divider>
            <v-stepper-step 
            :complete="e1 > 1"
            step="1" class="pa-0 active-step">
          </v-stepper-step>
          <v-divider style="border:solid 5px"></v-divider>
            <v-stepper-step
            :complete="e1 > 2"
            step="2" class="pa-0 inactive-step" :class="e1 >=2 ? 'active-step' : 'inactive-step' ">
            </v-stepper-step>
          <v-divider style="border:solid 5px"></v-divider>
        <v-stepper-step :complete="e1 > 3"
          step="3" class="pa-0 inactive-step" :class="e1 >=3 ? 'active-step' : 'inactive-step' ">
        </v-stepper-step>
          <v-divider style="border:solid 5px"></v-divider>
            <v-stepper-step 
              step="4" class="pa-0 inactive-step" :class="e1 >=4 ? 'active-step' : 'inactive-step'" style="margin-right:87px">
        </v-stepper-step>
  </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content class="" height="1000" step="1">
        <v-card min-height="1000">
          <Step1>
          </Step1>
        </v-card>
      </v-stepper-content height="1000" >
      <v-stepper-content step="2">
            <Step2>
            </Step2>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
      
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