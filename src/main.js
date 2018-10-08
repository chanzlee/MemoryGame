import '../css/styles.css';
import { Game } from './memory';

var cardCount = 0;
var firstValue;
var secondValue;


$(document).ready(function () {
    var cardTotal = 8; //number of cards in the game
    var newGame = new Game(cardTotal);
    console.log(newGame.IsOver());

    $(".col").click(function () {
        if (cardCount === 0) {
            firstValue = $(this).attr("value");

            $(this).addClass("first-card");
            $(this).removeClass("front");
            $(this).children().removeClass("hidden");
            cardCount++;
        }
        else {
            secondValue = $(this).attr("value");
            $(this).addClass("second-card");
            $(this).removeClass("front");
            $(this).children().removeClass("hidden");

            cardCount = 0;
            if (firstValue != secondValue) {
                newGame.guessCount++;
                setInterval(function () {
                    $(".first-card").children().addClass("hidden");
                    $(".second-card").children().addClass("hidden");
                    $(".first-card").addClass("front");
                    $(".second-card").addClass("front");
                    $(".first-card").removeClass("first-card");
                    $(".second-card").removeClass("second-card");
                }, 2000);
            }
            else {
                $(".first-card").removeClass("first-card");
                $(".second-card").removeClass("second-card");
                newGame.cardFound += 2;
                if (newGame.IsOver()){
                    $('#result').removeClass("hidden");
                }
            }
        }
    });
   
    
});