const videos = [{
        name: "VIDEO 1",
        src: "https://player.vimeo.com/video/301698973"
    },

    {
        name: "VIDEO 2",
        src: 'https://player.vimeo.com/video/274729908'
    },
    {
        name: "VIDEO 3",
        src: 'https://player.vimeo.com/video/274378224'
    },
    {
        name: "VIDEO 4",
        src: 'https://player.vimeo.com/video/273228068'
    },
    {
        name: "VIDEO 5",
        src: 'https://player.vimeo.com/video/273227173'
    },


];

const videos19 = [{
        name: "video2",
        src: 'https://player.vimeo.com/video/313047538'
    },

];


let ano = document.getElementById("videos-2018");

ano.addEventListener("click", function () {

    videosAttatch();
});



function videosAttatch() {

    let container = document.getElementById("video-container");
    let videosHtml = '';


    for (let i = 0; i < videos.length; i++) {

        videosHtml += `<div class='video-box'> <iframe title="vimeop-player" src=${videos[i].src} width="426" height="240" frameborder="0" allowfullscreen ></iframe>
        <h1>${videos[i].name}</h1> </div>`;

    }


    container.innerHTML = videosHtml;


}