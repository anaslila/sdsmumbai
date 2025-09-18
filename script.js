// Load profiles when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProfiles();
});

// Load all profiles
function loadProfiles() {
    const profilesGrid = document.getElementById('profilesGrid');
    
    profilesGrid.innerHTML = users.map(user => `
        <div class="profile-card">
            <div class="profile-image">
                ${user.profileImage ? 
                    `<img src="${user.profileImage}" alt="${user.fullName}">` : 
                    `<i class="fas fa-user"></i>`
                }
            </div>
            <div class="profile-info">
                <h4 class="profile-name">${user.fullName}</h4>
                <div class="profile-detail">
                    <strong>Age:</strong>
                    <span>${user.age} years</span>
                </div>
                <div class="profile-detail">
                    <strong>Height:</strong>
                    <span>${user.height}</span>
                </div>
                <div class="profile-detail">
                    <strong>Occupation:</strong>
                    <span>${user.occupation}</span>
                </div>
                <div class="profile-detail">
                    <strong>Location:</strong>
                    <span>${user.location}</span>
                </div>
                <button onclick="showProfileDetails(${user.id})" class="btn btn-primary view-profile-btn">
                    View Full Profile
                </button>
            </div>
        </div>
    `).join('');
}

// Show profiles section
function showProfiles() {
    document.getElementById('profiles').scrollIntoView({
        behavior: 'smooth'
    });
}

// Search profiles
function searchProfiles() {
    const gender = document.getElementById('searchGender').value;
    const age = document.getElementById('searchAge').value;
    const location = document.getElementById('searchLocation').value.toLowerCase();
    
    let filteredUsers = users;
    
    if (gender) {
        filteredUsers = filteredUsers.filter(user => user.gender === gender);
    }
    
    if (age) {
        const [minAge, maxAge] = age.split('-').map(a => parseInt(a.replace('+', '')));
        filteredUsers = filteredUsers.filter(user => {
            const userAge = parseInt(user.age);
            if (maxAge) {
                return userAge >= minAge && userAge <= maxAge;
            } else {
                return userAge >= minAge;
            }
        });
    }
    
    if (location) {
        filteredUsers = filteredUsers.filter(user => 
            user.location.toLowerCase().includes(location)
        );
    }
    
    displayFilteredProfiles(filteredUsers);
    showProfiles();
}

// Display filtered profiles
function displayFilteredProfiles(filteredUsers) {
    const profilesGrid = document.getElementById('profilesGrid');
    
    if (filteredUsers.length === 0) {
        profilesGrid.innerHTML = '<div style="text-align: center; grid-column: 1/-1; padding: 40px;"><h3>No profiles found matching your criteria</h3></div>';
        return;
    }
    
    profilesGrid.innerHTML = filteredUsers.map(user => `
        <div class="profile-card">
            <div class="profile-image">
                ${user.profileImage ? 
                    `<img src="${user.profileImage}" alt="${user.fullName}">` : 
                    `<i class="fas fa-user"></i>`
                }
            </div>
            <div class="profile-info">
                <h4 class="profile-name">${user.fullName}</h4>
                <div class="profile-detail">
                    <strong>Age:</strong>
                    <span>${user.age} years</span>
                </div>
                <div class="profile-detail">
                    <strong>Height:</strong>
                    <span>${user.height}</span>
                </div>
                <div class="profile-detail">
                    <strong>Occupation:</strong>
                    <span>${user.occupation}</span>
                </div>
                <div class="profile-detail">
                    <strong>Location:</strong>
                    <span>${user.location}</span>
                </div>
                <button onclick="showProfileDetails(${user.id})" class="btn btn-primary view-profile-btn">
                    View Full Profile
                </button>
            </div>
        </div>
    `).join('');
}

// Show profile details in modal
function showProfileDetails(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    const modal = document.getElementById('profileModal');
    const profileDetails = document.getElementById('profileDetails');
    
    profileDetails.innerHTML = `
        <h2 style="color: #d4af37; margin-bottom: 20px;">${user.fullName}'s Profile</h2>
        
        <div class="profile-details-container">
            <div class="profile-details-image">
                ${user.profileImage ? 
                    `<img src="${user.profileImage}" alt="${user.fullName}">` : 
                    `<i class="fas fa-user"></i>`
                }
            </div>
            
            <div class="profile-details-info">
                <div class="profile-section">
                    <h4>Personal Details</h4>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Full Name:</strong>
                            <span>${user.fullName}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Gender:</strong>
                            <span>${user.gender}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Age:</strong>
                            <span>${user.age} years</span>
                        </div>
                        <div class="detail-item">
                            <strong>Height:</strong>
                            <span>${user.height}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Weight:</strong>
                            <span>${user.weight}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Marital Status:</strong>
                            <span>${user.maritalStatus}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Religion:</strong>
                            <span>${user.religion}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Caste:</strong>
                            <span>${user.caste}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Mother Tongue:</strong>
                            <span>${user.motherTongue}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Nationality:</strong>
                            <span>${user.nationality}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h4>Education & Career</h4>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Highest Education:</strong>
                            <span>${user.education}</span>
                        </div>
                        <div class="detail-item">
                            <strong>College/University:</strong>
                            <span>${user.college}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Occupation:</strong>
                            <span>${user.occupation}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Job Title:</strong>
                            <span>${user.jobTitle}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Company:</strong>
                            <span>${user.company}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Annual Income:</strong>
                            <span>${user.annualIncome}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h4>Family Details</h4>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Father's Name:</strong>
                            <span>${user.fatherName}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Father's Occupation:</strong>
                            <span>${user.fatherOccupation}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Mother's Name:</strong>
                            <span>${user.motherName}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Mother's Occupation:</strong>
                            <span>${user.motherOccupation}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Siblings:</strong>
                            <span>${user.siblings}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Family Status:</strong>
                            <span>${user.familyStatus}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Family Location:</strong>
                            <span>${user.familyLocation}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h4>Lifestyle & Hobbies</h4>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Diet:</strong>
                            <span>${user.diet}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Drinking:</strong>
                            <span>${user.drinking}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Smoking:</strong>
                            <span>${user.smoking}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Fitness:</strong>
                            <span>${user.fitness}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Hobbies & Interests:</strong>
                            <span>${user.hobbies}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h4>Contact Details</h4>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Mobile Number:</strong>
                            <span>${user.phone}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Email:</strong>
                            <span>${user.email}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Current Address:</strong>
                            <span>${user.currentAddress}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Permanent Address:</strong>
                            <span>${user.permanentAddress}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h4>Partner Preferences</h4>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Preferred Age Range:</strong>
                            <span>${user.preferredAgeRange}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Preferred Height:</strong>
                            <span>${user.preferredHeight}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Preferred Education:</strong>
                            <span>${user.preferredEducation}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Preferred Location:</strong>
                            <span>${user.preferredLocation}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item">
                            <strong>Partner Expectations:</strong>
                            <span>${user.partnerExpectations}</span>
                        </div>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                    <a href="tel:${user.phone}" class="btn btn-primary" style="margin-right: 10px;">
                        <i class="fas fa-phone"></i> Call Now
                    </a>
                    <a href="mailto:${user.email}" class="btn btn-secondary">
                        <i class="fas fa-envelope"></i> Send Email
                    </a>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('profileModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('profileModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Enter key support for search
document.getElementById('searchLocation').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProfiles();
    }
});
