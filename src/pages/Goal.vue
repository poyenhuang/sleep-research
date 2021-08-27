<template>
  <div class="goal-wrapper container">
    <div data-id="92" class="aos-item" data-aos="fadeInUp">
      <h1>Goals</h1>
    </div>
    <div data-id="92" class="aos-item" data-aos="fadeInUp">
      <h3>每個人心中的一夜好眠都不一樣，找到適合自己的睡眠形式最重要。</h3>
      <h3>用最自然的方法，從心理的角度，建立 <span class="important">睡眠儀式感</span>，讓身體帶你去睡覺</h3>
      <h3>利用睡前習慣培養，睡覺中的事件監控，與睡眠後的睡眠品質診斷</h3>
      <h3>找出最適合你的睡覺方法！</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goals',
};
</script>

<style scoped lang="scss">
.goal-wrapper {
  width: 90%;
  max-width: 900px;
  height: 600px;
  margin: 0 auto 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-bottom: 60px;
  }

  h3 {
    font-size: 1.6em;
  }
}
</style>
