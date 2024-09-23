<template>
    <div class="ml-4" height="100%">
      <v-stepper v-model="e1" height="100%" width="100%">
        <v-stepper-header class="" outlined>
          <v-divider class="divider1" ></v-divider>
            <v-stepper-step 
            :complete="e1 > 1"
            step="1" class="num pa-0 font-weight-bold"  >
          </v-stepper-step>
          <v-divider class="divider" :class="e1 >=2 ? 'active' : 'inactive' "></v-divider>
            <v-stepper-step
            :complete="e1 > 2"
            step="2" class="num font-weight-bold pa-0 ">
            </v-stepper-step>
            <v-divider class="divider" :class="e1 >=3 ? 'active' : 'inactive' "></v-divider>
        <v-stepper-step :complete="e1 > 3"
          step="3" class="num font-weight-bold pa-0">
        </v-stepper-step>
        <v-divider class="divider" :class="e1 >=4 ? 'active' : 'inactive' "></v-divider>
            <v-stepper-step 
              step="4" class="num font-weight-bold pa-0" style="margin-right:87px">
            </v-stepper-step>
  </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content class="" height="1000" step="1">
        <v-card min-height="1000">
          <Step1>
          </Step1>
          <div class="2btn" style="margin-top: 100px ;margin-left: 18px;">
        <v-btn
          color="primary"
          @click="e1 = 2"
          class="font-weight-bold mt-5">
          NEXT STEP >
        </v-btn>       
      </div>
        </v-card>
      </v-stepper-content height="1000" >
      <v-stepper-content step="2">
            <Step2>
            </Step2>
            <div class="3btn" style="margin-top: 100px ;margin-left: 18px;">
        <v-btn
          color="primary"
          @click="e1 = 3"
          class="font-weight-bold mt-5">
          NEXT STEP >
        </v-btn>       
      </div>
          </v-stepper-content>
          <v-stepper-content step="3">
            <Step3>
            </Step3>
            <div class="4btn" style="margin-top: 100px ;margin-left: 18px;">
        <v-btn
          color="primary"
          @click="e1 = 4"
          class="font-weight-bold mt-5">
          NEXT STEP >
        </v-btn>       
      </div>
          </v-stepper-content>
          <v-stepper-content step="4">
            <Step4>
            </Step4>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
      
</template>

<script>

import Step1 from '../components/step1.vue';
import Step2 from '../components/step2.vue';
import Step3 from '../components/step3.vue';
import Step4 from '../components/step4.vue';

export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>
<style lang="scss" scoped>
.divider {
  background-color: aqua;
  max-height: 100px;
  height: 10px;
  border: none;
}
::v-deep .v-stepper__step__step {
min-width: 33px;
min-height: 33px;
}
.divider1 {
  background-color: black;
  max-height: 100px;
  height: 10px;
  border: none;
  
}
::v-deep .theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step {
  background: aqua ;
  color: black;
}
::v-deep .theme--light.v-stepper .v-stepper__step__step {
    color: white;
}

::v-deep .v-stepper__step--active .v-stepper__step__step{
  background-color: black !important;
}
::v-deep .theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--error):not(.v-stepper__step--inactive) .v-stepper__step__step {
  background-color: black !important;
}

.inactive {
  background-color: aqua !important;
}

.active {
  background-color: black !important;
}

</style>