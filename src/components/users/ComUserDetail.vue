<template>
	<div class="row">
		<div class="col-md-9">
			<h2>User Detail {{ user.name }}</h2>
		</div>
	</div>
</template>
<script>
import { ACTION_TYPES } from '../../store/modules/user'

export default {
	name: 'com-user-detail',
	data() {
		return {
			id: this.$route.params.id,
			user: {}
		}
	},
	methods: {
		getUserByID() {
			this.$store.dispatch(`user/${ACTION_TYPES.GET_USER_LIST}`);
			this.$store.dispatch(`user/${ACTION_TYPES.GET_USER_BY_ID}`, this.id);
			this.user = this.$store.getters['user/getUserByID'];
		}
	},
	mounted() {
		this.getUserByID();
	}
}
</script>
<style>

</style>