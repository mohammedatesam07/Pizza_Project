import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ itemId, currentItemQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(itemId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentItemQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(itemId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
