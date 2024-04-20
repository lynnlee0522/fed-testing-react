import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryForm } from ".";

test("should show fullname", async () => {
  const name = "penelope";

  render(<QueryForm />);

  userEvent.type(await screen.findByPlaceholderText("type your name"), name);

  expect(screen.getByText(name)).toBeInTheDocument();
});

test("should display name from api directly", async () => {
  render(<QueryForm />);

  const text = await screen.findByText(/Kanibolockiy/gi);

  expect(text).toBeInTheDocument();
});
