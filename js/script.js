async function getData() {
    return fetch("../data/aathichudi.json")
        .then(response => response.json());
}
const data  = await getData();
const log = document.getElementById('table').getElementsByTagName('tbody')[0];
var string = "";
Object.keys(data).forEach(key => {
    var obj = data[key];
    string += `<tr>
            <td data-label="Native Letter">${obj.char}</td>
            <td data-label="Native Sentence">${obj.native_sentence}</td>
            <td data-label="English Meaning">${obj.english_meaning}</td>
          </tr>`;
});
log.innerHTML = string;