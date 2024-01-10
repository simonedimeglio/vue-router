<template>
	<div class="user-container">
		<h1>Pagina Users</h1>
		<div v-for="user in users" :key="user.id">
			<router-link :to="{ name: 'usersDetails', params: { idDelSingoloUser: user.id }}">
				<h3>{{ user.name }}</h3>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [
				{ id: 1, name: "Simone Di Meglio", job: "dev" },
				{ id: 2, name: "Brad Pitt", job: "actor" },
				{ id: 3, name: "Valentino Rossi", job: "pilot" },
			],
		};
	},
};
</script>
