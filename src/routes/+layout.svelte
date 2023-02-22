<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../theme.postcss'
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, Drawer } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	$: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'lg:hidden' : '';
	
	function drawerOpen(): void {
	drawerStore.open();
}

function drawerClose(): void {
	drawerStore.close();
}
onMount(() => {

	const blob = document.getElementsByClassName('blob')[0];
	
	document.addEventListener('mousemove', (e) => {
		const {clientX, clientY} = e;
			
		blob.animate({
			left: `${clientX}px`,
			top: `${clientY}px`,
		}, {duration: 3000, fill: 'forwards'});
	}
	);
})


</script>
<div class="blob"></div>
<div class="blur"></div>
<!-- App Shell -->
<div class="main">
	<AppShell>
		<svelte:fragment slot="header">
			<!-- App Bar -->
			<AppBar background="bg-transparent">
				<svelte:fragment slot="lead">
					<strong class="text-sm md:text-xl uppercase">Menna H. Younes</strong>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<div class="hidden md:flex md:justify-center md:items-center md:gap-2">
	
						<a
							class="btn btn-sm variant-ghost-surface"
							href="https://discord.gg/EXqV7W8MtY"
							target="_blank"
							rel="noreferrer"
						>
							Designs
						</a>
						<a
							class="btn btn-sm variant-ghost-surface"
							href="https://twitter.com/SkeletonUI"
							target="_blank"
							rel="noreferrer"
						>
							About me!
						</a>
						<a
							class="btn btn-sm variant-ghost-surface"
							href="https://github.com/skeletonlabs/skeleton"
							target="_blank"
							rel="noreferrer"
						>
							Contact me!
						</a>
						<LightSwitch />
					</div>
					<!-- <div class="md:hidden"> -->
						<Drawer class={classesDrawer}>
							<p>(show 'example-1' contents)</p>
						</Drawer>
					<!-- </div> -->
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
	</AppShell>
</div>

<style>
	.blob {
	background-color: #fff;
  height: 25vmax;
	aspect-ratio: 1/1;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	background: linear-gradient(to right, aquamarine, mediumpurple);
	animation: rotate 20s infinite;
	/* opacity: 0.8; */
	
}

.blur{
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 2;
	backdrop-filter: blur(9vmax);
}
.main{
	z-index: 3;
	position: absolute;
	height: 100%;
	width: 100%;  
}
</style>