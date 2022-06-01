<template>
  <div class="row">
    <div class="col-12">
      <div class="card mb-4">
        <div class="card-header pb-0 d-flex">
          <h6 class="p-2 mr-auto">Books Table</h6>
          <div class="ms-auto mt-2">
            <router-link
              :to="{ name: 'books.add' }"
              class="badge badge-sm btn btn-success p-2"
              >CREATE NEW BOOK</router-link
            >
          </div>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
          <div v-if="isLoading" class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-3"
                  >
                    ID
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Author
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Description
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="book in books" :key="book.id">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img
                          :src="getAvatar(book.avatar)"
                          class="avatar avatar-sl me-3"
                          alt="user1"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">
                          <router-link
                            :to="{
                              name: 'book_ac',
                              params: { id: book._id },
                            }"
                            >{{ `Book Name: ${book.name}` }}</router-link
                          >
                        </h6>
                        <p class="text-xs font-weight-bold mb-0">
                          <router-link
                            :to="{
                              name: 'book_ac',
                              params: { id: book._id },
                            }"
                            >{{ `ID: ${book._id}` }}</router-link
                          >
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">
                      {{ book.author }}
                    </p>
                  </td>
                  <td>
                    <p
                      v-if="book.description.length < 50"
                      class="text-xs font-weight-bold mb-0"
                    >
                      {{ book.description }}
                    </p>
                    <p v-else class="text-xs font-weight-bold mb-0">
                      {{ `${book.description.substring(0, 50)} ...` }}
                    </p>
                  </td>
                  <td class="text-xs font-weight-bold">
                    <button
                      class="badge badge-sm btn btn-danger mb-auto"
                      @click="deleteBook(book._id)"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ACTION_TYPES, GETTER_TYPES } from "../../store/modules/book";
export default {
  name: "com-list-book",
  methods: {
    async deleteBook(uID) {
      this.$store.dispatch(`book/${ACTION_TYPES.DELETE_BOOK}`, uID);
    },
    getAvatar(uAvatar) {
      return `${process.env.VUE_APP_AVATAR_URL}${uAvatar}`;
    },
  },
  computed: {
    books() {
      return this.$store.getters[`book/${GETTER_TYPES.GET_BOOK_LIST}`];
    },
    isLoading() {
      return this.$store.getters[`book/${GETTER_TYPES.GET_IS_LOADING}`];
    },
  },
  created() {
    this.$store.dispatch(`book/${ACTION_TYPES.GET_BOOK_LIST}`);
  },
};
</script>

<style></style>
