var defines = function(Kns) {
////константы
	Kns.num = {Base: 0, TailBase: 15, TailElement: 6, ManeBase: 16, ManeElement: 20, TuftBase: 18, TuftElement: 21, EarBase: 17, EarLeft: 7, EarRight: 8, EarTufts: 10, LeftEye: 1, RightEye: 19, LeftHindPaw: 13, RightHindPaw: 14, LeftForePaw: 2, RightForePaw: 3, BodyElement: 4, BellyElement: 12, BreastElement: 9, NeckElement: 11, HeadElement: 5, NoseElement: 23, Whisker: 22, EarTuftsNormal: "1", EarLay: 2};
	Kns.paletteNormalBases = 0;
	Kns.maxSimilarElements = 2;
	Kns.isBaseSpecial = function (base) {
		return !(Kns.palette[Kns.paletteNormalBases].colours.filter(function (el) {
			return base == el.id;
		})[0])
	};
	Kns.paletteNormalEyes = 1;
	Kns.isEyesSpecial = function (eye) {
		return !(Kns.palette[Kns.paletteNormalEyes].colours.filter(function (el) {
			return eye == el.id;
		})[0])
	};
	Kns.detailsMax = 8;
	Kns.vipLevel = 0;
	Kns.detailVariant = 1;
	Kns.blocks = [["Основа", [0, 22, 23, 16], 15, 18, 17], ["Шея и морда", [1, 19, 7, 8, 10, 20, 21], 5, 11], ["Туловище", 4, 9, 12], ["Лапы и хвост", 6, 2, 3, 13, 14]];
	Kns.actions = [0, 1];

	Kns.folders = {static: [], animationLayers: [Kns.num.Base, Kns.num.LeftHindPaw, Kns.num.RightHindPaw, Kns.num.LeftForePaw, Kns.num.RightForePaw, Kns.num.BodyElement, Kns.num.BellyElement, Kns.num.BreastElement, Kns.num.NeckElement, Kns.num.HeadElement, Kns.num.ManeBase, Kns.num.ManeElement, Kns.num.TuftBase, Kns.num.TuftElement, Kns.num.EarTufts, Kns.num.EarBase, Kns.num.EarLeft, Kns.num.EarRight, Kns.num.NoseElement, Kns.num.LeftEye, Kns.num.RightEye, Kns.num.Whisker, Kns.num.TailBase, Kns.num.TailElement]};
	//Kns.folders = {static: [], animationLayers: ["base", "hindpaw_left", "hindpaw_right", "forepaw_left", "forepaw_right", "body", "belly", "breast", "neck", "head", "base_mane", "mane", "base_hair", "hair", "tuft", "base_ears", "ear_left", "ear_right", "nose", "eyes", "eye_right", "whisker", "base_tail", "tail", "costume", "dirt", "wound", "drown", "poisoning", "disease"]};

	Kns.parts = [
		/* 0 */ {
			name: "Основной цвет",
			folder: "base",
			noCombine: true,
			default: {id: "1", colour: "1"},
			noVariations: true,
			special: true,
			obligatory: true,
			opaque: true,
			times: {1: [1000, 200, 200, 300]},
			info: [
				{id: "1", name: "Обычное телосложение"},
				{id: "2", name: "Уникальный окрас", palette: 2, elements: 1, allowedChildren: {whitelist: true, blocks: [Kns.num.LeftEye, Kns.num.RightEye]}, times: {1: [1000, 200, 200, 300, 1000, 100, 100, 100]}},
				{id: "3", name: "Уникальный окрас", palette: 7, elements: 2, allowedChildren: {whitelist: true, blocks: [Kns.num.LeftEye, Kns.num.RightEye, Kns.num.NoseElement, Kns.num.Whisker]}, times: {1: [1000, 200, 200, 300, 1000, 100, 100, 100]}}],
			cut_from: false
		},
		/* 1 */ {
			name: "Глаза",
			folder: "elements/eyes",
			default: {colour: "12"},
			palette: 3,
			noVariations: true,
			previewImg: "_",
			maxLayers: 2,
			special: true,
			obligatory: true,
			opaque: false,
			parent: Kns.num.Base
		},
		/* 2 */ {
			name: "Левая лапа",
			folder: "elements/forepaw_left",
			info: [
				{id: "1", name: "Брызги"},
				{id: "2", name: "Пятнышки"},
				{id: "3", name: "Леопардовые пятнышки"},
				{id: "4", name: "Тонкие полосы"},
				{id: "5", name: "Полосы"},
				{id: "6", name: "Разорванные полосы"},
				{id: "7", name: "Пламенные полосы"},
				{id: "8", name: "Мрамор"},
				{id: "18", name: "Следок"},
				{id: "9", name: "Пальцы"},
				{id: "10", name: "Носок"},
				{id: "11", name: "Гольф"},
				{id: "12", name: "Чулок"},
				{id: "13", name: "Лапа"},
				{id: "14", name: "Низ"},
				{id: "15", name: "Низ с носком"},
				{id: "16", name: "Слабый налёт"},
				{id: "17", name: "Сильный налёт"}]
		},
		/* 3 */ {
			name: "Правая лапа",
			folder: "elements/forepaw_right",
			info: [
				{id: "1", name: "Брызги"},
				{id: "2", name: "Пятнышки"},
				{id: "3", name: "Леопардовые пятнышки"},
				{id: "4", name: "Тонкие полосы"},
				{id: "5", name: "Полосы"},
				{id: "6", name: "Разорванные полосы"},
				{id: "7", name: "Пламенные полосы"},
				{id: "8", name: "Мрамор"},
				{id: "18", name: "Следок"},
				{id: "9", name: "Пальцы"},
				{id: "10", name: "Носок"},
				{id: "11", name: "Гольф"},
				{id: "12", name: "Чулок"},
				{id: "13", name: "Лапа"},
				{id: "14", name: "Низ"},
				{id: "15", name: "Низ с носком"},
				{id: "16", name: "Слабый налёт"},
				{id: "17", name: "Сильный налёт"}]
		},
		/* 4 */ {
			name: "Туловище",
			folder: "elements/body",
			times: {1: [1000, 200, 200, 300]},
			info: [
				{id: "1", name: "Брызги"},
				{id: "42", name: "Брызги на плечах"},
				{id: "2", name: "Пятнышки"},
				{id: "3", name: "Пятна"},
				{id: "4", name: "Большое пятно №1"},
				{id: "5", name: "Большое пятно №2"},
				{id: "6", name: "Большое пятно №3"},
				{id: "7", name: "Большое пятно №4"},
				{id: "8", name: "Большое пятно №5"},
				{id: "9", name: "Большое пятно №6"},
				{id: "10", name: "Большое пятно №7"},
				{id: "11", name: "Большое пятно №8"},
				{id: "12", name: "Леопардовые пятнышки"},
				{id: "13", name: "Полоски"},
				{id: "14", name: "Полосы"},
				{id: "15", name: "Тонкие полосы"},
				{id: "16", name: "Пламенные полосы"},
				{id: "17", name: "Разорванные полосы"},
				{id: "18", name: "Полосы с ремнём"},
				{id: "19", name: "Мрамор"},
				{id: "20", name: "Мраморные отметины"},
				{id: "21", name: "Мраморные полосы"},
				{id: "22", name: "Облачный мрамор"},
				{id: "23", name: "Облачные отметины"},
				{id: "24", name: "Узкий ремень"},
				{id: "25", name: "Ремень"},
				{id: "26", name: "Ремень на плечах"},
				{id: "27", name: "Ремень на крестце"},
				{id: "28", name: "Пятна на плечах"},
				{id: "29", name: "Пятно на плече"},
				{id: "30", name: "Отметина на лопатках"},
				{id: "31", name: "Отметина на боку"},
				{id: "32", name: "Отметина на бедре"},
				{id: "33", name: "Отметина на крестце"},
				{id: "34", name: "Клякса"},
				{id: "35", name: "Слабый налёт"},
				{id: "36", name: "Налёт"},
				{id: "37", name: "Сильный налёт"},
				{id: "38", name: "Слабая затушёвка"},
				{id: "39", name: "Затушёвка"},
				{id: "40", name: "Чепрак"},
				{id: "41", name: "Чепрак с прорезями"},
				{id: "43", name: "Шерсть слева"},
				{id: "44", name: "Шерсть справа"}]
		},
		/* 5 */ {
			name: "Морда",
			folder: "elements/head",
			info: [
				{id: "1", name: "Полосочки"},
				{id: "2", name: "Полосы"},
				{id: "3", name: "Извилистые полосы"},
				{id: "4", name: "Полосы от щёк"},
				{id: "5", name: "Разорванные полосы от щёк"},
				{id: "6", name: "Полосы вокруг бровей"},
				{id: "7", name: "Полосы до глаз"},
				{id: "8", name: "Пламенные полосы"},
				{id: "9", name: "Полосы на лбу"},
				{id: "10", name: "Разорванные полосы на лбу"},
				{id: "11", name: "Полосы на носу"},
				{id: "12", name: "Мрамор"},
				{id: "13", name: "Ремень"},
				{id: "14", name: "Узкий ремень"},
				{id: "15", name: "Половина ремня"},
				{id: "16", name: "Половина узкого ремня"},
				{id: "17", name: "Брызги"},
				{id: "18", name: "Брызги на носу"},
				{id: "19", name: "Пятнышки"},
				{id: "20", name: "Пятнышки под глазами"},
				{id: "21", name: "Пятна"},
				{id: "22", name: "Леопардовые пятнышки"},
				{id: "23", name: "Маленькая маска"},
				{id: "24", name: "Маска"},
				{id: "25", name: "Маска без глаз"},
				{id: "26", name: "Маска с глазами"},
				{id: "27", name: "Бородка"},
				{id: "28", name: "Бородка с щеками"},
				{id: "29", name: "Подбородок"},
				{id: "30", name: "Подбородок с щеками"},
				{id: "31", name: "Брови"},
				{id: "32", name: "Рысьи брови"},
				{id: "33", name: "Вибриссы"},
				{id: "34", name: "Отметина под носом"},
				{id: "35", name: "Внешняя сторона губ"},
				{id: "36", name: "Губы"},
				{id: "37", name: "Щипец"},
				{id: "38", name: "Пятно меж глаз"},
				{id: "39", name: "Переносица"},
				{id: "40", name: "Клякса на нос"},
				{id: "41", name: "Отметины на скулах"},
				{id: "42", name: "Щёки полностью"},
				{id: "43", name: "Макушка"},
				{id: "44", name: "Шапка"},
				{id: "45", name: "Подпалины на лбу"},
				{id: "46", name: "Отметина справа морды"},
				{id: "47", name: "Отметина на глазу"},
				{id: "48", name: "Слеза"},
				{id: "49", name: "Пятно на лбу"},
				{id: "50", name: "Отметины над глазами №1"},
				{id: "51", name: "Отметины над глазами №2"},
				{id: "52", name: "Отметины под глазами №1"},
				{id: "53", name: "Отметины под глазами №2"},
				{id: "54", name: "Отметина в половину носа"},
				{id: "55", name: "Отметина на нос"},
				{id: "56", name: "Левая половина морды №1"},
				{id: "57", name: "Левая половина морды №2"},
				{id: "58", name: "Левая половина морды №3"},
				{id: "59", name: "Левая половина морды №4"},
				{id: "60", name: "Правая половина морды №1"},
				{id: "61", name: "Правая половина морды №2"},
				{id: "62", name: "Правая половина морды №3"},
				{id: "63", name: "Правая половина морды №4"},
				{id: "64", name: "Большое пятно №1"},
				{id: "65", name: "Большое пятно №2"},
				{id: "66", name: "Большое пятно №3"},
				{id: "67", name: "Большое пятно №4"},
				{id: "68", name: "Большое пятно №5"},
				{id: "69", name: "Слабый налёт"},
				{id: "70", name: "Налёт"},
				{id: "71", name: "Слабая затушёвка"},
				{id: "72", name: "Затушёвка"}]
		},
		/* 6 */ {
			name: "Хвост",
			folder: "elements/tail",
			parent: Kns.num.TailBase,
			times: {1: [5000, 100, 100, 100]},
			info: [
				{id: "1", name: "Кольцо"},
				{id: "2", name: "Кольца"},
				{id: "3", name: "Кончик"},
				{id: "4", name: "Кончик с пятнами"},
				{id: "5", name: "Кисточка"},
				{id: "6", name: "Начало хвоста"},
				{id: "7", name: "Половина хвоста"},
				{id: "8", name: "Низ"},
				{id: "9", name: "Низ с кончиком"},
				{id: "10", name: "Брызги"},
				{id: "11", name: "Пятнышки"},
				{id: "12", name: "Пятна"},
				{id: "13", name: "Большие пятна"},
				{id: "14", name: "Полоски"},
				{id: "15", name: "Полосы"},
				{id: "16", name: "Пламенные полосы"},
				{id: "17", name: "Мрамор"},
				{id: "18", name: "Ремень"},
				{id: "19", name: "Ремень с кончиком"},
				{id: "20", name: "Узкий ремень"},
				{id: "21", name: "Налёт"},
				{id: "22", name: "Затушёвка"}],
			cut_from: Kns.num.TailBase
		},
		/* 7 */ {
			name: "Левое ухо",
			folder: "elements/ear_left",
			parent: Kns.num.EarBase,
			info: [{id: "1", name: "Кончик"},
				{id: "2", name: "Кайма"},
				{id: "3", name: "Полностью"},
				{id: "4", name: "Шерсть внутри", palette: 5}],
			cut_from: Kns.num.EarBase
		},
		/* 8 */ {
			name: "Правое ухо",
			folder: "elements/ear_right",
			parent: Kns.num.EarBase,
			info: [{id: "1", name: "Кончик"},
				{id: "2", name: "Кайма"},
				{id: "3", name: "Полностью"},
				{id: "4", name: "Шерсть внутри", palette: 5, cut_from: false}],
			cut_from: Kns.num.EarBase
		},
		/* 9 */ {
			name: "Грудь",
			folder: "elements/breast",
			info: [
				{id: "1", name: "Пятнышки"},
				{id: "2", name: "Пятна"},
				{id: "3", name: "Мрамор"},
				{id: "4", name: "Маленький медальон"},
				{id: "5", name: "Средний медальон"},
				{id: "6", name: "Медальон"},
				{id: "7", name: "Подпалины"},
				{id: "8", name: "Область под шеей"},
				{id: "9", name: "Полностью"},
				{id: "10", name: "Грудь с горлом"}]
		},
		/* 10 */ {
			name: "Кисточки",
			folder: "elements/tuft",
			parent: Kns.num.EarBase,
			info: [
				{id: "1", name: "Кисточки"},
				{id: "2", name: "Маленькие кисточки"}],
			opaque: true,
			cut_from: false
		},
		/* 11 */ {
			name: "Шея",
			folder: "elements/neck",
			info: [
				{id: "1", name: "Пятнышки"},
				{id: "2", name: "Пятна"},
				{id: "3", name: "Отметины"},
				{id: "4", name: "Леопардовые пятнышки"},
				{id: "5", name: "Большое пятно №1"},
				{id: "6", name: "Большое пятно №2"},
				{id: "7", name: "Полоски"},
				{id: "8", name: "Полосы"},
				{id: "9", name: "Пламенные полосы"},
				{id: "10", name: "Разорванные полосы"},
				{id: "11", name: "Мрамор"},
				{id: "12", name: "Мраморные полосы"},
				{id: "13", name: "Полосатый мрамор"},
				{id: "14", name: "Ремень"},
				{id: "15", name: "Узкий ремень"},
				{id: "16", name: "Полностью"},
				{id: "17", name: "Слабый налёт"},
				{id: "18", name: "Налёт"},
				{id: "19", name: "Затушёвка"}]
		},
		/* 12 */ {
			name: "Живот",
			folder: "elements/belly",
			info: [
				{id: "1", name: "Пятна"},
				{id: "2", name: "Полосы"},
				{id: "3", name: "Неполный живот"},
				{id: "4", name: "Полностью"}]
		},
		/* 13 */ {
			name: "Задняя левая лапа",
			folder: "elements/hindpaw_left",
			times: {1: [1000, 200, 200, 300]},
			info: [
				{id: "1", name: "Брызги"},
				{id: "2", name: "Пятнышки"},
				{id: "3", name: "Пятна"},
				{id: "4", name: "Большие пятна"},
				{id: "5", name: "Леопардовые пятнышки"},
				{id: "6", name: "Полосочки"},
				{id: "7", name: "Полоски"},
				{id: "8", name: "Полосы"},
				{id: "9", name: "Разорванные полосы"},
				{id: "10", name: "Тонкие полосы"},
				{id: "11", name: "Пламенные полосы"},
				{id: "12", name: "Извилистые полосы"},
				{id: "13", name: "Мрамор"},
				{id: "14", name: "Мраморные отметины"},
				{id: "27", name: "Следок"},
				{id: "15", name: "Пальцы"},
				{id: "16", name: "Носок"},
				{id: "17", name: "Стопа"},
				{id: "18", name: "Гольф"},
				{id: "19", name: "Чулок"},
				{id: "20", name: "Низ"},
				{id: "21", name: "Внешняя сторона лапы"},
				{id: "22", name: "Лапа"},
				{id: "23", name: "Слабый налёт"},
				{id: "24", name: "Налёт"},
				{id: "25", name: "Сильный налёт"},
				{id: "26", name: "Затушёвка"}]
		},
		/* 14 */ {
			name: "Задняя правая лапа",
			folder: "elements/hindpaw_right",
			info: [
				{id: "1", name: "Брызги"},
				{id: "2", name: "Пятнышки"},
				{id: "3", name: "Пятна"},
				{id: "4", name: "Большие пятна"},
				{id: "5", name: "Леопардовые пятнышки"},
				{id: "6", name: "Полосочки"},
				{id: "7", name: "Полоски"},
				{id: "8", name: "Полосы"},
				{id: "9", name: "Разорванные полосы"},
				{id: "10", name: "Тонкие полосы"},
				{id: "11", name: "Пламенные полосы"},
				{id: "12", name: "Извилистые полосы"},
				{id: "13", name: "Мрамор"},
				{id: "14", name: "Мраморные отметины"},
				{id: "27", name: "Следок"},
				{id: "15", name: "Пальцы"},
				{id: "16", name: "Носок"},
				{id: "17", name: "Стопа"},
				{id: "18", name: "Гольф"},
				{id: "19", name: "Чулок"},
				{id: "20", name: "Низ"},
				{id: "21", name: "Внешняя сторона лапы"},
				{id: "22", name: "Лапа"},
				{id: "23", name: "Слабый налёт"},
				{id: "24", name: "Налёт"},
				{id: "25", name: "Сильный налёт"},
				{id: "26", name: "Затушёвка"}]
		},
		/* 15 */ {
			name: "Хвост",
			folder: "base_tail",
			noCombine: true,
			type: true,
			default: {id: "1", colour: "1"},
			times: {1: [5000, 100, 100, 100]},
			info: [
				{id: "1", name: "Куцый"},
				{id: "2", name: "Тонкий"},
				{id: "3", name: "Умеренный"},
				{id: "4", name: "Пушистый"},
				{id: "5", name: "Пышный"},
				{id: "6", name: "Беличий"}],
			obligatory: true,
			opaque: true,
			cut_from: false
		},
		/* 16 */ {
			name: "Грива",
			folder: "base_mane",
			noCombine: true,
			type: true,
			info: [
				{id: "1", name: "Умеренная"},
				{id: "2", name: "Пушистая"},
				{id: "3", name: "Пышная"}],
			opaque: true,
			cut_from: false
		},
		/* 17 */ {
			name: "Уши",
			folder: "base_ears",
			noCombine: true,
			type: true,
			default: {id: "1", colour: "1"},
			info: [
				{id: "1", name: "Торчком"},
				{id: "2", name: "Висячие"},
				{id: "3", name: "Длинные"},
				{id: "4", name: "Раскосые"},
				{id: "5", name: "Вывернутые"}],
			obligatory: true,
			opaque: true,
			cut_from: false
		},
		/* 18 */ {
			name: "Шерсть",
			folder: "base_hair",
			noCombine: true,
			type: true,
			info: [
				{id: "1", name: "На щёках №1"},
				{id: "2", name: "На щёках №2"},
				{id: "3", name: "На щёках №3"}],
			opaque: true,
			cut_from: false
		},
		/* 19 */ {
			name: "Правый глаз",
			folder: "elements/eye_right",
			parent: Kns.num.Base,
			palette: 3,
			noVariations: true,
			previewImg: "_",
			maxLayers: 2,
			special: true,
			opaque: false,
			cut_from: false
		},
		/* 20 */ {
			name: "Грива",
			folder: "elements/mane",
			parent: Kns.num.ManeBase,
			info: [
				{id: "1", name: "Брызги"},
				{id: "2", name: "Пятнышки"},
				{id: "3", name: "Пятна"},
				{id: "4", name: "Полосы"},
				{id: "5", name: "Пламенные полосы"},
				{id: "6", name: "Мрамор"},
				{id: "7", name: "Ремень"},
				{id: "8", name: "Узкий ремень"},
				{id: "11", name: "Низ"},
				{id: "9", name: "Налёт"},
				{id: "10", name: "Затушёвка"}],
			cut_from: Kns.num.ManeBase
		},
		/* 21 */ {
			name: "Шерсть",
			folder: "elements/hair",
			parent: Kns.num.TuftBase,
			info: [
				{id: "1", name: "Левая"},
				{id: "2", name: "Правая"},
				{id: "3", name: "Брызги слева"},
				{id: "4", name: "Брызги справа"},
				{id: "5", name: "Пятна слева"},
				{id: "6", name: "Пятна справа"},
				{id: "7", name: "Полосы слева"},
				{id: "8", name: "Полосы справа"}],
			cut_from: Kns.num.TuftBase
		},
		/* 22 */ {
			name: "Усы",
			folder: "elements/whisker",
			noCombine: true,
			default: {id: "2", colour: "1"},
			palette: 4,
			parent: Kns.num.Base,
			info: [
				{id: "1", name: "Прямые короткие"},
				{id: "2", name: "Прямые"},
				{id: "3", name: "Прямые длинные"},
				{id: "4", name: "Кудрявые"}],
			obligatory: true,
			opaque: true
		},
		/* 23 */ {
			name: "Нос",
			folder: "elements/nose",
			palette: 5,
			parent: Kns.num.Base,
			info: [
				{id: "1", name: "Полностью"},
				{id: "2", name: "Половина"},
				{id: "3", name: "Кайма", palette: 6}]
		}
	];
	Kns.palette = [
		/* ОСНОВНОЙ ЦВЕТ -- ЭЛЕМЕНТЫ И БАЗЫ*/
		/* 0 */ {cut: true,
			cut_from: Kns.num.Base,
			colours: [
			{id: "0", name: "", image: "+0"},
			{id: "1", name: "Кремовый", colour: "#f5e5ce"},
			{id: "2", name: "Белоснежный", colour: "#ffffff"},
			{id: "3", name: "Белый", colour: "#e6e6e6"},
			{id: "4", name: "Серебристый", colour: "#d1d1d1"},
			{id: "5", name: "Серый", colour: "#9e9e9e"},
			{id: "6", name: "Дымчатый", colour: "#5c5c5c"},
			{id: "7", name: "Чёрный", colour: "#242424"},
			{id: "8", name: "Угольно-чёрный", colour: "#141414"},
			{id: "9", name: "Иссиня-чёрный", colour: "#1d212c"},
			{id: "10", name: "Чернобурый", colour: "#2b1d1c"},
			{id: "11", name: "Бурый", colour: "#3d1c0b"},
			{id: "12", name: "Шоколадный", colour: "#6b3c28"},
			{id: "13", name: "Фавн", colour: "#9a715f"},
			{id: "14", name: "Медный", colour: "#bd6d32"},
			{id: "15", name: "Огненный", colour: "#cb4402"},
			{id: "16", name: "Красный", colour: "#e15c0f"},
			{id: "17", name: "Рыжий", colour: "#ed9b2d"},
			{id: "18", name: "Золотистый", colour: "#e5bd7f"},
			{id: "19", name: "Палевый", colour: "#d7ae98"},
			{id: "20", name: "Лиловый", colour: "#b19798"},
			{id: "21", name: "Голубой", colour: "#a6b4b7"},
			{id: "22", name: "Серо-голубой", colour: "#697a8a"},
			{id: "23", name: "Дымчато-голубой", colour: "#465165"},
			{id: "24", name: "Черничный", colour: "#323d51"}]},
		/* ГЛАЗА */
		/* 1 */ {cut: false,
			colours: [
			{id: "0", name: '', colour: ""},
			{id: "1", name: "Медный", colour: "#9C7941"},
			{id: "2", name: "Карий", colour: "#362121"},
			{id: "3", name: "Чёрно-красный", colour: "#612322"},
			{id: "4", name: "Оранжевый", colour: "#D6700B"},
			{id: "5", name: "Янтарный", colour: "#FCB10D"},
			{id: "6", name: "Жёлтый", colour: "#FCDF00"},
			{id: "7", name: "Оливковый", colour: "#B3B059"},
			{id: "8", name: "Лайм", colour: "#A8AB0C"},
			{id: "9", name: "Зелёный", colour: "#2FA12D"},
			{id: "10", name: "Салатовый", colour: "#7DC210"},
			{id: "11", name: "Бирюзовый", colour: "#0ECC90"},
			{id: "12", name: "Голубой", colour: "#87C3D4"},
			{id: "13", name: "Васильковый", colour: "#148CCC"},
			{id: "14", name: "Синий", colour: "#192580"},
			{id: "15", name: "Серый", colour: "#7D8996"}]},
		/* УНИКАЛЬНЫЕ ОКРАСЫ */
		/* 2 */ {cut: false,
			colours: [
			{id: "0", name: '', colour: ""},
			{id: "25", name: "\r\nУникальный окрас", image: "+1"},
			{id: "26", name: "Уникальный окрас", image: "+2"},
			{id: "27", name: "Уникальный окрас", image: "+3"},
			{id: "28", name: "Уникальный окрас", image: "+4"},
			{id: "29", name: "Уникальный окрас", image: "+5"},
			{id: "30", name: "Уникальный окрас", image: "+6"},
			{id: "31", name: "Уникальный окрас", image: "+7"},
			{id: "32", name: "Уникальный окрас", image: "+8"},
			{id: "33", name: "Уникальный окрас", image: "+9"},
			{id: "34", name: "Уникальный окрас", image: "+10"},
			{id: "35", name: "Уникальный окрас", image: "+11"},
			{id: "36", name: "Уникальный окрас", image: "+12"},
			{id: "37", name: "Уникальный окрас", image: "+13"},
			{id: "38", name: "Уникальный окрас", image: "+14"},
			{id: "39", name: "Уникальный окрас", image: "+15"},
			{id: "40", name: "Уникальный окрас", image: "+16"},
			{id: "41", name: "Уникальный окрас", image: "+17"},
			{id: "42", name: "Уникальный окрас", image: "+18"},
			{id: "43", name: "Уникальный окрас", image: "+19"},
			{id: "44", name: "Уникальный окрас", image: "+20"},
			{id: "46", name: "Уникальный окрас", image: "+22"}]},
		/* ФИОЛЕТОВЫЕ ГЛАЗА */
		/* 3 */ {cut: false,
			colours: [
			{id: "0", name: '', colour: ""},
			{id: "1", name: "Медный", colour: "#9C7941"},
			{id: "2", name: "Карий", colour: "#362121"},
			{id: "3", name: "Чёрно-красный", colour: "#612322"},
			{id: "4", name: "Оранжевый", colour: "#D6700B"},
			{id: "5", name: "Янтарный", colour: "#FCB10D"},
			{id: "6", name: "Жёлтый", colour: "#FCDF00"},
			{id: "7", name: "Оливковый", colour: "#B3B059"},
			{id: "8", name: "Лайм", colour: "#A8AB0C"},
			{id: "9", name: "Зелёный", colour: "#2FA12D"},
			{id: "10", name: "Салатовый", colour: "#7DC210"},
			{id: "11", name: "Бирюзовый", colour: "#0ECC90"},
			{id: "12", name: "Голубой", colour: "#87C3D4"},
			{id: "13", name: "Васильковый", colour: "#148CCC"},
			{id: "14", name: "Синий", colour: "#192580"},
			{id: "15", name: "Серый", colour: "#7D8996"},
			{id: "16", name: "Фиолетовый", colour: "#734563"}]},
		/* УСЫ */
		/* 4 */ {cut: false,
			colours: [
			{id: "0", name: '', colour: ""},
			{id: "1", name: "Светлые", colour: "#ffffff"},
			{id: "2", name: "Тёмные", colour: "#5c5c5c"},
			{id: "3", name: "Чёрные", colour: "#242424"}]},
		/* НОС И ШЕРСТЬ ВНУТРИ УШЕЙ */
		/* 5 */ {cut: false,
			colours: [
			{id: "0", name: '', colour: ""},
			{id: "1", name: "Кремовый", colour: "#f5e5ce"},
			{id: "2", name: "Белый", colour: "#ffffff"},
			{id: "3", name: "Серый", colour: "#9e9e9e"},
			{id: "4", name: "Чёрный", colour: "#242424"},
			{id: "5", name: "Бурый", colour: "#3d1c0b"},
			{id: "6", name: "Шоколадный", colour: "#6b3c28"},
			{id: "7", name: "Фавн", colour: "#9a715f"},
			{id: "8", name: "Медный", colour: "#bd6d32"},
			{id: "9", name: "Красный", colour: "#e15c0f"},
			{id: "10", name: "Розовый", colour: "#cc8370"},
			{id: "11", name: "Лиловый", colour: "#b19798"},
			{id: "12", name: "Дымчато-голубой", colour: "#465165"}]},
		/* ЭЛЕМЕНТ КАЙМА НОСА */
		/* 6 */ {cut: false,
			colours: [
			{id: "0", name: '', colour: ""},
			{id: "1", name: "Чёрный", colour: "#242424"}]},
		/* УНИКАЛЬНЫЕ ОКРАСЫ */
		/* 7 */ {cut: false,
			colours: [
			{id: "0", name: '', colour: ""},
			{id: "45", name: "Уникальный окрас", image: "+21"},
			{id: "47", name: "Уникальный окрас", image: "+23"},
			{id: "48", name: "Уникальный окрас", image: "+24"}]}
	];

	Kns.backupInfo = JSON.parse(JSON.stringify(Kns.parts));
};