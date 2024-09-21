<template>
    <div height="100%">
      <v-stepper v-model="e1" height="100%" width="100%">
        <v-stepper-header class="">
          <v-divider class="divider1" ></v-divider>
            <v-stepper-step 
            :complete="e1 > 1"
            step="1" class="pa-0 ">
          </v-stepper-step>
          <v-divider class="divider" :class="e1 >=2 ? 'active' : 'inactive' "></v-divider>
            <v-stepper-step
            :complete="e1 > 2"
            step="2" class="pa-0">
            </v-stepper-step>
          <v-divider class="divider"></v-divider>
        <v-stepper-step :complete="e1 > 3"
          step="3" class="pa-0">
        </v-stepper-step>
          <v-divider class="divider"></v-divider>
            <v-stepper-step 
              step="4" class="pa-0" style="margin-right:87px">
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
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
      
</template>

<script>

import Step1 from '../components/step1.vue';

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
.divider1 {
  background-color: black;
  max-height: 100px;
  height: 10px;
  border: none;
  
}
.inactive {
  background-color: aqua;
}

.active {
  background-color: black;
}

</style>