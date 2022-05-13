<template>
  <div class="row">
    <div class="col-12">
      <div class="card mb-4">
        <div class="card-header pb-0 d-flex">
          <h6 class="p-2 mr-auto">Authors table</h6>
          <div class="ms-auto mt-2">
            <router-link
              :to="{ name: 'users.add' }"
              class="badge badge-sm btn btn-success p-2"
              >CREATE NEW USER</router-link
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
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    ID
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Age
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Gender
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Address
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Online
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img
                          :src="user.avartar"
                          class="avatar avatar-sm me-3"
                          alt="user1"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">
                          <router-link
                            :to="{
                              name: 'users.profile',
                              params: { id: user._id },
                            }"
                            >{{ user.email }}</router-link
                          >
                        </h6>
                        <p class="text-xs font-weight-bold mb-0">
                          {{ `ID: ${user._id}` }}
                        </p>
                        <p class="text-xs text-secondary mb-0">
                          {{ `Email: ${user.email}` }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">{{ user.age }}</p>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">
                      {{ user.gender }}
                    </p>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">
                      {{ user.address }}
                    </p>
                  </td>
                  <td class="text-xs font-weight-bold mb-0">
                    <span :class="`badge badge-sm ${isOnline()}`">Online</span>
                  </td>
                  <td class="text-xs font-weight-bold">
                    <button
                      class="badge badge-sm btn btn-danger mb-auto"
                      @click="deleteUser(user._id)"
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
import { ACTION_TYPES, GETTER_TYPES } from "../../store/modules/user";
export default {
  name: "com-list-user",

  data() {
    return {};
  },
  computed: {
    users() {
      return this.$store.getters[`user/${GETTER_TYPES.GET_USER_LIST}`];
    },
    isLoading() {
      return this.$store.getters[`user/${GETTER_TYPES.GET_IS_LOADING}`];
    },
  },

  methods: {
    isOnline() {
      const min = 0;
      const max = 1;
      return Math.floor(Math.random() * (max - min + 1) + min) === 1
        ? "bg-gradient-success"
        : "bg-gradient-secondary";
    },

    textOnline(status) {
      switch (status) {
        case "bg-gradient-success": {
          return "Online";
        }
        case "bg-gradient-secondary": {
          return "Offline";
        }
      }
    },
    async deleteUser(uID) {
      this.$store.dispatch(`user/${ACTION_TYPES.DELETE_USER}`, uID);
    },
  },
  beforeCreate() {
    console.log("==beforeCreate===");
  },

  beforeMount() {
    console.log("==beforeMount===");
  },

  mounted() {
    console.log("==mounted===");
  },

  created() {
    this.$store.dispatch(`user/${ACTION_TYPES.GET_USER_LIST}`);
    console.log("==created===");
  },
};
</script>
