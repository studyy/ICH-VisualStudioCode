import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from '../Post/Post'

import styles from './PostList.module.css'

export default function PostList() {
  const [pageNumber, setPageNumber] = useState(1)
  const [postList, setPostList] = useState([])
  //   const [postsOnPage, setPostsOnPage] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const POSTS_PER_PAGE = 10

  async function fetchData() {
    try {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPostList(res.data)
      // setPostsOnPage(res.data.splice(0, POST_PER_PAGE));
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handlePreviousPage() {
    if (pageNumber !== 1) {
      setPageNumber(pageNumber => pageNumber - 1)
    }
  }

  function handleNextPage() {
    const totalPages = Math.ceil(postList.length / POSTS_PER_PAGE)
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber => pageNumber + 1)
    }
  }

  function getCurrentPagePosts() {
    const startIndex = (pageNumber - 1) * POSTS_PER_PAGE
    const endIndex = POSTS_PER_PAGE + startIndex
    return postList.slice(startIndex, endIndex)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={styles.postListContainer}>
      <h3>Page: {pageNumber}</h3>
      <ul className={styles.postList}>
        {getCurrentPagePosts().map(post => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <div className={styles.postListButtons}>
        <button
          className={styles.postListButton}
          onClick={handlePreviousPage}
          disabled={pageNumber === 1}
        >
          Previous
        </button>

        <button
          className={styles.postListButton}
          onClick={handleNextPage}
          disabled={pageNumber === Math.ceil(postList.length / POSTS_PER_PAGE)}
        >
          Next
        </button>
      </div>
    </div>
  )
}
