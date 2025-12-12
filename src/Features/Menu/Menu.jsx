import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";

function Menu() {
  // const cart = useSelector((state) => state.cart);
  // console.log(cart);
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

async function loader() {
  const menu = await getMenu();
  return menu;
}

Menu.loader = loader;

export default Menu;
