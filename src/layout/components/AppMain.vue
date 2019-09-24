<template>
  <section class="app-main" style="min-height: 100%;margin-top:35px;">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <div style="padding:15px 15px 0 15px">
          <router-view :key="key"></router-view>
        </div>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
