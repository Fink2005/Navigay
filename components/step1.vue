<template>
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
                  <template>
                      <v-btn text outlined> 
                      </v-btn>
                  </template>
              <v-btn text outlined style="border-color: black;" ><v-icon>mdi-chevron-right</v-icon></v-btn>
          </div>
        </div>
        <div>
            Lake Memphrémagog - Dock Pointe Merry
        </div>
            <template>
    <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="boat">
                Boat
            </th>
            <th class="icon">
                <v-icon>
                    mdi-account
                </v-icon>
            </th>
            <th class="HP">
                HP
            </th>
            <th v-for="date in weekendDays">
                <div class="text-no-wrap">
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
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>       
        <v-btn text>
          Cancel
        </v-btn>
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