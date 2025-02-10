import { Link } from 'react-router-dom'

export default function List({ loading, articles }) {
  //   if (loading) {
  //     ;<div>Loading...</div>
  //   }
  console.log('List:', articles)

  return (
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          <Link to={`/List/${article.id}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  )
}
