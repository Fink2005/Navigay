<template>
    <v-card flat outlined class="mb-5 py-6 px-4">
        <div class="d-flex">
            <h2 class="ml-4 ms-4 d-flex align-center font-weight-bold">
                <div class="d-flex align-center justify-center v-sheet theme--light rounded-pill lime lighten-3" style="height: 40px; width: 40px;">
                    4
                </div>
                <div class="ml-3">
                    Contact details
                </div>
            </h2>
        </div>  
        <div class="ml-1">
            <div class="d-sm-flex"> 
                <v-col class="mt-0 pt-0 pb-0">
                    <div class="subtitle-1">First name</div>
                    <v-text-field outlined 
                    dense 
                    v-model="first" 
                    :rules="[() => !!first || 'This field is required']" 
                    required />
                </v-col>
                <v-col class="mt-0 pt-0 pb-0">
                    <div class="subtitle-1">Last name</div>
                    <v-text-field outlined 
                    dense 
                    v-model="last" 
                    :rules="[() => !!last || 'This field is required']" 
                    required />
                </v-col>
                <v-col class="mt-0 pt-0 pb-0">
                    <div class="subtitle-1">Date of birth</div>
                    <v-menu v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="300">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field outlined 
                            dense 
                            v-bind="attrs" 
                            v-on="on" 
                            v-model="date" 
                            :rules="[
                                () => !!date || 'This field is required',
                                () => !isFutureDate(date) || 'You cannot choose a date in the future',
                                () => isAtLeast25YearsOld(date) || 'You must have 25 year old or over'
                            ]" 
                            required
                            readonly>
                                {{ date }}
                            </v-text-field>
                        </template>
                        <v-date-picker full-width v-model="date" no-title scrollable @input="saveDate" />
                    </v-menu>
                </v-col>
            </div>
            <div class="d-sm-flex">
                <v-col class="mt-0 pt-0 pb-0">
                    <div class="subtitle-1">Email</div>
                    <v-text-field outlined 
                    dense 
                    v-model="email" 
                    :rules="[
                        () => !!email || 'This field is required', 
                        () => /.+@.+\..+/.test(email) || 'Invalid email address'
                    ]" 
                    required />
                </v-col>
                <v-col class="mt-0 pt-0 pb-0">
                    <div class="subtitle-1">Zip code</div>
                    <v-text-field outlined 
                    dense 
                    v-model="zipCode" 
                    :rules="[() => !!zipCode || 'This field is required']" 
                    required />
                </v-col>
                <v-col class="mt-0 pt-0 pb-0">
                    <div class="subtitle-1">Navigation experience</div>
                    <v-select outlined 
                    dense
                    :items="navigationExperienceLevels"
                    v-model="navigationExperience"
                    :rules="[() => !!navigationExperience || 'This field is required']"
                    required />
                </v-col>
            </div>
            <div class="d-sm-flex">
                <v-col class="mt-0 pt-0 pb-0" v-for="(license, index) in licenses" :key="index">
                    <div class="subtitle-1">{{ license }}</div>
                    <StepperFourDragDrop v-model="images[index]" />
                    <v-btn text style="background-color: #1a2444;" color="white" class="text-none mt-4" dark width="48%" :disabled="!images[index]">Click here to Upload</v-btn>
                </v-col>
            </div>
        </div>
        <div class="mt-8 ml-4 v-sheet theme--light" style="width: 700px;">
            <span class="font-weight-bold">Important reminders:</span> 
            <ul>
                <li class="mt-2" v-for="reminder in reminders" :key="reminder">
                    {{ reminder }}
                </li> 
            </ul>
        </div>
        <div class="d-flex ml-3">
            <v-checkbox></v-checkbox>
            <a href="https://navigo.club/en/rules/" class="blue--text d-flex align-center">
				I read and accept the terms and conditions of use
			</a>
        </div>
        <div class="d-sm-flex">
            <v-btn text outlined color="black" style="border-color: black;" :width="$vuetify.breakpoint.xs ? '93%' : '25%'" class="mt-2 ml-4" @click="step = 3">
                <v-icon>mdi-chevron-left</v-icon>Previous
            </v-btn>
            <v-btn outlined text style="background-color: #1a2444;" color="white" :width="$vuetify.breakpoint.xs ? '93%' : '25%'" class="mt-sm-2 ml-4" :class="$vuetify.breakpoint.xs ? 'mt-2' : ''">
                Proceed To Checkout<v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </v-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
    data() {
        return {
            first: '',
            last: '',
            email: '',
            zipCode: '',
            navigationExperience: '',
            navigationExperienceLevels: ['Advanced', 'Intermediate', 'Beginner', 'None'],
            date: '',
            menu: false,
            licenses: ['Boat license', 'Driver license'],
            reminders: [
                'The key to start the boat is in a key box at the stern of the boat. Of the boat. You access the key box with the access code that will be sent to you by sms after payment.',
                'You must return the boat by the scheduled return time. A fee of $250 will be charged.',
                'You must return the boat to a full tank of gas, otherwise a 250 will be charged.',
                'You must return the boat clean, or a cleaning fee of $100 will be charged.',
                'The captain must be at least 25 years old, hold a boat license and navigate the boat for the entire outing.'
            ],
            file: null,
            dragActive: false,
            images: [null, null]
        }
    },
    computed: {
        ...mapFields([
            'step',
        ]),
    },
    methods: {
        saveDate(selectedDate) {
            this.date = selectedDate;
            this.menu = false;
        },
        isFutureDate(date) {
            const today = new Date();
            const selectedDate = new Date(date);
            return selectedDate > today;
        },
        isAtLeast25YearsOld(date) {
            const today = new Date();
            const selectedDate = new Date(date);
            const age = today.getFullYear() - selectedDate.getFullYear();
            const monthDifference = today.getMonth() - selectedDate.getMonth();
            
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < selectedDate.getDate())) {
                return age - 1 >= 25;
            }
            return age >= 25;
        },
    }
}
</script>