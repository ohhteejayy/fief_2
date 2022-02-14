import { Dispatch, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<boolean>;
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({ open, setOpen }) => {
  const { pathname } = useLocation();

  const sidebar = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  // Outside click
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!target || !sidebar.current || !closeButton.current) return;
      if (!open || sidebar.current.contains(target as Node) || closeButton.current.contains(target as Node)) return;
      setOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // Esc key
  useEffect(() => {
    const keyHandler = ({ code }: KeyboardEvent) => {
      if (!open || code !== 'Escape') return;
      setOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div>
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${open ? 'translate-x-0' : '-translate-x-64'}`}
      >

        <div className="flex justify-between lg:justify-center mb-10 pr-3 sm:px-2">

          <button
            ref={closeButton}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setOpen(false)}
            aria-controls="sidebar"
            aria-expanded={open}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

          <NavLink end to="/" className="block">
            <img src="/fief-logo-red.svg" alt="Fief" width={60} />
          </NavLink>
        </div>

        <div className="space-y-8">
          <div>
            <ul className="">
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/' && 'bg-slate-900'}`}>
                <NavLink end to="/" className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname === '/' && 'hover:text-slate-200'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-400 ${pathname === '/' && '!text-indigo-500'}`} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                      <path className={`fill-current text-slate-600 ${pathname === '/' && 'text-indigo-600'}`} d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                      <path className={`fill-current text-slate-400 ${pathname === '/' && 'text-indigo-200'}`} d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
