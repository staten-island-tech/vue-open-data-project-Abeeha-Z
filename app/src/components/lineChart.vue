<template>
  <Line :data="chartData" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { computed } from 'vue'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  name: 'lineChart',
  components: {
    Line,
  },
  data() {
    return {
      loaded: false,
      rawData: [],
    }
  },

  computed: {
    chartData() {
      const mappedData = this.rawData.map((item) => ({
        year: item.year,
        waterConsumption: item.nyc_consumption_million_gallons_per_day,
        population: item.new_york_city_population,
      }))

      return {
        labels: mappedData.map((item) => item.year),
        datasets: [
          {
            label: 'Water Consumption (Hundreds of Gallons)',
            data: mappedData.map((item) => item.waterConsumption * 10000),
            borderColor: 'rgb(107,133,195)',
          },
          {
            label: 'Population',
            data: mappedData.map((item) => item.population),
            borderColor: 'rgb(250,160,160)',
          },
        ],
      }
    },
  },

  async mounted() {
    this.loaded = false

    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
      const data = await response.json()
      this.rawData = data
      console.log('Raw Data -', this.rawData)

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
}
</script>
