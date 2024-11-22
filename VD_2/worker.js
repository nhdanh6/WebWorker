// Xử lý logic trong Dedicated Worker
onmessage = function (event) {
   const result = event.data * 2; // Xử lý dữ liệu nhận được
   postMessage(result); // Gửi kết quả về Main Thread
};
