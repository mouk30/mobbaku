import { GameInfo } from '../../types';

export const idleGames: GameInfo[] = [
  {
    id: 'game-afk',
    slug: 'afk-journey',
    title: 'AFK: 새로운 여정',
    developer: '파라이트 게임즈 (Farlight)',
    genre: '방치형/시뮬레이션',
    iconUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.7,
    totalCouponsCount: 6,
    activeCouponsCount: 4,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['AFK', '새로운여정', '파라이트', '다이아', '소환권'],
    redeemUrl: 'https://afkjourney-redeem.farlightgames.com/',
    androidGuide: [
      '게임 접속 후 왼쪽 상단 프로필 > [설정] > [서비스] > [프로모션 코드]를 누릅니다.'
    ],
    iosGuide: [
      '파라이트 공식 교환소에서 캐릭터 ID와 인게임 우편 인증 코드를 입력하여 교환합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/AFK_Journey/home'
    },
    description: '에스페리아의 아름다운 동화풍 판타지 월드를 자유롭게 탐험하는 차세대 방치형 RPG.',
    coupons: [
      {
        id: 'cp-afk-01',
        code: 'AFKJOURNEY2026',
        rewardSummary: '다이아 1,000개 + 영웅 소환권 10장 + 골드 100,000',
        rewards: [{ name: '다이아', count: '1,000개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1980,
        dislikes: 12
      },
      {
        id: 'cp-afk-02',
        code: 'JOURNEYWITHYOU',
        rewardSummary: '다이아 500개 + 영혼석 50개',
        rewards: [{ name: '다이아', count: '500개', icon: 'diamond' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 870,
        dislikes: 10
      },
      {
        id: 'cp-afk-03',
        code: 'ESPERIAGIFT',
        rewardSummary: '다이아 300개 + 훈련용 책 10권',
        rewards: [{ name: '다이아', count: '300개', icon: 'diamond' }],
        expiresAt: '2026-10-20',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 640,
        dislikes: 8
      },
      {
        id: 'cp-afk-04',
        code: 'AFKNEWSTART',
        rewardSummary: '다이아 400개 + 골드 50,000',
        rewards: [{ name: '다이아', count: '400개', icon: 'diamond' }],
        expiresAt: '상시 사용 가능',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 100,
        likes: 1350,
        dislikes: 5
      }
    ]
  },
  {
    id: 'game-ski',
    slug: 'seven-knights-idle',
    title: '세븐나이츠 키우기',
    developer: '넷마블 (Netmarble)',
    genre: '방치형/시뮬레이션',
    iconUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.7,
    totalCouponsCount: 4,
    activeCouponsCount: 3,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['세나키', '세븐나이츠키우기', '넷마블', '루비', '소환권'],
    redeemUrl: 'https://coupon.netmarble.com/ski',
    androidGuide: [
      '게임 우측 상단 [메뉴] > [설정] > [계정] > [쿠폰 등록] 버튼을 누릅니다.'
    ],
    iosGuide: [
      '넷마블 공식 세븐나이츠 키우기 쿠폰 웹사이트에 회원번호(UID)를 입력하고 등록합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/SevenKnights_Idle/home'
    },
    description: '세븐나이츠의 영웅들이 귀여운 SD로 부활! 속도감 넘치는 방치형 RPG.',
    coupons: [
      {
        id: 'cp-ski-01',
        code: 'SKI2026LUCKY',
        rewardSummary: '루비 50,000개 + 영웅 소환권 50장',
        rewards: [{ name: '루비', count: '50,000개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1820,
        dislikes: 15
      },
      {
        id: 'cp-ski-02',
        code: 'IDLEKNIGHTS99',
        rewardSummary: '영웅 소환권 30장 + 펫 소환권 30장',
        rewards: [{ name: '소환권', count: '30장', icon: 'ticket' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 950,
        dislikes: 12
      },
      {
        id: 'cp-ski-03',
        code: 'GOLDMINE2026',
        rewardSummary: '골드 10,000,000 + 기사단 증표 10,000개',
        rewards: [{ name: '골드', count: '10,000,000', icon: 'gold' }],
        expiresAt: '상시 사용 가능',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 100,
        likes: 1100,
        dislikes: 7
      }
    ]
  },
  {
    id: 'game-msh',
    slug: 'legend-of-mushroom',
    title: '버섯커 키우기',
    developer: 'Joy Net Games',
    genre: '방치형/시뮬레이션',
    iconUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.6,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['버섯커', '버섯커키우기', '다이아', '스킬뽑기'],
    androidGuide: [
      '화면 좌측 상단 프로필 이미지 > [교환 코드] 버튼을 누르고 코드를 입력합니다.'
    ],
    iosGuide: [
      '아이폰도 인게임 좌측 상단 [프로필] > [교환 코드]에서 바로 입력 가능합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/Mushrooms/home'
    },
    description: '작은 버섯의 위대한 모험! 램프를 문질러 무한 장비 파밍과 동료 육성의 재미.',
    coupons: [
      {
        id: 'cp-msh-01',
        code: 'MUSHROOM2026',
        rewardSummary: '다이아 3,000개 + 스킬 뽑기권 30장 + 동료 뽑기권 30장',
        rewards: [{ name: '다이아', count: '3,000개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1650,
        dislikes: 14
      },
      {
        id: 'cp-msh-02',
        code: 'HEROMUSH',
        rewardSummary: '다이아 1,500개 + 가속권 10개',
        rewards: [{ name: '다이아', count: '1,500개', icon: 'diamond' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 98,
        likes: 890,
        dislikes: 9
      }
    ]
  },
  {
    id: 'game-uma',
    slug: 'umamusume-pretty-derby',
    title: '우마무스메 프리티 더비',
    developer: '카카오게임즈 / Cygames',
    genre: '방치형/시뮬레이션',
    iconUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.8,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['우마무스메', '말딸', '카카오게임즈', '쥬얼', '서포트카드'],
    androidGuide: [
      '로비 우측 상단 [메뉴] > [쿠폰 등록] 버튼을 누르고 코드를 입력합니다.'
    ],
    iosGuide: [
      '카카오게임즈 우마무스메 공식 웹 쿠폰 페이지에서 계정 연동 후 입력합니다.'
    ],
    officialCommunity: {
      cafe: 'https://cafe.daum.net/umamusume-kor'
    },
    description: '트레이너가 되어 우마무스메들을 육성하고 꿈의 무대 URA 파이널스를 향해 달리는 육성 시뮬레이션!',
    coupons: [
      {
        id: 'cp-uma-01',
        code: 'UMAMUSUME2026',
        rewardSummary: '쥬얼 1,500개 (10연차) + 머니 100,000',
        rewards: [{ name: '쥬얼', count: '1,500개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 2430,
        dislikes: 11
      },
      {
        id: 'cp-uma-02',
        code: 'TRAINERTHANKYOU',
        rewardSummary: '서포트 Pt 50,000 + 알람시계 10개',
        rewards: [{ name: '서포트 Pt', count: '50,000', icon: 'box' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 98,
        likes: 1210,
        dislikes: 8
      }
    ]
  },
  {
    id: 'game-cat',
    slug: 'cats-and-soup',
    title: '고양이와 스프 (Cats & Soup)',
    developer: '하이디어 (Hidead) / 네오위즈',
    genre: '방치형/시뮬레이션',
    iconUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.9,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['고양이와스프', '네오위즈', '보석', '힐링', '방치형'],
    redeemUrl: 'https://redeem.catsnsoup.com/',
    androidGuide: [
      '화면 우측 상단 톱니바퀴 [설정] > [쿠폰] 메뉴에서 코드를 입력합니다.'
    ],
    iosGuide: [
      '고양이와 스프 공식 리딤 사이트에서 유저 아이디와 코드를 입력합니다.'
    ],
    officialCommunity: {
      website: 'https://catsnsoup.com/'
    },
    description: '숲속에서 고양이들이 맛있는 수프를 끓이는 평화롭고 따스한 힐링 힐링 방치형 게임.',
    coupons: [
      {
        id: 'cp-cat-01',
        code: 'CATSSOUP2026',
        rewardSummary: '보석 1,000개 + 천문대 티켓 5장',
        rewards: [{ name: '보석', count: '1,000개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 100,
        likes: 1540,
        dislikes: 6
      },
      {
        id: 'cp-cat-02',
        code: 'AUTUMNSOUPGIFT',
        rewardSummary: '가구 코인 500개 + 푸딩 10개',
        rewards: [{ name: '가구 코인', count: '500개', icon: 'gold' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 98,
        likes: 820,
        dislikes: 5
      }
    ]
  }
];
