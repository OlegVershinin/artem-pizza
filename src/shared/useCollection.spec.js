import { useCollection } from "./useCollection";

const { renderHook, act } = require("@testing-library/react-hooks");

describe("useCollection", () => {
  it("проверяем использование пустого массива по умолчанию", () => {
    const { result } = renderHook(() => useCollection());

    expect(result.current[0]).toEqual([]);
  });

  describe("with initialValue", () => {
    it("проверяем использование initialValue по умолчанию", () => {
      const { result } = renderHook(() => useCollection([1, 2, 3]));

      expect(result.current[0]).toEqual([1, 2, 3]);
    });
  });

  describe(".addItem", () => {
    it("добавляет значение в массив", () => {
      const { result } = renderHook(() => useCollection());

      act(() => {
        result.current[1]("test");
      });

      expect(result.current[0]).toEqual(["test"]);
    });
  });

  describe(".removeItem", () => {
    it("удаляет значение из массива", () => {
      const { result } = renderHook(() =>
        useCollection(["test", "foo", "bar"])
      );

      act(() => {
        result.current[2]("test");
      });

      expect(result.current[0]).toEqual(["foo", "bar"]);
    });
  });
});
