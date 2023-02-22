function setBgcolor(color)
{
    //console.log( document.body.style.backgroundColor );
    document.body.style.backgroundColor = color;
}

function setHue(slider) 
{
    //console.log(slider.value);
    const hue = slider.value;
    setBgcolor(`hsl(${hue}, 100%, 50%)`);
}


function setBgsat(sat)
{
    document.body.style.backgroundColor = sat; 
}

function setSat(slider2)
{
    console.log(slider2.value);
    const sat = slider2.value;
    setBgsat(`hsl(100, ${sat}%, 50%)`);
}

function setBglig(lig)
{
    document.body.style.backgroundColor = lig; 
}

function setLig(slider3)
{
    console.log(slider3.value);
    const lig = slider3.value;
    setBgsat(`hsl(100, 100%, ${lig}%)`);
}




































// // HTML (Interactive) elements
// const slider = document.getElementById('hue-slider');
// const slider2 = document.getElementById('sat-slider');
// const slider3 = document.getElementById('lig-slider');
// const rgbOutput = document.getElementById('rgb-value');
// const hexOutput = document.getElementById('hex-value');
// const ranColBtn = document.getElementById('random-color-btn');

// // Event Listeners
// window.addEventListener('load', setRandomColor);
// document.addEventListener('keypress', setRandomColor);
// ranColBtn.addEventListener('click', setRandomColor);
// ranColBtn.addEventListener("mouseover", function() {
//     ranColBtn.style.opacity = 0.9;
// });
// ranColBtn.addEventListener("mouseout", function() {
//     ranColBtn.style.opacity = 1.0;
// });
// rgbOutput.addEventListener('click', function() {
//     copyTextFrom('color-code-1', rgbOutput);
// });
// hexOutput.addEventListener('click', function() {
//     copyTextFrom('color-code-2', hexOutput);
// });
// slider.addEventListener('input', (e) => {
//     changeBgColor(e.target.value);
// });

// function copyTextFrom(id, el) {
//     // Select and copy color code
//     selectText(id);
//     document.execCommand('copy');
//     copiedAnimation(el);
//     if (window.getSelection) { window.getSelection().removeAllRanges(); }
//     else if (document.selection) { document.selection.empty(); }
// }

// function copiedAnimation(el) {
//     // Display 'Copied' animation
//     el.classList.add('run-animation');
//     const output = el.textContent;
//     el.textContent = "Copied"; 
//     setTimeout(function() {
//         el.textContent = output;
//         el.classList.remove('run-animation');
//     }, 1000);
// }

// function setRandomColor() {
//     // Get random value for slider and change background color
//     const ranValue = Math.floor(Math.random() * 1786);
//     slider.value = ranValue;
//     changeBgColor(ranValue);
// }

// function changeBgColor(value) {
//     // Get rgb and hex value, display them and assign backgroundColor
//     const rgb = getRGBValue(value);
//     const hex = fullColorHex(rgb);
//     rgbOutput.textContent = rgb;
//     hexOutput.textContent = '#' + hex;
//     document.body.style.backgroundColor = rgb;
// }

// function getRGBValue(value) {
//     // Get rgb value with the slider range-based parameter
//     if (value >= 0 && value <= 255) {
//         return `rgb(${value}, 0, 0)`;     `rgb(34, 0, 0)`
//     } else if (value > 255 && value <= 510) {
//         return `rgb(255, ${value-255}, 0)`;
//     } else if (value > 510 && value <= 765) {
//         return `rgb(${255-(value-510)}, 255, 0)` 
//     } else if (value > 765 && value <= 1020) {
//         return `rgb(0, 255, ${value-765})`;
//     } else if (value > 1020 && value <= 1275) {
//         return `rgb(0, ${255-(value-1020)}, 255)`;
//     } else if (value > 1275 && value <= 1530) {
//         return `rgb(${value-1275}, 0, 255)`;
//     } else if (value > 1530 && value <= 1785) {
//         return `rgb(255, 0, ${255-(value-1530)})`;
//     }
// }

// function rgbToHex(rgb) { 
//     // Declare hexadecimal value with rgb
//     let hex = Number(rgb).toString(16);
//     // Make sure it always consists out of 2 digits
//     if (hex.length < 2) {
//          hex = '0' + hex;
//     }
//     return hex;
// }

// function fullColorHex(value) {  
//     // Declare rgb values to format into a six-digit hexadecimal value
//     const valuesStr = value.replace('rgb(', '').replace(')', '');
//     const valuesArr = valuesStr.split(', ');
//     const red = rgbToHex(valuesArr[0]);
//     const green = rgbToHex(valuesArr[1]);
//     const blue = rgbToHex(valuesArr[2]);
//     return red + green + blue;
// }

// function selectText(node) {
//     node = document.getElementById(node);

//     if (document.body.createTextRange) {
//         const range = document.body.createTextRange();
//         range.moveToElementText(node);
//         range.select();
//     } else if (window.getSelection) {
//         const selection = window.getSelection();
//         const range = document.createRange();
//         range.selectNodeContents(node);
//         selection.removeAllRanges();
//         selection.addRange(range);
//     } else {
//         console.warn("Could not select text in node: Unsupported browser.");
//     }
// }