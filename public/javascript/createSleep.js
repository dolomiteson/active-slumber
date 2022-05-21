async function createSleep(event) {
    event.preventDefault();
    
    //createSleep page imports
    const sleep_title = document.querySelector('#sleep-title').value.trim();
    const sleep_description = document.querySelector('#sleep-description').value.trim();
    const hours_slept = document.querySelector('#hours-slept').value.trim();
    const dream_sw = document.querySelector('#dream-sw').value.trim();
    console.log(dream_sw);
    const dream_description = document.querySelector('#dream-description').value.trim();
    const tagIds = document.querySelector('.tag-dropdown').value;
    
    // Post sleep info to the DB
    if (sleep_title && sleep_description && hours_slept && dream_sw && dream_description && tagIds) {
        const response = await fetch('/api/users/sleep', {
            method: 'post',
            body: JSON.stringify({
                sleep_title,
                sleep_description,
                hours_slept,
                dream_sw,
                dream_description,
                tagIds
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

// Function to show Dream Descripyion when check box + checked
function showDreamDescription() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("dream-description-cont");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      checkBox.value = "true"
      text.style.display = "block";
    } else {
      checkBox.value = "false"
      text.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
});

document.querySelector('.sleep-form').addEventListener('submit', createSleep);
