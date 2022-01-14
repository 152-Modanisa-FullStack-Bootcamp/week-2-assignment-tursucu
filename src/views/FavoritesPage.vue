<template>
  <div class="container">
    <VideoItemBig
        v-for="video in videos"
        :video="video"
        :key="video.id"
    />
  </div>
</template>

<script>
import VideoItemBig from '@/components/VideoItemBig';
import {mapState} from "vuex"
export default {
  name: "FavoritePage",
  components: {
    VideoItemBig
  },
  created() {
    document.title = "Favorites | Modanisa Bootcamp";
  },
  computed: {
    // favorite data from the $store is called
    ...mapState({videos:"favorites"})
  }
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
  width: 960px;
}
</style>