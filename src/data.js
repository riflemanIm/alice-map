const data = [
  {
    coords: {
      // координаты
      lat: 55.747347,
      lng: 37.582135,
    },
    name: "Пункт отправления",
    title: "метро Смоленская",
    description: `Приятного времяпрепровождения!`,
    imgLink: "images/2175304.jpg",
    audioLink: "",
  },
  {
    coords: {
      // координаты
      lat: 55.745984,
      lng: 37.591907,
    },
    name: "Чертолье",
    title: "Чертолье — бывшее капище Рода ", // незвание
    description: ` Особое место в славянской мифологии занимал Род – отец богов.
     Капище этого бога считалось у древних славян чертой
     разделяющей светлые высшие и нижние темные миры. В Москве –
     это Чертолье, расположенное к западу от Кремля. Сегодня место
     капища Рода очерчено Чертольскими улицами, Волхонкой, Сивцевым
     Вражком и Власьевскими переулками. Вопреки популярной теории
     название улиц Чертолья произошли вовсе не от черта, а от черты
     отделяющей Навь и Явь. Навь — мир пращуров, предков, тех, кто
     хранит традиции Рода и Явь — мир людей. Скорее всего, капище
     находилось на дне оврага, по которому тёк ручей Черторый.
     Сегодня — это место, где Сивцев Вражек пересекается с Большим
     и Малым Власьевскими переулками.
 `, // описание
    imgLink: "images/0.jpg", // ссылка на фотку
    audioLink: "sounds/zvuk.mp3", // ссылка на аудио файл
  },
  {
    coords: {
      lat: 55.744471,
      lng: 37.605168,
    },
    name: "Кропоткинская",
    title: "Кропоткинская площадь — бывшее капище Купалы",
    description: `Образ Купалы всегда окружали обряды, связанные с водой, огнём и травами. Основная часть купальских обрядов производится ночью. В купальскую, самую короткую ночь в году, оживают обитатели Нави. Пропадает грань между духами и людьми. В наш мир приходят злые духи. В праздник Купалы, по народным поверьям, вода может «дружить» с огнём, а их союз считается природной силой. Символом такого соединения являются костры по берегам рек, которые зажигались в ночь на Купалу. Но, многочисленные этнографические исследования говорят, что, Купало это новое имя другого древнего Бога – Марены. Образ Марены, связывается со смертью и сезонными аграрными обрядами умирания и воскресения природы. На роль капища Марены претендует место впадения ручья Черторыя в Москва-реку. Примечательна судьба этого места, которое в народе называют «проклятым» — оно известно тем, что здесь, испокон веков, строились храмы, но у них была недолгая и печальная судьба. Два заглохших в древности монастыря, взорванный храм Христа спасителя, Дворец советов, «уплывший» на пойменных водах, плавательный бассейн «Москва». Все крупные постройки «нехорошее место» словно сбрасывало с себя, стремясь остаться свободным. Капище Купалы-Морены — возвышение духа магии, Кропоткинская площадь Москвы.`,
    imgLink: "images/1.jpg",
    audioLink: "",
  },
  {
    coords: {
      lat: 55.74812,
      lng: 37.613231,
    },
    name: "Боровицкий холм",
    title: "Боровицкий холм — бывшее капище Ярилы ",
    description: `Среди пантеона славянских богов особое место занимал культ Ярилы, отвечавшего за приход весны, плодородие и мужскую силу. В сознании наших предков Ярила олицетворял Солнце. Капище этого бога располагалось на Боровицком холме Московского Кремля. Впоследствии на этом месте была возведен храм Иоанна Предтечи, впоследствии известный, как церковь святого Уара. Правда, москвичи по старинке именовали святого Уара – Яром или Ярилой.Церковь снесли в 1847 году по личному повелению Николая I. По популярной легенде храм портил императору вид из строящегося Большого Кремлевского Дворца.`,
    imgLink: "images/2.jpg",
    audioLink: "",
  },
  {
    coords: {
      lat: 55.752024,
      lng: 37.623244,
    },
    name: "Васильев спуск",
    title: "Васильев спуск — бывшее капище Перуна",
    description: `Одним из главных языческих божеств на Руси, считался покровитель воинов и княжеской власти – Перун. По своей форме капище бога воинов напоминало восьмиугольник, отражая символ Перуна — восьми лучевую звезду. Ориентированное по сторонам света, оно разбивало все внутреннее пространство города на несколько светилищ, в которых совершались поклонения светлым богам. Капище Перуна располагалось в центре города у почитаемого камня, расположенного на Красной площади у Васильева спуска. Впоследствии на этом месте был возведен девяти купольный Храма Покрова Пресвятой Богородицы, что на Рву, больше известный как Собор Василия Блаженного.`,
    imgLink: "images/3.jpg",
    audioLink: "",
  },
  {
    coords: {
      lat: 55.750248,
      lng: 37.628043,
    },
    name: "Парк Зарядье",
    title: "Парк Зарядье — бывшее капище Трояна",
    description: `Седьмым славянским божеством, которому поклонялись в Москве, был Троян, покровитель мира небесного, земного и подземного. Среди имен этого древнего бога можно встретить и иные названия: Триглав или Трибог.
     Дуб священное дерево Трояна, а дубовая роща всегда место его капищ. Не удивительно, что этнографы считают, что капище Трояна располагалось на месте дубовой рощи в Зарядье, там, где сегодня вновь, как и столетия назад разбит великолепный парк. `,
    imgLink: "images/4.jpg",
    audioLink: "",
  },
  {
    coords: {
      lat: 55.742258,
      lng: 37.628811,
    },
    name: "Замоскворечье",
    title: "Замоскворечье — бывшее капище Макоши ",
    description: `Для счастливой жизни, каждому человеку необходимо обладать счастливой судьбой или как ее называли на Руси – «долей». В мифологии большинства народов Европы за судьбу человека несли ответственность «божественные пряхи». В Греции – мойры, в Италии – парки, в Скандинавии – Парки, на Руси богиня — Мокошь. Согласно этнографическим исследованиям богине судьбы поклонялись в Замоскворечье, там, где сегодня, проходит Пятницкая улица. По свидетельствам известных этнографов А.Н. Афанасьева и С.В. Максимова места поклонения Макоши назывались «прощами» и находились в районе метро Новокузнецкая. С приход христианства эта часть Москвы также осталась под покровительством женского начала, культ Макоши, заменила Параскева Пятница.`,
    imgLink: "images/5.jpg",
    audioLink: "",
  },
  {
    coords: {
      lat: 55.743931,
      lng: 37.650301,
    },
    name: "Котельническая набережная",
    title: "Котельническая набережная — бывшее капище Велеса",
    description: `За достаток, благополучие, получение знаний и скотоводство на Руси отвечал бог Велес. Андрей Синельников считает, что его капище располагалось на Красном холме, современной Верхнерадищевской улице. В древности это место носило название Болванова гора из-за множества расположенных на ее вершине идолов славянских богов. Ряд историков именуют эти места не иначе, как Чигасы, что в переводе с древнеславянского означает – ритуальный огонь. Называется и точное месторасположение капища. Это двор знаменитого дома на Котельнической набережной, на месте которого когда-то стоял Спасо-Чигасов монастырь. Во время раскопок 1997 года на месте монастыря археологи обнаружили глиняные статуэтки: всадника верхом на волке и мужчины с волчьей головой и бубном в руках. Статуэтки не имеют аналогов и датированы XIV веком. В то же время этнографам хорошо известно, что волк, являлся тотемом профессиональных воинов. В то же время богом покровителем волков в языческом пантеоне был Святобор или Велес.`,
    imgLink: "images/6.jpg",
    audioLink: "",
  },
  {
    coords: {
      lat: 55.741135,
      lng: 37.656243,
    },
    name: "Пункт окончания",
    title: "метро Маркситсткая",
    description: `Досвидания!`,
    imgLink: "images/2175304.jpg",
    audioLink: "",
  },
  // {
  //   coords: {
  //     lat: 55.,
  //     lng: 37.,
  //   },
  //   name: "",
  //   title: "",
  //   description: ``,
  //   imgLink: "images/1.jpg",
  //   audioLink: "",
  // },
];

export default data;
