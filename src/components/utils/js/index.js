$(window).ready(function(){
    $('#book').turn({
        display:'double', //single 한면 양쪽면
        acceleration: true, // 가속화 활성화
        pages: numberOfPages, // 페이지 수 설정
        elevation: 50,  // 페이지 넘김 효과 높이
        gradients: !$.isTouch, // 그라디언트 효과
        width:1400, //넓이 (1,2,페이지 합산)
        height:600, //높이
        autoCenter: true, //자동 중앙정렬
        page:2, //페이지 양쪽보이게
        when: {
            turning: function(e, page, view) {

                   // 필요한 페이지 범위 계산
                let range = $(this).turn('range', page);

                 // 필요한 페이지 추가
                for (page = range[0]; page<=range[1]; page++) 
                    addPage(page, $(this));
            },

            turned: function(e, page) {
                 // 페이지 번호 업데이트
                $('#page-number').val(page);
            }
        }
    });

      // 전체 페이지 수 업데이트
    $('#number-pages').html(numberOfPages);

     // 페이지 번호 입력 시 해당 페이지로 이동
    $('#page-number').keydown(function(e){
        if (e.keyCode==13)
            $('#book').turn('page', $('#page-number').val());
    });
});

$(window).bind('keydown', function(e){
    if (e.target && e.target.tagName.toLowerCase()!='input')
        if (e.keyCode==37)
            $('#book').turn('previous');
        else if (e.keyCode==39)
            $('#book').turn('next');
});
