## 1、背景

给一台闲置的旧电脑（win7）重装win10系统，

我要对旧电脑进行重新分区， 重要文件要备份，不要忘记了！

安装系统过程建议断网安装

## 2、制作微PE工具箱

### 2.1、工具：

1.  一个容量大于8G的U盘，（iso镜像文件5G）

2.  一台接入互联网的电脑

3.  需要下载`微PE工具箱`、`win10 iso镜像`

注意： u盘里面的东西先备份清空，制作好微PE工具箱之后，也可以往u盘里面存放东西

### 2.2、步骤：

### 1、下载`微PE工具箱`

1.  把u盘插入到台式电脑后面板usb接口上（不要插在前面板或者延长线上，可能会出现传输不完全问题）

笔记本电脑随便找一个usb接口插入就可以

2.  浏览器进入微PE工具箱

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/7c730549a630458cb61ce65bf9af884a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=vPEEFiL3dHbzhx3ayRVVbwBzPDQ%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/4076e091823b4a06a3ab327928fa8bc5~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=qyI%2FZxS7IrRky8dJ5YaMP9id9J4%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/79bd7dfc56f04b939ee01a4fe0da02c6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=6qH3K0W90%2FkKHIN%2BfIJn%2BzNHXwU%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/13d0571d5bfd466a9892294f0bccc567~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=QdmplF8jPPlvBNdE%2BEkWyKGGtQU%3D)

3.  把exe文件下载到电脑里，双击运行，安装到U盘

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/4ba1e611aa5b4fecbe5ab091d1632d35~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=Z0gS8NqDkpSuLTy4pmQqRh6PHI0%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/57b346427eac4011b52340e835f1cf10~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=9AcY4qFYC4QOk2It5nK5PdLP4YE%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b268d9cb3f6f492bbc949a97643a5da3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=pg9h%2FF5OCukBt5TzlZez%2BrG%2FuJs%3D)

安装完成之后，可以发现U盘被分成了两个磁盘，一个是EFI（有些电脑上直接隐藏了），另一个是空磁盘（存放win10 iso文件，平常可以当作u盘正常使用）

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/96802f8002cb4db5bc7575789018b54f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=T%2FRki5%2FnnE57uYIKIl64LkV8Oto%3D)

### 2、MSDN 上下载win10 iso镜像

这里我下载的是`1909 商用版`，

复制`ed2k`连接，使用迅lei下载

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/5d8987fe998c40e2aeea28cf136af7e5~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=X3%2FQsekt4aoCw%2B%2FzH38PCV3Vreo%3D)

下载完成之后，也可以使用`iHasher`工具校验下载下来的文件`SAH值`是否跟上图中的一致，用来检验文件下载过程是否有顺坏等情况。当然也可以不进行校验。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b8006c79b8e04e36904ba57c952c5613~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=wvydShoDDYu2DICkiJuRYp6ZKvA%3D)

把下载下来的文件复制到U盘的空磁盘里面。也可以在进行一次`SAH值`校验

到此为止，微PE工具箱已经制作完成。

## 3、旧电脑重装系统

### 步骤

#### 3.1、进入BIOS界面，更改启动项为U盘

不同的电脑进入`BIOS`界面的方式不一样，请自行到电脑官网查询，我的是dell笔记本电脑

插入U盘，按开机按钮，然后连续按`F2`按键，过一会就会进入到`BIOS`界面。

切换到`ROOT`选项卡，把开机启动项设置成U盘（U盘里面有微PE：一个精简版的操作系统，借助它来安装win10系统）

*   Legacy对应MBR

*   UEFI对应GPT

windows只能安装到GPT磁盘内

**U盘格式：**

*   FAT32（单个分区不能超过32G,单个文件不能超过4G）

*   exFAT

*   NTFS（老旧主板和老旧电脑无法识别）

这里使用的是`UEFI`

设置完U盘作为启动项之后，点击`F10`（保存并重启）

#### 3.2、重启之后就会进入微PE系统界面

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/dfa9b3ee05e049c8a5ea992735923c6c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=jSy6e4rDtH8nBXebsNNNcemg0uw%3D)

这里说明一下，我的旧电脑原先运行的win7系统，已经有分区了，在重要文件备份完成之后，我采用微PE里自带的分区工具对旧电脑进行重新分区。

#### 3.3、分区工具对旧电脑重新分区，并修改分区表类型

打开分区工具，在左侧可以看到电脑磁盘分区，和u盘分区

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1a5b2a8ead734cc1aa98f5b6200a471c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=6%2BURnbIbFKPV8%2FBxNPvSn%2B3gMxo%3D)

在电脑磁盘上右键，选择清除所有分区，并点击左上角保存

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/a8b7615045024b0982bdd8139320310a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=9jpIitKAYi%2BceCMWSYKXMBhal8s%3D)

在右侧修改分区表类型，把`MBR`格式修改成`GUID`格式

> 也可以通过命令形式修改格式:
>
> cmd 进入黑窗口，输入diskpart 回车，
>
> list disk // 列出磁盘
>
> select  disk 0 // 选择磁盘
>
> clean // 清除磁盘
>
> convert gpt // 转换GPT格式

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/caecb4c8cde947dc912568fa0f1f9d42~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=4HSE9hHv2Hz8ZHwijd9TjVkv6rk%3D)

可以看到现在分区表类型变成`GPT`格式了

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6f513514f69c43ee87a696b34fa41e0e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=r540TDmSzfXOF0Eb24Yqceyrv7Y%3D)

右键电脑磁盘，分区，这里我选择自定义两个分区（系统盘C（100G），软件盘D）,点击确定

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/ecd2cc45e5de4cc188640d8363ea4424~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=ERZSBT4BbYnRsXol3SSpz1tVBz4%3D)

等待分区助手运作一会，就可以看到分区啦

到此，新的分区已经完成，接着安装win10系统

#### 3.4、安装win10系统

**步骤**

1.  打开我的电脑，点击`微PE工具箱`，

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c0f4abc031e14979833e2ea5406c0177~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=9fUmy78NKJhg1aHWaV4qTTb%2BLiA%3D)

2.  找到下载的`iso`文件，右键装载。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/dec3936c52f5429da897e8dc013972d0~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=Q42t684tRYkVXRFyWX0EVtdV3vo%3D)

3.  双击 `setup` 文件，安装`win10`系统，选择`win10`专业版

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/5925fc59bf04419687f07093461073c6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=XhPwt80dhMhyTxfb2MwRp5qTVLY%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/276d62bae0b647979e7d548a72d7f9c5~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=VZAiQrJ%2F29ExdSbq5yAm%2F60O9gE%3D)

4.  把`win10`系统安装到刚刚分好区的系统盘C盘里面，点击下一步，等待安装

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/69ea561c542a4aec9a4adca6ff7cadaf~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=NTzGz6wt91WdsRN2AnD09Kwz4fM%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/71caabf7113141fbb3559f719cf0fa27~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=Zlg0D2QlJjtFdtp1Gc9bzCoveaA%3D)

> 注意：安装过程有点慢，需要耐心等待一下，不要远离，安装完成之后，在系统重启之前的10s内拔掉u盘，以免重启之后又以u盘为启动项再次进入微PE界面。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/9fa285c8cb234c9697b2eaf0dc85527c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=Aixo%2FyB6sFthp0nAb94M9yy6Efc%3D)

然后进行一些微软操作系统的设置，就进入电脑主界面啦

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/47e2db131f5145668ca0e1195720e131~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=ZSWOLQCvZqCI8YF4Cj0U7wPS1sA%3D)

右键，个性化里面，叫出我的电脑

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/3fda6f4c7df04b4e86be2e0f3d135adf~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=TZeYJFr7VibtZmBTwFzouArIsgI%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b5b801a5865242aa93f36bc9c9b4c307~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sc54K5Y2M=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiODUyODc2NzU1MjEyODE0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1741765277&x-orig-sign=PAaBZxWJNKKA2O6%2BljIgAqW7ijg%3D)

大功告成!

**后续**

安装360安全卫士，更新驱动，安装软件（建议不要默认安装到C盘，任何软件都自定义安装到个人喜欢存放的其它路径，建议软件归类整理）
