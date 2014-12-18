<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ title }}</title>
    <link href="/components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/components/bootstrap-markdown/css/bootstrap-markdown.min.css" rel="stylesheet" type="text/css">
    <link href="/components/fontawesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="/css/customize.css" rel="stylesheet" type="text/css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="/components/jquery/dist/jquery.min.js"></script>
    <script src="/components/bootstrap-markdown/js/bootstrap-markdown.js"></script>
    <script src="/components/bootstrap/dist/js/bootstrap.min.js"></script>
    {% block head %}{% endblock %}
</head>

<body>

<!-- START NAV -->
<div class="navbar navbar-default navbar-fixed-top navbar-inverse">
  <div class="container">
    <div class="navbar-header">
      <a href="../" class="navbar-brand">黑客松組隊系統</a>
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="navbar-collapse collapse" id="navbar-main">

    <ul class="nav navbar-nav">
      <li>
        <a href="/articles"><span class="fa fa-users"></span>隊伍列表</a>
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
<div class="bg-pattern bg-pattern_vertical"></div>
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
