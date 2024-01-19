#### [FormData](https://developer.mozilla.org/ko/docs/Web/API/FormData)

- browser 에서 제공하는 API
- HTML form element 를 생성자 파라메터로 받아 form 내에 있는 html(`input`, `select`) name 속성이 있는 value 값을 추출할 수 있게 해준다.
    ```javascript
        const formData = new FormData(form);
        const value = formData.get([name])e
    ```
- 동일 name 값을 가지고 있는 tag 의 경우 배열로 받아온다.
    ```javascript
        const formData = new FormData(form);
        const values = formData.getAll([name]);
    ```