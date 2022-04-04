<template>
  <div class="row">
    <div class="col-12">
      <div class="card mb-4">
        <div class="card-header pb-0">
                  <h6>Authors table</h6>
          </div>
        <div class="card-body px-0 pt-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">ID</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Age</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Gender</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Address</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Online</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in userList" :key="user.id">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img :src="user.avatar" class="avatar avatar-sm me-3" alt="user1">
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">
                          <router-link :to="{ name: 'users.profile', params: { id: user.id }}">{{ user.name }}</router-link>
                        </h6>
                        <p class="text-xs font-weight-bold mb-0">{{ `ID: ` + user.id }}</p>
                        <p class="text-xs text-secondary mb-0">{{ `Username: ` + user.username }}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">{{ user.age }}</p>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">{{ user.gender }}</p>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">{{ user.address }}</p>
                  </td>
                  <td class="text-xs font-weight-bold mb-0">
                    <span :class="`badge badge-sm ${isOnline()}`">Online</span>
                  </td>
                  <td class="text-xs font-weight-bold mb-0">
                    <button class="btn btn-warning text-xs font-weight-bold mb-0 badge badge-sm">EDIT</button>
                  </td>
                  <!-- <td>
                    <p class="text-xs font-weight-bold mb-0 btn-edit"><button class="btn btn-warning ">Edit</button></p>
                  </td> -->
                </tr>
                <!-- <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1">
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">John Michael</h6>
                        <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">Manager</p>
                    <p class="text-xs text-secondary mb-0">Organization</p>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="badge badge-sm bg-gradient-success">Online</span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                  </td>
                  <td class="align-middle">
                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                      Edit
                    </a>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueTypes from "vue-types";
import { ACTION_TYPES } from "../../store/modules/user";
export default {
  name: "com-list-user",
  // props: {
  //     userList: VueTypes.array.def([])
  // },
  data() {
    return {
      userList: [],
    };
  },
  methods: {
    getUserList() {
      this.$store.dispatch(`user/${ACTION_TYPES.GET_USER_LIST}`);
      this.userList = this.$store.getters["user/userList"];
    },
    isOnline() {
      const min = 0;
      const max = 1;
       return Math.floor(Math.random() * (max - min + 1) + min) === 1 ? 'bg-gradient-success' : 'bg-gradient-secondary'
    },
    textOnline(status) {
      switch(status) {
        case 'bg-gradient-success': {
            return 'Online'
        };
        case 'bg-gradient-secondary': {
          return 'Offline'
        }
      }
    }
  },
  mounted() {
    this.getUserList();
  },
};
</script>
<style>
    <!-- <div class="col-md-9">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="searchIP"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
    </div>

    <div class="col-md-9">
      <table class="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">username</th>
            <th scope="col">Full Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.username }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.address }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
