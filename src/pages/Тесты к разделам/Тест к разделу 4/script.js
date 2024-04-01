let score = 0;

function ZaMirZaKiev () {
    score = 0;

    if (document.getElementById('1-B').checked) score++
    if (document.getElementById('2-A').checked) score++
    if (document.getElementById('3-B').checked) score++
    if (document.getElementById('4-C').checked) score++
    if (document.getElementById('5-B').checked) score++
    if (document.getElementById('6-A').checked) score++
    if (document.getElementById('7-A').checked) score++
    if (document.getElementById('8-A').checked) score++
    if (document.getElementById('9-A').checked) score++
    if (document.getElementById('10-A').checked) score++
    if (document.getElementById('11-A').checked) score++
    if (document.getElementById('12-A').checked) score++
    if (document.getElementById('13-A').checked) score++
    if (document.getElementById('14-A').checked) score++
    if (document.getElementById('15-A').checked) score++
    if (document.getElementById('16-A').checked) score++

    console.log(score);

    return `Правильных ответов - ${score};\nНеправильных ответов - ${16 - score}.`
    
}