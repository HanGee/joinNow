<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ title }}</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/components/bootstrap-markdown/css/bootstrap-markdown.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/components/jquery/dist/jquery.min.js"></script>
    <script src="/components/bootstrap-markdown/js/bootstrap-markdown.js"></script>
    <script src="http://localhost:35729/livereload.js"></script>
    {% block head %}{% endblock %}
</head>
<body>

<!-- START NAV -->
<div class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <a href="../" class="navbar-brand">Hangee Hackathon</a>
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="navbar-collapse collapse" id="navbar-main">

    <ul class="nav navbar-nav">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/articles">Articles</a>
      </li>
    </ul>

    {% if authenticated %}
    {% else %}
    {% endif %}

      {% include "./_partial/userPanel.swig" %}
    </div>
  </div>
</div>
<!-- END NAV -->
<BR><BR><BR><BR>



{# 訊息顯示 #}
{% for mseeage in flashInfo %}
<div class="container">
  <div class="bs-component">
    <div class="alert alert-dismissable alert-warning">
      <button type="button" class="close" data-dismiss="alert">×</button>
      <h4>提示</h4>
      <p>{{ mseeage }}</p>
    </div>
  </div>
</div>
{% endfor %}

{# 錯誤顯示 #}
{% for mseeage in flashError %}
<div class="container">
  <div class="bs-component">
    <div class="alert alert-dismissable alert-danger">
      <button type="button" class="close" data-dismiss="alert">×</button>
      <h4>錯誤</h4>
      <p>{{ mseeage }}</p>
    </div>
  </div>
</div>
{% endfor %}






<div class="container">
    <!-- <h1>{{ title }}</h1> -->

    {% block content %}{% endblock %}
</div>


<script src="/components/jquery/dist/jquery.min.js"></script>
<script src="/js/myEditor.js"></script>

</body>
</html>
