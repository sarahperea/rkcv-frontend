<template>
  <v-container>
      Insert Tab1 content here
      <data-table/>
  </v-container>
</template>

<script>

  import DataTable from '@/components/DataTable'

  export default {
    name: 'Tab1',
    components: {
        DataTable
    },

    data: () => ({
    })
  }
</script>
