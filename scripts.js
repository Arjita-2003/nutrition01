document.getElementById('nutrition-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const food = document.getElementById('food').value;
    const calories = document.getElementById('calories').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${food} - ${calories} calories`;

    // Append the new list item to the nutrition list
    document.getElementById('nutrition-list').appendChild(li);

    // Clear the form fields
    document.getElementById('nutrition-form').reset();
});
