/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { GameInfo, GameGenre, SortOption } from './types';
import { INITIAL_GAMES } from './data/games';
import { Header } from './components/Header';
import { QuickRadarTicker } from './components/QuickRadarTicker';
import { HeroBanner } from './components/HeroBanner';
import { GameCard } from './components/GameCard';
import { GameDetailModal } from './components/GameDetailModal';
import { CouponSubmitModal } from './components/CouponSubmitModal';
import { SeoArticleSection } from './components/SeoArticleSection';
import { Footer } from './components/Footer';
import { Gift, Search, RefreshCw, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [games, setGames] = useState<GameInfo[]>(INITIAL_GAMES);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentGenre, setCurrentGenre] = useState<GameGenre>('전체');
  const [sortOption, setSortOption] = useState<SortOption>('latest');
  const [selectedGame, setSelectedGame] = useState<GameInfo | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Bookmarks stored in localStorage
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('coupon_bookmarks');
      return saved ? JSON.parse(saved) : ['game-1', 'game-2'];
    } catch {
      return ['game-1', 'game-2'];
    }
  });

  // Fetch live games data from backend API
  const fetchLiveGames = async () => {
    try {
      const res = await fetch('/api/games');
      if (res.ok) {
        const data = await res.json();
        if (data.games && Array.isArray(data.games)) {
          setGames(data.games);
        }
      }
    } catch (e) {
      console.log('Using local games data fallback');
    }
  };

  useEffect(() => {
    fetchLiveGames();
  }, []);

  // Save bookmarks
  const handleToggleBookmark = (gameId: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(gameId) ? prev.filter((id) => id !== gameId) : [...prev, gameId];
      try {
        localStorage.setItem('coupon_bookmarks', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Check URL query parameters on mount for direct SEO deep links
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gameParam = params.get('game');
    const queryParam = params.get('q');
    const genreParam = params.get('genre');

    if (gameParam) {
      const matched = games.find((g) => g.slug === gameParam);
      if (matched) {
        setSelectedGame(matched);
      }
    }

    if (queryParam) {
      setSearchQuery(queryParam);
    }

    if (genreParam) {
      const genreMap: Record<string, GameGenre> = {
        rpg: '수집형 RPG',
        mmorpg: 'MMORPG',
        idle: '방치형/시뮬레이션',
        subculture: '서브컬처',
        action: '액션/전략'
      };
      if (genreMap[genreParam.toLowerCase()]) {
        setCurrentGenre(genreMap[genreParam.toLowerCase()]);
      }
    }
  }, [games]);

  // Update URL slug when modal opens/closes
  const handleSelectGame = (game: GameInfo) => {
    setSelectedGame(game);
    const url = new URL(window.location.href);
    url.searchParams.set('game', game.slug);
    window.history.pushState({}, '', url.toString());
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('game');
    window.history.pushState({}, '', url.toString());
  };

  // Live vote handler
  const handleVoteCoupon = async (couponId: string, voteType: 'like' | 'dislike') => {
    // Optimistic UI update
    setGames((prevGames) =>
      prevGames.map((game) => {
        const hasCoupon = game.coupons.some((c) => c.id === couponId);
        if (!hasCoupon) return game;

        const updatedCoupons = game.coupons.map((c) => {
          if (c.id !== couponId) return c;
          const nextLikes = voteType === 'like' ? c.likes + 1 : c.likes;
          const nextDislikes = voteType === 'dislike' ? c.dislikes + 1 : c.dislikes;
          const total = nextLikes + nextDislikes;
          const nextRate = total > 0 ? Math.round((nextLikes / total) * 100) : 100;
          return {
            ...c,
            likes: nextLikes,
            dislikes: nextDislikes,
            successRate: nextRate
          };
        });

        return { ...game, coupons: updatedCoupons };
      })
    );

    if (selectedGame) {
      setSelectedGame((prev) => {
        if (!prev) return null;
        const updatedCoupons = prev.coupons.map((c) => {
          if (c.id !== couponId) return c;
          const nextLikes = voteType === 'like' ? c.likes + 1 : c.likes;
          const nextDislikes = voteType === 'dislike' ? c.dislikes + 1 : c.dislikes;
          const total = nextLikes + nextDislikes;
          const nextRate = total > 0 ? Math.round((nextLikes / total) * 100) : 100;
          return {
            ...c,
            likes: nextLikes,
            dislikes: nextDislikes,
            successRate: nextRate
          };
        });
        return { ...prev, coupons: updatedCoupons };
      });
    }

    try {
      await fetch('/api/coupons/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ couponId, voteType })
      });
      showToast(voteType === 'like' ? '👍 쿠폰 정상 작동 투표가 반영되었습니다!' : '👎 만료 제보가 접수되었습니다. 검증팀이 확인합니다.');
    } catch (e) {
      console.error(e);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Genre counts calculation
  const genreCounts = useMemo(() => {
    const counts: Record<GameGenre, number> = {
      전체: games.length,
      '수집형 RPG': 0,
      'MMORPG': 0,
      '방치형/시뮬레이션': 0,
      '서브컬처': 0,
      '액션/전략': 0
    };
    games.forEach((g) => {
      if (counts[g.genre] !== undefined) {
        counts[g.genre] += 1;
      }
    });
    return counts;
  }, [games]);

  // Total active coupons
  const totalActiveCoupons = useMemo(() => {
    return games.reduce((acc, g) => acc + g.activeCouponsCount, 0);
  }, [games]);

  // Filtered & sorted games
  const filteredGames = useMemo(() => {
    let result = [...games];

    // Filter by bookmarks
    if (showOnlyBookmarks) {
      result = result.filter((g) => bookmarks.includes(g.id));
    }

    // Filter by genre
    if (currentGenre !== '전체') {
      result = result.filter((g) => g.genre === currentGenre);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter((g) => {
        const titleMatch = g.title.toLowerCase().includes(q);
        const devMatch = g.developer.toLowerCase().includes(q);
        const tagMatch = g.tags.some((t) => t.toLowerCase().includes(q));
        const couponMatch = g.coupons.some((c) =>
          c.code.toLowerCase().includes(q) || c.rewardSummary.toLowerCase().includes(q)
        );
        return titleMatch || devMatch || tagMatch || couponMatch;
      });
    }

    // Sort
    result.sort((a, b) => {
      if (sortOption === 'popular') {
        return b.rating - a.rating;
      }
      if (sortOption === 'urgent') {
        const aHasUrgent = a.coupons.some((c) => c.isUrgent);
        const bHasUrgent = b.coupons.some((c) => c.isUrgent);
        if (aHasUrgent && !bHasUrgent) return -1;
        if (!aHasUrgent && bHasUrgent) return 1;
        return b.activeCouponsCount - a.activeCouponsCount;
      }
      if (sortOption === 'coupon_count') {
        return b.activeCouponsCount - a.activeCouponsCount;
      }
      // default: latest
      return b.lastUpdated.localeCompare(a.lastUpdated);
    });

    return result;
  }, [games, showOnlyBookmarks, bookmarks, currentGenre, searchQuery, sortOption]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm shadow-2xl flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showOnlyBookmarks={showOnlyBookmarks}
        onToggleBookmarks={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
        bookmarksCount={bookmarks.length}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        onSelectKeyword={(kw) => setSearchQuery(kw)}
      />

      {/* Live Radar Ticker */}
      <QuickRadarTicker />

      {/* Hero Banner with Stats and Filters */}
      <HeroBanner
        currentGenre={currentGenre}
        onSelectGenre={setCurrentGenre}
        genreCounts={genreCounts}
        sortOption={sortOption}
        onSortChange={setSortOption}
        totalActiveCoupons={totalActiveCoupons}
        totalGames={games.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Info Bar */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <span className="font-semibold text-slate-200">
              {showOnlyBookmarks ? '⭐ 내 찜한 게임' : currentGenre}
            </span>
            <span>•</span>
            <span>검색결과 <strong className="text-amber-400 font-bold">{filteredGames.length}</strong>개 게임</span>
            {searchQuery && (
              <span className="text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded text-xs">
                "{searchQuery}" 검색됨
              </span>
            )}
          </div>

          {(searchQuery || showOnlyBookmarks || currentGenre !== '전체') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setShowOnlyBookmarks(false);
                setCurrentGenre('전체');
              }}
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer underline underline-offset-2"
            >
              필터 초기화
            </button>
          )}
        </div>

        {/* Game Cards Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                isBookmarked={bookmarks.includes(game.id)}
                onToggleBookmark={handleToggleBookmark}
                onSelectGame={handleSelectGame}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-slate-900/40 rounded-3xl border border-slate-800 p-8 max-w-lg mx-auto">
            <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-300 mb-1">
              조건에 맞는 모바일 게임 쿠폰이 없습니다.
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              검색어를 변경하거나 다른 카테고리를 선택해보세요.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowOnlyBookmarks(false);
                  setCurrentGenre('전체');
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition cursor-pointer"
              >
                전체 게임 목록 보기
              </button>
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition cursor-pointer"
              >
                + 찾으시는 쿠폰 제보하기
              </button>
            </div>
          </div>
        )}
      </main>

      {/* SEO Article & FAQ Section */}
      <SeoArticleSection />

      {/* Footer */}
      <Footer onSelectKeyword={(kw) => setSearchQuery(kw)} />

      {/* Modals */}
      <GameDetailModal
        game={selectedGame}
        onClose={handleCloseModal}
        onVoteCoupon={handleVoteCoupon}
      />

      <CouponSubmitModal
        games={games}
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmitSuccess={(msg) => showToast(msg)}
      />
    </div>
  );
}
