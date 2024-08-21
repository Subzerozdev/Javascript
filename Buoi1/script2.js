//05 . 1 số hàm built-in.

// alert ("Xin chao Cac ban");

//  var result =confirm ("Ban da tren 18 tuoi");

//  console.log(result );

// var result =prompt("Nhập n");
// console.log(result);


//Hàm set time out: 

// setTimeout(function (){
// console.log("A");
// }, 1000);
// hàm này sau 1 giấy nó sẽ in ra cái dòng này.


// Hàm setInterval() :chạy lặp lại sau một khoảng thời gian.


//  var b =setInterval(function (){
//     console.log("B");
//     }, 1000);


//     setTimeout(function (){
//         clearInterval(b)
//     },5000);


    // sau 5 giây nó gọi hàm setTimeOut == > chạy vào hàm clear Interval rồi dừng lại.

//06. Type Of: cho phép trả về kiểu của một biến:

// var  a =10;
// var b ="Nội dung...";
// var c;
// var d =null;
// var e =true;
// console.log(typeof a); // //number
// console.log(typeof b); // string
// console.log(typeof (a+b));  //string
// console.log(typeof c); //undefined
// console.log(typeof d); // object
// console.log(typeof e); //boolean
// console.log(typeof a=="number"); // true

// 07. Làm việc với String:


// 7.1 hàm length để đếm số kí tự: 
// var fullName ="nguyen Gia Khanh";
// console.log(fullName.length);
 

//7.2 indexOf(): tìm vị trí đầu tiên của một chuỗi nằm trong một chuỗi, không có thì trả về -1, có phân biệt hoa thường
// var myString ="xin chào !, tôi tên là NGK, năm nay tôi 20 tuổi";
// console.log(myString.indexOf("tôi"));
// console.log(myString.indexOf("tôi",13)); // tính từ index =13 tới vị trí có từ tôi


//7.3 lastIndexOf(): tìm vị trí cuối cùng của một chuỗi nằm trong một chuỗi, không có trả về -1, có phân biệt hoa thường.
// cú pháp: String.lastIndexOf(searchvalue,start);
// lưu ý**********: start: vị trí bắt đầu tìm kiếm ( tính từ trái qua phải và sẽ tìm kiếm ngược lại )
// var myString ="xin chào !, tôi tên là NGK, năm nay tôi 20 tuổi";
// console.log(myString.lastIndexOf("tôi"));
// console.log(myString.lastIndexOf("tôi",100)); 

