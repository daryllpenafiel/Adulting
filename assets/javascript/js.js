$(document).ready(function(){

var topics = ["bills","responsibility","hangover","getting old","slow metabolism","leftovers","job hunting","millennials","life crisis","mature"];

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
        
        var keyword = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + encodeURI(keyword) +"&api_key=I7XQRE2FWykvdqgIAlYPDmWounP17N5s&limit=10";
        console.log(keyword);
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        })
    })

});

