// В вашем компоненте CardMain.vue
<template>
  <div class="card" v-for="card in cards" :key="card.title">
    <h3>
      <a :href="card.href" target="_blank" rel="noopener noreferrer">{{
        card.title
      }}</a>
    </h3>
    <template v-if="Array.isArray(card.qualification)">
      <ul class="card-list">
        <li
          v-for="(qual, index) in card.qualification"
          :key="index"
          :href="card.href"
        >
          {{ qual }} - {{ card.years[index] }}
        </li>
      </ul>
    </template>
    <template v-else>
      <ul class="card-list">
        <li>{{ card.qualification }} - {{ card.years }}</li>
      </ul>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Card } from "@/types/CardInteface";

export default defineComponent({
  name: "CardMain",
  data() {
    return {
      cards: [] as Card[], // Убедитесь, что тип данных для массива cards правильно определен
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/data/educationData.json", true);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          // Успешно получили данные, обновляем состояние cards
          this.cards = JSON.parse(xhr.responseText);
        } else {
          // Обработка ошибок при получении данных
          console.error("Failed to load data:", xhr.statusText);
        }
      };
      xhr.onerror = () => {
        // Обработка ошибок сети
        console.error("Network error occurred");
      };
      xhr.send();
    },
  },
});
</script>

<style scoped>
.card img {
  height: 30px;
  width: auto;
}
</style>
