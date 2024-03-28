const jsonData = [
    {"name": "02/29/2024 NY", "asset": "assets/a1.jpg"},
    {"name": "03/02/2024 NY", "asset": "assets/a2.jpg"},
    {"name": "03/05/2024 NY", "asset": "assets/a3.jpg"},
    {"name": "03/06/2024 NY", "asset": "assets/a4.jpg"},
    {"name": "03/08/2024 NY", "asset": "assets/a5.jpg"},
    {"name": "03/09/2024 NY", "asset": "assets/a6.jpg"},
    {"name": "03/11/2024 NY", "asset": "assets/a7.jpg"},
    {"name": "03/12/2024 NY", "asset": "assets/a8.jpg"},
    {"name": "03/15/2024 NY", "asset": "assets/a9.jpg"},
    {"name": "03/19/2024 NY", "asset": "assets/a10.jpg"},
    {"name": "02/29/2024 PA", "asset": "assets/h1.jpg"},
    {"name": "03/01/2024 PA", "asset": "assets/h2.jpg"},
    {"name": "03/02/2024 PA", "asset": "assets/h3.jpg"},
    {"name": "03/05/2024 PA", "asset": "assets/h4.jpg"},
    {"name": "03/06/2024 PA", "asset": "assets/h5.jpg"},
    {"name": "03/07/2024 PA", "asset": "assets/h6.jpg"},
    {"name": "03/09/2024 PA", "asset": "assets/h7.jpg"},
    {"name": "03/12/2024 PA", "asset": "assets/h8.jpg"},
    {"name": "03/16/2024 PA", "asset": "assets/h9.jpg"},
    {"name": "03/20/2024 PA", "asset": "assets/h10.jpg"},
];
document.addEventListener("DOMContentLoaded", function() {
    const nyContainer = document.getElementById('NY-container');
    const paContainer = document.getElementById('PA-container');

    jsonData.forEach(item => {
        const element = document.createElement('div');
        element.className = 'grid-item row';

        const nameElement = document.createElement('p');
        nameElement.textContent = item.name;

        const imageElement = document.createElement('img');
        imageElement.src = item.asset;
        imageElement.alt = item.name;

        element.appendChild(nameElement);
        element.appendChild(imageElement);

        imageElement.style.display = 'none'; 

        element.addEventListener('click', function() {
            this.classList.toggle('active');
            imageElement.style.display = imageElement.style.display === 'none' ? 'block' : 'none';
            
            // Toggle the inactive class based on the active state
            if (this.classList.contains('active')) {
                this.classList.remove('inactive');
            } else {
                this.classList.add('inactive');
            }
        });

        if (item.name.includes("NY")) {
            nyContainer.appendChild(element);
        } else if (item.name.includes("PA")) {
            paContainer.appendChild(element);
        }
    });
});