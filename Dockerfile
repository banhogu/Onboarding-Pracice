# Base 이미지 선택 (Next.js는 Node.js 환경 필요)
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json 및 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 프로젝트 파일 복사
COPY . .

# Next.js 빌드
RUN npm run build

# 애플리케이션 실행
CMD ["npm", "start"]

# 애플리케이션이 실행될 포트
EXPOSE 3000