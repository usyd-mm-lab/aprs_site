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
          <b-carousel-slide
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="https://picsum.photos/1024/480/?image=55"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
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
p{
  text-align: left;
}
p.intro{
  margin-top: 20px;
}
</style>