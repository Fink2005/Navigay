<template>
    <div>
      <!-- First Header -->
      <v-header class="d-flex justify-space-around py-2 px-4">
        <v-spacer></v-spacer>
        <div class="d-flex align-end">
          <span class="mx-3 text-decoration-none body-2">About us</span>
          <span class="mx-3 text-decoration-none body-2">Contact us</span>
          <span class="mx-3 text-decoration-none body-2">Press kit</span>
          <span class="mx-3 text-decoration-none body-2">Lakes</span>
          <span class="mx-3 text-decoration-none body-2">Rules</span>
          <span class="mx-3 text-decoration-none body-2">Blog</span>
          <span class="mx-3 text-decoration-none body-2">Hosting</span>
          <span class="mx-3 text-decoration-none body-2">Become a franchisee</span>
          <span class="mx-3 text-decoration-none body-2">French</span>
        </div>
      </v-header>
      <v-divider class="bold" color="#8b8b8b"></v-divider>
  
      <!-- Second Header -->
      <v-header class="d-flex px-4 py-4">
        <div>
          <img src="https://app.navigo.club/_nuxt/img/logo_mobile.b5097fc.svg" alt="" />
        </div>
        <div class="d-flex align-center mx-2">
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">Subscription</span>
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">Advantages</span>
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">Functioning</span>
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">The boats</span>
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">Boating License</span>
          <span class="mx-2 text-decoration-none body-2 font-weight-medium">Pricing</span>
        </div>
  
        <v-row class="d-flex justify-end align-center">
          <v-col cols="12" class="d-flex justify-end">
            <v-btn class="text-no-wrap rounded-pill d-flex align-center" color="#1976d2" height="60px" width="170px">
              RENT A BOAT
            </v-btn>
          </v-col>
        </v-row>
      </v-header>
  
  
      <!-- Step Progress Line -->
      <div class="progress-container">
            <div class="progress-bar">
                <div class="arrow-complete"></div>
                <div class="step completed">1</div>
                <div class="arrow"></div>
                <div class="step active">2</div>
                <div class="arrow"></div>
                <div class="step">3</div>
                <div class="arrow"></div>
                <div class="step">4</div>
            </div>
        </div>
  
      <!-- White Card Section -->
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>
                <v-icon class="mr-2" color="blue">mdi-numeric-1-circle</v-icon>
                <span class="font-weight-bold">Choose time</span>
              </v-card-title>
             
              <v-card-text>
                <v-row class="align-center">
                  <v-col cols="12" md="3">
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Select Date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        @input="menu = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
  
                  <v-col cols="12" md="9">
                    <v-row>
                      <v-col
                        v-for="(day, index) in days"
                        :key="index"
                        cols="2"
                        class="text-center"
                      >
                        <v-icon color="green">mdi-clock-outline</v-icon>
                        <div>{{ day }}</div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="justify-end">
                <v-btn color="primary" dark>Next Step</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menu: false,
        date: '',
        days: [
          '21 August',
          '22 August',
          '23 August',
          '24 August',
          '25 August',
          '26 August',
        ],
        step: 1,
      };
    },
  };
  </script>
  
  <style scoped>
.progress-container {
    display: flex;
    justify-content: space-between;
    padding: 20px 100px;
    background-color: #E5F6FC;
}

.progress-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
}

.step {
    width: 40px;
    height: 40px;
    background-color: #bcefff;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    font-weight: bold;
    color: #1a2444;
    z-index: 1;
}

.step.completed {
    background-color: #2a3a4e;
    color: #fff;
}

.step.active {
    background-color: #bcefff;
}

.arrow {
    width: 22%;
    height: 5;
    border: solid #bcefff 4px;
}



.arrow-complete {
    width: 22%;
    height: 5;
    border: solid #2a3a4e 4px;
}
</style>