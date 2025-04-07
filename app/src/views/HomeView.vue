<script setup></script>

<template>
  <main class="py-8">
    <h1 class="text-4xl font-bold text-center text-slate-800 mb-8">NYC OPEN DATA CHARTS</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-2xl font-semibold text-slate-700 mb-4">Population & Water Consumption</h2>
        <img
          clsss="object-cover"
          src="https://images.pexels.com/photos/861414/pexels-photo-861414.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
        <p class="text-slate-600 mb-4">
          Explore the relationship between NYC's population growth and water consumption patterns
          over time.
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-2xl font-semibold text-slate-700 mb-4">Crime Frequency Analysis</h2>
        <img
          class="object-cover"
          src="https://images.pexels.com/photos/7785046/pexels-photo-7785046.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
        <p class="text-slate-600 mb-4">
          Visualize crime frequency patterns across different times of day and months of the year.
        </p>
      </div>
    </div>
  </main>
</template>
