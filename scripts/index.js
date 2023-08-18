function getInputValue(inputId) {
  const inputValueString = document.getElementById(inputId).value;
  const inputValueNumber = parseFloat(inputValueString);
  return inputValueNumber;
}

function setInnerText(elementById, value) {
  const setValue = document.getElementById(elementById);
  setValue.innerText = value;
}

function addCalculateAreaEntry(element, calculate) {
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");
  p.classList.add("my-4", "text-2xl");

  const count = calculationEntry.childElementCount;
  p.innerHTML = `${count}.  ${element} ${calculate} cm<sup>2</sup> <button class="btn btn-sm bg-green-800">Convert</button>`;
  calculationEntry.appendChild(p);
}

function calculateTriangleArea() {
  // get first input value
  const triangleBase = getInputValue("triangle-base");
  const triangleHeight = getInputValue("triangle-height");

  // calculate the area
  const calculate = 0.5 * triangleBase * triangleHeight;

  // set the calculate result text in html
  setInnerText("triangle-area", calculate);

  addCalculateAreaEntry("triangle-area", calculate);
}

function calculateRectangleArea() {
  // get first input value
  const rectangleWidth = getInputValue("rectangle-width");
  const rectangleLength = getInputValue("rectangle-length");

  // calculate the area
  const calculate = rectangleWidth * rectangleLength;

  // set the calculate result text in html
  setInnerText("rectangle-area", calculate);

  addCalculateAreaEntry("rectangle-area", calculate);
}

function calculateParallelogramArea() {
  // get first input value
  const parallelogramBase = getInputValue("parallelogram-base");
  const parallelogramHeight = getInputValue("parallelogram-height");

  // calculate the area
  const calculate = parallelogramBase * parallelogramHeight;

  // set the calculate result text in html
  setInnerText("parallelogram-area", calculate);

  addCalculateAreaEntry("parallelogram-area", calculate);
}

function calculateEllipseArea() {
  // get first input value
  const ellipseMajorRadius = getInputValue("ellipse-major-radius");
  const ellipseMinorRadius = getInputValue("ellipse-minor-radius");

  // calculate the area
  const calculate = Math.PI * ellipseMajorRadius * ellipseMinorRadius;
  const calculateSort = calculate.toFixed(2);

  // set the calculate result text in html
  setInnerText("ellipse-area", calculateSort);

  addCalculateAreaEntry("ellipse-area", calculateSort);
}
