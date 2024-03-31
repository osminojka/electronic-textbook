let score = 0;

function ZaMirZaKiev () {
    score = 0;

    if (document.getElementById('1-B').checked) score++
    if (document.getElementById('2-B').checked) score++
    if (document.getElementById('3-A').checked) score++
    if (document.getElementById('4-B').checked) score++
    if (document.getElementById('5-C').checked) score++
    if (document.getElementById('6-A').checked) score++
    if (document.getElementById('7-B').checked) score++
    if (document.getElementById('8-D').checked) score++
    if (document.getElementById('9-D').checked) score++
    if (document.getElementById('10-B').checked) score++
    if (document.getElementById('11-D').checked) score++
    if (document.getElementById('12-A').checked) score++
    if (document.getElementById('13-C').checked) score++
    if (document.getElementById('14-C').checked) score++
    if (document.getElementById('15-A').checked) score++
    if (document.getElementById('16-A').checked) score++
    if (document.getElementById('17-A').checked) score++
    if (document.getElementById('18-A').checked) score++
    if (document.getElementById('19-A').checked) score++
    if (document.getElementById('20-D').checked) score++
    if (document.getElementById('21-A').checked) score++
    if (document.getElementById('22-A').checked) score++
    if (document.getElementById('23-D').checked) score++
    if (document.getElementById('24-B').checked) score++
    if (document.getElementById('25-A').checked) score++
    if (document.getElementById('26-A').checked) score++
    if (document.getElementById('27-B').checked) score++
    if (document.getElementById('28-C').checked) score++
    if (document.getElementById('29-C').checked) score++
    if (document.getElementById('30-D').checked) score++
    if (document.getElementById('31-A').checked) score++
    if (document.getElementById('32-A').checked) score++
    if (document.getElementById('33-B').checked) score++
    if (document.getElementById('34-D').checked) score++
    if (document.getElementById('35-B').checked) score++
    if (document.getElementById('36-B').checked) score++

    console.log(score);

    return `Правильных ответов - ${score};\nНеправильных ответов - ${36 - score}.`
    
}