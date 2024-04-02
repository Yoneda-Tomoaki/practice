// ブロックスコープ
// グローバルスコープの変数定義
const name = "Bob";

// グローバルスコープの変数呼び出し
console.log(`Hello, ${name}`);

{
    const name = "John";
    console.log(`Hello, ${name}`);
}

console.log(`Hello, ${name}`);