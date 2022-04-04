<template>
  <footer>
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="col-lg-6 mb-lg-0 mb-4">
          <div class="copyright text-center text-sm text-muted text-lg-start">
            ©
            {{ fullDate }}
            , made with <i class="fa fa-heart"></i> by
            <a href="#" class="font-weight-bold" target="_blank"
              >Creative Tim</a
            >
            for a better web.
          </div>
        </div>
        <div class="col-lg-6">
          <ul
            class="nav nav-footer justify-content-center justify-content-lg-end"
          >
            <li class="nav-item">
              <a href="" class="nav-link text-muted" target="_blank"
                >Creative Tim</a
              >
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-muted" target="_blank"
                >About Us</a
              >
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-muted" target="_blank">Blog</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link pe-0 text-muted" target="_blank"
                >License</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "comFooter",
   data() {
    return {
      fullDate: new Date().getFullYear()
    };
  },
};
</script>
<style>
/* .footer {
    width: 100%;
    background-color: #000;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20px;
    color: white;
    border: 1px solid #333;
    padding: 30px;
    margin-top: 20%;
    text-align: center;
} */
</style>