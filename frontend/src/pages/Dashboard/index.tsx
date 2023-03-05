import { Outlet } from 'react-router-dom'

export default function Dashbaord (): JSX.Element {
  return (
    <>
      <h1>This is Dashboard Page</h1>
      <Outlet />
    </>
  )
}