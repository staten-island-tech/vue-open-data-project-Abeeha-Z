<template>
  <Line v-if="loaded" :data="chartData" />
</template>

<script setup>
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
import { ref, computed, onMounted } from 'vue'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const loaded = ref(false)
const rawData = []

const chartData = computed(() => {
  const mappedData = rawData.value.map((item) => ({
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
})

const fetchData = async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
    const data = await response.json()
    rawData.value = data
    loaded.value = true
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  fetchData()
})
</script>
