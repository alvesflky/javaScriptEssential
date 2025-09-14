let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

let userFunction = "Employee";

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);


if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}


switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

if (userFunction === "Employee") {
    dietAccess = "Dietary Services";
} else if (userFunction === "Enrolled Member"){
    dietAccess = "Dietary Services and one dietician";    
} else if (userFunction === "Subscriber"){
    dietAccess = "Dietary Services";
} else {
    dietAccess = "You need to subscribe at least";    
}

console.log("User Message:", userMessage);

console.log("User Category:", userCategory);

console.log("Authentication Status:", authenticationStatus);

console.log("Dietary Services:", dietAccess);