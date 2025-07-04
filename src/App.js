import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import Login from './pages/Login';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';


function App() {
  return <InnerAppLayout />;
}

function InnerAppLayout() {

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (

    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
      <div className='fixed right-4 bottom-4' style={{ zindex: '1000' }}>

          <TooltipComponent content="Settings" position='Top'>
            <button type='button'
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {!isLoginPage && (
          activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )
        )}

        <div className={
          `dark:bg-main-dark-bg  bg-main-bg min-h-screen  w-full ${activeMenu
            ? 'md:ml-72 '
            : 'flex-2'}`

        }>
          {!isLoginPage && (
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          )}

          <div>
            {themeSettings && < ThemeSettings />}
            <Routes>

              {/* Login */}
              <Route path='/' element={<Login />} />


              {/* ecommerce */}
              <Route path="/ecommerce" element={<Ecommerce />} />


              {/* pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />

            </Routes>
          </div>
        </div>

      </div>


    </div>


  );
}

export default App;
