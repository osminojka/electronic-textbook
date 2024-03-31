let score = 0;

function ZaMirZaKiev () {
    score = 0;

    if (document.getElementById('1-A').checked) score++
    if (document.getElementById('2-A').checked) score++
    if (document.getElementById('3-A').checked) score++
    if (document.getElementById('4-A').checked) score++
    if (document.getElementById('5-A').checked) score++
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
    if (document.getElementById('17-A').checked) score++
    if (document.getElementById('18-A').checked) score++
    if (document.getElementById('19-A').checked) score++
    if (document.getElementById('20-A').checked) score++
    if (document.getElementById('21-A').checked) score++
    if (document.getElementById('22-A').checked) score++
    if (document.getElementById('23-A').checked) score++
    if (document.getElementById('24-A').checked) score++
    if (document.getElementById('25-A').checked) score++
    if (document.getElementById('26-A').checked) score++
    if (document.getElementById('27-A').checked) score++
    if (document.getElementById('28-A').checked) score++
    if (document.getElementById('29-A').checked) score++
    if (document.getElementById('30-A').checked) score++
    if (document.getElementById('31-A').checked) score++
    if (document.getElementById('32-A').checked) score++
    if (document.getElementById('33-A').checked) score++
    if (document.getElementById('34-A').checked) score++
    if (document.getElementById('35-A').checked) score++
    if (document.getElementById('36-A').checked) score++

    console.log(score);

    return `Правильных ответов - ${score};\nНеправильных ответов - ${17 - score}.`
    
}