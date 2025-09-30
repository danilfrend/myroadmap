<template>
  <div class="container">
    <h1>Age Calculator</h1>
    <input type="text" ref="birthInput" placeholder="Pick a date">
    <button @click="calculateAge">Calculate Age</button>
    <p v-if="age !== null">Your age: {{ age }} years</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import datepicker from 'js-datepicker'
import { DateTime } from 'luxon'

const birthInput = ref(null)
const age = ref(null)

onMounted(() => {
  // js-datepicker initialisieren
  datepicker(birthInput.value, {
    // optional: Format anpassen
    formatter: (input, date) => {
      input.value = date.toISOString().split('T')[0] // yyyy-mm-dd
    }
  })
})

function calculateAge() {
  if (!birthInput.value.value) {
    alert("Please pick a valid date")
    return
  }

  const birthDate = DateTime.fromISO(birthInput.value.value)
  const now = DateTime.now()
  const years = now.diff(birthDate, 'years').years
  age.value = Math.floor(years)
}
</script>

<style>
.container {
  /* max-width: 100%; */
  text-align: center;
}
input {
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  width: 90%;
}
button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>
