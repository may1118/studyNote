# git文档第二弹

[TOC]

## 快速入门

### 创建远程仓库

在GitHub或者GitLab中创建远程仓库

### 获取git仓库

#### 克隆所有仓库

```shell
$ git clone [url]
```

#### 初始化仓库

```shell
$ git init
```

#### 将工作区代码提交到暂存区

开始跟踪以跟踪文件，并且处于暂存状态

```shell
$ git add .
```

#### 将暂存区代码提交到本地仓库

```shell
$ git commit -m 'msg'
```

#### 查看当前文件状态

```shell
$ git status
```

上述命令输出得非常详细，如果像得到更为紧凑的格式输出

```shell
$ git status -s
$ git status --short
$ git status -s
 M README.md
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```

- M右边：被修改了但是没有放入暂存区
- M左边：被修改了并且放入了暂存区
- A：新添加到暂存区中的文件
- ??：新添加的未跟踪的文件

#### 忽略文件

在目录下创建一个`.gitignore`文件，列出要忽略的文件模式

```shell
*.a #忽略以.a结尾的文件
build/ #忽略build文件夹下所有文件
/TODO # 在目前的文件夹下忽略TODO文件夹
```

#### 跳过使用暂存区

自动把已经追踪过的文件暂存起来一并提交，从而跳过`git add`步骤

```shell
$ git commit -a -m 'xxx'
```

#### 移除文件

从暂存区中移除，并且工作目录中也会删除指定文件

```shell
$ git rm [file]
```

如果只希望从暂存区中移除，仍然希望保留在当前工作目录中

```shell
$ git rm --cached [file]
```

#### 文件重命名

```shell
$ git mv file_from file_to
```

#### 查看提交历史

```shell
$ git log
```

#### 撤销操作

```shell
$ git commit --amend
```

**例如：**最终只有一个提交，第二次提交将替代第一次提交的结果。

```shell
$ git commit -m 'initial commit'
$ git add forgotten_file
$ git commit --amend
```

#### 取消暂存的文件

```shell
$ git reset HEAD [file]
```

### 远程仓库的使用

#### 查看远程仓库

```shell
$ git remote -v
```

与几个协作者合作的，拥有多个远程仓库的仓库

#### 添加远程仓库

```shell
$ git add remote add [shortname] [url]
```

在之后的代码中，可以使用[shortname]代替[url]

#### 从远程仓库中抓起与拉取

```shell
$ git fetch [remote-name]
```

如果使用`clone`命令克隆一个仓库，命令会自动将其添加为远程仓库并**默认**以`origin`为简写。

所以，`git fetch origin`会抓取克隆后新推送的所有工作

#### 推送到远程仓库

```shell
$ git push [remote-name] [branch-name]
```

#### 查看远程仓库

```shell
$ git remote show [remote-name]
```

#### 远程仓库的移除与重命名

```shell
$ git remote rename [] [newname]
```

