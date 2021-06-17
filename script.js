let container = document.getElementById("root");

function el(tag, obj, data) {
  if (typeof tag !== "string") {
    alert("the first argument must be string!");
  }
  if (typeof obj !== "object") {
    alert("the second argument must be an object!");
  }

  let element = document.createElement(tag);

  obj.class ? (element.className = obj.class) : null;
  obj.id ? (element.id = obj.id) : null;
  obj.type ? (element.type = obj.type) : null;
  obj.name ? (element.name = obj.name) : null;
  obj.value ? (element.value = obj.value) : null;

  if (typeof data === "string") {
    element.innerHTML = data;
  } else {
    if (typeof data === "object" && data !== null && !data.length) {
      element.insertAdjacentElement("beforeend", data);
    } else {
      data !== null &&
        data.map((el) => {
          return element.insertAdjacentElement("beforeend", el);
        });
    }
  }

  return element;
}

container.appendChild(tree);

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
