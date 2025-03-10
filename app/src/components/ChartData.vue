<script setup>
const url = "https://data.cityofnewyork.us/resource/uip8-fykc.json";

async function getData(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

const arrests = result;


// const config = {
//   type: 'radar',
//   data: data,
//   options: {
//     elements: {
//       line: {
//         borderWidth: 3
//       }
//     }
//   },
// };

//graph with latitude asnd longitude axes, points plotted based on provided location, and map of manhattan, aligninig with map coordinates is in the background.

</script>

<template>
  <main>
    <button @click="getData(url)">Get Data</button>
    <div v-for="arrest in arrests" :key="arrest.ofns_desc">
      <h1>${arrest.ofns_desc}</h1>
      <h2>${arrest.perp_race}</h2>
    </div>
  </main>
</template>


