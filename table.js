const companies = [
  ["Saab AB", "Stockholm", 1937],
  ["Volvo Group", "Göteborg", 1927],
  ["Sandvik AB", "Stockholm", 1862],
  ["Atlas Copco Group", "Nacka", 1873],
  ["Electrolux AB", "Stockholm", 1919],
  ["Skanska AB", "Stockholm", 1887],
];

function generateTable(){
  const table = document.createElement('table'); 

  companies.forEach(function(companyData) {
    const row = document.createElement('tr'); 

    companyData.forEach(function(cellData) {
      const cell = document.createElement('td');
      cell.textContent = cellData;
      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  return table;
}

function handleButtonClick() {
  const container = document.getElementById('table-container');

  container.innerHTML = '';

  container.appendChild(generateTable());

  container.style.display = 'block';
  }

document.getElementById('generateTableBtn').addEventListener('click', handleButtonClick);