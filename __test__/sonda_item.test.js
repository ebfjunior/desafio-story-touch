import React from 'react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SondaItem from '../src/components/sonda_item';

import Sonda from '../src/business/sonda.js';

it('Deve renderizar corretamente', () => {
  const wrapper = mount(<Provider store={configureMockStore()()}><SondaItem/></Provider>);

  expect(wrapper).toMatchSnapshot();
});

it('Deve preencher os campos de acordo com a sonda atrelada ao componente', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'E', comandos: 'MMM'});
  const wrapper = mount(<Provider store={configureMockStore()()}><SondaItem sonda={sonda}/></Provider>);

  expect(wrapper.find('.x-input').props().value).toBe(5);
  expect(wrapper.find('.y-input').props().value).toBe(5);
  expect(wrapper.find('.direcao-input').props().value).toBe('E');
  expect(wrapper.find('.comandos-input').props().value).toBe('MMM');

});

it('Se existir uma sonda atrelada ao componente, o botão de adicionar não deve aparecer', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'E', comandos: 'MMM'});
  const wrapper = mount(<Provider store={configureMockStore()()}><SondaItem sonda={sonda}/></Provider>);

  expect(wrapper.find('button').props().style.display).toBe("none");
});

it('Se existir uma sonda atrelada ao componente, os campos de texto devem ficar desabilitados', () => {
  const sonda = new Sonda({x: 5, y: 5, direcao: 'E', comandos: 'MMM'});
  const wrapper = mount(<Provider store={configureMockStore()()}><SondaItem sonda={sonda}/></Provider>);

  expect(wrapper.find('.x-input').props().disabled).toBe(true);
  expect(wrapper.find('.y-input').props().disabled).toBe(true);
  expect(wrapper.find('.direcao-input').props().disabled).toBe(true);
  expect(wrapper.find('.comandos-input').props().disabled).toBe(true);
});

it('Se não existir uma sonda atrelada ao componente, o botão de adicionar deve aparecer', () => {
  const wrapper = mount(<Provider store={configureMockStore()()}><SondaItem/></Provider>);

  expect(wrapper.find('button').props().style.display).toBe("inline");
});

it('Deve exibir mensagem de erro quando nenhum campo é preenchido', () => {
  const wrapper = mount(<Provider store={configureMockStore()({config: {width: 5, height: 5}})}><SondaItem/></Provider>);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.errors').length).toBe(4);
  
});