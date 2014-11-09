{% macro render(article) %}
	<li>
	    <div>
	        <div>id: {{ article.id }}</div>
	        <div>Title: <a href="/articles/{{ article.id }}">{{ article.title }}</a></div>
	        <div>Content: {{ article.content }}</div>
	        <div>Author: <a href="/users/{{ article.User.id }}">{{ article.User.email }}</a></div>
	        <div>
	            {% if userId === article.User.id %}
	                <a href="/articles/{{ article.User.id }}/edit">Edit</a>
	                <a href="/articles/{{ article.User.id }}/remove">Delete</a>
	            {% endif %}
	        </div>
	    </div>
	</li>
{% endmacro %}
