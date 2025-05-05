// User authentication
const dummyUsers = [
    { email: 'test@example.com', otp: '1234', name: 'Test User' },
    { email: 'demo@sanjeevani.ai', otp: '5678', name: 'Demo User' }
];

function checkAuth() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html';
        return false;
    }
    return currentUser;
}

function updateNavbar() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser) {
        $('.login-icon').hide();
        $('.navbar ul').append(`
            <div class="user-section">
                <span>Welcome, ${currentUser.name}</span>
                <button onclick="logout()" style="width: auto; margin-left: 10px;">Logout</button>
            </div>
        `);
    }
}

function logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('lastAssessment');
    window.location.href = 'index.html';
}
