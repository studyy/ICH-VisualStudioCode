export default function CitySelector({ citiesData, handleCity }) {
  const handleChange = e => {
    handleCity(e.target.value)
    console.log(e.target.value)
  }

  return (
    <form>
      <h2>Choose City</h2>
      <select onChange={handleChange}>
        {citiesData.map(city => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </form>
  )
}
