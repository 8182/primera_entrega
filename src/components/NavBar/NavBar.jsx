import React from 'react'

const navBar = ({children}) => {
  return (
    <>
      <div className="navbar bg-base-200 px-12">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">PcForce</a>
        </div>
        {/* menus */}
        <div className="">
          <ul className="menu menu-horizontal p-0">
              {/* dropdown */}
              <li tabIndex={0}>
                <a>
                  Componentes
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li><a>Procesadores</a></li>
                  <li><a>Placas madres</a></li>
                  <li><a>Discos duros</a></li>
                  <li><a>Discos solidos</a></li>
                  <li><a>Memorias Ram</a></li>
                  <li><a>Fuentes de poder</a></li>
                  <li><a>Disipadores (Cooler cpu)</a></li>
                </ul>
              </li>
              <li><a>Horarios</a></li>
              <li><a>Ubicacion</a></li>
              <li><a>Vision empresa</a></li>
              <li>{children}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default navBar;


