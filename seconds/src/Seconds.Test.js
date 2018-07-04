import React from "react";
import renderer from "react-test-renderer";
import Seconds from "./Seconds";

jest.useFakeTimers();

const tree = renderer.create(<Seconds />);

it("renders initial second", () => {
    expect(tree.toJSON().children[0]).toBe(“0“);
});

it("renders three seconds", () => {
    jest.runOnlyPendingTimers();
    jest.runOnlyPendingTimers();
    jest.runOnlyPendingTimers();
    expect(tree.toJSON().children[0]).toBe("3");
});