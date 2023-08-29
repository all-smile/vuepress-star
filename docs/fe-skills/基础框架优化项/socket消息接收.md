# socket消息接收

```javascript
// socket连接

import io from 'socket.io-client'
import { getToken } from './utils'
import { socketUrl, accessToken as accessTokenKey } from './config'

/* connect status  enum */
const socketStatus = (function (status) {
    status[status['notconnect'] = 0] = 'notconnect'
    status[status['connecting'] = 1] = 'connecting'
    status[status['reconnecting'] = 2] = 'reconnecting'
    status[status['success'] = 3] = 'success'
    status[status['failed'] = -1] = 'failed'
    return status
}({}))

/* singleton  socket object */
const mySocket = (function () {
    /* const field */
    const SERVER_DISCONNECT = 'io server disconnect'
    const CLIENT_DISCONNECT = 'io client disconnect'
    const MAX_CONNECT_COUNT = 60

    function _mySocket() {
        this.connectCount = 0 // 定时重连的次数
        this._listeners = {}
        this.socket = null
        this.isClosed = false
        this.connectTimer = null
        this._initStatus()
    }

    _mySocket.prototype._initStatus = function () {
        let value = socketStatus.notconnect
        Object.defineProperty(_mySocket.prototype, 'status', {
            get: () => value,
            set: (newVal) => {
                if (newVal !== value) {
                    value = newVal

                    if (value === socketStatus.success) {
                        this.connectCount = 0
                    }
                    this._dispatch('statusChange', value)
                }
            },
            enumerable: true,
            configurable: true
        })

        window.addEventListener('online', () => {
            this.reconnect()
        })
    }

    _mySocket.prototype.getStatus = function () {
        return this.status
    }

    _mySocket.prototype.connect = function () {
        if (!getToken()[accessTokenKey]) {
            return
        }
        this.isClosed = false

        this.socket = io(socketUrl, {
            reconnectionDelay: 50000
        })
        this._ListenerSocket()
    }

    /* 外部重连 */
    _mySocket.prototype.reconnect = function () {
        if (this.isClosed || this.status !== socketStatus.failed) { return }
        this.connectCount = 0
        this._reconnect(this.status, true)
    }
    /**
     * @param  status  socketStatus
     */
    _mySocket.prototype._reconnect = function (status, isManually = false) {
        if (this.isClosed) { return }

        if (this.connectCount > MAX_CONNECT_COUNT) {
            this.status = status
            return
        }

        this.status = socketStatus.reconnecting

        this.connectCount++

        let duration = isManually
            ? 0
            : (5 + this.connectCount < 10 ? 0 : Math.ceil(this.connectCount / 10)) * 1000

        if (this.connectTimer) {
            clearTimeout(this.connectTimer)
        }

        this.connectTimer = setTimeout(() => {
            this.socket.connect()
        }, duration)
    }

    _mySocket.prototype.on = function (type, fn, ctx = this) {
        if (!this._listeners[type]) {
            this._listeners[type] = []
        }
        this._listeners[type].push([fn, ctx])
    }

    _mySocket.prototype.close = function () {
        console.log('socket2 🔊:', 'close')

        this.isClosed = true
        this.status = socketStatus.notconnect
        if (this.connectTimer) {
            clearTimeout(this.connectTimer)
            this.connectTimer = null
        }
        this.socket.close()
    }
    _mySocket.prototype.destroy = function (removeListerner = true) {
        if (!this.isClosed) {
            this.close()
        }
        if (removeListerner) {
            this._listeners = {}
        }
        this.socket && this.socket.destroy()
        this.socket = null
    }

    _mySocket.prototype._dispatch = function (type) {
        let events = this._listeners[type]

        if (!events) { return }
        let len = events.length
        let copyEvents = [...events]
        for (let index = 0; index < len; index++) {
            const event = copyEvents[index]
            let [fn, ctx] = event
            if (fn) {
                fn.apply(ctx, [].slice.call(arguments, 1))
            }
        }
    }

    _mySocket.prototype._login = function () {
        const jsonObject = {
            messageType: 'L01',
            accessToken: getToken()[accessTokenKey],
            sourceId: 'pc',
            body: '消息主体'
        }
        this.socket.emit('loginEvent', JSON.stringify(jsonObject))
    }

    _mySocket.prototype._ListenerSocket = function () {
        // 连接中
        this.socket.on('connecting', () => {
            console.log('socket2 🔊:', 'connecting')
            this.status = socketStatus.connecting
        })

        // 连接成功
        this.socket.on('connect', () => {
            console.log('socket2 🔊:', 'connect')
            this.status = socketStatus.success
            this._login()
        })

        // 连接错误
        this.socket.on('connect_error', (err) => {
            console.log('socket2 🔊:', 'connect_error')
            this._reconnect(socketStatus.failed)
        })

        // 连接超时
        this.socket.on('connect_timeout', () => {
            console.log('socket2 🔊:', 'connect_timeout')
            this._reconnect(socketStatus.failed)
        })
        /*  =============== custom event ================  */
        this.socket.on('loginSuccess', () => {
            console.log('socket2 🔊:', 'socket登录成功')
        })

        // 弹出效果
        this.socket.on('weather', data => {
            let thisWeather = JSON.stringify(data)
            if (thisWeather != this._prevWeather) {
                this._prevWeather = thisWeather
                this._dispatch('weather', data)
            }
        })
        // 消息推送
        this.socket.on('messageStats', data => {
            this._dispatch('messageStats', data)
        })

        // 邮件事件
        this.socket.on('mailEvent', data => {
            console.log('邮件事件')
            this._dispatch('mailEvent', data)
        })
        // 踢掉
        this.socket.on('offsiteLogin', data => {
            console.log('socket2 🔊:', '被踢掉:offsiteLogin')
            //  this.status = socketStatus.notconnect
            this.close()
            // 退出登陆
            this._dispatch('offsiteLogin')
        })
        /*  =============== custom event end ================  */

        // 重连中
        this.socket.on('reconnecting', () => {
            console.log('socket2 🔊:', 'reconnecting')
            this.status = socketStatus.reconnecting
        })

        // 重连成功
        this.socket.on('reconnect', () => {
            console.log('socket2 🔊:', 'reconnect')
            this.status = socketStatus.success
        })

        // 重连出错
        this.socket.on('reconnect_error', () => {
            console.log('socket2 🔊:', 'reconnect_error')
            this._reconnect(socketStatus.failed)
        })

        // 重连失败
        this.socket.on('reconnect_failed', () => {
            console.log('socket2 🔊:', 'reconnect_failed')
            this._reconnect(socketStatus.failed)
        })

        // 断开
        this.socket.on('disconnect', reason => {
            console.log('socket2 🔊:', `disconnect:reason==>${reason}`)
            if (reason === CLIENT_DISCONNECT) {
                this.socket.close()
                return
            }
            if (reason === SERVER_DISCONNECT) {
                this._reconnect(socketStatus.failed)
                return
            }
            this._reconnect(socketStatus.failed)
        })

        // 连接错误
        this.socket.on('error', (err) => {
            console.log('socket2 🔊:', 'error')
            this._reconnect(socketStatus.failed)
        })
    }
    return new _mySocket()
}())

export {
    socketStatus,
    mySocket
}

```
## socket.io-client库
![image.png](~@public/fe-skills/0013.png)


