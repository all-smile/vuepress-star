# env[mode]文件中如何添加注释
## 前言

`Vue-Cli` 允许我们在项目根目录创建`.env.[mode]`文件来设置一些打包编译的启动参数，通过执行脚本的时候加`mode`参数，指定不同环境需要加载的配置文件

形如： `.env.prod`

```bash
NODE_ENV='production'
VUE_APP_PATH='./'
VUE_APP_RUNTIME='prod'
```

## 问题

怎么在 `.env.prod` 文件中添加注释呢？

## 分析

这要看`vue`是怎么解析 `.env.prod` 文件的

通过启动脚本参数 `--mode prod`，一路找到了处理 `.env.prod` 文件的逻辑，让我们一块看下

`path：node_modules\@vue\cli-service\lib\Service.js`

```javascript
const dotenv = require('dotenv');

// ...

loadEnv (mode) {
    const logger = debug('vue:env')
    const basePath = path.resolve(this.context, `.env${mode ? `.${mode}` : ``}`)
    const localPath = `${basePath}.local`

    const load = envPath => {
      try {
        const env = dotenv.config({ path: envPath, debug: process.env.DEBUG })
        dotenvExpand(env)
        logger(envPath, env)
      } catch (err) {
        // only ignore error if file is not found
        if (err.toString().indexOf('ENOENT') < 0) {
          error(err)
        }
      }
    }

    load(localPath)
    load(basePath)

    // by default, NODE_ENV and BABEL_ENV are set to "development" unless mode
    // is production or test. However the value in .env files will take higher
    // priority.
    if (mode) {
      // always set NODE_ENV during tests
      // as that is necessary for tests to not be affected by each other
      const shouldForceDefaultEnv = (
        process.env.VUE_CLI_TEST &&
        !process.env.VUE_CLI_TEST_TESTING_ENV
      )
      const defaultNodeEnv = (mode === 'production' || mode === 'test')
        ? mode
        : 'development'
      if (shouldForceDefaultEnv || process.env.NODE_ENV == null) {
        process.env.NODE_ENV = defaultNodeEnv
      }
      if (shouldForceDefaultEnv || process.env.BABEL_ENV == null) {
        process.env.BABEL_ENV = defaultNodeEnv
      }
    }
  }
```

从上面的代码，可以得知，`vue`使用`dotenv`解析`.env.prod` 文件，并将环境变量从 `.env[mode]` 文件中加载到 `process.env` 环境变量中

## 解决（dotenv）

`dotenv`插件已经被 `Vue-Cli` 集成了

[GitHub地址](https://github.com/motdotla/dotenv#rules)

`README.md` 中有这么一段话：

- “# marks the beginning of a comment (unless when the value is wrapped in quotes)”

这就是我们要找的，在`.env.[mode]` 文件中，可以使用 `#` 进行注释

### 使用测试

1. `path: .env.prod` 参数配置

```bash
NODE_ENV='production'
# VUE_APP_PATH='/pc/'
VUE_APP_PATH='./'
VUE_APP_RUNTIME='prod'
```

2. `package.json` 文件脚本命令配置`--mode`参数

```javascript
"scripts": {
    "build": "vue-cli-service build --mode prod",
  },
```

3. 执行 `npm run build` 命令，输出如下：

```bash
NODE_ENV=== production
VUE_APP_PATH=== ./
```

本文到此为止，要想了解更多`dotenv`请自行探索，感谢观看😉

