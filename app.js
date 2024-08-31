document.getElementById('filter-btn').addEventListener('click', filterEvents);

// Sample Event Data with Images
const eventsData = [
    {
        title: 'Music Festival',
        description: 'A fun-filled music festival.',
        location: 'New York',
        date: '2024-09-01',
        type: 'Music',
        image: 'https://th.bing.com/th/id/OIP.iSBl-A1L-u09y3ro75t6yAHaE7?w=285&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
        title: 'Art Exhibition',
        description: 'Explore the works of local artists.',
        location: 'Los Angeles',
        date: '2024-09-05',
        type: 'Art',
        image: 'https://th.bing.com/th?id=OIP.UTP_u_U7JL2zsyZ-MAhidAAAAA&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
        title: 'Football Match',
        description: 'Exciting football match between two local teams.',
        location: 'Chicago',
        date: '2024-09-10',
        type: 'Sports',
        image: 'https://th.bing.com/th/id/OIP.7DmgtFjgKjoe8hvDm5NL-AHaEo?rs=1&pid=ImgDetMain'
    }
];

// Display all events on page load
document.addEventListener('DOMContentLoaded', () => {
    displayEvents(eventsData);
});

function displayEvents(events) {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';  // Clear previous results

    if (events.length === 0) {
        eventsContainer.innerHTML = '<p>No events found.</p>';
    } else {
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.innerHTML = `
                <img src="${event.image}" alt="${event.title}">
                <div class="event-content">
                    <h2>${event.title}</h2>
                    <p>${event.description}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p class="event-date"><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
                    <p><strong>Type:</strong> ${event.type}</p>
                </div>
            `;
            eventsContainer.appendChild(eventElement);
        });
    }
}

function filterEvents() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const eventType = document.getElementById('event-type').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();
    const date = document.getElementById('date').value;

    const filteredEvents = eventsData.filter(event => {
        return (
            (searchQuery === '' || event.title.toLowerCase().includes(searchQuery)) &&
            (eventType === '' || event.type.toLowerCase().includes(eventType)) &&
            (location === '' || event.location.toLowerCase().includes(location)) &&
            (date === '' || event.date === date)
        );
    });

    displayEvents(filteredEvents);
}
