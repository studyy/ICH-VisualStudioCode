import { useParams } from 'react-router-dom'

export default function Article({ articles }) {
  const params = useParams()
  const articleId = params.id
  const oneArticle = articles.find(art => art.id === articleId)
  console.log('article', articles)

  return (
    <div>
      <h2>{oneArticle?.title}</h2>
      <p>{oneArticle?.description}</p>
    </div>
  )
}
