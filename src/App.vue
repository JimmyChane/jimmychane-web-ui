<script lang="ts">
	import { Options, Vue } from "vue-class-component";

	import AppNav from "./App-Nav.vue";

	@Options({
		components: { AppNav },
		data() {
			return { scrollTop: 0 };
		},
		mounted() {
			window.addEventListener("resize", this.onResize);
			this.onResize();
		},
		unmounted() {
			window.removeEventListener("resize", this.onResize);
		},
		methods: {
			onResize() {
				const vh = window.innerHeight * 0.01;
				document.body.style.setProperty("--vh", `${vh}px`);
			},
		},
	})
	export default class App extends Vue {}
</script>

<template>
	<div class="App" @scroll="(event) => (scrollTop = event.target.scrollTop)">
		<div class="App-actionbar">
			<AppNav path="/" title="Home" />
			<AppNav path="/code" title="Project Code" />
			<AppNav path="/art" title="Furry Artist" />
			<AppNav path="/fursona" title="Fursona" />
		</div>

		<div class="App-body">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
	html {
		* {
			word-break: break-all;
			text-overflow: clipsssss;
		}

		background: linear-gradient(140.09deg, #e0f7f2 10.49%, #f6dbdb 90.41%);

		body {
			widows: 100vw;
			height: 100vh;
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			overflow: hidden;

			div {
				display: flex;
				flex-direction: column;
			}
			span,
			p,
			a {
				word-break: keep-all;
			}

			#app {
				font-family: "Comic Sans MS", Avenir, Helvetica, Arial, sans-serif;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				text-align: center;
				color: #2c3e50;
				color: black; // 2022-11-22
			}
		}
	}

	.App {
		min-width: 100vw;
		min-height: 100vh;
		width: 100vw;
		height: 100vh;
		height: var(--vh);

		display: flex;
		flex-direction: column;
		align-items: center;

		position: relative;
		overflow-x: hidden;
		overflow-y: auto;

		.App-actionbar {
			z-index: 2;
			width: 100%;
			height: 3.8rem;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 1.2rem;

			padding: 0.5rem;

			position: sticky;
			top: 0;

			background-color: hsla(0, 0%, 100%, 0.5);
			@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
				-webkit-backdrop-filter: blur(2rem);
				backdrop-filter: blur(2rem);
			}
		}

		.App-body {
			z-index: 1;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			flex-grow: 1;
		}
	}
</style>
