# JoinNow
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/HanGee/joinNow?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

現在就加入完成這個 [HanGee 黑客松](http://hackathon.tw/) 報名系統的攻城計畫吧！！

---

### Installation

#### step1

Install mongodb

```
$ aptitude install mongodb
$ /etc/init.d/mongodb start
```

#### step2

Copy `config/config.local.sample` to `config/config.local.js` and modify your config.

```
$ cp config/config.local.sample config/config.local.js
```

#### step3

Install dependencies packages and start app.

```
$ npm install
$ bower install
$ npm start
```

[127.0.0.1:3000](http://127.0.0.1:3000) 快來試試看吧

詳細功能內容請到討論群組內詳談！！
