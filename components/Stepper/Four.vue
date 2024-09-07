<template>
    <v-card flat outlined class="mb-5 py-6 px-4">
        <v-card-text>Skibidi</v-card-text>
        <v-btn text outlined color="black" style="border-color: black;" width="25%" class="mt-5 ml-4" @click="$store.commit('decrease')">
            <v-icon>mdi-chevron-left</v-icon>Previous
        </v-btn>
    </v-card>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>