{% extends '../layout.swig' %}
{% import './_singleArticleSpan.swig' as _singleArticleSpan %}

{% block content %}
<ol class="breadcrumb">
    <li><a href="/">首頁</a></li>
    <li class="active">隊伍列表</li>
</ol>

{% if token == false %}
    <div class="container">
      <div class="bs-component">
        <div class="alert alert-dismissable alert-warning">
          <button type="button" class="close" data-dismiss="alert">×</button>
          <h4>提示</h4>
          <p>尚未綁定 Github 帳號，請<a target="_blank" href="/auth/github">點我</a>這邊做綁定動作，才可創建隊伍。</p>
        </div>
      </div>
    </div>
{% else %}
    <p><a href="/articles/new" class="btn btn-primary">創建新隊伍</a></p>
{% endif %}
<table class="table table-bordered table-hover table-condensed">
	<thead>
		<tr>
            <th width="60%">專案 / 隊伍名稱</th>
            <th>隊長</th>
            <th>管理權限</th>
		</tr>
    </thead>
    <tbody>
    {% for article in articles %}
        {{ _singleArticleSpan.render(article) }}
    {% endfor %}
    </tbody>
</table>
{% endblock %}
