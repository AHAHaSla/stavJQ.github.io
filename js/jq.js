$(document).ready(function(){
    $(".box").mouseenter(function (){
        $(this).toggle('red');
        //alert('UvU');
    })
    $(".box").mouseleave(function (){
        $(this).toggle('red');
    //    //alert('UvU');
    })
});
