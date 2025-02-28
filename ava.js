document.addEventListener('DOMContentLoaded', function() {
    const companies = [
        { name: "McDonald's", rating: 4.7, reviews: 1200, image: "https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png" },
        { name: "Burger King", rating: 4.5, reviews: 950, image: "https://logos-world.net/wp-content/uploads/2020/11/Burger-King-Logo.png" },
        { name: "Shell", rating: 4.6, reviews: 800, image: "https://logos-world.net/wp-content/uploads/2020/09/Shell-Logo.png" },
        { name: "Petrobras", rating: 4.4, reviews: 700, image: "https://logos-world.net/wp-content/uploads/2020/12/Petrobras-Logo.png" },
        { name: "Subway", rating: 4.3, reviews: 600, image: "https://logos-world.net/wp-content/uploads/2020/04/Subway-Logo.png" },
        { name: "Starbucks", rating: 4.8, reviews: 1500, image: "https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png" }
    ];

    const companyList = document.getElementById('companyList');

    function renderCompanies(filteredCompanies) {
        companyList.innerHTML = '';
        filteredCompanies.forEach(company => {
            const card = document.createElement('div');
            card.className = 'col-md-6';
            card.innerHTML = `
                <div class="company-card">
                    <img src="${company.image}" alt="${company.name}">
                    <div>
                        <h3>${company.name}</h3>
                        <p><span class="star-rating">${'★'.repeat(Math.floor(company.rating))}${'☆'.repeat(5 - Math.floor(company.rating))}</span> ${company.rating}</p>
                        <p>${company.reviews} avaliações</p>
                    </div>
                </div>
            `;
            companyList.appendChild(card);
        });
    }

    renderCompanies(companies);

    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = document.querySelector('input[type="search"]').value.toLowerCase();
        const filteredCompanies = companies.filter(company => company.name.toLowerCase().includes(searchTerm));
        renderCompanies(filteredCompanies);
    });
});