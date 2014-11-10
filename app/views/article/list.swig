{% extends '../layout.swig' %}
{% import './_singleArticleSpan.swig' as _singleArticleSpan %}

{% block content %}
<ol class="breadcrumb">
    <li><a href="/">Home</a></li>
    <li class="active">Articles</li>
</ol>

    <p><a href="/articles/new">new</a></p>

    <ul>
        {% for article in articles %}
            {{ _singleArticleSpan.render(article) }}
        {% endfor %}
    </ul>
{% endblock %}
