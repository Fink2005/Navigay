<template>
    <v-stepper v-model="$store.state.step" elevation="0">
        <v-stepper-header class="elevation-0 ml-16 pl-12" style="width: 90%;">
            <template v-for="index in 4">
                <v-divider class="ct-divider" :color="$store.state.step >= index ? '#1a2444' : '#bcefff'"></v-divider>
                <v-stepper-step :complete="$store.state.step > index" 
                                :step="index" 
                                class="ct-stepper-step" 
                                :class="$store.state.step >= index ? 'active-step' : 'inactive-step'">
                </v-stepper-step>
            </template>
        </v-stepper-header>
  
        <v-stepper-items>
            <v-stepper-content step="1">
                <StepperOne @dataFromOne="handleDataFromOne" />
            </v-stepper-content>
    
            <v-stepper-content step="2">
                <StepperTwo :receivedData="data" @dataFromTwo="handleDataFromTwo" />
            </v-stepper-content>
    
            <v-stepper-content step="3">
                <StepperThree :receivedData="data2" />
            </v-stepper-content>
    
            <v-stepper-content step="4">
                <StepperFour />
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>
  
<script>
export default {
    data() {
        return {
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
            data2: {
                city: '',
                time: '',
                totalMinutes: 0,
                ...this.data
            }
        };
    },
    methods: {
        handleDataFromOne(data) {
            this.data = data;
        },
        handleDataFromTwo(data) {
            this.data2 = data;
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

