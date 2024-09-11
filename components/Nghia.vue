<template>
  <div class="layout d-flex flex-column align-start">
    <v-sheet style="height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0) !important; border-color: rgba(0, 0, 0, 0) !important;"> 
      <div>
        <!-- Steppers & Progress Bar -->
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
            
            <v-stepper-step step="4" class="mr-12 pa-0" :class="e1 >= 4 ? 'active-step' : 'inactive-step'">
              
            </v-stepper-step>
          </v-stepper-header>
          
          <!-- Stepper Contents-->
           <!-- Step 1 -->
          <v-stepper-items style="background-color: #c4f1ff5f">
            <v-stepper-content step="1" class="px-sm-6 px-2 pt-sm-3 pt-1">
              <v-card class="px-2 pb-5 pt-2"  height="auto" style="box-shadow: none;">
                <div>
                  <v-card class="my-1 pt-2 no-border" style="box-shadow: none;">
                    <h2 class="ml-4 ms-4 pb-6 d-flex align-center font-weight-bold">
                      <v-sheet 
                        class="d-flex align-center justify-center rounded-pill light-blue lighten-2" 
                        style="height: 40px; width: 40px;"
                      >
                        1
                      </v-sheet>
                      <div class="ml-3"> Choose time </div>
                    </h2>

                    <v-card-text class="py-0">
                      <div class="mb-2">
                        <div class="d-flex flex-wrap">
                          <div class="d-flex justify-center justify-md-start">
                            <div class="row no-gutters">
                              <div class="d-flex justify-start col col-1">
                                <v-btn style="height:40px;" outlined @click="adjustDate(-7)">
                                  <v-icon>mdi-chevron-left</v-icon>
                                </v-btn>
                              </div>

                              <div class="d-flex justify-center px-12 px-sm-0 col col-10 text-center">
                                <v-dialog v-model="dialog">
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn 
                                      class="mx-4 mx-sm-1" 
                                      outlined 
                                      v-bind="attrs" 
                                      v-on="on"
                                      height="40px"
                                    > 
                                      {{ formatDate(picker) }}
                                    </v-btn>
                                  </template>

                                  <v-date-picker 
                                    v-model="picker"
                                    full-width="true"
                                    :min="minDate"
                                    @input="onDateSelected"
                                  >

                                  </v-date-picker>
                                </v-dialog>
                              </div>

                              <div class="d-flex justify-end col col-1">
                                <v-btn style="height: 40px;" outlined @click="adjustDate(7)">
                                  <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mb-5">
                        <div>
                          <div>
                            <v-card flat>
                              <v-card-title class="pl-0 pb-0 pt-0">
                                <div>Lake Memphrémagog - Dock Pointe Merry</div>
                              </v-card-title>

                              <v-simple-table>
                                <template v-slot:default>
                                  <thead>
                                    <tr>
                                      <th width="150px" class="font-weight-bold black--text pl-0"> Boat</th>
                                      <th width="100px" class="font-weight-bold black--text pl-0">
                                        <v-icon>mdi-account</v-icon>
                                      </th>
                                      <th width="80px" class="font-weight-bold black--text pl-0">HP</th>
                                      <th 
                                        v-for="(day, index) in displayedDays" 
                                        :key="index" 
                                        width="80px" 
                                        class="font-weight-bold black--text text-no-wrap"
                                      >
                                        {{ day }}
                                      </th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    <tr v-for="(boat, index) in boatDetails" :key="index">
                                      <td class="pl-0">
                                        <a href="" class="font-weight-bold anchorbase--text text-decoration-underline d-flex text-no-wrap">
                                          {{ boat.name }}
                                        </a>
                                      </td>

                                      <td class="pl-0">
                                        <span>{{ boat.capacity }}</span>
                                      </td>

                                      <td class="pl-0">
                                        <span>{{ boat.hp }}</span>
                                      </td>

                                      <td v-for="(day, iconIndex) in displayedDays" :key="iconIndex">
                                        <v-btn 
                                          icon
                                          :class="{
                                            'blue--text' : selected.boat === boat.name && selected.day === day, 
                                            'green--text': !(selected.boat === boat.name && selected.day ===day)
                                          }"
                                          @click="toggleDay(boat, day)"
                                        >
                                          <v-icon>mdi-clock-outline</v-icon>
                                        </v-btn>
                                      </td>
                                    </tr>                                   
                                  </tbody>
                                </template>
                              </v-simple-table>
                            </v-card>
                          </div>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>
                <!-- Next Step Button 1 -->
                <div class="d-flex flex-row mx-1">
                  <div class="col-sm-4 col-md-3 col-12">
                    <v-btn color="#1a2444" @click="e1 = 2" class="white--text" style="width: 100%; height: 40px;">
                      Next Step
                      
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card>
              
              
            </v-stepper-content>
            
            <!-- Step 2 -->
            <v-stepper-content step="2" class="px-sm-6 px-2 pt-1">
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
                                <span> {{ selectedDate }} </span>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex align-center order-2 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0 " style="width:80px; font-size:14px">Boat</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <a class="anchorbase--text text-decoration-underline"> {{ selectedBoat.name }} </a>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-3 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px;">Primary</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> {{ selectedBoat.primaryColor }} </span>
                              </p>
                            </div>
                            
                            <div class="d-flex  align-center order-4 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px;">City</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <a class="anchorbase--text text-decoration-underline"> {{ selectedBoat.city }} </a>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-5 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px">HP</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> {{ selectedBoat.hp }} </span>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-6 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px">Secondary</p>
                                  
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> {{ selectedBoat.secondaryColor }} </span>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-7 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px">Lake</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <a class="anchorbase--text text-decoration-underline"> {{ selectedBoat.lake }} </a>
                              </p>
                              
                            </div>
                            
                            <div class="d-flex  align-center order-8 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px">Passengers</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> {{ selectedBoat.passengers }} </span>
                              </p>
                              
                            </div>
                            
                            <div class="align-center order-9 pb-0 col-sm-4 col-12 d-none d-sm-flex">
                            </div>
                            
                            <div class="d-flex  align-center order-10 pb-0 col-sm-4 col-12">
                              
                              <p class="mb-0" style="width:80px; font-size:14px">Dock</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <a class="anchorbase--text text-decoration-underline"> {{ selectedBoat.dock }} </a>
                                
                              </p>
                              
                            </div>
                                
                            <div class="d-flex align-center order-11 pb-0 col-sm-4 col-12">
                                  
                              <p class="mb-0" style="width:80px; font-size:14px">Licenses</p>
                              
                              <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                                :
                                <span> {{ selectedBoat.license }} </span>
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
            
            <!-- Step 3 -->
            <v-stepper-content step="3" class="px-sm-6 px-2 pt-sm-3 pt-1">
              <v-card class="px-2 pb-5 pt-2"  height="auto" style="box-shadow: none;">
                <div>
                  <div class="px-4 py-4">
                    <h2 class="pt-0 pb-2 d-flex align-center font-weight-bold">
                      <v-sheet class="d-flex align-center justify-center rounded-pill deep-purple lighten-4" style="height: 40px; width: 40px">
                        3
                      </v-sheet>
                      <div class="ml-3">Confirm your trip details</div>
                    </h2>

                    <div class="d-flex flex-row">
                      <div xs="12" class="col-sm-12 col-md-8 col-lg-8 col-xl-6 col-12">
                        <div class="pb-3 mt-3">
                          <div class="d-lg-flex baseline">
                            <div class="font-weight-bold me-2">Not a member? You can book too.</div>
                            <a href="" class="anchorbase--text subtitle-1">Become a member and save a lot!</a>
                          </div>
                          <div class="mb-4">
                            Enter your cell phone number and click on "Send code". A unique code will be sent to you. Enter this code and apply your member price.
                          </div>
                          <v-form class="mb-3" novalidate="novalidate">
                            <div class="d-flex flex-wrap">
                              <div class="pa-0 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
                                <label for="phone" class="text-no-wrap">Mobile number</label>
                                <v-text-field hide-details="true" dense enclosed outlined>
                                  
                                </v-text-field>
                              </div>
                              <div class="d-flex align-end me-4 ms-2">
                                <v-btn style="height:40px; background-color:#1a2444" color="white--text">
                                  <span>SEND CODE</span>
                                </v-btn>
                              </div>
                            </div>
                          </v-form>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <!-- Previous & Next Step Button 3 -->
                <div class="px-4 d-flex" :class="$vuetify.breakpoint.xsOnly ? 'flex-column' : '' ">
                  <div class="col-sm-5 col-md-4 col-lg-3 col-12 py-1">
                    <v-btn text @click="e1 = 2" style="border: thin solid; width: 100%; height: 40px;">
                      <v-icon>mdi-chevron-left</v-icon>
                      
                      Previous                         
                    </v-btn> 
                  </div>
                  
                  <div class="col-sm-5 col-md-4 col-lg-3 col-12 py-1">
                    <v-btn color="#1a2444" @click = "e1 = 4" class="white--text" style="width: 100%; height: 40px;">
                      Next Step
                      
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card>
              
            </v-stepper-content>
            
            <!-- Step 4 -->
            <v-stepper-content step="4" class="px-sm-6 px-2 pt-sm-3 pt-1">
              <v-card class="mb-12"  height="200px" style="box-shadow: none;">
                
              </v-card>
              
              <!-- Previous & Next Step Button 4 -->
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
      e1: 1, // Initial step
      checkboxes: [false, false, false, false, false, false], // Initial array of checkboxes
      dialog: false,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      minDate: this.getToday(), // Setting the min date dynamically
      selected: { boat: null, day: null},
      selectedBoat: {
        name: '',
        capacity: 0,
        hp: 0,
        primaryColor: '',
        secondaryColor: '',
        passengers: 0,
        city: '',
        lake: '',
        dock: '',
        license: '',
      },
      selectedDate: null,
      overlay: false,
      boatDetails: {
        "Vectra 21": {
          name: "Vectra 21",
          capacity: 10,
          hp: 60,
          primaryColor: "Red",
          secondaryColor: "Black",
          passengers: 10,
          city: "Magog",
          lake: "Memphrémagog",
          dock: "Pointe Merry",
          license: "C35594QC"
        },
        "Sportfisher 21": {
          name: "Sportfisher 21",
          capacity: 10,
          hp: 60,
          primaryColor: "Black",
          secondaryColor: "Brown",
          passengers: 10,
          city: "Magog",
          lake: "Memphrémagog",
          dock: "Pointe Merry",
          license: "C35596QC"
        }
      },
      displayedDays: []
    };
  },
  computed: {
    displayedDays() {
      const days = [];
      const startDate = new Date(this.picker);

      for (let i = 0; i <= 13; i++) {
        const day = new Date(startDate);
        day.setDate(startDate.getDate() + i);
        const formattedDate = day.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });
        days.push(formattedDate);
      }
      return days;
    }
  },
  mounted(){
    window.addEventListener("resize", this.handleResize);
    this.updateDisplayedDays();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth
    },
    getToday() {
      const today = new Date();
      return today.toISOString().substr(0, 10);
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(date).toLocaleDateString(undefined, options );
    },
    updateDisplayedDays() {
      const days = [];
      const startDate = new Date(this.picker);

      for (let i = 0; i <= 13; i++) {
        const day = new Date(startDate);
        day.setDate(startDate.getDate() + i);
        const formattedDate = day.toLocaleDateString(undefined, { day: 'numeric', month: 'long'});
        days.push(formattedDate);
      }
      this.displayedDays = days;
    },
    onDateSelected() {
      this.updateDisplayedDays();
      this.dialog = false; // Automatically turn off when finish choosing date
    },
    adjustDate(days) { // Adjust days for button
      const current = new Date(this.picker);
      current.setDate(current.getDate() + days);
      this.picker = current.toISOString().substr(0, 10);
      this.updateDisplayedDays();
    },
    toggleDay(boat, day) { 
      if (this.selected.boat === boat.name && this.selected.day === day) {
      return;
    }
    this.selected.boat = boat.name;
    this.selected.day = day;
    },
    proceedToStep2(boat, date) {
      this.selectedBoat = boat;
      this.selectedDate = date;
    },
  }
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

::v-deep .v-date-picker-header {
  font-size: 21px !important;
}

::v-deep .v-date-picker-table .v-btn {
  font-size: 16px !important;
  font-weight: normal;
}

::v-deep .v-date-picker-table th {
  font-size: 16px !important;
}

</style>
  
