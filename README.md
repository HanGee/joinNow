#JoinNow

現在就加入完成這個 [HanGee 黑客松](http://hackathon.tw/) 報名系統的攻城計畫吧！！

---

####Setting

	git clone ......
	npm install
	brew install mysql

####給熱血的新手攻城師教學 

####step1
在Mysql上建立一個 database 名為 `node-joinNow-development`

####step2
接著建立一個mysql檔案至 ``config/mysql.js``

	/**
	Mysql設定檔
	@class mysql
	*/
	module.exports = {
		database: 'node-joinNow-development',
		database_test: 'node-joinNow-test',
		username: 'xxx',	/* xxx為自己設定的帳號 */
		password: 'xxx',	/* xxx為自己設定的密碼 */
	}

將 `config/config.js` 的帳號密碼換成
  
  	database: 'node-joinNow-development',   ----> database: mysql.database,
  	database: 'node-joinNow-test',   ----> database: mysql.database_test,
	username: 'node_joinNow',   ----> username: mysql.username,
	password: 'pass_joinNow',   ----> password: mysql.password,	

對了！記得在上面引入mysql的檔案

	var mysql = require('./mysql');

####step3
接著把 `app.js` 檔案內的 `//forceSync = true;` 打開

  	//forceSync = true;  ---->  forceSync = true;

接著執行 'node app.js'

建立完資料以後就可以再度關起來

  	forceSync = true;  ---->  //forceSync = true;

####step4	

[127.0.0.1:3000](http://127.0.0.1:3000) 快來試試看吧

---

詳細功能內容咱們再討論吧！！

###以下是Dca大師的聯絡方式

[低卡](https://www.facebook.com/dca.hsu)
