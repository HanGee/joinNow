$( document ).ready(function() {

    console.log('init editor');
    $.trumbowyg.upload.serverPath = '/imageUpload';


    var btnsGrps = jQuery.trumbowyg.btnsGrps;
    var btnsCustom = ['viewHTML',
        '|', 'formatting',
        '|', btnsGrps.design,
        '|', 'link',
        '|', 'insertImage',
        '|', btnsGrps.justify,
        '|', btnsGrps.lists,
        '|', 'insertHorizontalRule',
        '|', 'foreColor', 'backColor', 'upload', 'base64'
    ];


    $('.myEditor').trumbowyg({
        btns: btnsCustom
    });
});