### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- Answer:

  getElementById: This selects a single element based on its unique id attribute. Since IDs are intended to be unique within an HTML document, this method always returns a single Element object if the specified ID is found. We should Use getElementById when targeting a single element by its unique ID.

  getElementsByClassName: This selects all elements that have the specific class name. This can return multiple elements if multiple elements share the same class name. We should Use getElementsByClassName when targeting multiple elements by a common class name.

  querySelector: This selects the first element that matches a specified CSS selector string (e.g., #myId, .myClass, div p). This method is also returns a single Element object if the matching element is found. We should use querySelector when targeting the first matching element using a CSS selector for broad flexibility.

  querySelectorAll: This selects all elements that match a specified CSS selector string. Similar to querySelector, it provides extensive flexibility in selection criteria. We should use querySelectorAll when targeting all matching elements using a CSS selector.

---

### 2. How do you create and insert a new element into the DOM?
- Answer:

  For creating and inserting a new element into the Document Object Model (DOM) we should follow two steps: Use the document.createElement() method to create a new HTML element. This method takes the tag name of the element as a string argument document.createElement("div"); We can use class, styles etc with this. Then we can insert the element into the DOM with append():  Like this parentElement.append(newDiv, "Some text after the div");

---

### 3. What is Event Bubbling and how does it work?
- Answer:

  Event bubbling is a browser mechanism where a DOM event that occurs on an element first triggers handlers on that element and then propagates (bubbles) up the DOM tree to its ancestors (parent, grandparent, etc.) until it reaches the root element or is stopped. This means if we click on a button inside a div, the click event will trigger an event handler on the button, then on the div, and then on the body (if it's an ancestor), and so on, like a ripple in a pond.
How Event Bubbling Works:
Imagine we have a nested structure like this: div > span > button. If we click on the button, the click event triggers the handler for the button first. Then, the event bubbles up to the span, triggering its click handler.
Finally, the event bubbles up to the div, triggering its click handler.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?
- Answer:

  Event delegation is a powerful pattern in JavaScript that improves both the performance and maintainability of our code, specially when dealing with dynamic content or a large number of elements.
Event Delegation is a useful pattern that allows us to write cleaner code, and create fewer event listeners with similar logic. This makes it easier for us to add and remove elements without having to add new or remove existing event listeners.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- Answer:

  preventDefault(): This method prevents or cancel the browser’s default action for that event. Examples: Stop a link from navigating, stop a form from submitting, stop a checkbox from toggling etc.

  stopPropagation(): This method prevents the event from propagating further up or down the DOM tree during the capturing or bubbling phases of event propagation. It stops the event from reaching parent or child elements that might also have listeners for the same event type. Example: If we have a button inside a div, and both have click event listeners, clicking the button would normally trigger both the button's and the div's click handlers due to bubbling. stopPropagation() on the button's click event would prevent the div's click handler from being triggered.
