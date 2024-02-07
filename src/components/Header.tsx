import { Link } from 'react-router-dom'

import { CartButton, Location } from '../components'

export function Header() {
  return (
    <header className="max-w-6xl flex items-center justify-between py-8 px-4 mx-auto">
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery Logo" />
      </Link>

      <aside className="flex gap-3">
        <Location />
        <CartButton />
      </aside>
    </header>
  )
}
