function run(a, b) {
    var result = "";
    for (var i = 0; i < 4; i++ ){
            if (a.substring(i, i+1) == b.substring(i, i+1)){
                result = result + "x";
            } else {
                if(b.includes(a.substring(i, i+1))){
                    result = result + "-";
                }
            }
     }  
                   
    return result
}

module.exports.run = run;
