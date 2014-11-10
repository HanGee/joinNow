{% extends '../layout.swig' %}

{% block content %}

	<div>
	    <div>id: {{article.id}} </div>
	    <div>title: {{article.title}}</div>
	    <div>content: {{article.content}}</div>
	    <div>author: {{article.User.email}}</div>

	</div>

	<div><a href="/article">Back to Articles</a></div>

	<ul>
	{% for comment in article.Comments %}
		<li>
		{{ comment.id }}
		{{ comment.title }}
		{{ comment.content }}
		{{ comment.UserId }}
		</li>
	{% endfor %}
	</ul>

{% endblock %}

