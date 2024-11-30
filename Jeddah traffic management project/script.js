// Save form data and redirect
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('trafficForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const location = document.getElementById('location').value;
            const trafficDensity = document.getElementById('traffic-density').value;
            const issue = document.getElementById('issue').value;
            const description = document.getElementById('description').value;
            const reporter = document.getElementById('reporter').value || 'Anonymous';
            
            const reportData = {
                location,
                trafficDensity,
                issue,
                description,
                reporter
            };
            
            // Get existing reports from localStorage
            const reports = JSON.parse(localStorage.getItem('reports')) || [];
            reports.push(reportData);
            
            // Save updated reports back to localStorage
            localStorage.setItem('reports', JSON.stringify(reports));
            
            // Redirect to the report page
            window.location.href = 'report.html';
        });
    }
    
    // Display reports on the report page
    const reportTable = document.querySelector('#reportTable tbody');
    if (reportTable) {
        const reports = JSON.parse(localStorage.getItem('reports')) || [];
        
        reports.forEach(report => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${report.location}</td>
                <td>${report.trafficDensity}</td>
                <td>${report.issue}</td>
                <td>${report.description}</td>
                <td>${report.reporter}</td>
            `;
            reportTable.appendChild(row);
        });
    }
});

