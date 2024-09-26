<template>
  <v-card class="px-2 pb-5 pt-2 v-sheet--outlined" style="box-shadow: none">
    <div class="py-2">
      <div>
        <v-card class="mb-3 pt-4 no border" style="box-shadow: none">
          <div>
            <h2
              class="d-flex align-center"
              style="margin: -12px 0 10px 13px;"
              :class="$vuetify.breakpoint.xsOnly ? 'text-h6 font-weight-bold' : ''"
            >
              <v-sheet
                class="d-flex align center justify-center rounded-pill deep-orange lighten-4"
                style="width: 40px; height: 40px;"
              >2</v-sheet>
              <div class="ml-3">Select trip</div>
            </h2>

            <v-card-text
              outlined
              style="box-shadow: none;"
              class="py-0 mb-4 text-nowrap px-1"
              :class="$vuetify.breakpoint.smAndDown ? 'col-12' : 'col-8'"
            >
              <div class="d-flex flex-wrap flex-row pr-sm-5">
                <div class="d-flex align-center order-1 pb-0 col-sm-4 col-12">
                  <p class="mb-0" style="width: 80px; font-size: 14px;">Date</p>
                  <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size: 14px">
                    :
                    <span v-if="boatData">{{ boatData.day }}</span>
                  </p>
                </div>
                <div class="d-flex align-center order-2 pb-0 col-sm-4 col-12">
                  <p class="mb-0" style="width:80px; font-size: 14px;">Boat</p>
                  <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                    :
                    <a
                      class="anchorbase--text text-decoration-underline"
                      v-if="boatData"
                    >{{ boatData.boat }}</a>
                  </p>
                </div>
                <div class="d-flex align-center order-3 pb-0 col-sm-4 col-12">
                  <p class="mb-0" style="width:80px; font-size: 14px;">Primary</p>
                  <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                    :
                    <span v-if="boatData">{{ getBoatColor(boatData.boat).primarycolor }}</span>
                  </p>
                </div>
                <div class="d-flex align-center order-4 pb-0 col-sm-4 col-12">
                  <p class="mb-0" style="width:80px; font-size: 14px;">City</p>
                  <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                    :
                    <a
                      class="anchorbase--text text-decoration-underline"
                      v-if="boatData"
                    >{{ getBoatCity(boatData.boat) }}</a>
                  </p>
                </div>
                <div class="d-flex align-center order-5 pb-0 col-sm-4 col-12">
                  <p class="mb-0" style="width:80px; font-size: 14px;">HP</p>
                  <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                    :
                    <span v-if="boatData">{{ getBoatHP(boatData.boat) }}</span>
                  </p>
                </div>
                <div class="d-flex align-center order-6 pb-0 col-sm-4 col-12">
                  <p class="mb-0" style="width:80px; font-size: 14px;">Secondary</p>
                  <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                    :
                    <span v-if="boatData">{{ getBoatColor(boatData.boat).secondaryColor }}</span>
                  </p>
                </div>
                <div class="d-flex align-center order-7 pb-0 col-sm-4 col-12">
                  <p class="mb-0" style="width:80px; font-size: 14px;">Lake</p>
                  <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                    :
                    <a
                      class="anchorbase--text text-decoration-underline"
                      v-if="boatData"
                    >{{ getBoatLake(boatData.boat) }}</a>
                  </p>
                </div>
                <div class="d-flex align-center order-8 pb-0 col-sm-4 col-12">
                  <p class="mb-0" style="width:80px; font-size: 14px;">Passengers</p>
                  <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                    :
                    <span v-if="boatData">{{ getBoatPassengers(boatData.boat) }}</span>
                  </p>
                </div>
                <div class="d-flex align-center order-9 pb-0 col-sm-4 col-12">
                  <p class="mb-0" style="width:80px; font-size: 14px;">Dock</p>
                  <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                    :
                    <a
                      class="anchorbase--text text-decoration-underline"
                      v-if="boatData"
                    >{{ getBoatDock(boatData.boat) }}</a>
                  </p>
                </div>
                <div class="d-flex align-center order-10 pb-0 col-sm-4 col-12">
                  <p class="mb-0" style="width:80px; font-size: 14px;">License</p>
                  <p class="pl-sm-5 subtitle-2 mb-0" style="font-weight: bold; font-size:14px">
                    :
                    <span v-if="boatData">{{ getBoatLicense(boatData.boat) }}</span>
                  </p>
                </div>
              </div>
              <div class="d-flex flex-row mt-3">
                <div class="py-0">
                  <v-simple-table class="tab-display table-mobile">
                    <template v-slot:default>
                      <tbody></tbody>
                    </template>
                  </v-simple-table>
                </div>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>