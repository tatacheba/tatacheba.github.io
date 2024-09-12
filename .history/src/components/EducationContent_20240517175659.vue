<template>
  <section class="education">
    <h2>Education</h2>
    <!-- <CardMain :data="educationData" /> -->
    <CardEducation />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardEducation from './CardEducation.vue'

export default defineComponent({
  name: 'EducationContent',
  components: {
    CardEducation
  },
  data() {
    return {
      educationData: null
    }
  },
  async mounted() {
    try {
      const response = await fetch('/data/educationData.json')
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      this.educationData = await response.json()
    } catch (error) {
      console.error('Failed to load data:', error)
    }
  }
})
</script>

<style scoped></style>
