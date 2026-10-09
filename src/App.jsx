import React from 'react'
import InfoCard from './components/InfoCard'
import UserCard from './components/UserCard'
import { users } from './data/user'
import { infos } from './data/injos'

const App = () => {
  return (
    <div className='min-h-screen bg-[#444444] py-10 px-6'>
      <section className='max-w-5xl mx-auto'>
        <h1 className='text-center text-2xl font-semibold text-black mb-8'>
          Anime Cards
        </h1>

        <div className="grid grid-cols-4 gap-5">
          {users.map((u, i) => (
            <UserCard
              key={i}
              image={u.image}
              name={u.name}
              role={u.role.split('\n').map((line, j) => (
                <span key={j} className="block">
                  {line}
                </span>
              ))}
            />
          ))}
        </div>
      </section>

            <section className='max-w-5xl mx-auto mt-16'>
        <h1 className='text-center text-2xl font-semibold text-black mb-8'>
          The Best Anime 25/26
        </h1>

        <div className="grid grid-cols-5 gap-5">
          {infos.map((info, i) => (
            <InfoCard
              key={i}
              image={info.image}
              title={info.title}
              description={info.description}
              buttonLabel={info.buttonLabel}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App