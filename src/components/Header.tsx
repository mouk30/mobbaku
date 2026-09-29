import React, { useState } from 'react';
import { Gift, Search, Bookmark, PlusCircle, Sparkles, Flame, Check } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  showOnlyBookmarks: boolean;
  onToggleBookmarks: () => void;
  bookmarksCount: number;
  onOpenSubmitModal: () => void;
  onSelectKeyword: (kw: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  showOnlyBookmarks,
  onToggleBookmarks,
  bookmarksCount,
  onOpenSubmitModal,
  onSelectKeyword
}) => {
  const hotKeywords = ['나혼렙', '원신', '스타레일', '명조', '쿠키런킹덤', '오딘', '던파모바일', '브롤스타즈', '블루아카', '트릭컬', '가디언테일즈'];
  const [copiedNotice, setCopiedNotice] = useState(false);

  const handleShareApp = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      {/* Top emergency announcement bar */}
      <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-indigo-500/20 border-b border-amber-500/20 px-4 py-1.5 text-xs text-amber-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider">
              REALTIME LIVE
            </span>
            <span className="font-medium truncate">
              🔥 2026 최신 모바일게임 쿠폰 & 리딤코드 실시간 100% 수동 검증 완료!
            </span>
          </div>
          <button
            onClick={handleShareApp}
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors text-[11px] underline underline-offset-2 ml-4 flex-shrink-0 cursor-pointer"
          >
            {copiedNotice ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">링크 복사됨!</span>
              </>
            ) : (
              '친구에게 쿠폰 사이트 공유'
            )}
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo */}
          <div 
            onClick={() => {
              onSearchChange('');
              if (showOnlyBookmarks) onToggleBookmarks();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Gift className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 bg-clip-text text-transparent">
                  mobbakun
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded">
                  모바일게임쿠폰
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden md:block">
                매일 실기기 검증 무료 리딤코드 포털
              </p>
            </div>
          </div>

          {/* Quick Search in Header for Desktop */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="게임명 또는 보상(원석, 다이아, 마정석) 검색..."
              className="w-full pl-9 pr-8 py-2 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Bookmarks Toggle */}
            <button
              onClick={onToggleBookmarks}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                showOnlyBookmarks
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${showOnlyBookmarks ? 'fill-slate-950 text-slate-950' : 'text-amber-400'}`} />
              <span className="hidden sm:inline">내 찜</span>
              {bookmarksCount > 0 && (
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  showOnlyBookmarks ? 'bg-slate-950 text-amber-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* Submit Coupon Button */}
            <button
              onClick={onOpenSubmitModal}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>쿠폰 제보</span>
            </button>
          </div>
        </div>

        {/* Hot Search Keywords Row */}
        <div className="py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs text-slate-400 border-t border-slate-800/40">
          <span className="flex items-center gap-1 font-semibold text-amber-400 text-[11px] whitespace-nowrap pl-0.5">
            <Flame className="w-3 h-3 text-orange-400" />
            인기 검색:
          </span>
          <div className="flex items-center gap-1.5">
            {hotKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => onSelectKeyword(kw)}
                className={`px-2 py-0.5 rounded-lg text-[11px] transition whitespace-nowrap cursor-pointer ${
                  searchQuery === kw
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800/60'
                }`}
              >
                {kw}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
