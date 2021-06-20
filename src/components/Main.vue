<template>
  <div>
    <b-container>
      <b-row>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide>
            <template #img>
              <img :src="require('../assets/usyd_background.jpeg')" height="480"/>
            </template>
          </b-carousel-slide>

          <b-carousel-slide>
            <template #img>
              <img :src="require('../assets/confphoto.jpg')"  height="480"/>
            </template>
          </b-carousel-slide>

          <b-carousel-slide>
            <template #img>
              <img :src="require('../assets/dicta2017.jpg')" height="480"/>
            </template>
          </b-carousel-slide>


        </b-carousel>
      </b-row>
      <b-row>
        <b-col>
          <p class="intro">
            Member for Australia of the International Association for Pattern Recognition The APRS produces a newsletter
            approximately quarterly which is distributed with the IAPR world newsletter. Members enjoy discounts at
            technical meetings sponsored by the APRS. Corporate membership entitles the company to send any number of
            participants to APRS conferences and workshops at the reduced registration rate. Total membership is now
            about 200.
          </p>
        </b-col>

      </b-row>
      <b-row>
        <NewsCard date="2019-09-12" :text="123"></NewsCard>
        <NewsCard date="2019-09-12" :text="123"></NewsCard>
        <NewsCard date="2019-09-12" :text="123"></NewsCard>
        <NewsCard date="2019-09-12" :text="123"></NewsCard>
        <NewsCard date="2019-09-12" :text="123"></NewsCard>
        <NewsCard date="2019-09-12" :text="123"></NewsCard>
        <NewsCard date="2019-09-12" :text="123"></NewsCard>
        <NewsCard date="2019-09-12" :text="123"></NewsCard>
        123
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NewsCard from "./NewsCard";

export default {
  name: "Main",
  components: {
    NewsCard
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      slide
      this.sliding = true
    },
    onSlideEnd(slide) {
      slide
      this.sliding = false
    }
  }
}
</script>

<style scoped>
p {
  text-align: left;
}

p.intro {
  margin-top: 20px;
}
</style>