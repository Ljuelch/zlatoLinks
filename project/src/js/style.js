$(document).ready(function (){

	$(".go-to").click(function() {
		$('html, body').animate({
			scrollTop: $("#page-content").offset().top
		}, 2000);
	});
	
	AOS.init({
		duration: 1500 // global
	});
	
	let list = $(".sec3-slider");
	let list_block;
	let text_block;
	let streaming_services_block;

	for (let key in songList){
		list_block = $('<div class="item"></div>');
		text_block = $('<div class="text"></div>');
		streaming_services_block = $('<div class="streaming-services"></div>');
		spotify =

		list.append(list_block);

		list_block.append('<div class="image"><img alt="" src="src/assets/'+ songList[key].image +'"></div>');
		list_block.append(text_block);
		text_block.append('<h3>'+ songList[key].title +'</h3>');
		text_block.append('<p>'+ songList[key].artists +'</p>');
		text_block.append(streaming_services_block);

		streaming_services_block.append('<div class="spotify-logo"><a class="spotify-text" target="_blank" href="'+ songList[key].spotify +'"><div class="spotify-logo1"><br>Spotify</div></a></div>');
		streaming_services_block.append('<div class="apple-logo"><a class="apple-text" target="_blank" href="'+ songList[key].apple +'"><div class="apple-logo1"><br>Apple Music</div></a></div>');
	}

	$('.sec3-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1500,
		adaptiveHeight: false,
	});
});
//
// for (var key in song_list){
// 	list_block = $('<div class="list_block"></div>');
// 	list.append(list_block);
//
// 	list_block.append('<span class="play_btn"><i class="fa fa-play" aria-hidden="true"></i><i class="fa fa-pause" aria-hidden="true"></i></span>');
// 	list_block.append('<span class="song_title">'+ song_list[key].title + '</span>');
// 	list_block.append('<span class="song_bpm">'+ song_list[key].bpm + '</span>');
// 	list_block.append('<span class="song_tags">'+ song_list[key].tags + '</span>');
// 	list_block.append('<span class="song_duration">'+ song_list[key].duration + '</span>');
// 	list_block.append('<span class="beat_animation"><ul><li></li><li></li><li></li><li></li><li></li></ul></span>');
// 	list_block.append('<span class="track"><audio id="audio" controls><source src="src/tracks/'+ song_list[key].track +'" type="audio/mp3"></audio></span>');
// 	list_block.append('<span class="shopping_btn"><a target="_blank" href="https://www.beatstars.com/prodbyhellmood/tracks'+ song_list[key].track +'"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></a></span>');
// }