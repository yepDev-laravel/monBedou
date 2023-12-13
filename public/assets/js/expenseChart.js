// public/js/scripts.js
  
document.addEventListener('DOMContentLoaded', function () {
    // Extract data from HTML
    const revenueSources = document.querySelectorAll('[data-sourceD]');
    const data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: chartColors,
        }],
    };

    revenueSources.forEach((source) => {

        const sourceName = source.dataset.sourced;
        const sourceAmount = parseFloat(source.dataset.amountd.replace('$', '').replace(',', ''));
        data.labels.push(sourceName);
        data.datasets[0].data.push(sourceAmount);
    });

    // Create pie chart
    const ctx = document.getElementById('depensePieChart').getContext('2d');
    const depensePieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
    });
});
