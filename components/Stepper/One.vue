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
        <div class="d-flex ml-4 mr-12" style="width: 23%;">
            <v-btn text outlined style="border-color: black;" @click="updateDate(getPreviousDay(currentDate))" :disabled="disable"><v-icon>mdi-chevron-left</v-icon></v-btn>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text outlined style="border-color: black;" :class="$vuetify.breakpoint.xs ? 'mx-1' : ''" v-bind="attrs" v-on="on" :width="$vuetify.breakpoint.xs ? '12rem' : ''">{{ formattedDate }}<v-icon color="blue" v-if="$vuetify.breakpoint.xs">mdi-calendar-check-outline</v-icon></v-btn>
                </template>
                <v-date-picker full-width @input="updateDate" :allowedDates="allowedDates" v-model="currentDate" />
            </v-dialog>
            <v-spacer></v-spacer>
            <v-btn text outlined style="border-color: black;" @click="updateDate(getNextDay(currentDate))"><v-icon>mdi-chevron-right</v-icon></v-btn>
        </div>
        <div class="mt-4 ml-4">
            <span style="font-size: 1.25rem;" :class="$vuetify.breakpoint.xs ? 'subtitle-2 font-weight-bold': ''">Lake {{ lakes[0].name }} - Dock {{ lakes[0].dock }}</span>
            <v-data-table :headers="header" :items="items" hide-default-footer mobile-breakpoint="0">
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
            <span style="font-size: 1.25rem;" :class="$vuetify.breakpoint.xs ? 'subtitle-2 font-weight-bold': ''">Lake {{ lakes[1].name }} - Dock {{ lakes[1].dock }}</span>
            <v-data-table :headers="header" :items="items2" hide-default-footer mobile-breakpoint="0">
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
        <v-btn @click="step = 2" text style="background-color: #1a2444;" color="white" :width="$vuetify.breakpoint.xs ? '95%' : '25%'" class="mt-5 ml-4" :disabled="uncomplete" dark>
            Next Step <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
    </v-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
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
            currentDate: new Date().toISOString().substr(0, 10),
            formattedDate: '',
            tableHeaderDate: [],
            boats: [
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
            lakes: [
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
        ])
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
            this.currentDate = newDate;
            this.disable = (newDate === today);
            this.dialog = false;
            this.formattedDate = this.getFormattedDate(newDate);
            this.tableHeaderDate = this.getTableHeaderDate(newDate);
            this.updateHeaders();
            this.resetClickState();
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
            this.date = this.tableHeaderDate[col].text;
            this.lake = this.lakes[tableIndex].name;
            this.dock = this.lakes[tableIndex].dock;
            this.boat = tableIndex === 0 ? this.items[row].boat : this.items2[row].boat;
            this.hp = tableIndex === 0 ? this.items[row].hp : this.items2[row].hp;  
            this.passengers = tableIndex === 0 ? this.items[row].people : this.items2[row].people;  
            this.licenses = tableIndex === 0 ? this.boats[row].licenses : this.boats[2].licenses;
            this.color = tableIndex === 0 ? this.boats[row].color : this.boats[2].color;
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
            const today = new Date();
            const date = new Date(currentDate);
            date.setDate(date.getDate() - 7);
            if (date < today) {
                date.setDate(today.getDate())
            }  
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