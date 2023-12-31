import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendData, getData } from "./store/cart";

let initialState = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.layout.cart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.layout.notification);

  useEffect(() => {
    if (!initialState) {
      return;
    }
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (initialState) {
      initialState = false;
      return;
    }
    if (cart.fetchData) dispatch(sendData(cart));

    // dispatch(async (dispatch) => {
    //   dispatch(
    //     layoutActions.setNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending Data...",
    //     })
    //   );

    //   const sendData = async (cart) => {
    //     const response = await fetch(
    //       "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/redux/cart.json",
    //       { method: "PUT", body: JSON.stringify(cart) }
    //     );
    //     if (!response.ok) {
    //       throw new Error("Send Error");
    //     }

    //     dispatch(
    //       layoutActions.setNotification({
    //         status: "success",
    //         title: "Success...",
    //         message: "Success Send Data...",
    //       })
    //     );
    //   };

    //   sendData(cart).catch((error) => {
    //     dispatch(
    //       layoutActions.setNotification({
    //         status: "error",
    //         title: "Error",
    //         message: error.message,
    //       })
    //     );
    //   });
    // });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
