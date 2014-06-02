
answerNegative = false;
currentCorrectAnswer = '';

sin = Object.freeze({
    ZERO: 'zero',
    PI_OVER_SIX: 'half',
    PI_OVER_FOUR: 'rootTwoOverTwo',
    PI_OVER_THREE: 'rootThreeOverTwo',
    PI_OVER_TWO: 'one',
    TWO_PI_OVER_THREE: 'rootThreeOverTwo',
    THREE_PI_OVER_FOUR: 'rootTwoOverTwo',
    FIVE_PI_OVER_SIX: 'half',
    PI: 'zero',
    SEVEN_PI_OVER_SIX: '-half',
    FIVE_PI_OVER_FOUR: '-rootTwoOverTwo',
    FOUR_PI_OVER_THREE: '-rootThreeOverTwo',
    THREE_PI_OVER_TWO: '-one',
    FIVE_PI_OVER_THREE: '-rootThreeOverTwo',
    SEVEN_PI_OVER_FOUR: '-rootTwoOverTwo',
    ELEVEN_PI_OVER_SIX: '-half',
    TWO_PI: 'zero',
    THREE_PI: 'zero',
    FOUR_PI: 'zero',
    FIVE_PI: 'zero',
    SIX_PI: 'zero',
    NEG_PI_OVER_SIX: '-half',
    NEG_PI_OVER_FOUR: '-rootTwoOverTwo',
    NEG_PI_OVER_THREE: '-rootThreeOverTwo',
    NEG_PI_OVER_TWO: '-one',
    NEG_TWO_PI_OVER_THREE: '-rootThreeOverTwo',
    NEG_THREE_PI_OVER_FOUR: '-rootTwoOverTwo',
    NEG_FIVE_PI_OVER_SIX: '-half',
    NEG_PI: 'zero',
    NEG_SEVEN_PI_OVER_SIX: 'half',
    NEG_FIVE_PI_OVER_FOUR: 'rootTwoOverTwo',
    NEG_FOUR_PI_OVER_THREE: 'rootThreeOverTwo',
    NEG_THREE_PI_OVER_TWO: 'one',
    NEG_FIVE_PI_OVER_THREE: 'rootThreeOverTwo',
    NEG_SEVEN_PI_OVER_FOUR: 'rootTwoOverTwo',
    NEG_ELEVEN_PI_OVER_SIX: 'half',
    NEG_TWO_PI: 'zero',
    NEG_THREE_PI: 'zero',
    NEG_FOUR_PI: 'zero',
    NEG_FIVE_PI: 'zero',
    NEG_SIX_PI: 'zero',
    toString: function () { return 'sin' }

});


cos = Object.freeze({
    ZERO: 'one',
    PI_OVER_SIX: 'rootThreeOverTwo',
    PI_OVER_FOUR: 'rootTwoOverTwo',
    PI_OVER_THREE: 'half',
    PI_OVER_TWO: 'zero',
    TWO_PI_OVER_THREE: '-half',
    THREE_PI_OVER_FOUR: '-rootTwoOverTwo',
    FIVE_PI_OVER_SIX: '-rootThreeOverTwo',
    PI: '-one',
    SEVEN_PI_OVER_SIX: '-rootThreeOverTwo',
    FIVE_PI_OVER_FOUR: '-rootTwoOverTwo',
    FOUR_PI_OVER_THREE: '-half',
    THREE_PI_OVER_TWO: 'zero',
    FIVE_PI_OVER_THREE: 'half',
    SEVEN_PI_OVER_FOUR: 'rootTwoOverTwo',
    ELEVEN_PI_OVER_SIX: 'rootThreeOverTwo',
    TWO_PI: 'one',
    THREE_PI: '-one',
    FOUR_PI: 'one',
    FIVE_PI: '-1',
    SIX_PI: 'one',
    NEG_PI_OVER_SIX: 'rootThreeOverTwo',
    NEG_PI_OVER_FOUR: 'rootTwoOverTwo',
    NEG_PI_OVER_THREE: 'half',
    NEG_PI_OVER_TWO: 'zero',
    NEG_TWO_PI_OVER_THREE: '-half',
    NEG_THREE_PI_OVER_FOUR: '-rootTwoOverTwo',
    NEG_FIVE_PI_OVER_SIX: '-rootThreeOverTwo',
    NEG_PI: '-one',
    NEG_SEVEN_PI_OVER_SIX: '-rootThreeOverTwo',
    NEG_FIVE_PI_OVER_FOUR: '-rootTwoOverTwo',
    NEG_FOUR_PI_OVER_THREE: '-half',
    NEG_THREE_PI_OVER_TWO: 'zero',
    NEG_FIVE_PI_OVER_THREE: 'half',
    NEG_SEVEN_PI_OVER_FOUR: 'rootTwoOverTwo',
    NEG_ELEVEN_PI_OVER_SIX: 'rootThreeOverTwo',
    NEG_TWO_PI: 'one',
    NEG_THREE_PI: '-one',
    NEG_FOUR_PI: 'one',
    NEG_FIVE_PI: '-one',
    NEG_SIX_PI: 'one',
    toString: function () { return 'cos' }

})

tan = Object.freeze({
    ZERO: 'zero',
    PI_OVER_SIX: 'rootThreeOverThree',
    PI_OVER_FOUR: 'one',
    PI_OVER_THREE: 'rootThree',
    PI_OVER_TWO: 'undefined',
    TWO_PI_OVER_THREE: '-rootThree',
    THREE_PI_OVER_FOUR: '-one',
    FIVE_PI_OVER_SIX: '-rootThreeOverThree',
    PI: 'zero',
    SEVEN_PI_OVER_SIX: 'rootThreeOverThree',
    FIVE_PI_OVER_FOUR: 'one',
    FOUR_PI_OVER_THREE: 'rootThree',
    THREE_PI_OVER_TWO: 'undefined',
    FIVE_PI_OVER_THREE: '-rootThree',
    SEVEN_PI_OVER_FOUR: '-one',
    ELEVEN_PI_OVER_SIX: '-rootThreeOverThree',
    TWO_PI: 'zero',
    THREE_PI: 'zero',
    FOUR_PI: 'zero',
    FIVE_PI: 'zero',
    SIX_PI: 'zero',
    NEG_PI_OVER_SIX: '-rootThreeOverThree',
    NEG_PI_OVER_FOUR: '-one',
    NEG_PI_OVER_THREE: '-rootThree',
    NEG_PI_OVER_TWO: 'undefined',
    NEG_TWO_PI_OVER_THREE: 'rootThree',
    NEG_THREE_PI_OVER_FOUR: 'one',
    NEG_FIVE_PI_OVER_SIX: 'rootThreeOverThree',
    NEG_PI: 'zero',
    NEG_SEVEN_PI_OVER_SIX: '-rootThreeOverThree',
    NEG_FIVE_PI_OVER_FOUR: '-one',
    NEG_FOUR_PI_OVER_THREE: '-rootThree',
    NEG_THREE_PI_OVER_TWO: 'undefined',
    NEG_FIVE_PI_OVER_THREE: 'rootThree',
    NEG_SEVEN_PI_OVER_FOUR: 'one',
    NEG_ELEVEN_PI_OVER_SIX: 'rootThreeOverThree',
    NEG_TWO_PI: 'zero',
    NEG_THREE_PI: 'zero',
    NEG_FOUR_PI: 'zero',
    NEG_FIVE_PI: 'zero',
    NEG_SIX_PI: 'zero',
    toString: function () { return 'tan' }

})

csc = Object.freeze({
    ZERO: '',
    PI_OVER_SIX: '',
    PI_OVER_FOUR: '',
    PI_OVER_THREE: '',
    PI_OVER_TWO: '',
    TWO_PI_OVER_THREE: '',
    THREE_PI_OVER_FOUR: '',
    FIVE_PI_OVER_SIX: '',
    PI: '',
    SEVEN_PI_OVER_SIX: '',
    FIVE_PI_OVER_FOUR: '',
    FOUR_PI_OVER_THREE: '',
    THREE_PI_OVER_TWO: '',
    FIVE_PI_OVER_THREE: '',
    SEVEN_PI_OVER_FOUR: '',
    ELEVEN_PI_OVER_SIX: '',
    TWO_PI: '',
    THREE_PI: '',
    FOUR_PI: '',
    FIVE_PI: '',
    SIX_PI: '',
    NEG_PI_OVER_SIX: '',
    NEG_PI_OVER_FOUR: '',
    NEG_PI_OVER_THREE: '',
    NEG_PI_OVER_TWO: '',
    NEG_TWO_PI_OVER_THREE: '',
    NEG_THREE_PI_OVER_FOUR: '',
    NEG_FIVE_PI_OVER_SIX: '',
    NEG_PI: '',
    NEG_SEVEN_PI_OVER_SIX: '',
    NEG_FIVE_PI_OVER_FOUR: '',
    NEG_FOUR_PI_OVER_THREE: '',
    NEG_THREE_PI_OVER_TWO: '',
    NEG_FIVE_PI_OVER_THREE: '',
    NEG_SEVEN_PI_OVER_FOUR: '',
    NEG_ELEVEN_PI_OVER_SIX: '',
    NEG_TWO_PI: '',
    NEG_THREE_PI: '',
    NEG_FOUR_PI: '',
    NEG_FIVE_PI: '',
    NEG_SIX_PI: '',
    toString: function () { return 'csc' }

})

sec = Object.freeze({
    ZERO: '',
    PI_OVER_SIX: '',
    PI_OVER_FOUR: '',
    PI_OVER_THREE: '',
    PI_OVER_TWO: '',
    TWO_PI_OVER_THREE: '',
    THREE_PI_OVER_FOUR: '',
    FIVE_PI_OVER_SIX: '',
    PI: '',
    SEVEN_PI_OVER_SIX: '',
    FIVE_PI_OVER_FOUR: '',
    FOUR_PI_OVER_THREE: '',
    THREE_PI_OVER_TWO: '',
    FIVE_PI_OVER_THREE: '',
    SEVEN_PI_OVER_FOUR: '',
    ELEVEN_PI_OVER_SIX: '',
    TWO_PI: '',
    THREE_PI: '',
    FOUR_PI: '',
    FIVE_PI: '',
    SIX_PI: '',
    NEG_PI_OVER_SIX: '',
    NEG_PI_OVER_FOUR: '',
    NEG_PI_OVER_THREE: '',
    NEG_PI_OVER_TWO: '',
    NEG_TWO_PI_OVER_THREE: '',
    NEG_THREE_PI_OVER_FOUR: '',
    NEG_FIVE_PI_OVER_SIX: '',
    NEG_PI: '',
    NEG_SEVEN_PI_OVER_SIX: '',
    NEG_FIVE_PI_OVER_FOUR: '',
    NEG_FOUR_PI_OVER_THREE: '',
    NEG_THREE_PI_OVER_TWO: '',
    NEG_FIVE_PI_OVER_THREE: '',
    NEG_SEVEN_PI_OVER_FOUR: '',
    NEG_ELEVEN_PI_OVER_SIX: '',
    NEG_TWO_PI: '',
    NEG_THREE_PI: '',
    NEG_FOUR_PI: '',
    NEG_FIVE_PI: '',
    NEG_SIX_PI: '',
    toString: function () { return 'sec' }

})

cot = Object.freeze({
    ZERO: '',
    PI_OVER_SIX: '',
    PI_OVER_FOUR: '',
    PI_OVER_THREE: '',
    PI_OVER_TWO: '',
    TWO_PI_OVER_THREE: '',
    THREE_PI_OVER_FOUR: '',
    FIVE_PI_OVER_SIX: '',
    PI: '',
    SEVEN_PI_OVER_SIX: '',
    FIVE_PI_OVER_FOUR: '',
    FOUR_PI_OVER_THREE: '',
    THREE_PI_OVER_TWO: '',
    FIVE_PI_OVER_THREE: '',
    SEVEN_PI_OVER_FOUR: '',
    ELEVEN_PI_OVER_SIX: '',
    TWO_PI: '',
    THREE_PI: '',
    FOUR_PI: '',
    FIVE_PI: '',
    SIX_PI: '',
    NEG_PI_OVER_SIX: '',
    NEG_PI_OVER_FOUR: '',
    NEG_PI_OVER_THREE: '',
    NEG_PI_OVER_TWO: '',
    NEG_TWO_PI_OVER_THREE: '',
    NEG_THREE_PI_OVER_FOUR: '',
    NEG_FIVE_PI_OVER_SIX: '',
    NEG_PI: '',
    NEG_SEVEN_PI_OVER_SIX: '',
    NEG_FIVE_PI_OVER_FOUR: '',
    NEG_FOUR_PI_OVER_THREE: '',
    NEG_THREE_PI_OVER_TWO: '',
    NEG_FIVE_PI_OVER_THREE: '',
    NEG_SEVEN_PI_OVER_FOUR: '',
    NEG_ELEVEN_PI_OVER_SIX: '',
    NEG_TWO_PI: '',
    NEG_THREE_PI: '',
    NEG_FOUR_PI: '',
    NEG_FIVE_PI: '',
    NEG_SIX_PI: '',
    toString: function () { return 'cot' }
})

latexStrings = Object.freeze({
    ZERO: '0',
    PI_OVER_SIX: '\\frac{\\pi}{6}',
    PI_OVER_FOUR: '\\frac{\\pi}{4}',
    PI_OVER_THREE: '\\frac{\\pi}{3}',
    PI_OVER_TWO: '\\frac{\\pi}{2}',
    TWO_PI_OVER_THREE: '\\frac{2\\pi}{3}',
    THREE_PI_OVER_FOUR: '\\frac{3\\pi}{4}',
    FIVE_PI_OVER_SIX: '\\frac{5\\pi}{6}',
    PI: '\\pi',
    SEVEN_PI_OVER_SIX: '\\frac{7\\pi}{6}',
    FIVE_PI_OVER_FOUR: '\\frac{5\\pi}{4}',
    FOUR_PI_OVER_THREE: '\\frac{4\\pi}{3}',
    THREE_PI_OVER_TWO: '\\frac{3\\pi}{2}',
    FIVE_PI_OVER_THREE: '\\frac{5\\pi}{3}',
    SEVEN_PI_OVER_FOUR: '\\frac{7\\pi}{4}',
    ELEVEN_PI_OVER_SIX: '\\frac{11\\pi}{6}',
    TWO_PI: '2\\pi',
    THREE_PI: '3\\pi',
    FOUR_PI: '4\\pi',
    FIVE_PI: '5\\pi',
    SIX_PI: '6\\pi',
    NEG_PI_OVER_SIX: '-\\frac{\\pi}{6}',
    NEG_PI_OVER_FOUR: '-\\frac{\\pi}{4}',
    NEG_PI_OVER_THREE: '-\\frac{\\pi}{3}',
    NEG_PI_OVER_TWO: '-\\frac{\\pi}{2}',
    NEG_TWO_PI_OVER_THREE: '-\\frac{2\\pi}{3}',
    NEG_THREE_PI_OVER_FOUR: '-\\frac{3\\pi}{4}',
    NEG_FIVE_PI_OVER_SIX: '-\\frac{5\\pi}{6}',
    NEG_PI: '-\\pi',
    NEG_SEVEN_PI_OVER_SIX: '-\\frac{7\\pi}{6}',
    NEG_FIVE_PI_OVER_FOUR: '-\\frac{5\\pi}{4}',
    NEG_FOUR_PI_OVER_THREE: '-\\frac{4\\pi}{3}',
    NEG_THREE_PI_OVER_TWO: '-\\frac{3\\pi}{2}',
    NEG_FIVE_PI_OVER_THREE: '-\\frac{5\\pi}{3}',
    NEG_SEVEN_PI_OVER_FOUR: '-\\frac{7\\pi}{4}',
    NEG_ELEVEN_PI_OVER_SIX: '-\\frac{11\\pi}{6}',
    NEG_TWO_PI: '-2\\pi',
    NEG_THREE_PI: '-3\\pi',
    NEG_FOUR_PI: '-4\\pi',
    NEG_FIVE_PI: '-5\\pi',
    NEG_SIX_PI: '-6\\pi',
})

latexStringsDegrees = Object.freeze({
    ZERO: '0^{\\circ}',
    PI_OVER_SIX: '30^{\\circ}',
    PI_OVER_FOUR: '45^{\\circ}',
    PI_OVER_THREE: '60^{\\circ}',
    PI_OVER_TWO: '90^{\\circ}',
    TWO_PI_OVER_THREE: '120^{\\circ}',
    THREE_PI_OVER_FOUR: '135^{\\circ}',
    FIVE_PI_OVER_SIX: '150^{\\circ}',
    PI: '180^{\\circ}',
    SEVEN_PI_OVER_SIX: '210^{\\circ}',
    FIVE_PI_OVER_FOUR: '225^{\\circ}',
    FOUR_PI_OVER_THREE: '240^{\\circ}',
    THREE_PI_OVER_TWO: '270^{\\circ}',
    FIVE_PI_OVER_THREE: '300^{\\circ}',
    SEVEN_PI_OVER_FOUR: '315^{\\circ}',
    ELEVEN_PI_OVER_SIX: '330^{\\circ}',
    TWO_PI: '360^{\\circ}',
    THREE_PI: '540^{\\circ}',
    FOUR_PI: '720^{\\circ}',
    FIVE_PI: '900^{\\circ}',
    SIX_PI: '1080^{\\circ}',
    NEG_PI_OVER_SIX: '-30^{\\circ}',
    NEG_PI_OVER_FOUR: '-45^{\\circ}',
    NEG_PI_OVER_THREE: '-60^{\\circ}',
    NEG_PI_OVER_TWO: '-90^{\\circ}',
    NEG_TWO_PI_OVER_THREE: '-120^{\\circ}',
    NEG_THREE_PI_OVER_FOUR: '-135^{\\circ}',
    NEG_FIVE_PI_OVER_SIX: '-150^{\\circ}',
    NEG_PI: '-180^{\\circ}',
    NEG_SEVEN_PI_OVER_SIX: '-210^{\\circ}',
    NEG_FIVE_PI_OVER_FOUR: '-225^{\\circ}',
    NEG_FOUR_PI_OVER_THREE: '-240^{\\circ}',
    NEG_THREE_PI_OVER_TWO: '-270^{\\circ}',
    NEG_FIVE_PI_OVER_THREE: '-300^{\\circ}',
    NEG_SEVEN_PI_OVER_FOUR: '-315^{\\circ}',
    NEG_ELEVEN_PI_OVER_SIX: '-330^{\\circ}',
    NEG_TWO_PI: '-360^{\\circ}',
    NEG_THREE_PI: '540^{\\circ}',
    NEG_FOUR_PI: '-720^{\\circ}',
    NEG_FIVE_PI: '-900^{\\circ}',
    NEG_SIX_PI: '-1080^{\\circ}'
});

function reset() {
    document.getElementById("attempted").innerHTML = "0";
    document.getElementById("correct").innerHTML = "0";
    document.getElementById("percent").innerHTML = "0";
    document.getElementById("currentStreak").innerHTML = "0";
}

function setNegative() {
    answerNegative = true;
    document.getElementById('negative').style.backgroundColor = "darkblue";
    document.getElementById('negative').style.color = "white";
    document.getElementById('positive').style.backgroundColor = "lightsteelblue";
    document.getElementById('positive').style.color = "black";

}

function setPositive() {
    answerNegative = false;
    document.getElementById('positive').style.backgroundColor = "darkblue";
    document.getElementById('positive').style.color = "white";
    document.getElementById('negative').style.backgroundColor = "lightsteelblue";
    document.getElementById('negative').style.color = "black";
}

function updateStats(isCorrect) {
    var attempted = parseInt(document.getElementById('attempted').innerHTML) + 1;
    var correct = parseInt(document.getElementById('correct').innerHTML);
    var percent = parseInt(document.getElementById('percent').innerHTML);
    var currentStreak = parseInt(document.getElementById('currentStreak').innerHTML);
    //alert('attempted: ' + attempted + 'correct: ' + correct + 'percent: ' + percent + 'currentStreak: ' + currentStreak)
    if (isCorrect) {
        correct++;
        currentStreak++;
        percent = (100 * (correct / attempted)).toFixed(0);
    }

    else {
        //alert();
        currentStreak = 0;
        percent = (100 * (correct / attempted)).toFixed(0);
    }

    document.getElementById('attempted').innerHTML = attempted;
    document.getElementById('correct').innerHTML = correct;
    document.getElementById('percent').innerHTML = percent;
    document.getElementById('currentStreak').innerHTML = currentStreak;
}

function generatePrompt() {
    var allowedFunctions = Object.freeze({
        sin: document.getElementById('sine').checked,        //is sine allowed?
        cos: document.getElementById('cosine').checked,      //is cosine allowed?
        tan: document.getElementById('tangent').checked,     //is tangent allowed?
        csc: document.getElementById('cosecant').checked,    //is cosecant allowed?
        sec: document.getElementById('secant').checked,      //is secant allowed?
        cot: document.getElementById('cotangent').checked    //is cotangent allowed?
    });

    var allowedQuadrants = Object.freeze({
        Q1: document.getElementById('Q1').checked,    //are Q1 angles allowed?
        Q2: document.getElementById('Q2').checked,    //are Q2 angles allowed?
        Q3: document.getElementById('Q3').checked,    //are Q3 angles allowed?
        Q4: document.getElementById('Q4').checked     //are Q4 angles allowed?
    });

    if (!(document.getElementById('Q1').checked || document.getElementById('Q2').checked || document.getElementById('Q3').checked || document.getElementById('Q4').checked)) {
        alert("You must choose at least one quadrant. Why not QI?");
        document.getElementById('Q1').checked = true;
        allowedQuadrants['Q1'] = true;
    }

    var negativeAnglesAllowed = document.getElementById('negatives').checked;           //are negative angles allowed?

    var biggerThanPiAnglesAllowed = document.getElementById('biggerThanPi').checked;    //are angles bigger than pi allowed?

    var functionCollection = [];
    if (allowedFunctions['sin']) { functionCollection.push(sin); }
    if (allowedFunctions['cos']) { functionCollection.push(cos); }
    if (allowedFunctions['tan']) { functionCollection.push(tan); }
    if (allowedFunctions['csc']) { functionCollection.push(csc); }
    if (allowedFunctions['sec']) { functionCollection.push(sec); }
    if (allowedFunctions['cot']) { functionCollection.push(cot); }

    if (functionCollection.length === 0) {
        alert("You must use at least one function. Why not try sine?");
        document.getElementById('sine').checked = true;
        functionCollection.push(sin);
    }

    var angleCollection = [
        'ZERO',
        'PI_OVER_SIX',
        'PI_OVER_FOUR',
        'PI_OVER_THREE',
        'PI_OVER_TWO',
        'TWO_PI_OVER_THREE',
        'THREE_PI_OVER_FOUR',
        'FIVE_PI_OVER_SIX',
        'PI',
        'SEVEN_PI_OVER_SIX',
        'FIVE_PI_OVER_FOUR',
        'FOUR_PI_OVER_THREE',
        'THREE_PI_OVER_TWO',
        'FIVE_PI_OVER_THREE',
        'SEVEN_PI_OVER_FOUR',
        'ELEVEN_PI_OVER_SIX',
        'TWO_PI',
        'THREE_PI',
        'FOUR_PI',
        'FIVE_PI',
        'SIX_PI',
        'NEG_PI_OVER_SIX',
        'NEG_PI_OVER_FOUR',
        'NEG_PI_OVER_THREE',
        'NEG_PI_OVER_TWO',
        'NEG_TWO_PI_OVER_THREE',
        'NEG_THREE_PI_OVER_FOUR',
        'NEG_FIVE_PI_OVER_SIX',
        'NEG_PI',
        'NEG_SEVEN_PI_OVER_SIX',
        'NEG_FIVE_PI_OVER_FOUR',
        'NEG_FOUR_PI_OVER_THREE',
        'NEG_THREE_PI_OVER_TWO',
        'NEG_FIVE_PI_OVER_THREE',
        'NEG_SEVEN_PI_OVER_FOUR',
        'NEG_ELEVEN_PI_OVER_SIX',
        'NEG_TWO_PI',
        'NEG_THREE_PI',
        'NEG_FOUR_PI',
        'NEG_FIVE_PI',
        'NEG_SIX_PI'
    ];

    var angleDelete = function (angle) {
        if (angleCollection.indexOf(angle) > -1) {
            angleCollection.splice(angleCollection.indexOf(angle), 1);
        }
    }

    if (!negativeAnglesAllowed) {
        angleDelete('NEG_PI_OVER_SIX');
        angleDelete('NEG_PI_OVER_FOUR');
        angleDelete('NEG_PI_OVER_THREE');
        angleDelete('NEG_PI_OVER_TWO');
        angleDelete('NEG_TWO_PI_OVER_THREE');
        angleDelete('NEG_THREE_PI_OVER_FOUR');
        angleDelete('NEG_FIVE_PI_OVER_SIX');
        angleDelete('NEG_PI');
        angleDelete('NEG_SEVEN_PI_OVER_SIX');
        angleDelete('NEG_FIVE_PI_OVER_FOUR');
        angleDelete('NEG_FOUR_PI_OVER_THREE');
        angleDelete('NEG_THREE_PI_OVER_TWO');
        angleDelete('NEG_FIVE_PI_OVER_THREE');
        angleDelete('NEG_SEVEN_PI_OVER_FOUR');
        angleDelete('NEG_ELEVEN_PI_OVER_SIX');
        angleDelete('NEG_TWO_PI');
        angleDelete('NEG_THREE_PI');
        angleDelete('NEG_FOUR_PI');
        angleDelete('NEG_FIVE_PI');
        angleDelete('NEG_SIX_PI')
    }

    if (!allowedQuadrants['Q1']) {
        //angleDelete('ZERO');
        angleDelete('PI_OVER_SIX');
        angleDelete('PI_OVER_FOUR');
        angleDelete('PI_OVER_THREE');
        //angleDelete('PI_OVER_TWO');
        angleDelete('TWO_PI');
        angleDelete('FOUR_PI');
        angleDelete('SIX_PI');
        //angleDelete('NEG_THREE_PI_OVER_TWO');
        angleDelete('NEG_FIVE_PI_OVER_THREE');
        angleDelete('NEG_SEVEN_PI_OVER_FOUR');
        angleDelete('NEG_ELEVEN_PI_OVER_SIX');
        //angleDelete('NEG_TWO_PI');
        angleDelete('NEG_FOUR_PI');
        angleDelete('NEG_SIX_PI');
    }

    if (!allowedQuadrants['Q2']) {
        //angleDelete('PI_OVER_TWO');
        angleDelete('TWO_PI_OVER_THREE');
        angleDelete('THREE_PI_OVER_FOUR');
        angleDelete('FIVE_PI_OVER_SIX');
        angleDelete('PI');
        angleDelete('THREE_PI');
        angleDelete('FIVE_PI');
        angleDelete('NEG_PI');
        angleDelete('NEG_SEVEN_PI_OVER_SIX');
        angleDelete('NEG_FIVE_PI_OVER_FOUR');
        angleDelete('NEG_FOUR_PI_OVER_THREE');
        //angleDelete('NEG_THREE_PI_OVER_TWO');
    }

    if (!allowedQuadrants['Q3']) {
        angleDelete('PI');
        angleDelete('SEVEN_PI_OVER_SIX');
        angleDelete('FIVE_PI_OVER_FOUR');
        angleDelete('FOUR_PI_OVER_THREE');
        //angleDelete('THREE_PI_OVER_TWO');
        angleDelete('PI');
        angleDelete('THREE_PI');
        angleDelete('FIVE_PI');
        angleDelete('NEG_PI');
        //angleDelete('NEG_PI_OVER_TWO');
        angleDelete('NEG_TWO_PI_OVER_THREE');
        angleDelete('NEG_THREE_PI_OVER_FOUR');
        angleDelete('NEG_FIVE_PI_OVER_SIX');
        angleDelete('NEG_PI');
        angleDelete('NEG_THREE_PI');
        angleDelete('NEG_FOUR_PI');
        angleDelete('NEG_FIVE_PI');
    }

    if (!allowedQuadrants['Q4']) {
        angleDelete('THREE_PI_OVER_TWO');
        angleDelete('FIVE_PI_OVER_THREE');
        angleDelete('SEVEN_PI_OVER_FOUR');
        angleDelete('ELEVEN_PI_OVER_SIX');
        angleDelete('TWO_PI');
        angleDelete('NEG_PI_OVER_SIX');
        angleDelete('NEG_PI_OVER_FOUR');
        angleDelete('NEG_PI_OVER_THREE');
        angleDelete('NEG_PI_OVER_TWO');
    }

    if (!biggerThanPiAnglesAllowed) {
        angleDelete('SEVEN_PI_OVER_SIX');
        angleDelete('FIVE_PI_OVER_FOUR');
        angleDelete('FOUR_PI_OVER_THREE');
        angleDelete('THREE_PI_OVER_TWO');
        angleDelete('FIVE_PI_OVER_THREE');
        angleDelete('SEVEN_PI_OVER_FOUR');
        angleDelete('ELEVEN_PI_OVER_SIX');
        angleDelete('TWO_PI');
        angleDelete('THREE_PI');
        angleDelete('FOUR_PI');
        angleDelete('FIVE_PI');
        angleDelete('SIX_PI');
        angleDelete('NEG_PI');
        angleDelete('NEG_SEVEN_PI_OVER_SIX');
        angleDelete('NEG_FIVE_PI_OVER_FOUR');
        angleDelete('NEG_FOUR_PI_OVER_THREE');
        angleDelete('NEG_THREE_PI_OVER_TWO');
        angleDelete('NEG_FIVE_PI_OVER_THREE');
        angleDelete('NEG_SEVEN_PI_OVER_FOUR');
        angleDelete('NEG_ELEVEN_PI_OVER_SIX');
        angleDelete('NEG_TWO_PI');
        angleDelete('NEG_THREE_PI');
        angleDelete('NEG_FOUR_PI');
        angleDelete('NEG_FIVE_PI');
        angleDelete('NEG_SIX_PI');
    }

    promptFunction = getRandom(functionCollection);
    promptArgument = getRandom(angleCollection);
    currentCorrectAnswer = promptFunction[promptArgument];
    if (document.getElementById('unit_r').checked) {
        document.getElementById('prompt').innerHTML = (
            '\\[\\' +
            String(promptFunction) +
            '\\left(' +
            latexStrings[promptArgument] +
            '\\right)\\]'
            );
    }

    else {
        document.getElementById('prompt').innerHTML = (
            '\\[\\' +
            String(promptFunction) +
            '\\left(' +
            latexStringsDegrees[promptArgument] +
            '\\right)\\]'
            );
    }

    MathJax.Hub.Typeset();

}

function checkAnswer(answer) {
    if (answerNegative) { answer = '-' + answer; }
    var isCorrect = (answer === currentCorrectAnswer);
    answerNegative ? console.log('-' + answer) : console.log(answer); //utility for developer
    if (currentCorrectAnswer) { flash(isCorrect); }
    if (currentCorrectAnswer) { updateStats(isCorrect); }
    setPositive();
    generatePrompt();
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function flash(correct) {
    if (correct) {
        document.getElementById('inputPanel').style.backgroundColor = 'forestgreen';
        document.getElementById('showInputPanel').style.backgroundColor = 'forestgreen';
        window.setTimeout(function () {
            document.getElementById('inputPanel').style.backgroundColor = 'lavender';
            document.getElementById('showInputPanel').style.backgroundColor = 'lavender';
        }, 150);
    }

    else {
        document.getElementById('inputPanel').style.backgroundColor = 'tomato';
        document.getElementById('showInputPanel').style.backgroundColor = 'tomato';
        window.setTimeout(function () {
            document.getElementById('inputPanel').style.backgroundColor = 'lavender';
            document.getElementById('showInputPanel').style.backgroundColor = 'lavender';
        }, 150);
    }
}
