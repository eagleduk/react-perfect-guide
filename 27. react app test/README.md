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

% `getByRole` 관련 Role Index => https://www.w3.org/TR/html-aria/#docconformance