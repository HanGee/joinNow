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
	                <a style="margin-top: 10px; href="/articles/{{ article.id }}/edit" class="btn btn-btn btn-primary">編輯</a>
	                <a style="margin-top: 10px; href="/articles/{{ article.id }}/remove" class="btn btn-btn btn-danger">刪除</a>
	            {% endif %}
            </td>
          </tr>

{% endmacro %}
