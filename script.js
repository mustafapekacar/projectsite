function showContent(tabName) {
    // Tüm içerik bloklarını gizle
    let contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.style.display = "none");

    // Seçilen içeriği göster
    document.getElementById(tabName).style.display = "block";
}

// Sayfa açıldığında "Devre Şeması" otomatik olarak gösterilsin
document.addEventListener("DOMContentLoaded", function() {
    showContent('devre');
});
