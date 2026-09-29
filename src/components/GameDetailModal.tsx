import React, { useState } from 'react';
import { GameInfo, CouponItem } from '../types';
import { 
  X, Copy, Check, ExternalLink, ShieldCheck, ThumbsUp, ThumbsDown, 
  Sparkles, Smartphone, Apple, AlertTriangle, Info, Calendar, Share2, 
  CheckCircle2, Flame, Award, ChevronDown, ChevronUp, Layers
} from 'lucide-react';

interface GameDetailModalProps {
  game: GameInfo | null;
  onClose: () => void;
  onVoteCoupon: (couponId: string, voteType: 'like' | 'dislike') => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({
  game,
  onClose,
  onVoteCoupon
}) => {
  const [guideTab, setGuideTab] = useState<'android' | 'ios'>('ios');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [showExpired, setShowExpired] = useState(false);
  const [userVotes, setUserVotes] = useState<Record<string, 'like' | 'dislike'>>({});

  if (!game) return null;

  const activeCoupons = game.coupons.filter(c => c.status === 'active');
  const expiredCoupons = game.coupons.filter(c => c.status === 'expired');

  // Copy single coupon
  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => {
      setCopiedCodeId(null);
    }, 2000);
  };

  // Copy all active coupons
  const handleCopyAllCodes = () => {
    const allCodesText = activeCoupons.map(c => `${c.code} (${c.rewardSummary})`).join('\n');
    navigator.clipboard.writeText(allCodesText);
    setCopiedAll(true);
    setTimeout(() => {
      setCopiedAll(false), 2500;
    });
  };

  // Vote handler
  const handleVote = (couponId: string, type: 'like' | 'dislike') => {
    if (userVotes[couponId]) return; // already voted
    setUserVotes(prev => ({ ...prev, [couponId]: type }));
    onVoteCoupon(couponId, type);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      {/* Modal Dialog Content */}
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Banner Area */}
          <div className="relative h-44 sm:h-52 w-full bg-slate-800 overflow-hidden">
            <img
              src={game.bannerUrl}
              alt={`${game.title} 쿠폰 배경`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

            <div className="absolute bottom-4 left-4 sm:left-6 flex items-end gap-4">
              <img
                src={game.iconUrl}
                alt={`${game.title} 아이콘`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-slate-700 bg-slate-800 object-cover shadow-2xl"
              />
              <div className="text-left pb-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500 text-slate-950">
                    {game.genre}
                  </span>
                  <span className="text-xs text-slate-300">
                    {game.developer}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black text-slate-100">
                  {game.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Quick Actions & Official Redeem Links */}
          <div className="p-4 sm:p-6 bg-slate-900/95 border-b border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Batch Copy All Button */}
              {activeCoupons.length > 0 && (
                <button
                  onClick={handleCopyAllCodes}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer ${
                    copiedAll
                      ? 'bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20'
                      : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20'
                  }`}
                >
                  {copiedAll ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                      <span>전체 활성 쿠폰 ({activeCoupons.length}개) 일괄 복사 완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>전체 활성 쿠폰 ({activeCoupons.length}개) 한번에 복사</span>
                    </>
                  )}
                </button>
              )}

              {/* 최신쿠폰받기 External Link Button */}
              <a
                href="https://lite.tiktok.com/t/ZS9Ao13pU5jpj-7zhfi/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm bg-[#a3e635] hover:bg-[#bef264] text-slate-950 transition flex items-center gap-1.5 shadow-md shadow-lime-950/30 no-underline"
              >
                <span>최신쿠폰받기</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              {/* iOS Official Redeem Webpage Button */}
              {game.redeemUrl && (
                <a
                  href={game.redeemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl font-semibold text-xs text-indigo-300 bg-indigo-950/80 border border-indigo-700/60 hover:bg-indigo-900/60 hover:text-white transition flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>공식 리딤코드 교환소 바로가기</span>
                </a>
              )}
            </div>

            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              {game.description}
            </p>
          </div>

          {/* Active Coupons List Section */}
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h2 className="text-base sm:text-lg font-bold text-slate-100">
                  현재 사용 가능한 활성 쿠폰 ({activeCoupons.length}개)
                </h2>
              </div>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                실시간 작동 검증 완료
              </span>
            </div>

            {/* Coupons Card Stack */}
            <div className="space-y-3">
              {activeCoupons.map((coupon) => {
                const isCopied = copiedCodeId === coupon.id;
                const voted = userVotes[coupon.id];

                return (
                  <div
                    key={coupon.id}
                    className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    {/* Left: Code & Rewards */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {coupon.isNew && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            NEW 신규
                          </span>
                        )}
                        {coupon.isUrgent && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                            ⏰ 마감임박
                          </span>
                        )}
                        <span className="text-lg font-mono font-black tracking-wider text-amber-300 selection:bg-amber-400 selection:text-slate-950">
                          {coupon.code}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          (만료일: {coupon.expiresAt})
                        </span>
                      </div>

                      {/* Reward breakdown */}
                      <p className="text-sm font-semibold text-slate-200">
                        🎁 {coupon.rewardSummary}
                      </p>

                      {coupon.notes && (
                        <p className="text-xs text-slate-400 flex items-center gap-1">
                          <Info className="w-3 h-3 text-slate-500" />
                          {coupon.notes}
                        </p>
                      )}

                      <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-400">
                        <span className="text-emerald-400 font-medium">
                          {coupon.verifiedDate}
                        </span>
                        <span>•</span>
                        <span>성공률 {coupon.successRate}%</span>
                      </div>
                    </div>

                    {/* Right: Copy Button & Feedback */}
                    <div className="flex items-center md:flex-col lg:flex-row gap-2 shrink-0 justify-between md:justify-end">
                      {/* Thumbs up / down feedback */}
                      <div className="flex items-center gap-1 text-xs">
                        <button
                          type="button"
                          onClick={() => handleVote(coupon.id, 'like')}
                          disabled={!!voted}
                          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs transition cursor-pointer ${
                            voted === 'like'
                              ? 'bg-emerald-950 text-emerald-400 border-emerald-600'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700'
                          }`}
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{coupon.likes + (voted === 'like' ? 1 : 0)}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleVote(coupon.id, 'dislike')}
                          disabled={!!voted}
                          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs transition cursor-pointer ${
                            voted === 'dislike'
                              ? 'bg-rose-950 text-rose-400 border-rose-600'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-rose-400 hover:border-slate-700'
                          }`}
                        >
                          <ThumbsDown className="w-3.5 h-3.5" />
                          <span>{coupon.dislikes + (voted === 'dislike' ? 1 : 0)}</span>
                        </button>
                      </div>

                      {/* Copy Action Button */}
                      <button
                        type="button"
                        onClick={() => handleCopyCode(coupon.code, coupon.id)}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-500 text-slate-950 font-black shadow-md shadow-emerald-500/30'
                            : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>복사완료!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>코드 복사</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}

              {activeCoupons.length === 0 && (
                <div className="p-8 text-center bg-slate-950/40 rounded-2xl border border-slate-800 text-slate-400 text-sm">
                  현재 활성화된 공식 쿠폰이 없습니다. 새로운 쿠폰이 발견되면 즉시 등록됩니다.
                </div>
              )}
            </div>

            {/* Redemption Instructions Guide Tabs */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h2 className="text-base font-bold text-slate-100 mb-3 flex items-center gap-2">
                <span>📌 {game.title} 쿠폰 등록 및 사용 방법</span>
              </h2>

              {/* OS Switcher */}
              <div className="flex items-center gap-2 mb-4 bg-slate-950 p-1 rounded-xl border border-slate-800 w-fit">
                <button
                  onClick={() => setGuideTab('ios')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    guideTab === 'ios'
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Apple className="w-3.5 h-3.5" />
                  <span>아이폰 (iOS) 입력 방법</span>
                </button>
                <button
                  onClick={() => setGuideTab('android')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    guideTab === 'android'
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>안드로이드 (AOS) 입력 방법</span>
                </button>
              </div>

              {/* Guide Content */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800/80 space-y-2.5">
                {(guideTab === 'ios' ? game.iosGuide : game.androidGuide).map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs border border-amber-500/30">
                      {idx + 1}
                    </span>
                    <p className="leading-relaxed">{step}</p>
                  </div>
                ))}

                {guideTab === 'ios' && game.redeemUrl && (
                  <div className="pt-2">
                    <a
                      href={game.redeemUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{game.title} 공식 리딤 웹페이지 열기</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Expired Coupons Section */}
            {expiredCoupons.length > 0 && (
              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setShowExpired(!showExpired)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-slate-400 hover:text-slate-200 transition py-1 cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <span>만료된 쿠폰 아카이브 ({expiredCoupons.length}개)</span>
                    <span className="text-[10px] text-slate-500">(시간 낭비 방지용)</span>
                  </span>
                  {showExpired ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showExpired && (
                  <div className="mt-3 space-y-2">
                    {expiredCoupons.map((coupon) => (
                      <div
                        key={coupon.id}
                        className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/50 flex items-center justify-between text-xs text-slate-500"
                      >
                        <div className="flex items-center gap-2">
                          <span className="line-through font-mono">{coupon.code}</span>
                          <span>•</span>
                          <span>{coupon.rewardSummary}</span>
                        </div>
                        <span className="text-[11px] text-rose-500 font-medium">만료됨</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Official Community Channels */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">공식 커뮤니티 바로가기:</span>
              <div className="flex items-center gap-2">
                {game.officialCommunity.lounge && (
                  <a
                    href={game.officialCommunity.lounge}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-emerald-950/50 border border-emerald-800/50 text-emerald-400 hover:bg-emerald-900/50 text-xs font-medium"
                  >
                    네이버 게임 라운지
                  </a>
                )}
                {game.officialCommunity.cafe && (
                  <a
                    href={game.officialCommunity.cafe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-emerald-950/50 border border-emerald-800/50 text-emerald-400 hover:bg-emerald-900/50 text-xs font-medium"
                  >
                    공식 카페
                  </a>
                )}
                {game.officialCommunity.youtube && (
                  <a
                    href={game.officialCommunity.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-rose-950/50 border border-rose-800/50 text-rose-400 hover:bg-rose-900/50 text-xs font-medium"
                  >
                    공식 유튜브
                  </a>
                )}
                {game.officialCommunity.website && (
                  <a
                    href={game.officialCommunity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium"
                  >
                    공식 사이트
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
