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
          
          <v-stepper-step :complete="e1 > 1" step="1" color="#1a2444" class="pa-0 mr-2"> 
            
          </v-stepper-step>

          <v-divider :style="{ color: e1 >= 2 ? '#1a2444' : '#bcefff', borderColor: e1 >= 2 ? '#1a2444' : '#bcefff' }" style="border: solid 5px;"></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" class="pa-0" color="#1a2444">
              
          </v-stepper-step>

          <v-divider :style="{ color: e1 >= 3 ? '#1a2444' : '#bcefff', borderColor: e1 >= 3 ? '#1a2444' : '#bcefff' }" style="border: solid 5px;"></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3" color="#1a2444" class="pa-0">
              
          </v-stepper-step>

          <v-divider :style="{ color: e1 >= 4 ? '#1a2444' : '#bcefff', borderColor: e1 >= 4 ? '#1a2444' : '#bcefff' }" style="border: solid 5px;"></v-divider>

          <v-stepper-step step="4" class="mr-12 pa-0" color="#1a2444" >
              
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
                <v-card class="mb-12"  height="auto" style="box-shadow: none;">

                    <h2 class="d-flex mb-3">
                        <v-row class="text-center">
                          <v-col cols="12" class="d-flex">
                            <div class="rounded-circle deep-orange lighten-4 d-flex align-center justify-center" style="width:40px; height:40px;">2</div>

                            <div class="d-flex align-center justify-start ml-3" >Selected trip</div>
                          </v-col>
                        </v-row>
                    </h2>

                    <div style="max-width:70%">                   
                      <div class="d-flex flex-wrap pa-5 pr-sm-5">
                          <div class="d-flex justify-start align-center order-1 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center" style="width:80px; font-size:14px;">Date</subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center" style="font-weight: bold; font-size:14px">
                              :
                              <span> 31 August </span>
                            </subtitle-2>

                          </div>

                          <div class="d-flex justify-start align-center order-2 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center" style="width:80px; font-size:14px">Boat</subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center" style="font-weight: bold; font-size:14px">
                              :
                              <a> Vectra 21 </a>
                            </subtitle-2>

                          </div>

                          <div class="d-flex justify-start align-center order-3 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center" style="width:80px; font-size:14px;">Primary</subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center" style="font-weight: bold; font-size:14px">
                              :
                              <span> Red </span>
                            </subtitle-2>
                          </div>

                          <div class="d-flex justify-start align-center order-4 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center" style="width:80px; font-size:14px;">City</subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center" style="font-weight: bold; font-size:14px">
                              :
                              <a> Magos </a>
                            </subtitle-2>

                          </div>

                          <div class="d-flex justify-start align-center order-5 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center" style="width:80px; font-size:14px">HP</subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center" style="font-weight: bold; font-size:14px">
                              :
                              <span> 60 </span>
                            </subtitle-2>

                          </div>

                          <div class="d-flex justify-start align-center order-6 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center" style="width:80px; font-size:14px">Secondary</subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center" style="font-weight: bold; font-size:14px">
                              :
                              <span> Black </span>
                            </subtitle-2>

                          </div>

                          <div class="d-flex justify-start align-center order-7 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center" style="width:80px; font-size:14px">Lake</subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center" style="font-weight: bold; font-size:14px">
                              :
                              <a> Memphrémagog </a>
                            </subtitle-2>

                          </div>

                          <div class="d-flex justify-start align-center order-8 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center" style="width:80px; font-size:14px">Passengers</subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center" style="font-weight: bold; font-size:14px">
                              :
                              <span> 10 Passsengers </span>
                            </subtitle-2>

                          </div>

                          <div class="d-flex justify-start align-center order-9 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center"></subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center">
                              
                              <a></a>
                            </subtitle-2>

                          </div>

                          <div class="d-flex justify-start align-center order-10 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center" style="width:80px; font-size:14px">Dock</subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center" style="font-weight: bold; font-size:14px">
                              :
                              <a> Pointe Merry </a>
                            </subtitle-2>

                          </div>

                          <div class="d-flex justify-start align-center order-11 flex-grow-1 col-sm-4 col-12">

                            <subtitle-2 class="d-flex align-center" style="width:80px; font-size:14px">Licenses</subtitle-2>

                            <subtitle-2 class="d-flex justify-end pl-5 align-center" style="font-weight: bold; font-size:14px">
                              :
                              <span> C35594QC </span>
                            </subtitle-2>

                          </div>

                          
                        </div>

                        <div class="d-flex flex-row" style="width:70%">
                          <div class="py-0 col col-12">
                            <div>
                              <v-simple-table>
                                <template v-slot:default>
                                    <tbody>
                                      <tr>
                                        <td style="font-weight: bold" class="col-5">
                                          Time
                                        </td>

                                        <td>
                                          <span href="" style="font-weight: bold">Member</span>
                                        </td>

                                        <td>
                                          <a href="" style="font-weight: bold; color:Black;">Non-member</a>
                                        </td>
                                      </tr>

                                      <tr>
                                        <td class="d-flex align-center">
                                          <div> 06:00-08:00 </div>

                                          <div class="ml-2">
                                              <div>
                                                <div>
                                                  <v-checkbox v-model="checkbox">

                                                  </v-checkbox>
                                                </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div>30.15$/h</div>
                                        </td>

                                        <td>39.19$/h</td>
                                      </tr>

                                      <tr>
                                        <td class="d-flex align-center">
                                          <div> 08:15-10:15</div>

                                          <div class="ml-2">
                                              <div>
                                                <div>
                                                  <v-checkbox v-model="checkbox">

                                                  </v-checkbox>
                                                </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div>67.07$/h</div>
                                        </td>

                                        <td>87.20$/h</td>
                                      </tr>

                                      <tr>
                                        <td class="d-flex align-center">
                                          <div> 10:30-12:30 </div>

                                          <div class="ml-2">
                                              <div>
                                                <div>
                                                  <v-checkbox v-model="checkbox">

                                                  </v-checkbox>
                                                </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div>73.86$/h</div>
                                        </td>

                                        <td>96.01$/h</td>
                                      </tr>

                                      <tr>
                                        <td class="d-flex align-center">
                                          <div> 12:45-14:45 </div>

                                          <div class="ml-2">
                                              <div>
                                                <div>
                                                  <v-checkbox v-model="checkbox">

                                                  </v-checkbox>
                                                </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div>78.38$/h</div>
                                        </td>

                                        <td>101.89$/h</td>
                                      </tr>

                                      <tr>
                                        <td class="d-flex align-center">
                                          <div> 15:00-17:00 </div>

                                          <div class="ml-2">
                                              <div>
                                                <div>
                                                  <v-checkbox v-model="checkbox">

                                                  </v-checkbox>
                                                </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div>78.38$/h</div>
                                        </td>

                                        <td>101.89$/h</td>
                                      </tr>

                                      <tr>
                                        <td class="d-flex align-center">
                                          <div> 17:15-18:30 </div>

                                          <div class="ml-2">
                                              <div>
                                                <div>
                                                  <v-checkbox v-model="checkbox">

                                                  </v-checkbox>
                                                </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div>62.70$/h</div>
                                        </td>

                                        <td>81.51$/h</td>
                                      </tr>
                                    </tbody>
                                </template>
                              </v-simple-table>
                            </div>
                          </div>
                        </div>
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
};
</script>

<style scoped>

</style>
  
