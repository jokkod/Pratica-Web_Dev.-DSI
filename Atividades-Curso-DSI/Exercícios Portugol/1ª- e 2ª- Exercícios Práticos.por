programa {
  funcao inicio() {
    inteiro numero[10],i
    inteiro somanumpar
    somanumpar=0

    para(i=0;i<10;i++){
      escreva("Digite seu ",i+1,"número: ")
      leia(numero[i])
    }
    para(i=0;i<10;i++){
      se(i % 2 == 0){
        somanumpar=somanumpar+numero[i]
      }
    }
    escreva("A soma dos números pares é igual a: ",somanumpar)
  }
}
