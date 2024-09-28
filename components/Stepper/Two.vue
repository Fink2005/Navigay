<template>
    <v-card class="mb-5 py-6 px-4" flat outlined>
        <div class="d-flex">
            <h2 class="ml-4 ms-4 pb-6 d-flex align-center font-weight-bold">
                <div class="d-flex align-center justify-center v-sheet theme--light rounded-pill deep-orange lighten-4" style="height: 40px; width: 40px;">
                    2
                </div>
                <div class="ml-3">
                    Selected trip
                </div>
            </h2>
        </div>
        <div class="d-sm-flex ml-4 body-2" style="width: 56%;">
            <div class="d-flex">
                <div class="d-flex flex-column">
                    <div class="mb-2" v-for="item in category">{{ item }}</div>
                </div>
                <div class="d-flex flex-column ml-sm-8 font-weight-bold" :class="$vuetify.breakpoint.xs ? 'ml-12' : ''">
                    <div class="mb-2" v-for="i in 4">:</div>
                </div>
                <div class="d-flex flex-column text-no-wrap mr-16 ml-1 font-weight-bold">
                    <div class="mb-2">{{ date }}</div>
                    <a class="blue--text text--lighten-1 text-decoration-underline mb-2">{{ city }}</a>
                    <a class="blue--text text--lighten-1 text-decoration-underline mb-2">{{ lake }}</a>
                    <a class="blue--text text--lighten-1 text-decoration-underline mb-2">{{ dock }}</a>
                </div>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex">
                <div class="d-flex flex-column">
                    <div class="mb-2" v-for="item in category2">{{ item }}</div>
                </div>
                <div class="d-flex flex-column ml-sm-8 font-weight-bold" :class="$vuetify.breakpoint.xs ? 'ml-1' : ''">
                    <div class="mb-2" v-for="i in 4">:</div>
                </div>
                <div class="d-flex flex-column text-no-wrap mr-16 ml-1 font-weight-bold">
                    <a class="blue--text text--lighten-1 text-decoration-underline mb-2">{{ boat }}</a>    
                    <div class="mb-2">{{ hp }}</div>
                    <div class="mb-2">{{ passengers }} Passengers</div>
                    <div class="mb-2">{{ licenses }}</div>
                </div>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex">
                <div class="d-flex flex-column">
                    <div class="mb-2" v-for="item in category3">{{ item }}</div>
                </div>
                <div class="d-flex flex-column ml-sm-8 font-weight-bold" :class="$vuetify.breakpoint.xs ? 'ml-3' : ''">
                    <div class="mb-2" v-for="i in 2">:</div>
                </div>
                <div class="d-flex flex-column text-no-wrap ml-1 font-weight-bold">
                    <div class="mb-2" v-for="i in 2">{{ color }}</div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-nowrap">
            <v-data-table hide-default-footer :headers="header" :items="items" dense mobile-breakpoint="0">
                <template v-slot:header.nonMember="{ header }">
                    <p class="text-decoration-underline body-2 font-weight-bold black--text">{{ header.text }}</p>
                </template>
                <template v-slot:header.time="{ header }">
                    <p class="body-2 font-weight-bold black--text">{{ header.text }}</p>
                </template>
                <template v-slot:header.member="{ header }">
                    <p class="body-2 font-weight-bold black--text">{{ header.text }}</p>
                </template>
                <template v-slot:item.time="{ item, index }">
                    <div class="caption d-flex text-no-wrap align-center">{{ item.time }}
                        <v-checkbox 
                        class="ml-1" 
                        @click="handleClick(index)">
                        </v-checkbox>
                    </div>
                </template>
                <template v-slot:item.member="{ item }">
                    <div class="caption">{{ item.member }}</div>
                </template>
                <template v-slot:item.nonMember="{ item }">
                    <div class="caption">{{ item.nonMember }}</div>
                </template>
            </v-data-table>
        </div>
        <div class="d-sm-flex">
            <v-btn text outlined color="black" style="border-color: black;" :width="$vuetify.breakpoint.xs ? '93%' : '25%'" class="mt-sm-5 ml-4" @click="step = 1">
                <v-icon>mdi-chevron-left</v-icon>Previous
            </v-btn>
            <v-bottom-sheet v-model="menu" hide-overlay :max-width="widthUpdate" no-click-animation :disabled="totalMinutes > 60">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn @click="totalMinutes > 60 ? step = 3 : ''" outlined text style="background-color: #1a2444;" color="white" :width="$vuetify.breakpoint.xs ? '93%' : '25%'" class="mt-sm-5 ml-4" :class="$vuetify.breakpoint.xs ? 'mt-2' : ''" v-bind="attrs" v-on="on" dark :disabled="!selectedTimes.length">
                        Next Step <v-icon>mdi-chevron-right</v-icon> 
                    </v-btn>
                </template>
                <v-sheet dark rounded height="87" class="d-flex align-center pr-2 pl-4 py-4">
                    <v-card dark rounded class="d-flex text-no-wrap justify-center align-center mr-2" color="red" width="100%" height="100%">
                        <v-icon class="mr-2">mdi-alert</v-icon> 
                        <div>Minimum hours must over 1h</div>
                    </v-card>
                    <v-btn icon color="white" @click="menu = false"><v-icon>mdi-close</v-icon></v-btn>
                </v-sheet>
            </v-bottom-sheet>
        </div>
    </v-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
    data() {
        return {
            header: [
                {
                    text: 'Time',
                    value: 'time',
                    sortable: false,
                    divider: true,  
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
                },
            ],
            items: [
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
            category: ['Date', 'City', 'Lake', 'Dock'],
            category2: ['Boat', 'HP', 'Passengers', 'Licenses'],
            category3: ['Primary', 'Secondary'],
            duration: [50, 120, 120, 120, 120, 120, 120, 120],
            selectedCheckBox: new Array(8).fill(false),
            selectedTimes: [],
            menu: false,
        }
    },
    computed: {
        ...mapFields([
            'step',
            'date',
            'lake',
            'dock',
            'boat',
            'hp',
            'passengers',
            'licenses',
            'color',
            'time',
            'city',
            'totalMinutes',
        ]),
        widthUpdate() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '77%' 
                case 'sm': return '50%'
                case 'md': return '32%'
                case 'lg': return '24%'
                case 'xl': return '24%'
            }
        }
    },
    methods: {
        sendData(index) {
            this.updateSelectedTimes(index);
            this.time = this.selectedTimes.join(', ');
        },
        handleTotalMinutes(index) {
            if (!this.selectedCheckBox[index]) {
                this.selectedCheckBox[index] = true;
                this.totalMinutes += this.duration[index];
            } else {
                this.selectedCheckBox[index] = false;
                this.totalMinutes -= this.duration[index];
            }
        },
        handleClick(index) {
            this.handleTotalMinutes(index);
            this.sendData(index);
        },
        updateSelectedTimes(index) {
            if (this.selectedCheckBox[index]) {
                this.selectedTimes.push(this.items[index].time);
            } else {
                const timeIndex = this.selectedTimes.indexOf(this.items[index].time);
                if (timeIndex > -1) {
                    this.selectedTimes.splice(timeIndex, 1);
                }
            }
        },
    },
}
</script>