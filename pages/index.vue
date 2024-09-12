<template>
  <steppers></steppers>
</template>

<script>


export default {
  
}
</script>

<style lang="scss" scoped>
::v-deep .active-step .v-stepper__step__step {
    color: white; 
    width: 33px; 
    height: 33px; 
    font-size: 20px; 
    background-color: #1a2444 !important;
}

::v-deep .inactive-step .v-stepper__step__step {
    color: #1a2444; 
    width: 33px; 
    height: 33px; 
    font-size: 20px; 
    background-color: #bcefff !important;
}

::v-deep .v-date-picker-header {
  font-size: 21px !important;
}

::v-deep .v-date-picker-table .v-btn {
  font-size: 16px !important;
  font-weight: normal;
}

::v-deep .v-date-picker-table th {
  font-size: 16px !important;
}
</style>