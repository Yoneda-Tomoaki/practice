// クラス定義
class Book{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }

}

const book1 = new Book("ミッキーの冒険", 1200);

console.log(book1.title);
console.log(book1.price);