programa {

	real a, b, c

	funcao inicio() {
		inteiro op
		
		faca{
		    escreva("Menu\n")
		    escreva("1 - Adição\n")
		    escreva("2 - Subtração\n")
		    escreva("3 - Multiplicação\n")
		    escreva("4 - Divisão\n")
		    escreva("5 - Fim do Prog.\n")
		    escreva("Qual sua opção? ")
		    leia(op)
		    
		    escolha(op){
		        caso 1:
		            subSoma()
		            pare
		        caso 2:
		            escreva("soma")
		            pare
		        caso 3:
		            escreva("soma")
		            pare
		        caso 4:
		            escreva("soma")
		            pare
		        caso contrario:
		            escreva("Opção Inválida")
		    }
		} enquanto(op!=5)
	}
	
	funcao subEntrada(){
	    escreva("Digite um valor para a: ")
	    leia(a)
	    escreva("Digite um valor para b: ")
	    leia(b)
	}
	
	funcao subSoma(){
	    
	    subEntrada()
	    
	    c = a + b
	    
	    escreva("A soma é " + c + "\n")
	}
}
