
$(document).ready(function (){

    let list = $(".videos");
    let vidBox = $(".video-box")

    let list_block;
    let item_block;
    
    for (let key in videoList) {
        list_block = $('<div class="item vid"></div>');
        item_block = $('<div class="image"><img data-wow="'+ videoList[key].dataKey +'" class="link-id" alt="" src="'+ videoList[key].image +'"></div>');

        list.append(list_block);
        list_block.append(item_block);
    }

    vidBox.append(videoList[1].video);
    let image = $(".link-id");

    let src;
    let wowID;

    Array.from(image).forEach(element => {

        element.addEventListener('click', () => {
            wowID = element.dataset.wow;

            for (let id in videoList) {
                src = image[parseInt(wowID)].currentSrc;
                if (videoList[id].image === src) {
                    vidBox.empty();
                    vidBox.append(videoList[id].video);
                }
            }

        })

    })


    $('.videos').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 1500,
        adaptiveHeight: false,
    });

});
