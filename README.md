# rendering 최적화의 관하여...

## useMemo, React.memo, useCallBack은 Redux branch에 결과적으로 다 써놓았습니다.

- src/pages의 Home.jsx, Detail.jsx
- src/Components의 Footer.jsx, Form.jsx, Header.jsx, Layout.jsx, LetterList.jsx, NavigateBar.jsx
  각 컴포넌트에 써놓았지만 제가 잘 작성한지 사실 '감'? 이 잘 안잡힙니다...
  그러나 무작정 감이 안잡힌다라기 보단,

Component, function, Calculate Value의 값을 혼자서 구별하고 그의 걸 맞는 dependency 배열의 value들을 써놓아 봤습니다.

## Router- useNavigate의 re rendering

```javascript

// 상위 컴포넌트
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`detail/:member/:id`} element={<Detail />} />
      <Route path="*" element={<h1>404 찾을수 없으셈</h1>} />
    </Routes>
  </Layout>

--------------------
// 하위 컴포넌트
 Home.jsx

 <NavigateBar />
 <Form />
 <LetterList />
```

Header에 오른쪽 상단 로고에 useNavigate를 넣어놨습니다.

Home안에 LetterList들에 각 comment를 누르면

Detail페이지로 라우팅 되는데

Header도 re render가 되는 것입니다.

원인을 찾아보니, 제가 정리한 내용으론

router로 페이지 이동시 useNavigate의 값이 새로 변경되므로 useNavigate를 선언해준곳도 다시 re render가 되는 불필요한 현상이 일어난다는 것입니다.

이것 때문에 무쟈게 애를 먹었었는데,, 아직 해결방법을 찾지를 못했습니다.

방향성이라던지, 혹시 reference라던지 알려주시면 감사하겠습니다.

그 외 나머지는 부족하지만, 즐겁게 코드했습니다.

비난을 하시진 않겠지만, 비판과, feedback은 언제나 늘 저를 성장시킵니다.
