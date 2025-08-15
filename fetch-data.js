async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create and append user list
        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Invoke when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    fetchUserData();
});
