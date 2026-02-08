// Vanilla JS cho các hiệu ứng phụ (nếu cần)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Comixs Store Loaded");

    // Ví dụ: Hiệu ứng đơn giản khi click vào filter buttons
    const filters = document.querySelectorAll('.filter-buttons button');
    filters.forEach(btn => {
        btn.addEventListener('click', function () {
            filters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});