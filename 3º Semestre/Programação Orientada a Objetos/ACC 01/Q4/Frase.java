package com.mycompany.frase;
import java.util.Scanner;


public class Frase {

    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in); 
        String frase;
        String sexo = "sexo";
        String sexual = "sexual";       

        System.out.println("Informe uma frase:\n");
        frase = ler.nextLine();
        
        
        if (frase.toLowerCase().contains(sexo.toLowerCase())) {
            System.out.println("Conteudo improprio!");
        }
        
        else if (frase.toLowerCase().contains(sexual.toLowerCase())) {
             System.out.println("Conteudo improprio!");
        } 
        
        else {
            System.out.println("Conteudo liberado!");
        }  
    }
}
