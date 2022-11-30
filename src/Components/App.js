import { useEffect } from 'react';
import { getPosts } from '../api';
function App() {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
    }
    fetchPosts();
  }, []);
  
  return (
    <div className="App">
      <h1> Hello World !! This is New Project!! </h1>
    </div>
  );
}

export {
  App
} 
