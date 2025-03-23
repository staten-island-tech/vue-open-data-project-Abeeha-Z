<template>
  <Bubble :data="bubbleData" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, Tooltip, Legend, PointElement, LinearScale } from 'chart.js'
import { Bubble } from 'vue-chartjs'
import { computed } from 'vue'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export default {
  name: 'bubbleChart',
  components: {
    Bubble,
  },
  data() {
    return {
      loaded: false,
      apiData: [],
    }
  },

  computed: {
    bubbleData() {
      const resData = this.apiData.map((item) => ({
        name: item.dba,
        lat: item.latitude,
        long: item.longitude,
        cusine: item.cuisine_description,
        score: item.score,
      }))

      return {
        datasets: [
    {
      label: 'Dataset 1',
      data: [
        { x: lat, y: long, r: size },
      ],
      },
    ]
    },
  },

  async mounted() {
    this.loaded = false

    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
      const data = await response.json()
      this.apiData = data
      console.log('Raw Data -', this.apiData)

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
}
</script>
