import React, { useState } from 'react';
import { GameInfo } from '../types';
import { X, Send, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

interface CouponSubmitModalProps {
  games: GameInfo[];
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (message: string) => void;
}

export const CouponSubmitModal: React.FC<CouponSubmitModalProps> = ({
  games,
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [selectedGameSlug, setSelectedGameSlug] = useState(games[0]?.slug || '');
  const [code, setCode] = useState('');
  const [rewardSummary, setRewardSummary] = useState('');
  const [source, setSource] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGameSlug || !code || !rewardSummary) {
      alert('게임, 쿠폰 코드, 보상 내용을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/coupons/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameSlug: selectedGameSlug,
          code: code.trim().toUpperCase(),
          rewardSummary: rewardSummary.trim(),
          source: source.trim() || '게이머 제보'
        })
      });

      const data = await res.json();
      if (data.success) {
        setStatusMessage('쿠폰이 성공적으로 등록되었습니다! 편집팀 검증 후 인증 마크가 표시됩니다.');
        onSubmitSuccess(data.message);
        setTimeout(() => {
          onClose();
          setStatusMessage(null);
          setCode('');
          setRewardSummary('');
          setSource('');
        }, 1800);
      } else {
        alert(data.message || '등록 중 오류가 발생했습니다.');
      }
    } catch (err) {
      console.error(err);
      alert('서버 연결 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-lg font-bold text-slate-100">신규 모바일게임 쿠폰 제보</h2>
        </div>
        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          공식 방송, 이벤트, 카페 등에서 새로 발견된 쿠폰을 제보해주세요. 다른 게이머들에게 큰 도움이 됩니다!
        </p>

        {statusMessage ? (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="font-semibold">{statusMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                게임 선택 <span className="text-rose-400">*</span>
              </label>
              <select
                value={selectedGameSlug}
                onChange={(e) => setSelectedGameSlug(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-amber-400 cursor-pointer"
                required
              >
                {games.map((g) => (
                  <option key={g.slug} value={g.slug}>
                    {g.title} ({g.developer})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                쿠폰 번호 (리딤코드) <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="예: NEWYEAR2026GIFT"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-100 font-mono tracking-wider focus:outline-none focus:border-amber-400 uppercase"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                쿠폰 보상 내용 <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={rewardSummary}
                onChange={(e) => setRewardSummary(e.target.value)}
                placeholder="예: 다이아 1,000개 + 영웅 소환권 10장"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                출처 (선택)
              </label>
              <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="예: 공식 네이버 라운지 공지사항, 유튜브 방송"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20 transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? '제보 등록 중...' : '신규 쿠폰 제보 완료'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
