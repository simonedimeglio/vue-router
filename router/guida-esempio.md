# Step per raggiungere il risultato di questo codice

 1. Fare pulizia per avere solo il componente *HomeView* ed *AboutView* con titolo e paragrafo 

 2. Creare un file nella cartella "**views**" chiamato "**Users.vue**" come segue: 

<img width="573" alt="1" src="https://github.com/simonedimeglio/vue-router/assets/78272736/972c0f11-40cc-4108-bddc-b7f95d8657d2">


 3. Aggiorno il file "**index.js**" dentro la cartella "**router**" come segue: 

<img width="824" alt="2" src="https://github.com/simonedimeglio/vue-router/assets/78272736/02ea2225-8d9e-4e02-bbc2-3d39b7de00aa">

4. Aggiorno il file "**App.vue**" per aggiungere il link a questa nuova view che abbiamo creato tramite un router-link: `<router-link :to="{name: 'users'}">Users</router-link>`

**Se volessimo, al click sul singolo "user", andare in una pagina dedicata per ottenere maggiori dettagli su quell'utente?** (*ottenendo quindi una rotta dinamica come "/users/1"*)

5. Creo una view chiamata "**UserDetails.vue**" come segue:

<img width="590" alt="3" src="https://github.com/simonedimeglio/vue-router/assets/78272736/19a4dba1-960d-4f57-99ae-a3a09a35f578">


6. Dentro "**router/index.js**" aggiungo quanto segue: 
`{
path: '/users/:idDelSingoloUser',
name: 'usersDetails',
component: UserDetails
}`


Adesso, se nella barra di ricerca scrivo ad esempio "/user/123", riuscirò a vedere la view "**UserDetails.vue**"

7. Aggiorno il file "**Users.vue**", wrappando il nome dell'utente nel template dentro un router link come segue: 

<img width="1042" alt="4" src="https://github.com/simonedimeglio/vue-router/assets/78272736/8edd3c0e-814b-48e0-992c-d92e199184dd">

8. Passiamo tramite props i dati ad "**UserDetails.vue**" come segue, aggiornando il file: 

<img width="589" alt="5" src="https://github.com/simonedimeglio/vue-router/assets/78272736/7fb7e0b8-8533-4dff-a001-a3464272facc">

9. Dentro "**router/index.js**" aggiungo quanto le props come segue: 
`{
path: '/users/:idDelSingoloUser',
name: 'usersDetails',
component: UserDetails,
props: true
}`
