# Node-hello-world

## Consegna

- Creiamo la prima applicazione con NodeJs e inizializziamola con npm init
- Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”. Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.
- Impostiamo ora uno script “start” in package.json e facciamo in modo di lanciare il nostro script con npm run start
- Impostiamo un nuovo script “watch” in package.json che possa essere lanciato con npm run watch e che aggiorni in tempo reale le modifiche ai nostri file. Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.

- BONUS: proviamo a modificare la nostra app Node, in modo da passare dal terminale una frase diversa da “Hello Boolean”.

---

## Svolgimento

L'esercizio odierno consiste nella creazione di una prima applicazione con Node.js, inizianizzandola con il comando node base "**npm init**". In questo modo si va a generare un file "**package.json**", ovvero un file chiave utilizzato in un progetto Node.js per descrivere le informazioni sul progetto stesso.


Tra le voci più importanti all'interno del **"package.json"** troviamo "*scripts*", un oggetto dove possiamo impostare degli "alias" per
lanciare i comandi dal terminale più comodamente. 
Lo scopo dell'esercizio é impostare lo script "*start*" e "*watch*" (le chiavi dell'oggetto) in modo da lanciare i comandi dal terminale utilizzando "**npm start**" e "**npm watch**".


In particolare con "**npm start**" lanciamo lo script in modo che, il file index.js creato, stampi nel terminale "Hello World", mentre con il comando "**npm watch**" facciamo sì che gli aggiornamenti del file avverranno in automatico. In questo modo, quando *"Hello World"* viene modificato in *"Hello Boolean"*, nel terminale vedremo l'aggiornamento del file senza rilanciare il servere manualmente.
Il codice così sarà più breve ed efficace. 

### Bonus

I vari elementi del comando vengono resi disponibili tramite **process.argv** che restituisce un array e può essere sfruttato all'interno dei file per eseguire delle operazioni. In questo caso, passando un argomento (la nuova frase), bisognerà stampare l'argomento passato. Se l'argomento è nullo o undefined, allora verrà stampata la frase "*Hello Boolean*".


