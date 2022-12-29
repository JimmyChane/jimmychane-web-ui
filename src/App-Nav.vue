<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	@Options({
		props: {
			path: { type: String, default: "" },
			title: { type: String, default: "" },
		},
		computed: {
			isSelected() {
				return this.$route.path === this.path;
			},
		},
	})
	export default class AppNav extends Vue {}
</script>

<template>
	<router-link
		:class="['App-Nav', isSelected ? 'App-Nav-isSelected' : '']"
		:to="path"
		>{{ title }}</router-link
	>
</template>

<style lang="scss" scoped>
	.App-Nav {
      width: 7rem;
		font-size: 1rem;
		color: hsl(350, 47%, 19%);
		text-decoration: none;
		padding: 0.6em 1em;
		border-radius: 2em;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
	}
	.App-Nav-isSelected {
		background: rgb(243, 214, 219);
	}
</style>
