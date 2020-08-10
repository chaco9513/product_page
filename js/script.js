$(document).ready(function(){
    //2차 배열 패턴 = ["이미지 파일", "Title" "Context", "가격정보", "업데이트날짜", "좋아요 횟수"]
    var $pd_arr = [
        ["img1.jpg", "거실 인테리어 4", "합리주의 실용 인테리어 4", "30000", "20200807", "23"],
        ["img2.jpg", "거실 인테리어 1", "합리주의 실용 인테리어 1", "150000", "20190802", "57"],
        ["img3.jpg", "침실 인테리어 8", "합리주의 실용 인테리어 8", "30000", "20200705", "20"],
        ["img4.jpg", "침실 인테리어 2", "심플 실용 인테리어 2", "30000", "20200807", "23"],
        ["img5.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 1", "50000", "20191207", "66"],
        ["img6.jpg", "거실 인테리어 5", "합리주의 실용 인테리어 5", "20000", "20200608", "15"],
        ["img7.jpg", "서재 인테리어 2", "아르데코 실용 인테리어 2", "30000", "20200215", "75"],
        ["img8.jpg", "욕실 인테리어 7", "합리주의 실용 인테리어 7", "90000", "20200530", "46"],
        ["img9.jpg", "거실 인테리어 1", "합리주의 실용 인테리어 1", "75000", "20191113", "22"]
        
    ];
    var $pd_box = `
    <div class="pd_box">
                    <div class="pd_photo">
                        <img src="img/img1.jpg" alt="">
                    </div>
                    <div class="pd_info">
                        <h3 class="pd_tit">Title</h3>
                        <p class="pd_txt">Context</p>
                        <div class="pd_etc">
                            <span class="pd_price">가격 정보</span>
                            <span class="pd_date">업데이트 날짜</span>
                        </div>
                            <p class="fav">좋아요 &nbsp; <span>100</span></p>
                        
                    </div>
                </div>
    `;



    
    for(i=0; i<$pd_arr.length; i++){
        $(".pd_frame").append($pd_box);
    };


    function $list (){
    $(".pd_box").each(function(index){
        $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
        $(this).find(".pd_tit").text($pd_arr[index][1]);
        $(this).find(".pd_txt").text($pd_arr[index][2]);
        $(this).find(".pd_price").text($pd_arr[index][3]);
        $(this).find(".pd_date").text($pd_arr[index][4]);
        $(this).find(".fav span").text($pd_arr[index][5]);
    });
    }
    $list();

    $(".sort_btn button").click(function(){
        var $index = $(this).index();
        $(".sort_btn button").removeClass("active");
        $(this).addClass("active");
        $(".sort_sel option").prop("selected",false);
        $(".sort_sel option").eq($index+1).prop("selected",true);
    });



    $(".date_sort").click(function(){
        //sort() 메서드 -> 순차적으로 나열시키는 메서드, 오름차순으로 나열이 기본
        $pd_arr.sort(function(a,b){
            // return a[4] - b[4]; //작은 순으로 차례대로 정렬
            return b[4] - a[4]; //큰 순으로 차례대로 정렬
        });
        console.log($pd_arr); //배열의 순서가 변경
        /* $pd_arr.reverse(); */ //reverse() -> 현재 배열을 역순으로 변경


        $list();
    });
    $(".low_sort").click(function(){
        $pd_arr.sort(function(a,b){
            return a[3] - b[3];
        });


        $list();
    });
    $(".high_sort").click(function(){
        $pd_arr.sort(function(a,b){
            return b[3] - a[3];
        });


        $list();
    });
    $(".fav_sort").click(function(){
        $pd_arr.sort(function(a,b){
            return b[5] - a[5];
        });


        $list();
    });


    $(".sort_sel").change(function(){
        var $sel_val = $(this).val();
        $(".sort_btn button").removeClass("active");
        $(".sort_btn button[class^='"+$sel_val+"']").addClass("active");

        console.log($sel_val);
        if($sel_val == "date"){
            $pd_arr.sort(function(a,b){
                return b[4] - a[4];
            });
            $list();


        }else if($sel_val == "low"){
            $pd_arr.sort(function(a,b){
                return a[3] - b[3]
            });
            $list();
        }else if($sel_val == "high"){
            $pd_arr.sort(function(a,b){
                return b[3] - a[3]
            });
            $list();
        }else if($sel_val == "fav"){
            $pd_arr.sort(function(a,b){
                return b[5] - a[5]
            });
            $list();
        };
    });



    //배열 데이터의 개수가 8개(4의 배수) 라면, 8/4 => 몫은 2 나머지 0 => if
        
    var $ea_item = 4; //각 페이지별로 4개의 아이템을 보여주겠다는 선언
    if($pd_arr.length % $ea_item == 0){
        for(k = 0; k < $pd_arr.length/$ea_item; k++){
            $(".pager").append("<li>"+(k+1)+"</li>");
        };
        
    }else{
        for(k = 0; k <= $pd_arr.length/$ea_item; k++){
            $(".pager").append("<li>"+(k+1)+"</li>");
        };
    };

    $(".pager li").eq(0).addClass("active");
    $(".pd_box").eq($ea_item - 1).nextAll().hide();

    $(".pager li").click(function(){
        var $pager_txt = $(this).text();
        $(".pd_box").show();
        $(".pd_box").eq($ea_item * ($pager_txt - 1)).prevAll().hide();
        $(".pd_box").eq($ea_item * $pager_txt - 1).nextAll().hide();
        $(".pager li").removeClass("active")
        $(this).addClass("active")
    });
    //2번을 클릭 했다면 인덱스번호인 4~7 만 보여준다 4($ea_item) * (2-1)
























});