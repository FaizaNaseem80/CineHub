//eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import useTrendingList from "@/hooks/useTrendingList";
import MovieCard from "../MovieCard";
import { MovieResult } from "@/hooks/useMovies";
import { ChevronRight } from "lucide-react";

const TrendingMovie = () => {
  const { trendingData } = useTrendingList("movie");

  return (
    <div className="relative space-y-4 py-8 md:space-y-6 md:py-12 pl-6 md:pl-14 overflow-hidden">
      {/* Section Header */}
      <div className="flex items-center group cursor-pointer w-fit">
        <h2 className="text-xl md:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-red-600">
          Trending Movies
        </h2>
        <div className="flex items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
          <span className="text-xs font-bold text-red-600 ml-2">Explore All</span>
          <ChevronRight className="w-4 h-4 text-red-600" />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        className="flex items-center gap-3 md:gap-5 overflow-x-scroll no-scrollbar scroll-smooth pr-14"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {trendingData?.slice(0, 15).map((movie: MovieResult) => (
          <div 
            key={movie.id}
            className="flex-none w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] transition-transform duration-300 ease-out hover:scale-105 hover:z-10"
          >
            <MovieCard movieResults={movie} />
          </div>
        ))}
      </div>
      
      {/* Optional: Subtle Vignette Fade on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default TrendingMovie;