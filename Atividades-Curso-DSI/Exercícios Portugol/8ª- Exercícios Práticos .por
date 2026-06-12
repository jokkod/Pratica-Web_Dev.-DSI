programa {
   inclua biblioteca Texto --> txt

   funcao inicio() {
      cadeia palavradec
      caracter pilhapal[100]
      inteiro topo = -1
      inteiro i = 0
      inteiro tamanho = 0
      logico ehPalindromo = verdadeiro

      escreva("Digite uma palavra : ")
      leia(palavradec)

      tamanho = txt.numero_caracteres(palavradec)

      para (i = 0; i < tamanho; i++) {
         topo = topo + 1
         pilha[topo] = txt.obter_caracter(palavradec, i)
      }

      para (i = 0; i < tamanho; i++) {
         se (txt.obter_caracter(palavradec, i) != pilha[topo]) {
            ehPalindromo = falso
         }
         topo = topo - 1
      }

      se (ehPalindromo) {
         escreva("É um palíndromo!")
      } senao {
         escreva("Não é um palíndromo.")
      }
   }
}