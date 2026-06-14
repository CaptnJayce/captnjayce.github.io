import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CustomCursor from './CustomCursor'
import RoseBackground from './RoseBackground'
import Footer from './Footer'

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="layout">
      <CustomCursor />
      <RoseBackground />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
