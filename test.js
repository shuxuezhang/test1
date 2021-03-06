//test2
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
 * 方法2 git rm <filename> 将暂存区和 工作区的文件一起删除  （如果被修改过 需要 -f）
 *      git rm --cached <filename> 只删除暂存区文件
 *      git rm -f  强行将修改的文件也删除
 *
 * git 重命名
 * git mv index.js index_new.js  将工作区和暂存区 全部更换（rename）
 *
 *
 * git 分支
 * head 永远指向当前分支
 * git branch		查看所有分支  *表示当前使用的分支
 * git branch dev   创建一个dev 分支
 * git checkout dev 切换到某一分支
 * git branch -d dev  删除一个分支 （前提是 不能删除当前正在使用的分支  必须要切换到另一个分支上）
 * git branch -m dev fix  修改分支名称  将dev编程fix
 * git checkout -b dev 创建一个分支 并使用这个创建的分支
 * 合并
 * git merge fix  将fix分支合并到当前分支（master）；
 *
 * git diff  比较工作区与暂存区
 * git diff --staged 比较暂存区 与 版本库
 * git diff fix master 比较两个分支的差异
 * git diff 版本1  版本2 比较两个版本差异
 *
 * git切换分支的时候 如果当前有没有提交的工作区修改  如果和要切换的分支 工作区有冲突 则会出现错误
 * git stash  保存工作区修改  还原到没有修改的时候
 * git stash list  查看stash 的list列表
 * 还原  git stash apply stash{0}   吧之前保存的修改还原到工作区  但不会提交
 *      git stash pop stash{1}  把工作区和暂存区的内容一起还原  并删除这个stash 记录
 *      查看stash 指令  git stash --list
 *
 * git 远程仓库
 * github 创建项目  cd到本地项目然后复制地址 git push https://------ master(要添加上传的分支)
 * 拉到本地： 创建一个文件夹  然后git init(必须先执行这个才可以pull)   然后git pull  https://  master
 * 注意： 如果用ssh 协议  需要在执行ssh-keygen   生成一对公钥和私钥  把公钥放到github（setting中添加）上 就可以访问了
 * 技巧： 可以用git remote 命令 将地址 转换成一个名字  不需要每次push pull 都传地址
 *       git remote add test git@github.com:shuxuezhang/test1.git
 *       git remote -v(查看)
 *
 * 服务器 搭建远程仓库
 *
 *
 */

//如果想要让工作区的内容  恢复到上个版本  可以先git reset head   然后 git checkout
//git rest --hard <head/版本号>将工作区 暂存区 都回退
//         --mix              版本库和暂存区回退
//         --soft             只有版本库回退

//










