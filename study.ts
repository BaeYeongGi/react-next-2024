/*

[ page.tsx & Layout.tsx ]

1) 주소에 "/" 입력시 root react-router-dom 과 다르게 수동적으로 route를 관리할 필요가 없음 home -> <Home/>
2) app 내부에 폴더를 생성함으로서 하나의 페이지가 될 수 있다고 알려줌 -> Next JS가 렌더링 할 UI를 (page.tsx) 제공해야함
3)
<Layout>
  {components} children prop
</Layout>
위와 같이 페이지 URL을 통해 인식 후 다른 컴포넌트들을 렌더링함 
4) 하위 페이지에 layout.tsx 생성 가능 즉 하위 페이지에만 사용하고싶은 공통 컴포넌트들을 사용할 수도 있음 (대체X)(중첩 가능)

[ CSR, SSR & 'use client' ]

/*
1) 모든 컴포넌트들은 server side 에서 먼저 render가 됨
2) client 에서 hydrate (interactive)되는 component는 'use client' 지시어를 갖고 있는 component 들이 해당 됨
└ client 에서 interactive 해야 한 컴포넌트는 'use client' 가 필요함
3) 정적으로 있을만한 콘텐츠는 hydrate 를 할 필요가 없음 
4) 'use client' backend에서 render 되고, frontend 에서 hydrate & interactive 됨을 의미
5) 서버 컴포넌트와 클라이언트 컴포넌트를 구분함으로서 사용자가 다운받을 javascript의 양이 적어짐을 의미
6) client 컴포넌트 안에는 server 컴포넌트를 가질 수 있음
7) server 컴포넌트 안에는 client 컴포넌트를 가질 수 없음
7) console → terminal server-component / browser client-component

[ routes Group ]

1) (home) (movies) 괄호 폴더는 URL에 영향을 미치지 않음
└ /home 을 생성하지 않음

[ metadata ]

1) export const metadata 의 경우 중첩되지 않고 병합됨
2) page or layout 에서만 내보낼 수 있고 컴포넌트에선 내보낼 수 없다.
3) server 컴포넌트에만 있을 수 있다

[ dynamic routes ]

1) movies/[id] 동적으로 어떤 페이지가 들어가도 된다는 것을 사용하게 함
2) props 를 조회하면 url parameter 를 조회할 수 있음 params & searchParam 

[ DATA fetching ]

1) Next js 로 데이터 패칭을 위해서 useState 나 useEffect loading 상태를 사용하지 않아도 됨.
2) data fetching loading 상태도 백엔드에서 일어나는 상태
3) 개발자도구의 Network 탭에서도 api가 노출되지 않는 상태
4) Suspense 컴포넌트를 이용해서 필요한 UI만 먼저 노출 후 fetch가 필요한 컴포넌트만 로딩표시를 할 수 있음(로딩상태 분리가능, 기존 react 기능)
└ loading.tsx의 경우 페이지 전체가 로딩

[ Error Handling ]
1) error.tsx 생성함으로서 사용자에게 보여지는 에러페이지를 사전에 준비할 수 있음
  └ 해당 페이지에만 에러 UI를 노출할 수 있음

[ CSS Modules ]
1) {filename}.module.css 와 같은 형식의 파일명으로 컴포넌트와 연결 후 사용 가능

[ Dynamic Metadata ]
1) export async function generateMetadata() 함수를 통해 동적인 meta 내용을 수정할 수 있음
*/

