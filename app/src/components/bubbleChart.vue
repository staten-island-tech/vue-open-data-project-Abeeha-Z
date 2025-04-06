<template>
  <<<<<<< HEAD
  <Bubble v-if="loaded" :chart-options="chartOptions" :data="bubbleData" />
  =======
  <Bubble :data="bubbleData" :options="options" />
  >>>>>>> parent of 479b78d (hbhj)
</template>

<script lang="ts">
import { Chart as ChartJS, Tooltip, Legend, PointElement, LinearScale } from 'chart.js'
import { Bubble } from 'vue-chartjs'
import { computed } from 'vue'
import { ref } from 'vue'
import { onMounted } from 'vue'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

const fetchResData = async () => {
  try {
    const response = await fetch(
      'https://data.cityofnewyork.us/resource/qgea-i56i.json?$limit=1000&$offset=4000',
    )
    const data = await response.json()
    apiData.value = data
    loaded.value = true
  } catch (e) {
    console.error(e)
  }
}

const bubbleData = computed(() => {
  const raceColors = {
    BLACK: '#333333',
    WHITE: '#f5f5f5',
    'WHITE HISPANIC': '#f8d7da',
    'BLACK HISPANIC': '#8a6d3b',
    'ASIAN / PACIFIC ISLANDER': '#d6eaaa',
    'AMERICAN INDIAN/ALASKAN NATIVE': '#d1ecf1',
    UNKNOWN: '#6c757d',
    null: '#6c757d',
  }

  const crimeDatasets = {}

  const chartOptions = computed(() => ({
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
        y: {
          title: {
            display: true,
            text: 'Time',
          },
        },
      },
    },
  }))

  apiData.value.forEach((item) => {
    const race = item.susp_race

    let severity = 0
    if (item.law_cat_cd === 'VIOLATION') severity = 3
    else if (item.law_cat_cd === 'MISDEMEANOR') severity = 6
    else if (item.law_cat_cd === 'FELONY') severity = 9

    let hour = 0
    if (item.cmplnt_fr_tm) {
      hour = parseInt(item.cmplnt_fr_tm.split(':')[0])
    }

    if (!crimeDatasets[race]) {
      crimeDatasets[race] = {
        label: race,
        backgroundColor: raceColors[race],
        data: [],
      }
    }

    let month = 0
    if (item.cmplnt_fr_dt) {
      month = parseInt(item.cmplnt_fr_dt.split('-')[1])
    }
    crimeDatasets[race].data.push({
      x: month,
      y: hour,
      r: severity,
    })
  })

  return {
    datasets: Object.values(crimeDatasets),
  }
})

onMounted(async () => {
  await fetchResData()
})

defineProps({
  type: Object,
})
</script>
