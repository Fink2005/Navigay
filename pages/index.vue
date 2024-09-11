<template>
  <div class="layout d-flex flex-column align-start">
    {{ currentStep }}
    <v-sheet style="height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0) !important; border-color: rgba(0, 0, 0, 0) !important;">
      <div>
        <v-stepper v-model="currentStep" class="elevation-0 background-index gradient">
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
            <!-- <v-stepper-content step="4" class="px-sm-6 px-2 pt-1">
            <step4 @previous-step="currentStep = 3"></step4>
            </v-stepper-content> -->
          </v-stepper-items>
        </v-stepper>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 4) {
        this.currentStep += 1;
        console.log(this.currentStep);
        
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
      }
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