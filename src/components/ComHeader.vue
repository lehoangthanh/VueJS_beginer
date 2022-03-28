<template>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">VueJS</a>
        <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" >
        <div class="navbar-nav">
            <a class="nav-item nav-link active" href="./">Home</a>
            <a class="nav-item nav-link" href="./Contact">Contact</a>
            <a class="nav-item nav-link" href="./About">About</a>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    name: 'com-header'
}
</script>

<style>
.navbar-dark {
    padding-left: 20px;
}
</style>