$(document).ready(function(){

    var topics = ["bills","responsibility","feeling old","rent","sleep","job hunting","millennials","weekend","mature","moving out","socializing","adulting"];

    renderButtons();

    //clicking a topic
    $(document).on("click",".topic",function(){
        console.log(this);
        $(".giphy-area").empty();
        var keyword = $(this).attr("data-name");
        console.log(keyword);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + encodeURI(keyword) +"&api_key=I7XQRE2FWykvdqgIAlYPDmWounP17N5s&limit=12";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            var result = response.data;
                    
                r = response.data.length;
                for (i=0;i<r;i++){
                    var imgURL = result[i].images.original.mp4;
                    var displaypg = $("<span class='pg'>");
                    var displayIMG = $("<video class='display'>");
                    var pgURL = result[i].rating;
                    displaypg.text("rating: " + pgURL)
                    displayIMG.attr("src",imgURL);
                    displayIMG.css("margin","5px 5px 0px 5px");
                    var block = $("<div class='col'>");
                    block.append(displaypg);
                    block.append(displayIMG);
                    $(".giphy-area").append(block);
                    
            }
        })
    })

    //play and pause
    $(document).on("click",".display",function(){
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    })

    //submit new topic
    $("#submitbutton").on("click",function(){
        var userInput = $("#searchbox").val();
        topics.push(userInput);
        console.log("submitbutton");
        renderButtons();
        $("$searchbox").find('input:text').val("");
    })

    //accept enter as a submit button
    $(document).on("keypress",function(){
        if (event.keyCode === 13) {
            $("#submitbutton").click();
        }
    })

    //render buttons
    function renderButtons () {
        $(".buttons-area").empty();
        l = topics.length;
        for (i=0;i<l; i++) {
            var button = $("<button class='topic'>");
            button.text(topics[i]);
            button.attr("data-name",topics[i]);
            $(".buttons-area").append(button);
            console.log("buttons rendered")
        }
    }

    

});

