<template>
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
        <div class="ml-4">
            <div class="font-weight-bold body-2 text-h6">
                Trip details
            </div>
            <div class="d-flex justify-space-between" v-for="item in category" style="width: 42%;">
                <div class="leaders-1">
                    <span style="font-size: 14px; background: white;">
                        {{ item.name }}:
                    </span>
                </div>
                <span class="font-weight-bold" style="font-size: 14px; background: white;">
                    {{ receivedData[item.propItem] }}
                </span>
            </div>
        </div>
        <v-btn text outlined color="black" style="border-color: black;" width="25%" class="mt-5 ml-4" @click="$store.commit('decrease')">
            <v-icon>mdi-chevron-left</v-icon>Previous
        </v-btn>
        <v-btn @click="$store.commit('increment')" outlined text style="background-color: #1a2444;" color="white" width="25%" class="mt-5 ml-4">
            Next Step <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
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
            category: [
                {
                    name: 'Boat',
                    propItem: 'boat'
                }, 
                {
                    name: 'Passengers',
                    propItem: 'passengers'
                }, 
                {
                    name: 'Date',
                    propItem: 'date'
                }, 
                {
                    name: 'Time',
                    propItem: 'time'
                }, 
                {
                    name: 'Total Minutes',
                    propItem: 'totalMinutes'
                }, 
                {
                    name: 'Lake',
                    propItem: 'lake'
                }, 
                {
                    name: 'Dock',
                    propItem: 'dock'
                }, 
                {
                    name: 'City',
                    propItem: 'city'
                },   
            ],
        }
    }
}
</script>

<style scoped>
    div.leaders-1 :before {
        content: ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . ";
        float: left;
        white-space: nowrap;
        width: 0;
    }
</style>