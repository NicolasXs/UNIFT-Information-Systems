programa {

	inclua biblioteca Matematica --> mat
	funcao inicio() {
	    
    		real a, b, c
		inteiro op
		
		faca{
		    escreva("Menu\n")
		    escreva("1 - Adição\n")
		    escreva("2 - Subtração\n")
		    escreva("3 - Multiplicação\n")
		    escreva("4 - Divisão\n")
		    escreva("5 - Potencia\n")
		    escreva("6 - Radiação\n")
		    escreva("7 - Fim do Prog.\n")
		    escreva("Qual sua opção? ")
		    leia(op)
		    
		    escolha(op){
		        caso 1:
            	    escreva("Digite um valor para a: ")
            	    leia(a)
            	    escreva("Digite um valor para b: ")
            	    leia(b)
            	    
            	    c = a + b

            	    escreva("A soma é " + c + "\n")
		            pare
		        caso 2:
		            escreva("Vc escolheu subtração\n")
		            escreva("Digite um valor para a: ")
            	       leia(a)
            	       escreva("Digite um valor para b: ")
            	       leia(b)
            	    
            	       c = a - b
            	       escreva("A subtração é " + c + "\n")
		            pare
		        caso 3:
		            escreva("Vc escolheu Multiplicação\n")
		            escreva("Digite um valor para a: ")
            	       leia(a)
            	       escreva("Digite um valor para b: ")
            	       leia(b)
            	    
            	       c = a * b
            	       escreva("A Multiplicação é " + c + "\n")
		            pare
		        caso 4:
		            escreva("Vc escolheu Divisão\n")
		            escreva("Digite um valor para a: ")
            	   	  leia(a)
            	       escreva("Digite um valor para b: ")
            	       leia(b)
            	    
            	       c = a / b
            	       escreva("A Divisão é " + c + "\n")
		            pare
		        caso 5:
		        		escreva("Vc escolheu Potenciação\n")
		        		escreva("Digite um valor para a: ")
            	   	     leia(a)
            	          escreva("Digite um valor para b: ")
            	          leia(b)
            	    
            	          c = mat.potencia(a, b)
            	          escreva("A Potenciação é " + c + "\n")
		        	  pare
		        caso 6:
					escreva("Vc escolheu Radiação\n")
		          	escreva("Digite um valor para a: ")
            	   	     leia(a)
            	          escreva("Digite um valor para b: ")
            	          leia(b)
            	    
   				  pare
		        
		        caso contrario:
		            escreva("Opção Inválida")
		            
		    }
		} enquanto(op!=7)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2074; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */