function run(a, b) {
    var result = " ";
    for (var i = 0; i < 4; i++ ){
        for (var j = 0; j < 4; j++){
            if(i == j){
                if (a.substring(i,j) == b.substring(i,j)){
                    result = result + "x";
                }
            }
            if(i != j){
                if(b.includes(a.substring(i,j))){
                    result = result + "-";
                }
            }
        }
    }
    return result
}

module.exports.run = run;
