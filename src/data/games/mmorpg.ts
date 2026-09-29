import { GameInfo } from '../../types';

export const mmorpgGames: GameInfo[] = [
  {
    id: 'game-lnm',
    slug: 'lineage-m',
    title: '리니지M',
    developer: '엔씨소프트 (NCSOFT)',
    genre: 'MMORPG',
    iconUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.5,
    totalCouponsCount: 4,
    activeCouponsCount: 3,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['리니지M', 'NC소프트', '아데나', '드다', '변신뽑기', 'TJ쿠폰'],
    androidGuide: [
      '게임 내 메뉴 > [설정] > [정보] 탭을 터치합니다.',
      '[쿠폰 등록] 버튼을 누른 뒤 코드를 입력합니다.'
    ],
    iosGuide: [
      '엔씨소프트 공식 리니지M 웹 쿠폰 등록 페이지에서 PlayNC 로그인 후 등록합니다.'
    ],
    officialCommunity: {
      website: 'https://lineagem.plaync.com/'
    },
    description: '모바일 MMORPG의 역사를 쓴 아덴 대륙의 혈맹과 공성전.',
    coupons: [
      {
        id: 'cp-ln-01',
        code: 'LNM2026REWARD',
        rewardSummary: '아데나 3,000,000 + 드래곤의 다이아몬드 30개',
        rewards: [{ name: '아데나', count: '3,000,000', icon: 'gold' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1540,
        dislikes: 19
      },
      {
        id: 'cp-ln-02',
        code: 'ADENHEROES',
        rewardSummary: '축복받은 순간이동 주문서 20개 + 변신 뽑기권 5장',
        rewards: [{ name: '축복 주문서', count: '20개', icon: 'ticket' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 97,
        likes: 890,
        dislikes: 11
      },
      {
        id: 'cp-ln-03',
        code: 'HONORCOIN77',
        rewardSummary: '명예 코인 50,000개 + 퓨어 엘릭서 3개',
        rewards: [{ name: '명예 코인', count: '50,000개', icon: 'gold' }],
        expiresAt: '2026-10-20',
        isUrgent: true,
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 96,
        likes: 670,
        dislikes: 15
      }
    ]
  },
  {
    id: 'game-mpm',
    slug: 'maplestory-m',
    title: '메이플스토리M',
    developer: '넥슨 (Nexon)',
    genre: 'MMORPG',
    iconUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.6,
    totalCouponsCount: 4,
    activeCouponsCount: 3,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['메이플M', '메이플스토리M', '넥슨', '자동전투', '메소', '로얄헤어'],
    redeemUrl: 'https://mcoupon.nexon.com/maplestorym',
    androidGuide: [
      '게임 접속 후 메뉴 > 환경설정 > [계정] 탭의 [쿠폰 입력] 버튼을 터치합니다.'
    ],
    iosGuide: [
      '넥슨 공식 메이플스토리M 쿠폰 등록 웹페이지에 회원번호를 입력하고 보상을 받습니다.'
    ],
    officialCommunity: {
      cafe: 'https://cafe.naver.com/nexonmaplestorym'
    },
    description: '손안에서 펼쳐지는 진짜 메이플스토리! 나만의 캐릭터 육성과 모바일 전용 자동 전투.',
    coupons: [
      {
        id: 'cp-mp-01',
        code: 'MAPLE2026FESTA',
        rewardSummary: '자동전투 충전권(30분) 5개 + 경험치 증가권(15분) 10개',
        rewards: [{ name: '자동전투권', count: '5개', icon: 'potion' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1340,
        dislikes: 8
      },
      {
        id: 'cp-mp-02',
        code: 'ORANGEGIFTBOX',
        rewardSummary: '주황버섯 모자 외형권 + 메소 5,000,000',
        rewards: [{ name: '메소', count: '5,000,000', icon: 'gold' }],
        expiresAt: '2026-11-30',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 870,
        dislikes: 12
      },
      {
        id: 'cp-mp-03',
        code: 'HERORETURN2026',
        rewardSummary: '로얄 헤어 쿠폰 1장 + 파워엘릭서 100개',
        rewards: [{ name: '로얄 헤어 쿠폰', count: '1장', icon: 'ticket' }],
        expiresAt: '2026-10-15',
        isUrgent: true,
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 96,
        likes: 650,
        dislikes: 16
      }
    ]
  },
  {
    id: 'game-odin',
    slug: 'odin-valhalla-rising',
    title: '오딘: 발할라 라이징',
    developer: '카카오게임즈 / 라이온하트',
    genre: 'MMORPG',
    iconUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.7,
    totalCouponsCount: 4,
    activeCouponsCount: 3,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['오딘', '발할라라이징', '카카오게임즈', '아바타소환권', '골드'],
    redeemUrl: 'https://odin.kakaogames.com/coupon',
    androidGuide: [
      '게임 내 우측 상단 메뉴 > [설정] > [계정] > [쿠폰 등록] 버튼을 누릅니다.'
    ],
    iosGuide: [
      '카카오게임즈 오딘 공식 쿠폰 등록 페이지에서 회원번호를 입력하고 교환합니다.'
    ],
    officialCommunity: {
      cafe: 'https://cafe.daum.net/odin'
    },
    description: '북유럽 신화의 거대한 오픈월드를 언리얼 엔진 4로 구현한 대한민국 대표 MMORPG.',
    coupons: [
      {
        id: 'cp-od-01',
        code: 'ODIN2026VALHALLA',
        rewardSummary: '신성의 아바타 소환권 11회 1장 + 골드 2,000,000',
        rewards: [{ name: '아바타 소환권', count: '11회', icon: 'ticket' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1980,
        dislikes: 14
      },
      {
        id: 'cp-od-02',
        code: 'THORSGIFTBOX',
        rewardSummary: '빛나는 무기 강화석 20개 + 음식 바구니 30개',
        rewards: [{ name: '강화석', count: '20개', icon: 'box' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1120,
        dislikes: 9
      },
      {
        id: 'cp-od-03',
        code: 'VALHALLAHEROES',
        rewardSummary: '주문서 상자 50개 + 골드 1,000,000',
        rewards: [{ name: '골드', count: '1,000,000', icon: 'gold' }],
        expiresAt: '2026-10-20',
        isUrgent: true,
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 850,
        dislikes: 12
      }
    ]
  },
  {
    id: 'game-ln9',
    slug: 'lord-nine',
    title: '로드나인 (Lord Nine)',
    developer: '스마일게이트 (Smilegate)',
    genre: 'MMORPG',
    iconUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.6,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['로드나인', '스마일게이트', 'MMORPG', '탈것', '골드'],
    androidGuide: [
      '게임 내 메뉴 > [설정] > [계정] 탭의 [쿠폰 입력] 항목을 누르고 코드를 입력합니다.'
    ],
    iosGuide: [
      '스마일게이트 로드나인 공식 쿠폰 입력 웹페이지에서 계정 번호 입력 후 등록합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/LORDNINE/home'
    },
    description: '무기와 어빌리티를 자유자재로 조합하는 극한의 자유도! 스마일게이트의 하드코어 MMORPG.',
    coupons: [
      {
        id: 'cp-ln9-01',
        code: 'LORDNINE2026',
        rewardSummary: '희귀 탈것 소환권 1장 + 시간의 조각 100개 + 골드 1,000,000',
        rewards: [{ name: '희귀 탈것', count: '1장', icon: 'ticket' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1420,
        dislikes: 16
      },
      {
        id: 'cp-ln9-02',
        code: 'NINEGUILDWAR',
        rewardSummary: '강화석 상자 20개 + 순간이동 주문서 50개',
        rewards: [{ name: '강화석 상자', count: '20개', icon: 'box' }],
        expiresAt: '2026-11-10',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 720,
        dislikes: 12
      }
    ]
  },
  {
    id: 'game-nc',
    slug: 'night-crows',
    title: '나이트 크로우 (Night Crows)',
    developer: '위메이드 (Wemade)',
    genre: 'MMORPG',
    iconUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.6,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['나이트크로우', '위메이드', '글라이더', '골드', '언리얼엔진5'],
    redeemUrl: 'https://www.nightcrows.com/coupon',
    androidGuide: [
      '게임 접속 후 메뉴 > [설정] > [계정] > [쿠폰 등록]에서 입력합니다.'
    ],
    iosGuide: [
      '위메이드 공식 나이트 크로우 쿠폰 등록 웹페이지에서 캐릭터 선택 후 입력합니다.'
    ],
    officialCommunity: {
      website: 'https://www.nightcrows.com/'
    },
    description: '언리얼 엔진 5로 구현된 고품격 비주얼과 글라이더 공중 액션의 쾌감.',
    coupons: [
      {
        id: 'cp-nc-01',
        code: 'NIGHTCROWS2026',
        rewardSummary: '밤까마귀 날개깃 100개 + 골드 1,500,000 + 강화 주문서 30개',
        rewards: [{ name: '골드', count: '1,500,000', icon: 'gold' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1290,
        dislikes: 14
      },
      {
        id: 'cp-nc-02',
        code: 'GLIDERFLYHIGH',
        rewardSummary: '탈것/무기외형 11회 선택 소환권 1장',
        rewards: [{ name: '소환권', count: '11회', icon: 'ticket' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 810,
        dislikes: 10
      }
    ]
  },
  {
    id: 'game-rv2',
    slug: 'raven-2',
    title: '레이븐2 (Raven 2)',
    developer: '넷마블 (Netmarble)',
    genre: 'MMORPG',
    iconUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.6,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['레이븐2', '넷마블', '다크판타지', '골드', '사역마'],
    redeemUrl: 'https://coupon.netmarble.com/raven2',
    androidGuide: [
      '게임 내 메뉴 > [환경설정] > [계정] > [쿠폰 등록] 버튼을 터치합니다.'
    ],
    iosGuide: [
      '넷마블 공식 레이븐2 쿠폰 페이지에 회원번호(UID)를 입력하고 등록합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/Raven2/home'
    },
    description: '극강의 다크 판타지 세계관과 시네마틱 연출이 돋보이는 넷마블의 정통 대작 MMORPG.',
    coupons: [
      {
        id: 'cp-rv-01',
        code: 'RAVEN2FESTA2026',
        rewardSummary: '골드 2,000,000 + 특무대 성의 소환서 11회 1장',
        rewards: [{ name: '성의 소환서', count: '11회', icon: 'ticket' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1140,
        dislikes: 11
      },
      {
        id: 'cp-rv-02',
        code: 'DARKKNIGHTSGIFT',
        rewardSummary: '사역마 소환서 11회 1장 + 강화석 상자 30개',
        rewards: [{ name: '사역마 소환서', count: '11회', icon: 'ticket' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 690,
        dislikes: 8
      }
    ]
  },
  {
    id: 'game-prasia',
    slug: 'wars-of-prasia',
    title: '프라시아 전기 (Wars of Prasia)',
    developer: '넥슨 (Nexon)',
    genre: 'MMORPG',
    iconUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.5,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['프라시아전기', '넥슨', '공성전', '결사', '산토템'],
    redeemUrl: 'https://mcoupon.nexon.com/wp',
    androidGuide: [
      '게임 접속 후 메뉴 > [설정] > [계정] > [쿠폰 등록]을 누릅니다.'
    ],
    iosGuide: [
      '넥슨 공식 프라시아 전기 웹 쿠폰 페이지에서 회원코드를 넣고 등록합니다.'
    ],
    officialCommunity: {
      website: 'https://wp.nexon.com/'
    },
    description: '결사원들과 함께 영지를 경영하고 거점을 점령하는 끝없는 대서사시.',
    coupons: [
      {
        id: 'cp-wp-01',
        code: 'PRASIA2026WAR',
        rewardSummary: '고급 형상 소환 선물 11회 1장 + 골드 1,500,000',
        rewards: [{ name: '골드', count: '1,500,000', icon: 'gold' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 890,
        dislikes: 12
      },
      {
        id: 'cp-wp-02',
        code: 'REALMGUILDGIFT',
        rewardSummary: '탈것 소환 선물 11회 1장 + 강화 주문서 20개',
        rewards: [{ name: '탈것 소환', count: '11회', icon: 'ticket' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 620,
        dislikes: 7
      }
    ]
  },
  {
    id: 'game-baryeon',
    slug: 'kingdom-of-winds-yeon',
    title: '바람의나라: 연',
    developer: '넥슨 / 슈퍼캣',
    genre: 'MMORPG',
    iconUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.5,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['바람의나라연', '바람의나라', '넥슨', '붉은보석', '환수'],
    redeemUrl: 'https://mcoupon.nexon.com/baram',
    androidGuide: [
      '게임 접속 후 메뉴 > [설정] > [계정] > [쿠폰 입력]에서 입력합니다.'
    ],
    iosGuide: [
      '넥슨 공식 바람의나라: 연 쿠폰 웹사이트에서 회원번호 입력 후 교환합니다.'
    ],
    officialCommunity: {
      website: 'https://baramy.nexon.com/'
    },
    description: '넥슨 최장수 명작 바람의나라의 감성을 그대로 담은 도트 그래픽 모바일 MMORPG.',
    coupons: [
      {
        id: 'cp-by-01',
        code: 'BARAM2026GIFT',
        rewardSummary: '붉은 보석 1,000개 + 환수소환석 99개 + 금전 2,000,000',
        rewards: [{ name: '붉은 보석', count: '1,000개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1150,
        dislikes: 10
      },
      {
        id: 'cp-by-02',
        code: 'DRAMATICYEAR',
        rewardSummary: '강화안정제 10개 + 비급서 상자 5개',
        rewards: [{ name: '강화안정제', count: '10개', icon: 'box' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 96,
        likes: 540,
        dislikes: 9
      }
    ]
  }
];
