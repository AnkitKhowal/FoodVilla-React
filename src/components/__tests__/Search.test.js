import { render, waitFor, waitForElement, screen } from "@testing-library/react";
import Body from "../Body";
import {Provider} from "react-redux";
import store from "../../utils/store.js";
import {StaticRouter} from "react-router-dom/server";
import{restaurantList} from "../mocks/data";
import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(restaurantList);
        }
    })
})

test("Shimmer should load on Homepage",()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
             <Body />
        </Provider>
        </StaticRouter>
    )

    const shimmer = body.getByTestId("shimmer");
    expect(shimmer).toBeInTheDocument();
    expect(shimmer.children.length).toBe(20);
    console.log(shimmer);
});

// test("Restaurants should load on Homepage", async () => {
//     const body = render(
//       <StaticRouter>
//         <Provider store={store}>
//           <Body />
//         </Provider>
//       </StaticRouter>
//     );
  
//     await waitFor(() => expect(screen.getByTestId("res-list")));
  
//     const resList = body.findByTestId("res-list");
  
//     expect(resList.children.length).toBe(15);
  
// });

//   test("Search for string(food) on Homepage", async () => {
//     const body = render(
//       <StaticRouter>
//         <Provider store={store}>
//           <Body />
//         </Provider>
//       </StaticRouter>
//     );
  
//     await waitFor(() => expect(body.getByTestId("search-btn")));
  
//     const input = body.getByTestId("search-input");
  
//     fireEvent.change(input, {
//       target: {
//         value: "food",
//       },
//     });
  
//     const searchBtn = body.getByTestId("search-btn");
  
//     fireEvent.click(searchBtn);
  
//     const resList = body.getByTestId("res-list");
  
//     expect(resList.children.length).toBe(4);
//   });