<template>
  <v-container>
    <h2 class="ml-4 ms-4 pb-6 d-flex align-center font-weight-bold">
      <v-sheet
        class="d-flex align-center justify-center rounded-pill light-blue lighten-2"
        style="height: 40px; width: 40px;"
      >1</v-sheet>
      <div class="ml-3">Choose time</div>
    </h2>
    <div class="row no-gutters">
      <div class="d-flex jusify-start col col-1">
        <v-btn style="height:40px;" outlined @click="prevDay">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
      <div class="d-flex justify-center">
        <v-dialog v-model="dialog">
          <template v-slot:activator="{on, attrs}">
            <v-btn
              outlined
              height="40px"
              v-bind="attrs"
              v-on="on"
            >{{ getFormattedDate(buttonDate) }}</v-btn>
          </template>
          <v-date-picker full-width @input="updateDate"></v-date-picker>
        </v-dialog>
      </div>
      <div class="d-flex justify-end col col-1">
        <v-btn style="height:40px;" outlined @click="nextDay">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
    <v-row>
      <span class="subtitle-1">Lake Memphrémagog - Dock Pointe Merry</span>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <thead>
            <tr>
              <th>Boat</th>
              <th th>HP</th>
              <th v-for="date in weekDates" :key="date">{{ date }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="boat in boats" :key="boat.name">
              <td>
                <a :href="boat.link">{{ boat.name }}</a>
              </td>
              <td>{{ boat.hp }}</td>

              <td v-for="date in weekDates" :key="date">
                <v-btn
                  @click="selectDate(boat, date)"
                  icon
                  :color="selectedDate === date && selectedBoat === boat ? 'blue' : 'green'"
                >
                  <v-icon>mdi-clock-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>

    <div class="d-flex flex-row mx-1">
      <div class="col-sm-4 col-md-3 col-12">
        <v-btn
          color="primary"
          class="white--text btn-disable"
          style="width: 100%; height: 40px;"
          @click="$emit('next step')"
          :disabled="!isStepComplete"
        >
          Next Step
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
 
 <script>
export default {
  data() {
    return {
      boats: [
        {
          name: "Vectra 21",
          link: "#",
          hp: 60,
          lake: "Memphrémagog",
          dock: "Pointe Merry",
          city: "Magog"
        },
        {
          name: "Sportfisher 21",
          link: "#",
          hp: 60,
          lake: "Memphrémagog",
          dock: "Pointe Merry",
          city: "Magog"
        }
      ],
      selectedDate: null,
      selectedBoat: null,
      dayOffset: 0,
      buttonDate: new Date().toISOString().substr(0, 10),
      dialog: false
    };
  },
  computed: {
    weekDates() {
      const dates = [];
      for (let i = 0; i < 13; i++) {
        const date = new Date();
        date.setDate(date.getDate() + this.dayOffset + i);
        dates.push(
          `${date.getDate()} ${date.toLocaleString("en-CA", { month: "long" })}`
        );
      }
      return dates;
    },
    calendarDate() {
      const date = new Date();
      date.setDate(date.getDate() + this.dayOffset);
      const dates = `${date.getDate()} ${date.toLocaleString("en-CA", {
        month: "long"
      })}`;
      return dates;
    },
    isStepComplete() {
      return this.selectedBoat !== null && this.selectedDate !== null;
    }
  },
  methods: {
    prevDay() {
      // Function to handle previous day selection
      this.dayOffset -= 7;
    },
    nextDay() {
      // Function to handle next day selection
      this.dayOffset += 7;
    },
    nextStep() {
      // Function to handle the next step action
      this.$emit("dataFromOne", {
        boat: boats,
        day: day,
        lake: boats.lake,
        dock: boats.dock,
        city: boats.city
      });
    },
    selectDate(boat, date) {
      this.selectedBoat = boat;
      this.selectedDate = date;
    },
    getFormattedDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en-CA", options);
    },
    updateDate(newDate) {
      this.buttonDate = newDate;
      this.getFormattedDate(this.buttonDate);
      this.dialog = false;
    }
  }
};
</script>
 
 <style>
</style>