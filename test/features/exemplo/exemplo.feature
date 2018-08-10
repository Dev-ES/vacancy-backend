# language: pt
Funcionalidade: Ainda é sexta-feira?
  Todo mundo quer saber quando é sexta-feira
 
  Esquema do Cenário: Hoje não é sexta
    Dado que hoje é <dia>
    Quando Eu pergunto se é sexta-feira
    Então Eu deveria ser informado que "Não"
 
    Exemplos:
      | dia |
      | "domingo" |
      | "segunda-feira" |
      | "terça-feira" |
      | "quarta-feira" |
      | "quinta-feira" |
      | "sábado" |
  
  Cenário: Hoje é sexta
    Dado que hoje é "sexta-feira"
    Quando Eu pergunto se é sexta-feira
    Então Eu deveria ser informado que "Sim"
 