import { useEffect, useState } from 'react'
import { MapPin } from '@phosphor-icons/react'

import { StatesOptions, states } from '../utils'

export function Location() {
  const [city, setCity] = useState('Lagoa da Prata, MG')

  useEffect(() => {
    const fetchUserCity = async () => {
      try {
        const response = await fetch('https://geolocation-db.com/json/')

        if (!response.ok)
          return console.error('Falha ao obter dados de geolocalização.')

        const data = await response.json()

        if (data.city && data.state && states[data.state as StatesOptions])
          setCity(`${data.city}, ${states[data.state as StatesOptions]}`)
      } catch (error) {
        console.error('Erro ao buscar dados de geolocalização:', error)
      }
    }

    fetchUserCity()
  }, [])

  return (
    <div className="flex items-center justify-center bg-purple-light rounded-md gap-1 p-2">
      <MapPin size={22} weight="fill" className="text-purple-dark" />
      <span className="textS text-purple-dark">{city}</span>
    </div>
  )
}
