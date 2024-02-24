import './dist/output.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import NotFound from './pages/NotFound'
import Filter from './components/Filters/Filter'
import FilterWhere from './components/Filters/SearchItem/FilterWhere'
import FilterTags from './components/Filters/SearchItem/FilterTags'
import FilterIsOrNot from './components/Filters/SearchItem/FilterIsOrNot'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  return (
    <>
      <div className='h-screen w-full m-32 p-6 flex flex-col'>
        <div><Filter/></div>
        <div className='my-14'>
          <FilterWhere/>
          <FilterTags/>
          <FilterIsOrNot/>
        </div>
      </div>
      {/* <Routes>
        <Route path="api/auth/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="api/auth/register" element={<Register />} />
        <Route path="api/auth/forgetPassword" element={<ForgetPassword />} />
        <Route path="api/auth/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  )
}

export default App
