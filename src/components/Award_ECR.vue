<template>
  <div>
    <div class="title-image">
      <!--    <img src="../assets/confphoto.jpg"/>-->
    </div>
    <div>
      <h1>
        APRS ECR Award
      </h1>
      <table class="table">
      </table>
    </div>
    <div>
      <h1>DICTA Awards</h1>
      <div class="container">
        <table class="table">
          <thead>
          <th>
            Awards
          </th>
          <th>
            Authors
          </th>
          </thead>
          <tbody>
          <tr scope="row">
            <td>DICTA 2010 Best Paper Prize sponsored by APRS and IAPR Abeed Sarker and Leonard Hamey
            </td>
            <td>"Improved Reconstruction of Flutter Shutter Images for Motion Blur Reduction."
              DICTA 2010 APRS Best Student Paper Prize Shih Ching Fu and Peter Kovesi, "Robust Extraction of Optic Flow
              Differentials for
              Surface Reconstruction."
            </td>
          </tr>
          <tr>
            <td>DICTA 2010 CISRA Best Colour Imaging Prize
            </td>
            <td>
              Jun Zhu, Dengsheng Zhang, and Guojun Lu, "An Enhancement to Close-Form Method for Natural Image
              Matting."
            </td>
          </tr>
          <tr>
            <td>DICTA 2009 Best Paper Prize sponsored by APRS and IAPR</td>
            <td>Jamie Sherrah, Branko Ristic, and
              Nicholas J. Redding DSTO, "Evaluation of a Particle Filter to Track People for Visual
              Surveillance."
            </td>
          </tr>
          <tr>
            <td>DICTA 2009 APRS Best Student Paper Prize
            </td>
            <td>Andrew W. B. Smith (student) and Brian C. Lovell (supervisor) The University of Queensland and
              NICTA, "Self Occlusions and Graph Based Edge Measurement Schemes for Visual Tracking
              Applications."
            </td>
          </tr>
          <tr>
            <td>DICTA 2009 CISRA Best Colour Imaging Prize</td>
            <td>Zhuhan Jiang, "Object Modelling in Videos via Multidimensional Features of Colours and
              Textures".
            </td>
          </tr>
          <tr>
            <td>DICTA 2009 APRS Best Poster Prize
            </td>
            <td>Shekhar Chandra and Imants Svalbe, “A Fast Number Theoretic Finite Radon Transform”
            </td>
          </tr>
          <tr>
            <td>DICTA 2008 Best Paper Prize sponsored by APRS and IAPR</td>
            <td>Tony Scoleri, DSTO and The University of Adelaide, "Post-hoc correction techniques for
              constrained parameter estimation in computer vision."
            </td>
          </tr>
          <tr>
            <td>DICTA 2007 APRS Best Student Paper Prize
            </td>
            <td>
              Huy Tho Ho, The University of Adelaide, "Multi-scale Feature Extraction for 3D Models using
              Local Surface Curvature."
            </td>
          </tr>
          <tr>
            <td>DICTA 2007 Best Paper Prize sponsored by APRS and IAPR</td>
            <td>
              Sakrapee Paisitkraingkrai, NICTA and University of New South Wales
              "An experimental evaluation of local features for pedestrian classification"
            </td>
          </tr>
          </tbody>
        </table>
      </div><p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Award_ECR.vue"
}
</script>

<style scoped>
.title-image{
  background-image: url(../assets/awards.jpg);
  background-size: cover;

  margin-bottom: 20px;

  width: 100%;
  height: 300px;
}
.table {
  margin-top: 50px;
  text-align: left;
}
</style>