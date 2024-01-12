export const PostScreen = ({ post }: any) => {
  return (
    <div style={{
      margin: 'auto',
      maxWidth: '600px',
      fontFamily: 'sans-serif'
    }}>
      <h1>{post.title}</h1>
      <p>{post.author} · {post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}