$(document).ready(function (){

    let list = $(".songs");
    let list_block;
    let text_block;
    let streaming_services_block;

    for (let key in songList){
        list_block = $('<div class="item"></div>');
        text_block = $('<div class="text"></div>');
        streaming_services_block = $('<div class="streaming-services"></div>');
        list.append(list_block);
        list_block.append('<div class="image"><img alt="" src="src/assets/'+ songList[key].image +'"></div>');
        list_block.append(text_block);
        text_block.append('<h3>'+ songList[key].title +'</h3>');
        text_block.append('<p>'+ songList[key].artists +'</p>');
        text_block.append(streaming_services_block);

        streaming_services_block.append('<div class="spotify-logo"><a class="spotify-text" target="_blank" href="'+ songList[key].spotify +'"><div class="spotify-logo1"><br>Spotify</div></a></div>');
        streaming_services_block.append('<div class="apple-logo"><a class="apple-text" target="_blank" href="'+ songList[key].apple +'"><div class="apple-logo1"><br>Apple Music</div></a></div>');
    }

    $('.sec2-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1500,
        adaptiveHeight: false,
    });

});