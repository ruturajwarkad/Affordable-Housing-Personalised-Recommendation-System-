// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize building animations
    initBuildingAnimation()
  
    // Initialize property cards
    initPropertyCards()
  
    // Initialize city map
    initCityMap()
  
    // Initialize testimonials
    initTestimonials()
  
    // Initialize scroll animations
    initScrollAnimations()
  
    // Initialize mobile menu
    initMobileMenu()
  
    // Initialize chatbot
    initChatbot()
  
    // Initialize tabs
    initTabs()
  
    // Initialize login/signup modals
    initAuthModals()
  })
  
  // Building Animation in Hero Section
  function initBuildingAnimation() {
    const skyline = document.querySelector(".skyline")
    if (!skyline) return
  
    // Clear any existing buildings
    skyline.innerHTML = ""
  
    // Create buildings
    const buildingCount = 20
    const skylineWidth = skyline.offsetWidth
  
    // Calculate the width of each segment
    const segmentWidth = skylineWidth / buildingCount
  
    for (let i = 0; i < buildingCount; i++) {
      const building = document.createElement("div")
      building.className = "building"
  
      // Random building properties with controlled width
      const width = Math.floor(Math.random() * 40) + 40 // 40-80px
      const height = Math.floor(Math.random() * 120) + 80 // 80-200px
  
      // Position each building in the center of its segment
      const left = i * segmentWidth + (segmentWidth - width) / 2
      const delay = Math.random() * 0.5
  
      // Set building style
      building.style.width = `${width}px`
      building.style.height = `${height}px`
      building.style.left = `${left}px`
      building.style.animationDelay = `${delay}s`
  
      // Add windows to buildings
      const windowCount = Math.floor((height / 20) * (width / 20))
  
      for (let j = 0; j < windowCount; j++) {
        const buildingWindow = document.createElement("div")
        buildingWindow.className = "building-window"
  
        // Position windows in a grid
        const windowWidth = width * 0.2
        const windowHeight = height * 0.1
        const windowsPerRow = Math.floor(width / (windowWidth * 1.5))
        const windowsPerColumn = Math.floor(height / (windowHeight * 1.5))
  
        const row = Math.floor(j / windowsPerRow)
        const col = j % windowsPerRow
  
        const windowLeft = col * (width / windowsPerRow) + (width / windowsPerRow) * 0.25
        const windowTop = row * (height / windowsPerColumn) + (height / windowsPerColumn) * 0.25
  
        buildingWindow.style.width = `${windowWidth}px`
        buildingWindow.style.height = `${windowHeight}px`
        buildingWindow.style.left = `${windowLeft}px`
        buildingWindow.style.top = `${windowTop}px`
  
        // Randomize window animations
        buildingWindow.style.animationDelay = `${Math.random() * 5}s`
        buildingWindow.style.animationDuration = `${3 + Math.random() * 4}s`
  
        building.appendChild(buildingWindow)
      }
  
      skyline.appendChild(building)
    }
  
    // Make windows blink for a short period
    const windowBlinkInterval = setInterval(() => {
      const windows = document.querySelectorAll(".building-window")
      const randomWindows = Array.from(windows)
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(windows.length * 0.2))
  
      randomWindows.forEach((window) => {
        // Reset animation by cloning and replacing the element
        const parent = window.parentNode
        const clone = window.cloneNode(true)
        clone.style.animationDelay = `${Math.random() * 2}s`
        clone.style.animationDuration = `${3 + Math.random() * 4}s`
        parent.replaceChild(clone, window)
      })
    }, 2000) // Every 2 seconds
  
    // Stop the animation after 15 seconds
    setTimeout(() => {
      clearInterval(windowBlinkInterval)
    }, 15000)
  }
  
  // Initialize Property Cards
  function initPropertyCards() {
    const propertyGrid = document.querySelector(".property-grid-content")
    if (!propertyGrid) return
  
    // Sample property data
    const properties = [
      {
        image: "https://via.placeholder.com/400x300",
        title: "Modern 2BHK Apartment in Mumbai",
        price: "₹25,000",
        location: "Andheri West, Mumbai",
        rating: 4.5,
        reviews: 24,
        beds: 2,
        baths: 2,
        area: "950 sq.ft",
        featured: false,
        bachelor: true,
      },
      {
        image: "https://via.placeholder.com/400x300",
        title: "Spacious 3BHK Villa in Bangalore",
        price: "₹35,000",
        location: "Whitefield, Bangalore",
        rating: 4.8,
        reviews: 36,
        beds: 3,
        baths: 3,
        area: "1800 sq.ft",
        featured: false,
        bachelor: false,
      },
      {
        image: "https://via.placeholder.com/400x300",
        title: "Cozy 1BHK in Delhi NCR",
        price: "₹18,000",
        location: "Noida Sector 62, Delhi NCR",
        rating: 4.2,
        reviews: 18,
        beds: 1,
        baths: 1,
        area: "650 sq.ft",
        featured: false,
        bachelor: true,
      },
      {
        image: "https://via.placeholder.com/400x300",
        title: "Luxury 4BHK Penthouse in Pune",
        price: "₹65,000",
        location: "Koregaon Park, Pune",
        rating: 4.9,
        reviews: 42,
        beds: 4,
        baths: 4,
        area: "2400 sq.ft",
        featured: false,
        bachelor: false,
      },
      {
        image: "https://via.placeholder.com/400x300",
        title: "Modern 2BHK in Hyderabad",
        price: "₹22,000",
        location: "Gachibowli, Hyderabad",
        rating: 4.3,
        reviews: 29,
        beds: 2,
        baths: 2,
        area: "1050 sq.ft",
        featured: false,
        bachelor: true,
      },
      {
        image: "https://via.placeholder.com/400x300",
        title: "Elegant 3BHK in Chennai",
        price: "₹32,000",
        location: "OMR Road, Chennai",
        rating: 4.6,
        reviews: 31,
        beds: 3,
        baths: 3,
        area: "1650 sq.ft",
        featured: false,
        bachelor: false,
      },
    ]
  
    // Clear existing content
    propertyGrid.innerHTML = ""
  
    // Create property cards
    properties.forEach((property, index) => {
      const card = document.createElement("div")
      card.className = "property-card"
      card.setAttribute("data-delay", index * 0.1)
  
      card.innerHTML = `
              <div class="property-image">
                  <img src="${property.image}" alt="${property.title}">
                  <button class="favorite-btn">
                      <i class="far fa-heart"></i>
                  </button>
                  ${property.featured ? '<div class="property-badge featured">Featured</div>' : ""}
                  ${property.bachelor ? '<div class="property-badge bachelor">Bachelor Friendly</div>' : ""}
              </div>
              
              <div class="property-content">
                  <div class="property-header">
                      <h3>${property.title}</h3>
                      <p class="property-price">${property.price}</p>
                  </div>
                  
                  <div class="property-location">
                      <i class="fas fa-map-marker-alt"></i>
                      <p>${property.location}</p>
                  </div>
                  
                  <div class="property-rating">
                      <i class="fas fa-star"></i>
                      <span>${property.rating}</span>
                      <span class="review-count">(${property.reviews} reviews)</span>
                  </div>
                  
                  <div class="property-features">
                      <div class="feature">
                          <i class="fas fa-bed"></i>
                          <span>${property.beds} Beds</span>
                      </div>
                      <div class="feature">
                          <i class="fas fa-bath"></i>
                          <span>${property.baths} Baths</span>
                      </div>
                      <div class="feature">
                          <i class="fas fa-expand-arrows-alt"></i>
                          <span>${property.area}</span>
                      </div>
                  </div>
              </div>
              
              <div class="property-footer">
                  <button class="btn btn-primary btn-block">View Details</button>
              </div>
          `
  
      propertyGrid.appendChild(card)
  
      // Add animation with delay
      setTimeout(() => {
        card.classList.add("animate")
      }, index * 100)
    })
  
    // Initialize favorite buttons
    const favoriteButtons = document.querySelectorAll(".favorite-btn")
    favoriteButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault()
        const icon = this.querySelector("i")
        if (icon.classList.contains("far")) {
          icon.classList.remove("far")
          icon.classList.add("fas")
          icon.style.color = "#e91e63"
        } else {
          icon.classList.remove("fas")
          icon.classList.add("far")
          icon.style.color = ""
        }
      })
    })
  }
  
  // Initialize City Map
  function initCityMap() {
    const indiaMap = document.querySelector(".india-map")
    if (!indiaMap) return
  
    // Sample city data with coordinates (approximate)
    const cities = [
      { name: "Mumbai", x: 20, y: 60 },
      { name: "Delhi", x: 40, y: 30 },
      { name: "Bangalore", x: 35, y: 75 },
      { name: "Hyderabad", x: 40, y: 65 },
      { name: "Chennai", x: 45, y: 80 },
      { name: "Kolkata", x: 70, y: 45 },
      { name: "Pune", x: 25, y: 65 },
      { name: "Ahmedabad", x: 20, y: 45 },
      { name: "Jaipur", x: 30, y: 35 },
      { name: "Lucknow", x: 50, y: 35 },
    ]
  
    // Create city markers
    cities.forEach((city, index) => {
      const cityMarker = document.createElement("div")
      cityMarker.className = "map-city"
      cityMarker.setAttribute("data-city", city.name)
      cityMarker.style.left = `${city.x}%`
      cityMarker.style.top = `${city.y}%`
      cityMarker.style.animationDelay = `${index * 0.2}s`
  
      cityMarker.addEventListener("click", () => {
        updateCityDetails(city.name)
      })
  
      indiaMap.appendChild(cityMarker)
    })
  
    // Set default city
    updateCityDetails("Mumbai")
  }
  
  // Update City Details
  function updateCityDetails(cityName) {
    const cityCard = document.querySelector(".city-card")
    if (!cityCard) return
  
    // Sample city data
    const cityData = {
      Mumbai: {
        image: "https://via.placeholder.com/600x300",
        description: "The financial capital of India with a vibrant lifestyle and excellent connectivity.",
        affordabilityScore: 6.5,
        affordabilityLabel: "Moderate",
        rentRange: "₹20,000 - ₹80,000",
        popularity: "Very High",
        propertyTypes: "Apartments, Penthouses",
        transport: 85,
        shopping: 90,
        dining: 95,
        education: 85,
      },
      Delhi: {
        image: "https://via.placeholder.com/600x300",
        description: "The capital city with rich history, culture and excellent infrastructure.",
        affordabilityScore: 7.0,
        affordabilityLabel: "Affordable",
        rentRange: "₹15,000 - ₹70,000",
        popularity: "High",
        propertyTypes: "Apartments, Independent Houses",
        transport: 90,
        shopping: 85,
        dining: 90,
        education: 90,
      },
      Bangalore: {
        image: "https://via.placeholder.com/600x300",
        description: "India's Silicon Valley with pleasant weather and a cosmopolitan lifestyle.",
        affordabilityScore: 6.0,
        affordabilityLabel: "Moderate",
        rentRange: "₹18,000 - ₹60,000",
        popularity: "Very High",
        propertyTypes: "Apartments, Villas",
        transport: 75,
        shopping: 85,
        dining: 90,
        education: 95,
      },
      Hyderabad: {
        image: "https://via.placeholder.com/600x300",
        description: "A perfect blend of traditional charm and modern technology hub.",
        affordabilityScore: 7.5,
        affordabilityLabel: "Affordable",
        rentRange: "₹15,000 - ₹50,000",
        popularity: "High",
        propertyTypes: "Apartments, Villas",
        transport: 80,
        shopping: 85,
        dining: 90,
        education: 85,
      },
      Chennai: {
        image: "https://via.placeholder.com/600x300",
        description: "A major cultural, economic and educational center of South India.",
        affordabilityScore: 7.0,
        affordabilityLabel: "Affordable",
        rentRange: "₹15,000 - ₹55,000",
        popularity: "High",
        propertyTypes: "Apartments, Independent Houses",
        transport: 85,
        shopping: 80,
        dining: 85,
        education: 90,
      },
      Kolkata: {
        image: "https://via.placeholder.com/600x300",
        description: "The cultural capital of India with rich heritage and affordable living.",
        affordabilityScore: 8.0,
        affordabilityLabel: "Very Affordable",
        rentRange: "₹10,000 - ₹45,000",
        popularity: "Moderate",
        propertyTypes: "Apartments, Colonial Houses",
        transport: 80,
        shopping: 75,
        dining: 85,
        education: 85,
      },
      Pune: {
        image: "https://via.placeholder.com/600x300",
        description: "A well-established educational hub with pleasant climate and good infrastructure.",
        affordabilityScore: 7.5,
        affordabilityLabel: "Affordable",
        rentRange: "₹15,000 - ₹50,000",
        popularity: "High",
        propertyTypes: "Apartments, Villas",
        transport: 80,
        shopping: 85,
        dining: 80,
        education: 90,
      },
      Ahmedabad: {
        image: "https://via.placeholder.com/600x300",
        description: "A rapidly growing city with strong industrial base and cultural heritage.",
        affordabilityScore: 8.0,
        affordabilityLabel: "Very Affordable",
        rentRange: "₹12,000 - ₹45,000",
        popularity: "Moderate",
        propertyTypes: "Apartments, Bungalows",
        transport: 75,
        shopping: 80,
        dining: 75,
        education: 85,
      },
      Jaipur: {
        image: "https://via.placeholder.com/600x300",
        description: "The Pink City with rich royal heritage and growing infrastructure.",
        affordabilityScore: 8.5,
        affordabilityLabel: "Very Affordable",
        rentRange: "₹10,000 - ₹40,000",
        popularity: "Moderate",
        propertyTypes: "Apartments, Havelis",
        transport: 70,
        shopping: 85,
        dining: 80,
        education: 80,
      },
      Lucknow: {
        image: "https://via.placeholder.com/600x300",
        description: "The city of Nawabs with rich cultural heritage and affordable living.",
        affordabilityScore: 8.5,
        affordabilityLabel: "Very Affordable",
        rentRange: "₹10,000 - ₹35,000",
        popularity: "Moderate",
        propertyTypes: "Apartments, Kothi",
        transport: 75,
        shopping: 75,
        dining: 85,
        education: 80,
      },
    }
  
    const city = cityData[cityName] || cityData["Mumbai"]
  
    // Update city card
    cityCard.innerHTML = `
          <div class="neighborhood-image">
              <img src="${city.image}" alt="${cityName}">
              <div class="neighborhood-overlay">
                  <h3>${cityName}</h3>
                  <div class="neighborhood-location">
                      <i class="fas fa-map-marker-alt"></i>
                      <span>India</span>
                  </div>
              </div>
          </div>
          
          <div class="neighborhood-content">
              <p class="neighborhood-description">${city.description}</p>
              
              <div class="neighborhood-stats">
                  <div class="stat-box">
                      <div class="stat-header">
                          <span>Affordability Score</span>
                          <i class="fas fa-info-circle" title="Our AI calculates affordability based on average rent, amenities, and cost of living"></i>
                      </div>
                      <div class="stat-value">
                          <span class="score-value score-good">${city.affordabilityScore}/10</span>
                          <span class="score-label">${city.affordabilityLabel}</span>
                      </div>
                  </div>
                  
                  <div class="stat-box">
                      <span>Average Rent (Monthly)</span>
                      <p class="stat-value">${city.rentRange}</p>
                  </div>
                  
                  <div class="stat-box">
                      <span>Popularity</span>
                      <div class="stat-with-icon">
                          <i class="fas fa-chart-line"></i>
                          <p>${city.popularity}</p>
                      </div>
                  </div>
                  
                  <div class="stat-box">
                      <span>Property Types</span>
                      <div class="stat-with-icon">
                          <i class="fas fa-building"></i>
                          <p>${city.propertyTypes}</p>
                      </div>
                  </div>
              </div>
              
              <h4>Amenity Scores</h4>
              <div class="amenity-scores">
                  <div class="amenity-score">
                      <div class="amenity-icon">
                          <i class="fas fa-bus"></i>
                      </div>
                      <div class="amenity-details">
                          <p>Transport</p>
                          <div class="score-bar">
                              <div class="score-fill" style="width: ${city.transport}%;"></div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="amenity-score">
                      <div class="amenity-icon">
                          <i class="fas fa-shopping-bag"></i>
                      </div>
                      <div class="amenity-details">
                          <p>Shopping</p>
                          <div class="score-bar">
                              <div class="score-fill" style="width: ${city.shopping}%;"></div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="amenity-score">
                      <div class="amenity-icon">
                          <i class="fas fa-utensils"></i>
                      </div>
                      <div class="amenity-details">
                          <p>Dining</p>
                          <div class="score-bar">
                              <div class="score-fill" style="width: ${city.dining}%;"></div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="amenity-score">
                      <div class="amenity-icon">
                          <i class="fas fa-school"></i>
                      </div>
                      <div class="amenity-details">
                          <p>Education</p>
                          <div class="score-bar">
                              <div class="score-fill" style="width: ${city.education}%;"></div>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div class="neighborhood-actions">
                  <button class="btn btn-outline">
                      <i class="far fa-heart"></i>
                      Save
                  </button>
                  <button class="btn btn-primary">View Properties</button>
              </div>
          </div>
      `
  
    // Animate city card
    cityCard.classList.remove("animate")
    void cityCard.offsetWidth // Trigger reflow
    cityCard.classList.add("animate")
  }
  
  // Initialize Testimonials
  function initTestimonials() {
    const testimonialsContainer = document.querySelector(".testimonials-container")
    if (!testimonialsContainer) return
  
    // Sample testimonial data
    const testimonials = [
      {
        text: "I found my perfect 2BHK in Mumbai through this platform. The AI recommendations were spot on and saved me so much time. The entire process from search to move-in was seamless!",
        author: "Priya Sharma",
        role: "Software Engineer",
        avatar: "https://via.placeholder.com/100",
        rating: 5,
      },
      {
        text: "As someone new to Bangalore, this website was a lifesaver. The neighborhood insights helped me choose the right area, and the bachelor-friendly filter made finding a place much easier.",
        author: "Rahul Patel",
        role: "Marketing Manager",
        avatar: "https://via.placeholder.com/100",
        rating: 4,
      },
      {
        text: "The AI chatbot answered all my questions instantly, and the virtual tours saved me so many trips. I found a beautiful apartment in Delhi that perfectly matched my requirements.",
        author: "Ananya Desai",
        role: "UX Designer",
        avatar: "https://via.placeholder.com/100",
        rating: 5,
      },
      {
        text: "Moving from Chennai to Hyderabad was stressful, but this platform made finding a new home so easy. The city comparison tool helped me understand the cost differences and find the right neighborhood.",
        author: "Vikram Reddy",
        role: "Data Scientist",
        avatar: "https://via.placeholder.com/100",
        rating: 5,
      },
      {
        text: "The affordability calculator was incredibly accurate. It helped me budget properly for my move to Pune, including all the hidden costs I hadn't considered.",
        author: "Meera Joshi",
        role: "Financial Analyst",
        avatar: "https://via.placeholder.com/100",
        rating: 4,
      },
    ]
  
    // Clear existing content
    testimonialsContainer.innerHTML = ""
  
    // Create testimonial cards
    testimonials.forEach((testimonial) => {
      const card = document.createElement("div")
      card.className = "testimonial-card"
  
      let stars = ""
      for (let i = 0; i < 5; i++) {
        if (i < testimonial.rating) {
          stars += '<i class="fas fa-star"></i>'
        } else {
          stars += '<i class="far fa-star"></i>'
        }
      }
  
      card.innerHTML = `
              <div class="testimonial-content">
                  <i class="fas fa-quote-left quote-icon"></i>
                  
                  <div class="testimonial-rating">
                      ${stars}
                  </div>
                  
                  <p class="testimonial-text">${testimonial.text}</p>
                  
                  <div class="testimonial-author">
                      <img src="${testimonial.avatar}" alt="${testimonial.author}" class="author-avatar">
                      <div class="author-info">
                          <h4>${testimonial.author}</h4>
                          <p>${testimonial.role}</p>
                      </div>
                  </div>
              </div>
          `
  
      testimonialsContainer.appendChild(card)
    })
  
    // Initialize slider
    let slideIndex = 0
    const prevBtn = document.querySelector(".prev-btn")
    const nextBtn = document.querySelector(".next-btn")
  
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        if (slideIndex > 0) {
          slideIndex--
          showSlide(slideIndex)
        }
      })
  
      nextBtn.addEventListener("click", () => {
        const cards = document.querySelectorAll(".testimonial-card")
        const visibleSlides = window.innerWidth >= 768 ? 3 : 1
        if (slideIndex < cards.length - visibleSlides) {
          slideIndex++
          showSlide(slideIndex)
        }
      })
    }
  
    function showSlide(index) {
      const cards = document.querySelectorAll(".testimonial-card")
      if (cards.length === 0) return
  
      const cardWidth = cards[0].offsetWidth
      testimonialsContainer.style.transform = `translateX(-${index * cardWidth}px)`
    }
  }
  
  // Initialize Scroll Animations
  function initScrollAnimations() {
    const animatedElements = [
      ".section-header",
      ".features-grid",
      ".listings-header",
      ".listings-container",
      ".insights-grid",
      ".testimonials-slider",
    ]
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )
  
    animatedElements.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        observer.observe(element)
      })
    })
  
    // Animate property cards on scroll
    const propertyCards = document.querySelectorAll(".property-card")
    const propertyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number.parseFloat(entry.target.getAttribute("data-delay") || 0)
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, delay * 1000)
            propertyObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )
  
    propertyCards.forEach((card) => {
      propertyObserver.observe(card)
    })
  }
  
  // Initialize Mobile Menu
  function initMobileMenu() {
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    const mainNav = document.querySelector(".main-nav")
  
    if (mobileMenuBtn && mainNav) {
      mobileMenuBtn.addEventListener("click", function () {
        mainNav.classList.toggle("active")
  
        const icon = this.querySelector("i")
        if (icon.classList.contains("fa-bars")) {
          icon.classList.remove("fa-bars")
          icon.classList.add("fa-times")
        } else {
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      })
    }
  }
  
  // Initialize Chatbot
  function initChatbot() {
    const chatbotBtn = document.querySelector(".chatbot-btn")
    const chatbotWindow = document.querySelector(".chatbot-window")
    const chatbotClose = document.querySelector(".chatbot-close")
    const chatbotSend = document.querySelector(".chatbot-send")
    const chatbotInput = document.querySelector(".chatbot-input input")
    const chatbotMessages = document.querySelector(".chatbot-messages")
  
    if (chatbotBtn && chatbotWindow) {
      chatbotBtn.addEventListener("click", function () {
        if (chatbotWindow.style.display === "none" || !chatbotWindow.style.display) {
          chatbotWindow.style.display = "flex"
          setTimeout(() => {
            chatbotWindow.classList.add("active")
          }, 10)
          this.innerHTML = '<i class="fas fa-times"></i>'
          this.style.backgroundColor = "#e91e63"
        } else {
          chatbotWindow.classList.remove("active")
          setTimeout(() => {
            chatbotWindow.style.display = "none"
          }, 300)
          this.innerHTML = '<i class="fas fa-robot"></i>'
          this.style.backgroundColor = ""
        }
      })
    }
  
    if (chatbotClose) {
      chatbotClose.addEventListener("click", () => {
        chatbotWindow.classList.remove("active")
        setTimeout(() => {
          chatbotWindow.style.display = "none"
        }, 300)
        chatbotBtn.innerHTML = '<i class="fas fa-robot"></i>'
        chatbotBtn.style.backgroundColor = ""
      })
    }
  
    if (chatbotSend && chatbotInput && chatbotMessages) {
      // Function to send message
      function sendMessage() {
        const message = chatbotInput.value.trim()
  
        if (message) {
          const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  
          // Add user message
          chatbotMessages.innerHTML += `
                      <div class="message user-message">
                          <div class="message-content">
                              <p>${message}</p>
                              <span class="message-time">${time}</span>
                          </div>
                      </div>
                  `
  
          chatbotInput.value = ""
          chatbotMessages.scrollTop = chatbotMessages.scrollHeight
  
          // Simulate bot response after a short delay
          setTimeout(() => {
            // Sample responses based on keywords
            let botResponse =
              "I'd be happy to help you with that. Would you like me to search for properties based on your preferences, or do you have specific questions about areas in India?"
  
            if (message.toLowerCase().includes("mumbai")) {
              botResponse =
                "Mumbai is one of our most popular cities! The average rent for a 2BHK ranges from ₹25,000 to ₹60,000 depending on the area. Would you like me to show you some properties in Mumbai?"
            } else if (message.toLowerCase().includes("delhi") || message.toLowerCase().includes("ncr")) {
              botResponse =
                "Delhi NCR offers a wide range of housing options. The average rent for a 2BHK ranges from ₹15,000 to ₹50,000. Would you like to see properties in a specific part of Delhi NCR?"
            } else if (message.toLowerCase().includes("bangalore") || message.toLowerCase().includes("bengaluru")) {
              botResponse =
                "Bangalore is a tech hub with great housing options. The average rent for a 2BHK ranges from ₹18,000 to ₹45,000. Would you like me to recommend some areas based on your workplace?"
            } else if (message.toLowerCase().includes("budget")) {
              botResponse =
                "I can help you find properties within your budget. Could you tell me your preferred city and budget range?"
            } else if (message.toLowerCase().includes("bachelor") || message.toLowerCase().includes("single")) {
              botResponse =
                "We have many bachelor-friendly options across India. These properties typically don't have restrictions for single tenants. Which city are you looking to rent in?"
            }
  
            chatbotMessages.innerHTML += `
                          <div class="message bot-message">
                              <div class="message-content">
                                  <p>${botResponse}</p>
                                  <span class="message-time">${time}</span>
                              </div>
                          </div>
                      `
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight
          }, 1000)
        }
      }
  
      // Send message on button click
      chatbotSend.addEventListener("click", sendMessage)
  
      // Send message on Enter key
      chatbotInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          sendMessage()
        }
      })
    }
  }
  
  // Initialize Tabs
  function initTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabContents = document.querySelectorAll(".tab-content")
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab")
  
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))
  
        this.classList.add("active")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }
  
  // Initialize Login/Signup Modals
  function initAuthModals() {
    // Create modal containers if they don't exist
    if (!document.getElementById("login-modal")) {
      createAuthModals()
    }
  
    // Get modal elements
    const loginModal = document.getElementById("login-modal")
    const signupModal = document.getElementById("signup-modal")
    const loginBtn = document.querySelector(".login-btn")
    const signupBtn = document.querySelector(".signup-btn")
    const closeBtns = document.querySelectorAll(".close-modal")
    const switchToSignupBtn = document.getElementById("switch-to-signup")
    const switchToLoginBtn = document.getElementById("switch-to-login")
  
    // Open login modal
    if (loginBtn) {
      loginBtn.addEventListener("click", (e) => {
        e.preventDefault()
        loginModal.style.display = "flex"
        setTimeout(() => {
          loginModal.classList.add("active")
        }, 10)
      })
    }
  
    // Open signup modal
    if (signupBtn) {
      signupBtn.addEventListener("click", (e) => {
        e.preventDefault()
        signupModal.style.display = "flex"
        setTimeout(() => {
          signupModal.classList.add("active")
        }, 10)
      })
    }
  
    // Close modals
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        loginModal.classList.remove("active")
        signupModal.classList.remove("active")
        setTimeout(() => {
          loginModal.style.display = "none"
          signupModal.style.display = "none"
        }, 300)
      })
    })
  
    // Switch between login and signup
    if (switchToSignupBtn) {
      switchToSignupBtn.addEventListener("click", (e) => {
        e.preventDefault()
        loginModal.classList.remove("active")
        setTimeout(() => {
          loginModal.style.display = "none"
          signupModal.style.display = "flex"
          setTimeout(() => {
            signupModal.classList.add("active")
          }, 10)
        }, 300)
      })
    }
  
    if (switchToLoginBtn) {
      switchToLoginBtn.addEventListener("click", (e) => {
        e.preventDefault()
        signupModal.classList.remove("active")
        setTimeout(() => {
          signupModal.style.display = "none"
          loginModal.style.display = "flex"
          setTimeout(() => {
            loginModal.classList.add("active")
          }, 10)
        }, 300)
      })
    }
  
    // Close modal when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target === loginModal) {
        loginModal.classList.remove("active")
        setTimeout(() => {
          loginModal.style.display = "none"
        }, 300)
      }
      if (e.target === signupModal) {
        signupModal.classList.remove("active")
        setTimeout(() => {
          signupModal.style.display = "none"
        }, 300)
      }
    })
  
    // Form submission (prevent default for demo)
    const authForms = document.querySelectorAll(".auth-form")
    authForms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault()
        const formType = this.getAttribute("data-form-type")
        alert(`${formType} successful! This is a demo.`)
  
        // Close the modal
        const modal = this.closest(".modal")
        modal.classList.remove("active")
        setTimeout(() => {
          modal.style.display = "none"
        }, 300)
      })
    })
  }
  
  // Create auth modals
  function createAuthModals() {
    // Create login modal
    const loginModal = document.createElement("div")
    loginModal.id = "login-modal"
    loginModal.className = "modal login-modal"
    loginModal.innerHTML = `
          <div class="modal-content">
              <div class="modal-header">
                  <h3>Login</h3>
                  <button class="close-modal">&times;</button>
              </div>
              <div class="modal-body">
                  <form class="auth-form" data-form-type="Login">
                      <div class="form-group">
                          <label for="login-email">Email</label>
                          <input type="email" id="login-email" required>
                      </div>
                      <div class="form-group">
                          <label for="login-password">Password</label>
                          <input type="password" id="login-password" required>
                      </div>
                      <div class="form-group form-checkbox">
                          <input type="checkbox" id="remember-me">
                          <label for="remember-me">Remember me</label>
                      </div>
                      <button type="submit" class="btn btn-primary btn-block">Login</button>
                  </form>
                  <div class="auth-footer">
                      <p>Don't have an account? <a href="#" id="switch-to-signup">Sign up</a></p>
                      <a href="#" class="forgot-password">Forgot password?</a>
                  </div>
                  <div class="social-login">
                      <p>Or login with</p>
                      <div class="social-buttons">
                          <button class="social-btn google">
                              <i class="fab fa-google"></i>
                              Google
                          </button>
                          <button class="social-btn facebook">
                              <i class="fab fa-facebook-f"></i>
                              Facebook
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      `
  
    // Create signup modal
    const signupModal = document.createElement("div")
    signupModal.id = "signup-modal"
    signupModal.className = "modal signup-modal"
    signupModal.innerHTML = `
          <div class="modal-content">
              <div class="modal-header">
                  <h3>Sign Up</h3>
                  <button class="close-modal">&times;</button>
              </div>
              <div class="modal-body">
                  <form class="auth-form" data-form-type="Signup">
                      <div class="form-group">
                          <label for="signup-name">Full Name</label>
                          <input type="text" id="signup-name" required>
                      </div>
                      <div class="form-group">
                          <label for="signup-email">Email</label>
                          <input type="email" id="signup-email" required>
                      </div>
                      <div class="form-group">
                          <label for="signup-password">Password</label>
                          <input type="password" id="signup-password" required>
                      </div>
                      <div class="form-group">
                          <label for="signup-confirm-password">Confirm Password</label>
                          <input type="password" id="signup-confirm-password" required>
                      </div>
                      <div class="form-group form-checkbox">
                          <input type="checkbox" id="terms" required>
                          <label for="terms">I agree to the <a href="#">Terms and Conditions</a></label>
                      </div>
                      <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                  </form>
                  <div class="auth-footer">
                      <p>Already have an account? <a href="#" id="switch-to-login">Login</a></p>
                  </div>
                  <div class="social-login">
                      <p>Or sign up with</p>
                      <div class="social-buttons">
                          <button class="social-btn google">
                              <i class="fab fa-google"></i>
                              Google
                          </button>
                          <button class="social-btn facebook">
                              <i class="fab fa-facebook-f"></i>
                              Facebook
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      `
  
    // Append modals to body
    document.body.appendChild(loginModal)
    document.body.appendChild(signupModal)
  }
  
  // Handle window resize
  window.addEventListener("resize", () => {
    initBuildingAnimation()
  })
  
  // Add this to ensure animations run for a short period
  window.addEventListener("load", () => {
    // Initial animation setup
    initBuildingAnimation()
  })
  
  