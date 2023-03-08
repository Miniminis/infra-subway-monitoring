// smoke.js
import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export let options = {
    stages: [
        {duration: '1m', target: 1}     //duration 동안 현재 사용자를 target 명으로 유지
    ],
    thresholds: {
        http_req_duration: ['p(99)<50'], // 99% of requests must complete below 50ms
    },
};

const BASE_URL = 'https://infra.subway-mhson.kro.kr';

function getPage(APIS) {
    for (const api of APIS) {
        const response = http.get(api);
        check(response, {
            'response code was 200': (response) => response.status == 200,
        });
        sleep(4);
    }
}

export default function () {
    //출발역 조회
    //도착역 조회
    //경로 검색
    const GET_PAGE_APIS = [
        `${BASE_URL}/stations`,
        `${BASE_URL}/stations`,
        `${BASE_URL}/paths?source=1&target=365`
    ];

    getPage(GET_PAGE_APIS);
};
