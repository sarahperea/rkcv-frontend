<template>
  <v-container>
      Insert Tab1 content here
      <data-table/>
  </v-container>
</template>

<script>

  import DataTable from '@/components/DataTable'
  import {getTableData} from "@/api/table";

  export default {
    name: 'Tab1',
    components: {
        DataTable
    },

    data: () => ({
    }),
    mounted () {
        this.initializeTableData()
    },
    methods: {
        async initializeTableData () {
          
          // sample try catch, getting of response
          try {
            let response = await getTableData();
            console.log(response)
          } catch (err) {
            console.log(err)
          }
        }
    }
  }
</script>
