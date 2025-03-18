<script setup>
// const url = "https://data.cityofnewyork.us/resource/uip8-fykc.json";


// async function getData(url) {
//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// const arrests = await getData(url);

//     // id: item.arrest_key,
//     // offense: item.ofns_desc,
//     // ycoord: item.longitude,
//     // xcoord: item.latitude,
//     // race: item.perp_race,

    export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>



