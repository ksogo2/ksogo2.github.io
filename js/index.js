$(function() {
    // select�ύX��
    $('#busPullDown').on('change', function() {
        // �J�ڐ�URL�擾
        var url = $(this).val();
        // URL���擾�ł��Ă���΃y�[�W�J��
        if(url != '') {
            location.href = url;
        }
    })
});