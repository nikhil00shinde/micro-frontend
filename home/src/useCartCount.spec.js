import {renderHook, act} from "@testing-library/react-hooks";
import jestConfig from "../jest.config";

import { useCartCount } from "./useCartCount";
let callback = () => {};

jest.mock("cart/cart", () => ({
  cart: {
    cartItems: [],
    subscribe: (cb) => {
      callback = cb;
    },
  },
}))

describe('useCartCount', () => { 
  it("should return cart count", () => {
    const {result} = renderHook(() => useCartCount());
    expect(result.current).toBe(0)
  })
 })