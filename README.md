# React SNS

> 공부 목적으로 제작된 리액트로 만든 SNS

배포 링크 : https://react-sns-drab.vercel.app/  
참고 강의 : [인프런: 한 입 크기 실전 프로젝트](https://www.inflearn.com/course/%ED%95%9C-%EC%9E%85-%ED%81%AC%EA%B8%B0%EB%A1%9C-%EC%9E%98%EB%9D%BC%EB%A8%B9%EB%8A%94-%EC%8B%A4%EC%A0%84-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)

## 주요 기능

- 📝 **포스트 작성 및 관리** - 텍스트 + 다중 이미지 업로드
- 💬 **댓글 시스템** - 댓글 및 대댓글(중첩 구조) 지원
- ❤️ **좋아요 기능** - 실시간 반영 (Optimistic Update)
- 👤 **프로필 관리** - 닉네임, 자기소개, 아바타 커스터마이징
- 🔐 **인증 시스템** - 이메일 및 OAuth 소셜 로그인
- 🌓 **다크 모드** - 라이트/다크/시스템 테마 지원
- ♾️ **무한 스크롤** - 효율적인 포스트 피드

## 기술 스택

### Frontend

- **React 19** + **TypeScript** - UI 프레임워크
- **Vite** - 빌드 도구
- **React Router** - 라우팅
- **TailwindCSS** - 스타일링

### 상태 관리

- **Zustand** - 클라이언트 상태 (세션, 테마, 모달)
- **TanStack React Query** - 서버 상태 및 캐싱

### Backend & Database

- **Supabase** - BaaS (Backend as a Service)
  - PostgreSQL 데이터베이스
  - Authentication (이메일, OAuth)
  - Storage (이미지 저장소)

### UI Libraries

- **Radix UI**
- **Lucide React**
- **Sonner**
- **Embla Carousel**

## 프로젝트 구조

```
src/
├── api/              # Supabase API 호출 함수
├── components/       # React 컴포넌트
│   ├── ui/          # 재사용 가능한 UI 컴포넌트
│   ├── layout/      # 레이아웃 컴포넌트
│   ├── post/        # 포스트 관련 컴포넌트
│   ├── comment/     # 댓글 관련 컴포넌트
│   ├── profile/     # 프로필 관련 컴포넌트
│   └── modal/       # 모달 컴포넌트
├── hooks/           # Custom Hooks
│   ├── queries/     # React Query 훅 (데이터 페칭)
│   └── mutations/   # React Query Mutations (데이터 변경)
├── pages/           # 페이지 컴포넌트
├── store/           # Zustand 상태 저장소
├── lib/             # 유틸리티 및 설정
└── types.ts         # TypeScript 타입 정의
```
