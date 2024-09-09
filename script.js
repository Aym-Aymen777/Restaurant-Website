document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;
    
    // Create a new table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${people}</td>
    `;
    
    // Add the new row to the table
    document.querySelector('#reservation-table tbody').appendChild(newRow);
    
    // Clear the form
    document.getElementById('reservation-form').reset();
});