self.addEventListener("install", (event) => {
    console.log("Service Worker: Đã cài đặt");

    // Lưu trữ tệp tĩnh vào bộ nhớ đệm
    event.waitUntil(
        caches.open("static-v1").then((cache) => {
            return cache.addAll(["index.html" , "main.js" , ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    console.log("Đang xử lý yêu cầu:", event.request.url);

    // Trả về từ cache hoặc lấy từ server
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
