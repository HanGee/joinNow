<ul class="nav navbar-nav navbar-right">

{% if authenticated %}
	<li>
    	<p style="margin-top: 10px;">歡迎回來：{{user.email}} &nbsp;<a href="/logout" class="btn btn-warning">登出</a></p>
    </li>
{% else %}
    <li><a href="/signin">登入</a></li>
    <li><a href="/signup">註冊</a></li>
{% endif %}


</ul>
