import * as assert from 'assert';
import { Given, When, Then } from 'cucumber';

/* Dado que eu informei o título da vaga */
Given('que eu informei o título da vaga', () => {
  this.vaga = {};
  this.vaga.title = '';
  return;
});

/* E informei a descrição */
Given('informei a descrição', () => {
  this.vaga.description = '';
  return;
});

/* E informei o local */
Given('informei o local', () => {
  this.vaga.local = '';
});

/* E informei como se candidatar */
Given('informei como se candidatar', () => {
  this.vaga.howToApply = '';
});

/* E informei se é alocado ou à distância */
Given('informei se é alocado ou à distância', () => {
  this.vaga.inLoco = '';
});

/* E informei o nível profissional desejado */
Given('informei o nível profissional desejado', () => {
  this.vaga.level = '';
});

/* E informei a forma de contrato oferecida */
Given('informei a forma de contrato oferecida', () => {
  this.vaga.contract = '';
});

/* E informei os benefícios */
Given('informei os benefícios', () => {
  this.vaga.benefits = [];
});

/* E informei os requisitos */
Given('informei os requisitos', () => {
  this.vaga.requirements = [];
});

/* E informei o valor do salário */
Given('informei o valor do salário', () => {
  this.vaga.salary = {};
  this.vaga.salary.value = '';
});

/* E informei a frequência que esse salário é pago */
Given('informei a frequência que esse salário é pago', () => {
  this.vaga.salary.frequecy = '';
});

/* Quando eu enviar esses dados para a API */
When('eu enviar esses dados para a API', () => {
  /* TODO: Mockar app pra fazer as requisições */
  return('pending');
});

/* Então os dados da nova vaga são salvos no sistema */
Then('os dados da nova vaga são salvos no sistema', () => {
  /* TODO: Fazer assert da resposta do server. */
  return('pending');
});
