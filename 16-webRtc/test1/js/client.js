"use strict";
const videoplay = document.querySelector("video#video");
const btnDownload = document.querySelector("button#download");
const btnPlay = document.querySelector("button#recplay");
const btnRecord = document.querySelector("button#record");
const recvideo = document.querySelector("video#recplayer");
const videoType = 'webm'
const mediaStreamContrains = {
  video: {
    frameRate: {
      min: 20,
    },
    width: {
      min: 640,
      ideal: 1280,
    },
    height: {
      min: 360,
      ideal: 720,
    },
    aspectRatio: 16 / 9,
  },
};
const MediaDevices = navigator.mediaDevices;
var mediaRecorder;
MediaDevices.getUserMedia(mediaStreamContrains) // 访问camera。第一次访问会让用户选择是否开启摄像头
  .then((mediaStream) => {
    console.log(mediaStream);
    window.stream = mediaStream;
    videoplay.srcObject = mediaStream; // 拿到流后将流赋给video
    MediaDevices.enumerateDevices().then((deviceInfos) => {
      console.table(deviceInfos);
    });
  }) //
  .catch((error) => {
    console.log("navigator.getUserMedia error: ", error);
  });

// MediaTrack 媒体轨道
// MediaStream 两个概念很重要

// console.log(navigator.mediaDeviceInfo)
var picture = document.querySelector("canvas#picture");
picture.width = 640;
picture.height = 480;
document.querySelector("button#takePhoto").addEventListener("click", () => {
  picture
    .getContext("2d")
    .drawImage(videoplay, 0, 0, picture.width, picture.height);
});

function downLoad(url) {
  var oA = document.createElement("a");
  oA.download = "photo";
  oA.href = url;
  document.body.appendChild(oA);
  oA.click();
  oA.remove();
}

document.querySelector("button#safe").addEventListener("click", () => {
  downLoad(picture.toDataURL("image/jpeg"));
});

document.querySelector("select#filter").addEventListener("change", (e) => {
  console.log(e.target.value);
  picture.className = e.target.value;
});

// let buffer = new ArrayBuffer(16);
// let view = new Uint32Array(buffer);
// console.log('00',view)

// let blob = new Blob(view)

document.querySelector("button#download").addEventListener("click", () => {});
var buffer;
function handleDataAvailable(e) {
  if (e && e.data && e.data.size > 0) {
    buffer.push(e.data);
  }
}

function startRecord() {
  buffer = [];
  // 设置录制下来的多媒体格式
  var options = { mimeType: "video/"+videoType+";codecs=vp8" };
  // 判断浏览器是否支持录制
  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    console.error(`${options.mimeType} is not supported!`);
    return;
  }
  try {
    // 创建录制对象
    mediaRecorder = new MediaRecorder(window.stream, options);
  } catch (e) {
    console.error("Failed to create MediaRecorder:", e);
    return;
  } // 当有音视频数据来了之后触发该事件
  mediaRecorder.ondataavailable = handleDataAvailable;
  // 开始录制
  mediaRecorder.start(10);
}
function stopRecord() {
  mediaRecorder.stop();
}
btnRecord.addEventListener("click", () => {
  console.log("--------------------");
  if (btnRecord.textContent === "Start Record") {
    startRecord();
    btnRecord.textContent = "Stop Record";
    btnPlay.disabled = true;
    btnDownload.disabled = true;
  } else {
    stopRecord();
    btnRecord.textContent = "Start Record";
    btnPlay.disabled = false;
    btnDownload.disabled = false;
  }
});

btnDownload.onclick = () => {
  var blob = new Blob(buffer, { type: "video/"+videoType });
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement("a");

  a.href = url;
  a.style.display = "none";
  a.download = "aaa."+videoType;
  a.click();
};

btnPlay.onclick = () => {
  var blob = new Blob(buffer, { type: "video/" +videoType });
  recvideo.src = window.URL.createObjectURL(blob);
  recvideo.srcObject = null;
  recvideo.controls = true;
  recvideo.play();
};
