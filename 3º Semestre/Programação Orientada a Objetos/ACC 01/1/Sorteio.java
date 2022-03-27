package com.mycompany.sorteio;

import java.util.Random;

public class  Sorteio {

    public static void main(String[] args) {
        int soma = 0; 
        int resultado = 0;
        
        Random random = new Random();
        
        for(int i=0; i<3; i++){
            
            int sorteio = random.nextInt(1, 7);
            System.out.println("Numero inteiro aleatorio de 1 ate 6: " + sorteio);
            soma = sorteio;
            resultado = resultado + soma;
        }
        
        System.out.println("A soma dos tres numeros e igual a: " + resultado);
      
    }

}