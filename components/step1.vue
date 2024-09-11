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
                        SEPTEMBER GAY
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
            <th class="text-left">
                Boat
            </th>
            <th class="text-left">
                <v-icon>
                    mdi-account
                </v-icon>
            </th>
            <th class="text-left">
                HP
            </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="item in desserts"
            :key="item.name"
            >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
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
      }
    },
  }
</script>