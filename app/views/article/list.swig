{% extends '../layout.swig' %}
{% import './_singleArticleSpan.swig' as _singleArticleSpan %}

{% block content %}
    <p><a href="/articles/new">new</a></p>

    <ul>
        {% for article in articles %}
            {{ _singleArticleSpan.render(article) }}
        {% endfor %}
    </ul>
{% endblock %}
