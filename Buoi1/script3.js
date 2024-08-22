
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
var infoUser ={
    fullName: "Nguyễn Gia Khánh",
    email: "khanhtrantuc2004@gmail.com",
    phone: "0903128236"

}; // đây là 1 object .

for (key in infoUser){
    //console.log(key); // lấy ra key của một object.
    console.log(`${key} - ${infoUser[key]}`); 
// inforUser[key] ==> thì nó mới có không thì undefined đấy

}

    

 
