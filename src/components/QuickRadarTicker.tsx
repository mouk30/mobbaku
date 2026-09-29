import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, Bell, CheckCircle2 } from 'lucide-react';

const LIVE_RADAR_ITEMS = [
  { game: '나 혼자만 레벨업:어라이즈', text: '마정석 1,000개 + 골드 10만 [HUNTERSOLO2026] 오늘 오전 검증 완료', time: '방금 전' },
  { game: '원신', text: '나타 기념 원석 100개 코드 [NATLANEXPLORER2026] 인게임 정상 수령 확인', time: '3분 전' },
  { game: '붕괴: 스타레일', text: '성옥 100개 + 신용포인트 [TRAILBLAZER2026] 작동률 99%', time: '7분 전' },
  { game: 'AFK: 새로운 여정', text: '다이아 1,000개 + 소환권 10장 [AFKJOURNEY2026] 유저 1,980명 수령 완료', time: '12분 전' },
  { game: '승리의 여신: 니케', text: '쥬얼 300개 + 고급모집 2장 [NIKKE2026SPECIAL] 즉시 지급 확인', time: '18분 전' },
  { game: '블루 아카이브', text: '청휘석 1,200개 10연차 [BLUEARCHIVE2026] 수동 교환 검증 완료', time: '25분 전' },
];

export const QuickRadarTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LIVE_RADAR_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentItem = LIVE_RADAR_ITEMS[currentIndex];

  return (
    <div className="w-full bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-y border-indigo-900/30 py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="flex items-center gap-1 text-emerald-400 font-bold shrink-0 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>실시간 쿠폰 레이더</span>
          </div>
          <div className="flex items-center gap-2 overflow-hidden truncate">
            <span className="font-semibold text-amber-300 truncate shrink-0">
              [{currentItem.game}]
            </span>
            <span className="text-slate-200 truncate">
              {currentItem.text}
            </span>
          </div>
        </div>
        <div className="shrink-0 hidden md:flex items-center gap-2 text-slate-400 text-[11px]">
          <span className="text-slate-500">{currentItem.time}</span>
          <span className="inline-flex items-center gap-1 text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            에디터 100% 실기기 테스트
          </span>
        </div>
      </div>
    </div>
  );
};
