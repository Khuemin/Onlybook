// Lấy các phần tử cần thiết từ DOM
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const amountInput = document.getElementById('amount');

// Xử lý sự kiện khi nhấn vào nút "-"
minusBtn.addEventListener('click', () => {
    let currentValue = parseInt(amountInput.value);
    // Chỉ cho phép giảm khi số lượng hiện tại lớn hơn 1
    if (currentValue > 1) {
        amountInput.value = currentValue - 1;
    }
});

// Xử lý sự kiện khi nhấn vào nút "+"
plusBtn.addEventListener('click', () => {
    let currentValue = parseInt(amountInput.value);
    amountInput.value = currentValue + 1;
});

// Lắng nghe sự kiện khi trang đã được tải hoàn toàn
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('amount');

    inputElement.addEventListener('input', function(event) {
        let inputValue = event.target.value;
        // Loại bỏ mọi ký tự không phải là số
        inputValue = inputValue.replace(/[^0-9]/g, ''); // Chỉ cho phép số

        // Kiểm tra xem giá trị có là số âm không, nếu có thì đặt lại giá trị là ''
        /*if (parseInt(inputValue) < 0) {
            inputValue = '';
        }*/
        if (inputValue == ''){
            inputValue = 1;
        }

        // Cập nhật giá trị của input
        event.target.value = inputValue;
    });
});
