import './App.scss'
import { UsersGrid } from './components/molecules'
import useGetUsers from './hooks/User/useGetUsers'

function App() {
   const {users, isLoading , error} = useGetUsers();
  console.log(isLoading , users)
  return (
    <>
     {
      isLoading ? <div> LOADING.....</div>: <UsersGrid users={users} />
    } 
    </>
  )
}

export default App
