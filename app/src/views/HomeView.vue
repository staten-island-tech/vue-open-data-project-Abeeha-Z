<script setup>
import { ref } from 'vue'
import Line from '@/components/lineChart.vue'
import Bubble from '@/components/bubbleChart.vue'
import { shallowRef } from 'vue'

const chartComponents = {
  line: shallowRef(Line),
  bubble: shallowRef(Bubble),
}

const selectedChart = ref('line')
</script>

<template>
  <main>
    <h1 class="text-center font-bold text-xl">NYC Open Data Charts</h1>
    <select>
      <option disabled value="">Please select one</option>
      <option value="line">NYC Water Consumption v. Population</option>
      <option value="bubble">Crime Severity by Month and Time of Day</option>
    </select>

    <div>
      <component
        :is="chartComponents[selectedChart]"
        :chartData="datasets[selectedChart]"
      ></component>
    </div>
  </main>
</template>
