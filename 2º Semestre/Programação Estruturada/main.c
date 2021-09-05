#include <stdio.h>

#include <stdlib.h>

#include <time.h>

int main(void) {

  int n, s;

  printf("Sortendo número - \n");

  srand(time(NULL));
  s = rand()%4;

  printf("Digite um inteiro: ");
  scanf("%d", &n);

  printf("Número sorteado = %d\n", s);
  printf("Número digitado %d\n", n);

  if(n==s){
    printf("Número positivo\n");
  } else {
    printf("Número negativo\n");
  }

  return 0;
}