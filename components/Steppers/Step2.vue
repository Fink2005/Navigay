<template>
    <!-- Step 2 -->
        <v-card class="px-2 pb-5 pt-2 v-sheet--outlined" style="box-shadow: none">
            <div class="py-2">
                <div>
                    <!-- Content -->
                    <v-card class="mb-3 pt-4 no-border" style="box-shadow: none">
                        <div>
                            <h2 
                            class="d-flex align-center" 
                            style="margin: -12px 0 10px 13px;" 
                            :class="$vuetify.breakpoint.xsOnly ? 'text-h6 font-weight-bold' : ''"
                            >
                                <v-sheet 
                                    class="d-flex align-center justify-center rounded-pill deep-orange lighten-4" 
                                    style="width: 40px; height: 40px;"
                                >
                                    2
                                </v-sheet>
                                <div class="ml-3"> Selected trip</div>
                            </h2>
                        
                            <!-- Boat Statistics -->
                            <v-card-text 
                            outlined 
                            style="box-shadow: none;" 
                            class="py-0 mb-4 text-nowrap px-1" 
                            :class="$vuetify.breakpoint.smAndDown ? 'col-12' : 'col-8'"
                            >                   
                                <div class="d-flex flex-wrap flex-row pr-sm-5">
                                    <div class="d-flex align-center order-1 pb-0 col-sm-4 col-12">
                              
                                        <p class="mb-0" style="width:80px; font-size:14px;">Date</p>
                              
                                        <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                            :
                                            <span v-if='boatData'> {{ boatData.day }} </span>
                                        </p>
                              
                                    </div>
                            
                                    <div class="d-flex align-center order-2 pb-0 col-sm-4 col-12">
                              
                                        <p class="mb-0 " style="width:80px; font-size:14px">Boat</p>
                              
                                        <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                            :
                                            <a class="anchorbase--text text-decoration-underline" v-if="boatData"> {{ boatData.boat }} </a>
                                        </p>
                              
                                    </div>
                            
                                    <div class="d-flex  align-center order-3 pb-0 col-sm-4 col-12">
                              
                                        <p class="mb-0" style="width:80px; font-size:14px;">Primary</p>
                              
                                        <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                            :
                                            <span v-if="boatData"> {{ getBoatColor(boatData.boat).primaryColor }} </span>
                                        </p>
                                    </div>
                            
                                    <div class="d-flex  align-center order-4 pb-0 col-sm-4 col-12">
                              
                                        <p class="mb-0" style="width:80px; font-size:14px;">City</p>
                              
                                        <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                            :
                                            <a class="anchorbase--text text-decoration-underline" v-if="boatData"> {{ getBoatCity(boatData.boat) }} </a>
                                        </p>
                              
                                    </div>
                            
                                    <div class="d-flex  align-center order-5 pb-0 col-sm-4 col-12">
                              
                                        <p class="mb-0" style="width:80px; font-size:14px">HP</p>
                              
                                        <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                            :
                                            <span v-if="boatData"> {{ getBoatHP(boatData.boat) }} </span>
                                        </p>
                              
                                    </div>
                            
                                    <div class="d-flex  align-center order-6 pb-0 col-sm-4 col-12">
                              
                                        <p class="mb-0" style="width:80px; font-size:14px">Secondary</p>
                                  
                                        <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                            :
                                            <span v-if="boatData"> {{ getBoatColor(boatData.boat).secondaryColor }} </span>
                                        </p>
                              
                                    </div>
                            
                                    <div class="d-flex  align-center order-7 pb-0 col-sm-4 col-12">
                              
                                        <p class="mb-0" style="width:80px; font-size:14px">Lake</p>
                              
                                        <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                            :
                                            <a class="anchorbase--text text-decoration-underline" v-if="boatData"> {{ getBoatLake(boatData.boat) }} </a>
                                        </p>
                              
                                    </div>
                            
                                    <div class="d-flex  align-center order-8 pb-0 col-sm-4 col-12">
                              
                                        <p class="mb-0" style="width:80px; font-size:14px">Passengers</p>
                              
                                        <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                            :
                                            <span v-if="boatData"> {{ getBoatPassengers(boatData.boat) }} </span>
                                        </p>
                              
                                    </div>
                            
                                    <div class="align-center order-9 pb-0 col-sm-4 col-12 d-none d-sm-flex">
                                    </div>
                            
                                    <div class="d-flex  align-center order-10 pb-0 col-sm-4 col-12">
                              
                                        <p class="mb-0" style="width:80px; font-size:14px">Dock</p>
                              
                                        <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                        :
                                        <a class="anchorbase--text text-decoration-underline" v-if="boatData"> {{ getBoatDock(boatData.boat) }} </a>
                                
                                        </p>
                              
                                    </div>
                                
                                    <div class="d-flex align-center order-11 pb-0 col-sm-4 col-12">
                                  
                                        <p class="mb-0" style="width:80px; font-size:14px">Licenses</p>
                              
                                        <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                            :
                                            <span v-if="boatData"> {{ getBoatLicense(boatData.boat) }} </span>
                                        </p>
                              
                                    </div>
                                      
                            
                                </div>
                          
                                <!-- Table of Booking Time & Pricing -->
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
                                                            <a href="" style="font-weight: bold; color:Black; text-wrap: nowrap;">
                                                                Non-member
                                                            </a>
                                                        </td>
                                                    </tr>
                                    
                                                    <tr class="tr-mobile">
                                                        <td>
                                                            <div class="d-flex align-center">
                                                                <div class="px-0">06:00-08:00</div>
                                                                <div class="ml-2">
                                                                    <div>
                                                                        <v-simple-checkbox 
                                                                            class="mt-0 pt-1 d-inline-flex" 
                                                                            v-model="checkboxes[0]" 
                                                                            color="primary"
                                                                        >                                               
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
                                                                        <v-simple-checkbox 
                                                                            v-model="checkboxes[1]" 
                                                                            class="mt-0 pt-1 d-inline-flex" 
                                                                            color="primary"
                                                                        >                                               
                                                                        </v-simple-checkbox>
                                                                    </div>
                                                                </div>
                                                            </div>                                             
                                                        </td>
                                            
                                                        <td>
                                                            <div>67.07$/h</div>
                                                        </td>
                                      
                                                        <td>
                                                            <div>87.20$/h</div>
                                                        </td>
                                                    </tr>
                                    
                                                    <tr class="tr-mobile">
                                                        <td>
                                                            <div class="d-flex align-center">
                                                                <div class="px-0">10:30-12:30</div>
                                                                <div class="ml-2">
                                                                    <div>
                                                                        <v-simple-checkbox 
                                                                            v-model="checkboxes[2]" 
                                                                            class="mt-0 pt-1 d-inline-flex" 
                                                                            color="primary"
                                                                        >                                               
                                                                        </v-simple-checkbox>
                                                                    </div>
                                                                </div>
                                                            </div>
                                        
                                                        </td>
                                      
                                                        <td>
                                                            <div>73.86$/h</div>
                                                        </td>
                                      
                                                        <td>
                                                            <div>96.01$/h</div>
                                                        </td>
                                                    </tr>
                                    
                                                    <tr class="tr-mobile">
                                                        <td>
                                                            <div class="d-flex align-center">
                                                                <div class="px-0">12:45-14:45</div>
                                                                <div class="ml-2">
                                                                    <div>
                                                                        <v-simple-checkbox 
                                                                            v-model="checkboxes[3]" 
                                                                            class="mt-0 pt-1 d-inline-flex" 
                                                                            color="primary"
                                                                        >                                                
                                                                        </v-simple-checkbox>
                                                                    </div>
                                                                </div>
                                                            </div>
                                        
                                                        </td>
                                      
                                                        <td>
                                                            <div>78.38$/h</div>
                                                        </td>
                                      
                                                        <td>
                                                            <div>101.89$/h</div>
                                                        </td>
                                                    </tr>
                                          
                                                    <tr class="tr-mobile">
                                                        <td>
                                                            <div class="d-flex align-center">
                                                                <div class="px-0">15:00-17:00</div>
                                                                <div class="ml-2">
                                                                    <div>
                                                                        <v-simple-checkbox 
                                                                            v-model="checkboxes[4]" 
                                                                            class="mt-0 pt-1 d-inline-flex" 
                                                                            color="primary"
                                                                        >
                                                                        </v-simple-checkbox>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                                     
                                                        </td>
                                            
                                                        <td>
                                                            <div>78.38$/h</div>
                                                        </td>
                                      
                                                        <td>
                                                            <div>101.89$/h</div>
                                                        </td>
                                                    </tr>
                                    
                                                    <tr class="tr-mobile">
                                                        <td>
                                                            <div class="d-flex align-center">
                                                                <div class="px-0">17:15-18:30</div>
                                                                <div class="ml-2">
                                                                    <div>
                                                                        <v-simple-checkbox 
                                                                            v-model="checkboxes[5]" 
                                                                            class="mt-0 pt-1 d-inline-flex" 
                                                                            color="primary"
                                                                        >                                               
                                                                        </v-simple-checkbox>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                      
                                                        <td>
                                                            <div>62.70$/h</div>
                                                        </td>
                                      
                                                        <td>
                                                            <div>81.51$/h</div>
                                                        </td>
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

            <!-- Previous & Next Step Button 2 -->
            <div class="px-4 d-flex" :class="$vuetify.breakpoint.xsOnly ? 'flex-column' : '' ">
                <div class="col-sm-5 col-md-4 col-lg-3 col-12 py-1">
                    <v-btn 
                        text 
                        @click="$emit('previous-step')" 
                        style="border: thin solid; 
                        width: 100%; 
                        height: 40px;"
                    >
                        <v-icon>mdi-chevron-left</v-icon>
                      
                        Previous                         
                    </v-btn> 
                </div>
                  
                <div class="col-sm-5 col-md-4 col-lg-3 col-12 py-1">
                    <v-btn 
                        color="#1a2444" 
                        @click = "$emit('next-step')" 
                        class="white--text" 
                        style="width: 100%; height: 40px;"
                        :disabled="!isStepComplete"
                    >
                        Next Step
                      
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-card>             
</template>

<script>
export default {
    name: 'Step2',
    props: {
        boatData: {
            type: Object,
            default: null
        }  
    },
    data () {
        return {
            checkboxes: [false, false, false, false, false, false], // Initial array of checkboxes
            selected: { boat: null, day: null},
            
        }
    },
    mounted() {
        console.log('Received boat data', this.boatData);
    },
    computed: {
    isStepComplete() {
      // Returns true if at least one checkbox is selected
      return this.checkboxes.some(checked => checked === true);
    }
},
    methods: {
    getBoatColor(boatName) {
      const boats = {
        'Vectra 21': { primaryColor: 'Red', secondaryColor: 'Black' },
        'Sportfisher 21': { primaryColor: 'Black', secondaryColor: 'Brown' }
      };
      return boats[boatName] || { primaryColor: '', secondaryColor: '' };
    },
    getBoatCity(boatName) {
      const boats = {
        'Vectra 21': 'Magog',
        'Sportfisher 21': 'Magog'
      };
      return boats[boatName] || '';
    },
    getBoatHP(boatName) {
      const boats = {
        'Vectra 21': '60',
        'Sportfisher 21': '60'
      };
      return boats[boatName] || '';
    },
    getBoatLake(boatName) {
      const boats = {
        'Vectra 21': 'Memphrémagog',
        'Sportfisher 21': 'Memphrémagog'
      };
      return boats[boatName] || '';
    },
    getBoatPassengers(boatName) {
      const boats = {
        'Vectra 21': '10 Passagers',
        'Sportfisher 21': '10 Passagers'
      };
      return boats[boatName] || '';
    },
    getBoatDock(boatName) {
      const boats = {
        'Vectra 21': 'Pointe Merry',
        'Sportfisher 21': 'Pointe Merry'
      };
      return boats[boatName] || '';
    },
    getBoatLicense(boatName) {
      const boats = {
        'Vectra 21': 'C35594QC',
        'Sportfisher 21': 'C35596QC'
      };
      return boats[boatName] || '';
    },
    emitData() {
        const selectedTimes = this.checkboxes
            .map((checked, index) => checked ? `Time Slot ${index + 1}` : null)
            .filter(time => time !== null);
        
        const totalMinutes = this.checkboxes.length * 120;

        this.$emit('update-data', {
            boat: this.boatData.boat,
            passengers: this.getBoatPassengers(this.boatData.boat),
            date: this.boatData.day,
            time: selectedTimes.join(', '),
            totalMinutes: totalMinutes,
            lake: this.getBoatLake(this.boatData.boat),
            dock: this.getBoatDock(this.boatData.boat),
            city: this.getBoatCity(this.boatData.boat),
        });
    },
    updateStep() {
        this.emitData();
        this.$emit('next-step');
    }
  }
}
</script>

<style scoped>

</style>