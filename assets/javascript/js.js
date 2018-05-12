$(document).ready(function(){

var topics = ["paying bills","responsibility","old","rent","metabolism","job hunting","millennials","weekend","mature","moving out"];

    renderButtons();

    $(document).on("click",".topic",function(){
        console.log(this);
        $(".giphy-area").empty();
        var keyword = $(this).attr("data-name");
        console.log(keyword);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + encodeURI(keyword) +"&api_key=I7XQRE2FWykvdqgIAlYPDmWounP17N5s&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            var result = response.data;
                    
                r = response.data.length;
                for (i=0;i<r;i++){
                    var imgURL = result[i].images.original.url;
                    var displayIMG = $("<img class='display'>");
                    displayIMG.attr("src",imgURL);
                    displayIMG.css("margin","5px");
                    $(".giphy-area").prepend(displayIMG);
            }
        })
    })

    $("#submitbutton").on("click",function(){
        var userInput = $("#searchbox").val();
        topics.unshift(userInput);
        console.log("submitbutton");
        renderButtons();
    })

    function renderButtons () {
        $(".buttons-area").empty();
        l = topics.length;
        for (i=0;i<l; i++) {
            var button = $("<button class='topic'>");
            button.text(topics[i]);
            button.attr("data-name",topics[i]);
            button.o
            $(".buttons-area").append(button);
            console.log("buttons rendered")
        }
    }


});

