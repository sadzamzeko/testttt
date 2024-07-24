const cards2Data = () => {
    return fetch('cards2.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    cards2Data().then(jsonData => {
        generateCards2HTML(jsonData);
    });
    faqAnswer();
    burgerMenu();
 
});

function generateCards2HTML(data) {
    let html = '';
    const container = document.getElementById('cards2-container');

    data.forEach(item => {
        html += `
            <div class="card2">
                <img src="assets/img/Icon Button.png" alt="arrowOne" class="arrowOne" id="arrowOne">
                <img src="${item.imageURL}" alt="${item.name}" >
                <img src="assets/img/Frame 92.png" alt="arrowW" class="arrowW" id="arrowW">
                <div class="card2-content">
                    <h4 class="allHomeName">${item.name}</h4>
                    <p class="titleDesk">${item.desc}</p>
                    <span class="priceText">${item.price}</span>
                    <span>₾</span><br/>
                    <button type="button"  class="cartButton">კალათაში დამატება</button">
               
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}
