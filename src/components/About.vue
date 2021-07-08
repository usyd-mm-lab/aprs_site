<template>
<div>
  <div class="title-image">
<!--    <img src="../assets/confphoto.jpg"/>-->
  </div>
  <div class="container" style="margin-bottom: 20px;margin-top: 50px;">
    <div class="row">
      <h2 id="fields">Field of Interests</h2>

    </div>
    <div>
      <b-list-group>
        <b-list-group-item v-for="item in fields" :key="item">
          {{item}}
        </b-list-group-item>
      </b-list-group>

    </div>
  </div>
  <div class="container" style="margin-bottom: 20px;">
    <h2>APRS National Committee 2017-2018</h2>
    <div>
      <table class="table">
        <tbody>
        <tr>
          <th scope="row">President</th>
          <td>Zhiyong Wang</td>
          <td>zhiyong.wang@sydney.edu.au</td>
        </tr>
        <tr>
          <th scope="row">Vice President
          </th>
          <td>Ajmal Mian
          </td>
          <td>ajmal.mian@uwa.edu.au
          </td>
        </tr>
        <tr>
          <th scope="row">Secretary


          </th>
          <td>Carmine Pontecorvo


          </td>
          <td>carmine.pontecorvo@dst.defence.gov.au
          </td>
        </tr>
        <tr>
          <th scope="row">Treasurer
          </th>
          <td>Tony Adriaansen


          </td>
          <td>tony.adriaansen@gmail.com


          </td>
        </tr>
        <tr>
          <th scope="row"> Editor
          </th>
          <td>Syed Zulqarnain Gilani


          </td>
          <td>s.gilani@ecu.edu


          </td>
        </tr>
        <tr>
          <th scope="row">Member at Large (IAPR Liaison)


          </th>
          <td>Brian Lovell


          </td>
          <td>lovell@itee.uq.edu.au


          </td>
        </tr>
        <tr>
          <th scope="row">Member at Large


          </th>
          <td>Victor Stamatescu


          </td>
          <td>victor.stamatescu@dst.defence.gov.au


          </td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>
  <div class="container" style="margin-bottom: 20px;">
    <h2 id="history">History</h2>
    <div>
      The idea of APRS was born in 1989 when some Australians attended an IAPR sponsored meeting in Finland and
      had
      discussions with IAPR member organisations. That same year, Prof Mike Duff from University College London
      (who
      was IAPR secretary at the time) was invited speaker at an IREE conference on Image Processing in Canberra.
      He
      encouraged the formation of an Australian Pattern Recognition body as there was such interest in the area
      here.
      The society was launched at a Special Interest Group meeting at Monash University in February 1990, as part
      of
      the Australian Computer Science Conference. A constitution was drafted that month and about 40 initial
      members
      were recruited, most in Victoria and Melbourne. By 1991 the society had almost doubled in numbers and the
      first
      national conference, DICTA-91, was held in Melbourne in December 1991. The following year, State branches
      were
      introduced so that local meetings could be organised, and these currently operate in Victoria, New South
      Wales
      and Queensland. Other states have nominated representatives as contact persons for APRS liaison.

      Since 1991, specialist workshops and national conferences have been held in alternate years: DICTA-93 in
      Sydney,
      DICTA-95 in Brisbane, DICTA-97 in Auckland, ICPR-98 in Brisbane, DICTA-99 in Perth, and DICTA-02 in
      Melbourne.
      Limited numbers of conference proceedings are still available for purchase. Past workshops have covered
      Commercialisation of Image Processing Research, Spatial Data Manipulation, and Colour Image
      Analysis/Visualization.

      The APRS produces a newsletter approximately quarterly which is distributed with the IAPR world newsletter.
      Members enjoy discounts at technical meetings sponsored by APRS and regular meetings organised by State
      branches. Total membership has now reached nearly 200.
    </div>
    <!--        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"-->
    <!--            integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"-->
    <!--            crossorigin="anonymous"></script>-->
  </div>
  <div class="container">
    <h2 id="contact">Contact</h2>
    For more information contact:<br /><br>

    Murk Bottema<br>
    President of the APRS

    Phone: +61 8 8201 3652<br>
    Email: murk.bottema@flinders.edu.au<br><br>

    Flinders University<br>
    College of Science and Engineering<br>
    Tonsley (4.07)<br>
    GPO Box 2100, Adelaide 5001<br>
    South Australia<br>
    Australia
  </div>
</div>
</template>

<script>
export default {
  name: "About",
  data(){
    return{
      fields: [
        'Computer vision',
        'Statistical pattern recognition',
        'Structural pattern recognition',
        'Neural networks',
        'Image coding and processing',
        'Shape and texture analysis',
        'Biomedical pattern analysis',
        'Remote sensing',
        'Speech recognition',
        'Industrial applications',
        'Document processing',
        'Multi-media systems',
        'Natural language analysis',
        'Robotics',
        'Special hardware architectures',
        'Software packages',
      ]
    }
  }
}
</script>

<style scoped>
.title-image{
  background-image: url(../assets/titlepage_pr.jpg);
  background-size: cover;

  width: 100%;
  height: 300px;
}
div{
  text-align: left;
}
</style>