import * as assert from 'assert';
import { Given, When, Then } from 'cucumber';

function hojeEhSexta(hoje) {
  return hoje === 'sexta-feira' ? 'Sim' : 'Não';
}

Given('que hoje é {string}', function(hoje) {
  // Write code here that turns the phrase above into concrete actions
  this.hoje = hoje;
});

When('Eu pergunto se é sexta-feira', function() {
  // Write code here that turns the phrase above into concrete actions
  this.resposta = hojeEhSexta(this.hoje);
});

Then('Eu deveria ser informado que {string}', function(esperado) {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(this.resposta, esperado);
});
