$(document).ready(function(){
    $('.click').click(function(){
        alert("You've clicked the button!");
    })
    $('.hide button').click(function(){
        $('.hide p').hide(1000);
    })
    $('.show button').click(function(){
        $('.show .inivisible').show();
    })
})
