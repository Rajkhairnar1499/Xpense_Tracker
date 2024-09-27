import { toast } from "react-toastify";
import { deleteItem } from "./helpers";
import { redirect } from "react-router-dom";

export const logoutAction = async () => {
  // Delete the user
  deleteItem({
    key: "userName",
  });
  deleteItem({
    key: "budgets",
  });
  deleteItem({
    key: "expenses",
  });
  toast.success("You've deleted your account!");

  return redirect("/");
};
