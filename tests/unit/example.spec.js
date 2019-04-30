import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Calculadora from '@/components/Calculadora.vue'

describe('Calculadora.vue', () => {
  let wrapper;
  beforeEach(function() {
    wrapper = shallowMount(Calculadora);
  })
  it('Divison by 0 shows infinity', () => { 
    const cuatro = wrapper.find('#cuatro');  
    const cero = wrapper.find('#cero'); 
    const division = wrapper.find('#division');
    const igual = wrapper.find('#igual'); 
    cuatro.trigger('click');
    division.trigger('click');
    cero.trigger('click');
    igual.trigger('click'); 
    expect(wrapper.vm.valoractual).to.equal('Infinity');
  })
  it('change valoractual to five when clicked', () => {   
    const boton = wrapper.find('#cinco');
    boton.trigger('click');
    expect(wrapper.vm.valoractual).to.equal('5');
  })
  it('displays 0 by default', () => {
    const display = wrapper.find('#display');
    expect(display.text()).to.equal('0');
   })
  it('adds correctly', () => {
    const cuatro = wrapper.find('#cuatro');
    const uno = wrapper.find('#uno');
    const suma = wrapper.find('#suma');
    const igual = wrapper.find('#igual');
    cuatro.trigger('click');
    expect(wrapper.vm.valoractual).to.equal('4');
    suma.trigger('click');
    expect(wrapper.vm.valoranterior).to.equal('4');
    uno.trigger('click');
    expect(wrapper.vm.valoractual).to.equal('1');
    igual.trigger('click');
    expect(wrapper.vm.valoractual).to.equal('5');
  })
  it('Change Method division to remainder', () => {
    const cuatro = wrapper.find('#cuatro');
    const cero = wrapper.find('#cero');
    const division = wrapper.find('#division');
    const igual = wrapper.find('#igual');
    const limpiar = wrapper.find('#clear');
    cuatro.trigger('click');
    cero.trigger('click');
    division.trigger('click');
    cuatro.trigger('click');
    igual.trigger('click');
    expect(wrapper.vm.valoractual).to.equal('10');
    limpiar.trigger('click');
    const residuo = function(){
      if(this.valorbool){
        this.guardar()
        this.operacion = (a,b) => a%b;     
        }  
    wrapper.setMethods({ dividir: residuo })
    cuatro.trigger('click');
    cero.trigger('click');
    division.trigger('click');
    cuatro.trigger('click');
    igual.trigger('click');
    expect(wrapper.vm.valoractual).to.equal('0');
    }
  })
})
