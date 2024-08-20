// var  button =document.querySelector("button");
// button.onclick= function () {
//     alert("Hello World");

// }

// var a =10;

// var b =20;

// var c =a+b;

// console.log(c);


// camel case
var hoVaTen ="Dang Phuong Nam"; 

// Toán tử số học (Arithmetic) : dùng để thực hiện các phép toán số học.


// Danh sách các toán tử số học: 
//  cộng : +
//  trừ : -
//  nhân : *
//  phép lũy thừa, côn thức a ^ b : **
//  phép chia: /
//  phép chia  láy phần dư: %


// var a =7;
// var b =3;

// var c =a+b;


// var fullName ="Nam Dang";
// var d =a+fullName; // 10 +"Nam Dang" ===> "10Nam Dang"
// console.log(c);
// console.log(d);

// var e =a-b;
// console.log(e);
// var f =a*b;
// console.log(f); 

// var g =a/b;

// console.log(g);

// var s =a**b;

// console.log(s);

// var p=a%b;

// console.log(p);

// var m =a++;

// console.log(m);
// console.log(a);

// ví dụ 1 :

// var a =10;
// var b =a;
// console.log (b);    


var a =10;
var b ="10";


console.log(a>b);


// toán tử quan trọng nè: có 3 dấu bằng....
// nó băt cả cùng kiểu dữ liệu luôn.
// ví dụ 

var c = a==b;
console.log(c); // vẫn là true

// nhưng nếu dùng:
var d =a===b;
console.log(d);  // là false

// nên dùng toán tử 3 dấu bằng ==== 

// kiểu Undefined: khai báo mà không gán giá trị
var h;
console.log(h);

// Kiểu dữ liệu phức tạp (Complex Data)
// kiểu function 

function tinhTong(a,b,c){
    return a+b+c;

}
var x =tinhTong(10,11,12);
console.log(x);


