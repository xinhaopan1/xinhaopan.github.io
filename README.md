# 极简版主页，去除了花里胡哨的东西，直接修改就行
# 修改方法
## 修改主页内容
### 1. 主页中的文字内容在`_pages`文件夹中的`about.md`中编辑
### 2. 修改导航菜单需要修改`_data`文件夹中的`navigation.yml`文件
### 3. 修改左侧内容方法
1. 修改照片，照片名字与`_config.yml`文件中84行`avatar`后的图片名字一样，图片需为正方形存放在`images`文件夹下
2. 修改根目录根目录中的`_config.yml`文件，直接在对应的位置写入链接
3. 如果没有需要的名称  
a. 在`_includes`文件夹中的`author-profile.html`文件内添加对应的行，行中包括名称和图标对应的名字、大小  
b. 图标存放到`images`文件夹下，名字与之对应  
c. 修改根目录根目录中的`_config.yml`文件，写下名称和链接

## 修改其它页
修改`_pages`文件夹中的`education.md`、`publications.md`、`programs.md`、`honors.md`、`practice.md`、`techinical.md`对应文件。

## 修改脚注
### 1. 修改更新时间
修改`_includes\footer`文件夹中的`custom.html`中的时间。
