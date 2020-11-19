<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <h1 class="title">Choose your dream destination...</h1>
        <!-- <div class="links">
          <a href="#" class="giant-button"> San Francisco, USA </a>
          <a href="#" class="giant-button"> Québec, Canada </a>
          <a href="#" class="giant-button"> Bora Bora, Polynésie </a>
          <a href="#" class="giant-button"> Torres del Paine, Chile </a>
        </div> -->

         <div v-if="ticket" class="boarding">
            <div class="grandPart">
                <div class="headerBoarding"  style="  border-right: dashed white 1px;"> 
                    <h1>Boarding Pass</h1>
                    <p>{{ticket.class}}</p>

                </div>
              <div class="contentBoarding" style="  border-right: dashed black 1px;">
                <table style="width:100%"> 
                  
                  <tr>
                    <td colspan="5" class="space">
                      <p class="annotation" >PASSENGER</p>
                       <p class="valueBoarding">{{ticket.passenger}}</p>
                    </td>
                   
                  </tr>

                 
                  <tr>
                    <td class="space">
                      <p class="annotation"  >FLIGHT</p>
                       <p class="valueBoarding">{{ticket.flight}}</p>
                    </td>
                    <td>
                      <p class="annotation" >FROM</p>
                       <p class="valueBoarding">{{ticket.from}}</p>
                    </td>
                    <td>
                      <p class="annotation" >TO</p>
                       <p class="valueBoarding">{{ticket.to}}</p>
                    </td>
                    <td>
                      <p class="annotation" >CLASS</p>
                       <p class="valueBoarding">{{ticket.class}}</p>
                    </td>
                  </tr>

                   <tr>
                    <td class="space">
                      <p class="annotation" >GATE</p>
                       <p class="valueBoarding">{{ticket.gate}}</p>
                    </td>
                    <td>
                      <p class="annotation" >TIME</p>
                       <p class="valueBoarding">{{ticket.time}}</p>
                    </td>
                    <td>
                      <p class="annotation" >SEAT</p>
                       <p class="valueBoarding">{{ticket.seat}}</p>
                    </td>
                    <td style="width:100px">
                      <img alt="codeBarre"  class="codeBarre" src="~/assets/codeBarre.png"/>
                    </td>
                  </tr>

                </table>
              </div>

              <div class="footerBoarding" style="  border-right: dashed white 1px;">
              </div>
            </div>

            <div class="petitPart">
                <div class="headerBoarding">
                    <h1>Boarding Pass</h1>
                    <p>{{ticket.class}}</p>
                </div>
              <div class="contentBoarding">
                <table style="width:100% ;height:209px"> 
                  
                  <tr>
                    <td colspan="5" class="space">
                      <p class="annotation" >PASSENGER</p>
                       <p class="valueBoarding">{{ticket.passenger}}</p>
                    </td>
                  </tr>


                   <tr>
                    <td class="space">
                      <p class="annotation" >GATE</p>
                       <p class="valueBoarding">{{ticket.gate}}</p>
                    </td>
                    <td>
                      <p class="annotation" >TIME</p>
                       <p class="valueBoarding">{{ticket.time}}</p>
                    </td>
                    <td>
                      <p class="annotation" >SEAT</p>
                       <p class="valueBoarding">{{ticket.seat}}</p>
                    </td>
                    
                  </tr>

                  <tr>
                    <td style="width:100px" colspan="3">
                      <img alt="codeBarre"  class="codeBarre" src="~/assets/codeBarre.png"/>
                    </td>
                  </tr>

                </table>
              </div>

              <div class="footerBoarding">
              </div>
            </div>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      ticket: "ticket/getTicket",
    }),   
     
  },
  methods: {
    ...mapActions({
      loadTicket: "ticket/loadTicket",
    }),
  },
  mounted() {
    console.log(this.$route.params.number);
      this.loadTicket(this.$route.params.number);
  },
}
</script>

<style lang="scss">

.codeBarre{
  width: 200px;
}
.space{
    padding: 15px 10px;
    }
.annotation{
    color: grey;
    font-size: 12px;
}
.valueBoarding{
  text-transform: uppercase;
  font-weight: bold;
}
.headerBoarding{
  background-color: #34a7dd;
  color :white
}
.contentBoarding{
  background-color: white;
  color: black;

}

.footerBoarding{
  background-color: #34a7dd;
  height: 20px;
}

.grandPart{
    flex-grow: 4;
}
.petitPart{
    flex-grow: 1;

}


.boarding{
  border: 2px solid #34a7dd;
  display: flex;
  width: 1000px;
  border-radius: 15px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}
</style>