programa {

	real a, b, c
    inteiro op=0
    
	funcao inicio() {
		
		faca{
            subMenu()
        	subEscolha()	    
		} enquanto(op!=5)
	}
	
	
	
	
	funcao subMenu(){
	    escreva("Menu\n")
	    escreva("1 - Adi��o\n")
	    escreva("2 - Subtra��o\n")
	    escreva("3 - Multiplica��o\n")
	    escreva("4 - Divis�o\n")
	    escreva("5 - Fim do Prog.\n")
	    escreva("Qual sua op��o? ")
	    leia(op)	    
	}
	
	funcao subEscolha(){
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
	            escreva("Op��o Inv�lida")
        }
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
	    
	    escreva("A soma � " + c + "\n")
	}
}
