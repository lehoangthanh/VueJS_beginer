<template>
  <div>
    <div class="card shadow-lg mx-4 card-profile-bottom">
      <div class="card-body p-3">
        <div class="row gx-4">
          <div class="col-auto">
            <div v-if="isLoading" class="d-flex justify-content-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div class="avatar avatar-xl position-relative"></div>
          </div>
          <div
            class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3"
          >
            <div class="nav-wrapper position-relative end-0">
              <ul class="nav nav-pills nav-fill p-1" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link mb-0 px-0 py-1 active d-flex align-items-center justify-content-center"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="true"
                  >
                    <i class="ni ni-app"></i>
                    <span class="ms-2">App</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="false"
                  >
                    <i class="ni ni-email-83"></i>
                    <span class="ms-2">Messages</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="false"
                  >
                    <i class="ni ni-settings-gear-65"></i>
                    <span class="ms-2">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Create User</p>
                <div class="ms-auto">
                  <button class="btn btn-info" @click="addUser()">ADD</button>
                  <router-link to="/users" class="btn btn-primary">
                    BACK
                  </router-link>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">User Information</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group" enctype='multipart/form-data'>
                    <label for="example-text-input" class="form-control-label"
                      >Avartar</label
                    >
                    <input
                      type="file"
                      name="avartar"
                      ref="myFiles"
                      @change="selectFile()"
                      multiple
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label"
                      >First Name</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="user.firstName"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label"
                      >Last name</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="user.lastName"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label"
                      >Email</label
                    >
                    <input
                      class="form-control"
                      type="email"
                      v-model="user.email"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label"
                      >Age</label
                    >
                    <input
                      class="form-control"
                      type="number"
                      v-model="user.age"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label"
                      >Gender</label
                    >
                    <select class="form-control" v-model="user.gender">
                      <option disabled value="">Choose One Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Contact Information</p>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label"
                      >Address</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="user.address"
                    />
                  </div>
                </div>
              </div>
              <hr class="horizontal dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ACTION_TYPES, GETTER_TYPES } from "@/store/modules/user";
export default {
  name: "com-user-add",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: "1",
        address: "",
        avatar: "",
      },
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters[`user/${GETTER_TYPES.GET_IS_LOADING}`];
    },
  },
  methods: {
    selectFile() {
      if (this.$refs.myFiles.files.length < 1) return;
      this.user.avatar = this.$refs.myFiles.files[0];
    },
    async addUser() {
      this.$store.dispatch(`user/${ACTION_TYPES.ADD_USER}`, this.user);
    },
  },
};
</script>
<style></style>
