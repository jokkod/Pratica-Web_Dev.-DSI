programa {
  funcao inicio() {
    cadeia nome[5]
    cadeia nomeprocurado
    inteiro i
    logico existenm= falso

    para(i=0;i<5;i++){
      escreva("\nDigite seu ",i+1,"º nome: ")
      leia(nome[i])
    }
    escreva("\nDigite o nome que procura: ")
    leia(nomeprocurado)
    para(i=0;i<5;i++){
      se(nome[i] == nomeprocurado){
        existenm= verdadeiro
        escreva("\nO nome foi encontrado na posição: ",i+1,"\n")
    pare}}
  }
}
