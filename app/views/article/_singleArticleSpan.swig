{% macro render(article) %}
	<li>
	    <div>
	        <div>id: {{ article.id }}</div>
	        <div>Title: <a href="/articles/{{ article.id }}">{{title}}</a></div>
	        <div>Content: {{content}}</div>
	        <div>Author: <a href="/users/{{ article.User.id }}">{{ article.User.email }}</a></div>
	        <div>
	            {% if userId === article.User %}
	                <a href="/articles/{{id}}/edit">Edit</a>
	                <a href="/articles/{{id}}/remove">Delete</a>
	            {% endif %}
	        </div>
	    </div>
	</li>
{% endmacro %}
