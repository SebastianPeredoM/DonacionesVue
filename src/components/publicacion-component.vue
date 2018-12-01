<template>
  <div>
    <div id="container-main">
      <div class="container-header">
        <label class="left">Proyectos</label>
        <button class="mdc-icon-button material-icons right" style="margin-top: -18px">more_horiz</button>
      </div>
      <!-- <div class="container-proyectos" v-for="value in objects" :key="value" > -->
      <div class="container-proyectos">
        <div style="padding-left: 24px">
          <div class="container-img">
            <img src="../assets/urp-messenger.png">
          </div>
          <div class="container-detalle">
            <div class="left">
              <label class="title">URP - messenger</label>
              <p> El proyecto de URP - messenger quiere integrar a los estudiantes con los docentes de forma m&aacute;s r&aacute;pida y confiable que estar usando el Whatsapp y no tener que perder tiempo en recolectar los n&uacute;meros de los estudiantes. Con este chat se podr&aacute; compartir enlaces, debatir sobre el curso, realizar preguntas, etc. como si fuese cualquier otro medio de comunicaci&oacute;n. Los grupos se generar&iacute;an autom&aacute;ticamente una vez que el alumno se haya matriculado en el curso...</p>
              <div class="container-action">
                <label>Fecha fin: </label><label>15/02/2019</label>&emsp;<label>Monto requerido(S/): </label><label>2,000</label>&emsp;<label>Monto recaudado(S/): </label><label>550</label>&emsp;
                <div class="right" style="padding-right: 24px; padding-top: -16px; margin-top: -8px;">
                  <label class="left" style="padding-top: 8px; margin-right: -4px">57</label>
                  <button class="mdc-icon-button material-icons left" style="top: -6px;">favorite</button>&emsp;
                  <label class="left" style="padding-top: 8px; margin-right: -4px">6</label>
                  <button class="mdc-icon-button material-icons left" style="top: -6px;">comment</button>&emsp;
                  <button class="mdc-button">Ver m&aacute;s</button>
                  <button class="mdc-button mdc-button--raised" v-on:click="showDialogDonar">Donar</button>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-proyectos">
        <div style="padding-left: 24px">
          <div class="container-img">
            <img src="../assets/energia-eolica.jpg">
          </div>
          <div class="container-detalle">
            <div class="left">
              <label class="title">Energia limpia para usos com&uacute;nes en la URP</label>
              <p>Queremos implementar un molino para generar energ&iacute;a limpia para usos com&uacute;nes y corrientes de los alumnos de la Universidad Ricardo Palma. Se quiere desarrollar este proyecto para iniciar una campaña de concientizaci&oacute;n para las dem&aacute;s instituciones y que puedan unirse a este cambio que queremos empezar en nuestra universidad. Planeamos que a futuro el pa&iacute;s incluya estas tecnolog&iacute;s en muchas otras &aacute;reas.</p>
              <div class="container-action">
                <label>Fecha fin: </label><label>31/12/2018</label>&emsp;<label>Monto requerido(S/): </label><label>5,000</label>&emsp;<label>Monto recaudado(S/): </label><label>1,200</label>&emsp;
                <div class="right" style="padding-right: 24px; padding-top: -16px; margin-top: -8px;">
                  <label class="left" style="padding-top: 8px; margin-right: -4px">5</label>
                  <button class="mdc-icon-button material-icons left" style="top: -6px;">favorite</button>&emsp;
                  <label class="left" style="padding-top: 8px; margin-right: -4px">1</label>
                  <button class="mdc-icon-button material-icons left" style="top: -6px;">comment</button>&emsp;
                  <button class="mdc-button">Ver m&aacute;s</button>
                  <button class="mdc-button mdc-button--raised" v-on:click="showDialogDonar">Donar</button>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-proyectos">
        <div style="padding-left: 24px">
          <div class="container-img">
            <img src="../assets/brazo-robot.jpg">
          </div>
          <div class="container-detalle">
            <div class="left">
              <label class="title">Brazo robotico para la escuela de Ing. Industrial</label>
              <p>Queremos armar un brazo rob&oacute;tico que ayude en los trabajos de diseño para la facultad de Ingenier&iacute;a y estar&iacute;a abierto a otros usos. Con el apoyo de los profesores queremos que se de uso al brazo rob&oacute;tico para otras investigaciones.</p>
              <div class="container-action">
                <label>Fecha fin: </label><label>31/12/2018</label>&emsp;<label>Monto requerido(S/): </label><label>1,500</label>&emsp;<label>Monto recaudado(S/): </label><label>100</label>&emsp;
                <div class="right" style="padding-right: 24px; padding-top: -16px; margin-top: -8px;">
                  <label class="left" style="padding-top: 8px; margin-right: -4px"></label>
                  <button class="mdc-icon-button material-icons left" style="top: -6px;">favorite</button>&emsp;
                  <label class="left" style="padding-top: 8px; margin-right: -4px">1</label>
                  <button class="mdc-icon-button material-icons left" style="top: -6px;">comment</button>&emsp;
                  <button class="mdc-button">Ver m&aacute;s</button>
                  <button class="mdc-button mdc-button--raised" v-on:click="showDialogDonar">Donar</button>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <md-dialog style="background-color: white" :md-active.sync="showDialog">
      <md-dialog-title>Donar</md-dialog-title>
      <md-content style="margin: 24px">
        <label>Monto (Ether):  </label>
        <input v-model="amount" maxlength="15" type="number">
      </md-content>

      <md-dialog-actions>
        <md-button class="mdc-button" @click="showDialog = false">Cancelar</md-button>
        <md-button class="mdc-button mdc-button--raised" @click="clickDonar">Calcular</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "publicacion",  
  data() {
    return {
      amount: null,
      pending: false,
      winEvent: null,
      showDialog: false
    };
  },
  methods: {
    showDialogDonar() {
      this.amount = null
      this.showDialog = true
    },
    clickDonar(event) {
      this.showDialog = false
      console.log('balance', this.balance);
      console.log(event.target.innerHTML, this.amount);
      this.winEvent = null;
      this.pending = true;
      this.$store.state.contractInstance().donar({
          gas: 300000,
          value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
          from: this.$store.state.web3.coinbase
        },
        (err, result) => {
          console.log('Holaaaaaaaa' , err);
          if (err) {
            console.log(err);
            this.pending = false;
          } else {
          }
        }
      );
    }
  },
  mounted() {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  }
};
</script>
<style scoped>
.left {
  float: left;
}
.right {
  float: right;
}
.container-header {
  padding-top: 60px;
}
.container-proyectos {
  margin-top: 48px;
  margin-bottom: 64px;
}
.container-img {
  float: left;
  width: 180px;
  height: 180px;
  vertical-align: middle;
  background-color: brown;
}
.container-img img {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}
.container-detalle {
  padding: 16px 24px 0px 24px;
  overflow: hidden;
}
.container-detalle .title {
  font-weight: bold;
  font-size: 18px;
}
.container-action {
  margin-top: -8px;
}
.container-action label {
  font-size: 15px;
}
</style>