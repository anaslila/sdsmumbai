// Sorthiya Damji Samaj - Matrimonial User Database
// This file stores all registered user profiles

const users = [
    {
        id: 1,
        fullName: "Rajesh Kumar Sorthiya",
        gender: "male",
        dateOfBirth: "1996-03-15",
        age: 28,
        height: "5'8\"",
        weight: "70 kg",
        maritalStatus: "Never Married",
        religion: "Hindu",
        caste: "Sorthiya Damji",
        subCaste: "Sorthiya",
        motherTongue: "Gujarati",
        nationality: "Indian",
        education: "B.Tech Computer Science",
        college: "IIT Mumbai",
        occupation: "Software Engineer",
        jobTitle: "Senior Software Engineer",
        company: "TCS",
        annualIncome: "8-10 Lakhs",
        fatherName: "Ramesh Kumar Sorthiya",
        fatherOccupation: "Business",
        motherName: "Sunita Sorthiya",
        motherOccupation: "Homemaker",
        siblings: "1 Sister (Younger)",
        familyStatus: "Middle Class",
        familyLocation: "Mumbai, Maharashtra",
        diet: "Vegetarian",
        drinking: "No",
        smoking: "No",
        hobbies: "Reading, Traveling, Photography, Cricket",
        fitness: "Regular Exercise, Gym",
        phone: "+91 98765 43210",
        alternatePhone: "+91 98765 43211",
        email: "rajesh.kumar@email.com",
        currentAddress: "A-404, Shanti Nagar, Andheri West, Mumbai - 400058",
        permanentAddress: "B-202, Sai Society, Borivali West, Mumbai - 400092",
        location: "Mumbai, Maharashtra",
        preferredAgeRange: "24-30",
        preferredHeightRange: "5'2\" to 5'6\"",
        preferredReligion: "Hindu",
        preferredCaste: "Sorthiya Damji",
        preferredEducation: "Graduate and above",
        preferredLocation: "Mumbai, Pune, Ahmedabad",
        partnerExpectations: "Looking for a caring, understanding and family-oriented partner who shares similar values and interests.",
        profileImage: "",
        verified: true,
        registrationDate: "2024-08-15",
        lastActive: "2024-09-18"
    },
    {
        id: 2,
        fullName: "Priya Patel",
        gender: "female",
        dateOfBirth: "1999-07-22",
        age: 25,
        height: "5'4\"",
        weight: "55 kg",
        maritalStatus: "Never Married",
        religion: "Hindu",
        caste: "Sorthiya Damji",
        subCaste: "Sorthiya",
        motherTongue: "Gujarati",
        nationality: "Indian",
        education: "M.A. English Literature",
        college: "Gujarat University, Ahmedabad",
        occupation: "Teacher",
        jobTitle: "English Teacher",
        company: "Kendriya Vidyalaya",
        annualIncome: "4-5 Lakhs",
        fatherName: "Hitesh Patel",
        fatherOccupation: "Government Service",
        motherName: "Meena Patel",
        motherOccupation: "Homemaker",
        siblings: "1 Brother (Elder)",
        familyStatus: "Middle Class",
        familyLocation: "Ahmedabad, Gujarat",
        diet: "Vegetarian",
        drinking: "No",
        smoking: "No",
        hobbies: "Classical Dancing, Cooking, Reading, Gardening",
        fitness: "Yoga, Morning Walks",
        phone: "+91 98765 43212",
        alternatePhone: "+91 98765 43213",
        email: "priya.patel@email.com",
        currentAddress: "C-305, Sunrise Apartments, Satellite, Ahmedabad - 380015",
        permanentAddress: "D-101, Krishna Society, Maninagar, Ahmedabad - 380008",
        location: "Ahmedabad, Gujarat",
        preferredAgeRange: "26-32",
        preferredHeightRange: "5'6\" to 6'0\"",
        preferredReligion: "Hindu",
        preferredCaste: "Sorthiya Damji",
        preferredEducation: "Graduate and above",
        preferredLocation: "Gujarat, Mumbai, Pune",
        partnerExpectations: "Looking for a respectful, family-oriented partner who values traditions and supports career growth.",
        profileImage: "",
        verified: true,
        registrationDate: "2024-08-20",
        lastActive: "2024-09-17"
    },
    {
        id: 3,
        fullName: "Amit Shah",
        gender: "male",
        dateOfBirth: "1994-11-10",
        age: 30,
        height: "5'10\"",
        weight: "75 kg",
        maritalStatus: "Never Married",
        religion: "Hindu",
        caste: "Sorthiya Damji",
        subCaste: "Sorthiya",
        motherTongue: "Gujarati",
        nationality: "Indian",
        education: "MBA Finance",
        college: "NMIMS, Mumbai",
        occupation: "Business Owner",
        jobTitle: "Managing Director",
        company: "Shah Enterprises",
        annualIncome: "15+ Lakhs",
        fatherName: "Jayesh Shah",
        fatherOccupation: "Business (Diamond Trading)",
        motherName: "Kiran Shah",
        motherOccupation: "Homemaker",
        siblings: "No Siblings",
        familyStatus: "Upper Middle Class",
        familyLocation: "Surat, Gujarat",
        diet: "Vegetarian",
        drinking: "Occasionally (Social)",
        smoking: "No",
        hobbies: "Cricket, Business Strategy, Traveling, Stock Market",
        fitness: "Regular Gym, Swimming",
        phone: "+91 98765 43214",
        alternatePhone: "+91 98765 43215",
        email: "amit.shah@email.com",
        currentAddress: "E-501, Imperial Heights, Adajan, Surat - 395009",
        permanentAddress: "F-201, Royal Complex, Katargam, Surat - 395004",
        location: "Surat, Gujarat",
        preferredAgeRange: "24-28",
        preferredHeightRange: "5'2\" to 5'6\"",
        preferredReligion: "Hindu",
        preferredCaste: "Sorthiya Damji",
        preferredEducation: "Graduate and above",
        preferredLocation: "Gujarat, Rajasthan, Mumbai",
        partnerExpectations: "Looking for a supportive, modern-thinking partner who can balance family and personal aspirations.",
        profileImage: "",
        verified: true,
        registrationDate: "2024-08-25",
        lastActive: "2024-09-18"
    },
    {
        id: 4,
        fullName: "Neha Damji",
        gender: "female",
        dateOfBirth: "1997-05-08",
        age: 27,
        height: "5'3\"",
        weight: "52 kg",
        maritalStatus: "Never Married",
        religion: "Hindu",
        caste: "Sorthiya Damji",
        subCaste: "Damji",
        motherTongue: "Gujarati",
        nationality: "Indian",
        education: "BCA + MCA",
        college: "Vellore Institute of Technology",
        occupation: "Software Developer",
        jobTitle: "Full Stack Developer",
        company: "Infosys",
        annualIncome: "6-8 Lakhs",
        fatherName: "Suresh Damji",
        fatherOccupation: "CA (Chartered Accountant)",
        motherName: "Rekha Damji",
        motherOccupation: "School Principal",
        siblings: "1 Sister (Elder), 1 Brother (Younger)",
        familyStatus: "Upper Middle Class",
        familyLocation: "Rajkot, Gujarat",
        diet: "Vegetarian",
        drinking: "No",
        smoking: "No",
        hobbies: "Coding, Music, Painting, Badminton",
        fitness: "Badminton, Aerobics",
        phone: "+91 98765 43216",
        alternatePhone: "+91 98765 43217",
        email: "neha.damji@email.com",
        currentAddress: "G-403, Tech Park Residency, Electronic City, Bangalore - 560100",
        permanentAddress: "H-102, Patel Colony, Rajkot - 360001",
        location: "Bangalore, Karnataka",
        preferredAgeRange: "28-34",
        preferredHeightRange: "5'7\" to 6'2\"",
        preferredReligion: "Hindu",
        preferredCaste: "Sorthiya Damji",
        preferredEducation: "Engineering/IT Background preferred",
        preferredLocation: "Bangalore, Pune, Hyderabad, Mumbai",
        partnerExpectations: "Looking for a well-educated, career-focused partner who respects individual ambitions and family values.",
        profileImage: "",
        verified: true,
        registrationDate: "2024-09-01",
        lastActive: "2024-09-18"
    },
    {
        id: 5,
        fullName: "Vikash Sorthiya",
        gender: "male",
        dateOfBirth: "1993-12-03",
        age: 31,
        height: "6'0\"",
        weight: "80 kg",
        maritalStatus: "Never Married",
        religion: "Hindu",
        caste: "Sorthiya Damji",
        subCaste: "Sorthiya",
        motherTongue: "Gujarati",
        nationality: "Indian",
        education: "MBBS, MD Pediatrics",
        college: "Grant Medical College, Mumbai",
        occupation: "Doctor",
        jobTitle: "Pediatrician",
        company: "Apollo Hospitals",
        annualIncome: "12-15 Lakhs",
        fatherName: "Dr. Mahesh Sorthiya",
        fatherOccupation: "Senior Doctor",
        motherName: "Dr. Savita Sorthiya",
        motherOccupation: "Gynecologist",
        siblings: "1 Brother (Younger, Also Doctor)",
        familyStatus: "Upper Middle Class",
        familyLocation: "Pune, Maharashtra",
        diet: "Vegetarian",
        drinking: "No",
        smoking: "No",
        hobbies: "Reading Medical Journals, Tennis, Classical Music, Social Service",
        fitness: "Tennis, Jogging, Meditation",
        phone: "+91 98765 43218",
        alternatePhone: "+91 98765 43219",
        email: "dr.vikash@email.com",
        currentAddress: "I-801, Doctors Residency, Baner, Pune - 411045",
        permanentAddress: "J-301, Medical Colony, Kothrud, Pune - 411038",
        location: "Pune, Maharashtra",
        preferredAgeRange: "25-29",
        preferredHeightRange: "5'3\" to 5'7\"",
        preferredReligion: "Hindu",
        preferredCaste: "Sorthiya Damji",
        preferredEducation: "Graduate, Medical/Para-Medical preferred",
        preferredLocation: "Pune, Mumbai, Nashik",
        partnerExpectations: "Looking for an educated, understanding partner who can support the demanding nature of medical profession.",
        profileImage: "",
        verified: true,
        registrationDate: "2024-08-30",
        lastActive: "2024-09-16"
    },
    {
        id: 6,
        fullName: "Pooja Sorthiya",
        gender: "female",
        dateOfBirth: "1998-09-18",
        age: 26,
        height: "5'5\"",
        weight: "58 kg",
        maritalStatus: "Never Married",
        religion: "Hindu",
        caste: "Sorthiya Damji",
        subCaste: "Sorthiya",
        motherTongue: "Gujarati",
        nationality: "Indian",
        education: "CA (Chartered Accountant)",
        college: "H.R. College of Commerce, Mumbai",
        occupation: "Chartered Accountant",
        jobTitle: "Senior Auditor",
        company: "Deloitte",
        annualIncome: "10-12 Lakhs",
        fatherName: "Prakash Sorthiya",
        fatherOccupation: "Bank Manager",
        motherName: "Nisha Sorthiya",
        motherOccupation: "Teacher",
        siblings: "1 Brother (Elder, Engineer)",
        familyStatus: "Upper Middle Class",
        familyLocation: "Vadodara, Gujarat",
        diet: "Vegetarian",
        drinking: "No",
        smoking: "No",
        hobbies: "Finance & Investment, Traveling, Photography, Classical Dance",
        fitness: "Dance, Gym, Cycling",
        phone: "+91 98765 43220",
        alternatePhone: "+91 98765 43221",
        email: "pooja.ca@email.com",
        currentAddress: "K-602, Elegance Tower, Andheri East, Mumbai - 400069",
        permanentAddress: "L-204, Shanti Nagar, Vadodara - 390007",
        location: "Mumbai, Maharashtra",
        preferredAgeRange: "28-35",
        preferredHeightRange: "5'8\" to 6'2\"",
        preferredReligion: "Hindu",
        preferredCaste: "Sorthiya Damji",
        preferredEducation: "CA/MBA/Engineering preferred",
        preferredLocation: "Mumbai, Pune, Ahmedabad, Vadodara",
        partnerExpectations: "Looking for a financially stable, career-oriented partner who values professional growth and family relationships.",
        profileImage: "",
        verified: true,
        registrationDate: "2024-09-05",
        lastActive: "2024-09-18"
    }
];

// Admin functions for managing users
const adminFunctions = {
    // Add new user
    addUser: function(userData) {
        const newId = Math.max(...users.map(u => u.id)) + 1;
        const newUser = {
            ...userData,
            id: newId,
            verified: false,
            registrationDate: new Date().toISOString().split('T')[0],
            lastActive: new Date().toISOString().split('T')[0]
        };
        users.push(newUser);
        return newUser;
    },

    // Edit existing user
    editUser: function(userId, updatedData) {
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updatedData };
            return users[userIndex];
        }
        return null;
    },

    // Delete user
    deleteUser: function(userId) {
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            const deletedUser = users.splice(userIndex, 1)[0];
            return deletedUser;
        }
        return null;
    },

    // Verify user
    verifyUser: function(userId) {
        const user = users.find(u => u.id === userId);
        if (user) {
            user.verified = true;
            return user;
        }
        return null;
    },

    // Get all users
    getAllUsers: function() {
        return users;
    },

    // Get user by ID
    getUserById: function(userId) {
        return users.find(u => u.id === userId);
    },

    // Get users by criteria
    getUsersByCriteria: function(criteria) {
        return users.filter(user => {
            return Object.keys(criteria).every(key => {
                if (criteria[key] === null || criteria[key] === undefined) return true;
                return user[key] && user[key].toString().toLowerCase().includes(criteria[key].toString().toLowerCase());
            });
        });
    },

    // Get statistics
    getStats: function() {
        return {
            totalProfiles: users.length,
            maleProfiles: users.filter(u => u.gender === 'male').length,
            femaleProfiles: users.filter(u => u.gender === 'female').length,
            verifiedProfiles: users.filter(u => u.verified).length,
            recentProfiles: users.filter(u => {
                const regDate = new Date(u.registrationDate);
                const thirtyDaysAgo = new Date();
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                return regDate > thirtyDaysAgo;
            }).length
        };
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { users, adminFunctions };
}

// For browser environment
if (typeof window !== 'undefined') {
    window.users = users;
    window.adminFunctions = adminFunctions;
}
