<template>
	<div class="hello">
		<hello-world></hello-world>
	</div>
</template>

<script>
import pv from '@/mixins/pv'
import HelloWorld from '@/components/HelloWorld.vue'
import { UserApi } from '@/api/index'
import { UserMock } from '@/mock/index'

export default {
	name: 'Index',
	mixins: [pv],
	components: {
		HelloWorld
	},
	created () {
		// mock
		UserMock.loginMock()
		UserApi.login({}, response => {
			console.log(response)
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/base.css';

	.hello{
		display: flex;
		margin-top: 40%;

		& h1{
			font-weight: var(--main-font-weight);
			@apply --default-theme;
		}
	}
</style>
