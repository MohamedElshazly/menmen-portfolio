<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../theme.postcss'
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, Drawer } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';

	$: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'lg:hidden' : '';
	
	function drawerOpen(): void {
	drawerStore.open();
}

function drawerClose(): void {
	drawerStore.close();


}
</script>

<!-- App Shell -->
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
