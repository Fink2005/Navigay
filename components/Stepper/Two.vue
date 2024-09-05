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
                <div class="mb-2">Date</div>
                <div class="mb-2">City</div>
                <div class="mb-2">Lake</div>
                <div class="mb-2">Dock</div>
            </div>
            <div class="d-flex flex-column ml-8 font-weight-bold">
                <div class="mb-2" v-for="i in 4">:</div>
            </div>
            <div class="d-flex flex-column mr-16 ml-1 font-weight-bold">
                <div class="mb-2" v-if="receivedData.date">{{ receivedData.date }}</div>
                <a class="blue--text text--lighten-1 text-decoration-underline mb-2">Ho Chi Minh</a>
                <a class="blue--text text--lighten-1 text-decoration-underline mb-2">{{ receivedData.lake }}</a>
                <a class="blue--text text--lighten-1 text-decoration-underline mb-2">{{ receivedData.dock }}</a>
            </div>
            <div class="d-flex flex-column ml-16">
                <div class="mb-2">Boat</div>
                <div class="mb-2">HP</div>
                <div class="mb-2">Passengers</div>
                <div class="mb-2">Licenses</div>
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
                <div class="mb-2">Primary</div>
                <div class="mb-2">Secondary</div>
            </div>
            <div class="d-flex flex-column ml-8 font-weight-bold">
                <div class="mb-2">:</div>
                <div class="mb-2">:</div>
            </div>
            <div class="d-flex flex-column ml-1 font-weight-bold">
                <div class="mb-2">{{ receivedData.color }}</div>
                <div class="mb-2">{{ receivedData.color }}</div>
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
        <slot></slot>
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
        }
    },
    
}
</script>