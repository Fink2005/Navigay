<template>
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
                    <v-btn color="#1a2444" @click="$emit('next-step')" class="white--text" style="width: 100%; height: 40px;">
                        Next Step
                      
                    <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-card>
</template>

<script>
export default {
    name: 'Step1',
    data () {
        return {
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
            boatDetails: [
                {
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
                {
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
            ],
            displayedDays: []
        };
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
            return today.toISOString().substr(0, 10)
        },
        formatDate(date) { // Setup dynamically time for button
            const options = { year: 'numeric', month: 'long', day: 'numeric'};
            return new Date(date).toLocaleDateString(undefined, options );
        },
        updateDisplayedDays() { // Update days when clicking arrow button and appearing days
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
        sendData() {
            this.$emit('dataFromOne', {

            })
        }
    }
}
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