# Vue Router: guida

 1. Creiamo un nuovo progetto vue (Ovviamente è possibile installare il router in un progetto già esistente, ma per motivi didattici "partiamo clean")
 2. Disabilitiamo "Linter/Formatter" (Per il momento!)
 3. Abilitiamo "Router"
 4. Selezioniamo Vue3 
 5. Abilitiamo la "History mode"

Le prime cose che dovremmo notare appena apriamo il progetto nel nostro IDE sono cinque: 

- Fate caso al file **package.json.** Tra le dipendenze, adesso troveremo anche "*vue-router*" (in questo caso, in versione 4.0.3).
- Il file **main.js** adesso riporta informazioni circa l'utilizzo di vue-router.
- Il file **App.vue** contiene nuovi tag, mai visti prima, come `<router-link>` e `<router-view>`.
- Nella cartella **views** abbiamo due file relativi alle pagine home e about.
- Nella cartella **src**, è stata creata una sotto-cartella chiamata "*router*" che contiene un file js. 

Analizziamo questo nuovo file di seguito:

### index.js

<img width="758" alt="router" src="https://github.com/simonedimeglio/vue-router/assets/78272736/445205fd-cab6-41fb-b432-3021152c5675">

1.  **Importazione delle funzioni necessarie:**
    
    -   `createRouter` e `createWebHistory` sono funzioni fornite dal pacchetto `vue-router` per la creazione del router e la gestione della history del browser.

2.  **Definizione delle Route:**
    
    -   `routes` è un array di oggetti che definisce le route dell'applicazione.
    -   Ogni oggetto rappresenta una route e contiene informazioni come il percorso (`path`), il nome (`name`) e il componente associato (`component`).

3.  **Lazy-Loading:**
    
    -   La route per l'AboutView utilizza il lazy-loading per ottimizzare il caricamento dei componenti. Questo significa che il file `AboutView.vue` verrà caricato solo quando la route viene visitata, migliorando le prestazioni.

4.  **Configurazione del Router:**
    
    -   `createRouter` viene chiamato con un oggetto di configurazione che include il tipo di history da utilizzare (in questo caso, `createWebHistory` per la history basata su HTML5) e le route definite.
    
5.  **Esportazione del Router:**
    
    -   L'istanza del router viene esportata per poter essere utilizzata nell'applicazione principale.


## Redirect e 404? No problem:

<img width="524" alt="Screenshot 2024-01-10 alle 16 04 05" src="https://github.com/simonedimeglio/vue-router/assets/78272736/8e47a470-9d23-4110-8d98-219e080d29c3">

