function LoadDataJSON(key) {
    const jsonData = localStorage.getItem(key);
    return JSON.parse(jsonData);
}

function loadContent(data) {
    const t1 = document.getElementById('title1');
    t1.innerHTML = data.Ysections[0].content.text.heading;
    const p1 = document.getElementById('para1');
    p1.innerHTML = data.Ysections[1].content.car.text;
    const t2 = document.getElementById('title2');
    t2.innerHTML = data.Ysections[2].content.maintext.heading;
    const s1 = document.getElementById('sub1');
    s1.innerHTML = data.Ysections[2].content.maintext.subheading;
    const c1e = document.getElementById('c1');
    c1e.innerHTML = data.Ysections[2].content.galcard.boxes[0].overlay.heading;
    const d1 = document.getElementById('d1');
    d1.innerHTML = data.Ysections[2].content.galcard.boxes[0].overlay.text;
    const c2 = document.getElementById('c2');
    c2.innerHTML = data.Ysections[2].content.galcard.boxes[1].overlay.heading;
    const d2 = document.getElementById('d2');
    d2.innerHTML = data.Ysections[2].content.galcard.boxes[1].overlay.text;
    const c3 = document.getElementById('c3');
    c3.innerHTML = data.Ysections[2].content.galcard.boxes[2].overlay.heading;
    const d3 = document.getElementById('d3');
    d3.innerHTML = data.Ysections[2].content.galcard.boxes[2].overlay.text;
    const t3 = document.getElementById('title3');
    t3.innerHTML = data.Ysections[3].content.maintext.heading;
    const s2 = document.getElementById('sub2');
    s2.innerHTML = data.Ysections[3].content.maintext.subheading;
    const i1 = document.getElementById('i1');
    i1.innerHTML = data.Ysections[3].content.cards[0].title;
    const i2 = document.getElementById('i2');
    i2.innerHTML = data.Ysections[3].content.cards[1].title;
    const i3 = document.getElementById('i3');
    i3.innerHTML = data.Ysections[3].content.cards[2].title;
    const i4 = document.getElementById('i4');
    i4.innerHTML = data.Ysections[3].content.cards[3].title;
    const i5 = document.getElementById('i5');
    i5.innerHTML = data.Ysections[3].content.cards[4].title;
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