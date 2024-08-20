
    function sendMail(){
        let parms = {
            First: document.getElementById("First").value,
            Last: document.getElementById("Last").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            Message: document.getElementById("Message").value,
        }

        emailjs.send('service_srh7zmf', 'template_ckhaulg', parms)
    .then((response) => {
        alert("Email Sent! Thank you! I'll get back to you soon. Have a nice day.");
    }, (error) => {
        alert("Failed to send email. Please try again.");
        console.error("Error:", error);
    });
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        const chatToggle = document.getElementById('chat-toggle');
const sendButton = document.getElementById('send-btn');
const userInputField = document.getElementById('user-input');
const closeButton = document.getElementById('close-bt'); // Ensure this is defined

// Close button functionality
closeButton.addEventListener('click', function() {
    document.getElementById('chatbot').style.display = 'none';
});

// Chat toggle functionality
chatToggle.addEventListener('click', () => {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
});

// Send button functionality
sendButton.addEventListener('click', () => {
    handleUserInput();
});

// Handle enter key for user input
userInputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

// Scroll to the bottom of the chat
function scrollToBottom() {
    const chatBody = document.getElementById('chat-body');
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Add a message to the chat
function addMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    scrollToBottom(); // Auto-scroll to bottom
}

// Handle user input
function handleUserInput() {
    const userInput = userInputField.value.trim();
    if (userInput !== '') {
        addMessage(userInput, 'user');
        userInputField.value = '';
        getBotResponse(userInput); // Ensure this function is defined
    }
}
      
        function getBotResponse(userInput) {
            let botResponse = "Sorry, I don't understand that.";
            userInput = userInput.toLowerCase();
      
            const responses = {
                'About|something about her': 'Devanshi is an enthusiastic learner. When she\'s not surfing every possible channel for new opportunities to avail herself of, you can either find her engrossed in a book or sharing laughs with a friend.',
                'hello|hi': 'Hello! Im your virtual assistant. How can I help you to explore Devanshi\'s portfolio?',
                'contact|email': 'Feel free to contact her at devanshijaiswal7@gmail.com.',
                'services|what can you do': 'She can offer front-end development, web design, flutter and performance optimization services. She\'s also good in management and mentorship.',
                'name|purpose': 'I am Devanshi\'s chatbot! I can help you with knowing Devanshi better and more personally. She loves to make new life-long friends.',
                'skills|expertise': 'She\'s skilled in HTML, CSS, JavaScript, React, Flutter, Artificial Intelligence and C++. She also has experience with responsive design, Artificial Intelligence, and UI/UX principles.',
                'projects|work': 'You can view her projects on her portfolio page. She has worked on several web applications, marketing sites, AI projects and interactive dashboards. Her personal favourite is her Real Estate Website in which she has integrated a chatting + notification system, estate search and posting.',
                'experience|background': 'A front-end and back-end developer, She is eager to apply her foundational skills in field. A quick learner with a passion for crafting engaging user interfaces, She is seeking part-time Internship opportunities to gain real-world experience and contribute to innovative projects.',
              'education|carrer':'She is a Second-year BTech CSE student at Bennett University. She is a life-long learner and loves to read about real estates.',
              'programming':'She is proficient in Python, C++, and Java programming languages.',
              'hobbies|like': "She loves to play chess, badminton and basketball. She is also a very good stage performer, having particiapated in various spotlight performances in school. She has also participated in various club activities at college.",
              'personal|dream': "Her dream has always been to be a part of something meaningful and to give back to the community."
            };
      
            for (let pattern in responses) {
                let regex = new RegExp(pattern);
                if (regex.test(userInput)) {
                    botResponse = responses[pattern];
                    break;
                }
            }
      
            setTimeout(() => addMessage(botResponse, 'bot'), 1000);
        }
      });