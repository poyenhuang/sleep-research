<template>
  <div class="container">
    <h1 data-id="11" class="aos-item" data-aos="fadeInUp">想像一下有什麼事會讓你失眠？</h1>
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
