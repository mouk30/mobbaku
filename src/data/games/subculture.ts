import { GameInfo } from '../../types';

export const subcultureGames: GameInfo[] = [
  {
    id: 'game-ba',
    slug: 'blue-archive',
    title: '블루 아카이브 (Blue Archive)',
    developer: '넥슨게임즈 (Nexon Games)',
    genre: '서브컬처',
    iconUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.9,
    totalCouponsCount: 4,
    activeCouponsCount: 3,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['블루아카이브', '몰루', '넥슨', '청휘석', '키보토스', '선생님'],
    redeemUrl: 'https://mcoupon.nexon.com/bluearchive',
    androidGuide: [
      '로비 우측 상단 메뉴 모음 > [계정] > [쿠폰] 버튼을 누르고 코드를 입력합니다.'
    ],
    iosGuide: [
      '넥슨 공식 블루 아카이브 쿠폰 등록 포털에서 회원코드(UID) 입력 후 교환합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/bluearchive/home'
    },
    description: '학원도시 키보토스의 선생님이 되어 귀엽고 매력적인 학생들과 함께하는 밝고 청량한 청춘 스토리 RPG!',
    coupons: [
      {
        id: 'cp-ba-01',
        code: 'BLUEARCHIVE2026',
        rewardSummary: '청휘석 1,200개 (10연차) + 최상급 전술 교육 BD 상자 3개',
        rewards: [{ name: '청휘석', count: '1,200개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 2450,
        dislikes: 8
      },
      {
        id: 'cp-ba-02',
        code: 'KIVOTOSMEMORIAL',
        rewardSummary: '청휘석 600개 + 1,000,000 크레딧',
        rewards: [{ name: '청휘석', count: '600개', icon: 'diamond' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1320,
        dislikes: 10
      },
      {
        id: 'cp-ba-03',
        code: 'SENSEITHANKYOU',
        rewardSummary: '청휘석 300개 + 기초 전술 교육 BD 선택권 10개',
        rewards: [{ name: '청휘석', count: '300개', icon: 'diamond' }],
        expiresAt: '2026-10-18',
        isUrgent: true,
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 910,
        dislikes: 12
      }
    ]
  },
  {
    id: 'game-nk',
    slug: 'goddess-of-victory-nikke',
    title: '승리의 여신: 니케',
    developer: '시프트업 (Shift Up)',
    genre: '서브컬처',
    iconUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.8,
    totalCouponsCount: 4,
    activeCouponsCount: 3,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['니케', '승리의여신', '시프트업', '쥬얼', '고급모집'],
    androidGuide: [
      '로비 우측 상단 공지사항 벨 아이콘 > [이벤트 공지] > [CDK 교환 코드] 배너에서 입력합니다.'
    ],
    iosGuide: [
      '아이폰도 인게임 [공지사항] > [이벤트 공지] > [CDK 교환 코드]에서 바로 입력 가능합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/nikke/home'
    },
    description: '지휘관이 되어 독보적인 매력의 니케들과 함께 지상을 탈환하는 건슈팅 미소녀 RPG.',
    coupons: [
      {
        id: 'cp-nk-01',
        code: 'NIKKE2026SPECIAL',
        rewardSummary: '쥬얼 300개 + 고급 모집 티켓 2장',
        rewards: [{ name: '쥬얼', count: '300개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1850,
        dislikes: 11
      },
      {
        id: 'cp-nk-02',
        code: 'COMMUNITYGIFT26',
        rewardSummary: '쥬얼 150개 + 크레디트 케이스 2시간 2개',
        rewards: [{ name: '쥬얼', count: '150개', icon: 'diamond' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 920,
        dislikes: 7
      },
      {
        id: 'cp-nk-03',
        code: 'COMMANDERREWARD',
        rewardSummary: '쥬얼 200개 + 코어 더스트 케이스 2개',
        rewards: [{ name: '쥬얼', count: '200개', icon: 'diamond' }],
        expiresAt: '2026-10-14',
        isUrgent: true,
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 740,
        dislikes: 14
      }
    ]
  },
  {
    id: 'game-trickcal',
    slug: 'trickcal-revive',
    title: '트릭컬 리바이브 (Trickcal Re:vive)',
    developer: '에피드게임즈 (Epidgames)',
    genre: '서브컬처',
    iconUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.9,
    totalCouponsCount: 4,
    activeCouponsCount: 3,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['트릭컬', '볼따구', '에피드게임즈', '엘리프', '모바일서브컬처'],
    androidGuide: [
      '게임 접속 후 메뉴 > [설정] > [기타] > [쿠폰 번호 입력] 버튼을 터치합니다.'
    ],
    iosGuide: [
      '아이폰도 인게임 메뉴 > [설정] > [기타] > [쿠폰 번호 입력]에서 직접 수령할 수 있습니다.'
    ],
    officialCommunity: {
      cafe: 'https://cafe.naver.com/trickcal'
    },
    description: '말랑말랑한 볼따구 요정들과 유쾌한 스토리가 가득한 대세 서브컬처 오토배틀러 수집형 게임!',
    coupons: [
      {
        id: 'cp-tc-01',
        code: 'TRICKCAL2026LOVE',
        rewardSummary: '엘리프 2,000개 + 뽑기권 10장 + 골드 500,000',
        rewards: [{ name: '엘리프', count: '2,000개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 2190,
        dislikes: 7
      },
      {
        id: 'cp-tc-02',
        code: 'BOLTTAGULOVE',
        rewardSummary: '엘리프 1,000개 + 마카롱 20개',
        rewards: [{ name: '엘리프', count: '1,000개', icon: 'diamond' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 98,
        likes: 1340,
        dislikes: 6
      },
      {
        id: 'cp-tc-03',
        code: 'MAYORSECRETS',
        rewardSummary: '엘리프 500개 + 모카롱 10개',
        rewards: [{ name: '엘리프', count: '500개', icon: 'diamond' }],
        expiresAt: '상시 사용 가능',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 100,
        likes: 1680,
        dislikes: 4
      }
    ]
  },
  {
    id: 'game-rev',
    slug: 'reverse-1999',
    title: '리버스: 1999 (Reverse: 1999)',
    developer: '블루포치 (Bluepoch)',
    genre: '서브컬처',
    iconUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.8,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS', 'PC'],
    tags: ['리버스1999', '타임키퍼', '순결의빗방울', '모바일서브컬처'],
    androidGuide: [
      '게임 접속 후 메뉴 > [설정] > [계정] > [교환 코드]를 눌러 입력합니다.'
    ],
    iosGuide: [
      '아이폰도 인게임 메뉴 > [설정] > [계정] > [교환 코드]에서 바로 입력 가능합니다.'
    ],
    officialCommunity: {
      lounge: 'https://game.naver.com/lounge/Reverse_1999/home'
    },
    description: '시간이 거꾸로 흐르는 20세기 세기말 미스터리 어드벤처 턴제 카드 RPG.',
    coupons: [
      {
        id: 'cp-rev-01',
        code: 'REVERSE1999GIFT',
        rewardSummary: '순결의 빗방울 60개 + 톱니 동전 10,000 + 미세 입자 10,000',
        rewards: [{ name: '순결의 빗방울', count: '60개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1240,
        dislikes: 9
      },
      {
        id: 'cp-rev-02',
        code: 'TIMETRAVELER26',
        rewardSummary: '순결의 빗방울 120개 + 황무지 패키지',
        rewards: [{ name: '순결의 빗방울', count: '120개', icon: 'diamond' }],
        expiresAt: '2026-11-20',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 98,
        likes: 890,
        dislikes: 8
      }
    ]
  },
  {
    id: 'game-fgo',
    slug: 'fate-grand-order',
    title: '페이트/그랜드 오더 (FGO 한그오)',
    developer: '넷마블 / 라센글',
    genre: '서브컬처',
    iconUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=200&h=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=400&q=80',
    rating: 4.7,
    totalCouponsCount: 3,
    activeCouponsCount: 2,
    lastUpdated: '2026-09-26',
    platforms: ['Android', 'iOS'],
    tags: ['페그오', '한그오', '성정석', '넷마블', '호부'],
    androidGuide: [
      '넷마블 페그오 공식 이벤트 페이지에 접속하여 유저 프렌드 코드와 쿠폰을 입력합니다.'
    ],
    iosGuide: [
      '공식 웹 쿠폰 교환 페이지에서 9자리 프렌드 ID와 코드를 입력합니다.'
    ],
    officialCommunity: {
      cafe: 'https://cafe.naver.com/fategokr'
    },
    description: '타입문 Fate 시리즈의 방대한 서사와 성배전쟁의 감동을 그대로 담은 정통 모바일 RPG.',
    coupons: [
      {
        id: 'cp-fgo-01',
        code: 'FGOKOREA2026',
        rewardSummary: '성정석 30개 (10연차) + 호부 5장 + 황금색 과일 10개',
        rewards: [{ name: '성정석', count: '30개', icon: 'diamond' }],
        expiresAt: '2026-10-31',
        isNew: true,
        status: 'active',
        verifiedDate: '2026-09-26 검증완료',
        successRate: 99,
        likes: 1720,
        dislikes: 12
      },
      {
        id: 'cp-fgo-02',
        code: 'CHALDEASUPPORT',
        rewardSummary: '호부 3장 + 대용량 QP 상자',
        rewards: [{ name: '호부', count: '3장', icon: 'ticket' }],
        expiresAt: '2026-11-15',
        status: 'active',
        verifiedDate: '2026-09-25 검증완료',
        successRate: 97,
        likes: 910,
        dislikes: 10
      }
    ]
  }
];
