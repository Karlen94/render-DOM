import { DomElement } from "./DomElement.js";

 const documentElements = {
  "span": class SpanElement extends DomElement {
    constructor(tag, obj, data) {
      super(tag, obj, data);
    }
  },

  "div": class DivElement extends DomElement {
    constructor(tag, obj, data) {
      super(tag, obj, data);
    }
  },

  "input": class InputElement extends DomElement {
    constructor(tag, obj, data) {
      super(tag, obj, data);
    }
  },

  "ul": class UlElement extends DomElement {
    constructor(tag, obj, data) {
      super(tag, obj, data);
    }
  },

  "li": class LiElement extends DomElement {
    constructor(tag, obj, data) {
      super(tag, obj, data);
    }
  },

  "form": class FormElement extends DomElement {
    constructor(tag, obj, data) {
      super(tag, obj, data);
    }
  },

  "label": class LabelElement extends DomElement {
    constructor(tag, obj, data) {
      super(tag, obj, data);
    }
  },

  "br": class BrElement extends DomElement {
    constructor(tag, obj, data) {
      super(tag, obj, data);
    }
  },
};

export default documentElements;