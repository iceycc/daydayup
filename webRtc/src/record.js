function Recorder(localStream) {
    this.localStream = localStream
    this.buffer = []
    this.mediaRecorder = null
}

Recorder.prototype.startRecord = function () {
    // 定义一个数组，用于缓存桌面数据，最终将数据存储到文件中
    const options = {
        mimeType: 'video/webm;codecs=vp8'
    }
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.error(`${options.mimeType} is not supported!`);
        return;
    }
    try {
        // 创建录制对象，用于将桌面数据录制下来
        this.mediaRecorder = new MediaRecorder(this.localStream, options);
    } catch (e) {
        console.error('Failed to create MediaRecorder:', e);
        return;
    }
    this.mediaRecorder.ondataavailable = function (e) {
        if (e && e.data && e.data.size > 0) {
            this.buffer.push(e.data);
        }
    };
    this.mediaRecorder.start(10);
}
Recorder.prototype.stopRecord = function () {
    this.mediaRecorder.stop();
}
Recorder.prototype.download = function () {
    var blob = new Blob(this.buffer, {type: "video/" + videoType});
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");

    a.href = url;
    a.style.display = "none";
    a.download = "aaa." + videoType;
    a.click();
}
