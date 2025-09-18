// ===== PROFILES DATA FILE =====
// Sorthiya Damji Samaj - Matrimonial Website v1.01
// Contact: Jignesh Makwana (8082422478)
// This file contains all matrimonial profile data

const profilesData = [
    {
        id: 1,
        profileImage: '',
        fullName: '',
        gender: '',
        dateOfBirth: '',
        age: '32',
        height: '5\'4"',
        weight: '54 kg',
        maritalStatus: 'Married',
        religion: 'Hindu',
        caste: 'Sorthiya Damji',
        motherTongue: 'Gujarati',
        nationality: 'Indian',
        
        // Education & Career
        education: 'B.Sc. IT, MCA',
        college: 'Veer Narmad South Gujarat University',
        occupation: 'Software Tester',
        jobTitle: 'Senior QA Engineer',
        company: 'Wipro Technologies',
        annualIncome: '₹9,60,000',
        
        // Family Details
        fatherName: 'Vallabhbhai Damji Raval',
        fatherOccupation: 'Diamond Business',
        motherName: 'Kokilaben Vallabh Raval',
        motherOccupation: 'Homemaker',
        siblings: '2 Brothers (Both Married)',
        familyStatus: 'Upper Middle Class',
        familyLocation: 'Surat, Gujarat',
        
        // Lifestyle & Hobbies
        diet: 'Vegetarian',
        drinking: 'Never',
        smoking: 'Never',
        hobbies: 'Technology, Cooking, Traveling, Bollywood Movies, Shopping',
        fitness: 'Aerobics and Walking',
        
        // Contact Details
        mobile: '9876543221',
        email: 'pooja.raval@email.com',
        currentAddress: 'Adajan, Surat, Gujarat',
        permanentAddress: 'Surat, Gujarat',
        
        // Partner Preferences
        preferredAgeRange: '27-31',
        preferredHeight: '5\'6" - 5\'11"',
        preferredReligion: 'Hindu',
        preferredEducation: 'B.E./B.Tech in IT or related field',
        preferredLocation: 'Surat, Ahmedabad, Mumbai, Pune',
        partnerExpectations: 'Looking for a tech-savvy, understanding partner who respects family values and enjoys exploring new places.',
        
        // Location for filtering
        location: 'Surat, Gujarat'
    }
];

// ===== ADMIN FUNCTIONS FOR PROFILE MANAGEMENT =====

// Function to add a new profile (Admin use)
function addProfile(profileData) {
    const newId = Math.max(...profilesData.map(p => p.id)) + 1;
    const newProfile = { id: newId, ...profileData };
    profilesData.push(newProfile);
    console.log(`✅ Profile added: ${newProfile.fullName} (ID: ${newId})`);
    return newProfile;
}

// Function to edit an existing profile (Admin use)
function editProfile(profileId, updatedData) {
    const profileIndex = profilesData.findIndex(p => p.id === profileId);
    if (profileIndex !== -1) {
        profilesData[profileIndex] = { ...profilesData[profileIndex], ...updatedData };
        console.log(`✅ Profile updated: ${profilesData[profileIndex].fullName} (ID: ${profileId})`);
        return profilesData[profileIndex];
    } else {
        console.error(`❌ Profile not found with ID: ${profileId}`);
        return null;
    }
}

// Function to delete a profile (Admin use)
function deleteProfile(profileId) {
    const profileIndex = profilesData.findIndex(p => p.id === profileId);
    if (profileIndex !== -1) {
        const deletedProfile = profilesData.splice(profileIndex, 1)[0];
        console.log(`🗑️ Profile deleted: ${deletedProfile.fullName} (ID: ${profileId})`);
        return deletedProfile;
    } else {
        console.error(`❌ Profile not found with ID: ${profileId}`);
        return null;
    }
}

// Function to get profile by ID
function getProfileById(profileId) {
    return profilesData.find(p => p.id === profileId);
}

// Function to get profiles by gender
function getProfilesByGender(gender) {
    return profilesData.filter(p => p.gender.toLowerCase() === gender.toLowerCase());
}

// Function to get profiles by location
function getProfilesByLocation(location) {
    return profilesData.filter(p => 
        p.location.toLowerCase().includes(location.toLowerCase()) ||
        p.familyLocation.toLowerCase().includes(location.toLowerCase())
    );
}

// Function to get profiles by age range
function getProfilesByAgeRange(minAge, maxAge) {
    return profilesData.filter(p => p.age >= minAge && p.age <= maxAge);
}

// Function to search profiles by name
function searchProfilesByName(searchTerm) {
    return profilesData.filter(p => 
        p.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        profilesData,
        addProfile,
        editProfile,
        deleteProfile,
        getProfileById,
        getProfilesByGender,
        getProfilesByLocation,
        getProfilesByAgeRange,
        searchProfilesByName
    };
}

// ===== SAMPLE ADMIN USAGE EXAMPLES =====
/*
// Add a new profile
const newProfile = {
    profileImage: 'https://example.com/photo.jpg',
    fullName: 'New Member Name',
    gender: 'Male',
    age: 25,
    // ... other required fields
};
addProfile(newProfile);

// Edit an existing profile
editProfile(1, { 
    annualIncome: '₹20,00,000',
    company: 'New Company Name'
});

// Delete a profile
deleteProfile(13);

// Search functionality
const maleProfiles = getProfilesByGender('Male');
const mumbaiProfiles = getProfilesByLocation('Mumbai');
const youngProfiles = getProfilesByAgeRange(20, 25);
*/

// ===== DATA STATISTICS =====
console.log(`
📊 Sorthiya Damji Samaj - Matrimonial Data Statistics
👥 Total Profiles: ${profilesData.length}
👨 Male Profiles: ${profilesData.filter(p => p.gender === 'Male').length}
👩 Female Profiles: ${profilesData.filter(p => p.gender === 'Female').length}
🏠 Locations Covered: ${[...new Set(profilesData.map(p => p.location.split(',')[1]?.trim() || p.location))].length}
📞 Contact: Jignesh Makwana (8082422478)
🔧 Version: 1.01
`);
