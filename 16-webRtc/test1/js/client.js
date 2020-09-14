"use strict";
const localVideo = document.querySelector("video");

const mediaStreamContrains = { 
    video:{
        frameRate:{
            min:20
        },
        width:{
            min:640,
            ideal:1280
        },
        height:{
            min:360,
            ideal:720
        },
        aspectRatio: 16/9
    }
 };

navigator.mediaDevices
  .getUserMedia(mediaStreamContrains) // 访问camera。第一次访问会让用户选择是否开启摄像头
  .then((mediaStream) => {
    console.log(mediaStream);
    localVideo.srcObject = mediaStream; // 拿到流后将流赋给video
  }) //
  .catch((error) => {
    console.log("navigator.getUserMedia error: ", error);
  });

// MediaTrack 媒体轨道
// MediaStream 两个概念很重要
