const jsonData = [
    {"name": "02/29/2024 NY", "asset": "assets/a1.jpg"},
    {"name": "02/29/2024 PA", "asset": "assets/h1.jpg"},
    {"name": "03/01/2024 PA", "asset": "assets/h2.jpg"},
    {"name": "03/02/2024 NY", "asset": "assets/a2.jpg"},
    {"name": "03/02/2024 PA", "asset": "assets/h3.jpg"},
    {"name": "03/05/2024 NY", "asset": "assets/a3.jpg"},
    {"name": "03/05/2024 PA", "asset": "assets/h4.jpg"},
    {"name": "03/06/2024 NY", "asset": "assets/a4.jpg"},
    {"name": "03/06/2024 PA", "asset": "assets/h5.jpg"},
    {"name": "03/07/2024 PA", "asset": "assets/h6.jpg"},
    {"name": "03/08/2024 NY", "asset": "assets/a5.jpg"},
    {"name": "03/09/2024 NY", "asset": "assets/a6.jpg"},
    {"name": "03/09/2024 PA", "asset": "assets/h7.jpg"},
    {"name": "03/11/2024 NY", "asset": "assets/a7.jpg"},
    {"name": "03/12/2024 NY", "asset": "assets/a8.jpg"},
    {"name": "03/12/2024 PA", "asset": "assets/h8.jpg"},
    {"name": "03/15/2024 NY", "asset": "assets/a9.jpg"},
    {"name": "03/16/2024 PA", "asset": "assets/h9.jpg"},
    {"name": "03/19/2024 NY", "asset": "assets/a10.jpg"},
    {"name": "03/20/2024 PA", "asset": "assets/h10.jpg"}
];

document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector('.grid-container');
    const nyButton = document.querySelector('.ny-button');
    const paButton = document.querySelector('.pa-button');

    // Set up initial grid with all images
    setupGrid(jsonData);

    // Add click event listeners to filter buttons
    nyButton.addEventListener('click', function() {
        filterImages('NY');
    });

    paButton.addEventListener('click', function() {
        filterImages('PA');
    });
});

function setupGrid(data) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Clear previous content

    data.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const image = document.createElement('img');
        image.src = item.asset;

        const name = document.createElement('p');
        name.textContent = item.name;

        gridItem.appendChild(image);
        gridContainer.appendChild(gridItem);
    });
}

function filterImages(category) {
    const filteredData = jsonData.filter(item => item.name.includes(category));
    setupGrid(filteredData);
}