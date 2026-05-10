import {render} from "@testing-library/react";
// import Header from "../Header/Header";
import {StaticRouter} from "react-router-dom/server"
import HeroBanner from "../Hero/HeroBanner";


test("Loading header after render", ()=>{

    const header = render(
        <StaticRouter>
            <HeroBanner />
        </StaticRouter>
    );

    const test = header.getByTestId("newArivals");
    expect(test.innerHTML).toBe("NEW ARIVALS ONLY");

    const heroimg = header.getByTestId("heroimg");
    expect(heroimg.src).toBe("http://localhost/hero_image.png");
})