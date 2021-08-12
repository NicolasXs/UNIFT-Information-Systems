programa {
	inclua biblioteca Matematica --> mat
	
	real a, b, c
    inteiro op=0, pot=1, exp, base
    
	funcao inicio() {
		
		faca{
            subMenu()
        	subEscolha()	    
		} enquanto(op!=7)
	}
	
	
	
	
	funcao subMenu(){
	    escreva("Menu\n")
	    escreva("1 - Adição\n")
	    escreva("2 - Subtração\n")
	    escreva("3 - Multiplicação\n")
	    escreva("4 - Divisão\n")
	    escreva("5 - Potenciação\n")
	    escreva("6 - Radiciação\n")
	    escreva("7 - Fim do Prog.\n")
	    escreva("Qual sua opção? ")
	    leia(op)	    
	}
	
	funcao subEscolha(){
        escolha(op){
		    caso 1:
	            subSoma()
	            pare
	        caso 2:
	        	  subSubtrai()
	            pare
	        caso 3:
	        	  subMultiplica()
	            pare
	        caso 4:
	        	  subDivide()
	            pare
	        caso 5:
	        	  subPotencia()
	        	  pare
	        caso 6:
	        	  subRadiciacao()
	        	  pare	
	        caso 7:
	        	  escreva("Programa finalizado!")
	        	  pare
	        caso contrario:
	            escreva("Opção Inválida")
        }
	}
	
	funcao subEntrada(){
	    escreva("Digite um valor para a: ")
	    leia(a)
	    escreva("Digite um valor para b: ")
	    leia(b)
	    limpa()
	}
	
	funcao subSoma(){
	    subEntrada()
	    escreva("Você escolheu adição: ")
	    c = a + b
	    escreva("A soma é " + c + "\n")
	}
	
	funcao subSubtrai(){
		subEntrada()
		escreva("Você escolheu subtração: ")
          c = a - b
		escreva("A subtração é ", c ,"\n")
	}

	funcao subMultiplica(){
		subEntrada()
		escreva("Você escolheu multiplicação\n")
          c = a * b
		escreva("A multiplicação é ", c ,"\n")
	}

	funcao subDivide(){
		subEntrada()
		escreva("Você escolheu divisão\n")
          c = a / b
		escreva("A divisão é ", c ,"\n")
	}

	funcao subPotencia(){
		escreva("Digite o valor da base: ")
		leia(base)
		
		escreva("Digite o valor do expoente: ")
		leia(exp)
		
		para (inteiro x = 1; x <= exp; x++ )
		pot = pot * base
		
		escreva("\n A potência de A por B é: ", pot, "\n")
	
	}

	funcao subRadiciacao() {
		escreva("Você escolheu radiciação\n")
		escreva("Digite um valor para o radicando: ")
          leia(a)
          escreva("Digite um valor para o índice: ")
          leia(b)
            	    
          c = mat.raiz(a, b)

          escreva("A raiz é ", c ,"\n") 
	}
	
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1023; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */