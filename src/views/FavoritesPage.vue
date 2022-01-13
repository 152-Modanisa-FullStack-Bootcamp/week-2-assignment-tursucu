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
import axios from "axios";
import VideoItemBig from '@/components/VideoItemBig';

export default {
  name: "FavoritePage",
  components: {
    VideoItemBig
  },
  data() {
    return {
      videos: []
    }
  },
  created () {
    document.title = "Favorites | Modanisa Bootcamp";
  },
  async mounted() {
    const {data} = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos")
    this.videos = data.filter(d=> d.favorite);
  }
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  width: 960px;
}
</style>