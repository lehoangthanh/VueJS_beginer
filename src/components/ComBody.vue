<template>
    <body class="com-body">
        <h1 class="h1-body">Welcome to VueJS</h1>
        <p class="p-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem a eius saepe tempore dolorum fugiat odio est. Deleniti laborum, atque adipisci magni hic, amet earum cupiditate dignissimos aut officiis esse?</p>
        <button type="button" class="btn btn-light">Start scrolling!!!</button>
    </body>
</template>
<script>
export default {
    name: 'com-body'
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
</style>