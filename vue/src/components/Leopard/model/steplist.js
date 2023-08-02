export const steplist = {
	link: {
		id: "0", // domanda iniziale
		action: "step",
		micro_step: "scelta_fornitura",
		type: "commodity-setup", // unica di type multi e subtype iconbuttons
		subtype: "iconbuttons",
		label: "Stai attivando l'offerta LINK ",
		intro: null,
		rightbox: "vuoto",
		trackingclass: ["fornitura"],
		questions: ["Di quale fornitura hai bisogno?"],
		choices: [
			"LUCE E GAS", // 1
			"LUCE", // 2
			"GAS" // 3
		],
		icons: ["icon-dual", "icon-lampadina", "icon-gas"],
		child: {
			path_1: {
				//path 1 LUCE E GAS - DUAL
				id: "01",
				action: "step",
				micro_step: "check_fornitura_luce",
				type: "multi",
				subtype: "normal",
				label: "Stai attivando l’offerta LINK luce e gas",
				intro: "Iniziamo dalla tua fornitura <span>LUCE.</span>",
				rightbox: "none",
				trackingclass: ["dual-01-forniture"],
				questions: [""], // questions: ["La fornitura LUCE è attiva?"],
				choices: [
					"È GIÀ ATTIVA CON PLENITUDE", // 0
					"SONO CLIENTE DI UN ALTRO FORNITORE", // 1
					"LA FORNITURA LUCE NON È ATTIVA" // 2
				],
				choicesexplain: [
					"",
					"voglio passare a Eni Gas e Luce", 
					""
				],
				child: {
					path_0: {
						id: "010",
						action: "step",
						micro_step: "intestatario_luce",
						type: "normal",
						subtype: "normal",
						label: "Stai attivando l’offerta LINK luce e gas",
						intro: "Una domanda sulla tua fornitura <span>LUCE</span>.",
						rightbox: "none",
						trackingclass: ["luce-010-intestatario"],
						questions: ["A chi è intestato il contratto?"],
						choices: [
							"A ME", // 1
							"A UN'ALTRA PERSONA", // 0
						],
						choicesexplain: [
							"",
							"voglio diventare intestatario del contratto", 
						],
						child: {
							path_1: {
								id: "0101",
								action: "step",
								micro_step: "check_fornitura_gas",
								type: "multi",
								subtype: "normal",
								label: "Stai attivando l’offerta LINK luce e gas",
								intro: "Abbiamo terminato con la LUCE, adesso parliamo del <span>GAS</span>.",
								rightbox: "none",
								trackingclass: ["dual-0101-forniture"],
								questions: [""],
								choices: [
									"È GIÀ ATTIVA CON PLENITUDE", // 0
									"SONO CLIENTE DI UN ALTRO FORNITORE", // 1
									"LA FORNITURA GAS NON È ATTIVA" // 2
								],
								choicesexplain: [
									"",
									"voglio passare a Eni Gas e Luce", 
									""
								],
								child: {
									path_0: {
										id: "01010",
										action: "step",
										micro_step: "intestatario_gas",
										type: "normal",
										subtype: "normal",
										label: "Stai attivando l’offerta LINK luce e gas",
										intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
										rightbox: "none",
										trackingclass: ["gas-01010-intestatario"],
										questions: ["A chi è intestato il contratto?"],
										choices: [
											"A ME", // 1
											"A UN'ALTRA PERSONA", // 0
										],
										choicesexplain: [
											"",
											"voglio diventare intestatario del contratto", 
										],
										child: {
											path_0: {
												action: "exit",
												micro_step: "end_voltura_cambio",
												id: "010100"
											},
											path_1: {
												action: "exit",
												micro_step: "end_cambio_cambio",
												id: "010101"
											}
										}
									},

									path_1: {
										id: "01011",
										action: "step",
										micro_step: "intestatario_gas",
										type: "normal",
										subtype: "normal",
										label: "Stai attivando l’offerta LINK luce e gas",
										intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
										rightbox: "none",
										trackingclass: ["gas-01011-intestatario"],
										questions: ["A chi è intestato il contratto?"],
										choices: [
											"A ME", // 1
											"A UN'ALTRA PERSONA", // 0
										],
										choicesexplain: [
											"",
											"voglio diventare intestatario del contratto", 
										],
										child: {
											path_0: {
												action: "exit",
												micro_step: "end_volturaext_cambio",
												id: "010110"
											},

											path_1: {
												id: "010111",
												action: "step",
												micro_step: "pagamento_bolletta",
												type: "payment-setup",
												subtype: "iconbuttons",
												label: "Stai attivando l’offerta LINK luce e gas",
												intro: null,
												rightbox: "paymentSummary",
												trackingclass: ["gas-010111-pagamento"],
												event_category: "pagamento_bolletta_dual",
												questions: [
													"Seleziona la modalità di pagamento",
													"Seleziona il tipo di bolletta"
												],
												choices: {
													0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
													1: ["CARTACEA", "DIGITALE"]
												},
												icons: {
													0: ["icon-bollettino-postale", "icon-CC-bancario"],
													1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
												},
												event_labels: {
													0: ["addebito_cartacea", "addebito_digitale"],
													1: ["bollettino_cartacea", "bollettino_digitale"]
												},
												child: {
													path_00: {
														action: "exit",
														micro_step: "end_switch_cambio",
														id: "0101110"
													},
													path_01: {
														action: "exit",
														micro_step: "end_switch_cambio",
														id: "0101110"
													},
													path_10: {
														action: "exit",
														micro_step: "end_switch_cambio",
														id: "0101110"
													},
													path_11: {
														action: "exit",
														micro_step: "end_switch_cambio",
														id: "0101110"
													}
												}
											}
										}
									},

									path_2: {
										id: "01012",
										action: "exit",
										micro_step: "end_cambio_voltura",
									}
								}
							},

							path_0: {
								id: "0100",
								action: "step",
								micro_step: "check_fornitura_gas",
								type: "multi",
								subtype: "normal",
								label: "Stai attivando l’offerta LINK luce e gas",
								intro: "Abbiamo terminato con la LUCE, adesso parliamo del <span>GAS</span>.",
								rightbox: "none",
								trackingclass: ["dual-0100-forniture"],
								questions: ["La fornitura GAS è attiva?"],
								choices: [
									"È GIÀ ATTIVA CON PLENITUDE", // 0
									"SONO CLIENTE DI UN ALTRO FORNITORE", // 1
									"LA FORNITURA GAS NON È ATTIVA" // 2
								],
								choicesexplain: [
									"",
									"voglio passare a Eni Gas e Luce", 
									""
								],
								child: {
									path_0: {
										id: "01000",
										action: "step",
										micro_step: "intestatario_gas",
										type: "normal",
										subtype: "normal",
										label: "Stai attivando l’offerta LINK luce e gas",
										intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
										rightbox: "none",
										trackingclass: ["gas-01000-intestatario"],
										questions: ["A chi è intestato il contratto?"],
										choices: [
											"A ME", // 1
											"A UN'ALTRA PERSONA", // 0
										],
										choicesexplain: [
											"",
											"voglio diventare intestatario del contratto", 
										],
										child: {
											path_0: {
												action: "exit",
												micro_step: "end_voltura_voltura",
												id: "010000"
											},
											path_1: {
												action: "exit",
												micro_step: "end_attivazione_cambio",
												id: "010001"
											}
										}
									},

									path_1: {
										id: "010001",
										action: "step",
										micro_step: "intestatario_gas",
										type: "normal",
										subtype: "normal",
										label: "Stai attivando l’offerta LINK luce e gas",
										intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
										rightbox: "none",
										trackingclass: ["gas-010001-intestatario"],
										questions: ["A chi è intestato il contratto?"],
										choices: [
											"A ME", // 1
											"A UN'ALTRA PERSONA", // 0
										],
										choicesexplain: [
											"",
											"voglio diventare intestatario del contratto", 
										],
										child: {
											path_0: {
												action: "exit",
												micro_step: "end_volturaext_voltura",
												id: "0100010"
											},

											path_1: {
												id: "0100011",
												action: "step",
												micro_step: "pagamento_bolletta",
												type: "payment-setup",
												subtype: "iconbuttons",
												label: "Stai attivando l’offerta LINK luce e gas",
												intro: null,
												rightbox: "paymentSummary",
												trackingclass: ["gas-010001-pagamento"],
												event_category: "pagamento_bolletta_dual",
												questions: [
													"Seleziona la modalità di pagamento",
													"Seleziona il tipo di bolletta"
												],
												choices: {
													0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
													1: ["CARTACEA", "DIGITALE"]
												},
												icons: {
													0: ["icon-bollettino-postale", "icon-CC-bancario"],
													1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
												},
												event_labels: {
													0: ["addebito_cartacea", "addebito_digitale"],
													1: ["bollettino_cartacea", "bollettino_digitale"]
												},
												child: {
													path_00: {
														action: "exit",
														micro_step: "end_switch_voltura",
														id: "01000110"
													},
													path_01: {
														action: "exit",
														micro_step: "end_switch_voltura",
														id: "01000110"
													},
													path_10: {
														action: "exit",
														micro_step: "end_switch_voltura",
														id: "01000110"
													},
													path_11: {
														action: "exit",
														micro_step: "end_switch_voltura",
														id: "01000110"
													}
												}
											}
										}
									},

									path_2: {
										id: "010002",
										action: "exit",
										micro_step: "end_cambio_switch"
									}
								}
							}
						}
					},

					path_1: {
						id: "011",
						action: "step",
						micro_step: "intestatario_luce",
						type: "normal",
						subtype: "normal",
						label: "Stai attivando l’offerta LINK luce e gas",
						intro: "Una domanda sulla tua fornitura <span>LUCE</span>.",
						rightbox: "none",
						trackingclass: ["luce-011-intestatario"],
						questions: ["A chi è intestato il contratto?"],
						choices: [
							"A ME", // 1
							"A UN'ALTRA PERSONA", // 0
						],
						choicesexplain: [
							"",
							"voglio diventare intestatario del contratto", 
						],
						child: {
							path_0: {
								id: "0110",
								action: "step",
								micro_step: "check_fornitura_gas",
								type: "multi",
								subtype: "normal",
								label: "Stai attivando l’offerta LINK luce e gas",
								intro: "Abbiamo terminato con la LUCE, adesso parliamo del GAS.",
								rightbox: "none",
								trackingclass: ["dual-0110-forniture"],
								questions: ["La fornitura GAS è attiva?"],
								choices: [
									"È GIÀ ATTIVA CON PLENITUDE", // 0
									"SONO CLIENTE DI UN ALTRO FORNITORE", // 1
									"LA FORNITURA GAS NON È ATTIVA" // 2
								],
								choicesexplain: [
									"",
									"voglio passare a Eni Gas e Luce", 
									""
								],
								child: {
									path_0: {
										id: "01100",
										action: "step",
										micro_step: "intestatario_gas",
										type: "normal",
										subtype: "normal",
										label: "Stai attivando l’offerta LINK luce e gas",
										intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
										rightbox: "none",
										trackingclass: ["gas-01100-intestatario"],
										questions: ["A chi è intestato il contratto?"],
										choices: [
											"A ME", // 1
											"A UN'ALTRA PERSONA", // 0
										],
										choicesexplain: [
											"",
											"voglio diventare intestatario del contratto", 
										],
										child: {
											path_0: {
												action: "exit",
												micro_step: "end_voltura_volturaext",
												id: "011000"
											},
											path_1: {
												action: "exit",
												micro_step: "end_cambio_volturaext",
												id: "011001"
											}
										}
									},

									path_1: {
										id: "01101",
										action: "step",
										micro_step: "intestatario_gas",
										type: "normal",
										subtype: "normal",
										label: "Stai attivando l’offerta LINK luce e gas",
										intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
										rightbox: "none",
										trackingclass: ["gas-01101-intestatario"],
										questions: ["A chi è intestato il contratto?"],
										choices: [
											"A ME", // 1
											"A UN'ALTRA PERSONA", // 0
										],
										choicesexplain: [
											"",
											"voglio diventare intestatario del contratto", 
										],
										child: {
											path_0: {
												action: "exit",
												micro_step: "end_volturaext_volturaext",
												id: "011010"
											},

											path_1: {
												id: "011011",
												action: "step",
												micro_step: "pagamento_bolletta",
												type: "payment-setup",
												subtype: "iconbuttons",
												label: "Stai attivando l’offerta LINK luce e gas",
												intro: null,
												rightbox: "paymentSummary",
												trackingclass: ["gas-011011-pagamento"],
												event_category: "pagamento_bolletta_dual",
												questions: [
													"Seleziona la modalità di pagamento",
													"Seleziona il tipo di bolletta"
												],
												choices: {
													0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
													1: ["CARTACEA", "DIGITALE"]
												},
												icons: {
													0: ["icon-bollettino-postale", "icon-CC-bancario"],
													1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
												},
												event_labels: {
													0: ["addebito_cartacea", "addebito_digitale"],
													1: ["bollettino_cartacea", "bollettino_digitale"]
												},
												child: {
													path_00: {
														action: "exit",
														micro_step: "end_switch_volturaext",
														id: "0110110"
													},
													path_01: {
														action: "exit",
														micro_step: "end_switch_volturaext",
														id: "0110110"
													},
													path_10: {
														action: "exit",
														micro_step: "end_switch_volturaext",
														id: "0110110"
													},
													path_11: {
														action: "exit",
														micro_step: "end_switch_volturaext",
														id: "0110110"
													}
												}
											}
										}
									},

									path_2: {
										id: "01102",
										action: "exit",
										micro_step: "end_attivazione_volturaext",
										// Nuova attivazione LUCE e GAS
									}
								}
							},

							path_1: {
								id: "0111",
								action: "step",
								micro_step: "check_fornitura_gas",
								type: "multi",
								subtype: "normal",
								label: "Stai attivando l’offerta LINK luce e gas",
								intro: "Abbiamo terminato con la LUCE, adesso parliamo del <span>GAS</span>.",
								rightbox: "none",
								trackingclass: ["dual-0111-forniture"],
								questions: ["La fornitura GAS è attiva?"],
								choices: [
									"È GIÀ ATTIVA CON PLENITUDE", // 0
									"SONO CLIENTE DI UN ALTRO FORNITORE", // 1
									"LA FORNITURA GAS NON È ATTIVA" // 2
								],
								choicesexplain: [
									"",
									"voglio passare a Eni Gas e Luce", 
									""
								],
								child: {
									path_0: {
										id: "01110",
										action: "step",
										micro_step: "intestatario_gas",
										type: "normal",
										subtype: "normal",
										label: "Stai attivando l’offerta LINK luce e gas",
										intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
										rightbox: "none",
										trackingclass: ["gas-01101-intestatario"],
										questions: ["A chi è intestato il contratto?"],
										choices: [
											"A ME", // 1
											"A UN'ALTRA PERSONA", // 0
										],
										choicesexplain: [
											"",
											"voglio diventare intestatario del contratto", 
										],
										child: {
											path_0: {
												id: "011100",
												action: "step",
												micro_step: "scelta_tariffa",
												type: "fare-setup",
												subtype: "largebuttons",
												label: "Stai attivando l’offerta LINK luce e gas",
												intro: null,
												rightbox: "paymentSummary",
												trackingclass: ["luce-011100-tariffa"],
												questions: ["Quale tariffa preferisci?"],
												child: {
													path_1: {
														action: "step-after-config",
														micro_step: "",
														id: ""
													},
													path_0: {
														id: "0111000",
														action: "step",
														micro_step: "pagamento_bolletta",
														type: "payment-setup",
														subtype: "iconbuttons",
														label: "Stai attivando l’offerta LINK luce e gas",
														intro: null,
														rightbox: "paymentSummary",
														trackingclass: ["luce-0111000-pagamento"],
														event_category: "pagamento_bolletta_dual",
														questions: [
															"Seleziona la modalità di pagamento",
															"Seleziona il tipo di bolletta"
														],
														choices: {
															0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
															1: ["CARTACEA", "DIGITALE"]
														},
														icons: {
															0: ["icon-bollettino-postale", "icon-CC-bancario"],
															1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
														},
														event_labels: {
															0: ["addebito_cartacea", "addebito_digitale"],
															1: ["bollettino_cartacea", "bollettino_digitale"]
														},
														child: {
															path_00: {
																action: "exit",
																micro_step: "end_volturaext_switch",
																id: "01110000"
															},
															path_01: {
																action: "exit",
																micro_step: "end_volturaext_switch",
																id: "01110000"
															},
															path_10: {
																action: "exit",
																micro_step: "end_volturaext_switch",
																id: "01110000"
															},
															path_11: {
																action: "exit",
																micro_step: "end_volturaext_switch",
																id: "01110000"
															}
														}
													}
												}
											},

											path_1: {
												id: "011101",
												action: "step",
												micro_step: "scelta_tariffa",
												type: "fare-setup",
												subtype: "largebuttons",
												label: "Stai attivando l’offerta LINK luce e gas",
												intro: null,
												rightbox: "paymentSummary",
												trackingclass: ["luce-011101-tariffa"],
												questions: ["Quale tariffa preferisci?"],
												child: {
													path_1: {
														action: "step-after-config",
														micro_step: "",
														id: ""
													},
													path_0: {
														id: "0111010",
														action: "step",
														micro_step: "pagamento_bolletta",
														type: "payment-setup",
														subtype: "iconbuttons",
														label: "Stai attivando l’offerta LINK luce e gas",
														intro: null,
														rightbox: "paymentSummary",
														trackingclass: ["luce-0111010-pagamento"],
														event_category: "pagamento_bolletta_dual",
														questions: [
															"Seleziona la modalità di pagamento",
															"Seleziona il tipo di bolletta"
														],
														choices: {
															0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
															1: ["CARTACEA", "DIGITALE"]
														},
														icons: {
															0: ["icon-bollettino-postale", "icon-CC-bancario"],
															1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
														},
														event_labels: {
															0: ["addebito_cartacea", "addebito_digitale"],
															1: ["bollettino_cartacea", "bollettino_digitale"]
														},
														child: {
															path_00: {
																action: "exit",
																micro_step: "end_voltura_switch",
																id: "01110100"
															},
															path_01: {
																action: "exit",
																micro_step: "end_voltura_switch",
																id: "01110100"
															},
															path_10: {
																action: "exit",
																micro_step: "end_voltura_switch",
																id: "01110100"
															},
															path_11: {
																action: "exit",
																micro_step: "end_voltura_switch",
																id: "01110100"
															}
														}
													}
												}
											}
										}
									},

									path_1: {
										id: "01111",
										action: "step",
										micro_step: "intestatario_gas",
										type: "normal",
										subtype: "normal",
										label: "Stai attivando l’offerta LINK luce e gas",
										intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
										rightbox: "none",
										trackingclass: ["gas-01111-intestatario"],
										questions: ["A chi è intestato il contratto?"],
										choices: [
											"A ME", // 1
											"A UN'ALTRA PERSONA", // 0
										],
										choicesexplain: [
											"",
											"voglio diventare intestatario del contratto", 
										],
										child: {
											path_0: {
												id: "011110",
												action: "step",
												micro_step: "scelta_tariffa",
												type: "fare-setup",
												subtype: "largebuttons",
												label: "Stai attivando l’offerta LINK luce e gas",
												intro: null,
												rightbox: "paymentSummary",
												trackingclass: ["luce-011110-tariffa"],
												questions: ["Quale tariffa preferisci?"],
												child: {
													path_1: {
														action: "step-after-config",
														micro_step: "",
														id: ""
													},
													path_0: {
														id: "0111100",
														action: "step",
														micro_step: "pagamento_bolletta",
														type: "payment-setup",
														subtype: "iconbuttons",
														label: "Stai attivando l’offerta LINK luce e gas",
														intro: null,
														rightbox: "paymentSummary",
														trackingclass: ["luce-0111100-pagamento"],
														event_category: "pagamento_bolletta_dual",
														questions: [
															"Seleziona la modalità di pagamento",
															"Seleziona il tipo di bolletta"
														],
														choices: {
															0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
															1: ["CARTACEA", "DIGITALE"]
														},
														icons: {
															0: ["icon-bollettino-postale", "icon-CC-bancario"],
															1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
														},
														event_labels: {
															0: ["addebito_cartacea", "addebito_digitale"],
															1: ["bollettino_cartacea", "bollettino_digitale"]
														},
														child: {
															path_00: {
																action: "exit",
																micro_step: "end_attivazione_voltura",
																id: "01111000"
															},
															path_01: {
																action: "exit",
																micro_step: "end_attivazione_voltura",
																id: "01111000"
															},
															path_10: {
																action: "exit",
																micro_step: "end_attivazione_voltura",
																id: "01111000"
															},
															path_11: {
																action: "exit",
																micro_step: "end_attivazione_voltura",
																id: "01111000"
															}
														}
													}
												}
											},

											path_1: {
												id: "011111",
												action: "step",
												micro_step: "scelta_tariffa",
												type: "fare-setup",
												subtype: "largebuttons",
												label: "Stai attivando l’offerta LINK luce e gas",
												intro: null,
												rightbox: "paymentSummary",
												trackingclass: ["luce-011111-tariffa"],
												questions: ["Quale tariffa preferisci?"],
												child: {
													path_1: {
														action: "step-after-config",
														micro_step: "",
														id: ""
													},
													path_0: {
														id: "0111110",
														action: "step",
														micro_step: "pagamento_bolletta",
														type: "payment-setup",
														subtype: "iconbuttons",
														label: "Configura la tua offerta",
														intro: null,
														rightbox: "paymentSummary",
														trackingclass: ["luce-0111110-pagamento"],
														event_category: "pagamento_bolletta_dual",
														questions: [
															"Seleziona la modalità di pagamento",
															"Seleziona il tipo di bolletta"
														],
														choices: {
															0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
															1: ["CARTACEA", "DIGITALE"]
														},
														icons: {
															0: ["icon-bollettino-postale", "icon-CC-bancario"],
															1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
														},
														event_labels: {
															0: ["addebito_cartacea", "addebito_digitale"],
															1: ["bollettino_cartacea", "bollettino_digitale"]
														},
														child: {
															path_00: {
																action: "exit",
																micro_step: "end_switch_switch",
																id: "01111100"
															},
															path_01: {
																action: "exit",
																micro_step: "end_switch_switch",
																id: "01111100"
															},
															path_10: {
																action: "exit",
																micro_step: "end_switch_switch",
																id: "01111100"
															},
															path_11: {
																action: "exit",
																micro_step: "end_switch_switch",
																id: "01111100"
															}
														}
													}
												}
											}
										}
									},

									path_2: {
										id: "01112",
										action: "step",
										micro_step: "scelta_tariffa",
										type: "fare-setup",
										subtype: "largebuttons",
										label: "Stai attivando l’offerta LINK luce e gas",
										intro: null,
										rightbox: "paymentSummary",
										trackingclass: ["luce-01112-tariffa"],
										questions: ["Quale tariffa preferisci?"],
										child: {
											path_1: {
												action: "step-after-config",
												micro_step: "",
												id: ""
											},
											path_0: {
												id: "011120",
												action: "step",
												micro_step: "pagamento_bolletta",
												type: "payment-setup",
												subtype: "iconbuttons",
												label: "Stai attivando l’offerta LINK luce e gas",
												intro: null,
												rightbox: "paymentSummary",
												trackingclass: ["luce-011120-pagamento"],
												event_category: "pagamento_bolletta_dual",
												questions: [
													"Seleziona la modalità di pagamento",
													"Seleziona il tipo di bolletta"
												],
												choices: {
													0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
													1: ["CARTACEA", "DIGITALE"]
												},
												icons: {
													0: ["icon-bollettino-postale", "icon-CC-bancario"],
													1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
												},
												event_labels: {
													0: ["addebito_cartacea", "addebito_digitale"],
													1: ["bollettino_cartacea", "bollettino_digitale"]
												},
												child: {
													path_00: {
														action: "exit",
														micro_step: "end_attivazione_switch",
														id: "0111200"
													},
													path_01: {
														action: "exit",
														micro_step: "end_attivazione_switch",
														id: "0111200"
													},
													path_10: {
														action: "exit",
														micro_step: "end_attivazione_switch",
														id: "0111200"
													},
													path_11: {
														action: "exit",
														micro_step: "end_attivazione_switch",
														id: "0111200"
													}
												}
											}
										}
									}
								}
							}
						}
					},

					path_2: {
						id: "012",
						action: "step",
						micro_step: "check_fornitura_gas",
						type: "multi",
						subtype: "normal",
						label: "Stai attivando l’offerta LINK luce e gas",
						intro: "Abbiamo terminato con la LUCE, adesso parliamo del <span>GAS</span>.",
						rightbox: "none",
						trackingclass: ["dual-012-forniture"],
						questions: ["La fornitura GAS è attiva?"],
						choices: [
							"È GIÀ ATTIVA CON PLENITUDE", // 0
							"SONO CLIENTE DI UN ALTRO FORNITORE", // 1
							"LA FORNITURA GAS NON È ATTIVA" // 2
						],
						choicesexplain: [
							"",
							"voglio passare a Eni Gas e Luce", 
							""
						],
						child: {
							path_0: {
								id: "0120",
								action: "step",
								micro_step: "intestatario_gas",
								type: "normal",
								subtype: "normal",
								label: "Stai attivando l’offerta LINK luce e gas",
								intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
								rightbox: "none",
								trackingclass: ["gas-0120-intestatario"],
								questions: ["A chi è intestato il contratto?"],
								choices: [
									"A ME", // 1
									"A UN'ALTRA PERSONA", // 0
								],
								choicesexplain: [
									"",
									"voglio diventare intestatario del contratto", 
								],
								child: {
									path_0: {
										action: "exit",
										micro_step: "end_voltura_attivazione",
										id: "01200"
									},
									path_1: {
										action: "exit",
										micro_step: "end_cambio_attivazione",
										id: "01201"
									}
								}
							},

							path_1: {
								id: "0121",
								action: "step",
								micro_step: "intestatario_gas",
								type: "normal",
								subtype: "normal",
								label: "Stai attivando l’offerta LINK luce e gas",
								intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
								rightbox: "none",
								trackingclass: ["gas-0121-intestatario"],
								questions: ["A chi è intestato il contratto?"],
								choices: [
									"A ME", // 1
									"A UN'ALTRA PERSONA", // 0
								],
								choicesexplain: [
									"",
									"voglio diventare intestatario del contratto", 
								],
								child: {
									path_0: {
										action: "exit",
										micro_step: "end_volturaext_attivazione",
										id: "01210"
									},

									path_1: {
										id: "01211",
										action: "step",
										micro_step: "pagamento_bolletta",
										type: "payment-setup",
										subtype: "iconbuttons",
										label: "Stai attivando l’offerta LINK luce e gas",
										intro: null,
										rightbox: "paymentSummary",
										trackingclass: ["gas-01211-pagamento"],
										event_category: "pagamento_bolletta_dual",
										questions: [
											"Seleziona la modalità di pagamento",
											"Seleziona il tipo di bolletta"
										],
										choices: {
											0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
											1: ["CARTACEA", "DIGITALE"]
										},
										icons: {
											0: ["icon-bollettino-postale", "icon-CC-bancario"],
											1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
										},
										event_labels: {
											0: ["addebito_cartacea", "addebito_digitale"],
											1: ["bollettino_cartacea", "bollettino_digitale"]
										},
										child: {
											path_00: {
												action: "exit",
												micro_step: "end_switch_attivazione",
												id: "012110"
											},
											path_01: {
												action: "exit",
												micro_step: "end_switch_attivazione",
												id: "012110"
											},
											path_10: {
												action: "exit",
												micro_step: "end_switch_attivazione",
												id: "012110"
											},
											path_11: {
												action: "exit",
												micro_step: "end_switch_attivazione",
												id: "012110"
											}
										}
									}
								}
							},

							path_2: {
								id: "0122",
								micro_step: "end_attivazione_attivazione",
								action: "exit"
								// Nuova attivazione LUCE e GAS
							}
						}
					}
				}
			},

			path_2: {
				//path 2 LUCE
				id: "02",
				action: "step",
				micro_step: "check_fornitura",
				type: "multi",
				subtype: "normal",
				label: "Stai attivando l’offerta LINK luce",
				intro: "Iniziamo dalla tua fornitura <span>LUCE</span>.",
				rightbox: "none",
				trackingclass: ["luce-02-fornitura"],
				questions: ["La fornitura LUCE è attiva?"],
				choices: [
					"È GIÀ ATTIVA CON PLENITUDE static", // 0
					"SONO CLIENTE DI UN ALTRO FORNITORE", // 1
					"LA FORNITURA LUCE NON È ATTIVA" // 2
				],
				choicesexplain: [
					"",
					"voglio passare a Eni Gas e Luce", 
					""
				],
				child: {
					path_0: {
						id: "020",
						action: "step",
						micro_step: "intestatario_luce",
						type: "normal",
						subtype: "normal",
						label: "Stai attivando l’offerta LINK luce",
						intro: "Una domanda sulla tua fornitura <span>LUCE</span>.",
						rightbox: "none",
						trackingclass: ["luce-020-intestatario"],
						questions: ["A chi è intestato il contratto?"],
						choices: [
							"A ME", // 1
							"A UN'ALTRA PERSONA", // 0
						],
						choicesexplain: [
							"",
							"voglio diventare intestatario del contratto", 
						],
						child: {
							path_0: {
								action: "exit",
								micro_step: "end_voltura",
								id: "0200"
							},
							path_1: {
								action: "exit",
								micro_step: "end_cambio",
								id: "0201"
							}
						}
					},

					path_1: {
						id: "021",
						action: "step",
						micro_step: "intestatario_luce",
						type: "normal",
						subtype: "normal",
						label: "Stai attivando l’offerta LINK luce",
						intro: "Una domanda sulla tua fornitura <span>LUCE</span>.",
						rightbox: "none",
						trackingclass: ["luce-021-intestatario"],
						questions: ["A chi è intestato il contratto?"],
						choices: [
							"A ME", // 1
							"A UN'ALTRA PERSONA", // 0
						],
						choicesexplain: [
							"",
							"voglio diventare intestatario del contratto", 
						],
						child: {
							path_0: {
								action: "exit",
								micro_step: "end_volturaext",
								id: "0210"
							},
							path_1: {
								id: "0211",
								action: "step",
								micro_step: "scelta_tariffa",
								type: "fare-setup",
								subtype: "largebuttons",
								label: "Stai attivando l’offerta LINK luce",
								intro: null,
								rightbox: "paymentSummary",
								trackingclass: ["luce-0211-tariffa"],
								questions: ["Quale tariffa preferisci?"],
								child: {
									path_1: {
										action: "step-after-config",
										micro_step: "",
										id: ""
									},
									path_0: {
										id: "02110",
										action: "step",
										micro_step: "pagamento_bolletta",
										type: "payment-setup",
										subtype: "iconbuttons",
										label: "Stai attivando l’offerta LINK luce",
										intro: null,
										rightbox: "paymentSummary",
										trackingclass: ["luce-02110-pagamento"],
										event_category: "pagamento_bolletta_luce",
										questions: [
											"Seleziona la modalità di pagamento",
											"Seleziona il tipo di bolletta"
										],
										choices: {
											0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
											1: ["CARTACEA", "DIGITALE"]
										},
										icons: {
											0: ["icon-bollettino-postale", "icon-CC-bancario"],
											1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
										},
										event_labels: {
											0: ["addebito_cartacea", "addebito_digitale"],
											1: ["bollettino_cartacea", "bollettino_digitale"]
										},
										child: {
											path_00: {
												action: "exit",
												micro_step: "end_switch",
												id: "021100"
											},
											path_01: {
												action: "exit",
												micro_step: "end_switch",
												id: "021100"
											},
											path_10: {
												action: "exit",
												micro_step: "end_switch",
												id: "021100"
											},
											path_11: {
												action: "exit",
												micro_step: "end_switch",
												id: "021100"
											}
										}
									}
								}
							}
						}
					},

					path_2: {
						id: "022",
						micro_step: "end_attivazione",
						action: "exit"
						// Nuova attivazione LUCE
					}
				}
			},

			path_3: {
				//path 3 GAS
				id: "03",
				action: "step",
				micro_step: "check_fornitura",
				type: "multi",
				subtype: "normal",
				label: "Stai attivando l’offerta LINK gas",
				intro: "Una domanda sulla tua fornitura <span>GAS</span>.",
				rightbox: "none",
				trackingclass: ["gas-03-fornitura"],
				questions: ["La fornitura GAS è attiva?"],
				choices: [
					"È GIÀ ATTIVA CON PLENITUDE", // 0
					"SONO CLIENTE DI UN ALTRO FORNITORE", // 1
					"LA FORNITURA GAS NON È ATTIVA" // 2
				],
				choicesexplain: [
					"",
					"voglio passare a Eni Gas e Luce", 
					""
				],
				icons: [],
				child: {
					path_0: {
						id: "030",
						action: "step",
						micro_step: "intestatario_gas",
						type: "normal",
						subtype: "normal",
						label: "Stai attivando l’offerta LINK gas",
						intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
						rightbox: "none",
						trackingclass: ["gas-030-intestatario"],
						questions: ["A chi è intestato il contratto?"],
						choices: [
							"A ME", // 1
							"A UN'ALTRA PERSONA", // 0
						],
						choicesexplain: [
							"",
							"voglio diventare intestatario del contratto", 
						],
						child: {
							path_0: {
								action: "exit",
								micro_step: "end_voltura",
								id: "0300"
							},
							path_1: {
								action: "exit",
								micro_step: "end_cambio",
								id: "0301"
							}
						}
					},
					path_1: {
						id: "031",
						action: "step",
						micro_step: "intestatario_gas",
						type: "normal",
						subtype: "normal",
						label: "Stai attivando l’offerta LINK gas",
						intro: "Per continuare, ci serve un’ultima informazione sulla fornitura <span>GAS</span>.",
						rightbox: "none",
						trackingclass: ["gas-031-intestatario"],
						questions: ["A chi è intestato il contratto?"],
						choices: [
							"A ME", // 1
							"A UN'ALTRA PERSONA", // 0
						],
						choicesexplain: [
							"",
							"voglio diventare intestatario del contratto", 
						],
						child: {
							path_0: {
								action: "exit",
								micro_step: "end_volturaext",
								id: "0310"
							},
							path_1: {
								id: "0311",
								action: "step",
								micro_step: "pagamento_bolletta",
								type: "payment-setup",
								subtype: "iconbuttons",
								label: "Stai attivando l’offerta LINK gas",
								intro: null,
								rightbox: "paymentSummary",
								trackingclass: ["gas-031-pagamento"],
								event_category: "pagamento_bolletta_gas",
								questions: [
									"Seleziona la modalità di pagamento",
									"Seleziona il tipo di bolletta"
								],
								choices: {
									0: ["BOLLETTINO", "ADDEBITO DIRETTO SU C/C"],
									1: ["CARTACEA", "DIGITALE"]
								},
								icons: {
									0: ["icon-bollettino-postale", "icon-CC-bancario"],
									1: ["icon-bolletta-cartacea", "icon-bollette-digitale"]
								},
								event_labels: {
									0: ["addebito_cartacea", "addebito_digitale"],
									1: ["bollettino_cartacea", "bollettino_digitale"]
								},
								child: {
									path_00: {
										action: "exit",
										micro_step: "end_switch",
										id: "03110"
									},
									path_01: {
										action: "exit",
										micro_step: "end_switch",
										id: "03110"
									},
									path_10: {
										action: "exit",
										micro_step: "end_switch",
										id: "03110"
									},
									path_11: {
										action: "exit",
										micro_step: "end_switch",
										id: "03110"
									}
								}
							}
						}
					},
					path_2: {
						id: "032",
						micro_step: "end_attivazione",
						action: "exit"
						// Nuova attivazione GAS
					}
				}
			},

			path_0: {
				id: "00",
				micro_step: "",
				action: "exit"
			}
		}
	}
};
