## testing - [`JEST`](https://jestjs.io/)

- 일반적으로 테스트 하고자 하는 컴포넌트의 동일 선상에 위치
- `[컴포넌트].test` 형태로 존재

#### 그룹화

```jsx
describe('[그룹화명]', () => {
    test('[테스트명]', () => {})
    test('[테스트명]', () => {})
})
```

>  `getByRole` 관련 Role Index => https://www.w3.org/TR/html-aria/#docconformance

#### fetch testing
- 테스트시 실제 데이터를 전송이 이루어지면 서버의 데이터가 변경될 우려가 있기 때문에 `Mock` 를 사용하여 임시 테스트를 진행한다.

```javascript
window.fetch = jest.fn();
window.fetch.mockResolvedValueOnce(`[fetch return 형태]`);
```

> 참조
> [jest](https://jestjs.io/)
> [testing-library](https://testing-library.com/)
> [testing-library-hooks](https://github.com/testing-library/react-hooks-testing-library)