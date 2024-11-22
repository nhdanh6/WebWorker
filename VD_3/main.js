// main.js
// Tạo và sử dụng Shared Worker
const sharedWorker = new SharedWorker("shared-worker.js");

// Kết nối tới Worker
sharedWorker.port.start();

// Gửi dữ liệu tới Worker
sharedWorker.port.postMessage("Tab 1");

// Nhận phản hồi từ Worker
sharedWorker.port.onmessage = function (event) {
    console.log("Phản hồi từ Shared Worker:", event.data); // Hello, Tab 1
};
