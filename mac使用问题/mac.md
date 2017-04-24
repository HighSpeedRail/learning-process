# Mac 使用中问题

### git 中出现 'permission to user_A denied to user_B

解决方案：

* [第一种](http://stackoverflow.com/questions/5335197/gits-famous-error-permission-to-git-denied-to-user)：
        打开 'Keychain Access.app' (可通过Spotlight或LaunchPad中进入)；
        在类别中选择'所有项目'；
        搜索 'git'；
        删除异常项目后再次尝试推送


* [第二种](http://www.jianshu.com/p/12badb7e6c10)：
        新建一个公钥，通过配置 config 文件用于不同项目

* 第三种：弄一台新电脑，通过该电脑连接项目库

### 外接存储设备时里面的文件灰色不能进行操作

[解决方案](http://www.jianshu.com/p/3782d73cb3e8)：

在当前目录下通过终端输入

> xattr -c \*.\*

第一个是文件名，第二个 \* 可以是某一个类型的后缀名

### 顶部快捷键和 F + 数字键功能切换

设置 - 键盘 - 键盘 - 勾选（将 F1、F2等键以使用印在各个按键上的特殊功能）

### caps lock 键不能锁定大写

设置 - 键盘 - 输入法 - 勾选（使用大写锁定键切换"ABC"输入模式）

### 设置右键文件夹出现新建位于文件夹位置的终端窗口

设置 - 键盘 - 快捷键 - 服务 - 勾选（新建位于文件夹位置的终端窗口）

### 最简单的翻墙方式

自动代理配置 url为： https://raw.githubusercontent.com/bannedbook/fanqiang/master/ios/ios.pac

### 查看IP地址

* 在终端中输入 ifconfig 查看

* 设置 - 网络 - 高级 - 　TCP/IP

### Mac 访问windows共享文件夹

* 打开 finder，然后 command + K 打开连接服务器对话框，服务器地址：smb:// + IP地址，后续可能需要输入用户名及密码来登录进去

* 以后可以通过网络窗口找到之前添加过的windows资源，然后用组合键 shift + command + K 打开该窗口即可。