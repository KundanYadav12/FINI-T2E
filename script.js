let currentStep = 1;
showStep(currentStep);

function showStep(step) {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach((stepElement, index) => {
        if (index === step - 1) {
            stepElement.classList.add('active');
        } else {
            stepElement.classList.remove('active');
        }
        console.log(`Showing Step: ${step}`);
    });
}

function nextStep(step, event) {
    event.preventDefault(); // Prevent the default action  
    console.log(`Next Step: Attempting to move to step ${step} from step ${currentStep}`);currentStep = step;
    showStep(currentStep);
    
}

function prevStep(step, event) {
    event.preventDefault(); // Prevent the default action
    console.log(`Previous Step: Attempting to move back to step ${step} from step ${currentStep}`);
    currentStep = step;
    showStep(currentStep);
     
}





 


 
 








// Variables to store selected options
let selectedGender = '';
let selectedAge = '';

// Function to handle gender selection
function selectGender(gender) {
    selectedGender = gender;
    document.querySelectorAll('.btn-gender').forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
}

// Function to handle age selection
function selectAge(age) {
    selectedAge = age;
    document.querySelectorAll('.btn-age').forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
}

// Function to handle form submission and navigation
function submitData() {
    if (selectedGender && selectedAge) {
        alert(`Selected Gender: ${selectedGender}\nSelected Age: ${selectedAge}`);
        // Proceed to the next step
        nextStep(4);
    } else {
        alert('Please select both gender and age.');
    }
}

// Function to handle step navigation
function nextStep(step) {
    // Logic to hide current step and show the next step
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
}

