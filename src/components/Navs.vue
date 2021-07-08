<template>

  <b-navbar pills toggleable="lg">
    <b-navbar-brand href="#">
      <img src="../assets/aprslogo.gif"/>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="justify-content-end">
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="Main">
              <div id="navmain" class="nav-link" :class="{active1:navstatus.main}" @click="onNavClick">Home</div>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="About">
              <div id="navabout" class="nav-link" :class="{active1:navstatus.about}" @click="onNavClick">About</div>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="events">
              <div id="navevents" class="nav-link" :class="{active1:navstatus.events}" @click="onNavClick">Events</div>
            </router-link>
          </b-nav-item>

          <b-nav-item-dropdown text="Award" class="nav-link" :toggle-class="{active1:navstatus.award}">
            <b-dropdown-item>
              <router-link to="Award_ECR">
                <div id='navawardecr' class="nav-link" @click="onNavClick">APRS ECR Award</div>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="Award_Dicta">
                <div id='navawarddicta' class="nav-link" @click="onNavClick">
                  DICTA Award
                </div>

              </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <!--          <router-link to ="award">-->
          <!--&lt;!&ndash;            <div id="navaward" class="nav-link" :class="{active1:navstatus.award}" @click="onNavClick">Award</div>&ndash;&gt;-->

          <!--          </router-link>-->
          <b-nav-item>
            <router-link to="membership">
              <div id="navmembership" class="nav-link" :class="{active1:navstatus.membership}" @click="onNavClick">
                Membership
              </div>
            </router-link>
          </b-nav-item>
          <!--          <b-nav-item href="/main" @click="onNavClick" class="active1">Home</b-nav-item>-->
          <!--          <b-nav-item href="/about">About</b-nav-item>-->
          <!--          <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navs",
  data: function () {
    return {
      navstatus: {
        main: false,
        about: false,
        news: false,
        events: false,
        membership: false,
        award: false
      },
      selectedItem: ""
    }
  },
  mounted() {
    const current_navid = this.$route.path.substring(1).toLowerCase();
    this.navstatus[current_navid] = true;
  },
  methods: {
    onNavClick: function (evnts) {
      this.selectedItem = evnts.target;
      console.log(evnts.target.id);
      this.navstatus.news = false;
      this.navstatus.about = false;
      this.navstatus.main = false;
      this.navstatus.events = false;
      this.navstatus.membership = false;
      this.navstatus.award = false;
      const click_id = evnts.target.id.substring(3);
      console.log(click_id.includes('award'))
      console.log(click_id)
      if (click_id.includes('award')) {
        this.navstatus.award = true
      } else {
        this.navstatus[click_id] = true
      }

    }
  }
}

</script>

<style scoped>
.nav-link {
  color: black !important;
  /*font-size: 15pt;*/
  /*padding-top: 15px;*/
  /*padding-down: 15px;*/
  /*padding-left: 30px;*/
  /*padding-right: 300px;*/
  /*border-radius: 10px;*/
}

.router
.b-navbar {
  background-color: white;
}

.navbar-toggler-icon {
  color: black;
}

li a {
  text-decoration: none;
}

a {
  text-decoration: none;
}

.active1 {
  color: white !important;
  background-color: #428bca;

}

.navbar {
  padding-left: 10%;
  width: 80vw;
}

#nav-collapse {
  color: black;
}
</style>