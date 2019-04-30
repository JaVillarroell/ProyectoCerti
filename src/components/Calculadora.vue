<template>
  <div class = "calculadora">
   <div class = "display" id="display"> {{valoractual || 0 }} </div>
   <div class = "btn" @click = "clear" id="clear"> C </div>
   <div class = "btn" @click = "signo"> +/- </div>
   <div class = "btn" @click = "porcentaje"> % </div>
   <div @click = "dividir" class = "btn operaciones" id="division"> / </div>
   <div @click = "escribir('8')" class = "btn"> 8 </div>
   <div @click = "escribir('7')" class = "btn"> 7 </div>
   <div @click = "escribir('9')" class = "btn"> 9 </div>
   <div @click = "multiplicar" class = "btn operaciones"> x </div>
   <div @click = "escribir('4')" class = "btn" id="cuatro"> 4 </div>
   <div @click = "escribir('5')" class = "btn" id="cinco"> 5 </div>
   <div @click = "escribir('6')" class = "btn"> 6 </div>
   <div @click = "restar" class = "btn operaciones"> - </div>
   <div @click = "escribir('1')" class = "btn" id="uno"> 1 </div>
   <div @click = "escribir('2')" class = "btn"> 2 </div>
   <div @click = "escribir('3')" class = "btn"> 3 </div>
   <div @click = "sumar" class = "btn operaciones" id="suma"> + </div>
   <div @click = "escribir(0)" class = "btn cero" id="cero"> 0 </div>
   <div @click = "punto" class = "btn"> . </div>
   <div @click = "igual" class = "btn operaciones" id = "igual"> = </div>

  </div>
</template>

<script>
export default {
  name:'Calculadora',
  data() {
    return {
    valoractual: '',
    valoranterior:null,
    valorbool:true,
    operacion:null
    }
  },
  methods: {
    clear() {
      this.valoractual = '';
      this.valoranterior = '';
      this.valorbool= true;
    },
    signo() {
      this.valoractual = this.valoractual.charAt(0) === "-" ? this.valoractual.slice(1) : `-${this.valoractual}`;
    },
    porcentaje() {
      this.valoractual = this.valoractual / 100;
    },
    escribir(valor){
      this.valoractual = `${this.valoractual}${valor}`;
    },
    punto(){
      if(this.valoractual.indexOf('.') === -1){
        this.escribir('.');
      }
    },
    guardar(){
    this.valoranterior = this.valoractual;
    this.valoractual = '';
    this.valorbool = false;

    },
    sumar(){
      if(this.valorbool){
      this.guardar()
      this.operacion = (a,b) => a+b;
      }
      
    },
    restar(){
      if(this.valorbool){
      this.guardar()
      this.operacion = (a,b) => a-b;     
      }   
      
    },
    multiplicar(){
      if(this.valorbool){
      this.guardar()
      this.operacion = (a,b) => a*b;
      }
     
    },
    dividir(){
      if(this.valorbool){
      this.guardar()
      this.operacion = (a,b) => a/b;
      }
          },
    igual(){
      if(this.valoranterior){
      this.valoractual = `${this.operacion(parseFloat(this.valoranterior),parseFloat(this.valoractual))}`;
      this.valorbool = true;
      this.valoranterior = '';
      }
    }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculadora {
  width: 500px;
  margin: 0 auto;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(50px,auto);
}
.display{
  grid-column: 1/5;
  background-color:black;
  color: white;
}
.btn{
  background-color: lightgrey;
  border: 2px solid black;
  
}
.cero{
  grid-column: 1/3;   
}
.operaciones{
  background-color: gold;
  color: white;
}


</style>
