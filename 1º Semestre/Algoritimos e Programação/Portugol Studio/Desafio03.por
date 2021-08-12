programa
{
	
	funcao inicio()
	{
		inteiro valor = 0
		inteiro X

		faca{
			escreva ("Digite um número entre 1 e 10: ")
			leia(valor)
		}enquanto ((valor <= 0) ou (valor > 10))  
		
		para(X = 0; X <= 10; X++){
			escreva(valor + " * " + X + " = " + valor * X + "\n")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 164; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */