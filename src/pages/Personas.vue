<template>
  <div class="persona-container container">
    <h1 data-id="50" class="aos-item" data-aos="fadeInUp">這些人，有著睡眠的困擾</h1>
    <div
      class="image-wrapper aos-item"
      data-id="51"
      data-aos="fadeInUp"
      data-aos-offset="300"
      data-aos-delay="1000"
    >
      <img :src="ImgPersona01" alt="" srcset="">
    </div>
    <div
      class="image-wrapper aos-item"
      data-id="52" data-aos="fadeInUp"
      data-aos-offset="300"
      data-aos-delay="1000"
    >
      <img :src="ImgPersona02" alt="" srcset="">
    </div>
    <div
      class="image-wrapper aos-item"
      data-id="53" data-aos="fadeInUp"
      data-aos-offset="300"
      data-aos-delay="1000"
    >
      <img :src="ImgPersona03" alt="" srcset="">
    </div>
  </div>
</template>

<script>
import ImgPersona01 from '../assets/images/persona-01.png';
import ImgPersona02 from '../assets/images/persona-02.png';
import ImgPersona03 from '../assets/images/persona-03.png';

export default {
  name: 'meditation',
  data() {
    return {
      ImgPersona01,
      ImgPersona02,
      ImgPersona03,
    };
  },
};
</script>

<style scoped lang="scss">
.persona-container {
  padding: 60px 0;
}

h1 {
  margin-bottom: 60px;
}

.image-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;

  img {
    width: 90%;
    margin: auto;
  }
}
</style>
