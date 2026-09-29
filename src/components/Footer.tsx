import React from 'react';
import { Gift, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectKeyword: (kw: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectKeyword }) => {
  const seoKeywords = [
    '모바일게임쿠폰',
    '모바일 게임 쿠폰 모음',
    '2026 모바일게임 쿠폰',
    '최신 리딤코드',
    '원신 리딤코드',
    '나 혼자만 레벨업 쿠폰',
    '붕괴 스타레일 쿠폰 번호',
    'AFK 새로운 여정 다이아 쿠폰',
    '젠레스 존 제로 쿠폰',
    '승리의 여신 니케 쥬얼 쿠폰',
    '메이플스토리M 쿠폰',
    '리니지M 쿠폰 등록',
    '블루 아카이브 청휘석 쿠폰',
    '세븐나이츠 키우기 루비 쿠폰',
    '아이폰 리딤코드 웹 교환소',
    '무과금 필수 게임 쿠폰'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Keyword Cloud for SEO Ranking */}
        <div className="mb-10 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
          <div className="flex items-center gap-2 mb-3 text-slate-200 font-bold text-sm">
            <Gift className="w-4 h-4 text-amber-400" />
            <span>실시간 인기 검색어 & 모바일게임 쿠폰 태그</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => {
                  onSelectKeyword(kw.replace(/쿠폰|리딤코드|모음|번호|등록/g, '').trim() || kw);
                  scrollToTop();
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-amber-300 border border-slate-800 text-xs transition cursor-pointer"
              >
                #{kw}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-900">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
                <Gift className="w-5 h-5" />
              </div>
              <span className="text-base font-black tracking-tight text-slate-100">
                모바일게임쿠폰 | mobbakun
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              mobbakun(모바쿤)은 대한민국 모바일 게이머들이 매일 최신 무료 리딤코드와 보상을 안전하고 빠르게 챙길 수 있도록 매일 100% 실기기 수동 검증하여 제공하는 전문 게이밍 포털입니다.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>실시간 스팸·낚시 쿠폰 24시간 필터링 시스템 가동 중</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              사이트 맵 & 바로가기
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/sitemap.xml" target="_blank" className="hover:text-amber-400 transition">
                  XML 사이트맵 (검색엔진 전용)
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" className="hover:text-amber-400 transition">
                  robots.txt 규약
                </a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-amber-400 transition">
                  자주 묻는 질문 (FAQ)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              안내 및 면책조항
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              본 사이트에 수록된 모든 게임명, 로고, 캐릭터 및 상표권은 각 개발사 및 퍼블리셔(호요버스, 넷마블, 넥슨, 스마일게이트, 엔씨소프트 등)에 귀속됩니다. 본 사이트는 게이머 편의를 위한 비공식 정보 제공 포털입니다.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-1">
            <span>© 2026 모바일게임 쿠폰존 (CouponZone). All rights reserved. Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Gamers.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>맨 위로 가기</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
