function LoadDataJSON(key) {
    const jsonData = localStorage.getItem(key);
    return JSON.parse(jsonData);
}

function loadContent(data) {
    const t1 = document.getElementById('title1');
    t1.innerHTML = data.leointro.title;
    const i1 = document.getElementById('i1');
    i1.innerHTML = data.brief.description;
    const t2 = document.getElementById('title2');
    t2.innerHTML = data.portfolio.mainheading;
    const s1 = document.getElementById('sub1');
    s1.innerHTML = data.portfolio.subheading;
    const d1 = document.getElementById('d1');
    d1.innerHTML = data.portfolio.content[0].title;
    const d2 = document.getElementById('d2');
    d2.innerHTML = data.portfolio.content[0].description;
    const d3 = document.getElementById('d3');
    d3.innerHTML = data.portfolio.content[1].title;
    const d4 = document.getElementById('d4');
    d4.innerHTML = data.portfolio.content[1].description;
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