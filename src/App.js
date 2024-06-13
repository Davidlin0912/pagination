import React, {useState,useEffect} from 'react';
import Posts from './components/Posts';
import './style.css';
import Pagination from './components/Pagination';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerpage=10;
  useEffect(() => {
    setLoading(true);
    const fetchPosts=async()=>{
      const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('res',res)
      setPosts(res.data)
      setLoading(false)

    };
    fetchPosts()
  }, []);//dependencies
  //get posts of the active page3
const indexOfLastPost=currentPage*postsPerpage;//30
const indexOfFirstPost=indexOfLastPost-postsPerpage;//20
const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);//20-29
//change active page
const paginate=(pageNumber)=>setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>My Blog</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination
      postsPerpage={postsPerpage} 
      totalPosts={posts.length}
      paginate={paginate}
      currentPage={currentPage} 
      />
    </div>
  );
}

export default App;
