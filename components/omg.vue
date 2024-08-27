<template>
    <v-stepper v-model="step">
      <!-- Step 3 -->
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
                  <v-btn @click="sendCode" color="primary" block>Send Code</v-btn>
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
          <v-card-actions>
            <v-btn @click="previousStep">Previous</v-btn>
            <v-btn @click="nextStep" color="primary">Next Step</v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
    </v-stepper>
  </template>