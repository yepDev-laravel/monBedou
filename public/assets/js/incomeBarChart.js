// Add this script to your HTML
document.addEventListener('DOMContentLoaded', function () {
    // Extract data from HTML
    const cardElements = document.querySelectorAll('[data-label]');
    const labels = [];
    const data = [];
    const colors = [];

    cardElements.forEach((element) => {
        const label = element.dataset.label;
        const amount = parseFloat(element.dataset.amount.replace('$', '').replace(',', ''));
        const color = element.dataset.color;

        labels.push(label);
        data.push(amount);
        colors.push(color);
    });

    // Create bar chart
    const ctx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Amount ($)',
                data: data,
                backgroundColor: colors.map(color => getComputedStyle(document.documentElement).getPropertyValue(`--${color}`).trim()),
                borderColor: colors.map(color => getComputedStyle(document.documentElement).getPropertyValue(`--${color}`).trim()),

                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
