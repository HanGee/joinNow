{% extends '../layout.swig' %}


{% block content %}
<div class="col-lg-6">
  <h2>{{ user.name }}</h2>
</div>


<table class="table table-bordered table-hover table-condensed">
	<thead>
		<tr class="active">
            <th>專案 / 隊伍名稱</th>
		</tr>
    </thead>
    <tbody>
    	{% for article in articles %}
    	<tr>
    		<td>
				<a href="/articles/{{ article.id }}">{{ article.title }}
				</a>
    		</td>
    	</tr>
    	{% endfor %}
    </tbody>
</table>

{% endblock %}
