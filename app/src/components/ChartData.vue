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

</script>

<template>
  <main>
    <button @click="getData(url)">Get Data</button>
  </main>
</template>