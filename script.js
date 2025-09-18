// ===== GLOBAL VARIABLES =====
let allProfiles = [];
let filteredProfiles = [];
let displayedProfiles = 0;
const profilesPerPage = 9;
let isLoading = false;

// ===== DOM ELEMENTS =====
const profilesGrid = document.getElementById('profilesGrid');
const profileModal = document.getElementById('profileModal');
const modalContent = document.getElementById('modalContent');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const totalProfilesElement = document.getElementById('totalProfiles');
const mobileMenu = document.getElementById('mobileMenu');

// Filters
const genderFilter = document.getElementById('genderFilter');
const ageFilter = document.getElementById('ageFilter');
const locationFilter = document.getElementById('locationFilter');
const educationFilter = document.getElementById('educationFilter');
const sortBy = document.getElementById('sortBy');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadProfiles();
});

function initializeApp() {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize animations
    observeElements();
    
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', closeMobileMenuOnOutsideClick);
    
    console.log('🎉 Sorthiya Damji Samaj Matrimonial Website v1.01 Initialized');
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Modal close events
    window.addEventListener('click', closeModalOnOutsideClick);
    document.addEventListener('keydown', closeModalOnEscape);
    
    // Filter events
    if (genderFilter) genderFilter.addEventListener('change', filterProfiles);
    if (ageFilter) ageFilter.addEventListener('change', filterProfiles);
    if (locationFilter) locationFilter.addEventListener('input', debounce(filterProfiles, 300));
    if (educationFilter) educationFilter.addEventListener('change', filterProfiles);
    if (sortBy) sortBy.addEventListener('change', sortProfiles);
    
    // Load more button
    if (loadMoreBtn) loadMoreBtn.addEventListener('click', loadMoreProfiles);
}

// ===== NAVIGATION FUNCTIONS =====
function handleNavigation(e) {
    e.preventDefault();
    const href = e.target.closest('a').getAttribute('href');
    
    if (href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = 80;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active nav link
            updateActiveNavLink(href);
            
            // Close mobile menu if open
            closeMobileMenu();
        }
    }
}

function updateActiveNavLink(activeHref) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeHref) {
            link.classList.add('active');
        }
    });
}

function scrollToProfiles() {
    const profilesSection = document.getElementById('profiles');
    if (profilesSection) {
        const headerHeight = 80;
        const targetPosition = profilesSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// ===== MOBILE MENU FUNCTIONS =====
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeMobileMenuOnOutsideClick(e) {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && !e.target.closest('.mobile-menu-btn')) {
            closeMobileMenu();
        }
    }
}

// ===== HEADER SCROLL EFFECT =====
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 12, 41, 0.95)';
        header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(15, 12, 41, 0.15)';
        header.style.boxShadow = 'none';
    }
}

// ===== PROFILE DATA LOADING =====
async function loadProfiles() {
    try {
        showLoading();
        
        // Check if profiles.js is loaded
        if (typeof profilesData !== 'undefined' && profilesData.length > 0) {
            allProfiles = [...profilesData];
        } else {
            // Fallback: Generate sample profiles if no data available
            allProfiles = generateSampleProfiles();
        }
        
        filteredProfiles = [...allProfiles];
        updateTotalProfilesCount();
        renderProfiles();
        hideLoading();
        
        console.log(`✅ Loaded ${allProfiles.length} profiles`);
        
    } catch (error) {
        console.error('❌ Error loading profiles:', error);
        showError('Failed to load profiles. Please try again later.');
        hideLoading();
    }
}

function generateSampleProfiles() {
    const sampleProfiles = [
        {
            id: 1,
            profileImage: 'https://via.placeholder.com/200x200/4776E6/FFFFFF?text=JD',
            fullName: 'Jignesh Damji',
            gender: 'Male',
            age: 28,
            height: '5\'8"',
            occupation: 'Software Engineer',
            location: 'Mumbai, Maharashtra',
            education: 'B.Tech Computer Science',
            religion: 'Hindu',
            caste: 'Sorthiya Damji',
            maritalStatus: 'Single',
            mobile: '+91 9876543210',
            email: 'jignesh@example.com',
            dateOfBirth: '1995-05-15',
            weight: '70 kg',
            motherTongue: 'Gujarati',
            nationality: 'Indian',
            college: 'IIT Mumbai',
            jobTitle: 'Senior Developer',
            company: 'Tech Solutions Ltd',
            annualIncome: '₹12,00,000',
            fatherName: 'Ramesh Damji',
            fatherOccupation: 'Business',
            motherName: 'Sunita Damji',
            motherOccupation: 'Homemaker',
            siblings: '1 Brother, 1 Sister',
            familyStatus: 'Upper Middle Class',
            familyLocation: 'Mumbai, Maharashtra',
            diet: 'Vegetarian',
            drinking: 'Never',
            smoking: 'Never',
            hobbies: 'Reading, Cricket, Music',
            fitness: 'Regular Exercise',
            currentAddress: 'Mumbai, Maharashtra',
            permanentAddress: 'Rajkot, Gujarat',
            preferredAgeRange: '24-30',
            preferredHeight: '5\'2" - 5\'6"',
            preferredReligion: 'Hindu',
            preferredEducation: 'Graduate+',
            preferredLocation: 'Mumbai, Pune, Ahmedabad',
            partnerExpectations: 'Looking for a caring and understanding life partner'
        },
        {
            id: 2,
            profileImage: 'https://via.placeholder.com/200x200/F84464/FFFFFF?text=PD',
            fullName: 'Priya Damji',
            gender: 'Female',
            age: 25,
            height: '5\'4"',
            occupation: 'Teacher',
            location: 'Ahmedabad, Gujarat',
            education: 'M.Ed',
            religion: 'Hindu',
            caste: 'Sorthiya Damji',
            maritalStatus: 'Single',
            mobile: '+91 9876543211',
            email: 'priya@example.com',
            dateOfBirth: '1998-08-22',
            weight: '55 kg',
            motherTongue: 'Gujarati',
            nationality: 'Indian',
            college: 'Gujarat University',
            jobTitle: 'Primary Teacher',
            company: 'ABC School',
            annualIncome: '₹4,80,000',
            fatherName: 'Kishore Damji',
            fatherOccupation: 'Government Service',
            motherName: 'Meera Damji',
            motherOccupation: 'Homemaker',
            siblings: '2 Sisters',
            familyStatus: 'Middle Class',
            familyLocation: 'Ahmedabad, Gujarat',
            diet: 'Vegetarian',
            drinking: 'Never',
            smoking: 'Never',
            hobbies: 'Dancing, Cooking, Painting',
            fitness: 'Yoga',
            currentAddress: 'Ahmedabad, Gujarat',
            permanentAddress: 'Ahmedabad, Gujarat',
            preferredAgeRange: '26-32',
            preferredHeight: '5\'6" - 6\'0"',
            preferredReligion: 'Hindu',
            preferredEducation: 'Graduate+',
            preferredLocation: 'Gujarat, Maharashtra',
            partnerExpectations: 'Seeking a respectful and family-oriented person'
        },
        {
            id: 3,
            profileImage: 'https://via.placeholder.com/200x200/8E54E9/FFFFFF?text=AD',
            fullName: 'Arjun Damji',
            gender: 'Male',
            age: 30,
            height: '5\'10"',
            occupation: 'Doctor',
            location: 'Pune, Maharashtra',
            education: 'MBBS, MD',
            religion: 'Hindu',
            caste: 'Sorthiya Damji',
            maritalStatus: 'Single',
            mobile: '+91 9876543212',
            email: 'arjun@example.com',
            dateOfBirth: '1993-12-10',
            weight: '75 kg',
            motherTongue: 'Gujarati',
            nationality: 'Indian',
            college: 'Pune Medical College',
            jobTitle: 'Cardiologist',
            company: 'City Hospital',
            annualIncome: '₹18,00,000',
            fatherName: 'Mahesh Damji',
            fatherOccupation: 'Doctor',
            motherName: 'Kavita Damji',
            motherOccupation: 'Nurse',
            siblings: '1 Sister',
            familyStatus: 'Upper Middle Class',
            familyLocation: 'Pune, Maharashtra',
            diet: 'Vegetarian',
            drinking: 'Occasionally',
            smoking: 'Never',
            hobbies: 'Photography, Travel, Reading',
            fitness: 'Gym Regular',
            currentAddress: 'Pune, Maharashtra',
            permanentAddress: 'Rajkot, Gujarat',
            preferredAgeRange: '25-28',
            preferredHeight: '5\'2" - 5\'6"',
            preferredReligion: 'Hindu',
            preferredEducation: 'Graduate+',
            preferredLocation: 'Maharashtra, Gujarat',
            partnerExpectations: 'Looking for an educated and independent partner'
        }
    ];
    
    return sampleProfiles;
}

// ===== PROFILE RENDERING =====
function renderProfiles() {
    if (!profilesGrid) return;
    
    profilesGrid.innerHTML = '';
    displayedProfiles = 0;
    
    if (filteredProfiles.length === 0) {
        showNoProfilesMessage();
        return;
    }
    
    displayProfilesPage();
}

function displayProfilesPage() {
    const startIndex = displayedProfiles;
    const endIndex = Math.min(startIndex + profilesPerPage, filteredProfiles.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const profile = filteredProfiles[i];
        const profileCard = createProfileCard(profile);
        profilesGrid.appendChild(profileCard);
        
        // Add fade-in animation
        setTimeout(() => {
            profileCard.classList.add('fade-in');
        }, (i - startIndex) * 100);
    }
    
    displayedProfiles = endIndex;
    
    // Update load more button
    updateLoadMoreButton();
}

function createProfileCard(profile) {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.onclick = () => openProfileModal(profile);
    
    card.innerHTML = `
        <div class="profile-header">
            <img src="${profile.profileImage || 'https://via.placeholder.com/80x80/4776E6/FFFFFF?text=' + profile.fullName.charAt(0)}" 
                 alt="${profile.fullName}" 
                 class="profile-image"
                 onerror="this.src='https://via.placeholder.com/80x80/4776E6/FFFFFF?text=${profile.fullName.charAt(0)}'">
            <div class="profile-basic">
                <h3>${profile.fullName}</h3>
                <div class="age-gender">${profile.age} years, ${profile.gender}</div>
            </div>
        </div>
        <div class="profile-details">
            <div class="detail-item">
                <i class="fas fa-ruler-vertical"></i>
                <span>${profile.height}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-briefcase"></i>
                <span>${profile.occupation}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${profile.location}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-graduation-cap"></i>
                <span>${profile.education}</span>
            </div>
        </div>
        <button class="view-profile-btn">
            <i class="fas fa-eye"></i>
            View Full Profile
        </button>
    `;
    
    return card;
}

function showNoProfilesMessage() {
    profilesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
            <i class="fas fa-search" style="font-size: 4rem; color: var(--primary-red); margin-bottom: 20px;"></i>
            <h3 style="color: var(--white); margin-bottom: 15px;">No Profiles Found</h3>
            <p style="color: rgba(255, 255, 255, 0.7); margin-bottom: 30px;">
                Try adjusting your search filters to find more matches.
            </p>
            <button onclick="clearFilters()" class="btn-primary">
                <i class="fas fa-refresh"></i>
                Clear Filters
            </button>
        </div>
    `;
}

// ===== MODAL FUNCTIONS =====
function openProfileModal(profile) {
    if (!profileModal || !modalContent) return;
    
    modalContent.innerHTML = createDetailedProfileHTML(profile);
    profileModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    setTimeout(() => {
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
    }, 50);
}

function closeModal() {
    if (!profileModal) return;
    
    profileModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    if (modalContent) {
        modalContent.style.transform = 'scale(0.9)';
        modalContent.style.opacity = '0';
    }
}

function closeModalOnOutsideClick(e) {
    if (e.target === profileModal) {
        closeModal();
    }
}

function closeModalOnEscape(e) {
    if (e.key === 'Escape' && profileModal.style.display === 'block') {
        closeModal();
    }
}

function createDetailedProfileHTML(profile) {
    return `
        <div class="profile-modal-content">
            <div class="profile-modal-header">
                <img src="${profile.profileImage || 'https://via.placeholder.com/150x150/4776E6/FFFFFF?text=' + profile.fullName.charAt(0)}" 
                     alt="${profile.fullName}" 
                     class="modal-profile-image"
                     onerror="this.src='https://via.placeholder.com/150x150/4776E6/FFFFFF?text=${profile.fullName.charAt(0)}'">
                <div class="modal-profile-basic">
                    <h2>${profile.fullName}</h2>
                    <p class="modal-age-gender">${profile.age} years, ${profile.gender}</p>
                    <p class="modal-location"><i class="fas fa-map-marker-alt"></i> ${profile.location}</p>
                </div>
            </div>
            
            <div class="profile-sections">
                <div class="profile-section">
                    <h3><i class="fas fa-user"></i> Personal Details</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">Date of Birth:</span>
                            <span class="detail-value">${profile.dateOfBirth || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Height:</span>
                            <span class="detail-value">${profile.height}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Weight:</span>
                            <span class="detail-value">${profile.weight || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Marital Status:</span>
                            <span class="detail-value">${profile.maritalStatus}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Religion:</span>
                            <span class="detail-value">${profile.religion}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Caste:</span>
                            <span class="detail-value">${profile.caste}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Mother Tongue:</span>
                            <span class="detail-value">${profile.motherTongue || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Nationality:</span>
                            <span class="detail-value">${profile.nationality || 'Indian'}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h3><i class="fas fa-graduation-cap"></i> Education & Career</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">Education:</span>
                            <span class="detail-value">${profile.education}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">College/University:</span>
                            <span class="detail-value">${profile.college || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Occupation:</span>
                            <span class="detail-value">${profile.occupation}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Job Title:</span>
                            <span class="detail-value">${profile.jobTitle || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Company:</span>
                            <span class="detail-value">${profile.company || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Annual Income:</span>
                            <span class="detail-value">${profile.annualIncome || 'Not specified'}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h3><i class="fas fa-home"></i> Family Details</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">Father's Name:</span>
                            <span class="detail-value">${profile.fatherName || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Father's Occupation:</span>
                            <span class="detail-value">${profile.fatherOccupation || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Mother's Name:</span>
                            <span class="detail-value">${profile.motherName || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Mother's Occupation:</span>
                            <span class="detail-value">${profile.motherOccupation || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Siblings:</span>
                            <span class="detail-value">${profile.siblings || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Family Status:</span>
                            <span class="detail-value">${profile.familyStatus || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Family Location:</span>
                            <span class="detail-value">${profile.familyLocation || 'Not specified'}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h3><i class="fas fa-heart"></i> Lifestyle & Hobbies</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">Diet:</span>
                            <span class="detail-value">${profile.diet || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Drinking:</span>
                            <span class="detail-value">${profile.drinking || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Smoking:</span>
                            <span class="detail-value">${profile.smoking || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Hobbies:</span>
                            <span class="detail-value">${profile.hobbies || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Fitness:</span>
                            <span class="detail-value">${profile.fitness || 'Not specified'}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h3><i class="fas fa-search-heart"></i> Partner Preferences</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">Preferred Age:</span>
                            <span class="detail-value">${profile.preferredAgeRange || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Preferred Height:</span>
                            <span class="detail-value">${profile.preferredHeight || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Preferred Religion:</span>
                            <span class="detail-value">${profile.preferredReligion || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Preferred Education:</span>
                            <span class="detail-value">${profile.preferredEducation || 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Preferred Location:</span>
                            <span class="detail-value">${profile.preferredLocation || 'Not specified'}</span>
                        </div>
                        <div class="detail-row full-width">
                            <span class="detail-label">Expectations:</span>
                            <span class="detail-value">${profile.partnerExpectations || 'Not specified'}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-actions">
                <button class="btn-contact-primary" onclick="contactMember('${profile.mobile}', '${profile.fullName}')">
                    <i class="fas fa-phone"></i>
                    Contact: ${profile.mobile || 'Not Available'}
                </button>
                <button class="btn-contact-secondary" onclick="sendEmail('${profile.email}', '${profile.fullName}')">
                    <i class="fas fa-envelope"></i>
                    Email: ${profile.email || 'Not Available'}
                </button>
            </div>
        </div>
    `;
}

// ===== CONTACT FUNCTIONS =====
function contactMember(mobile, name) {
    if (!mobile || mobile === 'Not Available') {
        showNotification('Contact number not available', 'error');
        return;
    }
    
    // Create WhatsApp URL
    const message = encodeURIComponent(`Hi ${name}, I found your profile on Sorthiya Damji Samaj Matrimonial website and would like to connect with you.`);
    const whatsappURL = `https://wa.me/91${mobile.replace(/\D/g, '')}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    showNotification('Opening WhatsApp...', 'success');
}

function sendEmail(email, name) {
    if (!email || email === 'Not Available') {
        showNotification('Email address not available', 'error');
        return;
    }
    
    const subject = encodeURIComponent('Matrimonial Inquiry - Sorthiya Damji Samaj');
    const body = encodeURIComponent(`Dear ${name},\n\nI found your profile on Sorthiya Damji Samaj Matrimonial website and would like to connect with you.\n\nBest regards`);
    const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoURL;
    
    showNotification('Opening email client...', 'success');
}

// ===== FILTER & SEARCH FUNCTIONS =====
function filterProfiles() {
    if (isLoading) return;
    
    const genderValue = genderFilter?.value || '';
    const ageValue = ageFilter?.value || '';
    const locationValue = locationFilter?.value.toLowerCase().trim() || '';
    const educationValue = educationFilter?.value || '';
    
    filteredProfiles = allProfiles.filter(profile => {
        // Gender filter
        if (genderValue && profile.gender !== genderValue) {
            return false;
        }
        
        // Age filter
        if (ageValue) {
            const age = profile.age;
            switch (ageValue) {
                case '18-25':
                    if (age < 18 || age > 25) return false;
                    break;
                case '26-30':
                    if (age < 26 || age > 30) return false;
                    break;
                case '31-35':
                    if (age < 31 || age > 35) return false;
                    break;
                case '36-40':
                    if (age < 36 || age > 40) return false;
                    break;
                case '40+':
                    if (age < 40) return false;
                    break;
            }
        }
        
        // Location filter
        if (locationValue && !profile.location.toLowerCase().includes(locationValue)) {
            return false;
        }
        
        // Education filter
        if (educationValue) {
            const education = profile.education.toLowerCase();
            switch (educationValue) {
                case 'Graduate':
                    if (!education.includes('b.') && !education.includes('bachelor') && !education.includes('graduate')) return false;
                    break;
                case 'Post Graduate':
                    if (!education.includes('m.') && !education.includes('master') && !education.includes('post graduate')) return false;
                    break;
                case 'Professional':
                    if (!education.includes('ca') && !education.includes('cs') && !education.includes('chartered') && !education.includes('professional')) return false;
                    break;
                case 'Doctorate':
                    if (!education.includes('phd') && !education.includes('doctorate') && !education.includes('dr.')) return false;
                    break;
            }
        }
        
        return true;
    });
    
    renderProfiles();
    showNotification(`Found ${filteredProfiles.length} matching profiles`, 'success');
}

function clearFilters() {
    if (genderFilter) genderFilter.value = '';
    if (ageFilter) ageFilter.value = '';
    if (locationFilter) locationFilter.value = '';
    if (educationFilter) educationFilter.value = '';
    
    filteredProfiles = [...allProfiles];
    renderProfiles();
    showNotification('Filters cleared', 'success');
}

function sortProfiles() {
    const sortValue = sortBy?.value || 'newest';
    
    switch (sortValue) {
        case 'newest':
            filteredProfiles.sort((a, b) => b.id - a.id);
            break;
        case 'age':
            filteredProfiles.sort((a, b) => a.age - b.age);
            break;
        case 'name':
            filteredProfiles.sort((a, b) => a.fullName.localeCompare(b.fullName));
            break;
    }
    
    renderProfiles();
}

// ===== LOAD MORE FUNCTIONALITY =====
function loadMoreProfiles() {
    if (isLoading || displayedProfiles >= filteredProfiles.length) return;
    
    showLoadMoreLoading();
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        displayProfilesPage();
        hideLoadMoreLoading();
    }, 500);
}

function updateLoadMoreButton() {
    if (!loadMoreBtn) return;
    
    if (displayedProfiles >= filteredProfiles.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
        const remaining = filteredProfiles.length - displayedProfiles;
        loadMoreBtn.innerHTML = `<i class="fas fa-plus"></i> Load ${Math.min(remaining, profilesPerPage)} More Profiles`;
    }
}

// ===== UTILITY FUNCTIONS =====
function updateTotalProfilesCount() {
    if (totalProfilesElement) {
        const targetCount = allProfiles.length;
        animateNumber(totalProfilesElement, 0, targetCount, 2000);
    }
}

function animateNumber(element, start, end, duration) {
    const startTimestamp = performance.now();
    const step = (timestamp) => {
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue;
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };
    requestAnimationFrame(step);
}

function showLoading() {
    isLoading = true;
    if (profilesGrid) {
        profilesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <div class="loading"></div>
                <p style="color: rgba(255, 255, 255, 0.7); margin-top: 20px;">Loading profiles...</p>
            </div>
        `;
    }
}

function hideLoading() {
    isLoading = false;
}

function showLoadMoreLoading() {
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = '<div class="loading"></div> Loading...';
        loadMoreBtn.disabled = true;
    }
}

function hideLoadMoreLoading() {
    if (loadMoreBtn) {
        loadMoreBtn.disabled = false;
        updateLoadMoreButton();
    }
}

function showError(message) {
    if (profilesGrid) {
        profilesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--primary-red); margin-bottom: 20px;"></i>
                <h3 style="color: var(--white); margin-bottom: 15px;">Oops! Something went wrong</h3>
                <p style="color: rgba(255, 255, 255, 0.7); margin-bottom: 30px;">${message}</p>
                <button onclick="loadProfiles()" class="btn-primary">
                    <i class="fas fa-refresh"></i>
                    Try Again
                </button>
            </div>
        `;
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles if not exist
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--glass-bg);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid var(--glass-border);
                border-radius: var(--border-radius-sm);
                padding: 15px 20px;
                box-shadow: var(--glass-shadow);
                z-index: 10001;
                transform: translateX(400px);
                transition: all 0.3s ease;
                max-width: 300px;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
                color: var(--text-light);
            }
            .notification-success .notification-content i {
                color: #4CAF50;
            }
            .notification-error .notification-content i {
                color: var(--primary-red);
            }
            .notification-info .notification-content i {
                color: var(--accent-blue);
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.profile-card, .search-card, .contact-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== ADDITIONAL MODAL STYLES =====
function addModalStyles() {
    if (document.getElementById('modal-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'modal-styles';
    styles.textContent = `
        .profile-modal-content {
            color: var(--text-light);
        }
        .modal-profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--primary-red);
            margin-bottom: 20px;
        }
        .profile-modal-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid var(--glass-border);
        }
        .modal-profile-basic h2 {
            font-size: 2rem;
            color: var(--white);
            margin-bottom: 10px;
        }
        .modal-age-gender {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 5px;
        }
        .modal-location {
            color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        .profile-section {
            margin-bottom: 30px;
            padding: 25px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: var(--border-radius-sm);
            border: 1px solid var(--glass-border);
        }
        .profile-section h3 {
            color: var(--white);
            font-size: 1.3rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .profile-section h3 i {
            color: var(--primary-red);
        }
        .detail-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        .detail-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .detail-row.full-width {
            grid-column: 1 / -1;
            grid-template-columns: 200px 1fr;
        }
        .detail-label {
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
        }
        .detail-value {
            color: var(--white);
            font-weight: 400;
        }
        .contact-actions {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid var(--glass-border);
            flex-wrap: wrap;
        }
        .btn-contact-primary, .btn-contact-secondary {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px 25px;
            border-radius: var(--border-radius-sm);
            font-weight: 600;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.95rem;
        }
        .btn-contact-primary {
            background: linear-gradient(135deg, var(--primary-red), var(--accent-purple));
            color: var(--white);
        }
        .btn-contact-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(248, 68, 100, 0.3);
        }
        .btn-contact-secondary {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border);
            color: var(--text-light);
        }
        .btn-contact-secondary:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
        }
        @media (max-width: 768px) {
            .detail-grid {
                grid-template-columns: 1fr;
            }
            .contact-actions {
                flex-direction: column;
            }
            .btn-contact-primary, .btn-contact-secondary {
                width: 100%;
                justify-content: center;
            }
        }
    `;
    document.head.appendChild(styles);
}

// Initialize modal styles when DOM is loaded
document.addEventListener('DOMContentLoaded', addModalStyles);

// ===== VERSION & DEBUG INFO =====
console.log(`
🎉 Sorthiya Damji Samaj Matrimonial Website
📱 Version: 1.01
👨‍💻 Contact: Jignesh Makwana (8082422478)
🔧 JavaScript Module Loaded Successfully
`);
