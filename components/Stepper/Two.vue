<template>
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
                <div class="mb-2" v-for="item in category">{{ item }}</div>
            </div>
            <div class="d-flex flex-column ml-8 font-weight-bold">
                <div class="mb-2" v-for="i in 4">:</div>
            </div>
            <div class="d-flex flex-column mr-16 ml-1 font-weight-bold">
                <div class="mb-2">{{ receivedData.date }}</div>
                <a class="blue--text text--lighten-1 text-decoration-underline mb-2">{{ city }}</a>
                <a class="blue--text text--lighten-1 text-decoration-underline mb-2">{{ receivedData.lake }}</a>
                <a class="blue--text text--lighten-1 text-decoration-underline mb-2">{{ receivedData.dock }}</a>
            </div>
            <div class="d-flex flex-column ml-16">
                <div class="mb-2" v-for="item in category2">{{ item }}</div>
            </div>
            <div class="d-flex flex-column ml-8 font-weight-bold">
                <div class="mb-2" v-for="i in 4">:</div>
            </div>
            <div class="d-flex flex-column mr-16 ml-1 font-weight-bold">
                <a class="blue--text text--lighten-1 text-decoration-underline mb-2">{{ receivedData.boat }}</a>    
                <div class="mb-2">{{ receivedData.hp }}</div>
                <div class="mb-2">{{ receivedData.passengers }} Passengers</div>
                <div class="mb-2">{{ receivedData.licenses }}</div>
            </div>
            <div class="d-flex flex-column ml-16">
                <div class="mb-2" v-for="item in category3">{{ item }}</div>
            </div>
            <div class="d-flex flex-column ml-8 font-weight-bold">
                <div class="mb-2" v-for="i in 2">:</div>
            </div>
            <div class="d-flex flex-column ml-1 font-weight-bold">
                <div class="mb-2" v-for="i in 2">{{ receivedData.color }}</div>
            </div>
        </div>
        <div>
            <v-data-table hide-default-footer :headers="header" :items="items" style="width: 25%;" dense>
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
                    <div class="caption d-flex align-center">{{ item.time }}
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
        <v-btn text outlined color="black" style="border-color: black;" width="25%" class="mt-5 ml-4" @click="$store.commit('decrease')">
            <v-icon>mdi-chevron-left</v-icon>Previous
        </v-btn>
        <v-bottom-sheet v-model="menu" hide-overlay width="24%" persistent no-click-animation :disabled="totalMinutes > 60">
            <template v-slot:activator="{ on, attrs }">
                <v-btn @click="totalMinutes > 60 ? $store.commit('increment') : ''" outlined text style="background-color: #1a2444;" color="white" width="25%" class="mt-5 ml-4" v-bind="attrs" v-on="on" dark :disabled="!selectedTimes.length">
                    Next Step <v-icon>mdi-chevron-right</v-icon> {{disable}}
                </v-btn>
            </template>
            <v-sheet dark rounded height="87" class="d-flex align-center pr-2 pl-4 py-4">
                <v-card dark rounded class="d-flex justify-center align-center mr-2" color="red" width="100%" height="100%">
                    <v-icon class="mr-2">mdi-alert</v-icon> 
                    <div>Minimum hours must over 1 h</div>
                </v-card>
                <v-btn icon color="white" @click="menu = false"><v-icon>mdi-close</v-icon></v-btn>
            </v-sheet>
        </v-bottom-sheet>
    </v-card>
</template>

<script>
export default {
    props: {
        receivedData: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            header: [
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
            city: 'Ho Chi Minh',
            duration: [50, 120, 120, 120, 120, 120, 120, 120],
            totalMinutes: 0,
            selectedCheckBox: new Array(8).fill(false),
            selectedTimes: [],
            menu: false,
        }
    },
    methods: {
        sendData(index) {
            this.updateSelectedTimes(index);
            this.$emit('dataFromTwo', {
                time: this.selectedTimes.join(', '),
                city: this.city,
                totalMinutes: this.totalMinutes,
                date: this.receivedData.date,
                lake: this.receivedData.lake,
                dock: this.receivedData.dock,
                boat: this.receivedData.boat,
                hp: this.receivedData.hp,
                passengers: this.receivedData.passengers,
                licenses: this.receivedData.licenses, 
                color: this.receivedData.color,
            });
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