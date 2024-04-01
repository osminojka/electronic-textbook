let score = 0;

function ZaMirZaKiev () {
    score = 0;

    if (document.getElementById('1-A').checked) score++
    if (document.getElementById('2-C').checked) score++
    if (document.getElementById('3-A').checked) score++
    if (document.getElementById('4-A').checked) score++
    if (document.getElementById('5-C').checked) score++
    if (document.getElementById('6-D').checked) score++
    if (document.getElementById('7-D').checked) score++
    if (document.getElementById('8-A').checked) score++
    if (document.getElementById('9-B').checked) score++
    if (document.getElementById('10-A').checked) score++
    if (document.getElementById('11-B').checked) score++
    if (document.getElementById('12-C').checked) score++
    if (document.getElementById('13-B').checked) score++
    if (document.getElementById('14-C').checked) score++
    if (document.getElementById('15-C').checked) score++
    if (document.getElementById('16-A').checked) score++
    if (document.getElementById('17-C').checked) score++

    console.log(score);

    return `Правильных ответов - ${score},\nНеправильных ответов - ${17 - score}.`
    
}