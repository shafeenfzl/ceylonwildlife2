function LoadDataJSON(key) {
    const jsonData = localStorage.getItem(key);
    return JSON.parse(jsonData);
}

function loadContent(data) {
    const title1Element = document.getElementById('title1');
    title1Element.innerHTML = data.udpark.pkhead.title;
    const sub1Element = document.getElementById('sub1');
    sub1Element.innerHTML = data.udpark.pkhead.description;
    const title2Element = document.getElementById('title2');
    title2Element.innerHTML = data.udpark.pkinfo.pks.pkcontent.title;
    const p1Element = document.getElementById('para1');
    p1Element.innerHTML = data.udpark.pkinfo.pks.pkcontent.description;
    const th1Element = document.getElementById('th1');
    th1Element.innerHTML = data.udpark.maintext.title;
    const sh1Element = document.getElementById('sh1');
    sh1Element.innerHTML = data.udpark.maintext.description;
    const c1Element = document.getElementById('c1');
    c1Element.innerHTML = data.udpark.pktb.seccontainer.sectable.thead.tbhead.columns[0];
    const c2Element = document.getElementById('c2');
    c2Element.innerHTML = data.udpark.pktb.seccontainer.sectable.thead.tbhead.columns[1];
    const c3Element = document.getElementById('c3');
    c3Element.innerHTML = data.udpark.pktb.seccontainer.sectable.thead.tbhead.columns[2];
    const c4Element = document.getElementById('c4');
    c4Element.innerHTML = data.udpark.pktb.seccontainer.sectable.thead.tbhead.columns[3];
    const d1Element = document.getElementById('d1');
    d1Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[0].Species;
    const d2Element = document.getElementById('d2');
    d2Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[0].Habitat;
    const d3Element = document.getElementById('d3');
    d3Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[0].Facts;
    const d4Element = document.getElementById('d4');
    d4Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[0].Conservation;
    const d5Element = document.getElementById('d5');
    d5Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[1].Species;
    const d6Element = document.getElementById('d6');
    d6Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[1].Habitat;
    const d7Element = document.getElementById('d7');
    d7Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[1].Facts;
    const d8Element = document.getElementById('d8');
    d8Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[1].Conservation;
    const d9Element = document.getElementById('d9');
    d9Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[2].Species;
    const d10Element = document.getElementById('d10');
    d10Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[2].Habitat;
    const d11Element = document.getElementById('d11');
    d11Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[2].Facts;
    const d12Element = document.getElementById('d12');
    d12Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[2].Conservation;
    const d13Element = document.getElementById('d13');
    d13Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[3].Species;
    const d14Element = document.getElementById('d14');
    d14Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[3].Habitat;
    const d15Element = document.getElementById('d15');
    d15Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[3].Facts;
    const d16Element = document.getElementById('d16');
    d16Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tbody.animals[3].Conservation;
    const f1Element = document.getElementById('f1');
    f1Element.innerHTML = data.udpark.pktb.seccontainer.sectable.tfoot.message;
    const th2e = document.getElementById('th2');
    th2e.innerHTML = data.hortonpark.pkhead.title;
    const sh2e = document.getElementById('sh2');
    sh2e.innerHTML = data.hortonpark.pkhead.description;
    const t3e = document.getElementById('title3');
    t3e.innerHTML = data.hortonpark.pkinfo.pks.pkcontent.title;
    const p2e = document.getElementById('para2');
    p2e.innerHTML = data.hortonpark.pkinfo.pks.pkcontent.description;
    const c5Element = document.getElementById('c5');
    c5Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.thead.tbhead.columns[0];
    const c6Element = document.getElementById('c6');
    c6Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.thead.tbhead.columns[1];
    const c7Element = document.getElementById('c7');
    c7Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.thead.tbhead.columns[2];
    const c8Element = document.getElementById('c8');
    c8Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.thead.tbhead.columns[3];
    const e1Element = document.getElementById('e1');
    e1Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[0].Species;
    const e2Element = document.getElementById('e2');
    e2Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[0].Habitat;
    const e3Element = document.getElementById('e3');
    e3Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[0].Facts;
    const e4Element = document.getElementById('e4');
    e4Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[0].Conservation;
    const e5Element = document.getElementById('e5');
    e5Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[1].Species;
    const e6Element = document.getElementById('e6');
    e6Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[1].Habitat;
    const e7Element = document.getElementById('e7');
    e7Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[1].Facts;
    const e8Element = document.getElementById('e8');
    e8Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[1].Conservation;
    const e9Element = document.getElementById('e9');
    e9Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[2].Species;
    const e10Element = document.getElementById('e10');
    e10Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[2].Habitat;
    const e11Element = document.getElementById('e11');
    e11Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[2].Facts;
    const e12Element = document.getElementById('e12');
    e12Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[2].Conservation;
    const e13Element = document.getElementById('e13');
    e13Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[3].Species;
    const e14Element = document.getElementById('e14');
    e14Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[3].Habitat;
    const e15Element = document.getElementById('e15');
    e15Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[3].Facts;
    const e16Element = document.getElementById('e16');
    e16Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tbody.animals[3].Conservation;
    const f2Element = document.getElementById('f2');
    f2Element.innerHTML = data.hortonpark.pktb.seccontainer.sectable.tfoot.message;
}

function LoadLocalStrg() {
    if (!localStorage.getItem('data')) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('data', JSON.stringify(data));
                loadContent(data);
            })
            .catch(error => console.error('Error fetching JSON:', error));
    } else {
        const data = LoadDataJSON('data');
        loadContent(data);
    }
}

LoadLocalStrg();