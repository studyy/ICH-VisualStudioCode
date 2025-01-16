import styles from './CityCard.module.css'

export default function CityCard({ selectedCity }) {
  return (
    <div className={styles.card}>
      <h3>{selectedCity.name}</h3>
      <div className={styles.image}>
        <img src={selectedCity.imageUrl} alt={selectedCity.name} />
      </div>
      <p>{selectedCity.description}</p>
      <ul className={styles.facts}>
        {selectedCity.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}
