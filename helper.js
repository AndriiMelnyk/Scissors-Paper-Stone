
$(document).ready(function(){
    var active = false;
    var choises =["paper","stone","scissors"];

    $(".paper").click(function(){
        if(active == false){
            $(".paper-right").addClass("img-show");
            var computerChoise = choises[Math.floor((Math.random() * 3))];
                if (computerChoise === "paper"){
                    $(".paper-tie").addClass("active-show");
                    $(".paper-left").addClass("img-show");
                }
                else if (computerChoise === "stone"){
                    $(".stone-win").addClass("active-show");
                    $(".stone-left").addClass("img-show");
                }
                else {
                    $(".scissors-lose").addClass("active-show");
                    $(".scissors-left").addClass("img-show");
                }
            $(".active-show").show();
            $(".img-show").show();
        }
            active = true;
    });

    $(".stone").click(function(){
        if(active == false){
            $(".stone-right").addClass("img-show");
            var choises =["paper","stone","scissors"];
            var computerChoise = choises[Math.floor((Math.random() * 3))];
            var choises = [computerChoise];
                if (computerChoise === "paper"){
                    $(".paper-lose").addClass("active-show")
                    $(".paper-left").addClass("img-show");
                }
                else if (computerChoise === "stone"){
                    $(".stone-tie").addClass("active-show")
                    $(".stone-left").addClass("img-show");
                }
                else{
                    $(".scissors-win").addClass("active-show")
                    $(".scissors-left").addClass("img-show");
                }
            $(".active-show").show();
            $(".img-show").show();
        }
            active = true;
    });

    $(".scissors").click(function(){
        if(active == false){
            $(".scissors-right").addClass("img-show");
            var choises =["paper","stone","scissors"];
            var computerChoise = choises[Math.floor((Math.random() * 3))];
            var choises = [computerChoise];
                if (computerChoise === "paper"){
                    $(".paper-win").addClass("active-show")
                    $(".paper-left").addClass("img-show");
                }
                else if (computerChoise === "stone"){
                    $(".stone-lose").addClass("active-show")
                    $(".stone-left").addClass("img-show");
                }
                else{
                    $(".scissors-tie").addClass("active-show")
                    $(".scissors-left").addClass("img-show");
                }
            $(".active-show").show();
            $(".img-show").show();

        }
            active = true;

    });



    $(".newgame").click(function(){
        active = false;
        $(".active-show").hide();
        $(".img-show").hide();
        $(".active-show").removeClass("active-show");
        $(".img-show").removeClass("img-show");
    });

});