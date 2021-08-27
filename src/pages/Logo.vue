<template>
  <div data-id="1" class="aos-item container logo-container" data-aos="fadeInUp">
    <img alt="ogo" src="@/assets/dream-garden.png">
    <h1>夢境花園</h1>
    <transition name="fade">
      <div
        v-show="isScrollDownVisible"
        @click="handleScrollDown"
        class="sleeping-scroll"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="800"
      >
        Scroll down <br>
        <font-awesome-icon icon="chevron-down" class="chevron bottom" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isScrollDownVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleScrollDown() {
      window.scrollTo({
        top: 800,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
img {
  margin-top: 120px;
  width: 240px;
}

h1 {
  margin: 60px auto 90px;
}

.logo-container {
  height: 648px;
}

.sleeping-scroll {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-top: 60px;
  height: 48px;
}

.sleeping-scroll .chevron {
  margin-top: 20px;
  display: block;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
  color: #FF4081;
  font-size: 32px;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
</style>
