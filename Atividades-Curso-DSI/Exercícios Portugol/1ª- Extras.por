programa {
  funcao inicio() {
    inteiro ssecret[4] = {6,5,4,3}
    inteiro susuario[4], i
    inteiro conttentativas = 0
    inteiro acertos = 0 
    escreva("\nSeja Bem Vindo(a) ao Jogo do Cofre Secreto!\n")
    escreva("\nVocê tem 3 tentativas para acertar os 4 dígitos secretos.")
    enquanto(conttentativas < 3){
      acertos= 0
    para(i=0; i<4; i++){
     escreva("\nDigite seu ", i+1, "° dígito: \n")
     leia(susuario[i])
     se(susuario[i] == ssecret[i]){
      acertos = acertos + 1
     }
    }
    se(acertos == 4){
      escreva("\nAcesso Liberado!\n")
      conttentativas = 3
    }senao{
      escreva("\nSenha incorreta. Tente novamente.\n")
      conttentativas = conttentativas + 1
    }
  }
    se(conttentativas == 3 e acertos != 4){
    escreva("\nSuas tentativas acabaram. O cofre permanece trancado.\n")  
    }
  }
}
