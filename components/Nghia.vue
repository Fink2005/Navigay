<template>
  <div class="layout d-flex flex-column align-start">
    <v-sheet style="height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0) !important; border-color: rgba(0, 0, 0, 0) !important;"> 
      <div>
        <v-stepper v-model="e1" class="elevation-0 background-index gradient">
          <v-stepper-header  fluid style="background-color: #c4f1ff5f; box-shadow: none; border: 0" class="d-none d-sm-flex">
            
            <v-divider color="#1a2444" class="ml-12" :style="{color: e1 >= 1 ? '#1a2444' : '#bcefff', borderColor: e1 >= 1 ? '#1a2444' : '#bcefff'}" style="border: solid 5px; margin-left: 87px !important;"></v-divider>
            
            <v-stepper-step :complete="e1 > 1" step="1" class="pa-0 active-step" > 
              
            </v-stepper-step>
            
            <v-divider :style="{ color: e1 >= 2 ? '#1a2444' : '#bcefff', borderColor: e1 >= 2 ? '#1a2444' : '#bcefff' }" style="border: solid 5px;"></v-divider>
            
            <v-stepper-step :complete="e1 > 2" step="2" class="pa-0" :class="e1 >= 2 ? 'active-step' : 'inactive-step'">
              
            </v-stepper-step>
            
            <v-divider :style="{ color: e1 >= 3 ? '#1a2444' : '#bcefff', borderColor: e1 >= 3 ? '#1a2444' : '#bcefff' }" style="border: solid 5px;"></v-divider>
            
            <v-stepper-step :complete="e1 > 3" step="3" class="pa-0" :class="e1 >= 3 ? 'active-step' : 'inactive-step'">
              
            </v-stepper-step>
            
            <v-divider :style="{ color: e1 >= 4 ? '#1a2444' : '#bcefff', borderColor: e1 >= 4 ? '#1a2444' : '#bcefff' }" style="border: solid 5px;"></v-divider>
            
            <v-stepper-step step="4" class="mr-12 pa-0" :class="e1 >= 4 ? 'active-step' : 'inactive-step'">
              
            </v-stepper-step>
          </v-stepper-header>
          
          <v-stepper-items style="background-color: #c4f1ff5f">
            <v-stepper-content step="1" class="px-sm-6 px-2 pt-sm-3 pt-1">
              <v-card class="px-2 pb-5 pt-2"  height="auto" style="box-shadow: none;">
                
              </v-card>
              
              
              <div class="px-1">
                <div class="col-sm-4 col-md-3 col-12">
                  <v-btn color="#1a2444" @click="e1 = 2" class="white--text" style="width: 100%; height: 40px;">
                    Next Step
                    
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
              </div>
              
            </v-stepper-content>
            
            <v-stepper-content step="2" class="px-sm-6 px-2 pt-1">
              <v-card class="px-2 pb-5 pt-2 v-sheet--outlined" style="box-shadow: none;">
                <div class="py-2">
                  <div>
                    <v-card class="mb-3 pt-4 no-border v-sheet--outlined" style="box-shadow: none ;">
                      <div>
                        <h2 class="d-flex align-center" style="margin: -12px 0 21px 13px;" :class="$vuetify.breakpoint.xsOnly ? 'text-h6' : ''">
                          <v-sheet class="d-flex align-center justify-center rounded-pill deep-orange lighten-4" style="width: 40px; height: 40px; margin: ">
                            2
                          </v-sheet>
                          <div class="ml-3"> Selected trip</div>
                        </h2>
                        
                        <v-card-text style="box-shadow: none;" class="py-0 mb-4 text-nowrap" :width="$vuetify.breakpoint.xsOnly ? 'col-12' : 'col-7'">                   
                          <div class="d-flex flex-wrap flex-row pr-sm-5">
                            <div class="d-flex align-center order-1 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px;">Date</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> 31 August </span>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex align-center order-2 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0 " style="width:80px; font-size:14px">Boat</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <a> Vectra 21 </a>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-3 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px;">Primary</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> Red </span>
                              </p>
                            </div>
                            
                            <div class="d-flex  align-center order-4 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px;">City</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <a> Magos </a>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-5 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px">HP</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> 60 </span>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-6 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px">Secondary</p>
                                  
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> Black </span>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-7 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px">Lake</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <a> Memphrémagog </a>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-8 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px">Passengers</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> 10 Passsengers </span>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-9 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0"></p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0">
                                
                                <a></a>
                                
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-10 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px">Dock</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <a> Pointe Merry </a>
                                
                              </p>
                              
                            </div>
                                
                            <div class="d-flex align-center order-11 pb-0 col-sm-4 col-12">
                                  
                              <p class="mb-0" style="width:80px; font-size:14px">Licenses</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> C35594QC </span>
                              </p>
                              
                            </div>
                                      
                            
                          </div>
                          
                          <div class="d-flex flex-row mt-3">
                            <div class="py-0">
                              <v-simple-table class="tab-display table-mobile">
                                <template v-slot:default>
                                  <tbody>
                                    <tr class="font-weight-bold">
                                      <td class="col-5">
                                        Time
                                      </td>
                                      
                                      <td>
                                        <span href="" style="font-weight: bold">Member</span>
                                      </td>
                                      
                                      <td>
                                        <a href="" style="font-weight: bold; color:Black;">Non-member</a>
                                      </td>
                                    </tr>
                                    
                                    <tr class="tr-mobile">
                                      <td class="">
                                        <div class="d-flex align-center">
                                          <div class="px-0">06:00-08:00</div>
                                          <div class="ml-2">
                                            <div>
                                              <v-simple-checkbox class="mt-0 pt-1 d-inline-flex" v-model="checkbox">
                                                
                                              </v-simple-checkbox>
                                            </div>
                                          </div>
                                        </div>                                                
                                      </td>
                                      
                                      <td>
                                        <div>30.15$/h</div>
                                      </td>
                                      
                                      <td>
                                        <div>39.19$/h</div>
                                      </td>
                                    </tr>
                                          
                                    <tr class="tr-mobile">
                                      <td>
                                        <div class="d-flex align-center">
                                          <div class="px-0">08:15-10:15</div>
                                          <div class="ml-2">
                                            <div>
                                              <v-simple-checkbox v-model="checkbox" class="mt-0 pt-1 d-inline-flex">
                                                
                                              </v-simple-checkbox>
                                            </div>
                                          </div>
                                        </div>                                             
                                      </td>
                                            
                                      <td>
                                        <div>67.07$/h</div>
                                      </td>
                                      
                                      <td>87.20$/h</td>
                                    </tr>
                                    
                                    <tr class="tr-mobile">
                                      <td>
                                        <div class="d-flex align-center">
                                          <div class="px-0">10:30-12:30</div>
                                          <div class="ml-2">
                                            <div>
                                              <v-simple-checkbox v-model="checkbox" class="mt-0 pt-1 d-inline-flex">
                                                
                                              </v-simple-checkbox>
                                            </div>
                                          </div>
                                        </div>
                                        
                                      </td>
                                      
                                      <td>
                                        <div>73.86$/h</div>
                                      </td>
                                      
                                      <td>96.01$/h</td>
                                    </tr>
                                    
                                    <tr class="tr-mobile">
                                      <td>
                                        <div class="d-flex align-center">
                                          <div class="px-0">12:45-14:45</div>
                                          <div class="ml-2">
                                            <div>
                                              <v-simple-checkbox v-model="checkbox" class="mt-0 pt-1 d-inline-flex">
                                                
                                              </v-simple-checkbox>
                                            </div>
                                          </div>
                                        </div>
                                        
                                      </td>
                                      
                                      <td>
                                        <div>78.38$/h</div>
                                      </td>
                                      
                                      <td>101.89$/h</td>
                                    </tr>
                                          
                                    <tr class="tr-mobile">
                                      <td>
                                        <div class="d-flex align-center">
                                          <div class="px-0">15:00-17:00</div>
                                          <div class="ml-2">
                                            <div>
                                              <v-simple-checkbox v-model="checkbox" class="mt-0 pt-1 d-inline-flex">

                                              </v-simple-checkbox>
                                            </div>
                                          </div>
                                        </div>
                                                                                     
                                      </td>
                                            
                                      <td>
                                        <div>78.38$/h</div>
                                      </td>
                                      
                                      <td>101.89$/h</td>
                                    </tr>
                                    
                                    <tr class="tr-mobile">
                                      <td>
                                        <div class="d-flex align-center">
                                          <div class="px-0">17:15-18:30</div>
                                          <div class="ml-2">
                                            <div>
                                              <v-simple-checkbox v-model="checkbox" class="mt-0 pt-1 d-inline-flex">
                                                
                                              </v-simple-checkbox>
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
                        </v-card-text>
                      </div>
                    </v-card>         
                  </div>
                </div>
                <div class="px-4 d-flex" :class="$vuetify.breakpoint.xsOnly ? 'flex-column' : '' ">
                  <div class="col-sm-5 col-md-4 col-lg-3 col-12 py-1">
                    <v-btn text @click="e1 = 1" style="border: thin solid; width: 100%; height: 40px;">
                      <v-icon>mdi-chevron-left</v-icon>
                      
                      Previous                         
                    </v-btn> 
                  </div>
                  
                  <div class="col-sm-5 col-md-4 col-lg-3 col-12 py-1">
                    <v-btn color="#1a2444" @click = "e1 = 3" class="white--text" style="width: 100%; height: 40px;">
                      Next Step
                      
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card>
              
            </v-stepper-content>
            
            <v-stepper-content step="3" class="px-sm-6 px-2 pt-sm-3 pt-1">
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
            
            <v-stepper-content step="4" class="px-sm-6 px-2 pt-sm-3 pt-1">
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
    </v-sheet>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      e1: 1 // Initial step
    };
  },
  mounted(){
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth
    },
  },
};
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

.img-responsive {
  max-width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  .v-header {
    flex-direction: column;
  }
}
</style>
  
