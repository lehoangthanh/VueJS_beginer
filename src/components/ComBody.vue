<template>
		<div class="ComBody">
    <body class="com-body">
        <h1 class="h1-body">Welcome to VueJS</h1>
        <p class="p-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem a eius saepe tempore dolorum fugiat odio est. Deleniti laborum, atque adipisci magni hic, amet earum cupiditate dignissimos aut officiis esse?</p>
        <button type="button" class="btn btn-light">Start scrolling!!!</button>
    </body>
		<form class="form-login">
  	<div class="mb-3">
    	<label class="form-email">{{ labelEmail }}</label>
    	<input type="text" class="form-control">
  	</div>
  	<div class="mb-3">
    	<label class="form-password">{{ labelPassword }}</label>
   	 <input type="text" class="form-control">
 		</div>
  	<button type="submit" class="btn btn-primary" >{{ buttonPassword }}</button>
		</form>
    </div>
</template>
<script>
export default {
    name: 'com-body',
		props: {
			labelEmail: String,
			labelPassword: String,
			buttonPassword: String
		},
		methods: {
			
		}
}
</script>
<style>
.com-body {
    width: 100%;
    height: 400px;
    background-color: #0d6efd;
}
.h1-body {
    text-align: center;
    color: azure;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-top: 100px;
}
.p-body {
    color: azure;
    font-family: serif;
    text-align: center;
}
.btn-light {
    text-align: center;
    justify-content: center;
    margin-top: 60px;
    margin-left: 45%;
}
.form-login {
	width: 40%;
	margin: auto;
	margin-top: 30px;
	border: 1px solid #0000;
}
</style>