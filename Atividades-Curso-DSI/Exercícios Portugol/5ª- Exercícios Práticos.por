programa {
  funcao inicio() {
    inteiro vetor1 [5]
    inteiro vetor2 [5]
    inteiro i
    inteiro resultadosub[5]

   escreva("\nDigite 5 elementos do PRIMEIRO VETOR!\n ")
    para(i = 0; i < 5; i++)
    {
      escreva("\nO ", i + 1, "º elemento é: ")
    leia(vetor1[i])
    }

    escreva("\nDigite 5 elementos do SEGUNDO VETOR!\n ")
      para (i = 0; i < 5; i++) {
         escreva("\nO ", i + 1, "º elemento é: ")
         leia(vetor2[i])
      }

     para(i = 0; i < 5; i++)
     { resultado[i] = vetor1[i] - vetor2[i]
      escreva("\nA operação de subtração dos dois vetores tem como ", i + 1, "º resultado: ", resultado[i])
     }

    
  }
}

