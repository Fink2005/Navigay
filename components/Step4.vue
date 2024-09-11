<template>
    <v-stepper-content step="4" class="px-sm-6 px-2 pt-sm-3 pt-1">
        <v-card class="mb-12"  height="200px" style="box-shadow: none;">     
            </v-card>
                <!-- Previous & Next Step Button 4 -->
                <v-btn text @click="e1 = 3" width="25%" class="pa-03" style="border: thin solid ;">
                    <v-icon>mdi-chevron-left</v-icon>
                
                    Previous
                </v-btn>
              
                <v-btn color="#1a2444" @click="$emit('previous-step')" class="white--text pa-03" width="25%">
                    Next Step
                
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
    </v-stepper-content>
</template>

<script>
export default {
    name: 'Step4',
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>