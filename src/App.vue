<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <main>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="aos-all">
      <div data-id="1" class="aos-item" data-aos="fadeInUp">1</div>
      <div data-id="2" class="aos-item" data-aos="fadeInUp">2</div>
      <div data-id="3" class="aos-item" data-aos="fadeInUp">3</div>
      <div data-id="4" class="aos-item" data-aos="fadeInUp">4</div>
      <div data-id="5" class="aos-item" data-aos="fadeInUp">5</div>
      <div data-id="6" class="aos-item" data-aos="fadeInUp">6</div>
      <div data-id="7" class="aos-item" data-aos="fadeInUp">7</div>
      <div data-id="8" class="aos-item" data-aos="fadeInUp">8</div>
      <div data-id="9" class="aos-item" data-aos="fadeInUp">9</div>
      <div data-id="10" class="aos-item" data-aos="fadeInUp">10</div>
      <div data-id="11" class="aos-item" data-aos="fadeInUp">11</div>
      <div data-id="12" class="aos-item" data-aos="fadeInUp">12</div>
      <div data-id="13" class="aos-item" data-aos="fadeInUp">13</div>
      <div data-id="14" class="aos-item" data-aos="fadeInUp">14</div>
      <div data-id="15" class="aos-item" data-aos="fadeInUp">5</div>
      <div data-id="16" class="aos-item" data-aos="fadeInUp">6</div>
      <div data-id="17" class="aos-item" data-aos="fadeInUp">7</div>
      <div data-id="18" class="aos-item" data-aos="fadeInUp">8</div>
      <div data-id="19" class="aos-item" data-aos="fadeInUp">9</div>
      <div data-id="20" class="aos-item" data-aos="fadeInUp">0</div>
      <div data-id="21" class="aos-item" data-aos="fadeInUp">1</div>
      <div data-id="22" class="aos-item" data-aos="fadeInUp">2</div>
      <div data-id="23" class="aos-item" data-aos="fadeInUp">3</div>
      <div data-id="24" class="aos-item" data-aos="fadeInUp">4</div>
    </div>
  </main>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  created() {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated',
    });
  },
};
</script>

<style lang="scss">

@import "./assets/scss/main.scss";
// [data-aos] {
//   visibility: hidden;
// }
// [data-aos].animated {
//   visibility: visible;
// }

.aos-all > div {
  width: 100%;
  height: 30px;
  background: blue;
}
</style>
