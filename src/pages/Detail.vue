<template>
  <div>
    <div data-id="80" class="aos-item" data-aos="fadeInUp">
      <h1>詳細功能</h1>
    </div>
    <div class="container">
      <div data-id="81" class="aos-item" data-aos="fade-right">
        <div class="detail-wrapper"></div>
      </div>
    </div>
    <div class="container">
      <div data-id="82" class="aos-item" data-aos="fade-left">
        <div class="detail-wrapper"></div>
      </div>
    </div>
    <div class="container">
      <div data-id="83" class="aos-item" data-aos="fade-right">
        <div class="detail-wrapper"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'features',
};
</script>

<style scoped>
h1 {
  margin-bottom: 0;
}
.aos-item {
  width: 100%;
}
.container {
  margin-top: 0;
}
.detail-wrapper {
  width: 100%;
  height: 500px;
  background: rgba(120, 120, 120, .5);
  border-radius: 50px;
}
</style>
