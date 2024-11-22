if (typeof Worker !== "undefined") {
    // Kiểm tra hỗ trợ Web Worker
    const worker = new Worker("worker.js"); // Tạo Worker từ file worker.js

    // Gửi dữ liệu đến Worker
    worker.postMessage(10); // Gửi giá trị 10 để tính toán

    // Lắng nghe phản hồi từ Worker
    worker.onmessage = function (event) {
        console.log("Kết quả từ Worker:", event.data); // In kết quả nhận được
    };

    // Xử lý lỗi nếu có
    worker.onerror = function (error) {
        console.error("Lỗi từ Worker:", error.message);
    };
} else {
    console.log("Trình duyệt của bạn không hỗ trợ Web Worker.");
}
