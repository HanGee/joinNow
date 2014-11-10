<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ title }}</title>
    <link rel="stylesheet" href="/components/trumbowyg/dist/ui/trumbowyg.min.css">
    <link rel="stylesheet" href="/components/trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.min.css">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">
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
      {% include "./_partial/userPanel.swig" %}
    </div>
  </div>
</div>
<!-- END NAV -->
<BR><BR><BR><BR>



{# 訊息顯示 #}
{% for mseeage in flashInfo %}
  <div>
    提示: {{ mseeage }}
  </div>
{% endfor %}

{# 錯誤顯示 #}
{% for mseeage in flashError %}
  <div>
    錯誤: {{ mseeage }}
  </div>
{% endfor %}






<div class="container">
    <!-- <h1>{{ title }}</h1> -->

    {% block content %}{% endblock %}
</div>


<script src="/components/jquery/dist/jquery.min.js"></script>
<script src="/components/trumbowyg/dist/trumbowyg.min.js"></script>
<script src="/components/trumbowyg/dist/plugins/colors/trumbowyg.colors.min.js"></script>
<script src="/components/trumbowyg/dist/plugins/upload/trumbowyg.upload.min.js"></script>
<script src="/components/trumbowyg/dist/plugins/base64/trumbowyg.base64.min.js"></script>
<script src="/js/myEditor.js"></script>

</body>
</html>
