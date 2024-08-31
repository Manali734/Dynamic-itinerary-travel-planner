// script.js

const sourceInput = document.getElementById('sourceInput');
const destinationInput = document.getElementById('destinationInput');
const sourceSuggestionsContainer = document.getElementById('sourceSuggestions');
const destinationSuggestionsContainer = document.getElementById('destinationSuggestions');

const stations = [

    'Ahmedabad',
    'Bengaluru',
    'Chennai', 
    'Delhi', 
    'Hyderabad', 
    'Kolkata', 
    'Mumbai', 
    'Pune', 
    'Jaipur', 
    'Lucknow',
    'Chandigarh', 
    'Indore', 
    'Bhopal', 
    'Nagpur', 
    'Visakhapatnam', 
    'Vadodara', 
    'Surat', 
    'Agra', 
    'Patna', 
    'Kanpur',
    'Guwahati', 
    'Coimbatore', 
    'Thane', 
    'Navi Mumbai', 
    'Aurangabad', 
    'Madurai', 
    'Mysuru', 
    'Nashik', 
    'Jodhpur', 
    'Vijayawada',
    'Amritsar', 
    'Raipur', 
    'Ranchi', 
    'Shimla', 
    'Dehradun', 
    'Haridwar', 
    'Kota', 
    'Udaipur', 
    'Srinagar', 
    'Ludhiana',
    'Kochi', 
    'Trivandrum', 
    'Puducherry', 
    'Bhubaneswar', 
    'Gwalior', 
    'Meerut', 
    'Jabalpur', 
    'Dibrugarh', 
    'Shillong', 
    'Imphal',
    'Agartala', 
    'Aizawl', 
    'Itanagar', 
    'Gangtok', 
    'Port Blair', 
    'Dharmshala', 
    'Kullu', 
    'Manali', 
    'Rishikesh', 
    'Jaisalmer'
];

function showSuggestions(inputElement, suggestionsContainer) {
    const query = inputElement.value.toLowerCase();
    suggestionsContainer.innerHTML = '';

    if (query.length > 0) {
        const filteredStations = stations.filter(station => station.toLowerCase().includes(query));

        if (filteredStations.length > 0) {
            suggestionsContainer.style.opacity = '1';
            filteredStations.forEach(station => {
                const div = document.createElement('div');
                div.textContent = station;
                div.classList.add('suggestion-item');
                div.addEventListener('click', () => {
                    inputElement.value = station;
                    suggestionsContainer.innerHTML = '';
                    suggestionsContainer.style.opacity = '0';
                });
                suggestionsContainer.appendChild(div);
            });
        } else {
            suggestionsContainer.style.opacity = '0';
        }
    } else {
        suggestionsContainer.style.opacity = '0';
    }
}

sourceInput.addEventListener('input', () => showSuggestions(sourceInput, sourceSuggestionsContainer));
destinationInput.addEventListener('input', () => showSuggestions(destinationInput, destinationSuggestionsContainer));
