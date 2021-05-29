<template>
  <div>
    <div class="title-image">
      <!--    <img src="../assets/confphoto.jpg"/>-->
    </div>
    <div class="aprs_title">
      <h2>APRS Membership Application/Renewal 2016 </h2>
    </div>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name of Member(or Organisation if Corporate member)</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter Name">
        </div>
        <div class="form-group">
          <label for="1">Membership Category</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Corporate</option>
            <option>Individual</option>
            <option>Student</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Postal Address</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Postal Address">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Topcis of Current Interest in Pattern Recognition</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your Interests">
        </div>
        <div class="form-group">
          <label class="form-check-label" for="exampleCheck1">Phone</label>
          <input type="text" class="form-control" id="exampleCheck1" placeholder="Enter your Phone">
        </div>
        <div class="form-group">
          <label class="form-check-label" for="exampleCheck1">Email</label>
          <input type="email" class="form-control" id="exampleCheck1" placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label class="form-check-label" for="exampleCheck1">Institution Certification of full-time enrolment (if
            student member):</label>
          <input type="email" class="form-control" id="exampleCheck1" placeholder="Enter your Certification No.">
        </div>
        <hr/>

        <button type="submit" class="btn btn-primary">Submit</button>


      </form>
      <div class="container">
        <hr/>
        APRS membership fees: Corporate $100, Individual $30, Student $15.<br>
        <br>
        Please print this form and return with your remittance to:<br>
        <br>
        Tony Adriaansen<br>
        Phone: +61 2 96532274<br>
        Mobile: +61 402388270<br>
        email: tony.adriaansen@gmail.com<br>
        <hr/>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Membership"
}
</script>

<style scoped>
.title-image{
  background-image: url(../assets/titleimage_mem.jpeg);
  background-size: cover;

  margin-bottom: 50px;

  width: 100%;
  height: 300px;
}
.aprs_title{
  text-align: center;
}
div{
  text-align: left;
}
</style>