import Tabs from "./Tabs";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Tabs", () => {
  it("should render 3 tabs", () => {
    render(
      <Tabs
        tabs={[
          { title: "tab1", content: "content1" },
          { title: "tab2", content: "content2" },
          { title: "tab3", content: "content3" },
        ]}
      />
    );

    expect(screen.getAllByTestId("tab")).toHaveLength(3);
  });

  it("should render the content of the first tab", () => {
    render(
      <Tabs
        tabs={[
          { title: "tab1", content: "content1" },
          { title: "tab2", content: "content2" },
          { title: "tab3", content: "content3" },
        ]}
      />
    );
    expect(screen.getByText("content1")).toBeInTheDocument();
  });

  it("should change tab when clicking them", () => {
    render(
      <Tabs
        tabs={[
          { title: "tab1", content: "content1" },
          { title: "tab2", content: "content2" },
          { title: "tab3", content: "content3" },
        ]}
      />
    );
    expect(screen.getByText("content1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("tab2"));

    expect(screen.getByText("content2")).toBeInTheDocument();
  });
});
