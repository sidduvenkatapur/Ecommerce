import {render} from "@testing-library/react";
import Header from "../Header/Header";
import {StaticRouter} from "react-router-dom/server"

test("Loading header after render", ()=>{
    const header = render(
        <StaticRouter>
            <Header />
        </StaticRouter>
    );

    const logo = header.getByTestId("logo");
})