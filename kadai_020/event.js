// 1. ボタン要素を取得する
const btn = document.getElementById("btn");

// 2. 書き換えたいテキスト要素（h2）を取得する
const text = document.getElementById("text");

// 3. ボタンがクリックされたときの処理
btn.addEventListener("click", () => {
  // textContentを使って、h2の中身を書き換える
  text.textContent = "ボタンをクリックしました";

  // コンソールにもログを残す（現在のコードのまま）
  console.log("ボタンをクリックしました");
});
