// Selecting elements

//Profile Pic
const  profilePic = document.getElementById("profilePic")
const profilePicture = document.getElementById("profilePicture")

//Personal Information
const myName = document.getElementById("name");
const nameDisplay = document.getElementById("nameDisplay");
const profession = document.getElementById("profession");
const professionDisplay= document.getElementById("professionDisplay");
const phoneDisplay = document.getElementById("phoneDisplay");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const emailDisplay = document.getElementById("emailDisplay");
const address = document.getElementById("address");
const addressDisplay = document.getElementById("addressDisplay");

//Socail Links
const github = document.getElementById("github");
const githubDisplay = document.getElementById("githubDisplay")
const linkedin = document.getElementById("linkedin")
const linkedinDisplay = document.getElementById("linkedinDisplay")
const projectLink = document.getElementById("projectLink")
const projectLinkDisplay = document.getElementById("projectLinkDisplay")
const facebook = document.getElementById("facebook")
const facebookDisplay = document.getElementById("facebookDisplay")


//Summaray
const addSummaryButton = document.getElementById("addSummaryButton");
const summaryContainer = document.querySelector(".summaryContainer");
const summaryList = document.getElementById("summaryList");

//Skills
const addSkillButton = document.getElementById("addSkillButton");
const skillsContainer = document.querySelector(".skillContainer");
const skillsList = document.getElementById("skillsList");

//Language
const addLanguageButton = document.getElementById("addLanguageButton");
const languagesContainer = document.querySelector(".languageContainer");
const languagesList = document.getElementById("languagesList");

//Education
const addEducationButton = document.getElementById("addEducationButton");
const educationContainer = document.querySelector(".educationContainer");
const educationList = document.getElementById("educationList");

//Experience
const companyName = document.getElementById("companyName");
const companyNameDisplay = document.getElementById("companyNameDisplay");
const startDate = document.getElementById("startDate")
const startDateDisplay = document.getElementById("startDateDisplay");
const endDate = document.getElementById("endDate")
const endDateDisplay = document.getElementById("endDateDisplay");
const workDescription = document.getElementById("workDescription")
const workExperienceDisplay = document.getElementById("workExperienceDisplay");


const formSection = document.getElementById("formSection");
const cvSection = document.getElementById("cvSection");
const generateCVButton = document.getElementById("generateCVButton");
const editButton = document.getElementById("editButton");
const printButton = document.getElementById("printButton");

// Add summary field dynamically
addSummaryButton.addEventListener("click", function() {
    const newSummaryField = document.createElement("textarea");
    newSummaryField.placeholder = "Describe your professional background";
    newSummaryField.classList.add("textarea");
    summaryContainer.insertBefore(newSummaryField, addSummaryButton);
});

// Add skill field dynamically
addSkillButton.addEventListener("click", function() {
    const newSkillField = document.createElement("textarea");
    newSkillField.placeholder = "Enter a skill";
    newSkillField.classList.add("textarea");
    skillsContainer.insertBefore(newSkillField, addSkillButton);
});

// Add language field dynamically
addLanguageButton.addEventListener("click", function() {
    const newLanguageField = document.createElement("textarea");
    newLanguageField.placeholder = "Enter a language";
    newLanguageField.classList.add("textarea");
    languagesContainer.insertBefore(newLanguageField, addLanguageButton);
});

// Add education field dynamically
addEducationButton.addEventListener("click", function() {
    const newEducationField = document.createElement("textarea");
    newEducationField.placeholder = "Enter more education details";
    newEducationField.classList.add("textarea");
    educationContainer.insertBefore(newEducationField, addEducationButton);
});




// Function to generate CV
function generateCV() {
    
    // Clear previous lists
    summaryList.innerHTML = "";
    skillsList.innerHTML = "";
    languagesList.innerHTML = "";
    educationList.innerHTML = "";
    
    
    //Profile Picture
    if (profilePicture.files && profilePicture.files[0]) {
        profilePic.src = URL.createObjectURL(profilePicture.files[0]);
    }
    
    //Personal Information
    nameDisplay.innerText = myName.value;
    professionDisplay.innerText = profession.value;
    phoneDisplay.innerText = phone.value;
    emailDisplay.innerText = email.value;
    addressDisplay.innerText = address.value;
    
    
    //Socail Links
    githubDisplay.setAttribute("href", github.value);   
    githubDisplay.innerText = github.value;
    
    linkedinDisplay.setAttribute("href", linkedin.value);
    linkedinDisplay.innerText = linkedin.value;
    
    projectLinkDisplay.setAttribute("href", projectLink.value);
    projectLinkDisplay.innerText = projectLink.value;
    
    facebookDisplay.setAttribute("href", facebook.value);
    facebookDisplay.innerText = facebook.value;
    console.log("Facebook link:", facebook.value);
    
    
    // Get all summary fields and display them
    const summaryFields = summaryContainer.querySelectorAll("textarea");
    summaryFields.forEach(summaryField => {
        const li = document.createElement("li");
        li.textContent = summaryField.value;
        summaryList.appendChild(li);
    });
    
    // Get all experienece fields and display them
    companyNameDisplay.innerText=companyName.value
    startDateDisplay.innerText = startDate.value
    workExperienceDisplay.innerText = workDescription.value
    endDateDisplay.innerText = endDate.value


    // Get all skill fields and display them
    const skillFields = skillsContainer.querySelectorAll("textarea");
    skillFields.forEach(skillField => {
        const li = document.createElement("li");
        li.textContent = skillField.value;
        skillsList.appendChild(li);
    });

    // Get all language fields and display them
    const languageFields = languagesContainer.querySelectorAll("textarea");
    languageFields.forEach(languageField => {
        const li = document.createElement("li");
        li.textContent = languageField.value;
        languagesList.appendChild(li);
    });

    // Get all education fields and display them
    const educationFields = educationContainer.querySelectorAll("textarea");
    educationFields.forEach(educationField => {
        const li = document.createElement("li");
        li.textContent = educationField.value;
        educationList.appendChild(li);
    });

     // Hide form and show CV
     formSection.style.display = "none";
     cvSection.style.display = "block";
     cvSection.classList.add("show-cv");
}

// Function to show the form and hide the CV when editing
function editCV() {
    formSection.style.display = "block";
    cvSection.style.display = "none";
}
// Function to handle printing
function printCV() {
    // Hide the Edit and Print buttons
    printButton.style.display = "none";
    editButton.style.display = "none";
    
    // Trigger the print dialog
    window.print();
    
    // Restore the visibility of the buttons after printing
    printButton.style.display = "block";
    editButton.style.display = "block";
}


// Event listeners
printButton.addEventListener("click", printCV);
generateCVButton.addEventListener("click", generateCV);
editButton.addEventListener("click", editCV);

// Add event listener for 'Generate CV' button
document.getElementById("generateCVButton").addEventListener("click", generateCV);


