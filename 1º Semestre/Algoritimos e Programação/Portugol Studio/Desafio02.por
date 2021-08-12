programa
{
	
	funcao inicio()
	{
		real valor_1, valor_2

		escreva("Digite um número: ")
		leia(valor_1)
		escreva("Digite outro número: ")
		leia(valor_2)

		se (valor_1 > valor_2)
			escreva("Esses são os valores em ordem crescente:\n" + valor_2 + "\n" + valor_1)
		senao
			escreva("Esses são os valores em ordem crescente:\n" + valor_1 + "\n" + valor_2)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 326; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */