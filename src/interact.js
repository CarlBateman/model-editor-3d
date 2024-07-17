// Make the DIV element draggable:
// https://interactjs.io/
import interact from "interactjs";

function dragMoveListener(event) {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the position attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

function dragResizeListener(event) {
  var target = event.target;
  var x = parseFloat(target.getAttribute("data-x")) || 0;
  var y = parseFloat(target.getAttribute("data-y")) || 0;

  // update the element's style
  target.style.width = event.rect.width + "px";
  target.style.height = event.rect.height + "px";

  // translate when resizing from top or left edges
  x += event.deltaRect.left;
  y += event.deltaRect.top;

  target.style.transform = "translate(" + x + "px," + y + "px)";

  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
  // target.textContent =
  //   Math.round(event.rect.width) +
  //   "\u00D7" +
  //   Math.round(event.rect.height);
}

function setup() {
  window.dragMoveListener = dragMoveListener;
  window.dragResizeListener = dragResizeListener;

  interact(".movable-box")
    .draggable({
      listeners: { move: window.dragMoveListener },
      allowFrom: ".drag-handle",
    })
    // .resizable({
    //   listeners: { move: window.dragResizeListener },
    //   edges: { left: true, right: true, bottom: true, top: false },
    //   modifiers: [
    //     interact.modifiers.restrictSize({
    //       min: { width: 100, height: 100 },
    //       max: { width: 500, height: 500 },
    //     }),
    //   ],
    //   // allowFrom: ".resize-handle",
    // })
    .pointerEvents({
      allowFrom: "*",
    });

  interact(".resize-drag")
    .resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: false },

      listeners: { move: window.dragResizeListener },

      modifiers: [
        // keep the edges inside the parent
        interact.modifiers.restrictEdges({
          restriction: "parent",
          endOnly: true,
        }),

        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 100, height: 50 },
        }),
      ],

      inertia: true,
    })
    .draggable({
      edges: { left: false, right: false, bottom: false, top: true },
      listeners: { move: window.dragMoveListener },
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
          endOnly: true,
        }),
      ],
    });
}

let drag = { setup };
export { drag };
