{% extends '../layout.swig' %}


{% block content %}
	<form action="" method="post">

		<div>
		    <label for="signin-email">Email</label>
		    <input type="text" id="signin-email" name="email"/>
		</div>

		<div>
			<label for="signin-password">Password</label>
			<input type="password" id="signin-password" name="password"/>
		</div>

		<div>
		    <input type="submit"/>
		</div>

	</form>

{% endblock %}
