// メソッドの戻り値
// クラス定義
class Triangle{
    constructor(base, height){
        this.base = base;
        this.height = height;
    }


    getArea(){
        const area = (this.base * this.hight) / 2;
        return area;
       }
    
}

const triangle = new Triangle(12, 3);
const area = triangle.getArea();
console.log("三角形の面積" + area)