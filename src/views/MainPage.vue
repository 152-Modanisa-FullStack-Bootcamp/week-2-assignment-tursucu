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
import axios from "axios";
import VideoItem from '@/components/VideoItem';

export default {
  name: "MainPage",
  components: {
    VideoItem
  },
  data() {
    return {
      videos: []
    }
  },
  created () {
    document.title = "Home | Modanisa Bootcamp";
  },
  async mounted() {
    const {data} = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos")
    this.videos = data;
  }
};
</script>

<style scoped>

.container{
  display: flex;
  flex-direction: row;
  gap: 20px 20px;
  flex-wrap: wrap;
  margin: 20px 0;
  justify-content: center;
}
</style>