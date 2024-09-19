<!-- Step 3 -->
<template>
        <v-card class="px-2 pb-5 pt-2"  height="auto" style="box-shadow: none;">
            <div>
                <div class="px-4 py-4">
                    <h2 class="pt-0 pb-2 d-flex align-center font-weight-bold">
                        <v-sheet class="d-flex align-center justify-center rounded-pill deep-purple lighten-4" style="height: 40px; width: 40px">
                            3
                        </v-sheet>
                        <div class="ml-3">Confirm your trip details</div>
                    </h2>

                    <div class="row">
                        <div xs="12" class="col-sm-12 col-md-8 col-lg-8 col-xl-6 col-12">
                            <div class="pb-3 mt-3">
                                <div class="baseline" :class="$vuetify.breakpoint.xsOnly ? 'd-none d-sm-flex' : 'd-lg-flex' ">
                                    <div class="font-weight-bold me-2">Not a member? You can book too.</div>
                                    <a href="" class="anchorbase--text subtitle-1">Become a member and save a lot!</a>
                                </div>
                                <div class="mb-4">
                                    Enter your cell phone number and click on "Send code". A unique code will be sent to you. Enter this code and apply your member price.
                                </div>
                                <v-form class="mb-3" novalidate="novalidate">
                                    <div class="d-flex" :class="$vuetify.breakpoint.xsOnly ? 'flex-wrap' : 'flex-nowrap'">
                                        <div class="pa-0 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
                                            <label for="phone" class="text-no-wrap">Mobile number</label>
                                                <v-text-field hide-details="true" dense enclosed outlined>
                                  
                                                </v-text-field>
                                        </div>
                                        <div class="d-flex align-end" :class="$vuetify.breakpoint.xsOnly ? 'col my-3 pa-0' : 'me-4 ms-2' ">
                                            <v-btn style="height:40px; background-color:#1a2444" color="white--text" class="col-12">
                                                <span>SEND CODE</span>
                                            </v-btn>
                                        </div>
                                        <div class="pa-0 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-12">
                                            <label for="code">Code</label>
                                            <v-text-field hide-details="true" dense enclosed outlined>

                                            </v-text-field>
                                        </div>
                                        <div class="d-flex align-end" :class="$vuetify.breakpoint.xsOnly ? 'col my-3 pa-0' : 'ms-2' ">
                                            <v-btn style="height: 40px; background-color:#1a2444;" color="white--text" class="col-12">
                                                <span>CHECK CODE</span>
                                            </v-btn>
                                        </div>
                                    </div>
                                </v-form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="mb-5 mt-0 pt-0">
                            <div class="d-flex">
                                <div class="px-0 py-0 col col-12">
                                    <div class="font-weight-bold body-2 text-h6"> 
                                        Trip details
                                    </div>
                                </div>
                            </div>
                            <div class="leaders-1" v-if="localData">
                                <div>
                                    <span>Boat:</span>
                                    <span class="font-weight-bold">{{ localData.boat }}</span>
                                </div>
                            </div>
                            <div class="leaders-1" v-if="localData">
                                <div>
                                    <span>Passengers:</span>
                                    <span class="font-weight-bold">{{ localData.passengers }}</span>
                                </div>
                            </div>
                            <div class="leaders-1" v-if="localData">
                                <div>
                                    <span>Date:</span>
                                    <span class="font-weight-bold">{{ localData.day }}</span>
                                </div>
                            </div>
                            <div class="leaders-1">
                                <div>
                                    <span>Time:</span>
                                    <span class="font-weight-bold">{{ localTripData.time }}</span>
                                </div>
                            </div>
                            <div class="leaders-1">
                                <div>
                                    <span>Total Minutes:</span>
                                    <span class="font-weight-bold">{{ localTripData.totalMinutes }}</span>
                                </div>
                            </div>
                            <div class="leaders-1" v-if="localData">
                                <div>
                                    <span>Lake:</span>
                                    <span class="font-weight-bold">{{ localData.lake }}</span>
                                </div>
                            </div>
                            <div class="leaders-1" v-if="localData">
                                <div>
                                    <span>Dock:</span>
                                    <span class="font-weight-bold">{{ localData.dock }}</span>
                                </div>
                            </div>
                            <div class="leaders-1" v-if="localData">
                                <div>
                                    <span>City:</span>
                                    <span class="font-weight-bold">{{ localData.city }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Previous & Next Step Button 3 -->
            <div class="px-4 d-flex" :class="$vuetify.breakpoint.xsOnly ? 'flex-column' : '' ">
                <div class="col-sm-5 col-md-4 col-lg-3 col-12 py-1">
                    <v-btn text @click="$emit('previous-step')" style="border: thin solid; width: 100%; height: 40px;">
                        <v-icon>mdi-chevron-left</v-icon>
                      
                        Previous                         
                    </v-btn> 
                </div>
                  
                <div class="col-sm-5 col-md-4 col-lg-3 col-12 py-1">
                    <v-btn color="#1a2444" @click = "updateStep" class="white--text" style="width: 100%; height: 40px;">
                        Next Step
                      
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-card>             
</template>

<script>
export default {
    name: 'Step3',
    props: {
        data: {
            type: Object,
            default: () => ({})
        },

        tripData: {
            type: Object,
            default: () => ({})
        },
    },
    data() {
        return {
            localData: {},
            localTripData: {},
        };
    },
    mounted() {
        this.localData = {...this.data };
        this.localTripData = {...this.tripData };
    },
    watch: {
        data: {
            handler(newVal) {
                this.localData = {...newVal };
            },
            immediate: true,
            deep: true,
        },
        tripData: {
            handler(newVal) {
                this.localTripData = {...newVal };
            },
            immediate: true,
            deep: true,
        }
    },
    methods: {
    updateStep() {
        this.$emit('next-step');
    }
    }
}
</script>

<style scoped>

.leaders-1 {
    list-style: none;
    max-width: 40em;
    overflow-x: hidden;
    padding: 0;
}

.leaders-1 div::before {
    content: ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . ";
    float: left;
    white-space: nowrap;
    width: 0;
}
.leaders-1 span {
    background: #fff;
    padding-right: .33em;
    font-size: 14px;
}
.leaders-1 span+span {
    background: #fff;
    padding-left: .33em;
    float: right;
    font-size: 14px;
}






</style>