<template>
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-divider></v-divider>
      <v-stepper-step 
        :complete="e1 > 1"
        step="1">
      <v-divider></v-divider>
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2">
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3"
        step="3">
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step 
        step="4">
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          outlined
          flat
          class="mb-12"
          color="white"
          height="200px"
        >
          <div class="all5 d-flex ml-4 ms-4 pb-6 flex-column">
            <div class="d-flex">
              <div class="d-flex align-center justify-center v-sheet rounded-pill light-blue lighten-2" style="height: 40px; width: 40px;">1</div>
              <div class="ml-3 mt-2">Choose 1</div>
            </div>
            <div class="3 button d-flex">
              <v-btn text outlined style="border-color: black;" class="mr-1" :disabled="disable"><v-icon>mdi-chevron-left</v-icon></v-btn>
              <v-dialog v-model="dialog">
                    <template>
                        <v-btn> </v-btn>
                    </template>
                </v-dialog>
                <v-btn text outlined style="border-color: black;" ><v-icon>mdi-chevron-right</v-icon></v-btn>
            </div>
          </div>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card>
          <v-card-title>Confirm your trip details</v-card-title>
          <v-card-text>
            <p>
              Not a member? You can book too.
              <v-btn text color="primary">Become a member and save a lot!</v-btn>
            </p>
            <v-form> 
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Mobile number"
                    v-model="mobileNumber"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Code"
                    v-model="code"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-btn style="" @click="sendCode" color="primary" block>Send Code</v-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <v-btn @click="checkCode" color="primary" block>Check Code</v-btn>
                </v-col>
              </v-row>
              <v-divider class="my-4"></v-divider>
              <v-list>
                <v-list-item>
                  <v-list-item-content>Boat:</v-list-item-content>
                  <v-list-item-content class="text-right">Vectra 21</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Passengers:</v-list-item-content>
                  <v-list-item-content class="text-right">10</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Date:</v-list-item-content>
                  <v-list-item-content class="text-right">11 September</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Time:</v-list-item-content>
                  <v-list-item-content class="text-right">17:15-19:15</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Total Minutes:</v-list-item-content>
                  <v-list-item-content class="text-right">120</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Lake:</v-list-item-content>
                  <v-list-item-content class="text-right">Memphrémagog</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Dock:</v-list-item-content>
                  <v-list-item-content class="text-right">Pointe Merry</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>City:</v-list-item-content>
                  <v-list-item-content class="text-right">Magog</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-form>
          </v-card-text>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
        <v-stepper-content step="4">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
    
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>
