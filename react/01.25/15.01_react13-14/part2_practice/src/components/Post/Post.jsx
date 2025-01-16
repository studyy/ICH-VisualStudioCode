import styles from './Post.module.css'

export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <h3>Post-Number: {post.id}</h3>
      <p>User-Id: {post.userId} </p>
      <p>Title: {post.title} </p>
      <p>Description: {post.body} </p>
    </div>
  )
}
