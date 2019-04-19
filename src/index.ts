import { html, render } from "lit-html";

let text: string = "lit-html!";

const App = () => html`
  <h1>Hello ${text}</h1>
  <input
    .value=${text}
    @input=${(e: any) => {
      text = e.target.value;
      renderApp();
    }}
  />
`;

const renderApp = () => render(App(), document.body);
renderApp();
