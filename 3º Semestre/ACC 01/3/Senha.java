
package com.mycompany.senha;
import java.lang.Math;

public class Senha {

    public static void main(String[] args) {
        int max = 10;
        int max2 = 9;
        int min = 5;
        int min2 = 0;
        int range = max - min + 1;
        int range2 = max2 - min2 + 1;
        
        int rand = (int)(Math.random() * range) + min;  
        System.out.println("Numero sorteado: " + rand);
        System.out.print("Senha gerada: ");
        
        
        for (int i = 0; i < rand; i++) {
             int senha = (int)(Math.random() * range2) + min2;
             System.out.print(senha);
        }
    }
}
