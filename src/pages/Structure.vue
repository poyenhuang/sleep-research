<template>
  <div>
    <div data-id="72" class="aos-item container" data-aos="zoom-in">
      <img :src="ImgStructure" alt="" srcset="">
    </div>
  </div>
</template>

<script>
import ImgStructure from '../assets/images/structure.png';

export default {
  name: 'structure',
  data() {
    return {
      ImgStructure,
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
