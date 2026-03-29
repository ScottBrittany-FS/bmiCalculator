// alert("connected");

// the formula for calculating BMI is weight (lbss) divided by height (in)^2 times 703.

// since we're using height in inches and height in feet, we need to first convert it to just inches. For example, I'm 5'3", I would multiply the feet (5 feet) by 12 inches, then add 3 to that number. 5*12 = 60, 3+60= 63 inches.

// For this assignment, I'd need to create a code that will first convert the height to inches, then divide the weight in pounds by the height inches to the second power.

// bmi ranges
// BMI is less than 18.5 --	Under Weight Range
// BMI is 18.5 up to but not including 24.9	-- Normal or Healthy Weight Range
// BMI is 24.9 up to but not including 29.9	-- Over Weight Range
// BMI is 29.9 up to but not including 35 --	Obese Range
// BMI is 35 or over -- Extreme Obese Range

let bmiBtn = document.querySelector("#getBmi");
let form = document.querySelector("#bmiCalculator");

//Result elements by ID
let resultText = document.querySelector("#textResult");
let resultIMG = document.querySelector("#imgResult");

document.querySelector("#getBmi").addEventListener("click", function (e) {
  if (!form.reportValidity()) {
    return;
  }

  //user should not have a blank answer or zero for height in feet, or weight
  let heightInch = parseInt(document.querySelector("#heightInches").value) || 0;
  let weight = parseInt(document.querySelector("#weightLbs").value) || 0;
  let heightFt = parseInt(document.querySelector("#heightFoot").value) || 0;

  // stop code if req. inputs missing

  //formulas for determining height in inches

  let heightTotal = heightFt * 12 + heightInch;
  let BMI = (weight / heightTotal ** 2) * 703;

  //conditions
  let resultText = "";
  let resultIMG = "";

  if (BMI < 18.5) {
    resultText = `Your BMI is ${BMI.toFixed(1)}, indicating your weight is in Under Weight for adults of your height.`;
    resultIMG = "/IMG/underWeight.jpg";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    resultText = `Your BMI is ${BMI.toFixed(1)} indicating your weight is in Normal/Healthy weight for adults of your height.`;
    resultIMG = "/IMG/healthyWeight.jpg";
  } else if (BMI >= 24.9 && BMI < 29.9) {
    resultText = `Your BMI is ${BMI.toFixed(1)} indicating your weight is in Over Weight for adults of your height.`;
    resultIMG = "/IMG/overWeight.jpg";
  } else if (BMI >= 29.9 && BMI < 35) {
    resultText = `Your BMI is ${BMI.toFixed(1)} indicating your weight is in Obese Weight for adults of your height.`;
    resultIMG = "/IMG/obeseWeight.jpg";
  } else {
    resultText = `Your BMI is ${BMI.toFixed(1)} indicating your weight is in Extreme Obese Weight for adults of your height.`;
    resultIMG = "/IMG/extremeObeseWeight.jpg";
  }

  document.querySelector("#textResult").innerHTML = resultText;
  document.querySelector("#imgResult").src = resultIMG;
});
