{% extends '../layout.swig' %}

{% block content %}
<ol class="breadcrumb">
    <li><a href="/">首頁</a></li>
    <li><a href="/articles">隊伍列表</a></li>
    <li class="active">創建新隊伍</li>
</ol>

<div class="col-lg-8">
    <div class="well bs-component">
        <form class="form-horizontal" action="" method="POST">
        <fieldset>
          <div class="form-group">
            <label for="title" class="col-lg-2 control-label">隊伍名稱</label>
            <div class="col-lg-10">
              <input type="text" class="form-control" id="title" name="title" placeholder="請輸入您的隊伍名稱">
            </div>
          </div>

          <div class="form-group">
            <label for="githubUrl" class="col-lg-2 control-label">Github</label>
            <div class="col-lg-10">
              <select class="form-control" id="githubUrl" name="githubUrl">
              {% for gitRepo in gitRepos %}
                <option value="{{gitRepo.value}}">{{gitRepo.name}}</option>
              {% endfor %}
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="hackpadUrl" class="col-lg-2 control-label">Hackpad</label>
            <div class="col-lg-10">
              <input type="text" class="form-control" id="hackpadUrl" name="hackpadUrl" placeholder="請輸入您的 Hackpad 的 URL">
            </div>
          </div>

          <div class="form-group">
            <label for="content" class="col-lg-2 control-label">隊伍說明</label>
            <div class="col-lg-10">
                <textarea class="form-control" data-provide="markdown" name="content" id="content" class="myEditor" cols="30" rows="10"></textarea>
            </div>
          </div>

          <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
        <!--      <button type="button" class="btn btn-default">取消</button> -->
              <button type="submit" class="btn btn-primary">送出</button>
            </div>
          </div>
        </fieldset>
        </form>
        <div id="source-button" class="btn btn-primary btn-xs" style="display: none;">&lt; &gt;</div>
    </div>
</div>
{% endblock %}
