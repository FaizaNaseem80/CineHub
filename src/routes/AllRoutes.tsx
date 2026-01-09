import MovieList from "@/components/MovieList"
import Player from "@/components/Player"
import SearchList from "@/components/SearchList"
import Trending from "@/components/Trending/Trending"
import TVPlayer from "@/components/TVPlayer"
import TVShowList from "@/components/TVShowList"
import SplashScreen from "@/components/SplashScreen"
import AuthPage from "@/components/Auth";
import { Route, Routes } from "react-router"
import AdminPage from "@/components/Admin"

const AllRoutes = () => {
  return (
    <Routes>
      {/* Splash Screen */}
      <Route path="/splash" element={<SplashScreen />} />

      {/* Main Pages */}
      <Route path="/" element={<Trending />} />
      <Route path="/Movies" element={<MovieList />} />
      <Route path="/TVShows" element={<TVShowList />} />
    <Route path="/Admin" element={<AdminPage />} />
<Route path="/auth" element={<AuthPage />} />

      {/* Search & Players */}
      <Route path="/search/:searchName" element={<SearchList />} />
      <Route path="/player/:playerId" element={<Player />} />
      <Route path="/tvplayer/:tvplayerId" element={<TVPlayer />} />
    </Routes>
  )
}

export default AllRoutes
