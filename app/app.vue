<template>
  <div>
    <label id="darkmode-toggle" for="darkmode">
	    <input type="checkbox" id="darkmode">
    </label>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import "./styles/main.css";
</script>