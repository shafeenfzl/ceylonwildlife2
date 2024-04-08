function LoadDataJSON(key) {
    const jsonData = localStorage.getItem(key);
    return JSON.parse(jsonData);
}

function loadContent(data) {
    const titleElement = document.getElementById('heading');
    titleElement.innerHTML = data.sections[0].content.heading;
    const btnElement = document.getElementById('button_text');
    btnElement.innerHTML = data.sections[0].content.button_text;
    const pElement = document.getElementById('paragraph');
    pElement.innerHTML = data.sections[1].content.paragraph;
    const n1Element = document.getElementById('name1');
    n1Element.innerHTML = data.sections[1].content.protected_areas[0].name;
    const n2Element = document.getElementById('name2');
    n2Element.innerHTML = data.sections[1].content.protected_areas[1].name;
    const n3Element = document.getElementById('name3');
    n3Element.innerHTML = data.sections[1].content.protected_areas[2].name;
    const n4Element = document.getElementById('name4');
    n4Element.innerHTML = data.sections[1].content.protected_areas[3].name;
    const n5Element = document.getElementById('name5');
    n5Element.innerHTML = data.sections[1].content.protected_areas[4].name;
    const n6Element = document.getElementById('name6');
    n6Element.innerHTML = data.sections[1].content.protected_areas[5].name;
    const n7Element = document.getElementById('name7');
    n7Element.innerHTML = data.sections[1].content.protected_areas[6].name;
    const n8Element = document.getElementById('name8');
    n8Element.innerHTML = data.sections[1].content.protected_areas[7].name;
    const n9Element = document.getElementById('name9');
    n9Element.innerHTML = data.sections[1].content.protected_areas[8].name
    const n10Element = document.getElementById('name10');
    n10Element.innerHTML = data.sections[1].content.protected_areas[9].name
    const t2Element = document.getElementById('title2');
    t2Element.innerHTML = data.sections[2].content.heading;
    const s1Element = document.getElementById('sub1');
    s1Element.innerHTML = data.sections[2].content.subheading;
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