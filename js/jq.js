$(document).ready(function(){
    $(".box").mouseenter(function (){
        $(this).toggleClass('red');
        //alert('UvU');
    })
    $(".box").mouseleave(function (){
        $(this).toggleClass('red');
    //    //alert('UvU');
    })
});
