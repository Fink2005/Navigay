<template>
    <div>
      <!-- First Header -->
      <v-header class="d-flex justify-space-around py-2 px-4">
        <v-spacer></v-spacer>
        <div class="d-flex align-end">
          <span class="mx-3 text-decoration-none body-2">About us</span>
          <span class="mx-3 text-decoration-none body-2">Contact us</span>
          <span class="mx-3 text-decoration-none body-2">Press kit</span>
          <span class="mx-3 text-decoration-none body-2">Lakes</span>
          <span class="mx-3 text-decoration-none body-2">Rules</span>
          <span class="mx-3 text-decoration-none body-2">Blog</span>
          <span class="mx-3 text-decoration-none body-2">Hosting</span>
          <span class="mx-3 text-decoration-none body-2">Become a franchisee</span>
          <span class="mx-3 text-decoration-none body-2">French</span>
        </div>
      </v-header>
      <v-divider class="bold" color="#8b8b8b"></v-divider>
  
      <!-- Second Header -->
      <v-header class="d-flex px-4 py-4">
        <div>
          <img src="https://app.navigo.club/_nuxt/img/logo_mobile.b5097fc.svg" alt="" />
        </div>
        <div class="d-flex align-center mx-2">
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">Subscription</span>
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">Advantages</span>
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">Functioning</span>
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">The boats</span>
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">Boating License</span>
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">Pricing</span>
        </div>
  
        <v-row class="d-flex justify-end align-center">
          <v-col cols="12" class="d-flex justify-end">
            <v-btn class="text-no-wrap rounded-pill d-flex align-center" color="#1976d2" height="60px" width="170px">
              RENT A BOAT
            </v-btn>
          </v-col>
        </v-row>
      </v-header>

      <!-- Step 2 -->

      <v-stepper v-model="e1">
        <v-stepper-header  fluid style="background-color: #c4f1ff5f; box-shadow: none; border: 0">

          <v-divider color="#1a2444" class="ml-12" :style="{ color: e1 >= 1 ? '#1a2444' : '#bcefff', borderColor: e1 >= 1 ? '#1a2444' : '#bcefff' }" style="border: solid 5px;"></v-divider>
          
          <v-stepper-step :complete="e1 > 1" step="1" color="#1a2444" style="color: #bcefff;"> 
              
          </v-stepper-step>

          <v-divider :style="{ color: e1 >= 2 ? '#1a2444' : '#bcefff', borderColor: e1 >= 2 ? '#1a2444' : '#bcefff' }" style="border: solid 5px;"></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" color="#1a2444">
              
          </v-stepper-step>

          <v-divider :style="{ color: e1 >= 3 ? '#1a2444' : '#bcefff', borderColor: e1 >= 3 ? '#1a2444' : '#bcefff' }" style="border: solid 5px;"></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3" color="#1a2444">
              
          </v-stepper-step>

          <v-divider :style="{ color: e1 >= 4 ? '#1a2444' : '#bcefff', borderColor: e1 >= 4 ? '#1a2444' : '#bcefff' }" style="border: solid 5px;"></v-divider>

          <v-stepper-step step="4" class="mr-12" color="#1a2444">
              
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
            <v-stepper-content step="1">
                <v-card class="mb-12"  height="200px" style="box-shadow: none;">

                </v-card>

                

                <v-btn color="#1a2444" @click="e1 = 2" class="white--text" width="25%">
                    Next Step

                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>

            </v-stepper-content>

            <v-stepper-content step="2">
                <v-card class="mb-12"  height="200px" style="box-shadow: none;">
                    <div>

                    </div>

                </v-card>

                <v-btn text @click="e1 = 1" width="25%" class="pa-03" style="border: thin solid ;">
                  <v-icon>mdi-chevron-left</v-icon>

                  Previous

                </v-btn>
                
                <v-btn color="#1a2444" @click = "e1 = 3" class="white--text pa-03" width="25%">
                  Next Step

                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>

            </v-stepper-content>

            <v-stepper-content step="3">
                <v-card class="mb-12"  height="200px" style="box-shadow: none;">
        
                </v-card>
          
                <v-btn text  @click="e1 = 2" width="25%" class="pa-03" style="border: thin solid ;"> 
                  <v-icon>mdi-chevron-left</v-icon>

                  Previous

                </v-btn>
                
                <v-btn color="#1a2444" @click="e1 = 4" class="white--text pa-03" width="25%">
                  Next Step
                  <v-icon> mdi-chevron-right</v-icon>
                </v-btn>
                
            </v-stepper-content>

            <v-stepper-content step="4">
                <v-card class="mb-12"  height="200px" style="box-shadow: none;">
        
                </v-card>

                <v-btn text @click="e1 = 3" width="25%" class="pa-03" style="border: thin solid ;">
                  <v-icon>mdi-chevron-left</v-icon>

                  Previous
                </v-btn>

                <v-btn color="#1a2444" @click="e1 = 1" class="white--text pa-03" width="25%">
                  Next Step
  
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-stepper-content>

            
        </v-stepper-items>
      </v-stepper>
  
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      e1: 1 // Initial step
    };
  },
  methods: {
    stepStyle(stepNumber) {
      return {
        color: this.e1 >= stepNumber ? '#1a2444' : '#c4f1ff5f',
        borderColor: this.e1 >= stepNumber ? '#1a2444' : '#c4f1ff5f',
        fontSize: '24px', // Adjust the font size of the step number
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    },
    stepNumberStyle(stepNumber) {
      return {
        color: this.e1 >= stepNumber ? '#1a2444' : '#c4f1ff5f',
      };
    }
  }
};
</script>

<style scoped>

</style>
  
