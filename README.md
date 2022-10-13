<p align="center">
    <img width="200px;" src="https://raw.githubusercontent.com/woowacourse/atdd-subway-admin-frontend/master/images/main_logo.png"/>
</p>
<p align="center">
  <img alt="npm" src="https://img.shields.io/badge/npm-%3E%3D%205.5.0-blue">
  <img alt="node" src="https://img.shields.io/badge/node-%3E%3D%209.3.0-blue">
  <a href="https://edu.nextstep.camp/c/R89PYi5H" alt="nextstep atdd">
    <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fedu.nextstep.camp%2Fc%2FR89PYi5H">
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/next-step/atdd-subway-service">
</p>

<br>

# 인프라공방 샘플 서비스 - 지하철 노선도

<br>

## 🚀 Getting Started

### Install
#### npm 설치
```
cd frontend
npm install
```
> `frontend` 디렉토리에서 수행해야 합니다.

### Usage
#### webpack server 구동
```
npm run dev
```
#### application 구동
```
./gradlew clean build
```
<br>


## 1단계 - 화면 응답 개선하기

### 1. 웹 성능예산은 어느정도가 적당하다고 생각하시나요. 이 때, 서버 목표 응답시간은 어떻게 되나요?

#### 웹 성능 예산 / 서버 목표 응답시간

[https://infrastudy.kro.kr/](https://infrastudy.kro.kr/) 서비스의 웹 성능 예산은 다음과 같이 설정한다.
1. [pagespeed](https://pagespeed.web.dev) 테스트 내 Lighthouse 종합 성능 점수는 50점 이상이어야 한다. (as is 34점)
2. LTE 환경에서의 모바일 기기의 First Contentful Paint(FCP)는 3초 이하이어야 한다. (as is 14.7초)
3. LTE 환경에서의 모바일 기기의 Time to Interactive(TTI)는 7.3초 이하이어야 한다. (as is 15.2초)
4. 메인 페이지의 리소스 크기는 2.8MB 이하으로 제한한다. (as is 3.1MB)

<br>

#### WebPageTest, PageSpeed 테스트 진행 결과
- https://www.webpagetest.org/result/221012_BiDcN5_9N9/
- https://pagespeed.web.dev/report?url=https%3A%2F%2Finfrastudy.kro.kr%2F

<br>

#### 경쟁사와 비교

![img.png](img.png)
![img_2.png](img_2.png)

<br>

### 2. 성능 개선 결과를 공유해주세요 (Smoke, Load, Stress 테스트 결과)

위의 webpagetest, pagespeedtest 진행 결과 개선할 수 있는 지점들은 다음과 같다.
-[ ] gzip 압축을 이용하여 이미지 및 텍스트의 전송을 최적화하기
-[ ] 정적 파일들에 대해 cache 적용하여 요청수를 최소화하기
-[ ] TLS, HTTP 2.0 설정하여 웹 프로토콜 최적화하기 
-[ ] 정적 파일을 경량화하여 패킷의 크기 자체를 줄이기


#### gzip 압축을 이용하여 이미지 및 텍스트 압축하기

#### 정적 파일들에 대해 cache 적용하기

#### TLS, HTTP 2.0 설정하여 웹 프로토콜 최적화하기

#### 정적 파일을 경량화하여 패킷의 크기 자체를 줄이기


<br>

### 3. 어떤 부분을 개선해보셨나요? 과정을 설명해주세요

1. reverse proxy 개선
2. 정적 파일 경량화
3.



---

## 2단계 - 부하 테스트 
### 1. 부하테스트 전제조건은 어느정도로 설정하셨나요

### 2. Smoke, Load, Stress 테스트 스크립트와 결과를 공유해주세요

---

## 3단계 - 스케일 아웃

### 1. Launch Template 링크를 공유해주세요.

### 2. cpu 부하 실행 후 EC2 추가생성 결과를 공유해주세요. (Cloudwatch 캡쳐)

```sh
$ stress -c 2
```

---

## [추가] 로깅, 모니터링

### 1. 각 서버내 로깅 경로를 알려주세요 

### 2. Cloudwatch 대시보드 URL을 알려주세요
---

## [추가] WAS 개선하기
### 1. 성능 개선 결과를 공유해주세요 (Smoke, Load, Stress 테스트 결과)

### 2. 어떤 부분을 개선해보셨나요? 과정을 설명해주세요
