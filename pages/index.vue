<template>
  <div class="layout d-flex flex-column align-start">
    {{ currentStep }}
    <v-sheet style="height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0) !important; border-color: rgba(0, 0, 0, 0) !important;">
      <div>
        <v-stepper v-model="currentStep" class="elevation-0 background-index gradient">
          <v-stepper-header  
            fluid
            style="background-color: #c4f1ff5f; box-shadow: none; border: 0" 
            class="d-none d-sm-flex"
          >
            <v-divider 
              color="#1a2444" 
              class="ml-12" 
              :style="{color: currentStep >= 1 ? '#1a2444' : '#bcefff', borderColor: currentStep >= 1 ? '#1a2444' : '#bcefff'}" 
              style="border: solid 5px; margin-left: 87px !important;"
            ></v-divider>
            
            <v-stepper-step :complete="currentStep > 1" step="1" class="pa-0 active-step"> 
              
            </v-stepper-step>
            
            <v-divider 
              :style="{ color: currentStep >= 2 ? '#1a2444' : '#bcefff', borderColor: currentStep >= 2 ? '#1a2444' : '#bcefff' }" 
              style="border: solid 5px;"
            ></v-divider>
            
            <v-stepper-step :complete="currentStep > 2" step="2" class="pa-0" :class="currentStep >= 2 ? 'active-step' : 'inactive-step'">
              
            </v-stepper-step>
            
            <v-divider 
              :style="{ color: currentStep >= 3 ? '#1a2444' : '#bcefff', borderColor: currentStep >= 3 ? '#1a2444' : '#bcefff' }" 
              style="border: solid 5px;"
            ></v-divider>
            
            <v-stepper-step :complete="currentStep > 3" step="3" class="pa-0" :class="currentStep >= 3 ? 'active-step' : 'inactive-step'">
              
            </v-stepper-step>
            
            <v-divider 
              :style="{ color: currentStep >= 4 ? '#1a2444' : '#bcefff', borderColor: currentStep >= 4 ? '#1a2444' : '#bcefff' }" 
              style="border: solid 5px;"
            ></v-divider>
            
            <v-stepper-step step="4" class="pa-0" :class="currentStep >= 4 ? 'active-step' : 'inactive-step'" style="margin-right: 87px">
              
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items style="background-color: #c4f1ff5f">
            <v-stepper-content step="1" class="px-sm-6 px-2 pt-sm-3 pt-1">
              <step1 @next-step="nextStep"></step1>
            </v-stepper-content>
            <v-stepper-content step="2" class="px-sm-6 px-2 pt-1">
              <step2 @next-step="nextStep" @previous-step="currentStep = 1"></step2>
            </v-stepper-content>
            <v-stepper-content step="3" class="px-sm-6 px-2 pt-1">
              <step3 @next-step="nextStep" @previous-step="currentStep = 2"></step3>
            </v-stepper-content>
            <step4 @previous-step="currentStep = 3"></step4>
          </v-stepper-items>
        </v-stepper>
      </div>
    </v-sheet>
  </div>
</template>

<script>


export default {

  data () {
    return {
      currentStep: 1,
    }
  },
  methods: {
    nextStep() {      
      this.currentStep = this.currentStep + 1
      
    }
  }
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