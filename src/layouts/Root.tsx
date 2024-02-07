import { Outlet } from 'react-router-dom'

import { Header } from '../components'
import { CartContextProvider } from '../context'

export function Root() {
  return (
    <CartContextProvider>
      <Header />
      <Outlet />
    </CartContextProvider>
  )
}
