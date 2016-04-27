$(function() {
    // select変更時
    $('#busPullDown').on('change', function() {
        // 遷移先URL取得
        var url = $(this).val();
        // URLが取得できていればページ遷移
        if(url != '') {
            location.href = url;
        }
    })
});