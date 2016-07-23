jQuery(document).ready(function(){
    if( (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        // You are in mobile browser
        $('#mainCSS').attr('href', 'css/main/mainMobile.css');
    }
});