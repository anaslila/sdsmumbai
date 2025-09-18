// Import users data
let usersData = [];

// Load users data when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadUsers();
    displayFeaturedProfiles();
    initializeEventListeners();
});

// Load users from users.js file
function loadUsers() {
    // In a real application, this would be loaded from users.js
    // For now, we'll initialize with sample data
    if (typeof users !== 'undefined') {
        usersData = users;
    } else {
        // Sample data for demonstration
        usersData = [
            {
                id: 1,
                fullName: "Rajesh Kumar Sorthiya",
                gender: "male",
                age: 28,
                height: "5'8\"",
                weight: "70 kg",
                occupation: "Software Engineer",
                education: "B.Tech Computer Science",
                location: "Mumbai, Maharashtra",
                phone: "+91 98765 43210",
                email: "rajesh.kumar@email.com",
                profileImage: "",
                maritalStatus: "Never Married",
                religion: "Hindu",
                caste: "Sorthiya Damji",
                motherTongue: "Gujarati",
                nationality: "Indian",
                college: "IIT Mumbai",
                jobTitle: "Senior Software Engineer",
                company: "TCS",
                annualIncome: "8-10 Lakhs",
                fatherName: "Ramesh Kumar Sorthiya",
                fatherOccupation: "Business",
                motherName: "Sunita Sorthiya",
                motherOccupation: "Homemaker",
                siblings: "1 Sister",
                familyStatus: "Middle Class",
                familyLocation: "Mumbai",
                diet: "Vegetarian",
                drinking: "No",
                smoking: "No",
                hobbies: "Reading, Traveling, Photography",
                fitness: "Regular Exercise",
                currentAddress: "Andheri West, Mumbai",
                permanentAddress: "Borivali, Mumbai",
                preferredAgeRange: "24-30",
                preferredHeight: "5'2\" to 5'6\"",
                preferredReligion: "Hindu",
                preferredEducation: "Graduate",
                preferredLocation: "Mumbai, Pune",
                partnerExpectations: "Looking for a caring and understanding partner"
            },
            {
                id: 2,
                fullName: "Priya Patel",
                gender: "female",
                age: 25,
                height: "5'4\"",
                weight: "55 kg",
                occupation: "Teacher",
                education: "M.A. English",
                location: "Ahmedabad, Gujarat",
                phone: "+91 98765 43211",
                email: "priya.patel@email.com",
                profileImage: "",
                maritalStatus: "Never Married",
                religion: "Hindu",
                caste: "Sorthiya Damji",
                motherTongue: "Gujarati",
                nationality: "Indian",
                college: "Gujarat University",
                jobTitle: "English Teacher",
                company: "Kendriya Vidyalaya",
                annualIncome: "4-5 Lakhs",
                fatherName: "Hitesh Patel",
                fatherOccupation: "Government Service",
                motherName: "Meena Patel",
                motherOccupation: "Homemaker",
                siblings: "1 Brother",
                familyStatus: "Middle Class",
                familyLocation: "Ahmedabad",
                diet: "Vegetarian",
                drinking: "No",
                smoking: "No",
                hobbies: "Dancing, Cooking, Reading",
                fitness: "Yoga",
                currentAddress: "Satellite, Ahmedabad",
                permanentAddress: "Maninagar, Ahmedabad",
                preferredAgeRange: "26-32",
                preferredHeight: "5'6\" to 6'0\"",
                preferredReligion: "Hindu",
                preferredEducation: "Graduate",
                preferredLocation: "Gujarat, Mumbai",
                partnerExpectations: "Looking for a respectful and family-oriented partner"
            },
            {
                id: 3,
                fullName: "Amit Shah",
                gender: "male",
                age: 30,
                height: "5'10\"",
                weight: "75 kg",
                occupation: "Business",
                education: "MBA",
                location: "Surat, Gujarat",
                phone: "+91 98765 43212",
                email: "amit.shah@email.com",
                profileImage: "",
                maritalStatus: "Never Married",
                religion: "Hindu",
                caste: "Sorthiya Damji",
                motherTongue: "Gujarati",
                nationality: "Indian",
                college: "NMIMS Mumbai",
                jobTitle: "Business Owner",
                company: "Own Business",
                annualIncome: "15+ Lakhs",
                fatherName: "Jayesh Shah",
                fatherOccupation: "Business",
                motherName: "Kiran Shah",
                motherOccupation: "Homemaker",
                siblings: "No Siblings",
                familyStatus: "Upper Middle Class",
                familyLocation: "Surat",
                diet: "Vegetarian",
                drinking: "Occasionally",
                smoking: "No",
                hobbies: "Cricket, Business, Traveling",
                fitness: "Gym",
                currentAddress: "Adajan, Surat",
                permanentAddress: "Katargam, Surat",
                preferredAgeRange: "24-28",
                preferredHeight: "5'2\" to 5'6\"",
                preferredReligion: "Hindu",
                preferredEducation: "Graduate",
                preferredLocation: "Gujarat, Rajasthan",
                partnerExpectations: "Looking for a supportive and modern-thinking partner"
            }
        ];
    }
}

// Display featured profiles on homepage
function displayFeaturedProfiles() {
    const featuredContainer = document.getElementById('featuredProfiles');
    if (!featuredContainer) return;

    // Show first 3 profiles as featured
    const featuredProfiles = usersData.slice(0, 3);
    
    featuredContainer.innerHTML = featuredProfiles.map(user => `
        <div class="profile-card">
            <div class="profile-image">
                ${user.profileImage ? 
                    `<img src="${user.profileImage}" alt="${user.fullName}">` : 
                    `<i class="fas fa-user"></i>`
                }
            </div>
            <div class="profile-info">
                <h4 class="profile-name">${user.fullName}</h4>
                <div class="profile-details">
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
                </div>
                <a href="profile.html?id=${user.id}" class="btn btn-primary">View Full Profile</a>
            </div>
        </div>
    `).join('');

    // Update total profiles count
    const totalProfilesElement = document.getElementById('totalProfiles');
    if (totalProfilesElement) {
        totalProfilesElement.textContent = `${usersData.length}+`;
    }
}

// Quick search functionality
function performQuickSearch() {
    const gender = document.getElementById('searchGender').value;
    const age = document.getElementById('searchAge').value;
    const education = document.getElementById('searchEducation').value;
    const location = document.getElementById('searchLocation').value;

    // Build query string
    const params = new URLSearchParams();
    if (gender) params.append('gender', gender);
    if (age) params.append('age', age);
    if (education) params.append('education', education);
    if (location) params.append('location', location);

    // Redirect to profiles page with search parameters
    window.location.href = `profiles.html?${params.toString()}`;
}

// Initialize event listeners
function initializeEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Search form enter key support
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performQuickSearch();
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate stats on scroll
    observeStatsAnimation();
}

// Animate statistics on scroll
function observeStatsAnimation() {
    const statsSection = document.querySelector('.hero-stats');
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(statsSection);
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (stat.textContent.includes('+')) {
                stat.textContent = Math.floor(current) + '+';
            } else if (stat.textContent.includes('%')) {
                stat.textContent = Math.floor(current) + '%';
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Utility functions for other pages

// Get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Format profile data for display
function formatProfileData(user) {
    return {
        ...user,
        displayAge: `${user.age} years`,
        displayHeight: user.height,
        displayWeight: user.weight,
        displayIncome: user.annualIncome,
        displayEducation: user.education,
        displayOccupation: `${user.jobTitle} at ${user.company}`,
        displayFamily: `${user.fatherName} (${user.fatherOccupation}), ${user.motherName} (${user.motherOccupation})`,
        displaySiblings: user.siblings,
        displayHobbies: user.hobbies,
        displayPreferences: `Age: ${user.preferredAgeRange}, Height: ${user.preferredHeight}, Location: ${user.preferredLocation}`
    };
}

// Search and filter functions
function searchProfiles(query, filters = {}) {
    let results = usersData;

    // Text search
    if (query) {
        results = results.filter(user => 
            user.fullName.toLowerCase().includes(query.toLowerCase()) ||
            user.occupation.toLowerCase().includes(query.toLowerCase()) ||
            user.education.toLowerCase().includes(query.toLowerCase()) ||
            user.location.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Apply filters
    if (filters.gender) {
        results = results.filter(user => user.gender === filters.gender);
    }

    if (filters.age) {
        const [minAge, maxAge] = filters.age.split('-').map(a => parseInt(a.replace('+', '')));
        results = results.filter(user => {
            const age = parseInt(user.age);
            if (maxAge) {
                return age >= minAge && age <= maxAge;
            } else {
                return age >= minAge; // For "41+" type ranges
            }
        });
    }

    if (filters.education) {
        results = results.filter(user => 
            user.education.toLowerCase().includes(filters.education.toLowerCase())
        );
    }

    if (filters.location) {
        results = results.filter(user => 
            user.location.toLowerCase().includes(filters.location.toLowerCase())
        );
    }

    if (filters.occupation) {
        results = results.filter(user => 
            user.occupation.toLowerCase().includes(filters.occupation.toLowerCase())
        );
    }

    return results;
}

// Sort profiles
function sortProfiles(profiles, sortBy) {
    return [...profiles].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.fullName.localeCompare(b.fullName);
            case 'age':
                return parseInt(a.age) - parseInt(b.age);
            case 'newest':
                return b.id - a.id; // Assuming higher ID means newer
            case 'income':
                // Simple income comparison (this would need more sophisticated parsing in real app)
                const incomeA = parseInt(a.annualIncome.replace(/[^\d]/g, ''));
                const incomeB = parseInt(b.annualIncome.replace(/[^\d]/g, ''));
                return incomeB - incomeA;
            default:
                return 0;
        }
    });
}

// Export for global access
window.usersData = usersData;
window.performQuickSearch = performQuickSearch;
window.searchProfiles = searchProfiles;
window.sortProfiles = sortProfiles;
window.getUrlParameter = getUrlParameter;
window.formatProfileData = formatProfileData;
