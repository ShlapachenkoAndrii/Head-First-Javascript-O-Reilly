//note, that chrome cant create cookies on local website 
function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}


function getCookie(name) {
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for(var i=0;i < cookies.length;i++) {
        var c = cookies[i];
        while (c.charAt(0)==' ') 
            c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0) 
            return c.substring(searchName.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}