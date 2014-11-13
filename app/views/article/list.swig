{% extends '../layout.swig' %}
{% import './_singleArticleSpan.swig' as _singleArticleSpan %}

{% block content %}
<ol class="breadcrumb">
    <li><a href="/">Home</a></li>
    <li class="active">Articles</li>
</ol>


<p><a href="/articles/new" class="btn btn-primary">new</a></p>

<table class="table">
	<thead>
		<tr>
            <th width="60%">Title</th>
            <th>Author</th>
            <th>Function</th>
		</tr>
    </thead>
    <tbody>
    {% for article in articles %}
        {{ _singleArticleSpan.render(article) }}
    {% endfor %}
    </tbody>
</table>
{% endblock %}
