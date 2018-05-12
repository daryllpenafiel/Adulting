$(document).ready(function(){

var topics = ["paying bills","responsibility","old","rent","metabolism","job hunting","millennials","weekend","mature","moving out"];

    renderButtons();

    $("#submitbutton").on("click",function(){
        var userInput = $("#searchbox").val();
        //change push to insert at beginning
        topics.push(userInput);
        renderButtons();
        console.log(topics);
    })

    function renderButtons () {
        $(".buttons-area").empty();
        l = topics.length;
        for (i=0;i<l; i++) {
            var button = $("<button class='topic'>");
            button.text(topics[i]);
            button.attr("data-name",topics[i]);
            $(".buttons-area").append(button);
        }
    }

    $(".topic").on("click",function(){
        console.log(this);
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

