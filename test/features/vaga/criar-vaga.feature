# language: pt
Funcionalidade: Criar uma vaga no sistema
Eu, como Empregador, quero criar uma vaga, para encontrar um desenvolvedor.

Cenário: Todos os dados obrigatórios são informados e a vaga é criada com sucesso
  Dado que eu informei o "título da vaga"
  E informei a "descrição"
  E informei o "local"
  E informei "como se candidatar"
  E informei "se é alocado ou à distância"
  E informei o "nível profissional desejado"
  E informei a "forma de contrato oferecida"
  E informei os "benefícios"
  E informei os "requisitos"
  E informei o "valor do salário"
  E informei "a frequência que esse salário é pago"
  Quando eu enviar esses dados para a API
  Então os dados da nova vaga são salvos no sistema
