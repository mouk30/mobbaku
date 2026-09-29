export type GameGenre = 
  | '전체'
  | '수집형 RPG'
  | 'MMORPG'
  | '방치형/시뮬레이션'
  | '서브컬처'
  | '액션/전략';

export interface CouponReward {
  name: string;
  count?: string;
  icon?: 'diamond' | 'ticket' | 'gold' | 'box' | 'potion' | 'star';
}

export interface CouponItem {
  id: string;
  code: string;
  rewards: CouponReward[];
  rewardSummary: string;
  expiresAt: string; // e.g. "2026-10-31" or "상시 사용 가능"
  isNew?: boolean;
  isUrgent?: boolean; // 마감 임박 (e.g. 3일 이내)
  status: 'active' | 'expired';
  verifiedDate: string; // e.g. "2026-09-26 검증완료"
  successRate: number; // e.g. 99 (percentage)
  likes: number; // 작동해요
  dislikes: number; // 만료 제보
  userVoted?: 'like' | 'dislike' | null;
  notes?: string;
}

export interface GameInfo {
  id: string;
  slug: string;
  title: string;
  developer: string;
  genre: GameGenre;
  iconUrl: string;
  bannerUrl: string;
  rating: number;
  totalCouponsCount: number;
  activeCouponsCount: number;
  lastUpdated: string;
  platforms: ('Android' | 'iOS' | 'PC')[];
  tags: string[];
  redeemUrl?: string; // 공식 웹 쿠폰 교환소 URL (특히 iOS용)
  androidGuide: string[];
  iosGuide: string[];
  officialCommunity: {
    lounge?: string;
    cafe?: string;
    discord?: string;
    youtube?: string;
    website?: string;
  };
  coupons: CouponItem[];
  description: string;
}

export type SortOption = 'latest' | 'popular' | 'urgent' | 'coupon_count';
