<ul class="nav navbar-nav navbar-right">

{% if authenticated %}
	<li>
    	歡迎回來：{{user.email}}<a href="/logout">登出</a>
    </li>
{% else %}
    <li><a href="/signin">登入</a></li>
    <li><a href="/signup">註冊</a></li>
{% endif %}


</ul>
