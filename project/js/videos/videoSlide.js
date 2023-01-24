const VIDEO_ID_PREFIX = "youtubeVideo-"

$(document).ready(()=>{
    const imageContainer = $(".videos"),
          videoContainer = $(".video-box")

    for (const id in videos) {
        imageContainer.append(`
            <div class="item vid">
                <div class="image">
                    <img alt data-id="${id}" class="link-id" src="${videos[id].image}">
                </div>
            </div>
        `)

        const video = $(videos[id].video)
              video.addClass("youtubeVideo")
              video.attr("id", VIDEO_ID_PREFIX + id)
              video.hide()
        videoContainer.append(video)
    }

    $(".link-id").click(event=>{
        $(".youtubeVideo").hide()
        $(`.youtubeVideo#${VIDEO_ID_PREFIX}${event.currentTarget.dataset.id}`).show()
    })

    imageContainer.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 1500,
        adaptiveHeight: false,
    })

    $(`.youtubeVideo#${VIDEO_ID_PREFIX}0`).show()
})
