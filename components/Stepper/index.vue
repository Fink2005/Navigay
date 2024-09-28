<template>
    <div>
        <a href="/" class="d-flex d-sm-none ml-5 mt-4" style="width: 100px;"><v-img :src="require('assets/logo.svg')" contain height="20px" width="100px"></v-img></a>
        <v-stepper v-model="step" elevation="0" fluid>
            <v-stepper-header class="elevation-0 d-sm-flex d-none" style="padding: 0 6rem">
                <template v-for="index in 4">
                    <v-divider class="ct-divider" :color="step >= index ? '#1a2444' : '#bcefff'"></v-divider>
                    <v-stepper-step :complete="step > index" 
                                    :step="index" 
                                    class="ct-stepper-step" 
                                    :class="step >= index ? 'active-step' : 'inactive-step'">
                    </v-stepper-step>
                </template>
            </v-stepper-header>
    
            <v-stepper-items style="background-color: rgba(196, 241, 255, .373);">
                <v-stepper-content step="1">
                    <StepperOne />
                </v-stepper-content>
        
                <v-stepper-content step="2">
                    <StepperTwo />
                </v-stepper-content>
        
                <v-stepper-content step="3">
                    <StepperThree />
                </v-stepper-content>
        
                <v-stepper-content step="4">
                    <StepperFour />
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>
  
<script>
import { mapFields } from 'vuex-map-fields';
export default {
    data() {
        return {

        };
    },
    computed: {
        ...mapFields([
            'step'
        ])
    },
};
</script>

<style scoped>
.ct-divider {
    border-width: 4px;
    height: 100%;   
}
.ct-stepper-step {
    padding: 0px;
} 
.v-stepper__header {
    height: auto; 
    background-color: rgba(196, 241, 255, .373);
}
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

