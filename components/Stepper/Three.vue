<template>
    <v-card class="mb-5 py-6 px-4" flat outlined>       
        <div class="d-flex">
            <h2 class="ml-4 ms-4 pb-6 d-flex align-center font-weight-bold">
                <div class="d-flex align-center justify-center v-sheet theme--light rounded-pill deep-purple lighten-4" style="height: 40px; width: 40px;">
                    3
                </div>
                <div class="ml-3">
                    Confirm your trip details
                </div>
            </h2>
        </div>
        <div class="d-none d-sm-flex ml-4">
            <span class="font-weight-bold subtitle-1 mr-1">Not a member? You can book too.</span> <a class="blue--text subtitle-1 text-decoration-underline">Become a member and save a lot!</a>
        </div>
        <div class="ml-4 subtitle-1">
            Enter your cell phone number and click on "Send code". A unique code will be sent to you. Enter this code and apply your member price.
        </div>
        <div class="d-sm-flex ml-4 mt-4 mb-7">
            <div class="mr-sm-4" :class="$vuetify.breakpoint.xs ? 'mb-2' : ''">
                <div class="subtitle-1">Mobile number</div>
                <div class="d-sm-flex">
                    <v-text-field outlined dense class="mr-2"></v-text-field>
                    <v-btn text color="white" style="background-color: rgb(17, 34, 68);" height="41" :width="$vuetify.breakpoint.xs ? '98%' : ''">send code</v-btn>
                </div>
            </div>
            <div>
                <div class="subtitle-1">Code</div>
                <div class="d-sm-flex">
                    <v-text-field outlined dense class="mr-2"></v-text-field>
                    <v-btn text color="white" style="background-color: rgb(17, 34, 68);" height="41" :width="$vuetify.breakpoint.xs ? '98%' : ''">check code</v-btn>
                </div>
            </div>
        </div>
        <div class="ml-4" style="max-width: 590px;">
            <div class="font-weight-bold body-2 text-h6">
                Trip details
            </div>
            <div class="leaders-1" v-for="item in category">
                <div>
                    <span style="font-size: 14px; background: white;">
                        {{ item.name }}:
                    </span>
                    <span class="font-weight-bold" style="font-size: 14px; background: white;">
                        {{ $store.state[item.storeItem] }}
                    </span>
                </div>
            </div>
        </div>
        <div class="d-sm-flex">
            <v-btn text outlined color="black" style="border-color: black;" :width="$vuetify.breakpoint.xs ? '93%' : '25%'" class="mt-5 ml-4" @click="step = 2">
                <v-icon>mdi-chevron-left</v-icon>Previous
            </v-btn>
            <v-btn @click="step = 4" outlined text style="background-color: #1a2444;" color="white" :width="$vuetify.breakpoint.xs ? '93%' : '25%'" class="mt-sm-5 ml-4" :class="$vuetify.breakpoint.xs ? 'mt-2' : ''">
                Next Step <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </v-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
    data() {
        return {
            category: [
                {
                    name: 'Boat',
                    storeItem: 'boat'
                }, 
                {
                    name: 'Passengers',
                    storeItem: 'passengers'
                }, 
                {
                    name: 'Date',
                    storeItem: 'date'
                }, 
                {
                    name: 'Time',
                    storeItem: 'time'
                }, 
                {
                    name: 'Total Minutes',
                    storeItem: 'totalMinutes'
                }, 
                {
                    name: 'Lake',
                    storeItem: 'lake'
                }, 
                {
                    name: 'Dock',
                    storeItem: 'dock'
                }, 
                {
                    name: 'City',
                    storeItem: 'city'
                },   
            ],
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
        ])
    }
}
</script>

<style scoped>
    div.leaders-1 {
        max-width: 40em;
        padding: 0;
        overflow-x: hidden;
        list-style: none;
    }
    div.leaders-1 div:before {
        content: ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . ";
        float: left;
        white-space: nowrap;
        width: 0;
    }
    div.leaders-1 span:first-child {
        padding-right: 0.33rem;
        background: white;
    }
    div.leaders-1 span + span {
        float: right;
        padding-left: 0.33rem;
        background: white;
    }
    ::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details {
        margin-bottom: 0px !important;
    }
</style>