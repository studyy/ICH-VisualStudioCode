import { useState } from 'react'
import CityCard from '../CityCard/CityCard'

import styles from './CitySelector.module.css'

export default function CitySelector() {
  const citiesData = [
    {
      name: 'Токио',

      description:
        'Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.',

      imageUrl:
        'https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg',

      facts: [
        'Токио - самый населенный мегаполис в мире.',

        'Здесь расположена самая высокая башня в Японии - Токийская башня.',

        'В Токио проходят множество культурных событий и фестивалей.',
      ],
    },

    {
      name: 'Киото',

      description:
        'Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.',

      imageUrl:
        'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663423488_24-mykaleidoscope-ru-p-kioto-stolitsa-yaponii-instagram-25.jpg',

      facts: [
        'В Киото насчитывается более 1600 буддийских храмов.',

        'Этот город был столицей Японии более тысячи лет.',
      ],
    },

    {
      name: 'Осака',

      description:
        'Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.',

      imageUrl:
        'https://sportishka.com/uploads/posts/2022-04/1650631594_29-sportishka-com-p-osaka-gorod-v-yaponii-krasivo-foto-30.jpg',

      facts: [
        'Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.',

        'Город является кулинарной столицей Японии.',
      ],
    },

    {
      name: 'Хоккайдо',

      description:
        'Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.',

      imageUrl:
        'http://i1.wallbox.ru/wallpapers/main2/202201/nebo-ozero-gory-aponia-hokkajdo-asahi.jpg',

      facts: [
        'Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.',

        'Летом остров привлекает туристов своими цветущими лавандовыми полями.',
      ],
    },

    {
      name: 'Нагоя',

      description:
        'Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.',

      imageUrl:
        'https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg',

      facts: [
        'Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.',

        'Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.',
      ],
    },
  ]

  const [selectedCity, setSelectedCity] = useState(citiesData[0])

  function handleSelectedCity(wantedCity) {
    const choosenCity = citiesData.find(
      currentCity => currentCity.name === wantedCity
    )
    setSelectedCity(choosenCity)
  }

  const handleChangedCity = e => {
    handleSelectedCity(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className={styles.content}>
      <form className={styles.form}>
        <h1>Choose the city you want to visit:</h1>
        <select className={styles.select} onChange={handleChangedCity}>
          {citiesData.map(cities => (
            <option key={cities.name} value={cities.name}>
              {cities.name}
            </option>
          ))}
        </select>
      </form>

      <CityCard selectedCity={selectedCity} />
    </div>
  )
}
