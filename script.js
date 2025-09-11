// OceanAI JavaScript - Interactive Features
console.log('🌊 OceanAI loading...');

// DOM Elements
let sidebar = null;
let sidebarTrigger = null;
let sidebarToggle = null;
let hamburger = null;
let navMenu = null;

// Ocean Data for Charts (Dashboard)
const OCEAN_DATA = {
    temperature: [24.5, 23.8, 25.2, 24.1, 23.9, 24.7],
    salinity: [35.2, 35.1, 35.3, 35.0, 35.4, 35.2],
    ph: [8.1, 8.0, 8.2, 8.1, 8.0, 8.1],
    oxygen: [6.5, 6.3, 6.8, 6.4, 6.6, 6.7]
};

// Ocean facts for random display
const oceanFacts = [
    "Did you know? Oceans produce 70% of our oxygen!",
    "The ocean contains 99% of Earth's living space.",
    "Less than 20% of the ocean has been mapped and explored.",
    "The Mariana Trench is deeper than Mount Everest is tall.",
    "Ocean currents move 100 times more water than all rivers combined.",
    "The ocean absorbs about 30% of carbon dioxide from the atmosphere.",
    "Coral reefs support 25% of marine species despite covering <1% of ocean floor.",
    "The Great Barrier Reef can be seen from space!",
    "94% of life on Earth is aquatic.",
    "The ocean is home to the largest animal ever: the Blue Whale.",
    "Sharks have been around longer than trees!",
    "The deepest point on Earth is in the Pacific's Challenger Deep.",
    "Ocean waves can travel thousands of miles without losing energy.",
    "Seahorses are the only species where males give birth.",
    "The ocean contains enough salt to cover all land 500 feet deep."
];

// Enhanced ocean facts for gallery
const OCEAN_GALLERY_FACTS = [
    {
        icon: "🌊",
        text: "The ocean contains 99% of the living space on our planet and less than 10% of that space has been explored by humans."
    },
    {
        icon: "🐋",
        text: "Blue whales are the largest animals ever known to have lived on Earth, reaching lengths of up to 100 feet."
    },
    {
        icon: "🏔️",
        text: "The deepest part of the ocean is the Mariana Trench, reaching depths of over 36,000 feet."
    },
    {
        icon: "🌡️",
        text: "The ocean absorbs about 30% of carbon dioxide produced by humans, helping to regulate Earth's climate."
    },
    {
        icon: "⚡",
        text: "Ocean currents transport warm water and precipitation from the equator toward the poles and cold water from the poles back to the tropics."
    },
    {
        icon: "🐠",
        text: "Scientists estimate that there are between 500,000 to 2 million marine species yet to be discovered."
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌊 OceanAI DOM loaded, initializing...');
    
    // Get DOM elements
    sidebar = document.getElementById('oceanSidebar');
    sidebarTrigger = document.getElementById('sidebarTrigger');
    sidebarToggle = document.getElementById('sidebarToggle');
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.nav-menu');
    
    // Initialize components
    initializeSidebar();
    initializeNavigation();
    initializeAnimations();
    initializeStatCounters();
    initializeInteractions();
    initializeRandomFacts();
    initializeBackgroundEffects();
    initializeCharts();
    initializeOceanGallery();
    initializeRealTimeUpdates();
    
    console.log('🌊 OceanAI fully initialized!');
});

// Sidebar functionality
function initializeSidebar() {
    if (!sidebar || !sidebarTrigger) return;
    
    // Open sidebar
    sidebarTrigger.addEventListener('click', function() {
        sidebar.classList.add('active');
        
        // Auto-expand featured Indian Ocean section
        setTimeout(() => {
            const featuredOcean = document.querySelector('.featured-ocean');
            if (featuredOcean && !featuredOcean.classList.contains('expanded')) {
                featuredOcean.classList.add('expanded');
            }
        }, 300);
    });
    
    // Close sidebar
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    }
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (sidebar && sidebar.classList.contains('active')) {
            if (!sidebar.contains(event.target) && !sidebarTrigger.contains(event.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
    
    // Ocean sections expansion
    const oceanSections = document.querySelectorAll('.ocean-section');
    oceanSections.forEach(section => {
        const header = section.querySelector('.ocean-header');
        if (header) {
            header.addEventListener('click', function() {
                // Close other sections
                oceanSections.forEach(otherSection => {
                    if (otherSection !== section) {
                        otherSection.classList.remove('expanded');
                    }
                });
                
                // Toggle current section
                section.classList.toggle('expanded');
            });
        }
    });
}

// Navigation functionality
function initializeNavigation() {
    if (!hamburger || !navMenu) return;
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        }
    });
}

// Animation initialization
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .tech-item, .query-card, .contact-item');
    animateElements.forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-ready {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Animated counter for statistics
function initializeStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    };
    
    // Use Intersection Observer to trigger counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
}

// Interactive features
function initializeInteractions() {
    // Demo chat functionality
    const chatInput = document.querySelector('.chat-input input');
    const chatButton = document.querySelector('.chat-input button');
    const chatMessages = document.querySelector('.chat-messages');
    
    if (chatInput && chatButton && chatMessages) {
        const handleChatSubmit = () => {
            const message = chatInput.value.trim();
            if (message) {
                addChatMessage(message, 'user');
                chatInput.value = '';
                
                // Simulate AI response
                setTimeout(() => {
                    const responses = [
                        "I'll help you analyze that oceanographic data. Let me fetch the latest ARGO float measurements.",
                        "Interesting query! Based on the current data, I can show you temperature and salinity profiles for that region.",
                        "Great question! The latest satellite data shows some fascinating patterns in that area.",
                        "Let me process that request and generate a comprehensive visualization for you.",
                        "I found several relevant datasets that match your criteria. Here's what the data shows..."
                    ];
                    const response = responses[Math.floor(Math.random() * responses.length)];
                    addChatMessage(response, 'ai');
                }, 1000);
            }
        };
        
        chatButton.addEventListener('click', handleChatSubmit);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleChatSubmit();
            }
        });
    }
    
    // Example query cards interaction
    const queryCards = document.querySelectorAll('.query-card');
    queryCards.forEach(card => {
        card.addEventListener('click', function() {
            const query = card.querySelector('span').textContent.replace(/"/g, '');
            if (chatInput) {
                chatInput.value = query;
                chatInput.focus();
            }
        });
    });
    
    // Visualization controls
    const vizButtons = document.querySelectorAll('.viz-btn');
    vizButtons.forEach(button => {
        button.addEventListener('click', function() {
            vizButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Simulate chart update
            const mockChart = document.querySelector('.mock-chart');
            if (mockChart) {
                mockChart.style.opacity = '0.5';
                setTimeout(() => {
                    mockChart.style.opacity = '1';
                }, 300);
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
                contactForm.reset();
                
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }, 2000);
            }, 2000);
            
            console.log('Form submitted:', data);
        });
    }
}

// Add chat message to demo
function addChatMessage(message, type) {
    const chatMessages = document.querySelector('.chat-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = message;
    
    const messageTime = document.createElement('div');
    messageTime.className = 'message-time';
    messageTime.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.appendChild(messageContent);
    messageDiv.appendChild(messageTime);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Remove typing indicator if exists
    const typingIndicator = chatMessages.querySelector('.typing');
    if (typingIndicator) {
        typingIndicator.remove();
    }
    
    // Add typing indicator for AI responses
    if (type === 'user') {
        setTimeout(() => {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message ai-message typing';
            typingDiv.innerHTML = `
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `;
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);
    }
}

// Random ocean facts
function initializeRandomFacts() {
    const factElement = document.getElementById('randomFact');
    if (!factElement) return;
    
    // Change fact every 10 seconds
    setInterval(() => {
        const randomFact = oceanFacts[Math.floor(Math.random() * oceanFacts.length)];
        
        // Fade out
        factElement.style.opacity = '0';
        
        setTimeout(() => {
            factElement.textContent = randomFact;
            // Fade in
            factElement.style.opacity = '1';
        }, 300);
    }, 10000);
}

// Button interactions
document.addEventListener('click', function(e) {
    // Demo button interactions
    if (e.target.matches('.btn-primary, .btn-secondary')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
    
    // Hero demo button
    if (e.target.closest('.btn') && e.target.closest('.hero-buttons')) {
        const demoSection = document.getElementById('demo');
        if (demoSection) {
            demoSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        const speed = scrolled * 0.5;
        heroVisual.style.transform = `translateY(${speed}px)`;
    }
});

// Performance optimization - debounce scroll events
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

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(function() {
    // Your scroll handlers here
}, 16)); // ~60fps

// Service Worker registration (if needed for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Background Effects and Particle System
function initializeBackgroundEffects() {
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'ocean-particles';
    document.body.appendChild(particleContainer);
    
    // Create particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 25000);
    }
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createParticle(), i * 1000);
    }
    
    // Continue creating particles
    setInterval(createParticle, 2000);
    
    // Add wave overlay to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const waveOverlay = document.createElement('div');
        waveOverlay.className = 'wave-overlay';
        heroSection.appendChild(waveOverlay);
    }
    
    // Add depth effect to dashboard if on dashboard page
    if (window.location.pathname.includes('dashboard')) {
        const depthEffect = document.createElement('div');
        depthEffect.className = 'dashboard-depth-effect';
        document.body.appendChild(depthEffect);
    }
    
    // Add bubble effects to interactive cards
    const interactiveCards = document.querySelectorAll('.feature-card, .query-card, .data-widget');
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('bubble-effect')) {
                this.classList.add('bubble-effect');
                setTimeout(() => {
                    this.classList.remove('bubble-effect');
                }, 3000);
            }
        });
    });
}

// Enhanced scroll effects
function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for hero background
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.backgroundPosition = `center ${rate}px`;
        }
        
        // Update particle movements based on scroll
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = (index % 3 + 1) * 0.1;
            particle.style.transform += ` translateX(${scrolled * speed}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Initialize scroll effects
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollEffects();
});

// Chart initialization for dashboard
function initializeCharts() {
    // Temperature Chart
    createChart('temperatureChart', 'Temperature (°C)', OCEAN_DATA.temperature, '#0891b2');
    
    // Salinity Chart
    createChart('salinityChart', 'Salinity (PSU)', OCEAN_DATA.salinity, '#06b6d4');
    
    // pH Chart
    createChart('phChart', 'pH Level', OCEAN_DATA.ph, '#0ea5e9');
    
    // Oxygen Chart
    createChart('oxygenChart', 'Dissolved Oxygen (mg/L)', OCEAN_DATA.oxygen, '#22d3ee');
}

// Create individual charts
function createChart(canvasId, label, data, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Set up chart parameters
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    const maxValue = Math.max(...data) * 1.1;
    const minValue = Math.min(...data) * 0.9;
    const valueRange = maxValue - minValue;
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    // Vertical grid lines
    for (let i = 0; i <= data.length - 1; i++) {
        const x = padding + (chartWidth / (data.length - 1)) * i;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
    }
    
    // Draw data line
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    data.forEach((value, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y = height - padding - ((value - minValue) / valueRange) * chartHeight;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw data points
    ctx.fillStyle = color;
    data.forEach((value, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y = height - padding - ((value - minValue) / valueRange) * chartHeight;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Add value labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    
    data.forEach((value, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y = height - padding - ((value - minValue) / valueRange) * chartHeight;
        
        ctx.fillText(value.toFixed(1), x, y - 10);
    });
}

// Ocean Gallery functionality
function initializeOceanGallery() {
    const factsSlider = document.querySelector('.facts-slider');
    if (!factsSlider) return;
    
    let currentFactIndex = 0;
    
    // Create fact slides
    OCEAN_GALLERY_FACTS.forEach((fact, index) => {
        const slide = document.createElement('div');
        slide.className = `fact-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <span class="fact-icon">${fact.icon}</span>
            <p>${fact.text}</p>
        `;
        factsSlider.appendChild(slide);
    });
    
    // Auto-rotate facts
    setInterval(() => {
        const slides = document.querySelectorAll('.fact-slide');
        if (slides.length > 0) {
            slides[currentFactIndex].classList.remove('active');
            currentFactIndex = (currentFactIndex + 1) % OCEAN_GALLERY_FACTS.length;
            slides[currentFactIndex].classList.add('active');
        }
    }, 4000);
}

// Real-time data updates for dashboard
function initializeRealTimeUpdates() {
    if (!document.getElementById('temperatureChart')) return;
    
    setInterval(() => {
        // Simulate new data
        const newTemp = 23 + Math.random() * 3;
        const newSalinity = 34.5 + Math.random() * 1;
        const newPH = 7.8 + Math.random() * 0.6;
        const newOxygen = 6 + Math.random() * 1.5;
        
        // Update data arrays
        OCEAN_DATA.temperature.shift();
        OCEAN_DATA.temperature.push(newTemp);
        
        OCEAN_DATA.salinity.shift();
        OCEAN_DATA.salinity.push(newSalinity);
        
        OCEAN_DATA.ph.shift();
        OCEAN_DATA.ph.push(newPH);
        
        OCEAN_DATA.oxygen.shift();
        OCEAN_DATA.oxygen.push(newOxygen);
        
        // Update charts
        initializeCharts();
        
        // Update current readings
        updateCurrentReadings(newTemp, newSalinity, newPH, newOxygen);
        
        console.log('Ocean data updated');
    }, 5000); // Update every 5 seconds
}

// Update current readings display
function updateCurrentReadings(temp, salinity, ph, oxygen) {
    const readings = [
        { id: 'current-temp', value: temp.toFixed(1) + '°C' },
        { id: 'current-salinity', value: salinity.toFixed(1) + ' PSU' },
        { id: 'current-ph', value: ph.toFixed(1) },
        { id: 'current-oxygen', value: oxygen.toFixed(1) + ' mg/L' }
    ];
    
    readings.forEach(reading => {
        const element = document.getElementById(reading.id);
        if (element) {
            element.textContent = reading.value;
            
            // Add flash effect
            element.style.color = '#22d3ee';
            setTimeout(() => {
                element.style.color = '';
            }, 300);
        }
    });
}

// Export functions for potential use
window.OceanAI = {
    addChatMessage,
    oceanFacts,
    OCEAN_GALLERY_FACTS,
    OCEAN_DATA,
    initializeBackgroundEffects,
    initializeCharts,
    initializeOceanGallery
};

console.log('🌊 OceanAI script loaded successfully!');
