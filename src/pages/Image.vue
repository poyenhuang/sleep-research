<template>
  <div class="container" ref="image">
    <h1 data-id="11" class="aos-item" data-aos="fadeInUp">想像一下有什麼事會讓你失眠？</h1>
    <!-- <div v-if="timer >= 5000" class="aos-item">aaa</div>
    <div v-if="timer >= 7000" class="aos-item">bbb</div>
    <div v-if="timer >= 900" class="aos-item">ccc</div>
    <div v-if="timer >= 10000" class="aos-item">ddd</div>
    <div v-if="timer >= 1100" class="aos-item">eee</div> -->
  </div>
</template>

<script>
export default {
  name: 'image',
  data() {
    return {
      timer: 0,
      timerInterval: null,
      isCounting: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const imageContainer = this.$refs.image.getBoundingClientRect();
      if (imageContainer.top < 0) {
        this.startCounting();
      }
    },
    startCounting() {
      if (this.isCounting) {
        return;
      }

      this.timerInterval = setInterval(() => {
        this.timer += 500;
        if (this.timer >= 20 * 1000) {
          clearInterval(this.timerInterval);
        }
      }, 500);
    },
  },
};
</script>

<style scoped>
</style>
