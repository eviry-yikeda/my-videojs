import videojs from "video.js";
import "videojs-playlist-ui";
import "videojs-playlist";
import PlaylistArea from "./playlistAria.js";

import "video.js/dist/video-js.css";
import "videojs-playlist-ui/dist/videojs-playlist-ui.css";
import "./index.css";

class Player {
  constructor(config) {
    const container = document.getElementById(config.containerId);
    if (!container) {
      throw new Error("player container is not found");
    }
    container.classList.add("video-js");

    this.player = videojs(config.containerId, {
      controls: true,
    });

    videojs.registerComponent("PlaylistAria", PlaylistArea);

    this.player.addChild("PlaylistAria", {
      cssClass: "vjs-playlist invisible",
      title: "Playlist",
    });

    // プレイリストの表示トグルボタンを追加'
    const Button = videojs.getComponent("Button");

    const button = new Button(this.player);
    button.controlText("PlaylistToggle");
    button.addClass("vjs-playlist-toggle");

    button.el().addEventListener("click", () => {
      const playlistAria = this.player.getChild("PlaylistAria");
      if (playlistAria.hasClass("invisible")) {
        playlistAria.removeClass("invisible");
      } else {
        playlistAria.addClass("invisible");
      }
    });

    const controlBar = this.player.getChild("ControlBar");
    controlBar.addChild(button);

    this.player.playlist(playlist);

    this.player.playlistUi({
      // horizontal: true,
    });
  }
  // setVideoList(videoList) {
  //   this.player.playlist(videoList);
  // }

  setAutoAdvance(index) {
    this.player.playlist.autoadvance(index);
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }
}

const playlist = [
  {
    name: "Video 1",
    sources: [
      {
        src: "http://media.w3.org/2010/05/sintel/trailer.mp4",
        type: "video/mp4",
      },
    ],
    thumbnail: "http://media.w3.org/2010/05/sintel/poster.png",
    duration: 100,
  },
  {
    name: "Video 2",
    sources: [
      {
        src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
        type: "video/mp4",
      },
    ],
    thumbnail: "http://media.w3.org/2010/05/bunny/poster.png",
    duration: 100,
  },
  {
    name: "Video 3",
    sources: [
      {
        src: "http://vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
    thumbnail: false,
    duration: 100,
  },
  {
    name: "Video 4",
    sources: [
      {
        src: "http://media.w3.org/2010/05/bunny/movie.mp4",
        type: "video/mp4",
      },
    ],
    thumbnail: "http://media.w3.org/2010/05/bunny/poster.png",
    duration: 100,
  },
  {
    name: "Video 5",
    sources: [
      {
        src: "http://media.w3.org/2010/05/video/movie_300.mp4",
        type: "video/mp4",
      },
    ],
    thumbnail: "http://media.w3.org/2010/05/video/poster.png",
    duration: 100,
  },
];

export const MyPlayer = {
  Player,
};
