<template>
    <v-stepper v-model="step" elevation="0">
        <v-stepper-header class="elevation-0 ml-16 pl-12" style="width: 90%;">
            <v-divider class="ct-divider" color="#1a2444"></v-divider>
            <v-stepper-step :complete="step > 1" 
                            step="1" 
                            class="ct-stepper-step active-step">
            </v-stepper-step>
            <v-divider class="ct-divider" :color="step >= 2 ? '#1a2444' : '#bcefff'"></v-divider>
            <v-stepper-step :complete="step > 2" 
                            step="2" 
                            class="ct-stepper-step" 
                            :class="step >= 2 ? 'active-step' : 'inactive-step'">
            </v-stepper-step>
            <v-divider class="ct-divider" :color="step >= 3 ? '#1a2444' : '#bcefff'"></v-divider>
            <v-stepper-step :complete="step > 3" 
                            step="3" 
                            class="ct-stepper-step" 
                            :class="step >= 3 ? 'active-step' : 'inactive-step'">
            </v-stepper-step>
            <v-divider class="ct-divider" :color="step === 4 ? '#1a2444' : '#bcefff'"></v-divider>
            <v-stepper-step step="4" 
                            class="ct-stepper-step" 
                            :class="step === 4 ? 'active-step' : 'inactive-step'">
            </v-stepper-step>
        </v-stepper-header>
  
        <v-stepper-items>
            <v-stepper-content step="1">
                <v-card flat outlined class="mb-5 py-6 px-4">
                    <div class="d-flex">
                        <h2 class="ml-4 ms-4 pb-6 d-flex align-center font-weight-bold">
                            <div class="d-flex align-center justify-center v-sheet rounded-pill light-blue lighten-2" style="height: 40px; width: 40px;">1</div>
                            <div class="ml-3">
								Choose time
							</div>
                        </h2>
                    </div>
                    <div class="d-flex">
                        <div class="d-flex ml-4 mr-12">
                            <v-btn text outlined style="border-color: black;" class="mr-1"><v-icon>mdi-chevron-left</v-icon></v-btn>
                            <v-dialog v-model="dialog">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn text outlined style="border-color: black;" class="mr-1" v-bind="attrs" v-on="on">{{ formattedDate }}</v-btn>
                                </template>
                                <v-calendar></v-calendar>
                            </v-dialog>
                            <v-btn text outlined style="border-color: black;"><v-icon>mdi-chevron-right</v-icon></v-btn>
                        </div>
                        <div class="d-flex ml-12">
                            <v-menu offset-y nudge-bottom="10">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn text outlined v-bind="attrs" v-on="on" width="145px" style="border-color: darkgray;" class="text-capitalize body-2" v-if="selectedHour1 || selectedMinute1">{{ `${selectedHour1}:${selectedMinute1}` }}</v-btn>
                                    <v-btn text outlined v-bind="attrs" v-on="on" width="145px" style="border-color: darkgray;" class="text-capitalize body-2" v-else></v-btn>
                                </template>
                                <div class="d-flex rounded-lg align-center pa-4">
                                    <v-menu offset-y nudge-top="37"> 
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn text v-bind="attrs" v-on="on" class="mr-2 text-capitalize body-2" style="background-color: white">{{ selectedHour1 }}</v-btn>
                                        </template>
                                        <div class="d-flex flex-column" style="height: 285px;">
                                            <v-btn text v-for="item in hourItems" :key="item" class="text-capitalize caption" style="background-color: white; border-radius: 0%;" @click="selectHour1(item)">{{ item }}</v-btn>
                                        </div>
                                    </v-menu>
                                    <span class="mr-2">:</span>
                                    <v-menu offset-y nudge-top="37">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn text v-bind="attrs" v-on="on" style="background-color: white" class="text-capitalize body-2">{{ selectedMinute1 }}</v-btn>
                                        </template>
                                        <div class="d-flex flex-column" style="height: 285px;">
                                            <v-btn text v-for="item in minuteItems" :key="item" class="text-capitalize caption" style="background-color: white; border-radius: 0%;" @click="selectMinute1(item)">{{ item }}</v-btn>
                                        </div>
                                    </v-menu>
                                </div>
                            </v-menu>
                            <span class="body-2 grey--text text--darken-1 ml-3 mr-9">To</span>
                            <v-menu offset-y nudge-bottom="10">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn text outlined v-bind="attrs" v-on="on" width="145px" style="border-color: darkgray;" class="text-capitalize body-2" v-if="selectedHour2 || selectedMinute2">{{ `${selectedHour2}:${selectedMinute2}` }}</v-btn>
                                    <v-btn text outlined v-bind="attrs" v-on="on" width="145px" style="border-color: darkgray;" class="text-capitalize body-2" v-else></v-btn>
                                </template>
                                <div class="d-flex rounded-lg align-center pa-4">
                                    <v-menu offset-y nudge-top="37">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn text v-bind="attrs" class="mr-2 text-capitalize body-2" v-on="on" style="background-color: white">{{ selectedHour2 }}</v-btn>
                                        </template>
                                        <div class="d-flex flex-column" style="height: 285px;">
                                            <v-btn text v-for="item in hourItems" :key="item" class="text-capitalize caption" style="background-color: white; border-radius: 0%;" @click="selectHour2(item)">{{ item }}</v-btn>
                                        </div>
                                    </v-menu>
                                    <span class="mr-2">:</span>
                                    <v-menu offset-y nudge-top="37">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn text v-bind="attrs" v-on="on" style="background-color: white" class="text-capitalize body-2">{{ selectedMinute2 }}</v-btn>
                                        </template>
                                        <div class="d-flex flex-column" style="height: 285px;">
                                            <v-btn text v-for="item in minuteItems" :key="item" class="text-capitalize caption" style="background-color: white; border-radius: 0%;" @click="selectMinute2(item)">{{ item }}</v-btn>
                                        </div>
                                    </v-menu>
                                </div>
                            </v-menu>
                        </div>
                        <div class="d-flex ml-10">
                            <v-btn text color="white" style="background-color: #1976d2;" class="mr-5">apply</v-btn>
                            <v-btn text style="background-color: #c62828;" class="ml-5">clear</v-btn>
                        </div>
                    </div>
                    <div class="mt-4 ml-4">
                        <span style="font-size: 1.25rem;">Lake Memphrémagog - Dock North</span>
                        <v-data-table :headers="header" :items="items" hide-default-footer>
                            <template v-slot:header.people="{ header }"> 
                                <v-icon>mdi-account</v-icon>
                            </template>
                            <template v-slot:item.boat="{ item }">
                                <a class="font-weight-bold blue--text text--lighten-1 text-decoration-underline d-flex text-no-wrap">{{ item.boat }}</a>
                            </template>
                            <template v-for="item in getTableHeaderDate()" v-slot:[`item.${item.value}`]="">
                                <v-btn icon color="green"><v-icon>mdi-clock-outline</v-icon></v-btn>
                            </template>
                        </v-data-table>
                    </div>
                    <div class="ml-4">
                        <span style="font-size: 1.25rem;">Lake Massawippi - Dock Dock</span>
                        <v-data-table :headers="header" :items="items2" hide-default-footer>
                            <template v-slot:header.people="{ header }"> 
                                <v-icon>mdi-account</v-icon>
                            </template>
                            <template v-slot:item.boat="{ item }">
                                <a class="font-weight-bold blue--text text--lighten-1 text-decoration-underline d-flex text-no-wrap">{{ item.boat }}</a>
                            </template>
                            <template v-for="item in getTableHeaderDate()" v-slot:[`item.${item.value}`]="">
                                <v-btn icon color="green"><v-icon>mdi-clock-outline</v-icon></v-btn>
                            </template>
                        </v-data-table>
                    </div>
                    <v-btn @click="step = 2" text style="background-color: #1a2444;" color="white" width="25%" class="mt-5 ml-4">Next Step <v-icon>mdi-chevron-right</v-icon></v-btn>
                </v-card>
            </v-stepper-content>
    
            <v-stepper-content step="2">
                <v-card class="mb-5 py-6 px-4" flat outlined>
                    <div class="d-flex">
                        <h2 class="ml-4 ms-4 pb-6 d-flex align-center font-weight-bold">
                            <div data-v-4048a4e0="" class="d-flex align-center justify-center v-sheet theme--light rounded-pill deep-orange lighten-4" style="height: 40px; width: 40px;">
					            2
				            </div>
                            <div class="ml-3">
								Selected trip
							</div>
                        </h2>
                    </div>
                    <div class="d-flex ml-4 body-2">
                        <div class="d-flex flex-column">
                            <div class="mb-2">Date</div>
                            <div class="mb-2">City</div>
                            <div class="mb-2">Lake</div>
                            <div class="mb-2">Dock</div>
                        </div>
                        <div class="d-flex flex-column ml-8 font-weight-bold">
                            <div class="mb-2">:</div>
                            <div class="mb-2">:</div>
                            <div class="mb-2">:</div>
                            <div class="mb-2">:</div>
                        </div>
                        <div class="d-flex flex-column mr-16 ml-1 font-weight-bold">
                            <div class="mb-2">31 August</div>
                            <a class="blue--text text--lighten-1 text-decoration-underline mb-2">Ho Chi Minh</a>
                            <a class="blue--text text--lighten-1 text-decoration-underline mb-2">Massawippi</a>
                            <a class="blue--text text--lighten-1 text-decoration-underline mb-2">Dock</a>
                        </div>
                        <div class="d-flex flex-column ml-16">
                            <div class="mb-2">Boat</div>
                            <div class="mb-2">HP</div>
                            <div class="mb-2">Passengers</div>
                            <div class="mb-2">Licenses</div>
                        </div>
                        <div class="d-flex flex-column ml-8 font-weight-bold">
                            <div class="mb-2">:</div>
                            <div class="mb-2">:</div>
                            <div class="mb-2">:</div>
                            <div class="mb-2">:</div>
                        </div>
                        <div class="d-flex flex-column mr-16 ml-1 font-weight-bold">
                            <a class="blue--text text--lighten-1 text-decoration-underline mb-2">Vectra 21</a>    
                            <div class="mb-2">1</div>
                            <div class="mb-2">1 Passengers</div>
                            <div class="mb-2">11</div>
                        </div>
                        <div class="d-flex flex-column ml-16">
                            <div class="mb-2">Primary</div>
                            <div class="mb-2">Secondary</div>
                        </div>
                        <div class="d-flex flex-column ml-8 font-weight-bold">
                            <div class="mb-2">:</div>
                            <div class="mb-2">:</div>
                        </div>
                        <div class="d-flex flex-column ml-1 font-weight-bold">
                            <div class="mb-2">Blue</div>
                            <div class="mb-2">Blue</div>
                        </div>
                    </div>
                    <div>
                        <v-data-table hide-default-footer :headers="header2" :items="items3" style="width: 25%;" dense>
                            <template v-slot:header.nonMember="{ header }">
                                <p class="text-decoration-underline body-2 font-weight-bold black--text">{{ header.text }}</p>
                            </template>
                            <template v-slot:header.time="{ header }">
                                <p class="body-2 font-weight-bold black--text">{{ header.text }}</p>
                            </template>
                            <template v-slot:header.member="{ header }">
                                <p class="body-2 font-weight-bold black--text">{{ header.text }}</p>
                            </template>
                            <template v-slot:item.time="{ item }">
                                <div class="caption d-flex align-center">{{ item.time }}<v-checkbox class="ml-1"></v-checkbox></div>
                            </template>
                            <template v-slot:item.member="{ item }">
                                <div class="caption">{{ item.member }}</div>
                            </template>
                            <template v-slot:item.nonMember="{ item }">
                                <div class="caption">{{ item.nonMember }}</div>
                            </template>
                        </v-data-table>
                    </div>
                    <v-btn text outlined color="black" style="border-color: black;" width="25%" class="mt-5 ml-4" @click="step = 1"><v-icon>mdi-chevron-left</v-icon>Previous</v-btn>
                    <v-btn @click="step = 3" outlined text style="background-color: #1a2444;" color="white" width="25%" class="mt-5 ml-4">Next Step <v-icon>mdi-chevron-right</v-icon></v-btn>
                </v-card>
            </v-stepper-content>
    
            <v-stepper-content step="3">
                <v-card class="mb-5 py-6 px-4" flat outlined>       
                    <div class="d-flex">
                        <h2 class="ml-4 ms-4 pb-6 d-flex align-center font-weight-bold">
                            <div data-v-18b8984e="" class="d-flex align-center justify-center v-sheet theme--light rounded-pill deep-purple lighten-4" style="height: 40px; width: 40px;">
			                    3
		                    </div>
                            <div class="ml-3">
								Confirm your trip details
							</div>
                        </h2>
                    </div>
                    <div class="d-flex ml-4">
                        <span class="font-weight-bold subtitle-1 mr-1">Not a member? You can book too.</span> <a class="blue--text subtitle-1 text-decoration-underline">Become a member and save a lot!</a>
                    </div>
                    <div class="ml-4 subtitle-1">
                        Enter your cell phone number and click on "Send code". A unique code will be sent to you. Enter this code and apply your member price.
                    </div>
                    <div class="d-flex ml-4 mt-4">
                        <div class="mr-4">
                            <div class="subtitle-1">Mobile number</div>
                            <div class="d-flex">
                                <v-text-field outlined dense class="mr-2"></v-text-field>
                                <v-btn text color="white" style="background-color: rgb(17, 34, 68);" height="41">send code</v-btn>
                            </div>
                        </div>
                        <div>
                            <div class="subtitle-1">Code</div>
                            <div class="d-flex">
                                <v-text-field outlined dense class="mr-2"></v-text-field>
                                <v-btn text color="white" style="background-color: rgb(17, 34, 68);" height="41">check code</v-btn>
                            </div>
                        </div>
                    </div>
                    <v-container class="ml-1">
                        <v-row no-gutters>
                            <v-col class="font-weight-bold body-2 text-h6">
                                Trip details
                            </v-col>
                        </v-row>
                        <v-row class="body-2" no-gutters>
                            <v-col cols="1">Boat:</v-col>
                            <v-col cols="4"></v-col>
                            <v-col class="font-weight-bold" cols="1">Vectra 21</v-col>
                        </v-row>
                    </v-container>
                    
                    
                    <v-btn text outlined color="black" style="border-color: black;" width="25%" class="mt-5 ml-4" @click="step = 2"><v-icon>mdi-chevron-left</v-icon>Previous</v-btn>
                    <v-btn @click="step = 4" outlined text style="background-color: #1a2444;" color="white" width="25%" class="mt-5 ml-4">Next Step <v-icon>mdi-chevron-right</v-icon></v-btn>
                </v-card>
            </v-stepper-content>
    
            <v-stepper-content step="4">
            <v-card class="mb-5" color="grey lighten-1" height="200px">
                <v-card-text>Content for Step 4</v-card-text>
            </v-card>
            <v-btn color="primary" @click="step = 3">Previous</v-btn>
            <v-btn color="primary">Submit</v-btn>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>
  
<script>
export default {
    data() {
        return {
            step: 1,
            header: [
                {
                    text: 'Boat',
                    value: 'boat',
                    sortable: false,
                    width: 105,
                    align: 'start'
                },
                {
                    value: 'people',
                    sortable: false,
                    width: 10,
                    align: 'start'
                },
                {
                    text: 'HP',
                    value: 'hp',
                    sortable: false,
                    width: 10,
                    align: 'start',
                    divider: true
                },
               ...this.getTableHeaderDate()
            ],
            header2: [
                {
                    text: 'Time',
                    value: 'time',
                    sortable: false,
                    divider: true,
                    width: 150
                },
                {
                    text: 'Member',
                    value: 'member',
                    sortable: false,
                },
                {
                    text: 'Non-member',
                    value: 'nonMember',
                    sortable: false,
                    width: 120
                }
            ],
            items : [
                {
                    boat: 'Vantage 22',
                    people: '40',
                    hp: '100'
                },
                {
                    boat: 'Quorum 23',
                    people: '5',
                    hp: '4'
                },
            ],
            items2 : [
                {
                    boat: 'Vectra 21',
                    people: '1',
                    hp: '1'
                }
            ],
            items3: [
                {
                    time: '01:10-02:00',
                    member: '30.00$/h',
                    nonMember: '31.10$/h'
                },
                {
                    time: '06:00-08:00',
                    member: '30.00$/h',
                    nonMember: '30.00$/h'
                },
                {
                    time: '08:15-10:15',
                    member: '30.00$/h',
                    nonMember: '34.60$/h'
                },
                {
                    time: '10:30-12:30',
                    member: '30.00$/h',
                    nonMember: '38.10$/h'
                },
                {
                    time: '12:45-14:45',
                    member: '31.10$/h',
                    nonMember: '40.43$/h'
                },
                {
                    time: '15:00-17:00',
                    member: '31.10$/h',
                    nonMember: '40.43$/h'
                },
                {
                    time: '17:15-19:15',
                    member: '30.00$/h',
                    nonMember: '33.82$/h'
                },
                {
                    time: '19:30-21:30',
                    member: '30.00$/h',
                    nonMember: '31.10$/h'
                }
            ],
            formattedDate: this.getFormattedDate(),
            dialog: false,
            hourItems: ['All', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            minuteItems: ['All', '00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
            selectedHour1: '',
            selectedMinute1: '',
            selectedHour2: '',
            selectedMinute2: '',
        };
    },
    methods: {
        getFormattedDate() {
            const currentDate = new Date();
            return currentDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },
        getTableHeaderDate() {
            const currentDate = new Date();
            const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const formattedDates = [];
            for (let i = 0; i < 12; i++) {
                const nextDate = new Date(currentDate);
                nextDate.setDate(currentDate.getDate() + i);
                const formattedDate = `${nextDate.getDate()} ${monthNames[nextDate.getMonth()]}`;
                formattedDates.push({text: formattedDate, width: 108, value: formattedDate, sortable: false});
            }
            return formattedDates;
        },
        selectHour1(item) {
            this.selectedHour1 = item;
        },
        selectMinute1(item) {
            this.selectedMinute1 = item;
        },
        selectHour2(item) {
            this.selectedHour2 = item;
        },
        selectMinute2(item) {
            this.selectedMinute2 = item;
        },
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
.v-menu__content {
    box-shadow: none;
    background-color: rgb(238, 238, 238);
}
/deep/ .active-step .v-stepper__step__step {
    color: white; 
    width: 33px; 
    height: 33px; 
    font-size: 20px; 
    background-color: #1a2444 !important;
}
/deep/ .inactive-step .v-stepper__step__step {
    color: #1a2444; 
    width: 33px; 
    height: 33px; 
    font-size: 20px; 
    background-color: #bcefff !important;
}
</style>