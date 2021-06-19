import documentElements from "./Elements.js ";

let container = document.getElementById("root");

const el = (tag, obj, data) => {

  return new documentElements[tag](tag, obj, data);
  
};

/*Test case 3.*/

const tree = el("form", { action: "/some_action" }, [
  el("label", { for: "name" }, "First name:"),
  el("br", {}, null),
  el(
    "input",
    { type: "text", id: "name", name: "name", value: "My name" },
    null
  ),
  el("br", {}, null),
  el("label", { for: "last_name" }, "Last name:"),
  el("br", {}, null),
  el(
    "input",
    {
      type: "text",
      id: "last_name",
      name: "last_name",
      value: "My second name",
    },
    null
  ),
  el("br", {}, null),
  el("input", { type: "submit", value: "Submit" }, null),
]);
container.appendChild(tree.draw());

/*Test case 1.*/

// const tree = el(
//   "div",
//   { class: "some_classname", id: "some_id" },
//   el("span", {}, "hello")
// );

/*Test case 2.*/

// const tree = el(
//   "div",
//   {},
//   el("ul", {}, [
//     el("li", {}, "Item 1"),
//     el("li", {}, "Item 2"),
//     el("li", {}, "Item 3"),
//   ])
// );
