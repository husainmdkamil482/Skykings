           function bookFlight() {
            const from = document.getElementById('from').value;
            const to = document.getElementById('to').value;
            const date = document.getElementById('date').value;
            const passengers = document.getElementById('passengers').value;
            
            if (from && to && date && passengers) {
                document.getElementById('confirmation').innerText = `Flight booked from ${from} to ${to} on ${date} for ${passengers} passenger(s).`;
            } else {
                alert('Please fill in all fields.');
            }
            
                function resetForm() {
                  document.getElementById("myForm").reset();
                }
            
              
        }