<template>
 <v-container>
   <div>
        <h4 class="font-weight-bold mb-6 mt-4">Choose time</h4>
        <h4 class="subtitle-1">Lake Memphrémagog - Dock Pointe Merry</h4>
   </div>
    <v-row align="center" justify="center">
        <v-col cols="auto">
            <v-btn @click="prevDay">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-col>
        <v-col cols="2">
            <v-menu
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width=""
            >
                <template v-slot:activator="{on, attrs}">
                    <v-text-field
                        v-model="selectedDate"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        append-icon="mdi-calendar"
                    ></v-text-field>
                </template>
                <v-date-picker v-model="selectedDate" @input="menu = false"></v-date-picker>
            </v-menu>
        </v-col>
        <v-col cols="-5">
        <v-btn @click="nextDay">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
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
                        <td v-for="availability in boat.availabilities" :key="availability.date">
                            <v-btn
                                icon
                                :color="availability.isAvailable ? 'green' : 'blue'"
                                :disabled="!availability.isAvailable"
                            >
                                <v-icon>mdi-clock-outline</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-col>
    </v-row>
    <v-row class="mt-6 pl-3">
      <v-btn color="primary" large @click="nextStep">Next Step
         <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
 </v-container>
</template>

<script>
 export default {
  data() {
    return {
      menu: false,
      selectedDate: new Date().toISOString().substr(0, 10),
      boats: [
        {
          name: "Vectra 21",
          link: "#",
          hp: 60,
          availabilities: [
            { date: "18 August", isAvailable: true },
            { date: "19 August", isAvailable: true },
            { date: "20 August", isAvailable: true },
            { date: "21 August", isAvailable: true },
            { date: "22 August", isAvailable: true },
            { date: "23 August", isAvailable: true },
            { date: "24 August", isAvailable: true },
          ],
        },
        {
          name: "Sportfisher 21",
          link: "#",
          hp: 60,
          availabilities: [
            { date: "18 August", isAvailable: true },
            { date: "19 August", isAvailable: true },
            { date: "20 August", isAvailable: false },
            { date: "21 August", isAvailable: true },
            { date: "22 August", isAvailable: true },
            { date: "23 August", isAvailable: true },
            { date: "24 August", isAvailable: true },
          ],
        },
      ],
    };
  },
  computed: {
    weekDates() {
      const dates = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        dates.push(`${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}`);
      }
      return dates;
    },
  },
  methods: {
    prevDay() {
      // Function to handle previous day selection
      const date = new Date(this.selectedDate);
      date.setDate(date.getDate() - 1);
      this.selectedDate = date.toISOString().substr(0, 10);
    },
    nextDay() {
      // Function to handle next day selection
      const date = new Date(this.selectedDate);
      date.setDate(date.getDate() + 1);
      this.selectedDate = date.toISOString().substr(0, 10);
    },
    nextStep() {
      // Function to handle the next step action
      alert("Proceeding to the next step...");
    },
  },
};
</script>

<style>

</style>