{% extends '../layout.swig' %}

{% block content %}
    <form action="" method="post">

        <div>
            <label for="signup-email">Email</label>
            <input type="text" id="signup-email" name="email"/>
        </div>

        <div>
            <label for="signup-password">Password</label>
            <input type="password" id="signup-password" name="password"/>
        </div>

        <div>
            <label for="signup-password-confirmation">Password confirmation</label>
            <input type="password" id="signup-password-confirmation" name="password_confirmation"/>
        </div>


        <input type="submit"/>
    </form>
{% endblock %}
