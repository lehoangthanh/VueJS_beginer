<template>
  <div>
		<div class="row">
      <div class="col-md-9">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
		</div>
    <router-link to="/" class="btn btn-primary">Back</router-link>
  </div>
</template>
<script>
import { ACTION_TYPES } from '../../store/modules/user'
export default {
    name: 'com-list-user',
		props: {

		},
		methods: {
      getUserList() {
        //let userList = this.$store.getters['user/userList'];
        const userList = this.$store.dispatch(`${ACTION_TYPES.GET_USER_LIST}`);
        // if (userList.length === 0) {
        //   this.$store.dispatch(`user/${ACTION_TYPES.getUserList}`)
        // }
        console.log('===', this.$store);
        console.log('=userList==', userList);
      }
		},
    mounted() {
      this.getUserList()
    }
}
</script>
<style>

</style>