# commitlint配置

[前面](https://www.yuque.com/allblue-byynd/izub4k/obh3ns)已经完成了 **prettier** 、 **eslint** ，还有**pre-commit**的时候 扫描代码并格式化的功能
接下来就是处理怎样控制commit提交信息规范的问题
## 安装插件
```bash
yarn add @commitlint/cli @commitlint/config-conventional --dev
```
## 配置 commit-msg hooks
```bash
yarn husky add .husky/commit-msg 'yarn commitlint --edit "$1"'

or:
npx husky add .husky/commit-msg 'npx --no commitlint --edit "$1"'
```
效果：
在commit的时候 执行步骤

1. 执行pre-commit 钩子进行代码格式校验
2. 执行 commit-msg 钩子，进行提交信息的校验
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn commitlint --edit $1

```
## 配置commitlint.config.js
```js
const checkType = (header) => {
  header = `${header}`;
  const enumType = ['feat', 'fix', 'style', 'chore', 'test', 'ci', 'refactor', 'revert', 'reformat', 'docs'];
  const realType = header.split(':')[0];
  return enumType.includes(realType);
};

const checkSubject = (header) => {
  header = `${header}`;
  const realSubject = header.split(':')[1];
  if (!realSubject) {
    return false;
  }
  return realSubject.length > 0;
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 'body-leading-blank': [2, 'always'], // body换行
    // 'header-max-length': [2, 'never', 72], // header 最长72
    'type-enum-rule': [2, 'never'],
    'subject-enum-rule': [2, 'never'],
    'type-enum': [0, 'never'],
    'type-empty': [0, 'always'],
    'subject-empty': [0, 'always'],
  },
  plugins: [
    {
      rules: {
        'type-enum-rule': ({ header }) => {
          return [
            checkType(header),
            '需要包含提交类型，格式如: "feat: 开发新功能" 中的feat, ' +
              '可选值有: feat/fix/style/test/chore/ci/..., 类型后面紧跟英文冒号分隔主题信息',
          ];
        },
        'subject-enum-rule': ({ header }) => {
          return [checkSubject(header), '需要包含提交主题, 格式如: "feat: 开发新功能" 中的 开发新功能'];
        },
      },
    },
  ],
};

```
## 测试效果
```bash
git add .
git commit -m 'xxx'
git commit -m 'test:'
git commit -m 'test: 测试'
```
![image.png](~@public/fe-skills/0003.png)
