/**
 * Created by oksanka on 03.11.16.
 */
var array = [2,1,5,0,3,4,7,2,3,1,0];

function waterAfterRain(arr) {
    var height;
    var result = 0;
    var LeftOk, RightOk;
    var left = 0;
    var right = arr.length-1;
    max=Math.max(...arr);

    for (height = 0; height <= max; height++){
        for(var i = 0; i < arr.length; i++){
            if (arr[i] <= height){
                LeftOk = false;
                RightOk =false;
                for(var k = i+1; k <= right; k++){
                    if (height < arr[k]) {
                        LeftOk = true;
                    }
                }
                for(var j = i-1; j >= left; j--){
                    if (height < arr[j]) {
                        RightOk = true;
                    }
                }

                if (LeftOk && RightOk){
                    result += 1;
                }
            }
        }
    }

    return result;
}

console.log(waterAfterRain(array));
