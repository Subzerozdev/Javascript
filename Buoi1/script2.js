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



//7.4 slice(): dùng để cắt một chuỗi và trả về 1 chuỗi mới.
// Cú pháp: String.slice(start,end);

// var myString ="Xin chào! Tôi tên Khánh. tôi năm nay 20 tuổi";
// console.log(myString.slice(10,25));
// console.log(myString.slice(0)); // lấy toàn bộ chuỗi. thay cho copy nè.
// console.log(myString.slice(0,1)); // lấy kí tự đầu tiên của chuỗi.
// console.log(myString.slice(-1)); // lấy kí tự cuối cùng của chuỗi.
// console.log(myString.slice()); //vẫn giữ nguyên chuỗi gốc.


//7.5 replace(): dùng để thay thế 1 chuỗi thành 1 chuỗi mới.
// nhưng chỉ thay thế chuỗi đầu tiên mà nó tìm thấy.
// cú pháp: string.replace(searchValue, newValue)

// var myString ="Xin chào! Tôi tên Khánh. Tôi năm nay 20 tuổi";
// console.log(myString.replace("tôi","Mình"));
// console.log(myString.replace(/Tôi/g,"Mình")); // cấu trúc regex. ( lên mạng xem lại )., cứ gặp Tôi là thay méo nói nhiều.



//7.6 toUpperCase() và toLowerCase():

// var myString ="Xin chào! Tôi tên Khánh. Tôi năm nay 20 tuổi";
// console.log(myString.toLowerCase());
// console.log(myString.toUpperCase());

//7.7 trim():
// dùng để bỏ đi khoảng trắng ở 2 đầu.
// các khoảng trắng giữa các ký tự không bị loại bỏ.
// cú pháp: string.trim()
// var myString ="    Xin chào! Tôi tên Khánh. Tôi năm nay 20 tuổi   ";
// console.log(myString);
// console.log(myString.trim());



//7.8  charAt(): 
// dùng để lấy kí tự thông qua index.
// cú pháp: string.charAt(index)
// với index là vị trí của kí tự cần lấy.

// var myString ="Nguyễn Gia Khánh";
// console.log(myString.charAt()); // lấy kí tự đầu tiên 
// console.log(myString.charAt(0)); // lấy kí tự đầu tiên 
// console.log(myString.charAt(1));// lấy kí tự thứ 2 
// console.log(myString.charAt(myString.length-1)); // lấy ký tự cuối cùng 

// 7.9 split(): 
// chuyển một chuỗi thành một array.
// nhưng cần tìm ra điểm chung của chuỗi đó.
var myString ="HTML, CSS3, Javascript";
console.log(myString.split()); // cả string là 1 phần tử 
console.log(myString.split("")); // mỗi ký tự là 1 phần tử
console.log(myString.split(",")); // mỗi từ là 1 phần tử
console.log(myString.split(",",2)); // mỗi từ là 1 phần tử, lấy tối đa 2 phần tử