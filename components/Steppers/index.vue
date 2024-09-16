<template>
  <div class="layout d-flex flex-column align-start">
    <v-sheet style="height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0) !important; border-color: rgba(0, 0, 0, 0) !important;">
      <div>
        <v-stepper v-model="e1" class="elevation-0 background-index gradient">
          <v-stepper-header  
            fluid
            style="background-color: #c4f1ff5f; box-shadow: none; border: 0" 
            class="d-none d-sm-flex"
          >
            <v-divider 
              color="#1a2444" 
              class="ml-12" 
              :style="{color: e1 >= 1 ? '#1a2444' : '#bcefff', borderColor: e1 >= 1 ? '#1a2444' : '#bcefff'}" 
              style="border: solid 5px; margin-left: 87px !important;"
            ></v-divider>
            
            <v-stepper-step :complete="e1 > 1" step="1" class="pa-0 active-step"> 
              
            </v-stepper-step>
            
            <v-divider 
              :style="{ color: e1 >= 2 ? '#1a2444' : '#bcefff', borderColor: e1 >= 2 ? '#1a2444' : '#bcefff' }" 
              style="border: solid 5px;"
            ></v-divider>
            
            <v-stepper-step :complete="e1 > 2" step="2" class="pa-0" :class="e1 >= 2 ? 'active-step' : 'inactive-step'">
              
            </v-stepper-step>
            
            <v-divider 
              :style="{ color: e1 >= 3 ? '#1a2444' : '#bcefff', borderColor: e1 >= 3 ? '#1a2444' : '#bcefff' }" 
              style="border: solid 5px;"
            ></v-divider>
            
            <v-stepper-step :complete="e1 > 3" step="3" class="pa-0" :class="e1 >= 3 ? 'active-step' : 'inactive-step'">
              
            </v-stepper-step>
            
            <v-divider 
              :style="{ color: e1 >= 4 ? '#1a2444' : '#bcefff', borderColor: e1 >= 4 ? '#1a2444' : '#bcefff' }" 
              style="border: solid 5px;"
            ></v-divider>
            
            <v-stepper-step step="4" class="pa-0" :class="e1 >= 4 ? 'active-step' : 'inactive-step'" style="margin-right: 87px">
              
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items style="background-color: #c4f1ff5f">
            <v-stepper-content step="1" class="px-sm-6 px-2 pt-sm-3 pt-1">
              <steppers-step1 @dataFromOne="receiveDataFromStep1" @next-step="e1 = 2"></steppers-step1>
            </v-stepper-content>
            <v-stepper-content step="2" class="px-sm-6 px-2 pt-1">
              <steppers-step2 @update-data="updateStep2Data" :boatData="selectedBoatData" @next-step="e1 = 3" @previous-step="e1 = 1"></steppers-step2>
            </v-stepper-content>
            <v-stepper-content step="3" class="px-sm-6 px-2 pt-1">
              <steppers-step3 :tripData="tripData" @next-step="e1 = 4" @previous-step="e1 = 2"></steppers-step3>
            </v-stepper-content>
            <v-stepper-content step="4" class="px-sm-6 px-2 pt-sm-3 pt-1">
              <steppers-step4 @previous-step="e1 = 3"></steppers-step4>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';

export default {
  components: {
    Step1,
    Step2,
    Step3
  },
    data () {
    return {
      e1: 1,
      selectedBoatData: null,
      tripData: {}
    };
  },
  methods: {
    nextStep() {      
      this.e1 = this.e1 + 1
      
    },
    receiveDataFromStep1(data) {
      this.selectedBoatData = data;
    },
    updateStep2Data(data) {
      this.tripData = data;
    }
  }

}
</script>

<style scoped>
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