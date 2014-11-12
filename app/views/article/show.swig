{% extends '../layout.swig' %}

{% block content %}

	<div>
	    <div>id: {{article.id}} </div>
	    <div>title: {{article.title}}</div>
	    <div>content: {{article.content}}</div>
	    <div>author: {{article.author.email}}</div>

	</div>

	<div><a href="/articles">Back to Articles</a></div>

{#

	<h3>Comments</h3>
	<ul>
	{% for comment in article.Comments %}
		<li>
		{{ comment.id }}
		{{ comment.title }}
		{{ comment.content }}
		{{ comment.authorId }}
		</li>
	{% endfor %}
	</ul>

	<h3>New Comment</h3>
	<form class="form-horizontal" action="/articles/{{article.id}}/comment" method="POST">
        <fieldset>
          <div class="form-group">
            <label for="title" class="col-lg-2 control-label">Title:</label>
            <div class="col-lg-10">
              <input type="text" class="form-control" id="title" name="title">
            </div>
          </div>

          <div class="form-group">
            <label for="content" class="col-lg-2 control-label">內文:</label>
            <div class="col-lg-10">
                <textarea class="form-control" name="content" id="content" class="myEditor" cols="30" rows="10"></textarea>
            </div>
          </div>

          <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
              <button class="btn btn-default">Cancel</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </fieldset>
        </form>
#}

{% endblock %}

