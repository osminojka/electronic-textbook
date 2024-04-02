let score = 0;

function ZaMirZaKiev() {
    score = 0;

    if (document.getElementById('1-B').checked) score++
    if (document.getElementById('2-A').checked) score++
    if (document.getElementById('3-B').checked) score++
    if (document.getElementById('4-C').checked) score++
    if (document.getElementById('5-B').checked) score++
    if (document.getElementById('6-B').checked) score++
    if (document.getElementById('7-C').checked) score++
    if (document.getElementById('8-B').checked) score++
    if (document.getElementById('9-D').checked) score++
    if (document.getElementById('10-B').checked) score++
    if (document.getElementById('11-AB').checked) score++
    if (document.getElementById('11-BD').checked) score++
    if (document.getElementById('11-CC').checked) score++
    if (document.getElementById('11-DA').checked) score++
    if (document.getElementById('12-D').checked) score++
    if (document.getElementById('13-C').checked) score++
    if (document.getElementById('13-E').checked) score++
    if (document.getElementById('14-E').checked) score++


    console.log(score);

    return `Правильных ответов - ${score};\nНеправильных ответов - ${16 - score}.`
    
}