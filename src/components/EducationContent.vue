<template>
  <section class="education">
    <h2>Education</h2>
    <!-- <CardMain :data="educationData" /> -->
    <CardEducation />
  </section>
</template>

<script lang="ts">
// import CardMain from './CardMain.vue'
import CardEducation from './CardEducation.vue'
import educationData from '../data/educationData.json'

export default {
  name: 'EducationContent',
  components: {
    // CardMain,
    CardEducation
  },
  data() {
    return {
      educationData: educationData
    }
  }
}
</script>

<style scoped></style>
