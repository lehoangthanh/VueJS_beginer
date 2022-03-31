<template>
  <div>
    <div class="row">
      <div class='col-md-9'>
        <div class="form-group">      
        <input type="text" class="form-control" id="searchIP" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      </div>
    </div>
		<div class="row">
      <div class="col-md-9">
        <table class="table table-striped table-hover">
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
              <td>{{ user.name}}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.address }}</td>
            </tr>
          </tbody>
        </table>
      </div>
		</div>    
  </div>
</template>
<script>
import VueTypes from 'vue-types'
import { ACTION_TYPES } from '../../store/modules/user'
export default {
    name: 'com-list-user',
		props: {
        userList: VueTypes.array.def([])
		},
    data() {
      return {
        userList: [],
      }
    },
		methods: {
      getUserList() {
        this.$store.dispatch(`user/${ACTION_TYPES.GET_USER_LIST}`);
        this.userList = this.$store.getters['user/userList'];
      }
		},
    mounted() {
      this.getUserList()
    }
}
</script>
<style>

</style>