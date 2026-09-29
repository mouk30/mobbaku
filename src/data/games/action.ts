import { GameInfo } from '../../types';

export const actionGames: GameInfo[] = [
  {
    id: 'game-sl',
    slug: 'solo-leveling-arise',
    title: '나 혼자만 레벨업:어라이즈',
    developer: '넷마블 (Netmarble)',
    genre: '액션/전략',
    iconUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.8,
    totalCouponsCount: 6,
    activeCouponsCount: 4,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['나혼렙', '솔로레벨링', '어라이즈', '넷마블', '성진우', '마정석', '인기1위'],
    redeemUrl: 'https://coupon.netmarble.com/sololv',
    androidGuide: [
      '게임 접속 후 로비 우측 상단 [메뉴] > [옵션] > [계정] > [쿠폰 코드 입력]을 터치합니다.'
    ],
    iosGuide: [
      '넷마블 공식 쿠폰 교환소 웹페이지에 회원번호(UID)를 입력하고 코드를 교환합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/sololeveling_arise/home'
    },
    description: '전 세계 143억 뷰 K-웹툰의 전설, 나 혼자만 레벨업의 정식 모바일/PC 액션 RPG.',
    coupons: [
      {
        id: 'cp-sl-01',
        code: 'HUNTERSOLO2026',
        rewardSummary: '마정석 1,000개 + 골드 100,000 + 무기 강화석 50개',
        rewards: [{ name: '마정석', count: '1,000개', icon: 'diamond' }],
        expiresAt: '2026-10-15',
        isNew: true,
        isUrgent: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1248,
        dislikes: 12
      },
      {
        id: 'cp-sl-02',
        code: 'ARISELEVELUP09',
        rewardSummary: '커스텀 모집 티켓 10장 + 속성 룬 상자 10개',
        rewards: [{ name: '모집 티켓', count: '10장', icon: 'ticket' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 890,
        dislikes: 15
      },
      {
        id: 'cp-sl-03',
        code: 'WORLDHUNTERS',
        rewardSummary: '마정석 500개 + 골드 50,000',
        rewards: [{ name: '마정석', count: '500개', icon: 'diamond' }],
        expiresAt: '상시 사용 가능',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 100,
        likes: 2150,
        dislikes: 8
      },
      {
        id: 'cp-sl-04',
        code: 'SHADOWMONARCH',
        rewardSummary: '그림자 에너지 500개 + 영약 상자 5개',
        rewards: [{ name: '그림자 에너지', count: '500개', icon: 'potion' }],
        expiresAt: '2026-11-30',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 670,
        dislikes: 19
      }
    ]
  },
  {
    id: 'game-zzz',
    slug: 'zenless-zone-zero',
    title: '젠레스 존 제로 (ZZZ)',
    developer: '호요버스 (HoYoverse)',
    genre: '액션/전략',
    iconUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.8,
    totalCouponsCount: 5,
    activeCouponsCount: 4,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['젠존제', 'ZZZ', '호요버스', '폴리크롬', '뉴에리두'],
    redeemUrl: 'https://zenless.hoyoverse.com/redemption',
    androidGuide: [
      '게임 내 좌측 상단 메뉴(ESC) > [더보기] > [리딤코드]를 클릭하여 입력합니다.'
    ],
    iosGuide: [
      '호요버스 공식 젠레스 존 제로 리딤코드 웹사이트에서 서버/캐릭터 확인 후 입력합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/Zenless_Zone_Zero/home'
    },
    description: '공동 재해 속 문명 최후의 도시 뉴 에리두. 로프꾼이 되어 통쾌한 액션을 즐기세요!',
    coupons: [
      {
        id: 'cp-zzz-01',
        code: 'ZENLESSGIFT',
        rewardSummary: '폴리크롬 50개 + 선임 조사원 기록 2개 + 덴니 30,000',
        rewards: [{ name: '폴리크롬', count: '50개', icon: 'diamond' }],
        expiresAt: '상시 사용 가능',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 100,
        likes: 3120,
        dislikes: 10
      },
      {
        id: 'cp-zzz-02',
        code: 'NEWERIDU2026',
        rewardSummary: '폴리크롬 100개 + 뱅부 티켓 1장',
        rewards: [{ name: '폴리크롬', count: '100개', icon: 'diamond' }],
        expiresAt: '2026-10-28',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1250,
        dislikes: 14
      },
      {
        id: 'cp-zzz-03',
        code: 'SIXTHSTREETGIFT',
        rewardSummary: '폴리크롬 60개 + 에너지 드링크 1개',
        rewards: [{ name: '폴리크롬', count: '60개', icon: 'diamond' }],
        expiresAt: '2026-11-05',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 98,
        likes: 780,
        dislikes: 9
      },
      {
        id: 'cp-zzz-04',
        code: 'PROXYSPECIAL',
        rewardSummary: '폴리크롬 80개 + W엔진 전원 5개',
        rewards: [{ name: '폴리크롬', count: '80개', icon: 'diamond' }],
        expiresAt: '2026-10-18',
        isUrgent: true,
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 910,
        dislikes: 18
      }
    ]
  },
  {
    id: 'game-dfm',
    slug: 'dungeon-and-fighter-mobile',
    title: '던전앤파이터 모바일',
    developer: '넥슨 (Nexon)',
    genre: '액션/전략',
    iconUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.8,
    totalCouponsCount: 4,
    activeCouponsCount: 3,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['던파모바일', '던모', '넥슨', '테라', '골드', '격투가'],
    redeemUrl: 'https://mcoupon.nexon.com/dfm',
    androidGuide: [
      '게임 접속 후 메뉴 > [게임설정] > [계정] > [쿠폰 입력] 버튼을 누릅니다.'
    ],
    iosGuide: [
      '넥슨 공식 던전앤파이터 모바일 쿠폰 등록 웹페이지에 회원번호를 넣고 등록합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/dnfm/home'
    },
    description: '손끝으로 전해지는 극한의 콤보 타격감! 명작 벨트스크롤 2D 액션의 정점.',
    coupons: [
      {
        id: 'cp-df-01',
        code: 'DNFM2026HEROES',
        rewardSummary: '테라 10,000개 + 골드 3,000,000 + 피로도 30 회복 영약 2개',
        rewards: [{ name: '테라', count: '10,000개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 2130,
        dislikes: 12
      },
      {
        id: 'cp-df-02',
        code: 'ARADCHAMPION',
        rewardSummary: '에픽 항아리 1개 + 라이언 코크스 500개',
        rewards: [{ name: '에픽 항아리', count: '1개', icon: 'box' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1420,
        dislikes: 9
      },
      {
        id: 'cp-df-03',
        code: 'FIGHTERSPIRIT',
        rewardSummary: '칼레이도 박스 10개 + 골드 1,000,000',
        rewards: [{ name: '칼레이도 박스', count: '10개', icon: 'box' }],
        expiresAt: '2026-10-20',
        isUrgent: true,
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 980,
        dislikes: 14
      }
    ]
  },
  {
    id: 'game-gt',
    slug: 'guardian-tales',
    title: '가디언 테일즈 (Guardian Tales)',
    developer: '카카오게임즈 / 콩스튜디오',
    genre: '액션/전략',
    iconUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.9,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['가테', '가디언테일즈', '젬', '소환컨트롤', '카카오게임즈'],
    redeemUrl: 'https://guardiantales.kakaogames.com/coupon',
    androidGuide: [
      '게임 접속 후 메뉴 > [옵션] > [계정 설정] > [쿠폰 코드 입력]에서 입력합니다.'
    ],
    iosGuide: [
      '카카오게임즈 가디언 테일즈 공식 쿠폰 페이지에 회원번호(UserNumber)와 코드를 입력합니다.'
    ],
    officialCommunity: {
      cafe: 'https://cafe.daum.net/GuardianTales'
    },
    description: '도트 어드벤처 퍼즐과 패러디 유머, 그리고 심금을 울리는 감동 스토리의 명작!',
    coupons: [
      {
        id: 'cp-gt-01',
        code: 'GUARDIAN2026LOVE',
        rewardSummary: '무료 젬 3,000개 (10연차) + 커피(스태미나) 100개',
        rewards: [{ name: '무료 젬', count: '3,000개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 100,
        likes: 2450,
        dislikes: 6
      },
      {
        id: 'cp-gt-02',
        code: 'PRINCESSGIFT26',
        rewardSummary: '히어로 크리스탈 50개 + 옵션 변경 스톤 5개',
        rewards: [{ name: '히어로 크리스탈', count: '50개', icon: 'diamond' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 98,
        likes: 1220,
        dislikes: 8
      }
    ]
  },
  {
    id: 'game-bs',
    slug: 'brawl-stars',
    title: '브롤스타즈 (Brawl Stars)',
    developer: '슈퍼셀 (Supercell)',
    genre: '액션/전략',
    iconUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.8,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['브롤스타즈', '브롤', '슈퍼셀', '보석', '스타드롭', '핀'],
    androidGuide: [
      '게임 내 상점 > 우측 끝으로 이동 > [크리에이터 부스트/코드]를 입력하거나 공식 리딤 링크를 누릅니다.'
    ],
    iosGuide: [
      '슈퍼셀 스토어 공식 리딤 페이지 또는 인게임 상점 크리에이터 코드란에 등록합니다.'
    ],
    officialCommunity: {
      cafe: 'https://cafe.naver.com/brawlstars'
    },
    description: '3분 안에 끝나는 짜릿한 3대3 실시간 멀티플레이 슈팅 배틀의 최강자!',
    coupons: [
      {
        id: 'cp-bs-01',
        code: 'BRAWLSTARS2026',
        rewardSummary: '전설 스타 드롭 1개 + 보석 50개 + 1,000 코인',
        rewards: [{ name: '스타 드롭', count: '1개', icon: 'box' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 3820,
        dislikes: 14
      },
      {
        id: 'cp-bs-02',
        code: 'HYPERCHARGELOVE',
        rewardSummary: '하이퍼차지 스타 드롭 1개 + 한정 핀 1개',
        rewards: [{ name: '하이퍼차지', count: '1개', icon: 'box' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 98,
        likes: 2190,
        dislikes: 11
      }
    ]
  },
  {
    id: 'game-cr',
    slug: 'clash-royale',
    title: '클래시 로얄 (Clash Royale)',
    developer: '슈퍼셀 (Supercell)',
    genre: '액션/전략',
    iconUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.7,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['클래시로얄', '클로얄', '슈퍼셀', '타워디펜스', '보석'],
    androidGuide: [
      '상점 탭 맨 아래 크리에이터 부스트 코드 또는 공식 웹 리워드 링크를 통해 수령합니다.'
    ],
    iosGuide: [
      '슈퍼셀 공식 리워드 웹 링크를 터치하여 인게임으로 바로 이동해 보상을 받습니다.'
    ],
    officialCommunity: {
      cafe: 'https://cafe.naver.com/clashroyale'
    },
    description: '실시간으로 펼쳐지는 짜릿한 카드 덱 전략 배틀! 타워를 파괴하고 트로피를 획득하세요.',
    coupons: [
      {
        id: 'cp-cr-01',
        code: 'ROYALE2026GIFT',
        rewardSummary: '와일드 샤드 1개 + 보석 100개 + 골드 50,000',
        rewards: [{ name: '보석', count: '100개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 2310,
        dislikes: 10
      },
      {
        id: 'cp-cr-02',
        code: 'EVOLUTIONMAGIC',
        rewardSummary: '마법 상자 1개 + 한정 감정표현 1개',
        rewards: [{ name: '마법 상자', count: '1개', icon: 'box' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 1450,
        dislikes: 12
      }
    ]
  }
];
