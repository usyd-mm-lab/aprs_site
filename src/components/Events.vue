<template>
  <div>
    <div class="title-image">
      <!--    <img src="../assets/confphoto.jpg"/>-->
    </div>
    <div class="container">
      <h1>Coming Events</h1>
      <ul class="list-group">
        <li class="list-group-item active">DICTA2018, Canberra, ACT</li>
      </ul>
      <h1>Past Events</h1>
      <ul class="list-group">
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
    <div class="container">
      <h1>Australian Pattern Recognition Society Prizes</h1>
      <table class="table">
        <thead></thead>
        <tbody>
        <tr scope="row">
          <td>DICTA 2010 Best Paper Prize sponsored by APRS and IAPR ($1000) Abeed Sarker and Leonard Hamey
          </td>
          <td>"Improved Reconstruction of Flutter Shutter Images for Motion Blur Reduction."
            DICTA 2010 APRS Best Student Paper Prize
            ($500) Shih Ching Fu and Peter Kovesi, "Robust Extraction of Optic Flow Differentials for
            Surface Reconstruction."
          </td>
        </tr>
        <tr>
          <td>DICTA 2010 CISRA Best Colour Imaging Prize ($1500)
          </td>
          <td>
            Jun Zhu, Dengsheng Zhang, and Guojun Lu, "An Enhancement to Close-Form Method for Natural Image
            Matting."
          </td>
        </tr>
        <tr>
          <td>DICTA 2009 Best Paper Prize sponsored by APRS and IAPR ($1000)</td>
          <td>Jamie Sherrah, Branko Ristic, and
            Nicholas J. Redding DSTO, "Evaluation of a Particle Filter to Track People for Visual
            Surveillance."
          </td>
        </tr>
        <tr>
          <td>DICTA 2009 APRS Best Student Paper Prize
            ($500)
          </td>
          <td>Andrew W. B. Smith (student) and Brian C. Lovell (supervisor) The University of Queensland and
            NICTA, "Self Occlusions and Graph Based Edge Measurement Schemes for Visual Tracking
            Applications."
          </td>
        </tr>
        <tr>
          <td>DICTA 2009 CISRA Best Colour Imaging Prize ($1500)</td>
          <td>Zhuhan Jiang, "Object Modelling in Videos via Multidimensional Features of Colours and
            Textures".
          </td>
        </tr>
        <tr>
          <td>DICTA 2009 APRS Best Poster Prize
            ($500)
          </td>
          <td>Shekhar Chandra and Imants Svalbe, “A Fast Number Theoretic Finite Radon Transform”
          </td>
        </tr>
        <tr>
          <td>DICTA 2008 Best Paper Prize sponsored by APRS and IAPR ($1000)</td>
          <td>Tony Scoleri, DSTO and The University of Adelaide, "Post-hoc correction techniques for
            constrained parameter estimation in computer vision."
          </td>
        </tr>
        <tr>
          <td>DICTA 2007 APRS Best Student Paper Prize
            ($500)
          </td>
          <td>
            Huy Tho Ho, The University of Adelaide, "Multi-scale Feature Extraction for 3D Models using
            Local Surface Curvature."
          </td>
        </tr>
        <tr>
          <td>DICTA 2007 Best Paper Prize sponsored by APRS and IAPR ($2000)</td>
          <td>
            Sakrapee Paisitkraingkrai, NICTA and University of New South Wales
            "An experimental evaluation of local features for pedestrian classification"
          </td>
        </tr>
        </tbody>
      </table>
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