
// BÀI 1 SẮP XẾP 3 SỐ THEO THỨ TỰ


// ------------ĐẦU VÀO------------
// Người dùng nhập ba số: a, b, c.

// ------------XỬ LÝ------------

function homework1() {
    // b1 : tạo ba biến a, b, c lấy giá trị từ người dùng
    var a = +document.getElementById("number1").value;
    var b = +document.getElementById("number2").value;
    var c = +document.getElementById("number3").value;
    // b2 : so sánh các biến đã tạo với nhau theo từng trường họp
if(a === b && a === c) 
// a=b , b=c ==> ba số bằng nhau
    {
        document.getElementById("result1").innerHTML = 
        'BA SỐ BẰNG NHAU'
    }
else{
    // a>b , b>c ==> a > b > c
    if(a > b && b > c)
    {
        document.getElementById("result1").innerHTML = 
        `${a} > ${b} > ${c}`
    }
    // a>c , b>c ==> a > c > b
    else if(a > c && c > b)
    {
        document.getElementById("result1").innerHTML = 
        `${a} > ${c} > ${b}`
    }
    // b>a , a>c ==> b > a > c
    else if(b > a && a > c)
    {
        document.getElementById("result1").innerHTML = 
        `${b} > ${a} > ${c}`
    }
    // b > c , c > a ==> b > c > a
    else if(b > c && c > a)
    {
        document.getElementById("result1").innerHTML = 
        `${b} > ${c} > ${a}`
    }
    // c > a , a > b ==> c > a > b
    else if(c > a && a > b)
    {
        document.getElementById("result1").innerHTML = 
        `${c} > ${b} > ${a}`
    }
    // c > b , b > a ==> c > b > a
    else if(c > b && b > a)
    {
        document.getElementById("result1").innerHTML = 
        `${c} > ${b} > ${a}`
    }
    // a = b , b > c ==> a = b > c
    else if(a === b && b > c)
    {
        document.getElementById("result1").innerHTML = 
        `${a} = ${b} > ${c}`
    }
    // a = b , b < c ==> a = b < c
    else if(a === b && b < c)
    {
            document.getElementById("result1").innerHTML = 
        `${c} > ${b} = ${a}`
    }
    // a = c , a > b ==> a = c > b
    else if(a === c && a > b)
    {
        document.getElementById("result1").innerHTML = 
        `${a} = ${c} > ${b}`
    }
    // a = c , a < b ==> a = c < b
    else if(a === c && a < b)
    {
        document.getElementById("result1").innerHTML = 
        `${b} > ${c} = ${a}`
    }
    // b = c , b < a ==> b = c > a
    else if(b === c && b < a)
    {
        document.getElementById("result1").innerHTML = 
        `${b} = ${c} < ${a}`
    }
    // b = c , b > a ==> b = c < a
    else if(b === c && b > a)
    {
        document.getElementById("result1").innerHTML = 
        `${b} = ${c} > ${a}`
    }
}
}

    // b3: Xuất kết quả đã xắp xếp ra màn hình





// BÀI 2 CHÀO HỎI CÁC THÀNH VIÊN TRONG GIA ĐÌNH
    // b1: 1. tạo function loichao() gọi ra câu hỏi khi truy cập
        // 2. yêu cầu người dùng chọn một trong 4 giá trị radio
    // b2:
        // 1. tạo function lấy giá trị từ radio theo trạng thái checked khi người dùng chọn radio
        // 2. gán các giá câu trả lời cho từng giá trị lấy được bằng hàm if else
        // 3. gán câu trả lời thích hợp cho từng id lấy được từ radio

function loichao() {
    var cauChao = document.getElementById("loichaothanthien");
    cauChao.classList.add('show')
}
function chaohoi() {
    var thanhVienGiaDinh = document.querySelector("input[name='thanhVien']:checked").value;
    if(thanhVienGiaDinh === 'bo')
    {
        document.getElementById("result2").innerHTML =
        `CHÀO TRỤ CỘT GIA ĐÌNH`
    }
    else
    {
        if(thanhVienGiaDinh === 'me')
        {
            document.getElementById("result2").innerHTML =
        `CHÀO NÓC NHÀ VĨ ĐẠI`
        }
        else 
        if(thanhVienGiaDinh === 'anh')
        {
            document.getElementById("result2").innerHTML =
        `CHÀO ANH CON GHẺ`
        }
        else 
        if(thanhVienGiaDinh === 'chi')
        {
            document.getElementById("result2").innerHTML =
        `CHÀO CHỊ CON GHẺ`
        }
    }
}
        // b3: xuất kết quả ra màn hình



// BÀI 3 TÍNH SỐ SỐ CHẴN VÀ LẺ

// b1: lấy giá trị từ người dùng nhập vào ba số từ input
// b2: tạo các biến d , e , f và gán giá trị cho các biến trên
// b3: tạo các biến i , g , h tương ứng với d , e , f và gán giá trị bằng 0
// b4: chia lấy dư các biến d , e , f cho 2. nếu (d || e || f % 2) != 0 thì i , g , h tương ứng sẽ tăng thêm 1 (số lẻ) ngược lại d || e || f là số chẵn thì  i , g , h tương ứng bằng 0
// b5: tổng ba số : i + g + h = số số lẻ
// b6: số số chẵn bằng 3 - (i + g + h)

function homework3() {
    var d = +document.getElementById("number11").value;
    var e = +document.getElementById("number22").value;
    var f = +document.getElementById("number33").value;
    var i = 0;
    var g = 0;
    var h = 0;
    if(d % 2 != 0)
    {i++;}
    else
    {i=0}
    if(e % 2 != 0)
    {g++;}
    else
    {g=0}
    if(f % 2 != 0)
    {h++;}
    else
    {h=0}
    var sosole = (i + g + h);
    sosole = document.getElementById("result3").innerHTML =
    ` Số số lẻ là ${sosole} `;
     var sosochan = 3 - (i + g + h);
    sosole = document.getElementById("result4").innerHTML =
    ` Số số chẵn là ${sosochan} `;
}

// b3: xuất kết quả số số chẵn và số số lẻ









// BÀI 4 XÁC ĐỊNH LOẠI TAM GIÁC
// b1: xác định ba cạnh của tam giác từ người dùng
// b2:  1.tạo ba biến x , y , z tương ứng ba cạnh tam giác
//      2.gán giá trị từ cạnh của tam giác cho ba biến x , y , z
//      3.dùng hàm if kiểm tra điều kiện thỏa mãn ba cạnh trên tạo nên một tam giác x*x==y*y+z*z || y*y==x*x+z*z || z*z== x*x+y*y
//      4.xác định các dạng tam giác qua các công thức

// (x*x==y*y+z*z || y*y==x*x+z*z || z*z== x*x+y*y)     ==> tam giác vuông
// (x==y && y==z)                                      ==> tam giác đều
// (x==y || x==z || y==z)                              ==> tam giác cân
// (x*x > y*b+z*z || y*y > x*x+z*z || z*z > x*x+y*y)   ==> tam giác tù
// còn lại                                             ==> tam giác nhọn
// nếu không thỏa điều kiện x*x==y*y+z*z || y*y==x*x+z*z || z*z== x*x+y*y ==> đưa ra kết quả không phải ba cạnh tam giác

function homework4() {
    var x = +document.getElementById("number111").value;
    var y = +document.getElementById("number222").value;
    var z = +document.getElementById("number333").value;
    if( x<y+z && y<x+z && z<x+y )
    {
        if(x*x==y*y+z*z || y*y==x*x+z*z || z*z== x*x+y*y)
        {
            document.getElementById("result5").innerHTML =
        `ĐÂY LÀ TAM GIÁC VUÔNG`
        }
        else if(x==y && y==z)
        {
            document.getElementById("result5").innerHTML =
        `ĐÂY LÀ TAM GIÁC ĐỀU`
        }
        else if(x==y || x==z || y==z)
        {
           document.getElementById("result5").innerHTML =
        `ĐÂY LÀ TAM GIÁC CÂN` 
        }
        else if(x*x > y*b+z*z || y*y > x*x+z*z || z*z > x*x+y*y)
        {
           document.getElementById("result5").innerHTML =
        `ĐÂY LÀ TAM GIÁC TÙ` 
        }
        else
        {
        document.getElementById("result5").innerHTML =
        `ĐÂY LÀ TAM GIÁC NHỌN`
        }
    }
    else
    {
        document.getElementById("result5").innerHTML =
        `KHÔNG PHẢI BA CẠNH CỦA TAM GIÁC`
    }
}


// b3: xuất kết quả ra màn hình