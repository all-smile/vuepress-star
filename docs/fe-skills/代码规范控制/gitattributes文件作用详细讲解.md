# .gitattributes 文件作用详细讲解

官方文档： [https://git-scm.com/docs/gitattributes](https://git-scm.com/docs/gitattributes)
参考文档： [https://blog.csdn.net/qq_35425070/article/details/106883833](https://blog.csdn.net/qq_35425070/article/details/106883833)
## .gitattributes介绍
.gitattributes 是一个文本文件，文件中的一行定义一个路径的若干个属性，主要用于定义每种文件的属性，以方便 git 帮我们统一管理。
## 文件格式如下
```bash
要匹配的文件模式 属性1 属性2 ...
```
在.gitattributes文件的一行中，一个属性（以text属性为例）可能有4种状态：

1. text ：设置
2. -text ：不设置
3. text=string ：设置值
4. 未声明，通常不出现该属性即可；但是为了覆盖其他文件中的声明，也可以!text
## 文件中可以定义的属性

1. **text**

用于控制行尾的规范性。如果一个文本文件是规范的，则Git库汇总该文件（git 服务器上的文件）的行尾总是LF。对于工作目录，除了text属性之外，还可以设置eol属性或core.eol配置变量。

2. **eol**

设置行末字符。
eol=lf ，[回车] ：入库时将行尾规范为LF，检出时行尾不强制转换为 CRLF
eol=crlf，[换行、回车] ：入库时将行尾规范为LF，检出时将行尾转换为CRLF

| **Windows** | **Linux/Mac** | **Old Mac(pre-OSX)** |
| ----------- | ------------- | -------------------- |
| CRLF        | LF            | CR                   |
| '\\n\\r'    | '\\n'         | '\\r'                |

3. **diff**

我们知道 git 主要是用来跟踪文件版本的，跟踪文件版本自然离不开比较差异，而diff 就是用来告诉 git 声明文件需要比较版本差异的。
diff属性影响Git对特殊文件生成差异的方式。它可以告诉Git是否为路径生成文本补丁还是将路径视为二进制文件。它也可以影响在hunk头部显示的@@ -k,l +n,m @@，告诉Git使用外部命令来生成差异，或者是在生成差异之前让Git将二进制文件转换为文本文件。
diff : 强制视为文本文件，即使它包含一些通常从不会出现在文本文件的字节值，例如NUL。
!diff : 表示为非文本文件，没有设置diff属性的路径会生成differ二进制文件（如果启用了二进制补丁，会生成二进制补丁）。
未定义 : 未指明diff属性的路径首先会检查其内容，如果它看起来像文本文件并且小于大文件阈值（core.bigFileThreshold），则将其视为文本文件，否则将生成differ二进制文件。
> differ 规则
> diff 是使用指定的 diff 驱动程序显示的。每个驱动程序可以指定一个或多个选项。
> 如何自定义一个外部的diff驱动程序？
> diff驱动程序的定义是在gitconfig中完成的，并不是在gitattributes文件中，所以严格来说，这里并不适合谈论它。

## 示例
```bash
*           text=auto
# 文件的行尾自动转换。如果是文本文件，则在文件入Git库时，行尾自动转换为LF。如果已经在入Git库中的文件的行尾是GRLF，则文件在入Git库时，不再转换为LF。

*.txt       text
# 对于.txt文件，标记为文本文件，并进行行尾规范化。

*.jpg       -text
# 对于`.jpg`文件，标记为非文本文件

*.vcproj    text eol=crlf
# 对于.vcproj文件，标记为文本文件，在文件入Git库时进行规范化，行尾转换为LF。在检测到出工作目录时，行尾自动转换为GRLF。

*.sh        text eol=lf
# 对于sh文件，标记为文本文件，在文件入Git库时进行规范化，即行尾为LF。在检出到工作目录时，行尾也不会转换为CRLF（即保持LF）。

*.py        eol=lf
# 对于py文件，只针对工作目录中的文件，行尾为LF。

*.bat       text eol=crlf
# 无格式的文本文件,保证 Windows 的批处理文件在 checkout 至工作区时，始终被转换为 CRLF 风格的换行符；

```
## 使用
### 为新的Git库设置统一的.gitattributes文件：
在仓库的根目录下创建名为 .gitattributes 的文件。
```bash
touch .gitattributes
vi .gitattributes

# 内容
* text=auto eol=lf

# 提交到仓库
git add .
git commit -m "add: 新增.gitattributes配置"
git push
```
### 为已有Git库设置统一的.gitattributes文件（重置 GitAttributes）：
在上一步的基础上（确保仓库根目录下已经存在.gitattributes文件）
```bash
git rm --cached -r
git reset --hard
```
上面的命令就会根据文件 .gitattributes 中的定义，更新文件的结尾行。
任何变更都会自动使用指定文件的文件结尾行格式。
下一步，可以通知团队成员或者协作者去执行 Git 属性重置的命令即可。
### 为所有Git库设置统一的.gitattributes文件：
```bash
git config --get core.attributesFile
git config --global --get core.attributesFile
```
