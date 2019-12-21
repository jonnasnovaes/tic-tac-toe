function jogada(posicao) {

    const x = "X";
    const o = "O";

    //FUNÇÃO QUE VERIFICA SE HÁ ALGUM CAMPEÃO
    function campeao(jogador, parametro) {

        //FUNÇÃO QUE CONTABILIZA A PONTUAÇÃO
        function pontuacao(parametro) {

            var jp;
            var jogador;

            if (parametro == 1) {
                jogador = $("#1");
                jp = $("#1").attr('data-pontuacao');
                jp = parseInt(jp) + 1;
                $("#1").attr('data-pontuacao', jp);
                $("#1").text("Jogador 1:  " + jp);
                $("p").text("");
            }
            else {
                jogador = $("#2");
                jp = $("#2").attr('data-pontuacao');
                jp = parseInt(jp) + 1;
                $("#2").attr('data-pontuacao', jp);
                $("#2").text("Jogador 2:  " + jp);
                $("p").text("");
            }

        }

        var cel0 = $('#00').text();
        var cel1 = $('#01').text();
        var cel2 = $('#02').text();
        var cel3 = $('#03').text();
        var cel4 = $('#04').text();
        var cel5 = $('#05').text();
        var cel6 = $('#06').text();
        var cel7 = $('#07').text();
        var cel8 = $('#08').text();

        //VERIFICA SE TEM ALGUM GANHADOR NAS LINHAS
        if ((cel0 == cel1 && cel1 == cel2) && (cel0 != "" && cel1 != "" && cel2 != "")) {
            alert(jogador + " GANHOU !");
            pontuacao(parametro);

        }
        else
            if ((cel3 == cel4 && cel4 == cel5) && (cel3 != "" && cel4 != "" && cel5 != "")) {
                alert(jogador + " GANHOU !");
                pontuacao(parametro);
            }
            else
                if ((cel6 == cel7 && cel7 == cel8) && (cel6 != "" && cel7 != "" && cel8 != "")) {
                    alert(jogador + " GANHOU !");
                    pontuacao(parametro);
                }
                //VERIFICA SE TEM ALGUM GANHADOR NAS COLUNAS
                else
                    if ((cel0 == cel3 && cel3 == cel6) && (cel0 != "" && cel3 != "" && cel6 != "")) {
                        alert(jogador + " GANHOU !");
                        pontuacao(parametro);
                    }
                    else
                        if ((cel1 == cel4 && cel4 == cel7) && (cel1 != "" && cel4 != "" && cel7 != "")) {
                            alert(jogador + " GANHOU !");
                            pontuacao(parametro);
                        }
                        else
                            if ((cel2 == cel5 && cel5 == cel8) && (cel2 != "" && cel5 != "" && cel8 != "")) {
                                alert(jogador + " GANHOU !");
                                pontuacao(parametro);
                            }
                            //VEFIFICA SE NAS DIAGONAIS EXISTE ALGUM GANHADOR
                            else
                                if ((cel0 == cel4 && cel4 == cel8) && (cel0 != "" && cel4 != "" && cel8 != "")) {
                                    alert(jogador + " GANHOU !");
                                    pontuacao(parametro);
                                }
                                else
                                    if ((cel2 == cel4 && cel4 == cel6) && (cel2 != "" && cel4 != "" && cel6 != "")) {
                                        alert(jogador + " GANHOU !");
                                        pontuacao(parametro);
                                    }
        /*else
            if(cel0 != "" && cel0 != "" && cel0 != "" && 
               cel0 != "" && cel0 != "" && cel0 != "" && 
               cel0 != "" && cel0 != "" && cel0 != ""){
                   alert("XIIH, Deu Velha #");
               }*/

    }

    //PEGA O SIMBOLO E O QUAL JOGADOR DA VEZ
    var simbolo = $("#simbolo").attr('data-simbolo');
    var jogador = $("#jogador").attr('data-nome');

    var id = "#0" + posicao;
    var p = $(id).text();

    //VERIFICA SE É O JOGADOR X OU O E EXECUTA A AÇÃO DO TABULEIRO
    if (p != "O" && simbolo == x) {
        $(id).text(simbolo);
        $("#simbolo").attr('data-simbolo', 'O');
        $("#jogador").attr('data-nome', 'Jogador 2');
        campeao(jogador, 1);
        $("#jv").text("Jogador da vez: O");
    }
    else
        if (p != "X" && simbolo == o) {
            $(id).text(simbolo);
            $("#simbolo").attr('data-simbolo', 'X');
            $("#jogador").attr('data-nome', 'Jogador 1');
            campeao(jogador, 2);
            $("#jv").text("Jogador da vez: X");
        }
}

$(document).ready(function () {

    //RESETA O JOGO ( PONTUAÇÃO + TABULEIRO )
    $("#resetar").click(function () {
        $("p").text("");
        $("#1").attr('data-pontuacao', '0');
        $("#1").text("Jogador 1: 0");

        $("#2").attr('data-pontuacao', '0');
        $("#2").text("Jogador 2: 0");
    });

    //LIMPA SOMENTE O TABULEIRO
    $("#limpar").click(function () {
        $("p").text("");
    });

})
