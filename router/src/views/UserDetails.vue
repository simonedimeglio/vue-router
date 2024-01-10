<template>
	<h1>Dettagli del singolo user</h1>
	<p>Utente - numero: {{ idDelSingoloUser }}</p>
</template>

<script>
export default {
  props: ['idDelSingoloUser'],
	// data() {
	// 	return {
	// 		id: this.$route.params.idDelSingoloUser,
	// 	};
	// },
};
</script>

<style></style>
