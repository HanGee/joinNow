{% extends '../layout.swig' %}

{% block content %}
  <div class="row">
    <h1>{{article.title}}</h1>
  </div>
  <h3 class="pinline-defult">
    <span></span>
  </h3>
  <div class="row">
    <div class="col-lg-9">
    	<p>
    	    <div id="markdown-content">{{article.content}}</div>
    	</p>
      <p>
        <a href="/articles">回到列表</a>
      </p>
    </div>

    <div class="col-lg-2">
      <h3>發起人</h3>
        <img class="gravatar" src="http://www.gravatar.com/avatar/{{ article.author.gravatarHash }}?s=70" />
        <p>
          <a href="/users/{{ article.author.id }}">{{ article.author.name }}</a>
        </p>
    </div>
  </div>

  <div class="join-block">
    <div class="join-block-head">
      <h3 class="pinline">
        <span>參加者</span>
      </h3>
    </div>
    <div class="join-block-content">
      <ul class="clearfix">
      {% for member in article.members %}
        <li class="pull-left col-lg-2">
          <img src="http://www.gravatar.com/avatar/{{ member.gravatarHash }}?s=50" />
          <a href="/users/{{ member.id }}">{{ member.name }}</a>
        </li>
      {% endfor %}
      </ul>
    <div class="join-block-footer text-center">
      <a class="btn btn-primary" href="/articles/{{article.id}}/join">
        立刻參加
      </a>
      <a class="btn btn-default" href="/articles/{{article.id}}/unjoin">
        取消參加
      </a>
  </div>
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

