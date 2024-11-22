// Đăng ký Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.js")
        .then(() => {
            console.log("Service Worker đã được đăng ký thành công.");
        })
        .catch((error) => {
            console.error("Lỗi khi đăng ký Service Worker:", error);
        });
}

