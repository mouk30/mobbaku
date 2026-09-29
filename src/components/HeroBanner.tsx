import React from 'react';
import { GameGenre, SortOption } from '../types';
import { Sparkles, CheckCircle2, ShieldCheck, Zap, ArrowUpDown, Filter, Trophy, Layers } from 'lucide-react';

interface HeroBannerProps {
  currentGenre: GameGenre;
  onSelectGenre: (genre: GameGenre) => void;
  genreCounts: Record<GameGenre, number>;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalActiveCoupons: number;
  totalGames: number;
}

const GENRES: GameGenre[] = [
  '전체',
  '수집형 RPG',
  'MMORPG',
  '방치형/시뮬레이션',
  '서브컬처',
  '액션/전략'
];

export const HeroBanner: React.FC<HeroBannerProps> = ({
  currentGenre,
  onSelectGenre,
  genreCounts,
  sortOption,
  onSortChange,
  totalActiveCoupons,
  totalGames
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-8 pb-6 border-b border-slate-800/80">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>2026 대한민국 1위 모바일 게임 리딤코드 공식 아카이브</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              모든 모바일게임 쿠폰,
            </span>{' '}
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent underline decoration-amber-500/40 underline-offset-8">
              원클릭 복사
            </span>
            <span className="text-slate-100">로 바로 받으세요</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            만료된 낚시 쿠폰으로 시간 낭비하지 마세요. 매일 오전 편집팀이 인게임에서 직접 교환 테스트를 거쳐 정상 작동이 확인된 <strong className="text-amber-300 font-semibold">100% 활성 쿠폰</strong>과 아이폰 전용 웹 교환소 링크를 즉시 제공합니다.
          </p>

          {/* Key Trust Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-6">
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-2xl text-left flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-slate-100">{totalActiveCoupons}개+</div>
                <div className="text-[11px] text-slate-400">실시간 활성 쿠폰</div>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-2xl text-left flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-emerald-400">99.4%</div>
                <div className="text-[11px] text-slate-400">정상 작동 성공률</div>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-2xl text-left flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-slate-100">100%</div>
                <div className="text-[11px] text-slate-400">매일 실기기 검증</div>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-2xl text-left flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-slate-100">{totalGames}개</div>
                <div className="text-[11px] text-slate-400">인기 게임 등록</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
          {/* Genre Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {GENRES.map((genre) => {
              const count = genreCounts[genre] || 0;
              const isActive = currentGenre === genre;
              return (
                <button
                  key={genre}
                  onClick={() => onSelectGenre(genre)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
                >
                  <span>{genre}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActive ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              정렬:
            </span>
            <select
              value={sortOption}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-1.5 text-xs text-slate-200 font-semibold focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="latest">최신 등록순</option>
              <option value="popular">인기순 (평점/좋아요)</option>
              <option value="urgent">마감 임박순</option>
              <option value="coupon_count">쿠폰 많은순</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};
