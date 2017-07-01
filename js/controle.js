
	$(function(){
		$('#enviar').click(function(){
			//alert("teste");
			var peso ; var altura ; var quadradoAltura; var imc; var quadrado; var imc_redux;
					
					peso = $('#peso').val().replace(",",".");
					altura = $('#altura').val().replace(",",".");

						console.log(peso+" "+altura);
						quadrado = altura*altura;
							console.log("quadrado: "+quadrado);

							imc = peso/quadrado;
							console.log("imc :"+imc)
							imc_redux = imc.toFixed(2);
							console.log(imc_redux);
								var tipo = 0;
							if(imc_redux < 18.50){
								tipo = "Abaixo do peso";
								console.log("x0");
							}else if(imc_redux >= 18.50 && imc_redux < 25.00){
								tipo = "Peso ideal";
								console.log("x1");
							}else if(imc_redux >= 25.00 && imc_redux < 30.00){
								tipo = "sobrepeso";
								console.log("x2");
							}else if(imc_redux >= 30.00 && imc_redux < 35.00){
								tipo = "obesidade grau 1";
								console.log("x3");
							}else if(imc_redux >= 35.00 && imc_redux < 40.00){
								tipo = "obesidade grau 2";
								console.log("x4");
							}else if(imc_redux >= 40.00 ){
								tipo = "obesidade grau 3";
								console.log("x5");
							}
							/**/
						var html = "<p>o seu peso "+peso.replace(".",",")+" e altura "+altura.replace(".",",")+",  o IMC e :"+imc_redux.replace(".",",")
						+"<b> "+tipo+"</b></p>";
						//alert(html);
							console.log(html);
								$('#resultado').html(html);
		});
	});
	