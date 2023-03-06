import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='auth-container'>
      <main className=''>
        <Outlet />
      </main>
    </div>
  )
}