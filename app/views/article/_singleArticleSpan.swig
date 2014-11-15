{% macro render(article) %}

          <tr>
            <td>
            	<a href="/articles/{{ article.id }}">{{ article.title }}</a>
            </td>
            <td>
                <img class="gravatar gravatar-list" src="http://www.gravatar.com/avatar/{{ article.author.gravatarHash }}?s=50" />
            	<a href="/users/{{ article.author.id }}">{{ article.author.name }}</a>
            </td>
            <td>
	            {% if userId && userId === article.author.id %}
	                <a href="/articles/{{ article.id }}/edit">Edit</a>
	                <a href="/articles/{{ article.id }}/remove">Delete</a>
	            {% endif %}
            </td>
          </tr>

{% endmacro %}
