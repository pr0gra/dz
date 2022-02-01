function truncate(str, maxlength) {
    if (str.length > maxlength){
    str = str.slice(0, maxlength - 1) + '…' ;
        if ((str.maxlength-1)=="," || (str.maxlength-1)=="." || (str.maxlength-1)==":" || (str.maxlength-1)==";") {
            str = str.slice(0, maxlength - 1) + '…' ;
            return str;
        }
        else {
            return str;
        }
    }
    else{ return str;}
  }

let str = "1234,567"

alert(truncate(str, 6));