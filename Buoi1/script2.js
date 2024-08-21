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
// var myString ="HTML, CSS3, Javascript";
// console.log(myString.split()); // cả string là 1 phần tử 
// console.log(myString.split("")); // mỗi ký tự là 1 phần tử
// console.log(myString.split(",")); // mỗi từ là 1 phần tử
// console.log(myString.split(",",2)); // mỗi từ là 1 phần tử, lấy tối đa 2 phần tử


//8.0 Làm việc với Number:

//8.1 isNaN():
// dùng để kiểm tra một biến có phải là NaN không.
//NaN: là viết tắt của Not a Number.
// cú pháp: isNaN ( tenbien)

// var a =10;
// var b =20;
// var result =a/b;


// console.log( result); // trả về NaN

// if (typeof result=="number"){
//     console.log("Đây là số :"+result);
// }

// // thay vì dùng if kèm theo typeOf để check có thể dùng isNaN()
// if (isNaN(result)){
//     console.log("Số này bị lỗi");
// }
// else {
//     console.log("Đây là số "+result);
// }

// console.log(isNaN(result));  // trả về true



//8.2 toString():

// chuyển kiểu số thành kiểu String.
// cú pháp: tenBien.toString()

// var a =10;
// var b =a.toString();
// var c =(10).toString();

// console.log(a);  // trả về số 10 
// console.log(typeof a); // trả về kiểu Number
// console.log(b);  // trả về chuỗi 10
// console.log(typeof b); // trả về kiểu String 
// console.log(c);  // Trả về chuỗi 10
// console.log(typeof c);   // Trả về kiểu String

//8.3 toFixed():
// dùng để làm tròn số thập phân.
// nếu số ngay sau số cần làm tròn
// >=5 thì sẽ làm tròn lên.
// <5 sẽ làm tròn xuống.
// cú pháp: toFixed (digits)
// trong đó: digits là số chữ số sau dấu thập phân ( 0 <= digits <=100). Không điền mặc định là 0


// var a =12.3456;
// console.log(a.toFixed()); // trả về 12
// console.log(a.toFixed(0));  // trả về 12
// console.log(a.toFixed(1));  // trả về 12.3
// console.log(a.toFixed(2));  // trả về 12.35
// console.log(a.toFixed(3));  // trả về 12.346

//09. Làm việc với Array.
// chuyển array thành string.
// tự động thêm dấu phẩy ngăn cách.
// cú pháp: array.toString().

// var list =["HTML", "CSS", "Javascript"];
// console.log(list.toString()); // trả về "HTML,CSS,Javascript", không có dấu cách nha...


//9.2 join():
// chuyển array thành string.
// thêm dấu bất kỳ để ngăn cách giữa các phần tử.
// cú pháp: array.join(separator)
// trong đó:
// separator ( dải phân cách) là dấu ngăn cách để thêm vào String. Mặc định là dấu phẩy.

// var list =["HTML", "CSS", "Javascript"];

// console.log(list.join());
// console.log(list.join("," ));
// console.log(list.join(""));
// console.log(list.join(", "));
// console.log(list.join(" - "));



//9.3 pop(): xóa phần tử ở cuối mảng.
// dùng để xóa phần tử cuối mảng.
// trả về phần tử cuối mảng.
// cú pháp: array.pop()

//  var list =["HTML", "CSS", "Javascript"];

//  console.log(list.pop()); // trả về  "Javascript"
//  console.log(list); // trả về ["HTML", "CSS"]


 //9.4 push(): thêm 1 hoặc nhiều phần tử vào cuối mảng 

 // thêm một hoặc nhiều phần tử vào cuối mảng.
 // trả về  độ dài mới của mảng.
 // cú pháp: array.push(item1,item2,.....,itemX)

//  var list =["HTML","CSS","Javascript"];
//  console.log(list.push("ReactJS","Java Spring Boot"));
//  console.log(list);


 //9.5 shift(): xóa phần tử ở đầu mảng.
 // dùng để xóa phần tử đầu mảng.
 // trả về phần tử ở đầu mảng.
 // cú pháp: array.shift()

//  var list =["HTML","CSS","Javascript"];
//  console.log(list.shift());
//  console.log(list);


 //9.6 unshift(): thêm phần tử vào đầu mảng.
 // thêm 1 hoặc nhiều phần tử vào đầu mảng.
 // trả về độ dài mới của mảng.

// cú pháp: array.unshift(item1,item2......,itemXXXXX....)

// var list =["HTML","CSS","Javascript"];
// console.log(list.unshift("VueJS","ExpressJS"));
// console.log(list);


//9.7 splice()
// xóa hoặc chèn phần tử mới vào mảng.
// trả về mảng bị xóa.
// cú pháp: array.splice(index, howmany, item1, ...., itemX)
// trong đó:
//index: vị trí thêm/ xóa phần tử ( bắt buộc ) 
//howmany: số phần tử cần xóa ( không bắt buộc) *****
//item1,...,itemX: các phần tử mới được thêm vào ( không bắt buộc).


// ví dụ 1 : chèn phần tử  mới vào mảng:

// var list =["HTML","CSS","Javascript"];
// console.log(list.splice(2,0,"Bootstrap 4", "ReactJs")); // trả về [] tại đang thêm vào mà có xóa đi đâu
// console.log(list);


// ví dụ 2: xóa phần tử trong mảng.
// var list =["HTML","CSS","Javascript"];
// console.log(list.splice(1,2)); // trả về ["CSS","Javascript"]  xóa 2 phần tử từ index =1;
// console.log(list);

// ví dụ 3: vừa xóa phần tử và chèn phần tử mới vào mảng: 
// var list =["HTML","CSS","Javascript"];
// console.log(list.splice(2,1,"VuejS", "NodeJs")); // trả về ["Javascript"]
// console.log(list);// trả về ["HTML","CSS","VueJS", "Nodejs"];


//9.8 concat():
// dùng để nối 2 array.
//không làm ảnh hưởng đến mảng ban đầu.
// cú pháp: array1.concat(array2, array3....,arrayX)
// var list =["HTML","CSS","Javascript"];
// var list2 =["BootStrap 4","ReactJS"];
// var list3 =["VueJS", "AngularJS"];
// console.log(list);
// console.log(list.concat(list2,list3));


//9.8 slice():
// dùng để cắt các phần tử.
// không làm ảnh hưởng đến mảng ban đầu.
// cú pháp: array.slice(start,end)

//trong đó:
// start: vị trí bắt đầu. mặc định là 0. ( không bắt buộc).
// end: vị trí kết thúc . mặc định là phần tử cuối cùng ( không bắt buộc).

var list =["HTML","CSS","Javascript","BootStrap 4","ReactJS"];

console.log(list.slice(3));
console.log(list.slice(1,3));
console.log(list.slice(-3,-1));
console.log(list);




