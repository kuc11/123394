let i=1;
function detail(){
     if(i%2==1)
    $("#answer").css("height","100px");
    
     if(i%2==0)
     $("#answer").css("height","0px");
    
     i++;
     console.log(i);
}