$(document).ready(function() {

    var valueSize = $("#iframe").offset();
    var totalsize = (valueSize.top * 2) + valueSize.left;
    $("#iframe").height(totalsize);
    
});