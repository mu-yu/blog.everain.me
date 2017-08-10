<template>
  <div class="post-list">
    <preview-card v-for="post in postList" :key="post.title" :info="post"></preview-card>
  </div>
</template>

<script>
  import PreviewCard from '@/components/PreviewCard'

  export default {
    name: 'postList',
    components: {PreviewCard},
    data () {
      return {
        postList: [],
      }
    },
    methods: {
      getPostList () {
        this.$http.get('/api/list/all').then(({data}) => {
          this.postList = data
        })
      },
    },
    mounted () {
      this.getPostList()
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
  .post-list {
    width: 100%;
  }
</style>
