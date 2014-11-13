{% extends '../layout.swig' %}

{% block content %}
<div class="col-lg-6">
    <div class="well bs-component">
        <form class="form-horizontal" action="" method="POST">
        <fieldset>
          <legend>註冊</legend>

          <div class="form-group">
            <label for="name" class="col-lg-2 control-label">Name:</label>
            <div class="col-lg-10">
              <input type="text" class="form-control" id="name" name="name" required=true>
            </div>
          </div>

          <div class="form-group">
            <label for="email" class="col-lg-2 control-label">Email:</label>
            <div class="col-lg-10">
              <input type="text" class="form-control" id="email" name="email" required=true>
            </div>
          </div>

          <div class="form-group">
            <label for="password" class="col-lg-2 control-label">Password:</label>
            <div class="col-lg-10">
                <input type="password" class="form-control" id="password" name="password" required=true>
            </div>
          </div>

          <div class="form-group">
            <label for="password_confirmation" class="col-lg-2 control-label">Confirmation:</label>
            <div class="col-lg-10">
                <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" required=true>
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
        <div id="source-button" class="btn btn-primary btn-xs" style="display: none;">&lt; &gt;</div>
    </div>
</div>
{% endblock %}
