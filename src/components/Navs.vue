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
                <div id="navmain" class="nav-link" :class="{active1:navstatus.main}" >
                  Main
                </div>

              </router-link>
            </b-nav-item>

          <b-nav-item>
            <router-link to="About">
              <div id="navabout" class="nav-link" :class="{active1:navstatus.about}">About</div>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="events">
              <div id="navevents" class="nav-link" :class="{active1:navstatus.events}">Events</div>
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <div  id="navaward" class="nav-link" :class="{active1:navstatus.award}" @onmouseover="onOver">
              Award
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" ref="dropdownmenu">
                <router-link to="Award_ECR">
                  <div class="nav-link dropdown-item" >
                    APRS ECR Award
                  </div>
                </router-link>
         <router-link to="Award_Dicta">
                  <div class="nav-link dropdown-item">
                    DICTA Award
                  </div>
                </router-link>
              </div>
            </div>

          </b-nav-item>
          <b-nav-item>
            <router-link to="membership">
              <div id="navmembership" class="nav-link" :class="{active1:navstatus.membership}" >
                Membership
              </div>
            </router-link>
          </b-nav-item>
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
  watch:{"$route.path": function (path) {
      console.log(this.$route)
      this.selectedItem = path;
      this.highlightnav(path)

  }},
  mounted() {
    const current_navid = this.$route.path.substring(1).toLowerCase();
    this.navstatus[current_navid] = true;
  },
  methods: {
    highlightnav(path){
      let name = path.substring(1).toLowerCase()
      console.log(name)
      this.navstatus.news = false;
      this.navstatus.about = false;
      this.navstatus.main = false;
      this.navstatus.events = false;
      this.navstatus.membership = false;
      this.navstatus.award = false;
      console.log(path.startsWith('award'))
      if(name.startsWith('award')){
        this.navstatus.award = true
        console.log('hh')
      }
      else{

        let click_id = name;
        this.navstatus[click_id] = true
      }

    },
    onOver() {
      console.log('over')
      this.$refs.dropdownmenu.visible = true;
      document.querySelector('.dropdown-menu').classList.add('show')
    },
    onLeave() {
      console.log('leave')
      this.$refs.dropdownmenu.visible = false;
      document.querySelector('.dropdown-menu').classList.remove('show')

    },

  }
}

</script>

<style scoped>
#navaward:hover>.dropdown-menu{
  display: block;
}

.dropdown-toggle{
  background-color: #42b983;
}
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