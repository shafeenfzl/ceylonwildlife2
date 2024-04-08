const loggedIn = localStorage.getItem('loggedIn');
if (!loggedIn) {
    window.location.href = 'login.html';
}

function LoadDataJSON(key) {
    const jsonData = localStorage.getItem(key);
    return JSON.parse(jsonData);
}

function loadContent(data) {
    const titleElement = document.getElementById('heading');
    titleElement.innerHTML = data.Isections[0].content.text.h1;
    const btnElement = document.getElementById('button_text');
    btnElement.innerHTML = data.Isections[0].content.text.button.text;
    const title2Element = document.getElementById('title2');
    title2Element.innerHTML = data.Isections[1].content1.about.content.h2;
    const sub2Element = document.getElementById('sub2');
    sub2Element.innerHTML = data.Isections[1].content1.about.content.h4;
    const p2Element = document.getElementById('p2');
    p2Element.innerHTML = data.Isections[1].content1.about.content.p;
    const de1Element = document.getElementById('de1');
    de1Element.innerHTML = data.Isections[1].content1.about.aboutgri.aboutin[0].h5;
    const de2Element = document.getElementById('de2');
    de2Element.innerHTML = data.Isections[1].content1.about.aboutgri.aboutin[1].h5;
    const de3Element = document.getElementById('de3');
    de3Element.innerHTML = data.Isections[1].content1.about.aboutgri.aboutin[2].h5;
    const de4Element = document.getElementById('de4');
    de4Element.innerHTML = data.Isections[1].content1.about.aboutgri.aboutin[3].h5;
    const tit3Element = document.getElementById('title3');
    tit3Element.innerHTML = data.Isections[2].content2.maintext.h2;
    const sub3Element = document.getElementById('sub3');
    sub3Element.innerHTML = data.Isections[2].content2.maintext.h4;
    const c1Element = document.getElementById('c1');
    c1Element.innerHTML = data.Isections[2].content2.servicescontent.box[0].h3;
    const cs1Element = document.getElementById('cs1');
    cs1Element.innerHTML = data.Isections[2].content2.servicescontent.box[0].p;
    const c2Element = document.getElementById('c2');
    c2Element.innerHTML = data.Isections[2].content2.servicescontent.box[1].h3;
    const cs2Element = document.getElementById('cs2');
    cs2Element.innerHTML = data.Isections[2].content2.servicescontent.box[1].p;
    const c3Element = document.getElementById('c3');
    c3Element.innerHTML = data.Isections[2].content2.servicescontent.box[2].h3;
    const cs3Element = document.getElementById('cs3');
    cs3Element.innerHTML = data.Isections[2].content2.servicescontent.box[2].p;
    const tit4Element = document.getElementById('title4');
    tit4Element.innerHTML = data.Isections[3].content3.guidetext.h2;
    const sub4Element = document.getElementById('sub4');
    sub4Element.innerHTML = data.Isections[3].content3.guidetext.h4;
    const inf1Element = document.getElementById('info1');
    inf1Element.innerHTML = data.Isections[3].content3.guidetext.p;
    const tit5Element = document.getElementById('title5');
    tit5Element.innerHTML = data.Isections[4].content4.maintext.h2;
    const sub5Element = document.getElementById('sub5');
    sub5Element.innerHTML = data.Isections[4].content4.maintext.h4;
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