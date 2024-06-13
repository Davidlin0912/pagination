import React from 'react'
//state:mutable
//props:read only and immutable
//父傳子 props
//子傳父 callback
//跨組件傳遞數據 redux context useReducer+useContext
//hooks不能在if statement、while中使用
const Posts=({posts,loading})=> {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
  <ul className='list-group'>
    {posts.map((post)=>(
        <li key={post.id} className='list-group-item'>{post.title}</li>
    ))}
    </ul>
  )
}

export default Posts
