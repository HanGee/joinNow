<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ title }}</title>
    <link rel="stylesheet" href="/components/trumbowyg/dist/ui/trumbowyg.min.css">
    <link rel="stylesheet" href="/components/trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <script src="http://localhost:35729/livereload.js"></script>
    {% block head %}{% endblock %}

</head>
<body>

<header>
    <a href="/">Home</a>
    <a href="/articles">Articles</a>

    {% include "./_partial/userPanel.swig" %}
</header>

<div>
    <h1>{{ title }}</h1>

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
