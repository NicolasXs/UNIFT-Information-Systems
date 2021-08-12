programa{
	inclua biblioteca Matematica --> mat

    real a, b, c 
    inteiro op=0
	
	funcao inicio(){

		

		faca{
			subMenu()
		subEscolha()
		}  enquanto(op!= 7)
		}


		funcao subMenu(){
			escreva("Menu\n")
			escreva("1 - Adição\n")
			escreva("2 - Subtracao\n")
			escreva("3 - Divisao\n")
			escreva("4 - Multiplicacao\n")
			escreva("5 - Potencia\n")
			escreva("6 - Raiz\n")
			escreva("7 - Qual sua opção ? ")
			leia(op)
		}
		funcao subEscolha() {
			escolha(op){
				caso 1:
				  subSoma()
				  pare
				caso 2:
				 subSubtracao()
				  pare
				caso 3:
				  subDivisao()
				  pare
				caso 4:
				  subMultiplicacao()
				  pare
				caso 5:
				  subPotencia()
				  pare
				caso 6:
				  subRaiz()
				  pare
				caso contrario:
				  escreva("Opção inválida")
			}
		}


		funcao subEntrada(){
			escreva("Digite um valor para a: \n")
			leia (a)
			escreva("Digite um valor para b: \n")
			leia (b)
			
		}

		funcao subSoma(){
		     subEntrada()

			c = a + b 

			escreva("A soma é: " + c + "\n")

		}

		funcao subSubtracao(){
			subEntrada()

			c = a - b

			escreva("A subtração é: " + c + "\n")
		}

		funcao subDivisao(){
			subEntrada()

			c = a/b

			escreva("A Divisão é: " + c + "\n")
			
		}

		funcao subMultiplicacao(){
			subEntrada()

			c = a*b

			escreva("A multiplicação é: " + c + "\n")
		}

		funcao subPotencia(){
			subEntrada()

			c = mat.potencia(a, b)

			escreva("A potência é: " + c + "\n")
			
		}

		funcao subRaiz(){
			subEntrada()

			c = mat.raiz(a, b)

			escreva("A Raiz é: " + c + "\n")
		}
		    
	}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 166; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */