{% extends '../layout.swig' %}
{% import './_singleArticleSpan.swig' as _singleArticleSpan %}

{% block content %}
<ol class="breadcrumb">
    <li><a href="/">首頁</a></li>
    <li class="active">隊伍列表</li>
</ol>


<p><a href="/articles/new" class="btn btn-primary">創建新隊伍</a></p>

<table class="table">
	<thead>
		<tr>
            <th width="60%">專案 / 隊伍名稱</th>
            <th>隊長</th>
            <th></th>
		</tr>
    </thead>
    <tbody>
    {% for article in articles %}
        {{ _singleArticleSpan.render(article) }}
    {% endfor %}
    </tbody>
</table>
{% endblock %}
