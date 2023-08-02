export const exitlist = {
	link: [
		//***** EXIT GAS E LUCE *****

		{
			id: "0122",
			claim: "Procedi con una <strong>nuova attivazione per la fornitura GAS e LUCE.</strong>",
			subclaim: "",

			actions: [
				{
					type: "new", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Ti guidiamo passo dopo passo, per la tua nuova attivazione GAS.</strong><br>Se non hai un contatore o non è ancora attivo, ti abbiamo riservato l'offerta esclusiva Cambio Casa.",
					text_docs: "",
					btn_label: "Scopri L'OFFERTA GAS",
					btn_url: "new",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "new", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Ti guidiamo passo dopo passo, per la tua nuova attivazione LUCE.</strong><br>Se non hai un contatore o non è ancora attivo, ti abbiamo riservato l'offerta esclusiva Cambio Casa.",
					text_docs: "",
					btn_label: "Scopri L'OFFERTA LUCE",
					btn_url: "new",
					underbox_title: "",
					underbox_text: ""
				},
			],
		},
		{
			id: "01210",
			claim: "Al momento <strong>puoi attivare solo l’offerta LUCE.</strong>",
			subclaim: "",

			actions: [
				{	
					type: "ko", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare l'offerta GAS, il contratto deve essere intestato a te.</strong><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: "",
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "new", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "Non hai un contatore per la luce o non è ancora attivo?<br>Ti abbiamo riservato l'offerta esclusiva Cambio Casa.",
					text_docs: "",
					btn_label: "Scopri L'OFFERTA LUCE",
					btn_url: "new",
					underbox_title: "",
					underbox_text: ""
				},
			],
		},
		{
			id: "012110",
			claim: "Puoi procedere con la tua <strong>nuova offerta GAS.</strong>",
			subclaim: "Per la tua <strong>fornitura LUCE</strong>, dovrai richiedere una <strong>nuova attivazione.</strong>",

			actions: [
				{
					type: "new", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "Non hai un contatore per la luce o non è ancora attivo?<br>Ti abbiamo riservato l'offerta esclusiva Cambio Casa.<br><br><a onclick=window.location.href='https://enigaseluce.com/offerta/casa/nuova-fornitura/luce'>Attiva la fornitura LUCE.</a>",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{	
					type: "success", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: '<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>',
					btn_label: "Continua",
					btn_url: "weborder",
					underbox_title: "",
					underbox_text: ""
				},
			],
		},

		{
			id: "01200",
			claim: "Ti occorre una <strong>voltura GAS.</strong>",
			subclaim: "Per cambiare offerta, <strong>devi prima diventare intestatario del contratto.</strong>",

			actions: [
				{
					type: "new", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "Non hai un contatore per la luce o non è ancora attivo?<br>Ti abbiamo riservato l'offerta esclusiva Cambio Casa.<br><br><a onclick=window.location.href='https://enigaseluce.com/offerta/casa/nuova-fornitura/luce'>Attiva la fornitura LUCE.</a>",
					text_docs: "",
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{	
					type: "alert", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: "<ul><li><strong>CODICE PDR</strong> per il gas</li><li><strong>Documento d’identità</strong></li></ul>",
					btn_label: "Richiedi la VOLTURA",
					btn_url: "voltura",
					underbox_title: "",
					underbox_text: ""
				},
			],
		},
		{
			id: "01201",
			claim: "Cambia la tua <strong>offerta GAS e attiva una nuova fornitura LUCE.</strong>",
			subclaim: "",

			actions: [
				{
					type: "new", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "Non hai un contatore per la luce o non è ancora attivo?<br>Ti abbiamo riservato l'offerta esclusiva Cambio Casa.<br><br><a onclick=window.location.href='https://enigaseluce.com/offerta/casa/nuova-fornitura/luce'>Attiva la fornitura LUCE.</a>",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{	
					type: "alert", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Accedi alla tua area My Eni</strong><br> e procedi con la sottoscrizione della nuova offerta.",
					text_docs: '',
					btn_label: "Accedi a MY ENI",
					btn_url: "myeni",
					underbox_title: "",
					underbox_text: ""
				},
			],
		},

		{
			id: "01102",
			claim: "Al momento <strong>puoi attivare solo l’offerta GAS.</strong>",
			subclaim: "",

			actions: [
				{	
					type: "ko", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare l'offerta LUCE, il contratto deve essere intestato a te.</strong><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{	
					type: "new", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Ti guidiamo passo dopo passo, per la tua nuova attivazione GAS.</strong><br>Se non hai un contatore o non è ancora attivo, ti abbiamo riservato l'offerta esclusiva Cambio Casa.",
					text_docs: '',
					btn_label: "Scopri L'OFFERTA GAS",
					btn_url: "new",
					underbox_title: "",
					underbox_text: ""
				},
				
			],
		},
		{
			id: "0110110",
			claim: "Al momento <strong>puoi attivare solo l’offerta GAS.</strong>",
			subclaim: "",

			actions: [
				{
					type: "ko", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare l'offerta LUCE, il contratto deve essere intestato a te.</strong><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{	
					type: "success", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: "<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>",
					btn_label: "Continua",
					btn_url: "weborder",
					underbox_title: "",
					underbox_text: ""
				},
			],
			
		},
		{
			id: "011010",
			claim: "Siamo spiacenti, al momento <strong>non puoi attivare l’offerta LUCE e GAS.</strong>",
			subclaim: "",

			actions: [
				{	
					type: "ko", // success, new, ko, alert
					supply: "Gas e luce", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare questa offerta, il contratto deve essere intestato a te.</strong><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					//underbox_text: "Sei l'intestatario del tuo contratto? <a>Modifica le tue risposte.</a>"
					underbox_text: "",
				},
			],
		},
		{
			id: "011000",
			claim: "Ti occorre una <strong>voltura GAS.</strong>",
			subclaim: "Per cambiare offerta, <strong>devi prima diventare intestatario del contratto.</strong>",

			actions: [
				{
					type: "ko", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare l'offerta LUCE, il contratto deve essere intestato a te.</strong><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{	
					type: "alert", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: '<ul><li><strong>CODICE PDR</strong> per il gas</li><li><strong>Documento d’identità</strong></li></ul>',
					btn_label: "Richiedi la VOLTURA",
					btn_url: "voltura",
					underbox_title: "",
					underbox_text: ""
				},
			],
			
		},
		{
			id: "011001",
			claim: "Cambia la tua <strong>offerta GAS.</strong>",
			subclaim: "",

			actions: [
				{
					type: "ko", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare l'offerta LUCE, il contratto deve essere intestato a te.</strong><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{	
					type: "alert", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Accedi alla tua area My Eni</strong><br> e procedi con la sottoscrizione della nuova offerta.",
					text_docs: '',
					btn_label: "Accedi a MY ENI",
					btn_url: "myeni",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_attivazione"
				},
			],
		},

		{
			id: "010000",
			claim: "Ti occorre una <strong>voltura GAS E LUCE.</strong>",
			subclaim: "Per cambiare offerta, <strong>devi prima diventare intestatario del contratto.</strong>",

			actions: [
				{
					type: "alert", // success, new, ko, alert
					supply: "Gas e luce", // Luce, Gas, Gas e luce
					text: '<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:',
					text_docs: '<ul><li><strong>Codice POD per la LUCE</strong></li><li><strong>CODICE PDR</strong> per il gas</li><li><strong>Documento d’identità</strong></li></ul>',
					btn_label: "Richiedi la VOLTURA",
					btn_url: "voltura",
					underbox_title: "",
					underbox_text: ""
				},
			],
			
		},
		{
			id: "010001",
			claim: "Cambia la tua <strong>offerta GAS.</strong>",
			subclaim: "",

			actions: [
				{
					type: "alert", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Per attivare la fornitura luce</strong> devi prima diventare intestatario del contratto. Vai sul sito del tuo attuale fornitore o contattalo <a onclick=window.location.href='https://enigaseluce.com/offerta/casa/nuova-fornitura/voltura'>per effettuare una voltura.</a>",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "alert", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Accedi alla tua area My Eni</strong><br> e procedi con la sottoscrizione della nuova offerta.",
					text_docs: '',
					btn_label: "Accedi a MY ENI",
					btn_url: "myeni",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_nuova_attivazione"
				},
			],
		},
		{
			id: "0100010",
			claim: "Ti occorre una <strong>voltura LUCE.</strong>",
			subclaim: "",

			actions: [
				{
					type: "ko", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare l'offerta GAS, il contratto deve essere intestato a te.</strong><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "alert", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: '<ul><li><strong>Codice POD per la LUCE</strong></li><li><strong>Documento d’identità</strong></li></ul>',
					btn_label: "Richiedi la VOLTURA",
					btn_url: "voltura",
					underbox_title: "",
					underbox_text: ""
				},
			],
		},

		
		{
			id: "01000110",
			claim: "Al momento <strong>puoi attivare solo l’offerta GAS.</strong>",
			subclaim: "",

			actions: [
				{
					type: "alert", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Per attivare la fornitura LUCE</strong> devi prima diventare intestatario del contratto. Vai sul sito del tuo attuale fornitore o contattalo per <a onclick=window.location.href='https://enigaseluce.com/offerta/casa/nuova-fornitura/voltura'>effettuare una voltura.</a>",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "success", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: '<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>',
					btn_label: "Continua",
					btn_url: "weborder",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_attivazione"
				},
			],
		},

		{
			id: "010002",
			claim: "Ti occorre una <strong>voltura LUCE.</strong>",
			subclaim: "Per la tua <strong>fornitura GAS</strong>, dovrai richiedere una <strong>nuova attivazione.</strong>",

			actions: [
				{
					type: "new", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "Non hai un contatore per il gas o non è ancora attivo?<br>Ti abbiamo riservato l'offerta esclusiva Cambio Casa.<br><br><a onclick=window.location.href='https://enigaseluce.com/offerta/casa/nuova-fornitura/gas'>Attiva la fornitura GAS.</a>",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "alert", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: '<ul><li><strong>Codice POD</strong> per la LUCE</li><li><strong>Documento d’identità</strong></li></ul>',
					btn_label: "Richiedi la VOLTURA",
					btn_url: "voltura",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_attivazione"
				},
			],
		},

		{
			id: "010100",
			claim: "Cambia la tua <strong>offerta Luce</strong>.",
			subclaim: "",

			actions: [
				{	
					type: "alert", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Per attivare la fornitura GAS</strong> devi prima diventare intestatario del contratto. Vai sul sito del tuo attuale fornitore o contattalo per <a onclick=window.location.href='https://enigaseluce.com/offerta/casa/nuova-fornitura/voltura'>effettuare una volutura.</a>",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "success", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Accedi all'area My Eni</strong><br>e procedi con la sottoscrizione della nuova offerta.",
					text_docs: '',
					btn_label: "Accedi a MY ENI",
					btn_url: "myeni",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_cambio_offerta"
				},
			],
			
		},
		{
			id: "010101",
			claim: "Cambia la tua <strong>offerta GAS E LUCE</strong>.",
			subclaim: "",

			actions: [
				{
					type: "success", // success, new, ko, alert
					supply: "Gas e luce", // Luce, Gas, Gas e luce
					text: "<strong>Accedi alla tua area My ENI</strong><br>e procedi con la sottoscrizione della nuova offerta.",
                    text_docs: "",
					btn_label: "Accedi a MY ENI",
					btn_url: "myeni",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_cambio_offerta"
				},
			],
		},

		{
			id: "0101110",
			claim: "Al momento <strong>puoi attivare solo l'offerta GAS.</strong>",
			subclaim: "",

			actions: [
				{
					type: "alert", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "Per cambiare l'offerta LUCE, accedi alla tua <a onclick=window.location.href='https://enigaseluce.com/my-eni'>area My Eni</a> e sottoscrivi la nuova offerta.",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{	
					type: "success", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: '<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:',
					text_docs: '<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>',
					btn_label: "Continua",
					btn_url: 'weborder',
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_attivazione"
				},
			],
		},

		{
			id: "010110",
			claim: "Cambia la tua <strong>offerta LUCE.</strong>",
			subclaim: "",

			actions: [
				{	
					type: "ko", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare l'offerta GAS, il contratto dev'essere intestato a te.</strong><br><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "alert", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Accedi alla tua area My Eni</strong><br>e procedi con la sottoscrizione della nuova offerta.",
					text_docs: '',
					btn_label: "Accedi a MY ENI",
					btn_url: "myeni",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_cambio_offerta"
				},
			],
		},

		{
			id: "01012",
			claim: "Cambia la tua <strong>offerta LUCE.</strong>",
			subclaim: "",

			actions: [
				{	
					type: "new", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "Non hai il contatore per il gas o non è ancora attivo?<br>Ti abbiamo riservato l'offerta esclusiva Cambio Casa.<br><br><a onclick=window.location.href='https://enigaseluce.com/offerta/casa/nuova-fornitura/gas'>Attiva la fornitura GAS</a>",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "alert", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Accedi alla tua area My Eni</strong><br>e procedi con la sottoscrizione della nuova offerta.",
					text_docs: '',
					btn_label: "Accedi a MY ENI",
					btn_url: "myeni",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_cambio_offerta"
				},
			],
		},

		{
			id: "0111200",
			claim: "Puoi procedere con la tua <strong>nuova offerta LUCE.</strong>",
			subclaim: "Per la tua <strong>fornitura GAS</strong>, dovrai richiedere una <strong>nuova attivazione.</strong>",

			actions: [
				{	
					type: "new", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "Non hai un contatore per il gas o non è ancora attivo?<br>Ti abbiamo riservato l'offerta esclusiva Cambio Casa.<br><br><a onclick=window.location.href='https://enigaseluce.com/offerta/casa/nuova-fornitura/gas'>Attiva la fornitura GAS.</a>",
					text_docs: "",
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "success", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: "<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>",
					btn_label: "Continua",
					btn_url: "weborder",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_attivazione"
				},
			],
		},
		{
			id: "01110000",
			claim: "Al momento <strong>puoi attivare solo l’offerta LUCE.</strong>",
			subclaim: "",

			actions: [
				{
					type: "alert", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Per attivare la fornitura gas</strong> devi prima diventare intestatario del contratto. Vai sul sito del tuo attuale fornitore o contattalo <a onclick=window.location.href='https://enigaseluce.com/offerta/casa/nuova-fornitura/voltura'>per effettuare una voltura.</a>",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "success", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: '<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>',
					btn_label: "Continua",
					btn_url: "weborder",
					underbox_title: "",
					underbox_text: ""
				},
			],
		},
		{
			id: "01110100",
			claim: "Al momento <strong>puoi attivare solo l’offerta LUCE.</strong>",
			subclaim: "",

			actions: [
				{
					type: "alert", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "Per cambiare l'offerta GAS, accedi alla tua <a onclick=window.location.href='https://enigaseluce.com/my-eni'>area My Eni</a> e sottoscrivi la nuova offerta.",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				},
				{
					type: "success", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: '<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>',
					btn_label: "Continua",
					btn_url: "weborder",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_attivazione"
				},
			],
		},
		{
			id: "01111000",
			claim: "Al momento <strong>puoi attivare solo l’offerta LUCE.</strong>",
			subclaim: "",

			actions: [
				{	
					type: "ko", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare l'offerta GAS, il contratto deve essere intestato a te.</strong><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: '',
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: " "
				},
				{
					type: "success", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: '<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>',
					btn_label: "Contiua",
					btn_url: "weborder",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_nuova_attivazione"
				},
			],
		},
		{
			id: "01111100",
			claim: "Ora puoi procedere ad <strong>attivare l’offerta.</strong>",
			subclaim: "",

			actions: [
				{	
					type: "success", // success, new, ko, alert
					supply: "Gas e Luce", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: '<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>',
					btn_label: "Continua",
					btn_url: "weborder",
					underbox_title: "",
					underbox_text: "",
					eventCategory: "dual_attivazione"
				},
			],
		},

		//***** EXIT LUCE *****
		{
			id: "022",
			claim: "Per la tua <strong>fornitura LUCE</strong>, dovrai richiedere una <strong>nuova attivazione.</strong>",
			subclaim: "",

			actions: [
				{
					type: "new", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Ti guidiamo passo dopo passo, per la tua nuova attivazione LUCE.</strong><br>Se non hai un contatore o non è ancora attivo, ti abbiamo riservato l'offerta esclusiva Cambio Casa.",
					text_docs: "",
					btn_label: "SCOPRI L'OFFERTA LUCE",
					btn_url: "new",
					underbox_title: "",
					underbox_text: ""
				}
			],
		},
		{
			id: "0200",
			claim: "Ti occorre una <strong>voltura LUCE.</strong>",
			subclaim: "",

			actions: [
				{
					type: "alert", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: "<ul><li><strong>Codice POD per la LUCE</strong></li><li><strong>Documento d’identità</strong></li></ul>",
					btn_label: "Richiedi la VOLTURA",
					btn_url: "voltura",
					underbox_title: "",
					underbox_text: ""	
				}
			],
		},
		{
			id: "0201",
			claim: "Cambia la tua <strong>offerta LUCE.</strong>",
			subclaim: "",

			actions: [
				{
					type: "alert", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Accedi alla tua area My Eni</strong><br> e procedi con la sottoscrizione della nuova offerta.",
					text_docs: '',
					btn_label: "Accedi a MY ENI",
					btn_url: "myeni",
					underbox_title: "",
					underbox_text: ""
				}
			],
		},
		{
			id: "0210",
			claim: "Siamo spiacenti, al momento <strong>non puoi attivare l’offerta LUCE.</strong>",
			subclaim: "",

			actions: [
				{
					type: "ko", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare l'offerta LUCE, il contratto deve essere intestato a te.</strong><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: "",
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				}
			],
		},

		{
			id: "021100",
			claim: "Ora puoi procedere ad <strong>attivare l’offerta.</strong>",
			subclaim: "",

			actions: [
				{
					type: "success", // success, new, ko, alert
					supply: "Luce", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: "<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>",
					btn_label: "Continua",
					btn_url: "weborder",
					underbox_title: "",
					underbox_text: ""	
				}
			],
		},

		//***** EXIT GAS *****
		{
			id: "032",
			claim: "Per la tua <strong>fornitura GAS</strong>, dovrai richiedere una <strong>nuova attivazione.</strong>",
			subclaim: "",

			actions: [
				{
					type: "new", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Ti guidiamo passo dopo passo, per la tua nuova attivazione GAS.</strong><br>Se non hai un contatore o non è ancora attivo, ti abbiamo riservato l'offerta esclusiva Cambio Casa.",
					text_docs: "",
					btn_label: "SCOPRI L'OFFERTA GAS",
					btn_url: "new",
					underbox_title: "",
					underbox_text: ""	
				}
			],
		},

		{
			id: "0300",
			claim: "Ti occorre una <strong>voltura GAS.</strong>",
			subclaim: "",

			actions: [
				{
					type: "alert", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: "<ul><li><strong>CODICE PDR</strong> per il gas</li><li><strong>Documento d’identità</strong></li></ul>",
					btn_label: "Richiedi la VOLTURA",
					btn_url: "voltura",
					underbox_title: "",
					underbox_text: ""
				}
			],
		},

		{
			id: "0301",
			claim: "Cambia la tua <strong>offerta GAS.</strong>",
			subclaim: "",

			actions: [
				{
					type: "alert", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Accedi alla tua area My Eni</strong><br> e procedi con la sottoscrizione della nuova offerta.",
					text_docs: '',
					btn_label: "Accedi a MY ENI",
					btn_url: "myeni",
					underbox_title: "",
					underbox_text: "",			
				}
			],
		},
		
		{
			id: "0310",
			claim: "Siamo spiacenti, al momento <strong>non puoi attivare l’offerta GAS.</strong>",
			subclaim: "",

			actions: [
				{
					type: "ko", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Se vuoi attivare l'offerta GAS, il contratto deve essere intestato a te.</strong><br>Puoi cambiare fornitore solo se i dati dell'intestatario restano invariati.",
					text_docs: "",
					btn_label: "",
					btn_url: "",
					underbox_title: "",
					underbox_text: ""
				}
			],
		},

		{
			id: "03110",
			claim: "Ora puoi procedere ad <strong>attivare l’offerta.</strong>",
			subclaim: "",

			actions: [
				{
					type: "success", // success, new, ko, alert
					supply: "Gas", // Luce, Gas, Gas e luce
					text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
					text_docs: "<ul><li>l’ultima <strong>bolletta</strong></li><li>L’<strong>IBAN</strong> per l’addebito diretto</li></ul>",
					btn_label: "Continua",
					btn_url: "weborder",
					underbox_title: "",
					underbox_text: ""	
				}
			],
		},
	]
};
