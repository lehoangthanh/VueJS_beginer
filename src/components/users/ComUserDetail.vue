<template>
  <div>
    <div v-if="user" class="card shadow-lg mx-4 card-profile-bottom">
      <div class="card-body p-3">
        <div class="row gx-4">
          <div class="col-auto">
            <div v-if="isLoading" class="d-flex justify-content-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div v-else class="avatar avatar-xl position-relative">
              <img
                :src="user.avatar"
                alt="profile_image"
                class="w-100 border-radius-lg shadow-sm"
              />
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1">
                {{ user.name }}
              </h5>
              <p class="mb-0 font-weight-bold text-sm">Public Relations</p>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3"
          >
            <div class="nav-wrapper position-relative end-0">
              <ul class="nav nav-pills nav-fill p-1" role="tablist">
                <li class="nav-item">
                  <a
                    class="
                      nav-link
                      mb-0
                      px-0
                      py-1
                      active
                      d-flex
                      align-items-center
                      justify-content-center
                    "
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
                    class="
                      nav-link
                      mb-0
                      px-0
                      py-1
                      d-flex
                      align-items-center
                      justify-content-center
                    "
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
                    class="
                      nav-link
                      mb-0
                      px-0
                      py-1
                      d-flex
                      align-items-center
                      justify-content-center
                    "
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
          <div class="container-fluid py-4">
            <div class="row">
              <div class="col-md-8">
                <div class="card">
                  <div class="card-header pb-0">
                    <div class="d-flex align-items-center">
                      <p class="mb-0">Edit Profile</p>
                      <div class="ms-auto">
                        <button
                          class="btn btn-info"
                          :disabled="isLoading"
                          @click="updateProfile"
                        >
                          Save
                        </button>
                        <router-link to="/users/list" class="btn btn-primary">
                          BACK
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="text-uppercase text-sm">User Information</p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            for="example-text-input"
                            class="form-control-label"
                            >ID</label
                          >
                          <input
                            class="form-control"
                            type="text"
                            :value="user.id"
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            for="example-text-input"
                            class="form-control-label"
                            >Email</label
                          >
                          <input
                            class="form-control"
                            type="email"
                            disabled
                            :value="user.email"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            for="example-text-input"
                            class="form-control-label"
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
                          <label
                            for="example-text-input"
                            class="form-control-label"
                            >Gender</label
                          >
                          <input
                            class="form-control"
                            type="text"
                            disabled
                            :value="user.gender"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="horizontal dark" />
          <p class="text-uppercase text-sm">Contact Information</p>
          <div class="row">
            <div class="col-md-6">
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
        </div>
      </div>
    </div>
    <div
      aria-live="polite"
      aria-atomic="true"
      style="position: relative; min-height: 200px"
    >
      <div class="toast" style="position: absolute; top: 0; right: 0">
        <div class="toast-header">
          <span class="rounded mr-2" alt="..."></span>
          <strong class="mr-auto">Update User Success</strong>
          <!-- <small>11 mins ago</small> -->
          <!-- <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button> -->
        </div>
        <!-- <div class="toast-body">
      Hello, world! This is a toast message.
    </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { ACTION_TYPES, GETTER_TYPES } from "@/store/modules/user"

export default {
  name: "com-user-detail",
  data() {
    return {
      uID: this.$route.params.id,
    };
  },
  computed: {
    user() {
      return this.$store.getters[`user/${GETTER_TYPES.GET_USER_BY_ID}`];
    },
    isLoading() {
      return this.$store.getters[`user/${GETTER_TYPES.GET_IS_LOADING}`];
    },
  },
  // computed: {
  //   ...mapState(['user'])
  // },

  methods: {
    async updateProfile() {
      this.$store.dispatch(`user/${ACTION_TYPES.UPDATE_USER_PROFILE}`)
    },
  },

  beforeCreate() {
    // console.log("==beforeCreate===");
  },

  created() {
    this.$store.dispatch(`user/${ACTION_TYPES.GET_USER_BY_ID}`, this.uID);
    // console.log("==created===");
  },

  beforeMount() {
    // console.log("==beforeMount===");
  },

  mounted() {
    // console.log("==mounted===");
  },
};
</script>
<style>
</style>
