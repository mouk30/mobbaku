import React from 'react';
import { GameInfo } from '../types';
import { Bookmark, Star, ChevronRight, Gift } from 'lucide-react';

interface GameCardProps {
  game: GameInfo;
  isBookmarked: boolean;
  onToggleBookmark: (gameId: string) => void;
  onSelectGame: (game: GameInfo) => void;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  isBookmarked,
  onToggleBookmark,
  onSelectGame
}) => {
  return (
    <article 
      onClick={() => onSelectGame(game)}
      className="group relative bg-slate-900/90 rounded-2xl border border-slate-800/80 hover:border-lime-400/50 hover:shadow-xl hover:shadow-lime-500/10 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Top Banner Image with Gradient */}
      <div className="relative h-28 w-full overflow-hidden bg-slate-800">
        <img
          src={game.bannerUrl}
          alt={`${game.title} 쿠폰`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
            {game.genre}
          </span>
          {game.activeCouponsCount > 0 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/90 text-slate-950 flex items-center gap-1">
              <Gift className="w-3 h-3" />
              활성 {game.activeCouponsCount}개
            </span>
          )}
        </div>

        {/* Bookmark Action */}
        <button
          type="button"
          aria-label={isBookmarked ? '즐겨찾기 해제' : '즐겨찾기 추가'}
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(game.id);
          }}
          className={`absolute top-2.5 right-2.5 p-1.5 rounded-lg backdrop-blur-md transition cursor-pointer ${
            isBookmarked
              ? 'bg-amber-500 text-slate-950'
              : 'bg-slate-950/70 text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-slate-950' : ''}`} />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-4 pt-1 flex-1 flex flex-col justify-between">
        {/* Game Info Header */}
        <div className="flex items-start gap-3 -mt-6 relative z-10 mb-4">
          <img
            src={game.iconUrl}
            alt={`${game.title} 아이콘`}
            loading="lazy"
            className="w-14 h-14 rounded-2xl border-2 border-slate-700 bg-slate-800 object-cover shadow-lg shrink-0 group-hover:border-lime-400 transition"
          />
          <div className="flex-1 min-w-0 pt-6">
            <h2 className="text-base font-bold text-slate-100 group-hover:text-lime-300 transition truncate">
              {game.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="truncate">{game.developer}</span>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-0.5 text-amber-400 font-semibold shrink-0">
                <Star className="w-3 h-3 fill-amber-400" />
                <span>{game.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* '최신쿠폰받기' Button linked to designated URL */}
        <div className="mt-2 pt-1">
          <a
            href="https://lite.tiktok.com/t/ZS9Ao13pU5jpj-7zhfi/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full py-2.5 sm:py-3 px-5 rounded-full bg-[#a3e635] hover:bg-[#bef264] active:scale-[0.98] text-slate-950 font-black text-sm sm:text-base tracking-tight flex items-center justify-center gap-1.5 shadow-lg shadow-lime-950/40 group-hover:shadow-lime-500/20 group-hover:scale-[1.02] transition-all cursor-pointer border border-lime-300/40 no-underline"
          >
            <span>최신쿠폰받기</span>
            <ChevronRight className="w-4 h-4 stroke-[3] text-slate-950" />
          </a>
        </div>
      </div>
    </article>
  );
};
