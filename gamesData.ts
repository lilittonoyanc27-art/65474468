export interface MillionaireQuestion {
  level: number;
  prize: number;
  questionEs: string;
  questionHy: string;
  options: { id: string; textEs: string; textHy: string }[];
  correctId: string;
  hintEs: string;
  hintHy: string;
}

export interface WordDetectiveItem {
  id: string;
  sentenceEs: string;
  sentenceHy: string;
  targetWord: string;
  correctCategoryEs: string;
  correctCategoryHy: string;
  options: { id: string; es: string; hy: string }[];
  clueEs: string;
  clueHy: string;
}

export interface FigureHunterItem {
  id: string;
  verseEs: string;
  verseHy: string;
  correctFigureEs: string;
  correctFigureHy: string;
  options: { id: string; es: string; hy: string }[];
  explanationEs: string;
  explanationHy: string;
}

export interface DoorGameItem {
  id: string;
  clueEs: string;
  clueHy: string;
  doors: { id: string; titleEs: string; titleHy: string; isCorrect: boolean; feedbackEs: string; feedbackHy: string }[];
}

export interface TeacherCorrectionItem {
  id: string;
  teacherStatementEs: string;
  teacherStatementHy: string;
  teacherMistakeEs: string;
  teacherMistakeHy: string;
  correctionOptions: { id: string; textEs: string; textHy: string; isCorrect: boolean }[];
  explanationEs: string;
  explanationHy: string;
}

// 1. ¿Quién quiere ser experto en Lengua? (10 levels)
export const MILLIONAIRE_QUESTIONS: MillionaireQuestion[] = [
  {
    level: 1,
    prize: 100,
    questionEs: '¿Qué tipo de palabra es «árbol» según su significado?',
    questionHy: 'Ինչպիսի՞ բառ է «árbol» (ծառ) բառն ըստ իր իմաստի:',
    options: [
      { id: 'a', textEs: 'Sustantivo común, concreto y contable', textHy: 'Հասարակ, թանձրացական և հաշվելի գոյական' },
      { id: 'b', textEs: 'Verbo irregular en futuro', textHy: 'Անկանոն բայ ապառնիում' },
      { id: 'c', textEs: 'Preposición de lugar', textHy: 'Տեղի նախդիր' },
      { id: 'd', textEs: 'Interjección de sorpresa', textHy: 'Զարմանքի ձայնարկություն' },
    ],
    correctId: 'a',
    hintEs: 'Nombra a un ser físico de la naturaleza que se puede contar.',
    hintHy: 'Անվանում է բնության ֆիզիկական էակ, որը կարելի է հաշվել։',
  },
  {
    level: 2,
    prize: 500,
    questionEs: '¿Qué función del lenguaje se orienta a llamar la atención del receptor para que haga algo?',
    questionHy: 'Լեզվի ո՞ր գործառույթն է նպատակաուղղված ստացողի ուշադրությունը գրավելուն, որպեսզի նա ինչ-որ բան անի:',
    options: [
      { id: 'a', textEs: 'Función apelativa o conativa', textHy: 'Դիմողական գործառույթ' },
      { id: 'b', textEs: 'Función fática', textHy: 'Կապը պահպանող գործառույթ' },
      { id: 'c', textEs: 'Función poética', textHy: 'Գեղարվեստական գործառույթ' },
      { id: 'd', textEs: 'Función metalingüística', textHy: 'Մետալեզվական գործառույթ' },
    ],
    correctId: 'a',
    hintEs: 'Se utiliza en órdenes, ruegos y peticiones.',
    hintHy: 'Օգտագործվում է հրամանների, խնդրանքների և կոչերի մեջ։',
  },
  {
    level: 3,
    prize: 1000,
    questionEs: '«Las perlas de tu sonrisa». ¿Qué figura identifica metafóricamente a los dientes con perlas?',
    questionHy: '«Las perlas de tu sonrisa»: Ո՞ր պատկերն է փոխաբերաբար ատամները նույնացնում մարգարիտների հետ:',
    options: [
      { id: 'a', textEs: 'Metáfora (término imaginario: perlas)', textHy: 'Փոխաբերություն (պատկերավոր անդամ՝ մարգարիտներ)' },
      { id: 'b', textEs: 'Onomatopeya sonora', textHy: 'Ձայնային ձայնանմանություն' },
      { id: 'c', textEs: 'Asíndeton rápido', textHy: 'Արագ ասինդետոն' },
      { id: 'd', textEs: 'Paronomasia', textHy: 'Հարանունություն' },
    ],
    correctId: 'a',
    hintEs: 'Es la figura semántica por excelencia.',
    hintHy: 'Իմաստային գլխավոր գեղարվեստական պատկերն է։',
  },
  {
    level: 4,
    prize: 5000,
    questionEs: '¿Qué modalidad oracional expresa: «¡Ojalá ganemos el partido de este sábado!»?',
    questionHy: 'Նախադասության ո՞ր տեսակն է. «Երանի՜ թե այս շաբաթ օրվա խաղում հաղթենք»:',
    options: [
      { id: 'a', textEs: 'Desiderativa u optativa', textHy: 'Ցանկություն արտահայտող' },
      { id: 'b', textEs: 'Dubitativa de duda', textHy: 'Կասկած արտահայտող' },
      { id: 'c', textEs: 'Exhortativa', textHy: 'Հրամայական' },
      { id: 'd', textEs: 'Enunciativa', textHy: 'Պատմողական' },
    ],
    correctId: 'a',
    hintEs: 'Empieza por la palabra clave «ojalá».',
    hintHy: 'Սկսվում է «ojalá» (երանի թե) առանցքային բառով։',
  },
  {
    level: 5,
    prize: 10000,
    questionEs: 'En una conversación por teléfono, ¿cuál es el CANAL físico?',
    questionHy: 'Հեռախոսազրույցի ժամանակ ո՞րն է ֆիզիկական ԿԱՊՈՒՂԻՆ (canal):',
    options: [
      { id: 'a', textEs: 'La red telefónica / ondas electromagnéticas e internet', textHy: 'Հեռախոսային ցանցը / էլեկտրամագնիսական ալիքները և ինտերնետը' },
      { id: 'b', textEs: 'El idioma castellano', textHy: 'Իսպաներեն լեզուն' },
      { id: 'c', textEs: 'El tema de conversación', textHy: 'Զրույցի թեման' },
      { id: 'd', textEs: 'La persona que llama', textHy: 'Զանգահարող անձը' },
    ],
    correctId: 'a',
    hintEs: 'El canal es el medio por el que viaja la señal.',
    hintHy: 'Կապուղին այն միջավայրն է, որով շարժվում է ազդանշանը։',
  },
  {
    level: 6,
    prize: 25000,
    questionEs: '¿Cuál es la diferencia entre rima consonante y rima asonante?',
    questionHy: 'Ի՞նչ տարբերություն կա rima consonante-ի և rima asonante-ի միջև:',
    options: [
      { id: 'a', textEs: 'En la consonante coinciden vocales y consonantes; en la asonante solo coinciden las vocales', textHy: 'Consonante-ում համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները. asonante-ում՝ միայն ձայնավորները' },
      { id: 'b', textEs: 'La consonante solo se usa en canciones de cuna', textHy: 'Consonante-ն միայն օրորոցայիններում է' },
      { id: 'c', textEs: 'En la asonante riman siempre versos de 14 sílabas', textHy: 'Asonante-ում միշտ 14-վանկանի տողեր են հանգավորվում' },
      { id: 'd', textEs: 'No hay ninguna diferencia', textHy: 'Ոչ մի տարբերություն չկա' },
    ],
    correctId: 'a',
    hintEs: 'Fíjate en si coinciden todos los sonidos o únicamente las vocales.',
    hintHy: 'Ուշադրություն դարձրեք՝ բոլոր հնչյուններն են համընկնում, թե միայն ձայնավորները։',
  },
  {
    level: 7,
    prize: 50000,
    questionEs: '¿Qué figura literaria encontramos en «Vendado que me has vendido»?',
    questionHy: 'Ի՞նչ պատկերավորման միջոց կա «Vendado que me has vendido» արտահայտության մեջ:',
    options: [
      { id: 'a', textEs: 'Paronomasia (palabras de sonido casi idéntico pero significado distinto)', textHy: 'Հարանունություն (Paronomasia)' },
      { id: 'b', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն' },
      { id: 'c', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ' },
      { id: 'd', textEs: 'Asíndeton', textHy: 'Ասինդետոն' },
    ],
    correctId: 'a',
    hintEs: 'Juega con las palabras parecidas «vendado» y «vendido».',
    hintHy: 'Խաղ է «vendado» և «vendido» նմանահունչ բառերի միջև։',
  },
  {
    level: 8,
    prize: 100000,
    questionEs: 'En la oración «Ellos caminan muy despacio», ¿qué función cumple «muy»?',
    questionHy: '«Ellos caminan muy despacio» նախադասության մեջ ի՞նչ դեր ունի «muy» բառը:',
    options: [
      { id: 'a', textEs: 'Adverbio de cantidad que cuantifica a otro adverbio («despacio»)', textHy: 'Քանակի մակբայ, որը լրացնում է մեկ այլ մակբայի («despacio»)' },
      { id: 'b', textEs: 'Adjetivo en grado comparativo', textHy: 'Բաղդատական ածական' },
      { id: 'c', textEs: 'Pronombre demostrativo', textHy: 'Ցուցական դերանուն' },
      { id: 'd', textEs: 'Preposición subordinante', textHy: 'Ստորադասական նախդիր' },
    ],
    correctId: 'a',
    hintEs: 'Modifica y gradúa a un adverbio de modo.',
    hintHy: 'Լրացնում և ուժեղացնում է ձևի մակբային։',
  },
  {
    level: 9,
    prize: 500000,
    questionEs: '¿Qué distingue obligatoriamente a la métrica del ROMANCE tradicional?',
    questionHy: 'Ի՞նչն է պարտադիր բնորոշում ավանդական ՌՈՄԱՆՍԻ տաղաչափությունը:',
    options: [
      { id: 'a', textEs: 'Versos octosílabos con rima asonante en los versos pares, quedando libres los impares', textHy: 'Ութավանկ տողեր՝ զույգ տողերի ձայնավորային հանգով և ազատ կենտ տողերով' },
      { id: 'b', textEs: 'Rima consonante en todos los versos impares', textHy: 'Համահունչ հանգ բոլոր կենտ տողերում' },
      { id: 'c', textEs: 'Versos de diez sílabas sin ninguna rima', textHy: 'Տասավանկ տողեր՝ առանց հանգի' },
      { id: 'd', textEs: 'Estrofas cerradas de seis versos alejandrinos', textHy: 'Վեց ալեքսանդրյան տողերից փակ տներ' },
    ],
    correctId: 'a',
    hintEs: 'Son versos de 8 sílabas con asonancia en los pares.',
    hintHy: '8-վանկանի տողեր են՝ զույգ տողերի ձայնավորային հանգավորմամբ։',
  },
  {
    level: 10,
    prize: 1000000,
    questionEs: '«Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada, / temprano estás rodando por el suelo». ¿Qué figura es?',
    questionHy: '«Temprano levantó la muerte el vuelo...»: Ի՞նչ գեղարվեստական միջոց է «temprano» բառի կրկնությունը տողասկզբում:',
    options: [
      { id: 'a', textEs: 'Anáfora', textHy: 'Անաֆորա (Anáfora)' },
      { id: 'b', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' },
      { id: 'c', textEs: 'Onomatopeya', textHy: 'Ձայնանմանություն' },
      { id: 'd', textEs: 'Asíndeton', textHy: 'Ասինդետոն' },
    ],
    correctId: 'a',
    hintEs: 'Repetición insistente de la misma palabra al comienzo de versos sucesivos.',
    hintHy: 'Նույն բառի կրկնությունն է հաջորդական տողերի սկզբում։',
  },
];

// 2. Detectives de palabras
export const DETECTIVE_ITEMS: WordDetectiveItem[] = [
  {
    id: 'det-1',
    sentenceEs: 'El viejo pescador miraba el mar con tranquilidad.',
    sentenceHy: 'Ծեր ձկնորսը հանգստությամբ նայում էր ծովին։',
    targetWord: 'viejo',
    correctCategoryEs: 'Adjetivo calificativo',
    correctCategoryHy: 'Որակական ածական',
    options: [
      { id: 'a', es: 'Adjetivo calificativo', hy: 'Որակական ածական' },
      { id: 'b', es: 'Sustantivo común', hy: 'Հասարակ գոյական' },
      { id: 'c', es: 'Adverbio de tiempo', hy: 'Ժամանակի մակբայ' },
      { id: 'd', es: 'Pronombre personal', hy: 'Անձնական դերանուն' },
    ],
    clueEs: 'Acompaña a «pescador» y describe una cualidad suya.',
    clueHy: 'Ուղեկցում է «pescador»-ին և նկարագրում նրա որակը։',
  },
  {
    id: 'det-2',
    sentenceEs: 'Nosotros llegamos pronto a la estación de autobuses.',
    sentenceHy: 'Մենք շուտ հասանք ավտոբուսների կայարան։',
    targetWord: 'pronto',
    correctCategoryEs: 'Adverbio de tiempo',
    correctCategoryHy: 'Ժամանակի մակբայ',
    options: [
      { id: 'a', es: 'Adverbio de tiempo', hy: 'Ժամանակի մակբայ' },
      { id: 'b', es: 'Adjetivo calificativo', hy: 'Որակական ածական' },
      { id: 'c', es: 'Preposición simple', hy: 'Պարզ նախդիր' },
      { id: 'd', es: 'Conjunción causal', hy: 'Պատճառական շաղկապ' },
    ],
    clueEs: 'Responde a la pregunta «¿cuándo llegamos?». Es invariable.',
    clueHy: 'Պատասխանում է «ե՞րբ հասանք» հարցին: Անփոփոխ է։',
  },
  {
    id: 'det-3',
    sentenceEs: 'Guarda tus cuadernos en la cartera antes de salir.',
    sentenceHy: 'Դի՛ր քո տետրերը պայուսակի մեջ դուրս գալուց առաջ։',
    targetWord: 'tus',
    correctCategoryEs: 'Determinante posesivo',
    correctCategoryHy: 'Ստացական որոշիչ',
    options: [
      { id: 'a', es: 'Determinante posesivo', hy: 'Ստացական որոշիչ' },
      { id: 'b', es: 'Pronombre demostrativo', hy: 'Ցուցական դերանուն' },
      { id: 'c', es: 'Sustantivo propio', hy: 'Հատուկ գոյական' },
      { id: 'd', es: 'Interjección', hy: 'Ձայնարկություն' },
    ],
    clueEs: 'Acompaña al sustantivo «cuadernos» indicando pertenencia.',
    clueHy: 'Ուղեկցում է «cuadernos» գոյականին՝ ցույց տալով պատկանելություն։',
  },
];

// 3. Encuentra la figura literaria
export const FIGURE_HUNTER_ITEMS: FigureHunterItem[] = [
  {
    id: 'fh-1',
    verseEs: '«Cual hoja leve que en el aire vuela...»',
    verseHy: '«Ինչպես թեթև տերև, որ օդում է սավառնում...»',
    correctFigureEs: 'Comparación o símil',
    correctFigureHy: 'Համեմատություն (símil)',
    options: [
      { id: 'a', es: 'Comparación o símil (lleva «cual / como»)', hy: 'Համեմատություն («cual / como»-ով)' },
      { id: 'b', es: 'Metáfora pura', hy: 'Մաքուր փոխաբերություն' },
      { id: 'c', es: 'Polisíndeton', hy: 'Պոլիսինդետոն' },
      { id: 'd', es: 'Onomatopeya', hy: 'Ձայնանմանություն' },
    ],
    explanationEs: 'Lleva el nexo comparativo explícito «cual» (equivalente a «como»).',
    explanationHy: 'Ունի համեմատական «cual» (ինչպես) բառը։',
  },
  {
    id: 'fh-2',
    verseEs: '«Rendido, roto, derrotado, cayó sobre la arena».',
    verseHy: '«Հոգնած, ջարդված, պարտված՝ նա ընկավ ավազի վրա»։',
    correctFigureEs: 'Asíndeton',
    correctFigureHy: 'Ասինդետոն (առանց շաղկապների)',
    options: [
      { id: 'a', es: 'Asíndeton (omisión de conjunciones)', hy: 'Ասինդետոն (շաղկապների զեղչում)' },
      { id: 'b', es: 'Polisíndeton', hy: 'Պոլիսինդետոն' },
      { id: 'c', es: 'Hipérbaton', hy: 'Հիպերբատոն' },
      { id: 'd', es: 'Aliteración de z', hy: '«z»-ի ալիտերացիա' },
    ],
    explanationEs: 'Los adjetivos se suceden separados por comas sin la conjunción «y».',
    explanationHy: 'Ածականները հաջորդում են միմյանց ստորակետներով՝ առանց «և» շաղկապի։',
  },
];

// 4. Elige la puerta correcta
export const DOOR_ITEMS: DoorGameItem[] = [
  {
    id: 'door-1',
    clueEs: 'Ejemplo: «¡Por favor, silencio en la biblioteca!»',
    clueHy: 'Օրինակ՝ «Խնդրում եմ, լռությո՛ւն գրադարանում»',
    doors: [
      { id: 'd1', titleEs: 'Puerta A: Función apelativa', titleHy: 'Դուռ A. Դիմողական գործառույթ', isCorrect: true, feedbackEs: '¡Correcto! Pide al receptor una conducta de silencio.', feedbackHy: 'Ճիշտ է: Ստացողից պահանջում է լռություն պահպանել:' },
      { id: 'd2', titleEs: 'Puerta B: Función metalingüística', titleHy: 'Դուռ B. Մետալեզվական գործառույթ', isCorrect: false, feedbackEs: 'Incorrecto. No habla de la gramática ni de las palabras.', feedbackHy: 'Սխալ է: Քերականության մասին չէ խոսքը:' },
      { id: 'd3', titleEs: 'Puerta C: Función poética', titleHy: 'Դուռ C. Գեղարվեստական գործառույթ', isCorrect: false, feedbackEs: 'Incorrecto. Es un ruego cotidiano directo.', feedbackHy: 'Սխալ է: Դա առօրյա ուղիղ խնդրանք է:' },
    ],
  },
  {
    id: 'door-2',
    clueEs: 'Ejemplo: «El viento aullaba furioso en la ventana»',
    clueHy: 'Օրինակ՝ «Քամին կատաղած ոռնում էր պատուհանի մոտ»',
    doors: [
      { id: 'd1', titleEs: 'Puerta A: Personificación', titleHy: 'Դուռ A. Անձնավորում', isCorrect: true, feedbackEs: '¡Excelente! Atribuye la acción de aullar como un animal furioso al viento.', feedbackHy: 'Գերազանց է: Ոռնալու հատկանիշը վերագրվում է քամուն:' },
      { id: 'd2', titleEs: 'Puerta B: Paronomasia', titleHy: 'Դուռ B. Հարանունություն', isCorrect: false, feedbackEs: 'Incorrecto. No hay juego de palabras parecidas.', feedbackHy: 'Սխալ է: Նմանահունչ բառերի խաղ չկա:' },
      { id: 'd3', titleEs: 'Puerta C: Asíndeton', titleHy: 'Դուռ C. Ասինդետոն', isCorrect: false, feedbackEs: 'Incorrecto. No es una lista sin conjunciones.', feedbackHy: 'Սխալ է: Առանց շաղկապների շարք չէ:' },
    ],
  },
];

// 6. Corrige al profesor (Desafío de errores)
export const TEACHER_CORRECTION_ITEMS: TeacherCorrectionItem[] = [
  {
    id: 'tc-1',
    teacherStatementEs: 'El profesor dice: «En la frase "Quiero este libro", la palabra "este" es un pronombre demostrativo porque lleva tilde y sustituye al nombre».',
    teacherStatementHy: 'Ուսուցիչն ասում է. «"Quiero este libro" նախադասության մեջ "este" բառը ցուցական դերանուն է, որովհետև շեշտ ունի և փոխարինում է գոյականին»։',
    teacherMistakeEs: 'El análisis del profesor es FALSO: «este» acompaña directamente al sustantivo «libro», por tanto es un DETERMINANTE demostrativo, no un pronombre.',
    teacherMistakeHy: 'Ուսուցչի վերլուծությունը ՍԽԱԼ Է. «este»-ն անմիջականորեն ուղեկցում է «libro» գոյականին, հետևաբար այն ցուցական ՈՐՈՇԻՉ է, ոչ թե դերանուն։',
    correctionOptions: [
      { id: 'c1', textEs: '«este» es DETERMINANTE demostrativo porque acompaña al sustantivo «libro», concordando con él en masculino singular', textHy: '«este»-ն ցուցական ՈՐՈՇԻՉ է, որովհետև ուղեկցում է «libro» գոյականին՝ համաձայնելով նրա հետ', isCorrect: true },
      { id: 'c2', textEs: '«este» es un adverbio de lugar porque indica cercanía', textHy: '«este»-ն տեղի մակբայ է, որովհետև մոտիկություն է ցույց տալիս', isCorrect: false },
      { id: 'c3', textEs: 'El profesor tiene toda la razón', textHy: 'Ուսուցիչը լիովին ճիշտ է', isCorrect: false },
    ],
    explanationEs: 'Regla de oro: si acompaña a un sustantivo = determinante. Si va solo sustituyéndolo = pronombre.',
    explanationHy: 'Ոսկե կանոն. եթե ուղեկցում է գոյականին = որոշիչ է: Եթե մենակ է և փոխարինում է նրան = դերանուն է:',
  },
  {
    id: 'tc-2',
    teacherStatementEs: 'El profesor dice: «En la oración "Los pájaros cantan alegremente", la palabra "alegremente" es un adjetivo calificativo porque expresa alegría».',
    teacherStatementHy: 'Ուսուցիչն ասում է. «"Los pájaros cantan alegremente" նախադասության մեջ "alegremente" բառը որակական ածական է, քանի որ ուրախություն է արտահայտում»։',
    teacherMistakeEs: '¡Error del profesor! «Alegremente» es un ADVERBIO de modo (invariable y modifica al verbo cantan). «Alegre» sí sería adjetivo.',
    teacherMistakeHy: 'Ուսուցչի սխալը. «alegremente»-ն ձևի ՄԱԿԲԱՅ է (անփոփոխ է և լրացնում է cantan բային): «Alegre»-ն կլիներ ածական:',
    correctionOptions: [
      { id: 'c1', textEs: '«alegremente» es un ADVERBIO de modo acabado en -mente que modifica al verbo «cantan»', textHy: '«alegremente»-ն -mente-ով վերջացող ձևի ՄԱԿԲԱՅ է, որը լրացնում է «cantan» բային', isCorrect: true },
      { id: 'c2', textEs: '«alegremente» es un verbo impersonal', textHy: '«alegremente»-ն անդեմ բայ է', isCorrect: false },
      { id: 'c3', textEs: '«alegremente» es un sustantivo abstracto', textHy: '«alegremente»-ն վերացական գոյական է', isCorrect: false },
    ],
    explanationEs: 'Las palabras terminadas en «-mente» que responden a ¿cómo? son adverbios de modo invariables.',
    explanationHy: '«-mente»-ով վերջացող բառերը, որոնք պատասխանում են «Ինչպե՞ս» հարցին, ձևի անփոփոխ մակբայներ են։',
  },
];
