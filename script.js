/*
Código chave para criptografia
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/

function criptografar() {
  var texto = document.getElementById('inputTexto').value.tolowerCase()
  //Para que afete o texto colocado tanto com letra e ou E
  //Para toda linha da oração
  //Para que afete a multiplas linhas do paragrafo
  var txtCriptografado = texto.replace(/e/g, 'enter')
  var txtCriptografado = txtCriptografado.replace(/o/g, 'obter')
  var txtCriptografado = txtCriptografado.replace(/i/g, 'imes')
  var txtCriptografado = txtCriptografado.replace(/a/g, 'ai')
  var txtCriptografado = txtCriptografado.replace(/u/g, 'ufat')

  document.getElementById('imgDireita').style.display = 'none'
  document.getElementById('texto').style.display = 'none'
  document.getElementById('texto2').innerHTML = txtCriptografado
  document.getElementById('copiar').style.display = 'show'
  document.getElementById('copiar').style.display = 'inherit'
}

function Descriptografar() {
  var texto = document.getElementById('inputTexto').value.tolowerCase()
  //Para que afete o texto colocado tanto com letra e ou E
  //Para toda linha da oração
  //Para que afete a multiplas linhas do paragrafo
  var txtCriptografado = texto.replace(/enter/g, 'e')
  var txtCriptografado = txtCriptografado.replace(/obter/g, 'o')
  var txtCriptografado = txtCriptografado.replace(/imes/g, 'i')
  var txtCriptografado = txtCriptografado.replace(/ai/g, 'a')
  var txtCriptografado = txtCriptografado.replace(/ufat/g, 'u')

  document.getElementById('imgDireita').style.display = 'none'
  document.getElementById('texto').style.display = 'none'
  document.getElementById('texto2').innerHTML = txtCriptografado
  document.getElementById('copiar').style.display = 'show'
  document.getElementById('copiar').style.display = 'inherit'
}

function copiar() {
  var conteudoCopiar = document.querySelector('texto2')
  conteudoCopiar.select()
  document.execCommand('copy')
  alert('Conteudo Copiado!')
}
