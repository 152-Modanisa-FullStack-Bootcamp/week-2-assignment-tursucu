<template>
  <div class="relative-container" @mouseover="hoverImage=true" @mouseleave="hoverImage=false">
    <!-- Video Container: @click /watch?id={id} -->
    <div class="video-container" @click="$router.push(`/watch?id=${video.id}`)">
      <!-- Video Image -->
      <div class="video-image-area">
        <img class="video-image" :src="video.coverImage">
        <img class="video-image video-hover" v-if="hoverImage" :src="video.hoverImage">
      </div>
      <!-- Video Meta Area -->
      <div class="video-meta-area">
        <h3 class="video-title">{{ video.title }} </h3>
        <div class="video-count">
          <div class="video-views">{{ video.viewCount }} views</div>
          <div class="video-views">{{ video.publishDateInMonth }} months ago</div>
        </div>
        <div class="video-owner-area">
          <img :src="video.ownerImage">
          <span class="video-owner">{{ video.ownerName }}</span>
        </div>
        <span class="video-description">{{ video.description }}</span>
      </div>
    </div>
    <!-- Favorite Button -->
    <div @click="addOrRemoveFavorite" class="favorite-button-active favorite-button">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        <path
            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
      </svg>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "VideoItemBig",
  props: {
    video: Object
  },
  data() {
    return {
      hoverImage: false, //hoverImage becomes true when mouseover item.
    }
  },
  methods: {
    //  addOrRemoveFavorite add or remove via vuex with the function.
    addOrRemoveFavorite() {
      this.addOrRemoveFavoriteAction(this.video)
    },
    ...mapActions(["addOrRemoveFavoriteAction"]), // Vuex function call.
  }
}
</script>

<style scoped>
.relative-container {
  position: relative;
}

/*Video Container*/
.video-container {
  display: flex;
  gap: 20px;
  cursor: pointer;
  width: 100%;
}

/*Video Image Section*/
.video-image-area {
  display: flex;
  position: relative;
  width: 360px;
  height: 200px;
}

.video-image {
  width: 100%;
  height: 100%;
}

.video-hover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}

/*Video Meta Area*/
.video-meta-area {
  display: flex;
  flex-direction: column;
  width: calc(100% - 380px);
}

.video-title {
  margin-bottom: 4px;
  font-size: 1.6rem;
  line-height: 2.2rem;
  max-height: 4.4rem;
  color: var(--yt-main-text-color);
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.video-owner, .video-views {
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 400;
  color: var(--yt-brand-text-color)
}

.video-count, .video-owner-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
}

.video-views:first-child:after {
  content: "•";
  margin: 0 4px;
}

.video-owner-area img {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 50%;
}

.video-description {
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.8rem;
}

/*Favorite Button*/
.favorite-button {
  position: absolute;
  padding: 3px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: 3px;
  left: calc(var(--video-width) - 33px);
  background: var(--yt-spec-70-percent-layer);
  border: none;
  border-radius: 3px;
  z-index: 100;
  color: var(--yt-white);
}

.favorite-button-active, .favorite-button:hover {
  color: var(--yt-red);
}

.favorite-button svg {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
}
</style>