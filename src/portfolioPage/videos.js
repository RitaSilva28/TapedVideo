const videos18 = [
  {
    name: "VIDEO 1",
    src: "https://player.vimeo.com/video/301698973",
  },

  {
    name: "VIDEO 2",
    src: "https://player.vimeo.com/video/274729908",
  },
  {
    name: "VIDEO 3",
    src: "https://player.vimeo.com/video/274378224",
  },
  {
    name: "VIDEO 4",
    src: "https://player.vimeo.com/video/273228068",
  },
  {
    name: "VIDEO 5",
    src: "https://player.vimeo.com/video/273227173",
  },
];

const videos19 = [
  {
    name: "VIDEO 6",
    src: "https://player.vimeo.com/video/301698973",
  },

  {
    name: "VIDEO 7",
    src: "https://player.vimeo.com/video/274729908",
  },
  {
    name: "VIDEO 8",
    src: "https://player.vimeo.com/video/274378224",
  },
  {
    name: "VIDEO 9",
    src: "https://player.vimeo.com/video/273228068",
  },
  {
    name: "VIDEO 10",
    src: "https://player.vimeo.com/video/273227173",
  },
  {
    name: "VIDEO 11",
    src: "https://player.vimeo.com/video/273227173",
  },
  {
    name: "VIDEO 12",
    src: "https://player.vimeo.com/video/273227173",
  },
];

function attach() {
  let container = document.getElementById("video-container");
  let videosHtml = "";

  for (let i = 0; i < videos18.length; i++) {
    videosHtml += `<div class='video-box'> <iframe title="vimeop-player" src=${videos18[i].src} width="426" height="240" frameborder="0" allowfullscreen ></iframe>
        <h1>${videos18[i].name}</h1> </div>`;
  }
  for (let i = 0; i < videos19.length; i++) {
    videosHtml += `<div class='video-box'> <iframe title="vimeop-player" src=${videos19[i].src} width="426" height="240" frameborder="0" allowfullscreen ></iframe>
        <h1>${videos19[i].name}</h1> </div>`;
  }

  container.innerHTML = videosHtml;
  console.log(videosHtml);
}

attach();

let ano18 = document.getElementById("videos-2018");

ano18.addEventListener("click", function () {
  videosAttachFilter(videos18);
});

let ano19 = document.getElementById("videos-2019");

ano19.addEventListener("click", function () {
  videosAttachFilter(videos19);
});

function videosAttachFilter(value) {
  let container = document.getElementById("video-container");
  let videosHtml = "";

  console.log(videos18);
  console.log(videos19);

  for (let i = 0; i < value.length; i++) {
    videosHtml += `<div class='video-box'> <iframe title="vimeop-player" src=${value[i].src} width="426" height="240" frameborder="0" allowfullscreen ></iframe>
        <h1>${value[i].name}</h1> </div>`;
  }

  container.innerHTML = videosHtml;
  console.log(videosHtml);
}
