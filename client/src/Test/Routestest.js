import React from "react";
import Routes from "../Routes";

describe("Routes", () => {
    it("When isLoading is true then loading test should be displayed", ()=>{
        render(<Routes />)
    });
    it.skip("When isLoading is fase and data exist then render list of data");
});