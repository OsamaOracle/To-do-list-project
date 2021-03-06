import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
afterEach(() => {
  jest.clearAllMocks()
})
beforeEach(async function () {
  fetch.resetMocks()
  fetch.dontMock()
})
