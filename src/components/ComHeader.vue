<template>
  <div class="row nav">
    <div class="col-md-3 bg-white border-bottom nav__right">
      <router-link to="/" class="btn btn-primary">Back</router-link>
    </div>

    <div class="col-md-9 bg-white border-bottom py-3 nav__left">
      <nav        
        id="topbar"
      >
        <div class="container-fluid">
          <div class="navbar-user d-none d-sm-block">
            <div class="hstack gap-3 ms-4 nav__left__info">
              <div class="dropdown">
                <a
                  class="d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                  ><div>
                    <div
                      class="
                        avatar avatar-sm
                        bg-warning
                        rounded-circle
                        text-white
                      "
                    >
                      img-avatar
                    </div>
                  </div>
                  <div class="d-none d-sm-block ms-3">
                    <span class="h6">Tahlia</span>
                  </div>
                  <div class="d-none d-md-block ms-md-2">
                    <i class="bi bi-chevron-down text-muted text-xs"></i></div
                ></a>
                <div class="dropdown-menu dropdown-menu-end">
                  <div class="dropdown-header">
                    <span class="d-block text-sm text-muted mb-1"
                      >Signed in as</span
                    >
                    <span class="d-block text-heading font-semibold"
                      >Tahlia Mooney</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "com-header",
};
</script>

<style lang="scss" scoped>
  .nav {
    &__right {
      & > a {
        margin: 6px;
      }
    }
    &__left {
       &__info {
        float: right;
      }
    }
  }
</style>