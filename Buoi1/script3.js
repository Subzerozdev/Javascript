
// câu lệnh if:
// var a =10;
// var b =20;

// if (a>b){
//     console.log("a lớn hơn b ");

// }
// else {
//     console.log("a nhỏ hơn  hoặc  bằng b "); 
// }

// if điểm thi từ cao xuống thấp:
// var diemThi = 4;
// if (diemThi >= 9){
//     console.log("học sinh xuất sắc");
// }
//  else if (diemThi >= 8 && diemthi < 9){
//     console.log("học sinh giỏi");
// }
// else  if  (diemThi >= 6.5 && diemthi < 8){
//     console.log("học sinh tiên tiến");
// }
// else {
// console.log("học sinh trung bình");
// }
// if else lồng vào nhau:
// var diemToan =9;
// var diemTin =7;

// if (diemToan !=null && diemTin !=null){
// var diemTrungBinh=(diemTin+diemToan)/2;
// if (diemTrungBinh >= 9){
//     console.log("học sinh xuất sắc");
// }
//  else if (diemTrungBinh >= 8 && diemTrungBinh < 9){
//     console.log("học sinh giỏi");
// }
// else  if  (diemTrungBinh >= 6.5 && diemTrungBinh < 8){
//     console.log("học sinh tiên tiến");
// }
// else {
// console.log("học sinh trung bình");
// }
// }
// else {
//     console.log("Chưa có điểm toán hoặc tin...");
// }




// Toán tử 3 ngôi:
// rút gọn câu lệnh if else bằng cách dùng toán tử rẽ nhánh ?
// cú pháp: var result =condition ? value1 : value2;
// đây là toán tử 3 ngôi với 3 thành phần: 
// condition: điều kiện cần kiểm tra.
//value 1: trả về giá trị value1 nếu điều kiện condition là true.
//value 2: trả về giá trị value2 nếu điều kiện condition là false.

// var age =21;
//  var check = age >= 18 ? "Đã đủ tuổi!!!" : "Chưa đủ tuổi!!!";

// console.log(check);


//switch case:
// dùng để rẽ nhánh chương trình.
// mỗi nhánh sẽ có một điều kiện cụ thể và điều kiện đó phải sử dụng toán tử so sánh bằng.
// trường hợp bỏ break đi thì câu lệnh sẽ chạy tiếp xuống case tiếp theo, đến case nào có break thì dừng lại.
// trường hợp không có default thì nếu rơi vào trường hợp này sẽ không in ra gì.
// ta cũng có thể gom nhóm case lại.
// var number =5;
// switch (number) {
//     case 0 :
//         console.log("Đây là số 0");
//         break;


//         case 1 :
//         console.log("Đây là số 1");
//         break;

//         case 2 :
//             console.log("Đây là số 2");
//             break;
//     default:
//         console.log("Không thỏa mãn");
//         break;
// }


// vòng lặp for:  dùng để lặp lại việc thực thi một đoạn mã nào đó một số lần

// for (var i=0; i<= 10; i++){
// console.log(i);
// }


// for (var i=10; i>= 0; i--){
//     console.log(i);
//     }
    


    // for (var i=0; i < 10; i+=2){
    //     console.log(i);
    //     }
        

// for (var i =1; i<= 10; i++){
//     for (var j=1; j <=10; j++){
//         console.log("Hàng "+i+" Cột "+j);
//     }
// }


//Vòng lặp For In:
// dùng để lấy ra key của một object cũng có thể áp dụng cho array, string.
// cú pháp: for (key in object){}
// key: là tên biến ( đặt tên là gì cũng được);
// object: là một object, mỗi object , mỗi key sẽ tương ứng với key trong object.
// var infoUser ={
//     fullName: "Nguyễn Gia Khánh",
//     email: "khanhtrantuc2004@gmail.com",
//     phone: "0903128236"

// }; // đây là 1 object .

// for (key in infoUser){
//     //console.log(key); // lấy ra key của một object.
//     console.log(`${key} - ${infoUser[key]}`); 
// // inforUser[key] ==> thì nó mới có không thì undefined đấy


// }

// vòng lặp For Of:
// vòng lặp for of dùng để lấy ra phần tử của một array, string.
// không áp dụng được với object.

// var list =["HTML", "CSS", "Javacript"];

//console.log(list);
// for (var item =0; item < list.length; item++){
//     console.log(list[item]);
// }

// thay vì dùng for thì dùng For Of.


// for (var item of list){
// console.log(item);
// }


// ví dụ cho chuỗi:
var String ="Nguyễn Gia Khánh";

// for (var i=0; i< String.length; i++){
//     console.log(String[i]);
// }

// dùng vòng lặp for of:

// for (var character of String ){
//     console.log(character);
// }


// vòng lặp while: 
// luôn luôn kiểm tra điều kiện trước, nếu điều kiện thảo mãn thì mới chạy vào trong vòng lặp.
// var i=1
// while ( i <=  10){
//  console.log(i);
//  i++;
// }

// var i =0;
// var list =["HTML", "CSS", "Javacript"];

// while ( i <  list.length){
//     console.log(list[i]);
//     i++;
//    }


// vòng lặp do while: 
// vòng lặp do... while luôn thực hiện ít nhất một lượt lặp.
// sau đó mới kiểm tra điều kiện lặp.
// var i =20;
// do {
// console.log(i);
// i++
// } while (i <=10); // mặc dù là 20 không nhỏ hơn 10 nhưng vòng lặp do while thực hiện ít nhất 1 lần nên nó in ra đó.


// break: dừng lại luôn.
// for (var i=0; i< 10; i++){
//     console.log(i);

//     if (i==5){
//         console.log("Bạn đã rút tối đa số tiền của một ngày!!!!");
//         break;
//     }
// }


// continue: đoạn code bên dưới không được thực hiện mà sang vòng lặp tiếp theo luôn.
 
// for (var i=0; i< 10; i++){
//     if (i==5){
//         continue;
//     }
//     console.log(i);

   
// }

// ví dụ về Expression function ( hàm biểu thức):

// var tong =function () {
//     let tong =0;
//      for (const item of arguments){
//         tong +=item;

//      }
//      return tong;
// }
// var ketQua= tong(10,20,20);
// console.log(ketQua);

// Arrow function ( Hàm mũi tên):
// không có tính hoisting ( nếu gọi hàm trước lúc khai báo hàm thì sẽ bị lỗi)
//không có đối tượng arguments.
// cú pháp:
// var tenHam =(tham so1, thamso2,....) => {
//code
//}

// var tong = (...arguments) => { // .. arguments về sau sẽ biết. ( đặt tên khác cũng được)
    
//     let tong =0;
//      for (const item of arguments){
//         tong +=item;

//      }
//      return tong;
// }
// var ketQua= tong(10,20,20);
// console.log(ketQua);


// biến thể arrow Function của setTimeOut:

// setTimeout(function() {
//     console.log("OK");
// },3000);

// muốn gọn hơn nữa:

// setTimeout(() => {
//     console.log("OK");
// },3000);


// gọn hơn nữa: 

// setTimeout(() =>    console.log("OK")
// ,3000); // bỏ luôn dấu ngoặc đấy

// ví dụ 1 : 
const mang =[1,2,3,4,5,6,7,8,9,10];
// tính tổng các số chẵn của mảng đó.

const tongSoChan = (array) => {
let tong =0;
for (let i=0; i< array.length;i++){
if ( array[i]%2 ==0){
    tong +=array[i];
}
}
return tong;

}


const result =tongSoChan(mang);
console.log(result);