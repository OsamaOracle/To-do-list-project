import React from "react";
import { createRender } from '@testing-library/react';
import { render, fireEvent, waitForElement, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import {
  screen
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todos from "./Todos";


describe("<Todos /> tests", () => {
  //Test1 - Index page
  it("renders <Todos />", async () => {
    render(<Todos />);
    await waitFor(() => screen.getByText(/Todos/i));
  });
  //Test3 -Create todo
  it("should add a todo item", async () => {
  fetchMock.once(
    JSON.stringify({
      userId: 3,
      id: Math.floor(Math.random() * 100) + 1,
      title: "Do math homework",
      completed: false
    })
  );
  render(<Todos />);
  await waitFor(() => screen.getByText(/Todos/i));

  userEvent.type(screen.getByRole("textbox"), "Do math homework");
  userEvent.click(screen.getByRole(/Button/i));

  await waitFor(() => screen.getByText(/Do math homework/i));
});

  });
