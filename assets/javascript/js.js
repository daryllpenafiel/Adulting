$(document).ready(function(){

var topics = ["paying bills","responsibility","old","rent","metabolism","job hunting","millennials","life crisis","mature","moving out"];

    function renderButtons () {
        $(".buttons-area").empty();
        l = topics.length;
        for (i=0;i<l; i++) {
            var button = $("<button class='topic'>");
            button.text(topics[i]);
            button.attr("data-name",topics[i]);
            button.css("margin","5px");
            $(".buttons-area").append(button);
        }
    }
    renderButtons();

    $("#submitbutton").on("click",function(){
        var userInput = $("#searchbox").val();
        topics.push(userInput);
        renderButtons();
    })

    $(".topic").on("click",function(){
        $(".giphy-area").empty()
        var keyword = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + encodeURI(keyword) +"&api_key=I7XQRE2FWykvdqgIAlYPDmWounP17N5s&limit=10";
        console.log(keyword);
        console.log(queryURL);
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

});

