<template>
  <div>

  </div>
</template>

<script setup>
export const data = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchData = async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data.value = await response.json();
    console.log(data);
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});


</script>

<style lang="scss" scoped>

</style>