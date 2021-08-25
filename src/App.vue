<template>
  <main>
    <div class="aos-all">
      <Logo :isScrollDownVisible="!isPlayBtnVisible" />
      <Meditation />
      <Image />
      <Overview />
      <Goal />
      <AppWall />
      <Personas />
      <Structure />
      <Wireframe />
      <Detail />
      <Colors />
      <ThankYou />
    </div>
    <transition name="fade">
      <div v-if="isPlayBtnVisible" @click="playAudio()" class="audio-button-wrapper">
        <div v-if="currentlyPlaying" class="pause"><font-awesome-icon icon="pause" /></div>
        <div v-else class="play"><font-awesome-icon icon="play" /></div>
      </div>
    </transition>
    <div class="stars"></div>
  </main>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from './pages/Logo.vue';
import Meditation from './pages/Meditation.vue';
import Image from './pages/Image.vue';
import Overview from './pages/Overview.vue';
import Goal from './pages/Goal.vue';
import AppWall from './pages/AppWall.vue';
import Personas from './pages/Personas.vue';
import Wireframe from './pages/Wireframe.vue';
import Structure from './pages/Structure.vue';
import Detail from './pages/Detail.vue';
import Colors from './pages/Colors.vue';
import ThankYou from './pages/ThankYou.vue';
import AudioLofi from './assets/audios/lofi-01.mp3';

export default {
  name: 'App',
  components: {
    Logo,
    Meditation,
    Image,
    Overview,
    Goal,
    AppWall,
    Personas,
    Wireframe,
    Structure,
    Detail,
    Colors,
    ThankYou,
  },
  data() {
    return {
      AudioLofi,
      audio: '',
      currentlyPlaying: false,
      isPlayBtnVisible: false,
    };
  },
  created() {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated',
      offset: 100,
      delay: 500,
      duration: 1000,
      easing: 'ease',
      startEvent: 'load',
    });
  },
  mounted() {
    this.audio = new Audio(this.AudioLofi);
    this.audio.pause();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    this.audio.removeEventListener('ended', this.handleEnded);
  },
  methods: {
    playAudio() {
      this.audio.addEventListener('ended', this.handleEnded);
      if (!this.currentlyPlaying) {
        this.currentlyPlaying = true;
        this.audio.play();
      } else {
        this.currentlyPlaying = false;
        this.audio.pause();
      }
    },
    handleEnded() {
      this.currentlyPlaying = false;
      this.playAudio();
    },
    handleScroll() {
      if (window.scrollY > 500 && window.scrollY < 10000) {
        this.isPlayBtnVisible = true;
      } else {
        this.isPlayBtnVisible = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
.aos-all {
  z-index: 10;
}

.audio-button-wrapper {
  position: relative;
  width: 56px;
  height: 56px;
  background: #fff;
  border-radius: 30px;
  position: fixed;
  right: 60px;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  cursor: pointer;
  opacity: 0.2;
  z-index: 10;

  &:active {
    transform: scale(0.9)
  }

  &:hover, &:active {
    opacity: 0.6;
  }

  .play {
    padding-top: 2px;
    padding-left: 2px;
  }
  .pause {
    padding-top: 2px;
  }

  transition: all .5s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.stars {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.stars {
  z-index: 0;
  background: transparent url('https://image.ibb.co/mjnygo/stars.png') repeat top center;
  height: 10500px;
  opacity: 0.5;
}

</style>
