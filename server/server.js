//server/server.js

var express = require('express');
var app = express();

var x, y;
var num = 0;
var r = 0;
var s = 0;
var arr5 = Array();
var arr6 = Array();
var arr7 = Array();
var arr8 = Array();
var arr9 = Array();
var arr10 = Array();
var arr11 = Array();
var arr12 = Array();
const uniqueArray = (arr) => {
    var a = [];
    for (var i=0, l=arr.length; i<l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    
    return a;
}
const func = (str) => {
	var arr2 = Array();
	var arr3 = Array();
	
	if(+str.substr(0, 1) % 3 === 1){
		arr2.push(+str.substr(0, 1) + 1);
		arr2.push(+str.substr(0, 1) + 2)
	}else if(+str.substr(0, 1) % 3 === 2){
		arr2.push(+str.substr(0, 1) - 1);
		arr2.push(+str.substr(0, 1) + 1)
	}else if(+str.substr(0, 1) % 3 === 0){
		arr2.push(+str.substr(0, 1) - 1);
		arr2.push(+str.substr(0, 1) - 2)
	}

	if(+str.substr(1, 2) % 3 === 1){
		arr3.push(+str.substr(1, 2) + 1);
		arr3.push(+str.substr(1, 2) + 2)
	}else if(+str.substr(1, 2) % 3 === 2){
		arr3.push(+str.substr(1, 2) - 1);
		arr3.push(+str.substr(1, 2) + 1)
	}else if(+str.substr(1, 2) % 3 === 0){
		arr3.push(+str.substr(1, 2) - 1);
		arr3.push(+str.substr(1, 2) - 2)
	}

	return [
		arr2[0].toString() + arr3[0].toString(),
	 	arr2[0].toString() + arr3[1].toString(),
	 	arr2[1].toString() + arr3[0].toString(),
	 	arr2[1].toString() + arr3[1].toString()
	]
}


const func2 = (arr) => {
	var result = Array();
	var i, j, k, l, m, n, o, p, q;
	for (i = 0; i < arr[0].length; i = i + 1) {
	  	for(j = 0; j < arr[1].length; j = j + 1){
	  		for(k = 0; k < arr[2].length; k = k + 1){
	  			for(l = 0; l < arr[3].length; l = l + 1){
	  				for(m = 0; m < arr[4].length; m = m + 1){
	  					for(n = 0; n < arr[5].length; n = n + 1){
				  			for(o = 0; o < arr[6].length; o = o + 1){
				  				for(p = 0; p < arr[7].length; p = p + 1){
				  					for(q = 0; q < arr[8].length; q = q + 1){
				  						if (uniqueArray([
				  							arr[0][i],
				  							arr[1][j],
				  							arr[2][k],
				  							arr[3][l],
				  							arr[4][m],
				  							arr[5][n],
				  							arr[6][o],
				  							arr[7][p],
				  							arr[8][q]
				  						]).length === 9){result.push([
							  							arr[0][i],
							  							arr[1][j],
							  							arr[2][k],
							  							arr[3][l],
							  							arr[4][m],
							  							arr[5][n],
							  							arr[6][o],
							  							arr[7][p],
							  							arr[8][q]
				  										])
				  						}
				  					}
				  				}
				  			}
				  		}
	  				}
	  			}
	  		}
	  	}
	}
	return result
}


var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var obj = {
	11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 2, 17: 0, 18: 0, 19: 0,
	21: 7, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 1, 28: 0, 29: 0,
	31: 2, 32: 0, 33: 0, 34: 0, 35: 0, 36: 4, 37: 0, 38: 3, 39: 0,
	41: 0, 42: 6, 43: 8, 44: 0, 45: 0, 46: 0, 47: 9, 48: 0, 49: 0,
	51: 3, 52: 0, 53: 0, 54: 0, 55: 1, 56: 0, 57: 6, 58: 8, 59: 0,
	61: 0, 62: 0, 63: 0, 64: 0, 65: 0, 66: 3, 67: 0, 68: 5, 69: 0,
	71: 0, 72: 5, 73: 0, 74: 0, 75: 0, 76: 9, 77: 7, 78: 0, 79: 6,
	81: 0, 82: 2, 83: 0, 84: 0, 85: 7, 86: 0, 87: 0, 88: 0, 89: 0,
	91: 0, 92: 0, 93: 3, 94: 0, 95: 0, 96: 0, 97: 0, 98: 9, 99: 0 
}

const ranInsRow = (obj, row) => {
	var result = Array();
	var arr4 = Array();
	var arr = Array();
	var i;
	for (x in obj) {
		if(x.substr(0 , 1) === row){
			if(obj[x] === 0){
				for(y in obj){
					if(obj[y] > 0){
						if(y.substr(0, 1) === x.substr(0, 1)){
							if(arr.indexOf(obj[y]) === -1) arr.push(obj[y]);
						}
						if(y.substr(1, 2) === x.substr(1, 2)){
							if(arr.indexOf(obj[y]) === -1) arr.push(obj[y]);
						}
						if(func(x).indexOf(y) > -1) arr.push(obj[y])
					}
				}
				for (i = 1; i < number.length + 1; i = i + 1) {
				  	if(arr.indexOf(i) === -1){
				  		arr4.push(i)
				  	}
				}
				if(arr4.length > 0){
					result.push(arr4)
				}else {
					return null
				}
				
				arr = [];
				arr4 = [];


			}else {
				result.push([obj[x]])
				
			}
		}

	}

	return result
}




const func6 = (arr) => {
	var i, j;
	var arr3 = Array();
	if(arr.length % 3 === 1){
		for(i = 0; i < 9; i = i + 1){
			for(j = 0; j < arr.length; j = j + 1){
				arr3.push(arr[j][i])
			}
			if(uniqueArray(arr3).length < arr.length){
				return null
			}
			arr3 = [];
		}
		return 1
	}else if(arr.length % 3 === 2){
		for(i = 0; i < 9; i = i + 1){
			for(j = 0; j < arr.length; j = j + 1){
				arr3.push(arr[j][i])
			}
			if(uniqueArray(arr3).length < arr.length){
				return null
			}
			arr3 = [];
		}

		if(uniqueArray([arr[arr.length - 2][0],
		 				arr[arr.length - 2][1],
		  				arr[arr.length - 2][2],
		   				arr[arr.length - 1][0],
		    			arr[arr.length - 1][1],
		     			arr[arr.length - 1][2]]).length < 6) return null
		if(uniqueArray([arr[arr.length - 2][3],
	 					arr[arr.length - 2][4],
	  					arr[arr.length - 2][5],
	   					arr[arr.length - 1][3],
	    				arr[arr.length - 1][4],
	     				arr[arr.length - 1][5]]).length < 6) return null
		if(uniqueArray([arr[arr.length - 2][6],
	 					arr[arr.length - 2][7],
	  					arr[arr.length - 2][8],
	   					arr[arr.length - 1][6],
	    				arr[arr.length - 1][7],
	     				arr[arr.length - 1][8]]).length < 6) return null

		return 1
	}else {
		for(i = 0; i < 9; i = i + 1){
			for(j = 0; j < arr.length; j = j + 1){
				arr3.push(arr[j][i])
			}
			if(uniqueArray(arr3).length < arr.length){
				return null
			}
			arr3 = [];
		}

		if(uniqueArray([arr[arr.length - 3][0],
		 				arr[arr.length - 3][1],
		  				arr[arr.length - 3][2],
		   				arr[arr.length - 2][0],
		    			arr[arr.length - 2][1],
		     			arr[arr.length - 2][2],
		     			arr[arr.length - 1][0],
		     			arr[arr.length - 1][1],
		     			arr[arr.length - 1][2]]).length < 9) return null
		if(uniqueArray([arr[arr.length - 3][3],
	 					arr[arr.length - 3][4],
	  					arr[arr.length - 3][5],
	   					arr[arr.length - 2][3],
	    				arr[arr.length - 2][4],
	     				arr[arr.length - 2][5],
	     				arr[arr.length - 1][3],
	    				arr[arr.length - 1][4],
	     				arr[arr.length - 1][5]]).length < 9) return null
		if(uniqueArray([arr[arr.length - 3][6],
	 					arr[arr.length - 3][7],
	  					arr[arr.length - 3][8],
	   					arr[arr.length - 2][6],
	    				arr[arr.length - 2][7],
	     				arr[arr.length - 2][8],
	     				arr[arr.length - 1][6],
	    				arr[arr.length - 1][7],
	     				arr[arr.length - 1][8]]).length < 9) return null

		return 1
	}
	
}


var row = func2(ranInsRow(obj, '1'));
var row2 = func2(ranInsRow(obj, '2'));
var row3 = func2(ranInsRow(obj, '3'));
var row4 = func2(ranInsRow(obj, '4'));
var row5 = func2(ranInsRow(obj, '5'));
var row6 = func2(ranInsRow(obj, '6'));
var row7 = func2(ranInsRow(obj, '7'));
var row8 = func2(ranInsRow(obj, '8'));
var row9 = func2(ranInsRow(obj, '9'));


for(r = 0; r < row.length; r = r + 1){
	for(s = 0; s < row2.length; s = s + 1){

		if(func6([row[r], row2[s]]) === 1){
			arr5.push([r, s]);
		}
	}
}


for(r = 0; r < arr5.length; r = r + 1){
	for(s = 0; s < row3.length; s = s + 1){
		if(func6([row[arr5[r][0]], row2[arr5[r][1]], row3[s]]) === 1){
			arr6.push([arr5[r][0], arr5[r][1], s]);
		}
	}
}

for(r = 0; r < arr6.length; r = r + 1){
	for(s = 0; s < row4.length; s = s + 1){
		if(func6([row[arr6[r][0]], row2[arr6[r][1]], row3[arr6[r][2]], row4[s]]) === 1){
			arr7.push([arr6[r][0], arr6[r][1], arr6[r][2], s]);
		}
	}
}


for(r = 0; r < arr7.length; r = r + 1){
	for(s = 0; s < row5.length; s = s + 1){
		if(func6([row[arr7[r][0]], row2[arr7[r][1]], row3[arr7[r][2]], row4[arr7[r][3]], row5[s]]) === 1){
			arr8.push([arr7[r][0], arr7[r][1], arr7[r][2], arr7[r][3], s]);
		}
	}
}

for(r = 0; r < arr8.length; r = r + 1){
	for(s = 0; s < row6.length; s = s + 1){
		if(func6([row[arr8[r][0]], row2[arr8[r][1]], row3[arr8[r][2]], row4[arr8[r][3]], row5[arr8[r][4]], row6[s]]) === 1){
			arr9.push([arr8[r][0], arr8[r][1], arr8[r][2], arr8[r][3], arr8[r][4], s]);
		}
	}
}


for(r = 0; r < arr9.length; r = r + 1){
	for(s = 0; s < row7.length; s = s + 1){
		if(func6([row[arr9[r][0]], row2[arr9[r][1]], row3[arr9[r][2]], row4[arr9[r][3]], row5[arr9[r][4]], row6[arr9[r][5]], row7[s]]) === 1){
			arr10.push([arr9[r][0], arr9[r][1], arr9[r][2], arr9[r][3], arr9[r][4], arr9[r][5], s]);
		}
	}
}


for(r = 0; r < arr10.length; r = r + 1){
	for(s = 0; s < row8.length; s = s + 1){
		if(func6([row[arr10[r][0]], row2[arr10[r][1]], row3[arr10[r][2]], row4[arr10[r][3]], row5[arr10[r][4]], row6[arr10[r][5]], row7[arr10[r][6]], row8[s]]) === 1){
			arr11.push([arr10[r][0], arr10[r][1], arr10[r][2], arr10[r][3], arr10[r][4], arr10[r][5], arr10[r][6], s]);
		}
	}
}


for(r = 0; r < arr11.length; r = r + 1){
	for(s = 0; s < row9.length; s = s + 1){
		if(func6([row[arr11[r][0]], row2[arr11[r][1]], row3[arr11[r][2]], row4[arr11[r][3]], row5[arr11[r][4]], row6[arr11[r][5]], row7[arr11[r][6]], row8[arr11[r][7]], row9[s]]) === 1){
			arr12.push([arr11[r][0], arr11[r][1], arr11[r][2], arr11[r][3], arr11[r][4], arr11[r][5], arr11[r][6], arr11[r][7], s]);
		}
	}
}



var arrRe = Array();

for (r = 0; r < arr12.length; r = r + 1){
	arrRe = arr12[r]
}


console.log([ row[arrRe[0]],
				row2[arrRe[1]],
				row3[arrRe[2]],
				row4[arrRe[3]],
				row5[arrRe[4]],
				row6[arrRe[5]],
				row7[arrRe[6]],
				row8[arrRe[7]],
				row9[arrRe[8]]

			])



module.exports=app;