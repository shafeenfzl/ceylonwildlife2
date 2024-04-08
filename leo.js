function LoadDataJSON(key) {
    const jsonData = localStorage.getItem(key);
    return JSON.parse(jsonData);
}

function loadContent(data) {
    const t1 = document.getElementById('title1');
    t1.innerHTML = data.Lsections[0].content.leotext.h1;
    const t2 = document.getElementById('title2');
    t2.innerHTML = data.Lsections[1].content.maintext.h2;
    const s1 = document.getElementById('sub1');
    s1.innerHTML = data.Lsections[1].content.maintext.h4;
    const t3 = document.getElementById('title3');
    t3.innerHTML = data.Lsections[1].content.venuecontent[0].box.h3;
    const s2 = document.getElementById('sub2');
    s2.innerHTML = data.Lsections[1].content.venuecontent[0].box.p;
    const t4 = document.getElementById('title4');
    t4.innerHTML = data.Lsections[1].content.venuecontent[1].box.h3;
    const s3 = document.getElementById('sub3');
    s3.innerHTML = data.Lsections[1].content.venuecontent[1].box.p;
    const t5 = document.getElementById('title5');
    t5.innerHTML = data.Lsections[1].content.venuecontent[2].box.h3;
    const s4 = document.getElementById('sub4');
    s4.innerHTML = data.Lsections[1].content.venuecontent[2].box.p;
    const t6 = document.getElementById('title6');
    t6.innerHTML = data.Lsections[2].content.maintext2.h2;
    const s5 = document.getElementById('sub5');
    s5.innerHTML = data.Lsections[2].content.maintext2.h4;
    const d1 = document.getElementById('d1');
    d1.innerHTML = data.Lsections[3].content.threatstext.threatsgri.threatsin.h5;
    const d2 = document.getElementById('d2');
    d2.innerHTML = data.Lsections[3].content.threatstext.threatsgri.h4;
    const i1 = document.getElementById('i1');
    i1.innerHTML = data.Lsections[3].content.threatstext.threatsgri.p;
    const d3 = document.getElementById('d3');
    d3.innerHTML = data.Lsections[4].content.threatstext.threatsgri.threatsin.h5;
    const d4 = document.getElementById('d4');
    d4.innerHTML = data.Lsections[4].content.threatstext.threatsgri.h4;
    const i2 = document.getElementById('i2');
    i2.innerHTML = data.Lsections[4].content.threatstext.threatsgri.p;
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