#include <stdio.h>
#include <time.h>
#include <math.h>

/*********************** Inicio variáveis ***********************/
int op = 0;
int opcao = 0;
int binToDec();
long int decToBin();
int soma();
int sub();
int continuar();
int creditos();
/*********************** Fim variáveis ***********************/
/*********************** Inicio Delay ***********************/

void delay(int milesecs) {
  int milesecs_now = clock() * 1000 / CLOCKS_PER_SEC;
  int end = milesecs_now + milesecs;

  do {
    milesecs_now = clock() * 1000 / CLOCKS_PER_SEC;
  } while(milesecs_now <= end);
}

/*********************** Fim Delay ***********************/
/*********************** Inicio subSoma() ***********************/

int subSoma(){
    long int numero1, numero2;
    int i=0,restante = 0,soma[20];
    printf("Você escolheu a opção numero 1: Adição!!\n");
    printf("Digite o primeiro número binário: ");
    scanf("%ld",&numero1);
    printf("Digite o segundo número binário: ");
    scanf("%ld",&numero2);

    while(numero1!=0||numero2!=0){
         soma[i++] = (numero1 %10 + numero2 %10 + restante ) % 2;
         restante = (numero1 %10 + numero2 %10 + restante ) / 2;
         numero1 = numero1/10;
         numero2 = numero2/10;
    }

    if(restante!=0)
         soma[i++] = restante;

    --i;
    printf("\nO resultado da soma é: ");
    while(i>=0)
         printf("%d",soma[i--]);
         printf("\n");
  
  return 0;
}

/*********************** Fim subSoma() ***********************/
// /*********************** Inicio subSubtrai() ***********************/

int subSubtrai(){
  long int n1, n2;
  printf("Você escolheu a opção numero 2: Subtração!!\n");
  printf("Digite o primeiro numero: ");
  scanf("%ld", &n1);
  printf("Digite o segundo numero: ");
  scanf("%ld", &n2);
  printf("\nO resultado da subtração é: %d", sub(n1, n2));
  return 0;
}

//conversão de binário para decimal
int binToDec(long int num){
    int dec = 0, i = 0, rem;
    while (num != 0) {
        rem = num % 10;
        num /= 10;
        dec += rem * pow(2, i);
        ++i;
    }
    return dec;
}
//conversão de decimal para binário
long int decToBin(int num){
    long long bin = 0;
    int rem, i = 1;
    while (num != 0) {
        rem = num % 2;
        num /= 2;
        bin += rem * i;
        i *= 10;
    }
    return bin;
}
//subtracao dos decimais e conv pra binario
int sub(int num1, int num2){
    int resSub;
    resSub = binToDec(num1) - binToDec(num2);
    return decToBin(resSub);
}

/*********************** Fim subSubtrai() ***********************/
/*********************** Inicio subMenu() ***********************/

int subMenu(){

  printf(" ⫷ Menu ⫸\n\n ");
  printf("╔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔╗\n");
  printf(" ╢ 1 - adição            	╟\n");
  printf(" ╢ 2 - Subtração        	╟\n");
  printf(" ╢ 3 - Créditos         	╟\n");
  printf(" ╢ 4 - Finalizar Programa!  ╟\n");
  printf(" ╚≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔≔╝\n\n");
  printf("Escolha uma opção ➔ ");
  scanf("%d", &op);
  printf("\e[1;1H\e[2J");
  
  return 0;
}

/*********************** Fim subMenu() ***********************/
/*********************** Inicio subEscolha() ***********************/

int subEscolha(){
  switch(op){
    case 1:
      subSoma();
      continuar();
      break;
    case 2:
      subSubtrai();
      continuar();
      break;

    case 3:
      creditos();
      // continuar();
      break;
    case 4:
        printf("Obrigado por usar nosso programa!");
        break;
    default:
      printf("Opção invalida! Tente novamente:\n\n");
      subMenu();
      subEscolha();
      break;
  }

  return 0;
}
/*********************** Fim subEscolha() ***********************/
int continuar(){
    printf("\n\n            ◈ Deseja continuar? ◈\n\n");
    printf("  ⠾⠷⠾⠷⠾⠷⠾⠷⠾⠷⠾⠷⠾⠷⠾⠷⠾⠷⠾⠾⠷⠾⠷⠾⠷⠾⠷⠾⠷⠷⠾⠷⠾⠷⠾⠷⠾⠷⠾⠷⠾⠷⠾⠷⠾⠷\n");
    printf("   Digite 1 para confirmar ou 2 para finalizar: ");
    printf("\n  ⢶⡶⢶⡶⢶⢶⡶⢶⡶⢶⡶⢶⡶⢶⡶⢶⡶⡶⢶⢶⢶⡶⢶⡶⢶⡶⢶⡶⡶⢶⡶⢶⡶⢶⡶⢶⢶⡶⡶⢶⡶⢶⡶⢶⡶⢶⡶\n\n➤ ");
    scanf("%d", &opcao);
    printf("\e[1;1H\e[2J");
      if (opcao == 1){
            subMenu();
            subEscolha();
            return 0;
        }
    if (opcao == 2) {
            printf("⠉⢉⠼⠉⠉⠉⢉⢉⣽⠿⠫⠟⠉⢉⣉⣉⣩⠿⡉⠫⠉⠉⠙⠉⠉⠉⠉⠉⠉⣩ \n⣠⠎⠄⠄⠄⠄⢸⡎⠑⢤⡀⠄⠄⣸⠈⠉⠑⠦⠾⡇⠄⠄⠄⠄⠄⢀⣠⠄⣸⣿ \n⠄⠄⠄⠄⢀⣴⣿⣷⡄⠄⠄⠐⠯⠁⠄⠄⠄⠄⠄⠈⠐⠲⣤⡴⠒⠉⣠⣾⣿⣿ \n⠄⠄⠄⠲⢾⣻⣇⢸⣷⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠄⠄⣰⣿⣿⡿⠃ \n⠄⣦⡀⠄⠄⠙⠻⣿⣟⠛⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣰⣿⣿⣿⠥⠄ \n⣾⡟⢻⣆⠄⠄⠄⠄⠄⠄⠄⠄⢠⣦⡀⠄⠄⠄⠄⠄⠄⢀⠄⢸⣟⠉⠁⠄⠄⠄ \n⠿⠁⠄⠻⣆⠄⠄⠄⠄⠄⠄⠄⠸⣿⣷⣄⠄⠄⠄⢀⣴⣿⠄⠸⣿⠄⢀⡠⠄⠄ \n⠄⠄⠄⠄⠸⣷⣄⠄⠄⠄⢰⣦⣄⡘⠛⠙⠃⠄⠄⠞⠟⢋⡀⢸⣿⢠⡟⠁⠄⠄ \n⠄⠄⠈⡉⠉⠉⠉⠁⠄⠄⠈⠻⣿⣿⣿⣷⣶⣶⣶⣾⣿⡿⠁⣸⡷⠋⠄⠄⠄⠄ \n⠄⠄⠄⠙⢶⠆⠄⠄⠄⠄⠄⠄⠉⠻⠿⠿⠿⠿⠿⠟⠋⠄⢠⡿⠄⠄⠄⠄⠄⠄ \n⠄⠄⠄⢠⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡾⠁⠄⠄⠄⠄⠄⠄ \n⠄⠄⠄⡞⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣶⡯⠁⠄⠄⠄⠄⠄⠄⠄ \n⠄⠄⢸⠇⠄⠄⠄⠄⠄⣀⣄⠄⠄⠄⠄⡀⠠⠤⠞⢫⡿⠃⠄⠄⠄⠄⠄⠄⠄⠄ \n⠄⠄⠏⠄⠄⠄⣠⣴⣿⣿⣿⣿⣿⣿⣧⠄⠄⠄⣠⡎⠄⠄⠄⠄⠠⠄⠄⢀⠄⠄ \n⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄⠊⠉⢀⠄⠄⠠⠂⠁⢀⣶⠋⠄⠄\n \nObrigado por testar nosso programa! :) \n");
            return 0;
            
        }
    else{
          printf("Opção invalida, Tente novamente!\n");
          continuar();
        }
    return 0;
  
}
/*********************** Inicio Creditos ***********************/
int creditos(){
 int delayLoop = 500;
  char mensagem[350] = "Trabalho de Logica e Matematica Discreta\n\nGrupo: \nXxxxxxx Xxxxx Xxxxxx xx Xxxxx\nXxxxxxx Xxxxx Xxxxxxx\nXxx Xxxxxxxx Xxxxxxxxxxx\nXxxx Xxxxxxxx Xxxxxxx Xxxxxx\nXxxxxx Xxxxxxx Xxxxx\nXxxxxxx Xxxxxxxx Xxxxxxx\n\nProf: Xxxxx Xxxxx Xxxxxx\n\nObjetivo:\nDesenvolver dois programas em Java ou C que faca a soma e a subtracao de 2 numeros em binario.";
  for (int i = 0; i <= 350; i++) {
    printf("%c", mensagem[i]);
    fflush(stdout);
    delay(07);
  }
  printf ("");
  return 0;
}

/*********************** Fim Creditos ***********************/
/*********************** Inicio função principal (main) ***********************/

int main(void){
    printf("\e[1;1H\e[2J");
    printf("\n♦ Trabalho de Logica e Matematica Discreta ♦");
    continuar();
    return 0;
   
}

/*********************** Fim função principal (main) ***********************/
