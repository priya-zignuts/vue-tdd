<template>
  <div>
    <h1>View User Details</h1>
    <span><h3>{{userData.username}}</h3></span>
    <span><p>{{userData.email}}</p></span>
  </div>
</template>

<script setup>
const props = defineProps({
  userData: {
    type: Object,
  },
});
</script>
