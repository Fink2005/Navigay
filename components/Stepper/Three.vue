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
        <slot></slot>
    </v-card>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>