

document.addEventListener('DOMContentLoaded', () => {

    // 1. Handle OTP Input Auto-Focus (For Page 4)
    const otpInputs = document.querySelectorAll('.otp-input');
    otpInputs.forEach((input, index) => {
        input.addEventListener('keyup', (e) => {
            if (e.key >= 0 && e.key <= 9) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            } else if (e.key === 'Backspace') {
                if (index > 0) {
                    otpInputs[index - 1].focus();
                }
            }
        });
    });

    // 2. Mock Tab Switching (For Page 19)
    const tabLinks = document.querySelectorAll('.nav-tabs .nav-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            tabLinks.forEach(l => l.classList.remove('active', 'text-primary-custom', 'border-bottom-primary'));
            link.classList.add('active', 'text-primary-custom');
            // In a real app, this would filter the list below
        });
    });
});

// Helper for navigation (optional, can just use hrefs)
function goBack() {
    window.history.back();
}


//verifying code
