<template>
    <div>
        <v-card class="py-2 px-6">
            <h2 class="py-0 pt-1 d-flex align-center font-weight-bold" :class="$vuetify.breakpoint.xsOnly ? 'text-h6 font-weight-bold' : ''">
                <v-sheet 
                    class="d-flex align-center justify-center rounded-pill lime lighten-3" 
                    style="height: 40px; width: 40px;"
                >
                    4
                </v-sheet>
                <div class="ml-3">Contact details</div>

            </h2>
            <v-form novalidate="novalidate" class="v-form mt-4">
                <div class="row pb-3">
                    <div class="py-0 d-flex flex-column col-sm-4 col-12">
                        <label for="firstname">First name</label>
                        <v-text-field 
                            dense 
                            enclosed 
                            outlined
                            :rules="[rules.required]"
                        >

                        </v-text-field>
                    </div>
                    <div class="py-0  col-sm-4 col-12">
                        <label for="lastname">Last name</label>
                        <v-text-field 
                            dense 
                            enclosed 
                            outlined
                            :rules="[rules.required]"
                        >

                        </v-text-field>
                    </div>
                    <div class="py-0  col-sm-4 col-12">
                        <label for="date">Date of birth</label>
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }" >
                                <v-text-field
                                    v-model="date" 
                                    dense 
                                    enclosed 
                                    outlined
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="[rules.required, rules.dateOfBirth]"

                                >
                                </v-text-field>
                            </template>
                            <v-date-picker
                                v-model="date"
                                no-title
                                scrollable
                                @input="$refs.menu.save(date)"
                                
                            >
                            </v-date-picker>
                        </v-menu>
                    </div>
                    <div class="py-0  col-sm-4 col-12">
                        <label for="email">Email</label>
                        <v-text-field 
                            dense 
                            enclosed 
                            outlined
                            :rules="[rules.required, rules.email]"
                        >

                        </v-text-field>
                    </div>
                    <div class="py-0  col-sm-4 col-12">
                        <label for="postalCode">Zip code</label>
                        <v-text-field 
                            dense 
                            enclosed 
                            outlined
                            :rules="[rules.required]"
                        >

                        </v-text-field>
                    </div>
                    <div class="py-0  col-sm-4 col-12">
                        <label>Navigation experience</label>
                        <v-select :items="items" label="None" outlined dense style="height:40px">

                        </v-select>
                    </div>
                    <div class="pt-0 pb-3 col col-12">
                        <div>
                            <div class="row flex-row">
                                <div class="col col-6">
                                    <div>Boat license</div>
                                    <div class="layout align-center">
                                        <v-sheet>

                                        </v-sheet>
                                    </div>
                                </div>
                                <div class="col col-6">
                                    <div>Driver license</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-form>
            <div class="mt-8 v-sheet" style="width:100%">
                <span class="font-weight-bold">Important reminders</span>
                <ul>
                    <li class="mt-2">The key to start the boat is in a key box at the stern of the boat. Of the boat. You access the key box with the access code that will be sent to you by sms after payment.</li>
                    <li class="mt-2">You must return the boat by the scheduled return time. A fee of $250 will be charged.</li>
                    <li class="mt-2">You must return the boat to a full tank of gas, otherwise a 250 will be charged.</li>
                    <li class="mt-2">You must return the boat clean, or a cleaning fee of $100 will be charged.</li>
                    <li class="mt-2">The captain must be at least 25 years old, hold a boat license and navigate the boat for the entire outing.</li>
                </ul>
            </div>

            <div>
                <div class="py-0 px-0 d-flex">
                    <v-checkbox>

                    </v-checkbox>
                    <a href="https://navigo.club/en/rules/" class="anchorbase--text d-flex align-center">I read and accept the terms and conditions of use</a>
                </div>

                <div class="row" :class="$vuetify.breakpoint.xsOnly ? 'flex-column' : '' ">
                    <div class="col-sm-5 col-md-4 col-lg-3 col-12" :class="$vuetify.breakpoint.xsOnly ? 'py-1' : '' ">
                        <v-btn text @click="$emit('previous-step')" style="border: thin solid; width: 100%; height: 40px;">
                            <v-icon>mdi-chevron-left</v-icon>
                      
                            Previous                         
                        </v-btn> 
                    </div>
                  
                    <div class="col-sm-5 col-md-4 col-lg-3 col-12" :class="$vuetify.breakpoint.xsOnly ? 'py-1' : '' ">
                        <v-btn color="#1a2444" class="white--text" style="width: 100%; height: 40px;" disabled>
                            Proceed To Checkout
                      
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
            <!-- Previous & Proceed To Checkout Buttons -->
            
            
        </v-card>
    </div>
    
                
              
                
</template>

<script>
  export default {
    data: () => ({
        date: '',
        menu: false,
        items: ['Advanced', 'Intermediate', 'Beginner', 'None'],
        email: '',
        rules: {
            required: value => !!value || 'This field is required.',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid email address.'
            },
            dateOfBirth: value => {
                if (!value) return true; // allow empty value
                const birthDate = new Date(value);
                const today = new Date();
                if (birthDate > today) {
                    return 'You cannot choose a date in the future';
                }
                let calculatedAge = today.getFullYear() - birthDate.getFullYear();
                let m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    calculatedAge--;
                }
                if (calculatedAge < 25) {
                    return 'You must be 25 or older';
                }
                return true;
            }
        }
    }),
  }
</script>

<style scoped>
.v-date-picker-header__value button {
    font-size: 21px;
}

.v-date-picker-table .v-btn, .v-date-picker-table th {
    font-size: 16px;
}

.theme--light.v-btn.v-btn--disabled {
    color: #ffffff4d !important;
}

.theme--light.v-btn.v-btn--disabled .v-icon {
    color: #ffffff4d !important;
}

.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: #1a2444 !important; 
}

@media (max-width: 500px) {
    .anchorbase--text, .mt-2 {
        font-size: 12px;
    }
}

</style>