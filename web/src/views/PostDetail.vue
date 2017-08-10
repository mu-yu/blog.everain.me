<template>
  <div class="detail-container">
    <div class="loading" v-if="loading"></div>
    <!-- TODO: back to list -->
    <article class="markdown-body" id="postDetail" v-else v-html="content.file"></article>
  </div>
</template>

<script>
  import hljs from 'highlight.js'
  import '../assets/style/monokai.css'
  import 'github-markdown-css/github-markdown.css'

  export default {
    name: 'postDetail',
    data () {
      return {
        loading: true,
        content: '',
      }
    },
    methods: {
      getPostHtml () {
        let file = this.$route.params.file
        this.$http.get(`/api/post/${file}`).then(({data}) => {
          this.content = data

          this.$nextTick(() => {
            this.loading = false
            document.querySelectorAll('pre code').forEach(block => {
              hljs.highlightBlock(block)
            })
          })
        })
      },
    },
    mounted () {
      this.getPostHtml()
    },
  }
</script>

<style scoped>
  .detail-container {
    width: 100%;
  }
</style>
<style lang="postcss">
  #postDetail.markdown-body {
    box-sizing: border-box;
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
    color: #6a737d;
    background: #323232;

    pre {
      background: #181818;
      code {
        background: #181818;
      }
    }

    a[href] {
      color: #A4D100;
    }

    code {
      padding: 0;
      display: inline-block;
      background-color: #E0E0E0;
    }
  }

  @media (max-width: 767px) {
    #postDetail.markdown-body {
      padding: 15px;

      hr {
        height: 1px;
      }
    }
  }
</style>
