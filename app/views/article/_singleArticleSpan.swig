{% macro render(article) %}

          <tr>
            <td>{{ article.id }}</td>
            <td>
            	<a href="/articles/{{ article.id }}">{{ article.title }}</a>
            </td>
            <td>{{ article.content }}</td>
            <td>
            	<a href="/users/{{ article.User.id }}">{{ article.User.email }}</a>
            </td>
            <td>
	            {% if userId === article.User.id %}
	                <a href="/articles/{{ article.id }}/edit">Edit</a>
	                <a href="/articles/{{ article.id }}/remove">Delete</a>
	            {% endif %}
            </td>
          </tr>

{% endmacro %}
