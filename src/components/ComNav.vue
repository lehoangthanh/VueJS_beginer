<template>
    
      <nav
        class="
          navbar
          show
          navbar-vertical
          h-lg-screen
          navbar-expand-lg
          px-0
          py-3
          navbar-light
          bg-white
          border-bottom border-bottom-lg-0 border-end-lg
          scrollbar
        "
        id="sidebar"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler ms-n2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapse"
            aria-controls="sidebarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a
            class="navbar-brand d-inline-block py-lg-2 mb-lg-5 px-lg-6 me-0"
            href="#"
            >HOME
          </a>
          <div class="navbar-user d-lg-none">
            <div class="dropdown">
              <a
                href="#"
                id="sidebarAvatar"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                ><div class="avatar-parent-child">
                  <img
                    alt="..."
                    src="/img/people/img-profile.jpg"
                    class="avatar avatar- rounded-circle"
                  />
                  <span
                    class="avatar-child avatar-badge bg-success"
                  ></span></div
              ></a>
              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="sidebarAvatar"
              >
                <a href="#" class="dropdown-item">Profile</a>
                <a href="#" class="dropdown-item">Settings</a>
                <a href="#" class="dropdown-item">Billing</a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">Logout</a>
              </div>
            </div>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#sidebar-user"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebar-user"
                  ><i class="bi bi-people"></i> User</a
                >
                <div class="collapse" id="sidebar-user">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a href="/pages/user/profile.html" class="nav-link"
                        >Profile</a
                      >
                    </li>
                    <li class="nav-item">
                      <a href="/pages/user/table-view.html" class="nav-link"
                        >Table View</a
                      >
                    </li>
                    <li class="nav-item">
                      <a href="/pages/user/permissions.html" class="nav-link"
                        >Permissions</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>
<script>
export default {
    name: 'com-nav',
}
</script>
