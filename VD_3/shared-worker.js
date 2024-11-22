// shared-worker
onconnect = function (event) {
    const port = event.ports[0];

    // Lắng nghe và phản hồi dữ liệu từ các tab
    port.onmessage = function (event) {
        const result = 'Hello, ${event.data}';
        port.postMessage(result); // Gửi phản hồi
    };
};
