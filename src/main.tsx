import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import NavBar from './components/NavBar/NavBar.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const HeaderLayout = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </QueryClientProvider>
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout/>,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage/>
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  }
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)