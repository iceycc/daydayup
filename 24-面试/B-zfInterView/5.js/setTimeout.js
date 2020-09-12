process.on('message', (message) => {//{ type: 'start', timeout }
    let { type, timeout } = message;
    if (type === 'start') {
        let endMS = Date.now() + parseInt(timeout);
        while (true) {
            if (Date.now() >= endMS) {
                process.send({ ready: true });
                process.exit();
            }
        }
        /*  setInterval(() => {
             if (Date.now() >= endMS) {
                 process.send({ ready: true });
                 process.exit();
             }
         }, 100); */
    }
});