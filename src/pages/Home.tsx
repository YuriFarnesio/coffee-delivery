import { BigCard } from '../components'

import { benefits, coffees } from '../utils'

export function Home() {
  return (
    <main>
      <section className="w-screen h-[34rem] relative flex items-center">
        <div className="w-full max-w-6xl flex items-center justify-between gap-14 z-10 px-4 mx-auto">
          <div className="min-w-[36.75rem] flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <h1 className="titleXL text-base-title">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <span className="textL text-base-subtitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </div>

            <div className="grid grid-cols-[14.5rem_1fr] gap-y-5 gap-x-10">
              {benefits.map(({ title, Icon, color }) => (
                <div key={title} className="flex items-center gap-3">
                  <Icon
                    size={32}
                    weight="fill"
                    className={`min-w-8 min-h-8 text-background ${color} rounded-full p-2`}
                  />
                  <span className="textM text-base-text">{title}</span>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/images/hero.svg"
            alt="Café da Coffee Delivery"
            className="w-full h-full object-cover"
          />
        </div>

        <img
          src="/images/hero-bg.svg"
          alt="Imagem de fundo com cores bem claras"
          className="w-screen h-full absolute object-cover top-0 left-0"
        />
      </section>

      <section className="max-w-6xl flex flex-col gap-14 pt-8 px-4 pb-32 mx-auto">
        <h2 className="titleL text-base-subtitle">Nossos cafés</h2>

        <div className="grid grid-cols-4 text-center gap-y-10 gap-x-8">
          {coffees.map((coffee) => (
            <BigCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>
    </main>
  )
}
