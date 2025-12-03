
# YAHAIT Landing Page

This is a code bundle for YAHAIT Landing Page. The original project is available at https://www.figma.com/design/gxKUsDy8ZZWVFelhwIlzeL/Landing-Page-Design.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## GitHub Pages 배포

이 프로젝트는 `yahait-cs-page` 리포지토리용으로 설정되어 있습니다.
배포 URL: `https://yahait-cs.github.io/yahait-cs-page/`

### 자동 배포 (권장)

1. GitHub 리포지토리 (https://github.com/yahait-cs/yahait-cs-page)에 코드를 푸시합니다.
2. 리포지토리 Settings > Pages로 이동합니다.
3. Source를 "GitHub Actions"로 설정합니다.
4. `main` 브랜치에 푸시하면 자동으로 배포됩니다.

### Base 경로 설정

현재 `vite.config.ts`와 GitHub Actions 워크플로우가 `/yahait-cs-page/`로 설정되어 있습니다.

### 수동 배포

```bash
npm run build
# dist 폴더의 내용을 gh-pages 브랜치에 푸시
```
  