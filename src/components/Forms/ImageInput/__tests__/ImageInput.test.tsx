import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import ImageInput from "../ImageInput";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";

const mockImage = { image: "", caption: "" };

const mockOnChange = jest.fn();
const errorMsg = "Error";
let forceValidation = false;
let maxSize = 5;

describe("tests for component ImageInput", () => {
  beforeEach(() => {
    jest.resetAllMocks();

    render(
      <ImageInput
        image={mockImage}
        placeholderCaption="Placeholder Caption"
        onChange={mockOnChange}
        errorMsg={errorMsg}
        forceValidation={forceValidation}
        maxSize={maxSize}
      />
    );
  });
  test("Should Render Caption Input", () => {
    const caption = screen.getByText("Placeholder Caption");
    expect(caption).toBeVisible();
  });

  test("Should Render File Upload Div", () => {
    const caption = screen.getByTestId("FileUploadDiv");
    expect(caption).toBeVisible();
  });

  test("Should call onChange for caption", async () => {
    const input = screen.getByTestId("caption");
    await userEvent.type(input, "some typed input");

    await waitFor(() => expect(mockOnChange).toBeCalled(), { timeout: 1000 });
  });

  test("Should Render File Upload Div", () => {
    const caption = screen.getByTestId("FileUploadDiv");
    expect(caption).toBeVisible();
  });
});
