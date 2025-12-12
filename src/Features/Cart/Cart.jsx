import { Link } from "react-router-dom";
import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import cartSlice from "./cartSlice";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-3">
      {/* <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </Link> */}
      <LinkButton to="/menu"> &larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b border-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
