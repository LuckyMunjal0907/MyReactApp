const parent = React.createElement("div", 
{ id: "parent" }, 
[React.createElement(
    "div", 
{id:"child"}, 
[React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")]
)],
[React.createElement(
    "div", 
{id:"child2"}, 
[React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")]
)]
);
// to avoid the above complexity, we will use JSX and that'll make our life easy

const heading = React.createElement("h1", {id:"heading", name:"myheading"}, "Hello World from React!!");
console.log(heading);
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);