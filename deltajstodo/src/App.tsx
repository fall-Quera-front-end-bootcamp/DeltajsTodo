import './dist/output.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import NotFound from './pages/NotFound'
import MiniTaskCard from './components/TaskAndCheckBox/MiniTaskCard'
import LargTaskCard from './components/TaskAndCheckBox/LargTaskCard'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  return (
    <div className='space-y-11 m-28'>
    <MiniTaskCard/>
    <LargTaskCard/>
    </div>
    // <>
    //   <Routes>
    //     <Route path="api/auth/login" element={<Login />} />
    //     <Route path="/" element={<Login />} />
    //     <Route path="api/auth/register" element={<Register />} />
    //     <Route path="api/auth/forgetPassword" element={<ForgetPassword />} />
    //     <Route path="api/auth/resetPassword" element={<ResetPassword />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </>
  )
}

export default App
