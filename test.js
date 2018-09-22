
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


/**
 * git 的4种状态  untracked未被追踪的  Modified工作区修改 还没有保存到暂存区
 *               staged：添加到暂存区还没有到版本库
 *
 * git status 状态查询
 * git log --oneline
 * git add   放到暂存区   git add .  一次提交所有的内容
 * git commit -m 提交暂存区内容到版本库
 * git commit -am 合并上面两个操作
 * git commit --amend 打补丁（撤销上一次的提交，并将暂存区的内容重新提交， 也可以用来修改描述）
 *                    可以先git add 然后 git commit --amend
 * git checkout <文件名> 拉取暂存区的内容 替换工作区的内容
 * git reset Head 拉取最近一次版本库中的文件替换到暂存区  工作区不变
 * git diff 比较工作区 与 暂存区的差别
 *
 *
 * git删除
 * 方法1 在本地删除  然后 git add . 提交删除操作  git commit
 * 方法2 git rm --cached <filename> 只删除暂存区文件 
 *      git rm -f  强行将修改的文件也删除
 */

//如果想要让工作区的内容  恢复到上个版本  可以先git reset head   然后 git checkout












