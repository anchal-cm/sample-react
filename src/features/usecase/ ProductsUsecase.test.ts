import { test, vi, assert } from "vitest";
import { ProductsUsecase } from "./ProductsUsecase";

test("ProductsUsecase Test", async () => {
  const spy = vi.spyOn(ProductsUsecase, "fetchProducts");
  spy.mockReturnValue(Promise.resolve({products:[]}))
  const result = await ProductsUsecase.fetchProducts();
  console.log("testtt", result)
  assert.deepStrictEqual(result.products,[]);
},1000);