**API - GITHUB**
===================

## **Introdução**

Neste repositório se encontra o pontapé inicial projeto proposto pelo canal Mentoria do [DevES](https://devescom.herokuapp.com),  foram utilizadas as seguintes tecnologias: [Docker](https://github.com/docker), [Node.JS](https://github.com/nodejs/node) e [Resitfy](https://github.com/restify/node-restify).

## **Setup**

Esta seção descreve a forma de configuração da aplicação, antes de iniciar, verifique se algumas das portas a seguir estão sendo utilizadas:

 - 3456 (Servidor NodeJS)
 - 1306 (MySQL)

Todos as etapas a seguir foram executadas no terminal.

#### **Etapa 1**
Primeiramente devemos instalar o **Docker**, seguem os links para a instalação do **Docker**

 1. Docker ([Guia de instalação](https://docs.docker.com/engine/installation/))
 2. Docker-compose - 1.13.0+ ([Guia de instalação](https://docs.docker.com/compose/install/))

#### **Etapa 2**
Depois da instalação do **Docker**, devemos clonar o repositório do projeto, para isso usaremos o seguinte comando:

```sh
git clone https://github.com/YSOUZAS/api-github.git
```
Após clonarmos o projeto, devemos entrar na pasta principal com o seguinte comando:
```sh
cd api-github
```
Já dentro da pasta api-github devemos executar o seguinte comando:

```sh
docker-compose up
```



## **Documentação**

Todo o código foi feito usando o  [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), o código principal do backend está dentro do seguinte caminho:
```sh
api-github/backend/src
```