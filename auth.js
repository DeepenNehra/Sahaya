import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from './firebase.js';

const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('Signup successful!');
                window.location.href = 'Homepage.html';
            })
            .catch((error) => {
                const errorMessage = error.message;
                document.getElementById('signup-error').textContent = errorMessage;
            });
    });
}
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('Login successful!');
                window.location.href = 'Homepage.html';
            })
            .catch((error) => {
                const errorMessage = error.message;
                document.getElementById('login-error').textContent = errorMessage;
            });
    });
}
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        signOut(auth).then(() => {
            alert('Logout successful!');
            window.location.href = 'login.html';
        }).catch((error) => {
            console.error('Logout error:', error);
        });
    });
}