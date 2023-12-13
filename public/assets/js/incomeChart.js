// public/js/scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Extract data from HTML
    const revenueSources = document.querySelectorAll('[data-sourceI]');
    const data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: chartColors,
        }],
    };

    revenueSources.forEach((source) => {

        const sourceName = source.dataset.sourcei;
        const sourceAmount = parseFloat(source.dataset.amounti.replace('$', '').replace(',', ''));
        data.labels.push(sourceName);
        data.datasets[0].data.push(sourceAmount);
    });

    // Create pie chart
    const ctx = document.getElementById('revenuePieChart').getContext('2d');
    const revenuePieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
    });
});
