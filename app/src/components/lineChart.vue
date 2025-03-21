<template>
  <Line :data="data" />

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
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'lineChart',
  components: {
    Line
  },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false

    try {
      const {WaterData} = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json');
      this.chartdata = WaterData
      console.log(WaterData);
      
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}

const waterData = {
  const pop = waterData("new_york_city_population");
  const consumption
}
</script>