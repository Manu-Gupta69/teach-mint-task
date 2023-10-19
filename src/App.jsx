import './App.scss'
import { UsersGrid } from './components/molecules'
import useGetPosts from './hooks/Post/useGetPosts';
import useGetUsers from './hooks/User/useGetUsers'

function App() {
   const {users, isLoading:fetchingUsers , error:userError} = useGetUsers();
    const {posts ,isLoading:fetchingPosts , error:postError} = useGetPosts();

  return (
    <>
     { fetchingUsers ? <div> LOADING.....</div>: <UsersGrid users={users} /> }
    </>
  )
}

export default App
