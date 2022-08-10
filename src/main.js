import string from "./css.js";

const player = {
    id : undefined,
    time : 100,
    ui : {
        demo : document.querySelector('#demo'),
        demo2 : document.querySelector('#demo2')
    },
    events : {
        '#btnPause' : 'pause',
        '#btnPlay' : 'play',
        '#btnSlow' : 'slow',
        '#btnNormal' : 'normal',
        '#btnFast' : 'fast'
    },
    n : 1,
    init : () => {
        player.ui.demo.innerText = string.substring(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents : () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run : () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substring(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play : () => {
        window.clearInterval(player.id)
        player.id = setInterval(player.run, player.time)
        console.log('这下播放了')
    },
    pause : () => {
        window.clearInterval(player.id)
        console.log('这下暂停了')
    },
    slow : () => {
        player.pause()
        player.time = 300
        player.play()
        console.log('这下慢速了')
    },
    normal : () => {
        player.pause()
        player.time = 150
        player.play()
        console.log('这下中速了')
    },
    fast : () => {
        player.pause()
        player.time = 0
        player.play()
        console.log('这下快速了')
    }
}

player.init()

// TODO : 解决无法快速播放的bug