package com.mycompany.farmacia;

import java.util.Scanner;

public class Farmacia {
  public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        double produto = 0.0;
        double valorFinal = 0.0;
        double ajuste = 0.0;
        double valortaxa = 0.12;
       do { 
        System.out.println("Valor do produto: ");
        produto = ler.nextDouble();

        if (produto != 0) {
            ajuste = produto * valortaxa;
            valorFinal = produto + ajuste;
            
            System.out.println("Valor original: " + produto);
            System.out.println("Valor da taxa: " + ajuste);
            System.out.println("Valor para pagar: " + (int) Math.round(valorFinal));
            System.out.print("-------------------- \n");
        }   
      }while (produto != 0);
    }
}