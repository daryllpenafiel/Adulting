$(document).ready(function(){

var topics = ["paying bills","responsibility","grown up","getting old","metabolism","leftovers","job hunting","millennials","life crisis","mature"];

    function renderButtons () {
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
                    
                for (i=0;i<response.data.length;i++){
                    var imgURL = result[i].images.original.url;
                    var displayIMG = $("<img class='display'>");
                    displayIMG.attr("src",imgURL);
                    displayIMG.css("margin","5px");
                    $(".giphy-area").prepend(displayIMG);
            }
        })
    })

});

