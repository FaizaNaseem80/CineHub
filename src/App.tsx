// @ts-nocheck
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import Navbar from "./components/Navbar"
import AllRoutes from "./routes/AllRoutes"

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    const visited = sessionStorage.getItem("visited")

    if (!visited) {
      sessionStorage.setItem("visited", "true")
      setShowSplash(true)
      navigate("/splash")
    }
  }, [navigate])

  // Logic to determine if we are on the splash screen
  const isSplashPage = location.pathname === "/splash"

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* 1. Navbar only renders if not on splash */}
      {!isSplashPage && <Navbar />}
      
      {/* 2. Main Content Wrapper:
         The 'pt-20' (padding-top) is the magic fix. 
         It pushes the 'TrendingMovie' grid down so it doesn't hide behind the fixed Navbar.
      */}
      <main className={`${!isSplashPage ? "pt-20 md:pt-24" : ""}`}>
        <AllRoutes />
      </main>

      {/* 3. Footer could go here */}
    </div>
  )
}

export default App;