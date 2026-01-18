# 1단계: 의존성 설치 및 빌드
FROM node:20-alpine AS builder

# 중요: better-sqlite3 같은 네이티브 모듈 빌드에 필요한 도구 설치
RUN apk add --no-cache libc6-compat python3 make g++

WORKDIR /app
COPY package*.json ./

# 모듈 설치 (네이티브 바이너리 재빌드 강제)
RUN npm install

COPY . .

# 만약 빌드 시점에 DB를 생성해야 한다면 주석을 해제하세요.
RUN npx drizzle-kit push

# Next.js 빌드 (이때 SQLite DB가 필요하다면 해당 위치에 있어야 함)
RUN npm run build

# 2단계: 실행 환경 구성
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# 필요한 파일 복사
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/sqlite.db ./sqlite.db 

EXPOSE 3000
CMD ["node", "server.js"]