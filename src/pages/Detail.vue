<template>
  <div>
    <div data-id="80" class="aos-item" data-aos="fadeInUp">
      <h1>詳細功能</h1>
    </div>
    <div class="container">
      <div class="detail-container">
        <div data-id="811" class="image-wrapper aos-item" data-aos="fade-right">
          <img :src="ImgMeditation" alt="" srcset="">
        </div>
        <div data-id="812" class="detail-wrapper aos-item" data-aos="fade-left">
          <div class="label">FEATURE #1</div>
          <div class="title">睡眠儀式</div>
          <p>使用者藉由建立睡眠儀式排程，梳理今天的情緒，來提醒大腦切換到休眠模式</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="detail-container">
        <div data-id="821" class="image-wrapper aos-item" data-aos="fade-left">
          <img :src="ImgReport" alt="" srcset="">
        </div>
        <div data-id="822" class="detail-wrapper aos-item" data-aos="fade-right">
          <div class="label">FEATURE #2</div>
          <div class="title">睡眠分析</div>
          <p>透過穿戴式裝置的偵測，了解自身的睡眠品質與睡眠各階段落點，並給於睡眠改善建議與知識，讓使用者了解如何睡得更香</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="detail-container">
        <div data-id="831" class="image-wrapper aos-item" data-aos="fade-right">
          <img :src="ImgMedicine" alt="" srcset="">
        </div>
        <div data-id="832" class="detail-wrapper aos-item" data-aos="fade-left">
          <div class="label">FEATURE #3</div>
          <div class="title">藥草莊園</div>
          <p>透過睡眠表現來決定草藥調製與種植的成功率，帶入真實世界助眠的香氛配方，讓好好睡覺這件事有更多的期待</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="detail-container">
        <div data-id="841" class="image-wrapper aos-item" data-aos="fade-left">
          <img :src="ImgFlowers" alt="" srcset="">
        </div>
        <div data-id="842" class="detail-wrapper aos-item" data-aos="fade-right">
          <div class="label">FEATURE #4</div>
          <div class="title">草藥圖鑑</div>
          <p>用於夢境花園裡的花草魔藥圖鑑，為使用者增添圖鑑收集的樂趣</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgMeditation from '../assets/images/meditation.png';
import ImgReport from '../assets/images/report.png';
import ImgMedicine from '../assets/images/medicine.png';
import ImgFlowers from '../assets/images/flowers.png';

export default {
  name: 'features',
  data() {
    return {
      ImgMeditation,
      ImgReport,
      ImgFlowers,
      ImgMedicine,
    };
  },
};
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 0;
}
.aos-item {
  width: 100%;
}
.container {
  max-width: 1300;
  margin-top: 0;
  margin-bottom: 60px;

  &:nth-child(even) {
    .detail-container {
      flex-direction: row-reverse;
    }
  }
}

.detail-container {
  width: 95%;
  border-radius: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;

  .detail-wrapper {
    width: 30%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    margin: 0 16px;

    .label {
      font-size: 20px;
      font-weight: 600;
      color: #F6593E;
      margin-bottom: 12px;
      margin-left: 4px;
    }

    .title {
      font-size: 64px;
      margin-bottom: 16px;
    }

    p {
      font-size: 24px;
      margin: 0;
      line-height: 36px;
      margin-left: 4px;
    }
  }

  .image-wrapper {
    width: 62%;

    img {
      width: 100%;
      height: auto;
      margin-top: 120px;
    }
  }
}
</style>
