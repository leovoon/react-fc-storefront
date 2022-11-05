import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import logo from './assets/logo.svg'
import CartMiniToggler from './components/CartMiniToggler'
import { ErrorComponent } from './components/ErrorComponent'
import './App.css'
import CurrencySwitcher from './features/currency/CurrencySwitcher'
import { useGetCategoriesQuery } from './services/products'

const App: React.FC = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery()

  if (isLoading) return <div>Loading...</div>

  if (error) <ErrorComponent error={error} />

  return (
    <div>
      <nav className="fixed z-20 flex h-14 w-full items-center justify-between bg-white sm:h-20  sm:px-[101px]  ">
        <ul className=" m-0 flex h-12 flex-grow basis-0 list-none items-center justify-start self-end pt-0 pl-0">
          {categories?.map((category, id) => (
            <NavLink
              key={id}
              to={`/${category.name}`}
              className={({ isActive }) => {
                const defaultStyle =
                  'h-6 w-14 border-b-2 border-transparent pl-0 text-center text-xs font-normal uppercase leading-[120%] sm:h-12 sm:w-24 sm:text-base'

                return isActive
                  ? `${defaultStyle} border-b-2 border-b-green-500 text-green-500`
                  : defaultStyle
              }}
            >
              {category.name}
            </NavLink>
          ))}
        </ul>
        <img
          src={logo}
          className="ml-4 h-6 w-10 sm:h-[41px] sm:w-[41px]"
          alt="logo"
        />
        <div className="flex h-10 w-48 flex-grow basis-0 items-center justify-end gap-4">
          <CurrencySwitcher />
          <CartMiniToggler />
        </div>
      </nav>
      <main className="py-16 px-8 sm:py-[140px] sm:px-[101px]">
        <Outlet />
      </main>
      <footer
        style={{
          alignItems: 'center',
          columnGap: '0.5rem',
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem',
          width: '100%',
        }}
      >
        <a href="https://github.com/leovoon/react-fc-storefront">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <span>© leovoon</span>
      </footer>
    </div>
  )
}

export default App
