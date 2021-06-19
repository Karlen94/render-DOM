export class DomElement {
  constructor(tag, obj, data) {
    this.tag = tag;
    this.obj = obj;
    this.data = data;
  }

  draw() {
    if (typeof this.tag !== "string") {
      alert("the first argument must be string!");
    }
    if (typeof this.obj !== "object") {
      alert("the second argument must be an object!");
    }

    let element = document.createElement(this.tag);

    for (let attribute in this.obj) {
      element.setAttribute(attribute, this.obj[attribute]);
    }
    
    /*Second version adding attributes*/

    // this.obj.class ? (element.className = this.obj.class) : null;
    // this.obj.id ? (element.id = this.obj.id) : null;
    // this.obj.type ? (element.type = this.obj.type) : null;
    // this.obj.name ? (element.name = this.obj.name) : null;
    // this.obj.value ? (element.value = this.obj.value) : null;
    // this.obj.action ? (element.action = this.obj.action) : null;
    // this.obj.for ? (element.for = this.obj.for) : null;

    if (typeof this.data === "string") {
      element.innerHTML = this.data;
      return element;
    } else {
      if (
        typeof this.data === "object" &&
        this.data !== null &&
        !this.data.length
      ) {
        element.insertAdjacentElement("beforeend", this.data.draw());
      } else {
        this.data !== null &&
          this.data.map((el) => {
            element.insertAdjacentElement("beforeend", el.draw());
          });
      }
    }

    return element;
  }
}
