<template>
  <v-app>
    <v-main>
      <v-tabs>
        <v-tab v-for="(tab, index) in tabs" :key="tab" @click="selectTab(index)">
          {{ tab }}
        </v-tab>
      </v-tabs>
      <component :is="activeComponent"/>
      <DataTable/>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>

import DataTable from './components/DataTable';
import Tab1 from './modules/Tab1'
import Tab2 from './modules/Tab2'
import Tab3 from './modules/Tab3'

export default {
  name: 'App',

  components: {
    Tab1,
    Tab2,
    Tab3,
    DataTable
  },

  data: () => ({
    tabs: [
      'Tab1',
      'Tab2',
      'Tab3'
    ],
    activeComponent: 'Tab1'
  }),
  methods: {
    selectTab(tabIndex) {
      this.activeComponent = this.tabs[tabIndex];
    }
  }
};
</script>
