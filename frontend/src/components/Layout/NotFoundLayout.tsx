import { Outlet } from 'react-router-dom'

export default function NotFoundLayout() {
  return (
    <div>
      <h1>NotFound Layout</h1>
      <Outlet />
    </div>
  )
}