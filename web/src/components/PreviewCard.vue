<template>
  <div class="preview-card">
    <div class="background" :style="{ background: info.background }">
      <div v-if="info.backgroundText" class="background-text">{{ info.backgroundText }}</div>
      <div class="preview-card-date">{{ info.date.split('T')[0] }}</div>
      <div class="tag-list">
        <span>TAG: </span>
        <ul>
          <!-- TODO: filter posts by click tag -->
          <li v-for="tag in info.tag">{{ tag }}</li>
        </ul>
      </div>
      <h2 class="title">
        <router-link :to="`/post/${info.file}`">{{ info.title }}</router-link>
      </h2>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'previewCard',
    props: {
      info: {
        type: Object,
        default: () => {},
      },
    },
    data () {
      return {}
    },
  }
</script>
<style lang="postcss" scoped>
  .preview-card {
    box-sizing: border-box;
    position: relative;
    background: #323232;
    width: 100%;
    max-width: 600px;
    min-height: 200px;
    margin-bottom: 20px;
    padding: 20px;
    font-size: 12px;

    .background-text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 80%;
      height: 36px;
      overflow: hidden;
      text-align: center;
      font-size: 36px;
      line-height: 36px;
    }

    &-date {
      text-align: right;
    }

    .tag-list {
      position: absolute;
      bottom: 40px;
      right: 20px;
      text-align: right;
      ul {
        display: inline-block;
        margin-left: 16px;
      }
      li {
        position: relative;
        display: inline-block;
        list-style: circle;
        margin-right: 17px;
        margin-bottom: 5px;
        background: #A4D100;
        color: #181818;
        border-top: 5px;
        padding-left: 5px;
        line-height: 16px;
        height: 16px;

        &:before {
          position: absolute;
          content: ' ';
          display: block;
          width: 0;
          height: 0;
          border: 8px solid transparent;
          border-right: 8px solid #A4D100;
          left: -16px;
        }
        &:after {
          position: absolute;
          content: ' ';
          display: block;
          width: 0;
          height: 0;
          border: 8px solid #A4D100;
          border-right: 8px solid transparent;
          right: -16px;
          top: 0;
        }
      }
    }

    h2 {
      position: absolute;
      color: #A4D100;
      margin: 0;
      font-size: 16px;
      line-height: 20px;
      bottom: 20px;
    }
  }
</style>
