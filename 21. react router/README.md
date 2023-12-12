## React Router DOM

#### loader

- router 에서 Component 를 랜더링 전에 함수를 실행할 수 있게 해준다.
- 상위 router 에서 사용은 불가능 하지만 Component 의 자식 Component 에서는 사용이 가능하다.
  > useLoaderData()
- 자식 router 에서 사용을 하고자 할 때에는 loader 가 있는 router 에 `id` 값을 할당해 주어야 한다.
  > useRouterLoaderData(`id`)


```
// Router
createBrowserRouter([
  {
    element: <Teams />,
    path: "teams",
    id: "teams",
    loader: async () => {
      return fetch("/api/teams/");
    },
    children: [
      {
        element: <Team />,
        path: ":teamId",
        loader: async ({ params }) => {
          return fetch(`/api/teams/${params.teamId}.json`);
        },
      },
    ],
  },
]);

// Teams.js
function Teams() {

    const data = useLoaderData();

    return <h1>Teams</h1>
}

// Team.js
function Team() {
    const data = useRouterLoaderData("teams");

    return <h1>Team</h1>
}

```

#### errorElement
- Router 를 통한 Component 랜더링 시에 발생하는 에러에 대한 랜더링 Component 를 설정한다.
- 해당 errorElement 를 부여한 모든 자식 router 에 대해 적용된다.

```
createBrowserRouter([
  {
    element: <Teams />,
    path: "teams",
    errorElement: <Error />
  },
]);
```

#### action
- React Router DOM 에서 제공하는 Form Component 의 submit 에 대한 함수를 설정할 수 있다.
- action 에 대한 결과값을 추출할 수 있다.
  > useActionData()
- Router action 에 제공후 useSubmit() 함수를 사용하여 제공된 action 을 Form Component 없이 사용할 수 있다.
  > useSubmit()