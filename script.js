// ページが読み込まれたら実行する
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. menu.html を取ってきて表示する
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("side-menu").innerHTML = data;
        })
        .catch(error => console.error('メニューの読み込みに失敗しました:', error));

    // 2. スマホ用メニューボタンの動作
    const toggleBtn = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");

    if(toggleBtn && sideMenu) {
        toggleBtn.addEventListener("click", function() {
            // メニューの表示/非表示を切り替え（クラスをつける/とる）
            if (sideMenu.style.display === "block") {
                sideMenu.style.display = "none";
            } else {
                sideMenu.style.display = "block";
            }
        });
    }
});