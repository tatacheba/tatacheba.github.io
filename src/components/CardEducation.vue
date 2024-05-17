<template>
  <v-row>
    <v-col v-for="(item, index) in cards" :key="index" cols="12" md="4">
      <v-card color="surface-variant">
        <v-card-title class="text-center"
          ><a :href="item.href" target="_blank">{{ item.title }}</a></v-card-title
        >
        <v-card-text>
          <template v-if="Array.isArray(item.qualification)">
            <ul class="card-list">
              <li v-for="(qual, index) in item.qualification" :key="index">
                {{ qual }} - {{ Array.isArray(item.years) ? item.years[index] : item.years }}
                <a
                  :href="Array.isArray(item.serthref) ? item.serthref[index] : item.serthref"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    v-if="item.serthref !== ''"
                    src="/public/diploma_3914347.png"
                    alt=""
                    height="20px"
                    srcset=""
                /></a>
              </li>
            </ul>
          </template>
          <template v-else>
            <v-card-text rel="noopener noreferrer" v-if="item.qualification">
              {{ item.qualification }} - {{ item.years }}
              <a
                :href="Array.isArray(item.serthref) ? item.serthref[index] : item.serthref"
                target="_blank"
                rel="noopener noreferrer"
                ><img
                  v-if="item.serthref !== ''"
                  src="/public/diploma_3914347.png"
                  alt=""
                  height="20px"
                  srcset=""
              /></a>
            </v-card-text>
          </template>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Card } from '@/types/CardInteface'

export default defineComponent({
  name: 'CardEducation',
  data() {
    return {
      cards: [] as Card[] // Убедитесь, что тип данных для массива cards правильно определен
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', '/data/educationData.json', true)
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          // Успешно получили данные, обновляем состояние cards
          this.cards = JSON.parse(xhr.responseText)
        } else {
          // Обработка ошибок при получении данных
          console.error('Failed to load data:', xhr.statusText)
        }
      }
      xhr.onerror = () => {
        // Обработка ошибок сети
        console.error('Network error occurred')
      }
      xhr.send()
    }
  }
})
</script>

<style scoped>
/* v-card v-card-title img {
  margin-right: 10px !important;
  margin-left: 10px;
} */
.text-center {
  text-align: center;
}
</style>
