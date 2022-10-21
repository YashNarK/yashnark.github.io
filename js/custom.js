function slideCarousel(ids,action){
    var len = ids.length;
    var id=null;
    for (var i=0;i<len;i++)
    {
        id=ids[i];
        $('#'+id).carousel(action);
    }
}

function changeBtn()
{
    $("#off").toggleClass("hide");
    $("#on").toggleClass("hide");
}