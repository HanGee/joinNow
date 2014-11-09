
{% if authenticated %}
    歡迎回來：{{user.email}}
    <a href="/logout">登出</a>
{% else %}
    <a href="/signin">登入</a>
    <a href="/signup">註冊</a>
{% endif %}


{# 訊息顯示 #}
{% for mseeage in flashInfo %}
	<div>
		提示: {{ mseeage }}
	</div>
{% endfor %}

{# 錯誤顯示 #}
{% for mseeage in flashError %}
	<div>
		錯誤: {{ mseeage }}
	</div>
{% endfor %}
