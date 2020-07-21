var upper=(str,si,li)=>{
    var str1=str.substring(0,si);
    var str2=str.substring(si,li).toUpperCase();
    var str3=str.substring(li,str.length);
    return str1+str2+str3;
}
var lower=(str,si,li)=>{
    var str1=str.substring(0,si);
    var str2=str.substring(si,li).toLowerCase();
    var str3=str.substring(li,str.length);
    return str1+str2+str3;
}

module.exports={upper,lower}

