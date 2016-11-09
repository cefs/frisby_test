var frisby = require('frisby');

var URL = 'http://qualister.info/qualister-api/?nome=Elias';

frisby.create('Qualister API - GET - /')
	.get(URL)
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.expectJSONTypes({
		status: String,
		message: String,
		data: Object
	})
	.expectJSON({
		status: "success",
		message:  "Elias, seja bem-vindo a API da Qualister",
		data: {
			atuacao: ["Treinamentos","Consultoria","Revenda de ferramentas"],
			consultores: {
				quantidade: 5,
				nomes: [
					"Cristiano Caetano",
					"Elias Nogueira",
					"Julio de Lima",
					"Roberto Ungarelli"
				]
			}
		}	
	})
.toss();


frisby.create('Ensure we are dealing with a teapot')
  .get('http://httpbin.org/status/418')
  .expectStatus(418)
.toss()

frisby.create('Ensure response has a proper JSON Content-Type header')
  .get('http://httpbin.org/get')
  .expectHeader('Content-Type', 'application/json')
.toss();	