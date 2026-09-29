import { GameInfo } from '../../types';

export const rpgGames: GameInfo[] = [
  {
    id: 'game-gi',
    slug: 'genshin-impact',
    title: '원신 (Genshin Impact)',
    developer: '호요버스 (HoYoverse)',
    genre: '수집형 RPG',
    iconUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.9,
    totalCouponsCount: 6,
    activeCouponsCount: 4,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['원신', '호요버스', '원석', '리딤코드', '나타', '페이몬', '상시쿠폰'],
    redeemUrl: 'https://genshin.hoyoverse.com/ko/gift',
    androidGuide: [
      '게임 내 좌측 상단 [페이몬 아이콘]을 터치합니다.',
      '좌측 하단 [설정] > [계정] > [리딤코드 교환]의 [교환하기]를 누릅니다.',
      '복사한 코드를 입력하면 인게임 우편함으로 원석이 즉시 배달됩니다.'
    ],
    iosGuide: [
      '호요버스 공식 리딤코드 교환 웹사이트로 접속합니다.',
      '게임 계정 로그인 후 서버를 선택하고 코드를 붙여넣습니다.',
      '게임 접속 후 우편함에서 수령합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/Genshin/home',
      cafe: 'https://cafe.naver.com/genshin'
    },
    description: '티바트 대륙에서 펼쳐지는 모험과 신비의 오픈월드 RPG.',
    coupons: [
      {
        id: 'cp-gi-01',
        code: 'GENSHINGIFT',
        rewardSummary: '원석 50개 + 영웅의 경험 3개',
        rewards: [{ name: '원석', count: '50개', icon: 'diamond' }],
        expiresAt: '상시 사용 가능',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 100,
        likes: 5410,
        dislikes: 21
      },
      {
        id: 'cp-gi-02',
        code: 'NATLANEXPLORER2026',
        rewardSummary: '원석 100개 + 모라 50,000 + 정제용 마법 광물 5개',
        rewards: [{ name: '원석', count: '100개', icon: 'diamond' }],
        expiresAt: '2026-10-20',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1650,
        dislikes: 18
      },
      {
        id: 'cp-gi-03',
        code: 'VOYAGEWITHYOU',
        rewardSummary: '원석 60개 + 모험가의 경험 5개',
        rewards: [{ name: '원석', count: '60개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 920,
        dislikes: 11
      },
      {
        id: 'cp-gi-04',
        code: 'PRIMOSTARGIFT',
        rewardSummary: '원석 80개 + 모라 30,000',
        rewards: [{ name: '원석', count: '80개', icon: 'diamond' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 810,
        dislikes: 22
      }
    ]
  },
  {
    id: 'game-hsr',
    slug: 'honkai-star-rail',
    title: '붕괴: 스타레일',
    developer: '호요버스 (HoYoverse)',
    genre: '수집형 RPG',
    iconUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.8,
    totalCouponsCount: 5,
    activeCouponsCount: 4,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['스타레일', '붕스타', '성옥', '은하열차', '호요버스'],
    redeemUrl: 'https://hsr.hoyoverse.com/gift',
    androidGuide: [
      '게임 내 좌측 상단 스마트폰 아이콘을 터치합니다.',
      '우측 상단 [...] 더보기 버튼에서 [리딤코드]를 터치하고 코드를 입력합니다.'
    ],
    iosGuide: [
      '호요버스 스타레일 공식 리딤코드 교환소 웹사이트에서 계정 로그인 후 교환합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/HonkaiStarRail/home'
    },
    description: '은하열차를 타고 무한한 우주를 여행하는 스페이스 판타지 RPG.',
    coupons: [
      {
        id: 'cp-hsr-01',
        code: 'STARRAILGIFT',
        rewardSummary: '성옥 50개 + 여행 가이드 2개 + 10,000 신용포인트',
        rewards: [{ name: '성옥', count: '50개', icon: 'diamond' }],
        expiresAt: '상시 사용 가능',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 100,
        likes: 4210,
        dislikes: 14
      },
      {
        id: 'cp-hsr-02',
        code: 'TRAILBLAZER2026',
        rewardSummary: '성옥 100개 + 신용포인트 50,000',
        rewards: [{ name: '성옥', count: '100개', icon: 'diamond' }],
        expiresAt: '2026-10-25',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1420,
        dislikes: 9
      },
      {
        id: 'cp-hsr-03',
        code: 'PENACONYDREAM',
        rewardSummary: '성옥 60개 + 농축 에테르 4개',
        rewards: [{ name: '성옥', count: '60개', icon: 'diamond' }],
        expiresAt: '2026-11-10',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 98,
        likes: 950,
        dislikes: 12
      },
      {
        id: 'cp-hsr-04',
        code: 'STELLARWARP99',
        rewardSummary: '별의 궤도 티켓 1장 + 성옥 80개',
        rewards: [{ name: '별의 궤도 티켓', count: '1장', icon: 'ticket' }],
        expiresAt: '2026-10-18',
        isNew: true,
        isUrgent: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1120,
        dislikes: 15
      }
    ]
  },
  {
    id: 'game-ww',
    slug: 'wuthering-waves',
    title: '명조: 워더링 웨이브',
    developer: '쿠로게임즈 (Kuro Games)',
    genre: '수집형 RPG',
    iconUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.8,
    totalCouponsCount: 4,
    activeCouponsCount: 3,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['명조', '워더링웨이브', '쿠로게임즈', '별의소리', '오픈월드액션'],
    androidGuide: [
      '게임 접속 후 메뉴 > [설정] > [기타 설정] 메뉴로 들어갑니다.',
      '[리딤코드] 입력창에 복사한 코드를 넣고 교환합니다.'
    ],
    iosGuide: [
      '아이폰도 게임 내 [설정] > [기타 설정] > [리딤코드]에서 즉시 입력 가능합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/WutheringWaves/home'
    },
    description: '고난도 패링과 회피 카운터가 돋보이는 차세대 오픈월드 수집형 액션 RPG.',
    coupons: [
      {
        id: 'cp-ww-01',
        code: 'WUTHERINGGIFT',
        rewardSummary: '별의 소리 50개 + 고급 공명 촉진제 2개 + 10,000 클램 코인',
        rewards: [{ name: '별의 소리', count: '50개', icon: 'diamond' }],
        expiresAt: '상시 사용 가능',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 100,
        likes: 2840,
        dislikes: 12
      },
      {
        id: 'cp-ww-02',
        code: 'ROVER2026WAVE',
        rewardSummary: '별의 소리 100개 + 특급 에너지 코어 2개',
        rewards: [{ name: '별의 소리', count: '100개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1530,
        dislikes: 9
      },
      {
        id: 'cp-ww-03',
        code: 'SOLARISSPECIAL',
        rewardSummary: '별의 소리 80개 + 클램 코인 50,000',
        rewards: [{ name: '별의 소리', count: '80개', icon: 'diamond' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 890,
        dislikes: 15
      }
    ]
  },
  {
    id: 'game-crk',
    slug: 'cookie-run-kingdom',
    title: '쿠키런: 킹덤',
    developer: '데브시스터즈 (Devsisters)',
    genre: '수집형 RPG',
    iconUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.7,
    totalCouponsCount: 4,
    activeCouponsCount: 3,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['쿠키런', '쿠킹덤', '데브시스터즈', '크리스탈', '무지개큐브'],
    redeemUrl: 'https://game.devsisters.com/ko/coupon/ck',
    androidGuide: [
      '데브시스터즈 공식 쿠폰 입력 웹사이트에 접속합니다.',
      'DevPlay 계정(이메일)과 쿠폰 번호를 입력합니다.'
    ],
    iosGuide: [
      '데브시스터즈 공식 쿠폰 입력 사이트에서 DevPlay 계정 이메일과 코드를 입력합니다.'
    ],
    officialCommunity: {
      cafe: 'https://cafe.naver.com/crkingdom'
    },
    description: '귀여운 쿠키들과 함께 왕국을 건설하고 모험을 떠나는 국민 수집형 RPG!',
    coupons: [
      {
        id: 'cp-crk-01',
        code: 'KINGDOM2026FESTA',
        rewardSummary: '크리스탈 3,000개 + 무지개 큐브 1,000개',
        rewards: [{ name: '크리스탈', count: '3,000개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 3120,
        dislikes: 18
      },
      {
        id: 'cp-crk-02',
        code: 'DEVPLAYLOVE2026',
        rewardSummary: '크리스탈 1,500개 + 특별 뽑기 쿠키커터 5개',
        rewards: [{ name: '크리스탈', count: '1,500개', icon: 'diamond' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1450,
        dislikes: 12
      },
      {
        id: 'cp-crk-03',
        code: 'BRAVECOOKIEGIFT',
        rewardSummary: '크리스탈 1,000개 + 경험의 별사탕 500개',
        rewards: [{ name: '크리스탈', count: '1,000개', icon: 'diamond' }],
        expiresAt: '상시 사용 가능',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 100,
        likes: 2100,
        dislikes: 6
      }
    ]
  },
  {
    id: 'game-e7',
    slug: 'epic-seven',
    title: '에픽세븐 (Epic Seven)',
    developer: '스마일게이트 (Smilegate)',
    genre: '수집형 RPG',
    iconUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.6,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['에픽세븐', '스마일게이트', '성약의책갈피', '하늘석', '애니메이션RPG'],
    androidGuide: [
      '로비 우측 상단 이벤트 배너 > [쿠폰 교환소] 배너 터치 후 코드를 입력합니다.'
    ],
    iosGuide: [
      '공식 커뮤니티 스토브(STOVE) 리딤코드 페이지에서 회원번호 입력 후 보상을 수령합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/EpicSeven/home'
    },
    description: '한 편의 애니메이션을 보는 듯한 고퀄리티 전투 연출과 깊이 있는 턴제 전략 RPG.',
    coupons: [
      {
        id: 'cp-e7-01',
        code: 'EPIC7YEAR2026',
        rewardSummary: '하늘석 500개 + 성약의 책갈피 50개 (10연차)',
        rewards: [{ name: '하늘석', count: '500개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1820,
        dislikes: 10
      },
      {
        id: 'cp-e7-02',
        code: 'HEIRTHANKYOU',
        rewardSummary: '골드 1,000,000 + 행동력 200개 + 룬 상자 10개',
        rewards: [{ name: '골드', count: '1,000,000', icon: 'gold' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 98,
        likes: 950,
        dislikes: 8
      }
    ]
  },
  {
    id: 'game-bd2',
    slug: 'browndust-2',
    title: '브라운더스트2 (BrownDust 2)',
    developer: '네오위즈 (Neowiz)',
    genre: '수집형 RPG',
    iconUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.8,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['브라운더스트2', '네오위즈', '다이아', '뽑기권', '미소녀RPG'],
    androidGuide: [
      '게임 내 메뉴 > [설정] > [계정 연동] > [쿠폰 등록]에서 입력합니다.'
    ],
    iosGuide: [
      '공식 네오위즈 브라운더스트2 웹 쿠폰 교환소에서 닉네임과 함께 코드를 등록합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/BrownDust2/home'
    },
    description: '하이엔드 2D 그래픽과 감성적인 레트로 콘솔 스타일의 턴제 어드벤처 RPG.',
    coupons: [
      {
        id: 'cp-bd2-01',
        code: 'BD2SPECIAL2026',
        rewardSummary: '다이아 2,000개 + 뽑기권 10장',
        rewards: [{ name: '다이아', count: '2,000개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1420,
        dislikes: 8
      },
      {
        id: 'cp-bd2-02',
        code: 'SUMMERMEMORIES',
        rewardSummary: '다이아 1,000개 + 골드 500,000',
        rewards: [{ name: '다이아', count: '1,000개', icon: 'diamond' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 830,
        dislikes: 12
      }
    ]
  },
  {
    id: 'game-soc',
    slug: 'sword-of-convallaria',
    title: '소드 오브 콘발라리아',
    developer: 'XD Entertainment',
    genre: '수집형 RPG',
    iconUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.7,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['소드오브콘발라리아', '콘발라리아', 'SRPG', '택틱스', '도트'],
    androidGuide: [
      '화면 좌측 상단 프로필 > [설정] > [계정] > [리딤코드]를 클릭하여 입력합니다.'
    ],
    iosGuide: [
      '아이폰도 인게임 [프로필] > [설정] > [계정] > [리딤코드]에서 즉시 입력 가능합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/Sword_of_Convallaria/home'
    },
    description: '중세 클래식 명작 택틱스의 감성을 계승한 픽셀 정통 전략 SRPG.',
    coupons: [
      {
        id: 'cp-soc-01',
        code: 'SOCLAUNCH2026',
        rewardSummary: '희망의 결정 500개 + 인연의 만남 5개 + 50,000 낙원 코인',
        rewards: [{ name: '희망의 결정', count: '500개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1120,
        dislikes: 14
      },
      {
        id: 'cp-soc-02',
        code: 'CONVALLARIAGIFT',
        rewardSummary: '희망의 결정 300개 + 공용 레벨업 재료 20개',
        rewards: [{ name: '희망의 결정', count: '300개', icon: 'diamond' }],
        expiresAt: '상시 사용 가능',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 100,
        likes: 890,
        dislikes: 5
      }
    ]
  },
  {
    id: 'game-smw',
    slug: 'summoners-war',
    title: '서머너즈 워: 천공의 아레나',
    developer: '컴투스 (Com2uS)',
    genre: '수집형 RPG',
    iconUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.6,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['서머너즈워', '컴투스', '신비의소환서', '크리스탈', '천공의아레나'],
    redeemUrl: 'https://event.withhive.com/ci/smon/evt_coupon',
    androidGuide: [
      '게임 내 우측 상단 [이벤트] 아이콘 > [쿠폰 교환소] 배너에서 입력합니다.'
    ],
    iosGuide: [
      '컴투스 하이브 공식 서머너즈워 쿠폰 링크 페이지에서 서버/하이브ID와 코드를 입력합니다.'
    ],
    officialCommunity: {
      cafe: 'https://cafe.naver.com/smonwar'
    },
    description: '전 세계 2억 소환사가 열광한 글로벌 턴제 RPG의 살아있는 전설.',
    coupons: [
      {
        id: 'cp-smw-01',
        code: 'SW2026GLOBAL',
        rewardSummary: '신비의 소환서 10장 + 크리스탈 300개 + 에너지 200개',
        rewards: [{ name: '신비의 소환서', count: '10장', icon: 'ticket' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1650,
        dislikes: 12
      },
      {
        id: 'cp-smw-02',
        code: 'SUMMONARENA99',
        rewardSummary: '마나석 500,000 + 4성 무지개몬 2마리',
        rewards: [{ name: '마나석', count: '500,000', icon: 'gold' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 780,
        dislikes: 9
      }
    ]
  }
];
