<template>
      <v-card
        outlined
        flat
        class="mb-12"
        color="white"
        height="200px"
      >
        <div class="all5 d-flex ml-4 ms-4 pb-6 flex-column justify-left">
          <div class="d-flex">
            <div class="d-flex align-center justify-center v-sheet rounded-pill light-blue lighten-2 font-weight-bold" style="height: 40px; width: 40px;">1</div>
            <div class="d-flex ml-3 mt-2 font-weight-bold">Choose 1</div>
          </div>
          <div class="3 button d-flex">
            <v-btn text outlined style="border-color: black;" class="mr-1" :disabled="disable"><v-icon>mdi-chevron-left</v-icon></v-btn>
                  <template>
                      <v-btn text outlined style="border-color: black;" > 
                        {{ date }}
                      </v-btn>
                  </template>
              <v-btn text outlined style="border-color: black;" ><v-icon>mdi-chevron-right</v-icon></v-btn>
          </div>
        </div>
        <p class="d-flex ml-5" style="color:black">
            Lake Memphrémagog - Dock Pointe Merry
        </p>
            <template>
    <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="boat font-weight-bold" style="color:black">
                Boat
            </th>
            <th class="icon">
                <v-icon>
                  mdi-account
                </v-icon>
            </th>
            <th class="HP font-weight-bold" style="color:black">
                HP
            </th>
            <th v-for="date in weekendDays">
                <div class="nigger text-no-wrap font-weight-bold ma-0">
                  {{ date }}
                </div>
            </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="item in boats"
            :key="item.boat"
            >
            <td><a class="text-no-wrap text-decoration-underline font-weight-bold">{{ item.name }}</a></td>
            <td>10</td>
            <td>60</td>
            <td v-for="date in weekendDays">
                <v-btn color="green" icon>
                    <v-icon>
                        mdi-clock-outline
                    </v-icon>
                </v-btn>
            </td>
            </tr>
          </tbody>
     </template>
    </v-simple-table>
    </template>
        <div class="2btn ml-5">
        <v-btn
          color="primary"
          @click="e1 = 2"
          class="font-weight-bold mt-5">
          NEXT STEP >
        </v-btn>       
      </div>
      </v-card>
</template>
<script>
export default {
    data () {
      return {
        e1: 1,
        boats: [
            {
                name: "Vectra 21"
            }, 
            {
                name: "Sportfisher 21"
            }
        ]
      }
    },
    computed: {
        weekendDays() {
            const dates = [];
            const startDate = new Date()
            const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long' });
            for (let i = 0; i < 13; i++) {

                const date = new Date(startDate);
                date.setDate(startDate.getDate() + i);
                dates.push(dateFormatter.format(date));
            }
            return dates
        }
    }
  }
</script>
<style lang="css" scoped>
.nigger {
  color: black;
}
</style>