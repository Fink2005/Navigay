<template>
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
                <v-btn text outlined style="border-color: black;" class="mr-1" @click="updateDate(getPreviousDay(currentDate))" :disabled="disable"><v-icon>mdi-chevron-left</v-icon></v-btn>
                <v-dialog v-model="dialog">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn text outlined style="border-color: black;" class="mr-1" v-bind="attrs" v-on="on">{{ formattedDate }}</v-btn>
                    </template>
                    <v-date-picker full-width @input="updateDate" :allowedDates="allowedDates"></v-date-picker>
                </v-dialog>
                <v-btn text outlined style="border-color: black;" @click="updateDate(getNextDay(currentDate))"><v-icon>mdi-chevron-right</v-icon></v-btn>
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
            <span style="font-size: 1.25rem;">Lake {{ lake[0].name }} - Dock {{ lake[0].dock }}</span>
            <v-data-table :headers="header" :items="items" hide-default-footer>
                <template v-slot:header.people="{ header }"> 
                    <v-icon>mdi-account</v-icon>
                </template>
                <template v-slot:item.boat="{ item }">
                    <a class="font-weight-bold blue--text text--lighten-1 text-decoration-underline d-flex text-no-wrap">{{ item.boat }}</a>
                </template>
                <template v-for="(item, indexCol) in tableHeaderDate" v-slot:[`item.${item.value}`]="{ index }">
                    <v-btn icon :color="isSelected(index, indexCol, 0) ? 'blue' : 'green'" @click="handleClick(index, indexCol, 0)">
                        <v-icon>mdi-clock-outline</v-icon>
                    </v-btn>
                </template> 
            </v-data-table>
        </div>
        <div class="ml-4">
            <span style="font-size: 1.25rem;">Lake {{ lake[1].name }} - Dock {{ lake[1].dock }}</span>
            <v-data-table :headers="header" :items="items2" hide-default-footer>
                <template v-slot:header.people="{ header }"> 
                    <v-icon>mdi-account</v-icon>
                </template>
                <template v-slot:item.boat="{ item }">
                    <a class="font-weight-bold blue--text text--lighten-1 text-decoration-underline d-flex text-no-wrap">{{ item.boat }}</a>
                </template>
                <template v-for="(item, indexCol) in tableHeaderDate" v-slot:[`item.${item.value}`]="{ index }">
                    <v-btn icon :color="isSelected(index, indexCol, 1) ? 'blue' : 'green'" @click="handleClick(index, indexCol, 1)">
                        <v-icon>mdi-clock-outline</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </div>
        <v-btn @click="$store.commit('increment')" text style="background-color: #1a2444;" color="white" width="25%" class="mt-5 ml-4" :disabled="uncomplete" dark>
            Next Step <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            header: [],
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
            dialog: false,
            hourItems: ['All', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            minuteItems: ['All', '00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
            selectedHour1: '',
            selectedMinute1: '',
            selectedHour2: '',
            selectedMinute2: '',
            currentDate: new Date().toISOString().substr(0, 10),
            formattedDate: '',
            tableHeaderDate: [],
            boat: [
                {
                    name: 'Vantage 22',
                    licenses: 'A',
                    color: 'Brown'
                },
                {
                    boat: 'Quorum 23',
                    licenses: 'Aa',
                    color: 'Blue'
                },
                {
                    name: 'Vectra 21',
                    licenses: '11',
                    color: 'Blue'
                }
            ],
            lake: [
                {
                    name: 'Memphrémagog',
                    dock: 'North'
                },
                {
                    name: 'Massawippi',
                    dock: 'Dock'
                }
            ],
            selectedButton: [
                { row: -1, col: -1, state: false },
                { row: -1, col: -1, state: false },
            ],
            uncomplete: true,
            allowedDates: (date) => {
                const today = new Date().toISOString().substr(0, 10);
                return date >= today;
            },
            disable: true,
        };
    },
    methods: {
        getFormattedDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString(undefined, options);
        },
        getTableHeaderDate(newDate) {
            const currentDate = new Date(newDate);
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
        updateDate(newDate) {
            const today = new Date().toISOString().substr(0, 10);
            console.log(`newDate: ${newDate}, today: ${today}`);
            this.currentDate = newDate;
            this.disable = (newDate === today);
            this.dialog = false;
            this.formattedDate = this.getFormattedDate(newDate);
            this.tableHeaderDate = this.getTableHeaderDate(newDate);
            this.updateHeaders();
            this.resetClickState();
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
        updateHeaders() {
            this.header = [
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
                ...this.tableHeaderDate
            ];
        },
        toggleClick(row, col, tableIndex) {
            this.resetClickState();
            this.selectedButton[tableIndex].state = true;
            this.selectedButton[tableIndex].row = row;
            this.selectedButton[tableIndex].col = col;
        },
        resetClickState() {
            this.selectedButton.forEach(button => {
                button.state = false;
                button.row = -1;
                button.col = -1;
            });
        },
        isSelected(row, col, tableIndex) {
            return this.selectedButton[tableIndex].row === row && this.selectedButton[tableIndex].col === col;
        },
        sendData(row, col, tableIndex) {
            const data = {
                date: this.tableHeaderDate[col].text,
                lake: this.lake[tableIndex]?.name || '',
                dock: this.lake[tableIndex]?.dock || '',
                boat: tableIndex === 0 ? this.items[row]?.boat || '' : this.items2[row]?.boat || '',
                hp: tableIndex === 0 ? this.items[row]?.hp || '' : this.items2[row]?.hp || '',
                passengers: tableIndex === 0 ? this.items[row]?.people || '' : this.items2[row]?.people || '',
                licenses: tableIndex === 0 ? this.boat[row]?.licenses || '' : this.boat[2]?.licenses || '',
                color: tableIndex === 0 ? this.boat[row]?.color || '' : this.boat[2]?.color || '',
            };
            this.$emit('dataFromOne', data);
            this.uncomplete = false;
        },
        handleClick(index, indexCol, tableIndex) {
            this.toggleClick(index, indexCol, tableIndex);
            this.sendData(index, indexCol, tableIndex);
        },
        getNextDay(currentDate) {
            const date = new Date(currentDate);
            date.setDate(date.getDate() + 7);
            return date.toISOString().substr(0, 10);
        },
        getPreviousDay(currentDate) {
            const date = new Date(currentDate);
            date.setDate(date.getDate() - 7);
            return date.toISOString().substr(0, 10);
        },
    },  
    mounted() {
        this.tableHeaderDate = this.getTableHeaderDate(this.currentDate);
        this.formattedDate = this.getFormattedDate(this.currentDate);
        this.updateHeaders();
    }
}
</script>


<style scoped>
.v-menu__content {
    box-shadow: none;
    background-color: rgb(238, 238, 238);
}
</style>