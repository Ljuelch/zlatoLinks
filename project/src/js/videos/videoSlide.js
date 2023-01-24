$(document).ready(()=>{
    const videoContainer = $(".videos")

    for (const id in videos) {
        const listBlock = $('<div class="item vid"></div>')
        const itemBlock = $(`<div class="image"><img alt data-id="${id}" class="link-id" src="${videos[id].image}"></div>`)

        videoContainer.append(listBlock)
        listBlock.append(itemBlock)
    }

    const videoBox = $(".video-box")
    videoBox.append(videos[1].video)

    $(".link-id").click(event=>{
        videoBox.empty()
        videoBox.append(
            videos[
                $(event.currentTarget).data("id")
            ].video)
    })

    videoContainer.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 1500,
        adaptiveHeight: false,
    })

})
