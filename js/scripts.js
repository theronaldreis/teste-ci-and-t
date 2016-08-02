// Colore de preto os pontos da timeline
function colore_timeline(){
  var timeline_item_selected = $(".lista-da-timeline .selected").attr('id');

  for (var i = timeline_item_selected - 1; i >= 0; i--)
  {
    $('.lista-da-timeline #'+i).addClass("selected");
  }
}

// Grada dados do #form1 em localStorage
function grava_dados_form1(){
  var comic_book_superhero = document.getElementById('comic-book-superhero');
  var tv_series = document.getElementById('tv-series');
  var bolacha_or_biscoito = document.getElementById('bolacha-or-biscoito');
  var best_quote = document.getElementById('best-quote');

  if(comic_book_superhero.value != undefined && comic_book_superhero.value != "" &&
  tv_series.value != undefined && tv_series.value != "" &&
  bolacha_or_biscoito.value != undefined && bolacha_or_biscoito.value != "" &&
  best_quote.value != undefined && best_quote.value != ""){
    localStorage.setItem('comic-book-superhero',comic_book_superhero.value);
    localStorage.setItem('tv-series',tv_series.value);
    localStorage.setItem('bolacha-or-biscoito',bolacha_or_biscoito.value);
    localStorage.setItem('best-quote',best_quote.value);

     $('.lista-da-timeline #2').click();
     colore_timeline();
  }else{
    alert("Por favor, dê a sua resposta.");
  }
}

// Grada dados do #form2 em localStorage
function grava_dados_form2(){
  var filme_escolhido = $('input[name="filme-escolhido"]:checked').val();

  if(filme_escolhido != undefined){
    localStorage.setItem('filme-escolhido',filme_escolhido);

    $('.lista-da-timeline #3').click();
    colore_timeline();
  }else{
    alert("Por favor, dê a sua resposta.");
  }

}

// Grada dados do #form3 em localStorage
function grava_dados_form3(){
  var temporada_escolhida = $('input[name="game-of-thrones-radio"]:checked').val();;

  if(temporada_escolhida != undefined){
    localStorage.setItem('temporada-escolhida',temporada_escolhida);

    $('.lista-da-timeline #4').click();
    colore_timeline();
  }else{
    alert("Por favor, dê a sua resposta.");
  }
}

// Grada dados do #form4 em localStorage
function grava_dados_form4(){
  var comida_escolhida = $('input[name="comida-escolhida"]:checked').val();;

  if(comida_escolhida != undefined){
    localStorage.setItem('comida-escolhida',comida_escolhida);

    $('.lista-da-timeline #5').click();
    colore_timeline();
    obtem_dados();
  }else{
    alert("Por favor, dê a sua resposta.");
  }
}

function obtem_dados(){
  var comic_book_superhero = localStorage.getItem("comic-book-superhero");
  $('#res1').text(comic_book_superhero);

  var tv_series = localStorage.getItem("tv-series");
  $('#res2').text(tv_series);

  var bolacha_or_biscoito = localStorage.getItem("bolacha-or-biscoito");
  $('#res3').text(bolacha_or_biscoito);

  var best_quote = localStorage.getItem("best-quote");
  $('#res4').text(best_quote);

  var filme_escolhido = localStorage.getItem("filme-escolhido");
  $('#res5').text(filme_escolhido);

  var temporada_escolhida = localStorage.getItem("temporada-escolhida");
  $('#res6').text(temporada_escolhida);

  var comida_escolhida = localStorage.getItem("comida-escolhida");
  $('#res7').text(comida_escolhida);
}

$(".radios-game-of-thrones input").click(function(){
  $(".gameofthrones-details .tabela-temporada").show();
  var altura = $(".container-form-3").height() + $(".gameofthrones-details .tabela-temporada").height();
  $(".events-content").css('height', altura+'px');
})
