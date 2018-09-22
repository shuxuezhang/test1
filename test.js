
let  array = [['hello', 'bill'],['hello','jack'], ['world','foo','jerry'],['world','foo','pretter','tom']];

let json = [];
let maps = new Map();
let father_arr = [];
for (let i = 0 ; i<4; i++ ){
	
	let data = new Map();
	for(let j = 0; j<array.length; j++){
		let father;
		let name;
		let arr = array[j];
		// console.log(arr)
		if(i < arr.length){
			name = arr[i];
			console.log(name)
			if(i == 0){
				father = null
			}else{
				father = arr[i-1];
			}
		}
		if(name){
			data.set(name,father);
		}
		
	}

	maps.set(i, data);	
}

console.log(maps.keys().length);
let tree = [];
for(let i = 0 ;i<maps.keys().length; i++){
	if(i == 0){
		let data = '';
	}
}

// 第一版本

















