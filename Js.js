const companies = [
    { name: "Petrobras", description: "Maior empresa de energia do Brasil, especializada em petróleo e gás." },
    { name: "Vale", description: "Uma das maiores mineradoras do mundo, com foco em minério de ferro." },
    { name: "Itaú Unibanco", description: "Um dos maiores bancos do Brasil, com presença global." },
    { name: "Bradesco", description: "Banco líder em serviços financeiros no Brasil." },
    { name: "JBS", description: "Maior empresa de proteína animal do mundo, com sede no Brasil." },
    { name: "Ambev", description: "Maior cervejaria da América Latina, dona de marcas como Skol e Brahma." },
    { name: "Magazine Luiza", description: "Varejista brasileira líder em e-commerce e lojas físicas." },
    { name: "Natura", description: "Empresa de cosméticos e produtos de beleza, com foco em sustentabilidade." },
    { name: "Banco do Brasil", description: "Banco público brasileiro com mais de 200 anos de história." }
];

function loadCompanies() {
    const companyList = document.getElementById("companyList");
    companyList.innerHTML = companies.map(company => `
        <div class="company-card">
            <h3>${company.name}</h3>
            <p>${company.description}</p>
        </div>
    `).join("");
}

function searchCompanies() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchTerm) ||
        company.description.toLowerCase().includes(searchTerm)
    );

    const companyList = document.getElementById("companyList");
    companyList.innerHTML = filteredCompanies.map(company => `
        <div class="company-card">
            <h3>${company.name}</h3>
            <p>${company.description}</p>
        </div>
    `).join("");
}

window.onload = loadCompanies;