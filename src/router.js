import Vue from 'vue'
import VueRouter from 'vue-router'

import ComLogin from './components/ComLogin.vue'
import ComListUser from './components/users/ComListUser.vue'
import ComUserDetail from './components/users/ComUserDetail.vue'
import ComUserAdd from './components/users/ComUserAdd.vue'


Vue.use(VueRouter)

export default new VueRouter ({
	mode: 'history',
	routes: [
	//login
	{ path: '/', name: 'loginpage', component: ComLogin },
	{
	path: '/users',
	name: 'users',
	component: { render: h => h('router-view') },
	children: [
		{
		path: 'list',
		name: 'users.list',
		component: ComListUser,
		},
		{
		path: 'add',
		name: 'users.add',
		component: ComUserAdd,
		}
		],
	},
	{
	// router Group
	path: '/users/:id',
	name: 'users',
	component: { render: h => h('router-view') },
	children: [
		{
		// user profile
		path: 'profile',
		name: 'users.profile',
		component: ComUserDetail
		}
	]
	},
]
});

