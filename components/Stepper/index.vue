<template>
    <v-stepper v-model="step" elevation="0">
        <v-stepper-header class="elevation-0 ml-16 pl-12" style="width: 90%;">
            <template v-for="index in 4">
                <v-divider class="ct-divider" :color="step >= index ? '#1a2444' : '#bcefff'"></v-divider>
                <v-stepper-step :complete="step > index" 
                                :step="index" 
                                class="ct-stepper-step" 
                                :class="step >= index ? 'active-step' : 'inactive-step'">
                </v-stepper-step>
            </template>
        </v-stepper-header>
  
        <v-stepper-items>
            <v-stepper-content step="1">
                <StepperOne @dataFromOne="handleDataFromOne">
                    <v-btn @click="step = 2" text style="background-color: #1a2444;" color="white" width="25%" class="mt-5 ml-4">
                        Next Step <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </StepperOne>
            </v-stepper-content>
    
            <v-stepper-content step="2">
                <StepperTwo :receivedData="data">
                    <v-btn text outlined color="black" style="border-color: black;" width="25%" class="mt-5 ml-4" @click="step = 1">
                        <v-icon>mdi-chevron-left</v-icon>Previous
                    </v-btn>
                    <v-btn @click="step = 3" outlined text style="background-color: #1a2444;" color="white" width="25%" class="mt-5 ml-4">
                        Next Step <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </StepperTwo>
            </v-stepper-content>
    
            <v-stepper-content step="3">
                <StepperThree>
                    <v-btn text outlined color="black" style="border-color: black;" width="25%" class="mt-5 ml-4" @click="step = 2">
                        <v-icon>mdi-chevron-left</v-icon>Previous
                    </v-btn>
                    <v-btn @click="step = 4" outlined text style="background-color: #1a2444;" color="white" width="25%" class="mt-5 ml-4">
                        Next Step <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </StepperThree>
            </v-stepper-content>
    
            <v-stepper-content step="4">
                <StepperFour>
                    <v-btn text outlined color="black" style="border-color: black;" width="25%" class="mt-5 ml-4" @click="step = 3">
                        <v-icon>mdi-chevron-left</v-icon>Previous
                    </v-btn>
                </StepperFour>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>
  
<script>
export default {
    data() {
        return {
            step: 1,
            data: {
                date: '',
                lake: '',
                dock: '',
                boat: '',
                hp: '',
                passengers: '',
                licenses: '',
                color: '',
            },
        };
    },
    methods: {
        handleDataFromOne(data) {
            this.data = data;
        }
    }
};
</script>

<style scoped>
.ct-divider {
    border-width: 4px;
    height: 100%;
}
.ct-stepper-step {
    padding: 0;
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

