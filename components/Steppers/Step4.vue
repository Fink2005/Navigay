<template>
    <v-stepper-content step="4" class="px-sm-6 px-2 pt-sm-3 pt-1">
        <v-card class="mb-12"  height="200px" style="box-shadow: none;">     
            </v-card>
                <!-- Previous & Next Step Button 4 -->
                <v-btn text @click="$emit('previous-step')" width="25%" class="pa-03" style="border: thin solid ;">
                    <v-icon>mdi-chevron-left</v-icon>
                
                    Previous
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