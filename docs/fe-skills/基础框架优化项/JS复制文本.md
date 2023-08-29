# JS复制文本

## 安装clipboard插件

```bash
npm i clipboard -S
```

```javascript
import Clipboard from 'clipboard'
export default function copyText(text = '', callback) {
    let _resolve
    // 复制文本到剪切板
    let tempBtn = document.createElement('div')
    let clipboard = new Clipboard(tempBtn, {
        text: () => { return text }
    })
    clipboard.on('success', (e) => {
        clipboard.destroy()
        tempBtn = null
        if (callback) {
            callback()
        } else if (_resolve) {
            _resolve()
        }
    })

    if (!callback) {
        return new Promise(resolve => {
            _resolve = resolve
            tempBtn.click()
        })
    } else {
        tempBtn.click()
    }
}

```

