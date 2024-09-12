<template>
  <div>
    <!-- Контент страницы -->
    <div style="height: 1500px">
      <p>Содержимое страницы...</p>
    </div>
    <!-- Кнопка для прокрутки вверх -->
    <button v-scroll-to="'#top'" class="scroll-button">Scroll to Top</button>
    <!-- Скрытый элемент в начале страницы, на который будет происходить прокрутка -->
    <div id="top"></div>
  </div>
</template>

<script>
export default {
  name: "ScrollButton",
};
</script>

<style>
.scroll-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.scroll-button:hover {
  background-color: #0056b3;
}
</style>
