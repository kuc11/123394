$(function(){
    $(".menuList>.menuItem").on("mouseover",function(){
        $(this).children(".subMenu").slideDown(1000);
        // show(), hide(), toggle()
        // fadeIn(), fadeOut(), fadeToggle();
        // slideUp(), slideDown(), slideToggle();
    });
    $(".menuList>.menuItem").on("mouseout",function(){
        $(this).children(".subMenu").slideUp(1000);
    })
});

