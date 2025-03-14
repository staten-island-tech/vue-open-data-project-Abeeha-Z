<template>
    <Bar id="sample-chart" :options="ChartOptions" :data="ChartData"></Bar>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, legend, BarElement, CategorySchale, LinearScale } from 'chart.js';
import ChartData from './ChartData.vue';
  ChartJS.register(Title, Tooltip, legend, BarElement, CategorySchale, LinearScale);



    data() {
    return {
        labels: [January, February, March],
        datasets: [ { data: [15, 40, 12]}]
    }
}
</script>

<style lang="scss" scoped>

</style>