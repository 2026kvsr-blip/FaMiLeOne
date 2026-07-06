document.addEventListener("DOMContentLoaded", () => {
    // 3 సెకన్ల తర్వాత Splash స్క్రీన్ మారుతుంది
    setTimeout(() => {
        showScreen("login-screen");
    }, 3000);

    // OTP పంపే బటన్ క్లిక్ లాజిక్
    document.getElementById("send-otp-btn").addEventListener("click", () => {
        const phone = document.getElementById("phone-number").value;
        if(phone.length === 10) {
            document.getElementById("otp-area").classList.remove("hidden");
            alert("డెమో OTP పంపబడింది! (ఏదైనా 4 అంకెలు నొక్కండి)");
        } else {
            alert("దయచేసి 10 అంకెల మొబైల్ నంబర్ ఎంటర్ చేయండి.");
        }
    });

    
    
    // లాగిన్ వెరిఫై
    document.getElementById("verify-otp-btn").addEventListener("click", () => {
        showScreen("main-screen");
    });

    // లాగౌట్
    document.getElementById("logout-btn").addEventListener("click", () => {
        showScreen("login-screen");
        document.getElementById("otp-area").classList.add("hidden");
        document.getElementById("phone-number").value = "";
    });
});

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}

function switchView(viewId) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.getElementById(`${viewId}-view`).classList.add("active");

    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
    
    const navButtons = document.querySelectorAll(".bottom-nav .nav-item");
    navButtons.forEach(btn => {
        if(btn.getAttribute("onclick").includes(viewId)) {
            btn.classList.add("active");
        }
    });
}
