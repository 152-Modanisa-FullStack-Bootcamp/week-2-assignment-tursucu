<template>
  <div class="container">
    <VideoItem
        v-for="video in videos"
        :video="video"
        :key="video.id"
    />
  </div>
</template>

<script>
import VideoItem from '@/components/VideoItem';
import {mapState, mapActions} from "vuex";

export default {
  name: "MainPage",
  components: {
    VideoItem
  },
  computed: {
    // videos are pulled from $store
    ...mapState(["videos"]),

  },
  methods: {
    //getVideos, data is added to $store from url
    ...mapActions(["getVideos"])
  },
  created() {
    document.title = "Home | Modanisa Bootcamp";
    this.getVideos();
  }
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: row;
  gap: 20px 20px;
  flex-wrap: wrap;
  margin: 20px 0;
  justify-content: center;
}
</style>