<template>
  <main>
    <div class="aos-all">
      <Logo :isScrollDownVisible="!isPlayBtnVisible" id="logo"/>
      <Meditation id="meditation" />
      <ImagePage id="image" />
      <Overview id="overview" />
      <Goal id="goal" />
      <AppWall id="appwall" />
      <Personas id="personas" />
      <Mindmap id="mindmap" />
      <Story id="story" />
      <Structure id="structure" />
      <Colors id="color" />
      <Wireframe id="wireframe" />
      <Detail id="detail" />
      <ThankYou id="thankyou" />
    </div>
    <transition name="fade">
      <div v-if="isPlayBtnVisible" @click="playAudio()" class="audio-button-wrapper">
        <div v-if="currentlyPlaying" class="pause"><font-awesome-icon icon="pause" /></div>
        <div v-else class="play"><font-awesome-icon icon="play" /></div>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="isScrollIndicatorVisible" class="hooper-indicators">
        <div
          v-for="(item, index) in positionList"
          :key="item"
          :class="['hooper-indicator', { 'is-active': index === currentPositionIndex }]"
          @click="handleScrollDown(index)"
        />
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
import ImagePage from './pages/Image.vue';
import Overview from './pages/Overview.vue';
import Goal from './pages/Goal.vue';
import AppWall from './pages/AppWall.vue';
import Personas from './pages/Personas.vue';
import Wireframe from './pages/Wireframe.vue';
import Structure from './pages/Structure.vue';
import Detail from './pages/Detail.vue';
import Colors from './pages/Colors.vue';
import Story from './pages/Story.vue';
import Mindmap from './pages/Mindmap.vue';
import ThankYou from './pages/ThankYou.vue';
import AudioLofi from './assets/audios/lofi-01.mp3';

const scrollList = [
  'meditation',
  'image',
  'overview',
  'goal',
  'appwall',
  'personas',
  'mindmap',
  'story',
  'structure',
  'color',
  'wireframe',
  'detail',
  'thankyou',
];

export default {
  name: 'App',
  components: {
    Logo,
    Meditation,
    ImagePage,
    Overview,
    Goal,
    AppWall,
    Personas,
    Wireframe,
    Structure,
    Detail,
    Colors,
    Story,
    Mindmap,
    ThankYou,
  },
  data() {
    return {
      AudioLofi,
      audio: '',
      currentlyPlaying: false,
      isPlayBtnVisible: false,
      positionList: [],
      currentPositionIndex: -1,
      isScrollIndicatorVisible: false,
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
    setTimeout(() => {
      this.positionList = scrollList.map((section) => this.offset(section));
    }, 3000);

    this.audio = new Audio(this.AudioLofi);
    this.audio.pause();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
      this.checkPosition(window.scrollY);

      if (window.scrollY > 500 && window.scrollY < 10000) {
        this.isPlayBtnVisible = true;
      } else {
        this.isPlayBtnVisible = false;
      }
    },
    checkPosition(scrollY) {
      const passList = this.positionList.filter((position) => scrollY > position - 50);
      this.currentPositionIndex = passList.length - 1;
      this.isScrollIndicatorVisible = this.currentPositionIndex > -1
        && scrollY > 100;
    },
    offset(name) {
      console.log(name);
      const el = document.getElementById(name);
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return rect.top + scrollTop;
    },
    handleScrollDown(index) {
      window.scrollTo({
        top: this.positionList[index] - 40,
        behavior: 'smooth',
      });
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

.hooper-indicators {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 35%;
  right: 24px;
  z-index: 10;
  cursor: pointer;

  .hooper-indicator {
    position: relative;
    width: 8px;
    height: 8px;
    padding: 0;
    margin: 4px;
    background: #d8d8d8;
    cursor: pointer;
    flex: 0 0 auto;
    border-radius: 5px;
    transition: all .3s ease-in-out;
    z-index: 10;
    opacity: 0.5;

    &:hover {
      transform: scale(1.8);
      opacity: 1;
    }

    &.is-active {
      background: #F6593E;
      opacity: 0.8;
    }
  }
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
