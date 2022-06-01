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
                <p class="mb-0">Create Book</p>
                <div class="ms-auto">
                  <button class="btn btn-info" @click="addUser">ADD</button>
                  <router-link to="/books" class="btn btn-primary">
                    BACK
                  </router-link>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">New Book</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group" enctype="multipart/form-data">
                    <label for="example-text-input" class="form-control-label"
                      >Image Book</label
                    >
                    <input
                      type="file"
                      name="avatar"
                      ref="myFiles"
                      @change="selectFile()"
                      multiple
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label"
                      >Name Book</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="book.name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label"
                      >Author</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="book.author"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label"
                      >Type</label
                    >
                    <input
                      class="form-control"
                      type="number"
                      v-model="book.type"
                    />
                  </div>
                </div>
              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Description Book</p>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control w-100 p-4"
                      v-model="book.description"
                    >
                    </textarea>
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
import { ACTION_TYPES, GETTER_TYPES } from "@/store/modules/book";
export default {
  name: "com-book-add",
  data() {
    return {
      book: {
        name: "",
        author: "",
        type: 0,
        description: "",
        avatar: "",
      },
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters[`book/${GETTER_TYPES.GET_IS_LOADING}`];
    },
  },
  methods: {
    selectFile() {
      if (this.$refs.myFiles.files.length < 1) return;
      this.book.avatar = this.$refs.myFiles.files[0];
    },
    async addUser() {
      this.$store.dispatch(`book/${ACTION_TYPES.ADD_BOOK}`, this.book);
    },
  },
};
</script>

<style></style>
