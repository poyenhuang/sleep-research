<template>
  <div>
    <div data-id="91" class="aos-item" data-aos="fadeInUp">
      <h1>Colors</h1>
    </div>
    <div data-id="92" class="aos-item container" data-aos="zoom-in">
      <img :src="ImgColor" alt="" srcset="">
    </div>
  </div>
</template>

<script>
import ImgColor from '../assets/images/colors.png';

export default {
  name: 'colors',
  data() {
    return {
      ImgColor,
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  max-width: 800px;
}
.container {
  height: 240px;
  min-height: 240px;
  width: 100%;
  border-radius: 50px;
  margin-bottom: 400px;
}
</style>
