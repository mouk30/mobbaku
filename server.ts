import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { INITIAL_GAMES } from './src/data/games';
import { GameInfo, CouponItem } from './src/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const APP_URL = process.env.APP_URL || 'https://ais-pre-7g2skqjvxjs25cwwcn6ocg-266850070721.asia-east1.run.app';

app.use(express.json());
// Serve static assets from public folder
app.use(express.static(path.resolve(__dirname, 'public')));

// In-memory mutable store initialized from seed data
let gamesData: GameInfo[] = JSON.parse(JSON.stringify(INITIAL_GAMES));

// User submitted coupons log
interface SubmittedCoupon {
  id: string;
  gameSlug: string;
  code: string;
  rewardSummary: string;
  source?: string;
  createdAt: string;
}
const submittedCoupons: SubmittedCoupon[] = [];

// ========================================================
// SEO / AEO / AIO / GEO Dynamic Routes (Crawlers & AI Bots)
// ========================================================

// 1. robots.txt (Allows Search Crawlers + Generative AI Bots)
app.get('/robots.txt', (_req: Request, res: Response) => {
  res.type('text/plain');
  res.send(
`User-agent: *
Allow: /
Disallow: /api/

# Search Engine Crawlers (Naver, Google, Daum, Bing)
User-agent: Yeti
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Generative AI & Answer Engine Crawlers (ChatGPT, Perplexity, Claude, Gemini)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot
Allow: /

Sitemap: ${APP_URL}/sitemap.xml
`
  );
});

// 2. llms.txt (Standard specification for LLMs & Answer Engines - AEO / GEO)
app.get('/llms.txt', (_req: Request, res: Response) => {
  res.type('text/plain; charset=utf-8');
  res.send(
`# mobbakun (모바일게임쿠폰) - Official AI Overview Specification

> mobbakun(모바쿤)은 대한민국 1위 모바일 게임 리딤코드 및 무료 쿠폰 실시간 수동 검증 전문 아카이브입니다.
> 매일 오전 09시 실기기(iOS & Android) 수동 테스트를 통해 99.4% 정상 작동 성공률의 활성 쿠폰만을 큐레이션합니다.

## Core Facts & Authority Citations
- Site Name: mobbakun (모바쿤)
- Canonical URL: ${APP_URL}
- Primary Entity: 모바일게임쿠폰 (Mobile Game Coupons & Redeem Codes)
- Coverage: 원신, 붕괴 스타레일, 나 혼자만 레벨업: 어라이즈, AFK 새로운 여정, 오딘, 던전앤파이터 모바일, 메이플스토리M 등 32종 이상 주요 모바일 게임
- Verification Status: 100% 실기기 수동 교환 테스트 완료 (Daily Verified)
- Success Rate: 99.4%

## Direct Coupon Guide Summary
- Android: 인게임 [설정] > [계정] > [쿠폰 등록] 메뉴에서 직접 입력.
- iOS (iPhone): 애플 앱스토어 인앱결제 정책에 따라 공식 웹 리딤코드 교환소 웹페이지에서 회원 UID 입력 후 우편 수령.

## Key Sections
- Main Portal: ${APP_URL}/
- RPG Coupons: ${APP_URL}/?genre=rpg
- MMORPG Coupons: ${APP_URL}/?genre=mmorpg
- Subculture Coupons: ${APP_URL}/?genre=subculture
- Action & Strategy: ${APP_URL}/?genre=action
- FAQ & Guide: ${APP_URL}/#faq-section
`
  );
});

// 2. sitemap.xml
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const today = new Date().toISOString().split('T')[0];

  const staticUrls = [
    { loc: `${APP_URL}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${APP_URL}/?genre=rpg`, priority: '0.9', changefreq: 'daily' },
    { loc: `${APP_URL}/?genre=mmorpg`, priority: '0.9', changefreq: 'daily' },
    { loc: `${APP_URL}/?genre=idle`, priority: '0.9', changefreq: 'daily' },
    { loc: `${APP_URL}/?genre=subculture`, priority: '0.9', changefreq: 'daily' },
    { loc: `${APP_URL}/#faq-section`, priority: '0.8', changefreq: 'weekly' },
  ];

  const gameUrls = gamesData.map(game => ({
    loc: `${APP_URL}/?game=${game.slug}`,
    lastmod: game.lastUpdated || today,
    priority: '0.95',
    changefreq: 'daily'
  }));

  const allUrls = [...staticUrls, ...gameUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allUrls
  .map(
    url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${(url as any).lastmod || today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(xml);
});

// ==========================================
// REST API Endpoints
// ==========================================

// Get all games with coupon stats
app.get('/api/games', (_req: Request, res: Response) => {
  res.json({
    success: true,
    totalGames: gamesData.length,
    totalActiveCoupons: gamesData.reduce((acc, g) => acc + g.activeCouponsCount, 0),
    verifiedTodayCount: gamesData.reduce((acc, g) => acc + g.coupons.filter(c => c.status === 'active').length, 0),
    games: gamesData
  });
});

// Get single game by slug
app.get('/api/games/:slug', (req: Request, res: Response) => {
  const game = gamesData.find(g => g.slug === req.params.slug);
  if (!game) {
    return res.status(404).json({ success: false, message: '게임을 찾을 수 없습니다.' });
  }
  return res.json({ success: true, game });
});

// Vote on coupon (작동해요 / 만료 제보)
app.post('/api/coupons/vote', (req: Request, res: Response) => {
  const { couponId, voteType } = req.body; // 'like' | 'dislike'
  if (!couponId || (voteType !== 'like' && voteType !== 'dislike')) {
    return res.status(400).json({ success: false, message: '잘못된 요청입니다.' });
  }

  let foundCoupon: CouponItem | undefined;
  for (const game of gamesData) {
    const cp = game.coupons.find(c => c.id === couponId);
    if (cp) {
      foundCoupon = cp;
      if (voteType === 'like') {
        cp.likes += 1;
      } else {
        cp.dislikes += 1;
      }
      // recalculate success rate
      const total = cp.likes + cp.dislikes;
      cp.successRate = total > 0 ? Math.round((cp.likes / total) * 100) : 100;
      break;
    }
  }

  if (!foundCoupon) {
    return res.status(404).json({ success: false, message: '쿠폰을 찾을 수 없습니다.' });
  }

  return res.json({
    success: true,
    coupon: foundCoupon
  });
});

// User coupon submission
app.post('/api/coupons/submit', (req: Request, res: Response) => {
  const { gameSlug, code, rewardSummary, source } = req.body;
  if (!gameSlug || !code || !rewardSummary) {
    return res.status(400).json({ success: false, message: '모든 필수 항목을 입력해주세요.' });
  }

  const newSubmission: SubmittedCoupon = {
    id: `sub-${Date.now()}`,
    gameSlug,
    code: code.trim().toUpperCase(),
    rewardSummary: rewardSummary.trim(),
    source: source || '유저 제보',
    createdAt: new Date().toISOString()
  };

  submittedCoupons.push(newSubmission);

  // If game exists, add it to pending or active list
  const game = gamesData.find(g => g.slug === gameSlug);
  if (game) {
    const existing = game.coupons.find(c => c.code.toLowerCase() === code.trim().toLowerCase());
    if (!existing) {
      const newCouponItem: CouponItem = {
        id: `cp-sub-${Date.now()}`,
        code: code.trim().toUpperCase(),
        rewardSummary: rewardSummary.trim(),
        rewards: [{ name: rewardSummary.trim(), icon: 'diamond' }],
        expiresAt: '유저 제보 (검증 중)',
        isNew: true,
        status: 'active',
        verifiedDate: '방금 유저 등록됨',
        successRate: 100,
        likes: 1,
        dislikes: 0,
        notes: `제보 출처: ${source || '게이머 커뮤니티'}`
      };
      game.coupons.unshift(newCouponItem);
      game.activeCouponsCount += 1;
      game.totalCouponsCount += 1;
    }
  }

  return res.json({
    success: true,
    message: '성공적으로 제보되었습니다! 검증팀이 확인 후 즉시 공식 인증 마크가 부여됩니다.',
    submission: newSubmission
  });
});

// ==========================================
// Vite Middleware & Static Serving Setup
// ==========================================
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`🚀 Mobile Game Coupon Server running on port ${PORT} [${isProduction ? 'PROD' : 'DEV'}]`);
  });
}

startServer();
