// Tạo và quản lý Dedicated Worker
const worker = new Worker("worker.js");

// Gửi dữ liệu tới Worker
worker.postMessage(10); // Gửi số 10

// Nhận phản hồi từ Worker
worker.onmessage = function (event) {
    console.log("Kết quả từ Worker:", event.data); // Kết quả: 20
};

// Kết thúc Worker (nếu không cần nữa)
setTimeout(() => {
    worker.terminate();
    console.log("Worker đã bị kết thúc.");
}, 5000);
