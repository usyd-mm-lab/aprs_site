<template>
  <div>
    <div class="title-image">
      <!--    <img src="../assets/confphoto.jpg"/>-->
    </div>
    <div class="container">
      <h1>DICTA Events</h1>
      <h2>Coming Events</h2>
      <ul class="list-group">
        <li class="list-group-item active">DICTA2022, TBD</li>
      </ul>
      <h2>Past Events</h2>
      <ul class="list-group">
        <li class="list-group-item">DICTA2021, Gold Coast <a href="#">Conference Proceedings</a></li>
        <li class="list-group-item">DICTA2020, Online <a href="#">Conference Proceedings</a></li>
        <li class="list-group-item">DICTA2019, Perth <a href="#">Conference Proceedings</a></li>
        <li class="list-group-item">DICTA2018, Sydney <a href="#">Conference Proceedings</a></li>
        <li class="list-group-item">DICTA2017, Sydney <a href="#">Conference Proceedings</a></li>
        <li class="list-group-item">DICTA2016, Gold Coast <a href="#">Conference Proceedings</a></li>
        <li class="list-group-item">DICTA2015, Adelaide <a href="#">Conference Proceedings</a></li>
        <li class="list-group-item">DICTA2014, Wollongong <a href="#">Conference Proceedings</a>
        </li>
        <li class="list-group-item">DICTA2013, Hobart, Tasmania <a href="#">Conference Proceedings</a></li>
        <li class="list-group-item">DICTA2012, December 3-5, Fremantle <a href="#">Conference Proceedings</a>
        </li>
        <li class="list-group-item">DICTA2011, December 6-8, Noosa Heads <a href="#">Conference Proceedings</a>
        </li>
        <li class="list-group-item">DICTA2010, December 1-3, Sydney <a href="#">Conference Proceedings</a>
        </li>
        <li class="list-group-item">DICTA2009, December 1-3, Melbourne <a href="#">Conference Proceedings</a>
        </li>
        <li class="list-group-item">DICTA2008, Dec 1-3, Canberra <a href="#">Conference Proceedings</a>
        </li>
        <li class="list-group-item">DICTA2007, Dec 3-5 2007, Adelaide <a href="#">Conference Proceedings</a>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  name: "Events"
}
</script>

<style scoped>
.title-image{
  background-image: url(../assets/confphoto.jpg);
  background-size: cover;

  margin-bottom: 20px;

  width: 100%;
  height: 300px;
}
div{
  text-align: left;
}
</style>