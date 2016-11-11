var frisby = require('frisby');

var URL = 'http://car.semas.pa.gov.br/receptor/integracao/imoveis/informacoes?codigo=PA-1501907-0AC76504FB6342788991DDFBC7FCEFD4';

frisby.create('SICAR  success')
	.get(URL)
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.expectJSONTypes({
		status: String,
		dados: Object
	})
	.expectJSON({
		status: "s",
		dados: [
			{
				imovel: {
					numeroCAR: "PA-1501907-0AC76504FB6342788991DDFBC7FCEFD4"
				}
			}
		]
	})
.toss();