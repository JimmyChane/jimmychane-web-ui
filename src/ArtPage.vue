<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	@Options({})
	export default class ArtPage extends Vue {}
</script>

<template>
	<div class="ArtPage">
		<img class="ArtPage-image" src="@/assets/20220822_2138-pink.png" />
	</div>
</template>

<style lang="scss" scoped>
	.ArtPage {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		.ArtPage-image {
			width: 100%;
		}
	}
</style>
