# vscode开发中格式化问题解决

vscode 的设置分为用户设置，和单独的工作区设置

- **用户设置** 针对所有项目生效
- **工作区设置** 只针对当前项目生效，在当前项目里创建 .vscode/settings.json 文件 并提交到代码仓库里的，为了协同开发需要

配置vscode 自动保存代码+自动格式化，并选择以哪种方式进行格式化操作（包括 eslint , perttier ...）\

`settings.json`
```json
{
  "files.autoSave": "onFocusChange",
  "editor.defaultFormatter": "esbenp.prettier-vscode", // 设置默认的格式化方式
  "editor.formatOnSave": true
}
```

![](~@public/fe-skills/0001.png)
