import { TheorySection } from './types.ts';

export const THEORY_SECTIONS: TheorySection[] = [
  // ================= BLOQUE I: EL LENGUAJE LITERARIO =================
  {
    id: 'lenguaje-literario',
    bloque: 'bloque-1',
    bloqueEs: 'Bloque I — El Lenguaje Literario',
    bloqueHy: 'Բաժին I — Գրական լեզու',
    titleEs: 'Tema 1. El lenguaje literario',
    titleHy: 'Թեմա 1. Գրական լեզուն',
    subtitleEs: 'Finalidad estética, recursos expresivos, musicalidad, rima y diferencias entre prosa y verso',
    subtitleHy: 'Գեղագիտական նպատակ, արտահայտչամիջոցներ, երաժշտականություն, հանգ և տարբերություններ արձակի ու չափածոյի միջև',
    badge: 'Literatura',
    icon: 'Feather',
    overviewEs:
      'El lenguaje literario es una forma especial de comunicación donde el autor no solo se preocupa por QUÉ dice, sino sobre todo por CÓMO lo dice, buscando belleza, emoción y ritmo artístico.',
    overviewHy:
      'Գրական լեզուն հաղորդակցման հատուկ ձև է, որտեղ հեղինակը հոգ է տանում ոչ միայն այն մասին, թե ԻՆՉ է ասում, այլև հատկապես ԻՆՉՊԵՍ է ասում՝ ձգտելով գեղեցկության, հուզականության և գեղարվեստական ռիթմի։',
    subsections: [
      {
        id: 'cotidiano-vs-literario',
        titleEs: 'Lenguaje cotidiano frente a lenguaje literario',
        titleHy: 'Առօրյա լեզուն ընդդեմ գրական լեզվի',
        contentEs:
          'En la vida diaria usamos el lenguaje cotidiano con una función práctica: transmitir información rápida y directa («Cierra la ventana, hace frío»). En cambio, el lenguaje literario busca la finalidad estética: crear belleza, sorprender al lector y sugerir emociones («El viento aullaba como un lobo hambriento tras los cristales»).',
        contentHy:
          'Առօրյա կյանքում մենք օգտագործում ենք առօրյա-խոսակցական լեզուն գործնական նպատակով՝ փոխանցել տեղեկատվություն արագ և ուղիղ («Փակի՛ր պատուհանը, ցուրտ է»): Իսկ գրական լեզուն հետապնդում է գեղագիտական նպատակ՝ ստեղծել գեղեցկություն, զարմացնել ընթերցողին և հույզեր արթնացնել («Քամին ոռնում էր ապակիների հետևում սոված գայլի պես»):',
        bulletPoints: [
          {
            es: 'Lenguaje cotidiano: directo, claro, espontáneo, práctico, palabras en sentido literal.',
            hy: 'Առօրյա լեզու՝ ուղիղ, հստակ, անկաշկանդ, գործնական, բառերն ուղիղ իմաստով։',
          },
          {
            es: 'Lenguaje literario: cuidado, elaborado, connotativo (múltiples significados), ritmo, figuras retóricas.',
            hy: 'Գրական լեզու՝ մշակված, կանխամտածված, ենթատեքստային (բազմիմաստ), ռիթմիկ, գեղարվեստական պատկերներով։',
          },
        ],
        examples: [
          {
            es: 'Cotidiano: «Está amaneciendo y sale el sol».',
            hy: 'Առօրյա՝ «Լուսաբաց է, և արևը ծագում է»։',
            explanationEs: 'Solo comunica el hecho físico.',
            explanationHy: 'Պարզապես փոխանցում է բնական երևույթը։',
          },
          {
            es: 'Literario: «La aurora extiende sus dedos de rosa sobre el horizonte dormido».',
            hy: 'Գրական՝ «Արշալույսն իր վարդագույն մատներն է տարածում քնած հորիզոնի վրա»։',
            explanationEs: 'Usa personificación y metáfora para evocar una emoción visual.',
            explanationHy: 'Կիրառում է անձնավորում և փոխաբերություն՝ տեսողական պատկեր և հույզ արթնացնելու համար։',
          },
        ],
      },
      {
        id: 'verso-y-prosa',
        titleEs: 'El verso y la prosa: diferencias fundamentales',
        titleHy: 'Չափածոն և արձակը. հիմնարար տարբերություններ',
        contentEs:
          'Los textos literarios pueden escribirse en prosa o en verso. La prosa ocupa todo el renglón y se organiza en párrafos; tiene un ritmo natural pero no medido. El verso se escribe en líneas cortas e independientes (cada línea es un verso), tiene medida de sílabas fijas, pausas marcadas y rima.',
        contentHy:
          'Գրական տեքստերը կարող են գրվել արձակ կամ չափածո: Արձակը զբաղեցնում է տողի ամբողջ լայնությունը և բաժանվում է պարբերությունների. այն ունի բնական, բայց ոչ չափված ռիթմ: Չափածոն գրվում է կարճ, ինքնուրույն տողերով (յուրաքանչյուր տողը մի բանաստեղծական տող/վերս է), ունի հստակ վանկերի քանակ, ռիթմիկ դադարներ և հանգավորում:',
        table: {
          headersEs: ['Rasgo', 'Prosa', 'Verso'],
          headersHy: ['Հատկանիշ', 'Արձակ', 'Չափածո'],
          rows: [
            {
              es: ['Disposición en la página', 'Ocupa todo el renglón de margen a margen', 'Líneas cortas (versos) centradas o alineadas'],
              hy: ['Էջի վրա դասավորվածություն', 'Զբաղեցնում է ամբողջ տողը լուսանցքից լուսանցք', 'Կարճ տողեր (վերսեր)՝ կենտրոնացված կամ ձախից'],
            },
            {
              es: ['Estructura', 'Oraciones y párrafos', 'Versos agrupados en estrofas'],
              hy: ['Կառուցվածք', 'Նախադասություններ և պարբերություններ', 'Տողեր՝ խմբավորված տներում (տներ/ստրոֆաներ)'],
            },
            {
              es: ['Ritmo y sonido', 'Ritmo de entonación discursiva', 'Métrica (cómputo silábico), acentos y rima'],
              hy: ['Ռիթմ և հնչերանգ', 'Խոսքային բնական հնչերանգ', 'Չափ (վանկերի հաշվում), շեշտեր և հանգ'],
            },
          ],
        },
        examples: [
          {
            es: 'Rima consonante: «En un lugar de la Mancha / de cuyo nombre no quiero acordarme... / de buena lanza / y corredor galgo».',
            hy: 'Համահունչ հանգ (rima consonante)՝ համընկնում են բոլոր հնչյունները (ձայնավորներ և բաղաձայններ) վերջին շեշտված ձայնավորից հետո։',
            explanationEs: 'Coinciden vocales y consonantes a partir de la última vocal tónica (ejemplo: Mancha / lanza).',
            explanationHy: 'Համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները վերջին շեշտված ձայնավորից հետո։',
          },
          {
            es: 'Rima asonante: «Verde que te quiero verde / verde viento, verdes ramas / el barco sobre la mar / y el caballo en la montaña».',
            hy: 'Ձայնավորային հանգ (rima asonante)՝ ramas / montaña (a-a): համընկնում են միայն ձայնավորները։',
            explanationEs: 'Solo coinciden los sonidos vocálicos (a - a en ramas / montaña).',
            explanationHy: 'Համընկնում են միայն ձայնավոր հնչյունները, իսկ բաղաձայնները տարբեր են։',
          },
        ],
        examTipsEs: '¡Atención en el examen! Si en dos palabras coinciden tanto vocales como consonantes desde el último acento (estrell-a / bell-a), es rima consonante. Si solo coinciden las vocales (viento / cielo: i-e-o / i-e-o), es asonante.',
        examTipsHy: 'Ուշադրությո՛ւն քննությանը. եթե վերջին շեշտից հետո համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները, դա rima consonante է: Եթե միայն ձայնավորները՝ rima asonante:',
      },
    ],
  },

  {
    id: 'literatura-culta-popular',
    bloque: 'bloque-1',
    bloqueEs: 'Bloque I — El Lenguaje Literario',
    bloqueHy: 'Բաժին I — Գրական լեզու',
    titleEs: 'Tema 2 y 3. Literatura culta y literatura popular',
    titleHy: 'Թեմա 2 և 3. Հեղինակային և ժողովրդական գրականություն',
    subtitleEs: 'Autor conocido vs anónimo, transmisión oral vs escrita, imprenta, nanas, villancicos y coplas',
    subtitleHy: 'Հայտնի ընդդեմ անհայտ հեղինակ, բանավոր ընդդեմ գրավոր փոխանցում, տպագրություն, օրորոցայիններ և ժողովրդական երգեր',
    badge: 'Tradición',
    icon: 'BookOpen',
    overviewEs:
      'A lo largo de la historia coexisten dos grandes corrientes literarias: la literatura popular (nacida del pueblo, transmitida oralmente de padres a hijos) y la literatura culta (creada por autores letrados, transmitida por escrito y cuidadosamente elaborada).',
    overviewHy:
      'Պատմության ընթացքում միշտ կողք կողքի գոյություն են ունեցել երկու մեծ գրական հոսանքներ՝ ժողովրդական գրականությունը (ժողովրդի կողմից ստեղծված, սերնդեսերունդ բանավոր փոխանցվող) և հեղինակային գրականությունը (գրագետ հեղինակների կողմից ստեղծված, գրավոր փոխանցվող և խնամքով մշակված)։',
    subsections: [
      {
        id: 'culta-vs-popular-comparativa',
        titleEs: 'Cuadro comparativo: Culta vs Popular',
        titleHy: 'Համեմատական աղյուսակ. Հեղինակային ընդդեմ Ժողովրդականի',
        contentEs:
          'Es fundamental para los exámenes de 1.º de ESO saber contrastar las características de ambas literaturas punto por punto.',
        contentHy:
          '1-ին ESO-ի քննությունների համար չափազանց կարևոր է իմանալ երկու գրականությունների հատկանիշների կետ առ կետ համեմատությունը։',
        table: {
          headersEs: ['Criterio', 'Literatura culta', 'Literatura popular'],
          headersHy: ['Չափանիշ', 'Հեղինակային գրականություն (Culta)', 'Ժողովրդական գրականություն (Popular)'],
          rows: [
            {
              es: ['Autoría', 'Autor conocido y con nombre propio (ej. Cervantes)', 'Autor anónimo (pertenece a toda la comunidad)'],
              hy: ['Հեղինակ', 'Հայտնի հեղինակ (օր.՝ Սերվանտես)', 'Անանուն հեղինակ (պատկանում է ողջ ժողովրդին)'],
            },
            {
              es: ['Vía de transmisión', 'Escrita (manuscritos, libros impresos)', 'Oral (de boca en boca, cantada o recitada)'],
              hy: ['Փոխանցման եղանակ', 'Գրավոր (ձեռագրեր, տպագիր գրքեր)', 'Բանավոր (բերանացի, երգվելով կամ արտասանվելով)'],
            },
            {
              es: ['Estabilidad del texto', 'Texto fijo, definitivo e inalterable', 'Texto vivo que cambia con variantes y versiones'],
              hy: ['Տեքստի կայունություն', 'Անփոփոխ, վերջնական և ֆիքսված տեքստ', 'Կենդանի տեքստ, որը փոխվում է տարբերակներով'],
            },
            {
              es: ['Lenguaje y estilo', 'Planificado, vocabulario rico, recursos complejos', 'Sencillo, directo, con repeticiones y estribillos'],
              hy: ['Լեզու և ոճ', 'Մանրամասն մշակված, հարուստ բառապաշար, բարդ պատկերներ', 'Պարզ, անմիջական, կրկներգերով և կրկնություններով'],
            },
            {
              es: ['Manifestaciones típicas', 'Novela de autor, tratados, poemarios cultos', 'Nanas, villancicos, coplas, refranes, romances'],
              hy: ['Տիպիկ ժանրեր', 'Հեղինակային վեպեր, գիտական աշխատություններ, բանաստեղծություններ', 'Օրորոցայիններ, սուրբծննդյան երգեր, ժողովրդական երգեր, առածներ, ռոմանսներ'],
            },
          ],
        },
        examples: [
          {
            es: 'Nana popular: «Duérmete, niño chiquito, / que viene el coco...».',
            hy: 'Ժողովրդական օրորոցային՝ «Քնի՛ր, իմ փոքրի՛կ երեխա, որ գալիս է քեզ քնեցնելու...»։',
            explanationEs: 'Canción anónima de cuna para dormir a los bebés, con ritmo suave y rima sencilla.',
            explanationHy: 'Անանուն օրորոցային երգ՝ մանկանը քնեցնելու համար, մեղմ ռիթմով և պարզ հանգով։',
          },
          {
            es: 'Villancico: Canción popular de origen campesino vinculada posteriormente a la Navidad.',
            hy: 'Վիլյանսիկո (Villancico)՝ ժողովրդական երգ, որը հետագայում կապվեց Սուրբ Ծննդյան տոների հետ։',
            explanationEs: 'Presenta un estribillo repetido que todo el pueblo podía cantar a coro.',
            explanationHy: 'Ունի կրկնվող կրկներգ (estribillo), որը ողջ ժողովուրդը կարող էր երգել միասին։',
          },
        ],
      },
    ],
  },

  {
    id: 'generos-narrativos',
    bloque: 'bloque-1',
    bloqueEs: 'Bloque I — El Lenguaje Literario',
    bloqueHy: 'Բաժին I — Գրական լեզու',
    titleEs: 'Tema 4. Géneros narrativos tradicionales',
    titleHy: 'Թեմա 4. Ավանդական պատմողական ժանրեր',
    subtitleEs: 'El cuento, la leyenda, el mito y el romance: características, diferencias y análisis',
    subtitleHy: 'Հեքիաթ / պատմվածք, լեգենդ, առասպել և ռոմանս. հատկանիշներ, տարբերություններ և վերլուծություն',
    badge: 'Géneros',
    icon: 'Compass',
    overviewEs:
      'Los géneros narrativos tradicionales son historias transmitidas desde la antigüedad que explican el mundo, entretienen o preservan la memoria de un pueblo. En 1.º de ESO se estudian cuatro formas clave: el cuento, la leyenda, el mito y el romance.',
    overviewHy:
      'Ավանդական պատմողական ժանրերը հնուց փոխանցված պատմություններ են, որոնք բացատրում են աշխարհը, զվարճացնում կամ պահպանում ժողովրդի հիշողությունը: 1-ին ESO-ում ուսումնասիրվում են չորս հիմնական ձևեր՝ պատմվածք/հեքիաթ (cuento), լեգենդ (leyenda), առասպել (mito) և ռոմանս (romance):',
    subsections: [
      {
        id: 'los-cuatro-generos',
        titleEs: 'Los cuatro géneros tradicionales explicados',
        titleHy: 'Չորս ավանդական ժանրերի մանրամասն բացատրությունը',
        contentEs:
          'Cada género tiene una función, personajes y tipo de verdad diferente que no debes confundir.',
        contentHy:
          'Յուրաքանչյուր ժանր ունի իր գործառույթը, կերպարները և ճշմարտանմանության աստիճանը, որոնք չի կարելի շփոթել։',
        bulletPoints: [
          {
            es: '1. El cuento (Պատմվածք / Հեքիաթ): Narración breve en prosa con personajes sencillos y argumento lineal. Tiene tres partes clásicas: planteamiento (inicio), nudo (conflicto) y desenlace (resolución). Puede ser popular (anónimo, maravilloso) o literario (autor conocido).',
            hy: '1. Կուենտո (Պատմվածք / Հեքիաթ)՝ կարճ պատմություն արձակով, պարզ կերպարներով և գծային սյուժեով: Ունի դասական երեք մաս՝ սկիզբ (planteamiento), հանգույց (nudo) և հանգուցալուծում (desenlace): Կարող է լինել ժողովրդական կամ հեղինակային:',
          },
          {
            es: '2. La leyenda (Լեգենդ): Relato que parte de un hecho o lugar histórico real, pero al que la tradición popular añade elementos sobrenaturales, fantásticos o misteriosos. Finalidad didáctica y explicativa de tradiciones locales.',
            hy: '2. Լեգենդ՝ պատմություն, որը հիմնված է իրական պատմական փաստի կամ վայրի վրա, բայց որին ժողովրդական ավանդույթը ավելացրել է գերբնական, ֆանտաստիկ կամ առեղծվածային տարրեր: Ունի դաստիարակչական նպատակ:',
          },
          {
            es: '3. El mito (Առասպել): Relato sagrado tradicional protagonizado por dioses, semidioses, héroes y monstruos que explica los grandes enigmas: el origen del universo (cosmogonía), el fuego, los terremotos o las estaciones del año.',
            hy: '3. Առասպել՝ սրբազան ավանդական պատմություն, որի գլխավոր հերոսներն են աստվածները, կիսաստվածները, հերոսներն ու հրեշները: Բացատրում է տիեզերքի ծագումը, բնական երևույթները, տարվա եղանակները:',
          },
          {
            es: '4. El romance (Ռոմանս): Composición poética típicamente española, de origen oral medieval. Características métricas estrictas: versos de ocho sílabas (octosílabos) con rima asonante en los versos pares, quedando sueltos (sin rima) los impares.',
            hy: '4. Ռոմանս՝ իսպանական բնորոշ չափածո ստեղծագործություն, միջնադարյան բանավոր ծագմամբ: Չափական խիստ կանոն՝ ութավանկ տողեր (octosílabos), զույգ տողերում ձայնավորային հանգ (rima asonante), իսկ կենտ տողերն առանց հանգի են:',
          },
        ],
        examples: [
          {
            es: 'Mito: «El dios Apolo conduce el carro del sol a través del cielo para iluminar la Tierra».',
            hy: 'Առասպել՝ «Ապոլոն աստվածը վարում է արևի կառքը երկնքով՝ Երկիրը լուսավորելու համար»։',
            explanationEs: 'Protagonizado por dioses para explicar el ciclo solar diario.',
            explanationHy: 'Գործում են աստվածներ՝ բացատրելով արևի օրական շարժումը։',
          },
          {
            es: 'Leyenda: «Dicen que en la torre del castillo de Bécquer aparece una sombra blanca cada noche de Todos los Santos».',
            hy: 'Լեգենդ՝ «Ասում են, թե Բեկերի ամրոցի աշտարակում Բոլոր Սրբերի գիշերը հայտնվում է սպիտակ ստվեր»։',
            explanationEs: 'Vinculada a un lugar real con añadido misterioso/fantasmal.',
            explanationHy: 'Կապված է իրական աշխարհագրական վայրի հետ՝ առեղծվածային ֆանտաստիկ հավելումով։',
          },
          {
            es: 'Romance: «Que por mayo era por mayo / cuando hace la calor, / cuando los trigos encañan / y están los campos en flor...»',
            hy: 'Ռոմանս՝ «Մայիս ամիսն էր, մայիսը, երբ տաքությունն է տիրում, երբ ցորենն է հասկակալում, և դաշտերը ծաղկում են...» (8-ավանկ տողեր, զույգ տողերում o-r հանգ)։',
            explanationEs: 'Versos octosílabos con rima asonante o-o / o-r en los versos pares.',
            explanationHy: 'Ութավանկ տողեր՝ զույգ տողերի ձայնավորային հանգավորմամբ։',
          },
        ],
      },
    ],
  },

  // ================= BLOQUE II: LAS FIGURAS LITERARIAS =================
  {
    id: 'figuras-literarias',
    bloque: 'bloque-2',
    bloqueEs: 'Bloque II — Las Figuras Literarias',
    bloqueHy: 'Բաժին II — Գեղարվեստական արտահայտչամիջոցներ',
    titleEs: 'Las Figuras Literarias (Retóricas)',
    titleHy: 'Գեղարվեստական պատկերավորման միջոցները (Ռետորիկական միջոցներ)',
    subtitleEs: 'Nivel fónico, nivel morfosintáctico y nivel semántico al detalle con ejemplos y contrastes',
    subtitleHy: 'Հնչյունային, ձևաբանական-շարահյուսական և իմաստային մակարդակներ՝ օրինակներով և համեմատություններով',
    badge: 'Examen Clave',
    icon: 'Sparkles',
    overviewEs:
      'Las figuras literarias o recursos retóricos son procedimientos lingüísticos que utiliza el autor para dotar al texto de mayor expresividad, ritmo, sugerencia y belleza. En el examen de 1.º de ESO se dividen en tres grandes niveles: fónico, morfosintáctico y semántico.',
    overviewHy:
      'Գեղարվեստական պատկերավորման միջոցները լեզվական հնարքներ են, որոնք հեղինակն օգտագործում է տեքստին ավելի մեծ արտահայտչականություն, ռիթմ, պատկերավորություն և գեղեցկություն հաղորդելու համար: 1-ին ESO-ի քննության մեջ դրանք բաժանվում են 3 մակարդակի՝ հնչյունային, ձևաբանական-շարահյուսական և իմաստային:',
    subsections: [
      {
        id: 'nivel-fonico',
        titleEs: 'A. Nivel fónico (Juegos con el sonido de las palabras)',
        titleHy: 'A. Հնչյունային մակարդակ (Խաղ բառերի հնչյունների հետ)',
        contentEs:
          'Se centran en el ritmo auditivo y la repetición de sonidos.',
        contentHy:
          'Հիմնված են լսողական ռիթմի և հնչյունների կրկնության վրա։',
        bulletPoints: [
          {
            es: '1. Aliteración (Ալիտերացիա): Repetición notable de uno o varios sonidos consonánticos semejantes en un verso o frase para evocar una sensación real (el viento, el susurro, el galope).',
            hy: '1. Ալիտերացիա՝ նման բաղաձայն հնչյունների կրկնություն բանաստեղծական տողում կամ արտահայտության մեջ՝ իրական զգացողություն առաջացնելու համար (քամու սոսափ, շշուկ, ձիու դոփյուն):',
          },
          {
            es: '2. Onomatopeya (Ձայնանմանություն): Palabra cuya pronunciación imita un sonido de la realidad, de animales, de la naturaleza o de golpes (tic-tac, guau, chas, pum, susurro).',
            hy: '2. Ձայնանմանություն՝ բառ, որի արտասանությունն ընդօրինակում է բնության, կենդանիների կամ առարկաների իրական ձայնը (տիկ-տակ, հաֆ-հաֆ, շրշյուն, բըմպ):',
          },
          {
            es: '3. Paronomasia (Հարանունություն): Uso cercano de palabras con sonidos muy parecidos pero significados completamente diferentes (hombre / hambre, casa / caza, ciego / cielo).',
            hy: '3. Հարանունություն՝ մոտիկ օգտագործված բառեր, որոնք ունեն գրեթե նույն հնչողությունը, բայց բոլորովին տարբեր իմաստներ (hombre [մարդ] / hambre [սով], caza [որս] / casa [տուն]):',
          },
          {
            es: '4. Epanadiplosis (Էպանադիպլոզիս): Repetición de la MISMA palabra al PRINCIPIO y al FINAL de un mismo verso o enunciado («Verde que te quiero verde»).',
            hy: '4. Էպանադիպլոզիս՝ ՆՈՒՅՆ բառի կրկնությունը նույն տողի կամ նախադասության ՍԿԶԲՈՒՄ և ՎԵՐՋՈՒՄ («Verde que te quiero verde»):',
          },
        ],
        examples: [
          {
            es: 'Aliteración: «En el silencio solo se escuchaba / un susurro de abejas que sonaba» (Garcilaso).',
            hy: 'Ալիտերացիա՝ «s» հնչյունի կրկնությունը նմանակում է մեղուների բզզոցը և շշուկը։',
            explanationEs: 'La repetición insistente de la «s» evoca el zumbido constante de las abejas.',
            explanationHy: '«s» հնչյունի կրկնությունն արթնացնում է մեղուների բզզոցի և շշուկի պատկերը։',
          },
          {
            es: 'Onomatopeya: «El kikirikí del gallo rompió el amanecer campesino».',
            hy: 'Ձայնանմանություն՝ «Աքաղաղի ծուղրուղուն խախտեց գյուղական լուսաբացը»։',
            explanationEs: 'Kikirikí imita directamente la voz del ave.',
            explanationHy: '«Kikirikí» բառն ընդօրինակում է աքաղաղի ձայնը։',
          },
          {
            es: 'Paronomasia: «Vendado que me has vendido...» (Góngora) o «Entre el clavel y la rosa, su majestad escoja (es coja)».',
            hy: 'Հարանունություն՝ «Vendado» (աչքակապ) և «vendido» (դավաճանված)՝ նման հնչյուններ, տարբեր իմաստներ։',
            explanationEs: 'Juego fonético entre vendado y vendido con raíz semejante pero significado distinto.',
            explanationHy: 'Հնչյունական խաղ նման բառերի միջև։',
          },
          {
            es: 'Epanadiplosis: «Huracán, huracán, venir te siento, / y en tu soplo abrasado / respiro ya el ferviente aliento / huracán».',
            hy: 'Էպանադիպլոզիս՝ սկսվում է «huracán» բառով և ավարտվում «huracán» բառով։',
            explanationEs: 'Empieza por la palabra huracán y termina por la misma palabra huracán.',
            explanationHy: 'Սկսվում և ավարտվում է ճիշտ նույն բառով։',
          },
        ],
      },
      {
        id: 'nivel-morfosintactico',
        titleEs: 'B. Nivel morfosintáctico (Estructura y orden de las palabras)',
        titleHy: 'B. Ձևաբանական-շարահյուսական մակարդակ (Կառուցվածք և շարադասություն)',
        contentEs:
          'Afecta al orden de las palabras en la oración y a la supresión o acumulación de elementos.',
        contentHy:
          'Վերաբերում է բառերի շարադասությանը նախադասության մեջ և բառերի/շաղկապների ավելացմանը կամ զեղչմանը։',
        bulletPoints: [
          {
            es: '5. Hipérbaton (Հիպերբատոն): Alteración deliberada del orden lógico o habitual de los elementos de la oración (Sujeto + Verbo + Complementos).',
            hy: '5. Հիպերբատոն՝ նախադասության անդամների սովորական շարադասության միտումնավոր խախտում (Ենթակա + Բայ + Լրացումներ):',
          },
          {
            es: '6. Anáfora (Անաֆորա): Repetición de una o más palabras al PRINCIPIO de varios versos o frases consecutivas.',
            hy: '6. Անաֆորա՝ նույն բառի կամ բառերի կրկնություն մի քանի հաջորդական տողերի կամ նախադասությունների ՍԿԶԲՈՒՄ:',
          },
          {
            es: '7. Asíndeton (Ասինդետոն / Անշաղկապություն): Omisión voluntaria de conjunciones (como «y») entre elementos de una serie, dando rapidez y dinamismo.',
            hy: '7. Ասինդետոն՝ շաղկապների միտումնավոր բացթողում թվարկման մեջ, ինչը խոսքին հաղորդում է արագություն և դինամիզմ:',
          },
          {
            es: '8. Polisíndeton (Բազմաշաղկապություն): Repetición insistente y deliberada de la misma conjunción («y... y... y...» o «ni... ni...»), transmitiendo lentitud o solemnidad.',
            hy: '8. Պոլիսինդետոն՝ նույն շաղկապի («y... y...» կամ «ni... ni...») կանխամտածված և համառ կրկնություն, ինչը հաղորդում է դանդաղություն և հանդիսավորություն:',
          },
          {
            es: '9. Enumeración (Թվարկում): Acumulación sucesiva de palabras o ideas pertenecientes a un mismo campo conceptual o gramatical.',
            hy: '9. Թվարկում՝ նույն քերականական կամ իմաստային դաշտի բառերի կամ գաղափարների հաջորդական շարք:',
          },
          {
            es: '10. Pleonasmo (Ավելորդաբանություն / Պլեոնազմ): Empleo de palabras aparentemente redundantes que refuerzan con insistencia expresiva la idea («Lo vi con mis propios ojos»).',
            hy: '10. Պլեոնազմ՝ ավելորդ բառերի գործածություն, որոնք զգացմունքորեն ուժեղացնում են միտքը («Ես իմ սեփական աչքերով տեսա»):',
          },
        ],
        examples: [
          {
            es: 'Hipérbaton: «Volverán las oscuras golondrinas / en tu balcón sus nidos a colgar» (Bécquer).',
            hy: 'Հիպերբատոն՝ Սովորական կարգով կլիներ. «Las oscuras golondrinas volverán a colgar sus nidos en tu balcón».',
            explanationEs: 'El orden lógico sería: «Las oscuras golondrinas volverán a colgar sus nidos en tu balcón».',
            explanationHy: 'Բառերի բնական շարադասությունը խախտված է գեղարվեստական նպատակով։',
          },
          {
            es: 'Anáfora: «Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada, / temprano estás rodando por el suelo» (Miguel Hernández).',
            hy: 'Անաֆորա՝ Յուրաքանչյուր տող սկսվում է «Temprano» բառով։',
            explanationEs: 'La palabra «temprano» se repite al inicio de cada verso para enfatizar la juventud perdida.',
            explanationHy: '«Temprano» (վաղ) բառը կրկնվում է տողերի սկզբում՝ ցավն ու կորուստը շեշտելու համար։',
          },
          {
            es: 'Asíndeton: «Llegué, vi, vencí» o «Rendí, rompí, derribé, / rajé, deshice, prendí...» (sin conjunciones, solo comas).',
            hy: 'Ասինդետոն՝ «Եկա, տեսա, հաղթեցի» (առանց «և» շաղկապի, միայն ստորակետներ)։',
            explanationEs: 'Las acciones se suceden sin nexos, aportando máxima aceleración.',
            explanationHy: 'Գործողությունները հաջորդում են առանց շաղկապների՝ հաղորդելով արագություն։',
          },
          {
            es: 'Polisíndeton: «Y sueña, y ama, y canta, y llora, y vive con ardor».',
            hy: 'Պոլիսինդետոն՝ «Ե՛վ երազում է, և՛ սիրում, և՛ երգում, և՛ լալիս, և՛ ապրում...»։',
            explanationEs: 'La conjunción «y» repetida dilata el tiempo y otorga fuerza solemne.',
            explanationHy: '«y» (և) շաղկապի բազմակի կրկնությունը շեշտում է յուրաքանչյուր գործողություն։',
          },
        ],
      },
      {
        id: 'nivel-semantico-metafora',
        titleEs: 'C. Nivel semántico: La Metáfora al detalle',
        titleHy: 'C. Իմաստային մակարդակ. Փոխաբերությունը (Metáfora) մանրամասն',
        contentEs:
          'El nivel semántico afecta al significado de las palabras. La reina de las figuras semánticas en 1.º de ESO es la METÁFORA.',
        contentHy:
          'Իմաստային մակարդակը վերաբերում է բառերի իմաստային փոխակերպմանը: 1-ին ESO-ում գլխավոր իմաստային պատկերը ՓՈԽԱԲԵՐՈՒԹՅՈՒՆՆ է (metáfora):',
        bulletPoints: [
          {
            es: 'Definición de metáfora: Identificación entre dos realidades que guardan entre sí una relación de semejanza real o imaginaria.',
            hy: 'Փոխաբերության սահմանում՝ երկու տարբեր երևույթների նույնացում, որոնց միջև կա իրական կամ երևակայական նմանության կապ։',
          },
          {
            es: 'Término real (R): Lo que existe en la realidad concreta (ejemplo: los dientes blancos).',
            hy: 'Իրական անդամ (R)՝ իրական առարկան կամ երևույթը (օրինակ՝ սպիտակ ատամները)։',
          },
          {
            es: 'Término imaginario o figurado (I): La imagen evocada con la que se identifica (ejemplo: las perlas).',
            hy: 'Պատկերավոր/երևակայական անդամ (I)՝ փոխաբերական պատկերը (օրինակ՝ մարգարիտները)։',
          },
          {
            es: 'Estructuras de metáfora: 1) Metáfora impura (A es B): «Tus ojos son dos luceros». 2) Metáfora de complemento (B de A): «Las perlas de tu boca». 3) Metáfora pura (solo aparece el elemento imaginario): «Los luceros me miraban con tristeza» (los luceros = los ojos).',
            hy: 'Փոխաբերության տեսակներ՝ 1) A es B («Քո աչքերը երկու աստղեր են»), 2) B de A («Քո բերանի մարգարիտները»), 3) Մաքուր փոխաբերություն (նշվում է միայն պատկերավոր անդամը՝ «Աստղերն ինձ տխրությամբ էին նայում» = աչքերը)։',
          },
          {
            es: 'Diferencia crucial: La comparación o símil lleva el nexo explícito «como» («Tus dientes son COMO perlas»). La metáfora IDENTIFICA directamente sin el «como» («Tus dientes son perlas»).',
            hy: 'Կարևոր տարբերություն. Համեմատությունն ունի «ինչպես/պես» (como) բառը («Ատամներդ ինչպես մարգարիտներ են»): Իսկ փոխաբերությունը ՆՈՒՅՆԱՑՆՈՒՄ Է առանց «como»-ի («Ատամներդ մարգարիտներ են»):',
          },
        ],
        examples: [
          {
            es: 'Metáfora A es B: «El sol es un globo de fuego sobre la montaña».',
            hy: 'A es B փոխաբերություն՝ «Արևը կրակի գունդ է լեռան վրա»։',
            explanationEs: 'Término real = el sol. Término imaginario = globo de fuego. Semejanza = luz, calor y forma esférica.',
            explanationHy: 'Իրական անդամ = արև: Պատկերավոր անդամ = կրակի գունդ: Նմանություն = լույս, ջերմություն, կլոր ձև:',
          },
          {
            es: 'Metáfora pura: «El jinete peinaba la crin de su corcel de plata» (el corcel de plata = la luna reflejada o niebla).',
            hy: 'Մաքուր փոխաբերություն՝ տեքստում չի ասվում «լուսին» բառը, այն փոխարինված է «արծաթե նժույգով»։',
            explanationEs: 'Solo aparece el término figurado; el lector deduce el término real por el contexto.',
            explanationHy: 'Նշված է միայն պատկերավոր անդամը. ընթերցողը հասկանում է իմաստը ենթատեքստից։',
          },
        ],
      },
    ],
  },

  // ================= BLOQUE III: LAS FUNCIONES DEL LENGUAJE =================
  {
    id: 'funciones-lenguaje',
    bloque: 'bloque-3',
    bloqueEs: 'Bloque III — Las Funciones del Lenguaje',
    bloqueHy: 'Բաժին III — Լեզվի գործառույթները',
    titleEs: 'Las 6 Funciones del Lenguaje',
    titleHy: 'Լեզվի 6 գործառույթները',
    subtitleEs: 'Referencial, expresiva, apelativa, fática, metalingüística y poética: intención del hablante',
    subtitleHy: 'Տեղեկատվական, հուզական, դիմողական, կապ հաստատող, մետալեզվական և գեղարվեստական',
    badge: 'Comunicación',
    icon: 'Radio',
    overviewEs:
      'Cada vez que hablamos o escribimos lo hacemos con un propósito o intención. Las funciones del lenguaje describen qué persigue el emisor y con qué elemento de la comunicación se relaciona prioritariamente el mensaje.',
    overviewHy:
      'Ամեն անգամ, երբ մենք խոսում կամ գրում ենք, դա անում ենք որոշակի նպատակով: Լեզվի գործառույթները նկարագրում են խոսողի նպատակը և այն, թե հաղորդակցման որ տարրի վրա է կենտրոնացած ուղերձը:',
    subsections: [
      {
        id: 'seis-funciones-tabla',
        titleEs: 'Las 6 funciones explicadas para el examen',
        titleHy: '6 գործառույթների բացատրությունը քննության համար',
        contentEs:
          'En 1.º de ESO es fundamental vincular cada función con el elemento de la comunicación correspondiente.',
        contentHy:
          '1-ին ESO-ում անհրաժեշտ է յուրաքանչյուր գործառույթ կապել հաղորդակցման համապատասխան տարրի հետ։',
        table: {
          headersEs: ['Función', 'Elemento clave', 'Intención del emisor', 'Ejemplo escolar típico'],
          headersHy: ['Գործառույթ', 'Հիմնական տարր', 'Խոսողի նպատակը', 'Դպրոցական տիպիկ օրինակ'],
          rows: [
            {
              es: ['1. Referencial o representativa', 'Contexto / Realidad', 'Transmitir datos objetivos e información verificable', '«El examen de Lengua comenzará a las diez».'],
              hy: ['1. Տեղեկատվական (Referencial)', 'Համատեքստ / Իրականություն', 'Փոխանցել օբյեկտիվ տվյալներ և ստույգ տեղեկություն', '«Լեզվի քննությունը կսկսվի ժամը տասին»։'],
            },
            {
              es: ['2. Expresiva o emotiva', 'Emisor', 'Exteriorizar sentimientos, emociones, dolor u opiniones personales', '«¡Qué alegría tan inmensa verte de nuevo!» o «¡Me duele la muela!».'],
              hy: ['2. Հուզական (Expresiva)', 'Հաղորդող (Emisor)', 'Արտահայտել զգացմունքներ, ուրախություն, ցավ կամ կարծիք', '«Ի՜նչ մեծ ուրախություն է քեզ նորից տեսնելը» կամ «Ատամս ցավում է»։'],
            },
            {
              es: ['3. Apelativa o conativa', 'Receptor', 'Influir en el oyente: ordenar, rogar, pedir, llamar la atención', '«Abrid el libro por la página cincuenta, por favor».'],
              hy: ['3. Դիմողական (Apelativa)', 'Ստացող (Receptor)', 'Ազդել լսողի վրա՝ հրամայել, խնդրել, համոզել', '«Բացե՛ք գիրքը հիսուներորդ էջի վրա, խնդրում եմ»։'],
            },
            {
              es: ['4. Fática o de contacto', 'Canal', 'Abrir, comprobar, prolongar o cerrar la comunicación física', '«¿Me escucháis bien al fondo?», «Dígame», «Adiós».'],
              hy: ['4. Կապը պահպանող (Fática)', 'Կապուղի (Canal)', 'Բացել, ստուգել, պահպանել կամ ավարտել կապը', '«Լավ լսո՞ւմ եք ինձ հետևի շարքերում», «Ալո», «Լսո՞ւմ ես»։'],
            },
            {
              es: ['5. Metalingüística', 'Código (el propio idioma)', 'Aclarar dudas sobre el significado o la gramática de la lengua', '«La palabra "árbol" lleva tilde porque es llana terminada en consonante distinta de n o s».'],
              hy: ['5. Մետալեզվական (Metalingüística)', 'Կոդ (լեզուն ինքը)', 'Բացատրել բառի իմաստը, քերականական կանոնը կամ ուղղագրությունը', '«"Árbol" բառը շեշտանշան է կրում, քանի որ վերջընթեր վանկն է շեշտված...»։'],
            },
            {
              es: ['6. Poética o estética', 'Mensaje en sí mismo', 'Llamar la atención sobre la forma y belleza del texto', '«En el silencio rumoroso de la tarde dorada...».'],
              hy: ['6. Գեղարվեստական (Poética)', 'Բուն հաղորդագրությունը (Mensaje)', 'Ուշադրություն հրավիրել տեքստի գեղեցկության, ռիթմի և ձևի վրա', '«Ոսկեզօծ երեկոյի շշնջացող լռության մեջ...»։'],
            },
          ],
        },
        examples: [
          {
            es: '«¿Quién quiere salir a la pizarra?»',
            hy: '«Ո՞վ է ուզում գրատախտակի մոտ դուրս գալ»։',
            explanationEs: 'Función apelativa: busca una acción y respuesta directa del receptor (los alumnos).',
            explanationHy: 'Դիմողական գործառույթ. նպատակն է ստանալ աշակերտների արձագանքը և գործողությունը։',
          },
          {
            es: '«Los sustantivos colectivos nombran en singular a un conjunto de seres».',
            hy: '«Հավաքական գոյականները եզակի թվով անվանում են էակների բազմություն»։',
            explanationEs: 'Función metalingüística: el mensaje habla sobre la propia gramática de la lengua.',
            explanationHy: 'Մետալեզվական գործառույթ. հաղորդագրությունը բացատրում է հենց լեզվի կանոնները։',
          },
        ],
      },
    ],
  },

  // ================= BLOQUE IV: LAS MODALIDADES ORACIONALES =================
  {
    id: 'modalidades-oracionales',
    bloque: 'bloque-4',
    bloqueEs: 'Bloque IV — Las Modalidades Oracionales',
    bloqueHy: 'Բաժին IV — Նախադասությունների տեսակներն ըստ հաղորդակցման նպատակի',
    titleEs: 'Las 6 Modalidades Oracionales',
    titleHy: 'Նախադասությունների 6 տեսակները',
    subtitleEs: 'Enunciativa, interrogativa, exclamativa, exhortativa, desiderativa y dubitativa',
    subtitleHy: 'Պատմողական, հարցական, բացականչական, հրամայական/հորդորական, ցանկություն և կասկած արտահայտող',
    badge: 'Sintaxis',
    icon: 'MessageSquareText',
    overviewEs:
      'La modalidad oracional refleja la actitud del emisor ante lo que dice: si afirma o niega una realidad, si pregunta para obtener información, si expresa una emoción viva, si manda un mandato, si manifiesta un deseo o si abriga una duda.',
    overviewHy:
      'Նախադասության եղանակը/տեսակն արտացոլում է խոսողի վերաբերմունքը. արդյոք նա հաստատում կամ ժխտում է փաստը, հարցնում է տեղեկություն ստանալու համար, արտահայտում է բուռն հույզ, հրամայում է, ցանկություն է հայտնում, թե կասկածում է:',
    subsections: [
      {
        id: 'seis-modalidades',
        titleEs: 'Clasificación de las modalidades oracionales',
        titleHy: 'Նախադասությունների տեսակների դասակարգումը',
        contentEs:
          'No te fijes solo en los signos de puntuación; analiza siempre la intención del hablante.',
        contentHy:
          'Մի՛ նայեք միայն կետադրությանը. միշտ վերլուծեք խոսողի իրական նպատակն ու տրամադրվածությունը։',
        bulletPoints: [
          {
            es: '1. Enunciativa (Պատմողական): Informa de un hecho objetivo. Puede ser afirmativa («Hoy tenemos clase de gimnasia») o negativa («No he visto a Juan en el recreo»).',
            hy: '1. Պատմողական՝ հաղորդում է փաստ: Լինում է հաստատական («Այսօր մարմնակրթության դաս ունենք») կամ ժխտական («Ես չտեսա Խուանին դասամիջոցին»):',
          },
          {
            es: '2. Interrogativa (Հարցական): Formula una pregunta para pedir información. Directas (con signos ¿?) o indirectas («Dime cuándo vendrás»).',
            hy: '2. Հարցական՝ ձևակերպում է հարց տեղեկություն ստանալու համար: Ուղղակի (հարցական նշաններով ¿?) կամ անուղղակի («Ասա՛ ինձ, թե երբ ես գալու»):',
          },
          {
            es: '3. Exclamativa (Բացականչական): Expresa sorpresa, admiración, enfado o alegría con entonación intensa (¡ !). Ejemplo: «¡Qué golazo acabas de marcar!».',
            hy: '3. Բացականչական՝ արտահայտում է զարմանք, հիացմունք, բարկություն կամ ուրախություն բարձր հնչերանգով (¡ !): Օրինակ՝ «Ի՜նչ հիանալի գոլ խփեցիր»:',
          },
          {
            es: '4. Exhortativa o imperativa (Հրամայական / Հորդորական): Transmite una orden, ruego, instrucción, consejo o prohibición («Guarden silencio», «No corras por el pasillo»).',
            hy: '4. Հրամայական / Հորդորական՝ փոխանցում է հրաման, խնդրանք, հրահանգ, խորհուրդ կամ արգելք («Լռությո՛ւն պահպանեք», «Մի՛ վազիր միջանցքում»):',
          },
          {
            es: '5. Desiderativa u optativa (Ցանկություն արտահայտող): Expresa un anhelo o deseo del hablante, habitualmente con el verbo en subjuntivo y partículas como «ojalá», «deseo que», «así». Ejemplo: «¡Ojalá apruebe todo en junio!».',
            hy: '5. Ցանկություն արտահայտող՝ արտահայտում է իղձ կամ ցանկություն, հաճախ «ojalá» (երանի թե) բառով: Օրինակ՝ «Երանի՜ թե հունիսին բոլոր քննությունները հանձնեմ»:',
          },
          {
            es: '6. Dubitativa (Կասկած արտահայտող): Manifiesta incertidumbre, duda o probabilidad («Quizá llueva esta tarde», «Tal vez hayan llegado ya», «A lo mejor viene luego»).',
            hy: '6. Կասկած արտահայտող՝ արտահայտում է անորոշություն կամ հավանականություն («Գուցե այսօր անձրև գա», «Հավանաբար արդեն հասել են»):',
          },
        ],
        examples: [
          {
            es: '«¿Podrías cerrar la puerta?»',
            hy: '«Կկարողանայի՞ր փակել դուռը»։',
            explanationEs: 'Aunque formalmente es una pregunta interrogativa, en el fondo actúa como una exhortativa de cortesía (petición de cerrar la puerta).',
            explanationHy: 'Թեև ձևով հարցական է, սակայն ըստ էության քաղաքավարի խնդրանք է (հորդորական)։',
          },
          {
            es: '«Desearía que vinieras al partido».',
            hy: '«Կցանկանայի, որ գայիր խաղին»։',
            explanationEs: 'Modalidad desiderativa: transmite el deseo ferviente del hablante.',
            explanationHy: 'Ցանկություն արտահայտող նախադասություն։',
          },
        ],
      },
    ],
  },

  // ================= BLOQUE V: LA COMUNICACIÓN =================
  {
    id: 'la-comunicacion',
    bloque: 'bloque-5',
    bloqueEs: 'Bloque V — La Comunicación',
    bloqueHy: 'Բաժին V — Հաղորդակցություն',
    titleEs: 'Los 6 Elementos de la Comunicación',
    titleHy: 'Հաղորդակցության 6 տարրերը',
    subtitleEs: 'Emisor, receptor, mensaje, código, canal y contexto en situaciones de la vida real',
    subtitleHy: 'Հաղորդող, ստացող, ուղերձ, կոդ, կապուղի և համատեքստ իրական կյանքի իրավիճակներում',
    badge: 'Fundamentos',
    icon: 'Share2',
    overviewEs:
      'La comunicación es el proceso mediante el cual se transmite información de un punto a otro. Para que se produzca de forma eficaz intervienen obligatoriamente seis elementos que se deben identificar en cualquier situación comunicativa escolar o cotidiana.',
    overviewHy:
      'Հաղորդակցությունը գործընթաց է, որի միջոցով տեղեկատվությունը մի կետից փոխանցվում է մյուսին: Որպեսզի այն կայանա, անհրաժեշտ են վեց հիմնական տարրեր, որոնք պետք է կարողանալ գտնել դպրոցական կամ առօրյա ցանկացած իրավիճակում:',
    subsections: [
      {
        id: 'elementos-comunicacion-analisis',
        titleEs: 'Definición de los seis elementos',
        titleHy: 'Վեց տարրերի սահմանումը',
        contentEs:
          'Es muy común confundir en el examen el CÓDIGO con el CANAL y con el MENSAJE. ¡Apréndelos con total precisión!',
        contentHy:
          'Քննություններին շատ հաճախ շփոթում են ԿՈԴԸ, ԿԱՊՈՒՂԻՆ և ՈՒՂԵՐՁԸ: Սովորե՛ք դրանց հստակ տարբերությունները:',
        bulletPoints: [
          {
            es: '1. Emisor (Հաղորդող): Quien elabora y emite el mensaje con una intención concreta.',
            hy: '1. Հաղորդող (Emisor)՝ նա, ով կազմում և ուղարկում է հաղորդագրությունը որոշակի նպատակով:',
          },
          {
            es: '2. Receptor (Ստացող): Quien recibe, descifra e interpreta el mensaje.',
            hy: '2. Ստացող (Receptor)՝ նա, ով ստանում, վերծանում և ընկալում է հաղորդագրությունը:',
          },
          {
            es: '3. Mensaje (Ուղերձ / Հաղորդագրություն): La información, ideas o sentimientos que se transmiten.',
            hy: '3. Ուղերձ (Mensaje)՝ բուն տեղեկատվությունը, մտքերը կամ զգացմունքները, որոնք փոխանցվում են:',
          },
          {
            es: '4. Código (Կոդ / Նշանային համակարգ): El sistema de signos y reglas que se utiliza para formular el mensaje (el idioma español, la lengua de signos, el código morse, las señales de tráfico). Debe ser compartido por emisor y receptor.',
            hy: '4. Կոդ (Código)՝ նշանների և կանոնների համակարգը, որով կազմվում է ուղերձը (իսպաներեն լեզուն, ժեստերի լեզուն, լուսացույցի գույները): Երկուսն էլ պետք է իմանան այդ կոդը:',
          },
          {
            es: '5. Canal (Կապուղի / Հաղորդակցման միջոց): El medio físico o soporte a través del cual viaja el mensaje (el aire y las ondas sonoras en una conversación oral, el papel en una carta, la pantalla del móvil, la fibra óptica o internet en un WhatsApp).',
            hy: '5. Կապուղի (Canal)՝ նյութական միջավայրը, որով ճանապարհորդում է ուղերձը (օդը և ձայնային ալիքները բանավոր խոսքում, թուղթը նամակում, հեռախոսի էկրանը, համացանցը/մալուխը):',
          },
          {
            es: '6. Contexto o situación (Համատեքստ / Իրավիճակ): Las circunstancias de tiempo, lugar y cultura que rodean el acto comunicativo y ayudan a interpretar correctamente el mensaje.',
            hy: '6. Համատեքստ (Contexto)՝ ժամանակի, վայրի և իրադրության պայմանները, որոնցում տեղի է ունենում հաղորդակցությունը և որոնք օգնում են ճիշտ հասկանալ իմաստը:',
          },
        ],
        examples: [
          {
            es: 'Situación: «La profesora de Lengua dice en clase: "Mañana hay examen de los temas 1 y 2"».',
            hy: 'Իրավիճակ՝ «Ուսուցչուհին դասարանում ասում է. "Վաղը թեմաներ 1-ի և 2-ի քննություն է"»։',
            explanationEs: 'Emisor: la profesora. Receptor: los alumnos. Mensaje: aviso del examen de temas 1 y 2. Código: lengua española hablada. Canal: el aire (ondas sonoras). Contexto: el aula del instituto por la mañana.',
            explanationHy: 'Հաղորդող՝ ուսուցչուհի: Ստացող՝ աշակերտներ: Ուղերձ՝ քննության մասին ծանուցում: Կոդ՝ իսպաներեն բանավոր լեզու: Կապուղի՝ օդ (ձայնային ալիքներ): Համատեքստ՝ դպրոցի դասարանը առավոտյան:',
          },
          {
            es: 'Situación: «Carlos envía un mensaje de WhatsApp a Mateo: "¿Vienes al parque a jugar al fútbol?"».',
            hy: 'Իրավիճակ՝ «Կառլոսը WhatsApp-ով հաղորդագրություն է գրում Մատեոյին. "Գալի՞ս ես այգի ֆուտբոլ խաղալու"»։',
            explanationEs: 'Emisor: Carlos. Receptor: Mateo. Mensaje: invitación a jugar al fútbol. Código: lengua española escrita. Canal: internet / red móvil y pantalla digital. Contexto: tiempo libre por la tarde.',
            explanationHy: 'Հաղորդող՝ Կառլոս: Ստացող՝ Մատեո: Ուղերձ՝ ֆուտբոլի հրավեր: Կոդ՝ գրավոր իսպաներեն: Կապուղի՝ ինտերնետ / հեռախոսի էկրան: Համատեքստ՝ կեսօրից հետո ազատ ժամանակ:',
          },
        ],
      },
    ],
  },

  // ================= BLOQUE VI: LAS 10 CATEGORÍAS GRAMATICALES =================
  {
    id: 'categorias-gramaticales',
    bloque: 'bloque-6',
    bloqueEs: 'Bloque VI — Las Categorías Gramaticales',
    bloqueHy: 'Բաժին VI — Խոսքի մասերը (10 կատեգորիաներ)',
    titleEs: 'Las 10 Categorías Gramaticales',
    titleHy: 'Խոսքի 10 մասերը',
    subtitleEs: 'Sustantivo, pronombre, adjetivo, verbo, adverbio, determinante, artículo, preposición, conjunción e interjección',
    subtitleHy: 'Գոյական, դերանուն, ածական, բայ, մակբայ, որոշիչ, հոդ, նախդիր, շաղկապ և ձայնարկություն',
    badge: 'Morfología',
    icon: 'Layers',
    overviewEs:
      'Las categorías gramaticales clasifican todas las palabras de nuestra lengua según su forma, significado y función dentro de la oración. Dominar estas diez clases es la clave del éxito en el análisis morfológico de 1.º de ESO.',
    overviewHy:
      'Խոսքի մասերը դասակարգում են մեր լեզվի բոլոր բառերն ըստ իրենց ձևի, իմաստի և նախադասության մեջ կատարած դերի: Այս տասը դասերի յուրացումը 1-ին ESO-ի ձևաբանական վերլուծության հիմնաքարն է:',
    subsections: [
      {
        id: 'sustantivo-detalle',
        titleEs: '1. El Sustantivo o Nombre (Գոյական)',
        titleHy: '1. Գոյական',
        contentEs:
          'Designa seres, objetos, lugares, ideas o sentimientos. Tienen género (masculino/femenino) y número (singular/plural).',
        contentHy:
          'Անվանում է անձեր, առարկաներ, վայրեր, գաղափարներ կամ զգացմունքներ: Ունի սեռ (արական/իգական) և թիվ (եզակի/հոգնակի):',
        bulletPoints: [
          {
            es: 'Común (perro, río, ciudad) vs Propio (Toby, Ebro, Madrid).',
            hy: 'Հասարակ (շուն, գետ, քաղաք) ընդդեմ Հատուկ (Տոբի, Էբրո, Մադրիդ)։',
          },
          {
            es: 'Concreto (mesa, árbol, música) vs Abstracto (justicia, paz, miedo).',
            hy: 'Թանձրացական (սեղան, ծառ, երաժշտություն) ընդդեմ Վերացական (արդարություն, խաղաղություն, վախ)։',
          },
          {
            es: 'Individual (árbol, oveja, soldado) vs Colectivo en singular (bosque, rebaño, ejército).',
            hy: 'Եզակի անհատական (ծառ, ոչխար, զինվոր) ընդդեմ Հավաքական եզակիով (անտառ, հոտ, բանակ)։',
          },
          {
            es: 'Contable (libro, manzana) vs Incontable (arena, leche, aire).',
            hy: 'Հաշվելի (գիրք, խնձոր) ընդդեմ Անհաշվելի (ավազ, կաթ, օդ)։',
          },
        ],
        examples: [
          {
            es: '«La jauría corría veloz por el sendero».',
            hy: '«Որսաշների ոհմակը սրընթաց վազում էր արահետով»։',
            explanationEs: '«Jauría» es un sustantivo común, femenino singular, colectivo (conjunto de perros de caza) y concreto.',
            explanationHy: '«Jauría»-ն հասարակ, իգական սեռի, եզակի թվով հավաքական գոյական է (որսաշների խումբ)։',
          },
        ],
      },
      {
        id: 'pronombre-detalle',
        titleEs: '2. El Pronombre (Դերանուն)',
        titleHy: '2. Դերանուն',
        contentEs:
          'Palabra que SUSTITUYE al sustantivo y no lo acompaña nunca directamente. Desempeña sus mismas funciones sintácticas.',
        contentHy:
          'Բառ, որը ՓՈԽԱՐԻՆՈՒՄ Է գոյականին և երբեք ուղղակիորեն չի ուղեկցում նրան (եթե ուղեկցում է, ապա որոշիչ է):',
        bulletPoints: [
          {
            es: 'Personales tónicos: yo, tú, él, ella, nosotros, vosotros, ellos.',
            hy: 'Անձնական շեշտված դերանուններ՝ ես, դու, նա, մենք, դուք, նրանք։',
          },
          {
            es: 'Personales átonos (complemento): me, te, se, nos, os, lo, la, le, los, las, les.',
            hy: 'Անշեշտ դերանուններ (լրացումներ)՝ me, te, se, nos, os, lo, la, le, los, las, les (օր.՝ «lo compré» = այն գնեցի)։',
          },
          {
            es: 'Demostrativos: este, ese, aquel (cuando van solos sin nombre: «Quiero este»).',
            hy: 'Ցուցական դերանուններ՝ este, ese, aquel (երբ առանց գոյականի են. «Ես ուզում եմ սա»)։',
          },
          {
            es: 'Posesivos: el mío, la tuya, los nuestros (sustituyen al sustantivo).',
            hy: 'Ստացական դերանուններ՝ իմը, քոնը, մերը։',
          },
          {
            es: 'Regla de oro: Si acompaña a un sustantivo, es DETERMINANTE («este libro»). Si está SOLO sustituyendo al sustantivo, es PRONOMBRE («este es genial»).',
            hy: 'Ոսկե կանոն. եթե ուղեկցում է գոյականին, դա ՈՐՈՇԻՉ է («este libro»): Եթե մենակ է և փոխարինում է գոյականին, դա ԴԵՐԱՆՈՒՆ է («este es genial»):',
          },
        ],
        examples: [
          {
            es: '«Ella le entregó el cuaderno a su amigo».',
            hy: '«Նա տվեց տետրն իր ընկերոջը»։',
            explanationEs: '«Ella» (pronombre personal sujeto), «le» (pronombre personal átono de complemento indirecto).',
            explanationHy: '«Ella» (անձնական դերանուն ենթակա), «le» (անձնական անշեշտ դերանուն՝ հանգման խնդիր)։',
          },
        ],
      },
      {
        id: 'adjetivo-detalle',
        titleEs: '3. El Adjetivo Calificativo (Ածական)',
        titleHy: '3. Ածական',
        contentEs:
          'Palabra que acompaña al sustantivo para expresar una cualidad, rasgo o estado del mismo. Concuerda siempre en GÉNERO y NÚMERO con el sustantivo al que acompaña.',
        contentHy:
          'Բառ, որն ուղեկցում է գոյականին՝ արտահայտելով նրա որակը, հատկանիշը կամ վիճակը: Միշտ համաձայնում է գոյականի հետ ՍԵՌՈՎ և ԹՎՈՎ:',
        bulletPoints: [
          {
            es: 'Grado positivo: Cualidad sin intensificar («Un chico alto», «Una tarde tranquila»).',
            hy: 'Դրական աստիճան՝ հատկանիշն առանց ուժեղացման («Բարձրահասակ տղա», «Հանգիստ երեկո»)։',
          },
          {
            es: 'Grado comparativo: De superioridad («más alto que»), de igualdad («tan alto como»), de inferioridad («menos alto que»).',
            hy: 'Բաղդատական աստիճան՝ առավելական («ավելի բարձր, քան»), հավասարության («այնքան բարձր, որքան»), նվազական («պակաս բարձր, քան»)։',
          },
          {
            es: 'Grado superlativo: Absoluto («altísimo», «muy alto», «superalto») y Relativo («el más alto de la clase»).',
            hy: 'Գերադրական աստիճան՝ բացարձակ («ամենաբարձր», «շատ բարձր», altísimo) և հարաբերական («դասարանի ամենաբարձրը»)։',
          },
        ],
        examples: [
          {
            es: '«Esa montaña es altísima».',
            hy: '«Այդ լեռը չափազանց բարձր է (բարձրագույն է)»։',
            explanationEs: '«Altísima» es un adjetivo en grado superlativo absoluto (femenino singular).',
            explanationHy: '«Altísima»-ն բացարձակ գերադրական աստիճանի ածական է (իգական, եզակի)։',
          },
        ],
      },
      {
        id: 'verbo-detalle',
        titleEs: '4. El Verbo (Բայ)',
        titleHy: '4. Բայ',
        contentEs:
          'Es el núcleo del predicado. Expresa una acción, estado o proceso experimentado por el sujeto en un tiempo determinado (presente, pasado o futuro).',
        contentHy:
          'Ստորոգյալի կորիզն է: Արտահայտում է գործողություն, վիճակ կամ գործընթաց որոշակի ժամանակում (ներկա, անցյալ, ապառնի):',
        bulletPoints: [
          {
            es: 'Formas no personales: Infinitivo (-ar, -er, -ir: cantar, comer, vivir), Gerundio (-ando, -iendo: cantando), Participio (-ado, -ido: cantado).',
            hy: 'Անդեմ ձևեր՝ Անորոշ դերբայ/Ինֆինիտիվ (-ar, -er, -ir), Հարակատար/Դերբայ (-ando, -iendo), Անցյալ դերբայ (-ado, -ido)։',
          },
          {
            es: 'Persona y número: 1.ª, 2.ª, 3.ª persona del singular o plural.',
            hy: 'Դեմք և թիվ՝ 1-ին, 2-րդ, 3-րդ դեմք՝ եզակի կամ հոգնակի։',
          },
          {
            es: 'Modos: Indicativo (hechos reales), Subjuntivo (deseos, dudas, posibilidades) e Imperativo (órdenes).',
            hy: 'Եղանակներ՝ Սահմանական (Indicativo - իրական փաստեր), Ըղձական/Ենթադրական (Subjuntivo - ցանկություններ, կասկած), Հրամայական (Imperativo - հրամաններ)։',
          },
        ],
        examples: [
          {
            es: '«Nosotros jugaremos el partido el sábado».',
            hy: '«Մենք շաբաթ օրը կխաղանք հանդիպումը»։',
            explanationEs: '«Jugaremos»: 1.ª persona del plural del futuro simple de indicativo del verbo jugar (1.ª conjugación).',
            explanationHy: '«Jugaremos»՝ խաղալ բայի 1-ին դեմք հոգնակի, պարզ ապառնի, սահմանական եղանակ։',
          },
        ],
      },
      {
        id: 'adverbio-detalle',
        titleEs: '5. El Adverbio (Մակբայ)',
        titleHy: '5. Մակբայ',
        contentEs:
          'Palabra INVARIABLE (no tiene género ni número) que modifica a un verbo («corre rápido»), a un adjetivo («muy inteligente») o a otro adverbio («bastante cerca»).',
        contentHy:
          'ԱՆՓՈՓՈԽ բառ (չունի ո՛չ սեռ, ո՛չ թիվ), որը լրացնում է բային («արագ վազում է»), ածականին («շատ խելացի») կամ մեկ այլ մակբայի («բավականին մոտ»):',
        bulletPoints: [
          {
            es: 'Lugar: aquí, allí, cerca, lejos, dentro, fuera, arriba, abajo.',
            hy: 'Տեղի՝ այստեղ, այնտեղ, մոտ, հեռու, ներսում, դրսում, վերևում, ներքևում։',
          },
          {
            es: 'Tiempo: hoy, ayer, mañana, tarde, temprano, pronto, todavía, nunca.',
            hy: 'Ժամանակի՝ այսօր, երեկ, վաղը, ուշ, շուտ, դեռ, երբեք։',
          },
          {
            es: 'Modo: bien, mal, despacio, deprisa, alegremente, fácilmente (terminados en -mente).',
            hy: 'Ձևի՝ լավ, վատ, դանդաղ, արագ, ուրախորեն, հեշտությամբ (-mente-ով վերջացողները)։',
          },
          {
            es: 'Cantidad: mucho, poco, bastante, casi, nada, más, menos.',
            hy: 'Քանակի՝ շատ, քիչ, բավական, գրեթե, ոչինչ, ավելի, պակաս։',
          },
          {
            es: 'Afirmación, negación y duda: sí, también / no, jamás / quizás, acaso.',
            hy: 'Հաստատական, ժխտական և կասկածի՝ այո, նույնպես / ոչ, երբեք / գուցե։',
          },
          {
            es: 'Diferencia vital con adjetivo: «Ellos comen mucho» (mucho es adverbio invariable). «Ellos comen muchas manzanas» (muchas es determinante porque concuerda en femenino plural con manzanas).',
            hy: 'Կարևոր տարբերություն ածականից/որոշիչից. «Ellos comen mucho» (mucho-ն անփոփոխ մակբայ է): «Ellos comen muchas manzanas» (muchas-ը որոշիչ է, որովհետև համաձայնել է խնձորների հետ):',
          },
        ],
        examples: [
          {
            es: '«Los atletas entrenaron duramente ayer».',
            hy: '«Մարզիկները երեկ ծանր (քրտնաջան) մարզվեցին»։',
            explanationEs: '«Duramente» es adverbio de modo y «ayer» es adverbio de tiempo.',
            explanationHy: '«Duramente»՝ ձևի մակբայ, «ayer»՝ ժամանակի մակբայ։',
          },
        ],
      },
      {
        id: 'determinante-y-articulo',
        titleEs: '6 y 7. El Determinante y el Artículo (Որոշիչ և Հոդ)',
        titleHy: '6 և 7. Որոշիչներ և Հոդեր',
        contentEs:
          'Los determinantes son palabras que acompañan al sustantivo para concretarlo o determinarlo, concordando con él en género y número. El artículo es la subclase principal de determinante.',
        contentHy:
          'Որոշիչները բառեր են, որոնք ուղեկցում են գոյականին՝ կոնկրետացնելու կամ սահմանափակելու այն, համաձայնելով նրա հետ սեռով և թվով: Հոդը որոշիչների գլխավոր տեսակն է:',
        bulletPoints: [
          {
            es: 'Artículos determinados: el, la, los, las (concreta algo conocido). Contracciones obligatorias: a + el = al; de + el = del.',
            hy: 'Որոշյալ հոդեր՝ el, la, los, las: Պարտադիր միաձուլումներ՝ a + el = al («Voy al colegio»), de + el = del («Vengo del parque»)։',
          },
          {
            es: 'Artículos indeterminados: un, una, unos, unas (presenta algo no conocido).',
            hy: 'Անորոշ հոդեր՝ un, una, unos, unas (ներկայացնում են անծանոթ առարկա)։',
          },
          {
            es: 'Demostrativos: este, esta, estos, estas (cercanía); ese, esa (distancia media); aquel, aquella (lejanía).',
            hy: 'Ցուցական որոշիչներ՝ este (մոտիկություն), ese (միջին հեռավորություն), aquel (հեռավորություն)։',
          },
          {
            es: 'Posesivos: mi, tu, su, nuestro, vuestro, sus libros.',
            hy: 'Ստացական որոշիչներ՝ mi, tu, su, nuestro, vuestro, sus (իմ, քո, նրա, մեր, ձեր, նրանց)։',
          },
          {
            es: 'Numerales: cardinales (uno, dos, tres) y ordinales (primer, segundo, tercer).',
            hy: 'Թվական որոշիչներ՝ քանակական (uno, dos) և դասական (primer, segundo)։',
          },
          {
            es: 'Indefinidos: algún, ningún, varios, muchos, pocos (acompañando a sustantivo).',
            hy: 'Անորոշ որոշիչներ՝ algún, ningún, varios, muchos (գոյականի հետ)։',
          },
        ],
        examples: [
          {
            es: '«El niño fue al parque con sus dos hermanos».',
            hy: '«Տղան գնաց այգի իր երկու եղբայրների հետ»։',
            explanationEs: '«El» (artículo determinado), «al» (contracción a + el), «sus» (determinante posesivo), «dos» (determinante numeral cardinal).',
            explanationHy: '«El»՝ որոշյալ հոդ, «al»՝ միաձուլված հոդ, «sus»՝ ստացական որոշիչ, «dos»՝ քանակական թվական որոշիչ։',
          },
        ],
      },
      {
        id: 'preposicion-y-conjuncion',
        titleEs: '8 y 9. La Preposición y la Conjunción (Նախդիր և Շաղկապ)',
        titleHy: '8 և 9. Նախդիրներ և Շաղկապներ',
        contentEs:
          'Son elementos de enlace (nexos) invariables que unen palabras o proposiciones entre sí.',
        contentHy:
          'Անփոփոխ կապակցական բառեր (կապեր/շաղկապներ), որոնք կապում են բառերը կամ նախադասությունները միմյանց հետ:',
        bulletPoints: [
          {
            es: 'Lista oficial de preposiciones en español: a, ante, bajo, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras, versus, vía.',
            hy: 'Իսպաներենի նախդիրների ամբողջական ցանկը՝ a, ante, bajo, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras, versus, vía:',
          },
          {
            es: 'Conjunciones copulativas (suman): y, e (ante i/hi), ni («Ni come ni duerme»).',
            hy: 'Միավորող շաղկապներ (գումարում են)՝ y, e (i/hi-ից առաջ), ni («Ո՛չ ուտում է, ո՛չ քնում»)։',
          },
          {
            es: 'Conjunciones disyuntivas (opción): o, u (ante o/ho: «siete u ocho»).',
            hy: 'Տրոհական շաղկապներ (ընտրություն)՝ o, u (o/ho-ից առաջ. «siete u ocho»)։',
          },
          {
            es: 'Conjunciones adversativas (oposición): pero, sino, sin embargo.',
            hy: 'Ներհակական շաղկապներ (հակադրություն)՝ pero (բայց), sino (այլ), sin embargo (սակայն)։',
          },
          {
            es: 'Conjunciones causales y condicionales: porque, puesto que / si, con tal que.',
            hy: 'Պատճառական և պայմանական շաղկապներ՝ porque (որովհետև) / si (եթե)։',
          },
        ],
        examples: [
          {
            es: '«Estudié mucho para el examen, pero no pude dormir bien porque tenía nervios».',
            hy: '«Ես շատ սովորեցի քննության համար (նախդիր), բայց (շաղկապ) չկարողացա լավ քնել, որովհետև (շաղկապ) հուզված էի»։',
            explanationEs: '«Para» es preposición; «pero» es conjunción adversativa; «porque» es conjunción causal.',
            explanationHy: '«Para»-ն նախդիր է, «pero»-ն՝ ներհակական շաղկապ, «porque»-ն՝ պատճառի շաղկապ։',
          },
        ],
      },
      {
        id: 'interjeccion-detalle',
        titleEs: '10. La Interjección (Ձայնարկություն)',
        titleHy: '10. Ձայնարկություն',
        contentEs:
          'Palabras que forman por sí solas enunciados exclamativos e independientes. Se escriben entre signos de exclamación (¡ !) y expresan emociones súbitas, llamadas o fórmulas de cortesía.',
        contentHy:
          'Բառեր, որոնք ինքնուրույն կազմում են բացականչական նախադասություններ: Գրվում են բացականչական նշանների մեջ (¡ !) և արտահայտում են հանկարծակի հույզեր, կանչեր կամ քաղաքավարության ձևեր:',
        bulletPoints: [
          {
            es: '¡Ay! (dolor o queja repentina / ցավ կամ բողոք).',
            hy: '¡Ay!՝ հանկարծակի ցավ կամ վախ։',
          },
          {
            es: '¡Uf! (alivio, cansancio o sofoco tras un esfuerzo / թեթևացում կամ հոգնածություն).',
            hy: '¡Uf!՝ թեթևացում կամ հոգնածություն դժվար գործից հետո։',
          },
          {
            es: '¡Oh! (admiración, asombro o sorpresa / հիացմունք կամ զարմանք).',
            hy: '¡Oh!՝ զարմանք կամ հիացմունք։',
          },
          {
            es: '¡Eh! (llamada de atención o advertencia / ուշադրության հրավիրում կամ նախազգուշացում).',
            hy: '¡Eh!՝ մեկի ուշադրությունը գրավելու համար։',
          },
          {
            es: '¡Bravo! (aplauso, entusiasmo y felicitación / հիացմունք և շնորհավորանք).',
            hy: '¡Bravo!՝ ծափահարություն և հիացմունք։',
          },
          {
            es: '¡Bah! (desdén, desprecio o desinterés / արհամարհանք կամ անտարբերություն).',
            hy: '¡Bah!՝ անտարբերություն կամ թերահավատություն։',
          },
        ],
        examples: [
          {
            es: '«¡Uf, qué alivio haber terminado el examen a tiempo!».',
            hy: '«Ու՜ֆ, ինչպիսի՜ թեթևացում, որ քննությունը ժամանակին ավարտեցի»։',
            explanationEs: '«¡Uf!» manifiesta una sensación de alivio intenso.',
            explanationHy: '«¡Uf!»-ն արտահայտում է հոգնածությունից հետո եկած մեծ թեթևացում։',
          },
        ],
      },
    ],
  },

  // ================= BLOQUE VII: VOCABULARIO Y EXPRESIONES =================
  {
    id: 'vocabulario-expresiones',
    bloque: 'bloque-7',
    bloqueEs: 'Bloque VII — Vocabulario y Expresiones',
    bloqueHy: 'Բաժին VII — Բառապաշար և արտահայտություններ',
    titleEs: 'Vocabulario y Expresiones Clave para el Examen',
    titleHy: 'Քննության համար անհրաժեշտ հիմնական բառապաշար և արտահայտություններ',
    subtitleEs: 'Términos académicos, fórmulas para dar consejos, modalizaciones y conectores',
    subtitleHy: 'Ակադեմիական եզրույթներ, խորհուրդ տալու ձևեր, եղանակավորող արտահայտություններ',
    badge: 'Léxico',
    icon: 'BookMarked',
    overviewEs:
      'En los exámenes de 1.º de ESO aparecen con frecuencia palabras académicas, verbos irregulares y giros expresivos fundamentales que los alumnos deben comprender y emplear con soltura.',
    overviewHy:
      '1-ին ESO-ի քննություններում հաճախ հանդիպում են ակադեմիական բառեր, անկանոն բայեր և արտահայտություններ, որոնք աշակերտը պետք է իմանա և վստահորեն կիրառի:',
    subsections: [
      {
        id: 'lexico-academico',
        titleEs: 'Términos académicos indispensables',
        titleHy: 'Անհրաժեշտ ակադեմիական եզրույթներ',
        contentEs:
          'Vocabulario esencial que aparece en los enunciados y preguntas de examen.',
        contentHy:
          'Հիմնական բառապաշար, որը հանդիպում է քննական հարցերում և պահանջներում։',
        table: {
          headersEs: ['Palabra / Expresión', 'Significado escolar', 'Traducción armenia', 'Ejemplo de uso'],
          headersHy: ['Բառ / Արտահայտություն', 'Դպրոցական իմաստ', 'Հայերեն թարգմանություն', 'Կիրառության օրինակ'],
          rows: [
            {
              es: ['Recuperar', 'Aprobar en una segunda convocatoria una materia suspendida', 'Վերահանձնել / Ուղղել գնահատականը', '«Tengo que recuperar la evaluación de Lengua en junio».'],
              hy: ['Recuperar', 'Կտրված քննությունը երկրորդ փորձից հանձնել', 'Վերահանձնել / Ուղղել գնահատականը', '«Ես պետք է հունիսին վերահանձնեմ լեզվի կիսամյակը»։'],
            },
            {
              es: ['Comprender', 'Entender el significado profundo y el mensaje de un texto', 'Հասկանալ / Ըմբռնել', '«Es imprescindible comprender el poema antes de responder».'],
              hy: ['Comprender', 'Տեքստի խորքային իմաստն ու ուղերձն ընկալել', 'Հասկանալ / Ըմբռնել', '«Պատասխանելուց առաջ անհրաժեշտ է ըմբռնել բանաստեղծությունը»։'],
            },
            {
              es: ['Haber / hay', 'Verbo impersonal para indicar existencia de personas o cosas', 'Կա / Կան (գոյություն ունի / ունեն)', '«En la biblioteca hay tres diccionarios de la RAE».'],
              hy: ['Haber / hay', 'Անդեմ բայ՝ գոյություն ունենալու իմաստով (միշտ եզակի)', 'Կա / Կան (գոյություն ունի / ունեն)', '«Գրադարանում RAE-ի երեք բառարան կա»։'],
            },
            {
              es: ['Protagonista', 'Personaje principal alrededor del cual gira la trama', 'Գլխավոր հերոս', '«El protagonista del relato emprende un viaje peligroso».'],
              hy: ['Protagonista', 'Գլխավոր կերպար, որի շուրջ ծավալվում է պատմությունը', 'Գլխավոր հերոս', '«Պատմվածքի գլխավոր հերոսը վտանգավոր ճամփորդություն է սկսում»։'],
            },
            {
              es: ['Distraer', 'Apartar la atención de una tarea o del estudio', 'Ուշադրությունը շեղել', '«No te distraigas con el móvil mientras estudias».'],
              hy: ['Distraer', 'Դասից կամ գործից ուշադրությունը շեղել', 'Ուշադրությունը շեղել', '«Սովորելիս հեռախոսով ուշադրությունդ մի՛ շեղիր»։'],
            },
            {
              es: ['Un favor', 'Ayuda que se pide o se concede con amabilidad', 'Խնդրանք / Լավություն', '«¿Me harías el favor de prestarme tus apuntes?».'],
              hy: ['Un favor', 'Օգնություն կամ բարի գործ, որ խնդրում են', 'Խնդրանք / Լավություն', '«Կանեի՞ր ինձ այն լավությունը՝ տալով քո գրառումները»։'],
            },
            {
              es: ['Date', 'Forma del verbo darse (imperativo + pronombre): apresurarse', 'Շտապի՛ր / Շարժվի՛ր (Date prisa)', '«¡Date prisa o llegaremos tarde a la clase!».'],
              hy: ['Date', 'Darse բայի հրամայական ձևը՝ շտապել («Date prisa»)', 'Շտապի՛ր / Շարժվի՛ր', '«Շտապի՛ր, թե չէ կուշանանք դասից»։'],
            },
            {
              es: ['De repente', 'Locución adverbial: de manera brusca e imprevista', 'Հանկարծ / Անսպասելիորեն', '«De repente se apagaron las luces del pasillo».'],
              hy: ['De repente', 'Մակբայական դարձվածք՝ անսպասելիորեն', 'Հանկարծ / Անսպասելիորեն', '«Հանկարծ անջատվեցին միջանցքի լույսերը»։'],
            },
            {
              es: ['Dar consejos', 'Expresar recomendaciones para orientar a alguien', 'Խորհուրդ տալ', '«El tutor nos dio consejos para preparar el examen».'],
              hy: ['Dar consejos', 'Խորհուրդներ տալ մեկին ուղղորդելու համար', 'Խորհուրդ տալ', '«Դասղեկը մեզ խորհուրդներ տվեց քննությանը պատրաստվելու համար»։'],
            },
            {
              es: ['Cancelar', 'Anular una actividad, evento o cita programada', 'Չեղարկել / Հետ կանչել', '«Tuvieron que cancelar la excursión por la lluvia».'],
              hy: ['Cancelar', 'Նախատեսված միջոցառումը կամ ժամադրությունը չեղարկել', 'Չեղարկել / Հետ կանչել', '«Անձրևի պատճառով ստիպված եղան չեղարկել էքսկուրսիան»։'],
            },
          ],
        },
        examples: [
          {
            es: '«Yo que tú, estudiaría un poco cada tarde».',
            hy: '«Քո տեղը լինեի՝ ամեն երեկո մի քիչ կսովորեի»։',
            explanationEs: 'Estructura habitual para dar consejos expresando empatía y sugerencia cordial.',
            explanationHy: 'Բնորոշ կառույց խորհուրդ տալու համար՝ «քո տեղը լինեի» իմաստով։',
          },
          {
            es: '«Es mejor que hables con ella directamente».',
            hy: '«Ավելի լավ է՝ խոսես նրա հետ ուղիղ»։',
            explanationEs: 'Estructura de recomendación con subjuntivo («hables»).',
            explanationHy: 'Խորհուրդ տալու կառույց, որը պահանջում է subjuntivo («hables»)։',
          },
          {
            es: '«Espero que juguemos bien y que ganemos el torneo».',
            hy: '«Հուսով եմ, որ լավ կխաղանք և կհաղթենք մրցաշարում»։',
            explanationEs: 'Verbo de deseo («espero que») seguido de presente de subjuntivo («juguemos», «ganemos»).',
            explanationHy: 'Ցանկության բայ, որին հաջորդում են subjuntivo-ի ձևերը։',
          },
        ],
      },
    ],
  },
];
