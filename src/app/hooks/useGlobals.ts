import { createContext, useContext } from "react";
import { Member } from "../../lib/types/member";
import useBasket from "./useBasket";
import { BasketInterface } from "../../lib/types/basket";

interface GlobalInterface {
  authMember: Member | null;
  setAuthMember: (member: Member | null) => void;
  orderBuilder: Date;
  setOrderBuilder: (input: Date) => void;
  basket: BasketInterface;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(
  undefined,
);

export const useGlobals = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) throw new Error("useGlobals within Provider");

  return context;
};