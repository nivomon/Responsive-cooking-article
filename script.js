// Sample recipe data
const recipes = [
    {
        id: 1,
        title: "Gourmet Avocado Toast with Poached Eggs",
        category: "breakfast",
        cookingTime: 15,
        author: "Maria Rodriguez",
        description: "Creamy avocado spread on artisan bread, topped with perfectly poached eggs and a sprinkle of chili flakes.",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        likes: 128,
        trending: true,
        ingredients: [
            "2 slices artisan bread",
            "1 ripe avocado",
            "2 fresh eggs",
            "1 tbsp white vinegar",
            "Salt and pepper to taste",
            "Chili flakes for garnish",
            "Fresh cilantro for garnish"
        ],
        steps: [
            "Bring a pot of water to a gentle simmer and add vinegar.",
            "Crack each egg into a small cup, then gently slide into the simmering water.",
            "Poach eggs for 3-4 minutes until whites are set but yolks are still runny.",
            "Meanwhile, toast bread until golden and crispy.",
            "Mash avocado with a fork and season with salt and pepper.",
            "Spread avocado mixture on toast, top with poached eggs.",
            "Garnish with chili flakes and fresh cilantro. Serve immediately."
        ]
    },
    {
        id: 2,
        title: "Creamy Garlic Parmesan Pasta",
        category: "dinner",
        cookingTime: 25,
        author: "Antonio Bianchi",
        description: "Rich and creamy pasta with garlic, parmesan, and a hint of white wine. A restaurant-quality dish made at home.",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.0,
        likes: 96,
        trending: true,
        ingredients: [
            "8 oz fettuccine pasta",
            "2 tbsp butter",
            "4 cloves garlic, minced",
            "1 cup heavy cream",
            "1/2 cup grated parmesan cheese",
            "1/4 cup white wine",
            "Salt and pepper to taste",
            "Fresh parsley, chopped"
        ],
        steps: [
            "Cook pasta according to package directions until al dente.",
            "Meanwhile, melt butter in a large skillet over medium heat.",
            "Add garlic and sauté for 1 minute until fragrant.",
            "Pour in white wine and simmer for 2 minutes.",
            "Add heavy cream and bring to a gentle simmer.",
            "Stir in parmesan cheese until melted and sauce is smooth.",
            "Drain pasta, reserving 1/4 cup pasta water.",
            "Add pasta to sauce, tossing to coat. Add pasta water if needed to thin sauce.",
            "Season with salt and pepper, garnish with parsley, and serve."
        ]
    },
    {
        id: 3,
        title: "Homemade Margherita Pizza",
        category: "dinner",
        cookingTime: 40,
        author: "Sofia Martinez",
        description: "Classic Italian pizza with fresh tomatoes, mozzarella, and basil on a perfectly crisp homemade crust.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 5.0,
        likes: 204,
        trending: true,
        ingredients: [
            "1 pizza dough ball",
            "1/2 cup pizza sauce",
            "8 oz fresh mozzarella, sliced",
            "2 ripe tomatoes, sliced",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt to taste"
        ],
        steps: [
            "Preheat oven to 475°F (245°C) with pizza stone if available.",
            "Roll out pizza dough on a floured surface to desired thickness.",
            "Transfer dough to pizza peel or baking sheet dusted with cornmeal.",
            "Spread pizza sauce evenly over dough, leaving a border for crust.",
            "Arrange mozzarella slices and tomato slices over sauce.",
            "Drizzle with olive oil and sprinkle with salt.",
            "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
            "Remove from oven, top with fresh basil leaves, slice and serve."
        ]
    },
    {
        id: 4,
        title: "Rainbow Buddha Bowl",
        category: "lunch",
        cookingTime: 20,
        author: "Jamie Oliver",
        description: "A vibrant bowl packed with quinoa, roasted vegetables, avocado, and a tangy tahini dressing.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.0,
        likes: 87,
        trending: false,
        ingredients: [
            "1 cup quinoa, rinsed",
            "1 sweet potato, cubed",
            "1 red bell pepper, sliced",
            "1 cup broccoli florets",
            "1 avocado, sliced",
            "2 tbsp olive oil",
            "Salt and pepper to taste",
            "For tahini dressing: 1/4 cup tahini, 2 tbsp lemon juice, 2 tbsp water, 1 garlic clove, salt"
        ],
        steps: [
            "Preheat oven to 400°F (200°C).",
            "Toss sweet potato, bell pepper, and broccoli with olive oil, salt, and pepper.",
            "Spread vegetables on baking sheet and roast for 15-20 minutes until tender.",
            "Meanwhile, cook quinoa according to package directions.",
            "Whisk together tahini, lemon juice, water, minced garlic, and salt for dressing.",
            "Assemble bowls with quinoa as base, top with roasted vegetables and avocado.",
            "Drizzle with tahini dressing and serve."
        ]
    },
    {
        id: 5,
        title: "Tropical Green Smoothie",
        category: "breakfast",
        cookingTime: 5,
        author: "Emma Wilson",
        description: "A refreshing blend of spinach, mango, pineapple, and coconut water for a healthy start to your day.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        likes: 112,
        trending: false,
        ingredients: [
            "2 cups fresh spinach",
            "1 cup frozen mango chunks",
            "1 cup frozen pineapple chunks",
            "1 banana",
            "1 cup coconut water",
            "1 tbsp chia seeds (optional)",
            "1 tsp honey (optional)"
        ],
        steps: [
            "Add all ingredients to a high-speed blender.",
            "Blend until smooth and creamy.",
            "If too thick, add more coconut water until desired consistency is reached.",
            "Taste and adjust sweetness with honey if needed.",
            "Pour into glasses and serve immediately."
        ]
    },
    {
        id: 6,
        title: "BBQ Chicken Pizza",
        category: "dinner",
        cookingTime: 35,
        author: "Carlos Garcia",
        description: "Tangy BBQ sauce, tender chicken, red onions, and cilantro on a homemade pizza crust.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.0,
        likes: 93,
        trending: false,
        ingredients: [
            "1 pizza dough ball",
            "1 cup cooked chicken, shredded",
            "1/2 cup BBQ sauce",
            "1 cup shredded mozzarella cheese",
            "1/4 red onion, thinly sliced",
            "2 tbsp fresh cilantro, chopped",
            "1 tbsp olive oil"
        ],
        steps: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough on floured surface.",
            "Brush dough with olive oil and spread BBQ sauce evenly.",
            "Top with shredded chicken, red onion, and mozzarella cheese.",
            "Bake for 12-15 minutes until crust is golden and cheese is melted.",
            "Remove from oven, sprinkle with fresh cilantro, slice and serve."
        ]
    }
];

// Sample categories data
const categories = [
    { name: "Breakfast", count: 156, icon: "fas fa-egg" },
    { name: "Lunch", count: 203, icon: "fas fa-hamburger" },
    { name: "Dinner", count: 278, icon: "fas fa-utensils" },
    { name: "Street Food", count: 89, icon: "fas fa-hotdog" },
    { name: "Healthy Recipes", count: 167, icon: "fas fa-apple-alt" },
    { name: "Festive Dishes", count: 74, icon: "fas fa-gift" },
    { name: "Desserts", count: 132, icon: "fas fa-ice-cream" },
    { name: "Vegetarian", count: 198, icon: "fas fa-leaf" },
    { name: "Vegan", count: 121, icon: "fas fa-seedling" },
    { name: "Gluten-Free", count: 95, icon: "fas fa-bread-slice" }
];

// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
const searchSuggestions = document.querySelector('.search-suggestions');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const loginModal = document.querySelector('.login-modal');
const signupModal = document.querySelector('.signup-modal');
const closeModals = document.querySelectorAll('.close-modal');
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const recipeForm = document.getElementById('recipe-form');
const languageSelect = document.getElementById('language-select');
const trendingRecipesContainer = document.getElementById('trending-recipes');
const latestRecipesContainer = document.getElementById('latest-recipes');
const categoriesGrid = document.querySelector('.categories-grid');
const exploreRecipesBtn = document.querySelector('.explore-recipes-btn');
const submitRecipeBtn = document.querySelector('.submit-recipe-btn');
const viewCategoriesBtn = document.querySelector('.view-categories');

// Current user state
let currentUser = null;
let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

// Initialize the application
function init() {
    // Load recipes
    loadTrendingRecipes();
    loadLatestRecipes();
    loadCategories();
    
    // Set up event listeners
    setupEventListeners();
    
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.remove('fa-moon');
        themeToggle.querySelector('i').classList.add('fa-sun');
    }
    
    // Check for saved language
    const savedLanguage = localStorage.getItem('language') || 'en';
    languageSelect.value = savedLanguage;
}

// Set up all event listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Search functionality
    searchBtn.addEventListener('click', toggleSearch);
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', showSearchSuggestions);
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Modal controls
    loginBtn.addEventListener('click', () => openModal(loginModal));
    signupBtn.addEventListener('click', () => openModal(signupModal));
    
    closeModals.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });
    
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeAllModals();
        openModal(loginModal);
    });
    
    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeAllModals();
        openModal(signupModal);
    });
    
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            navigateToPage(page);
        });
    });
    
    // Form submissions
    if (recipeForm) {
        recipeForm.addEventListener('submit', handleRecipeSubmit);
    }
    
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('signup-form').addEventListener('submit', handleSignup);
    
    // Language selection
    languageSelect.addEventListener('change', handleLanguageChange);
    
    // Button actions
    if (exploreRecipesBtn) {
        exploreRecipesBtn.addEventListener('click', () => navigateToPage('categories'));
    }
    
    if (submitRecipeBtn) {
        submitRecipeBtn.addEventListener('click', () => navigateToPage('submit'));
    }
    
    if (viewCategoriesBtn) {
        viewCategoriesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToPage('categories');
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeAllModals();
        }
        if (e.target === signupModal) {
            closeAllModals();
        }
    });
}

// Toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Toggle search bar
function toggleSearch() {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }
}

// Handle search input
function handleSearch() {
    const query = searchInput.value.toLowerCase();
    
    if (query.length < 2) {
        searchSuggestions.classList.remove('active');
        return;
    }
    
    // Filter recipes based on search query
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(query) || 
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
    );
    
    // Display search suggestions
    displaySearchSuggestions(filteredRecipes);
}

// Show search suggestions
function showSearchSuggestions() {
    if (searchInput.value.length >= 2) {
        searchSuggestions.classList.add('active');
    }
}

// Display search suggestions
function displaySearchSuggestions(filteredRecipes) {
    if (filteredRecipes.length === 0) {
        searchSuggestions.innerHTML = '<div class="suggestion-item">No recipes found</div>';
    } else {
        searchSuggestions.innerHTML = filteredRecipes
            .map(recipe => `
                <div class="suggestion-item" data-id="${recipe.id}">
                    <strong>${recipe.title}</strong>
                    <div class="suggestion-meta">${recipe.category} • ${recipe.cookingTime} mins</div>
                </div>
            `)
            .join('');
        
        // Add click event to suggestion items
        document.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const recipeId = parseInt(item.getAttribute('data-id'));
                const recipe = recipes.find(r => r.id === recipeId);
                if (recipe) {
                    showRecipeDetail(recipe);
                    searchContainer.classList.remove('active');
                    searchInput.value = '';
                    searchSuggestions.classList.remove('active');
                }
            });
        });
    }
    
    searchSuggestions.classList.add('active');
}

// Toggle mobile menu
function toggleMobileMenu() {
    nav.classList.toggle('active');
}

// Open modal
function openModal(modal) {
    closeAllModals();
    modal.classList.add('active');
}

// Close all modals
function closeAllModals() {
    loginModal.classList.remove('active');
    signupModal.classList.remove('active');
}

// Navigate to page
function navigateToPage(page) {
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
    
    // Show selected page
    pages.forEach(p => {
        p.classList.remove('active');
        if (p.id === `${page}-page`) {
            p.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    nav.classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Handle recipe form submission
function handleRecipeSubmit(e) {
    e.preventDefault();
    
    if (!currentUser) {
        alert('Please log in to submit a recipe');
        openModal(loginModal);
        return;
    }
    
    const title = document.getElementById('recipe-title').value;
    const category = document.getElementById('recipe-category').value;
    const cookingTime = document.getElementById('cooking-time').value;
    const ingredients = document.getElementById('ingredients').value.split('\n');
    const steps = document.getElementById('cooking-steps').value.split('\n');
    
    // In a real app, you would send this data to a server
    alert('Recipe submitted successfully! It will be reviewed by our team before publishing.');
    
    // Reset form
    e.target.reset();
    
    // Navigate to home page
    navigateToPage('home');
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // In a real app, you would verify credentials with a server
    currentUser = {
        name: 'Demo User',
        email: email
    };
    
    alert(`Welcome back, ${currentUser.name}!`);
    closeAllModals();
    
    // Update UI for logged in user
    updateUserUI();
}

// Handle signup
function handleSignup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    
    // In a real app, you would send this data to a server
    currentUser = {
        name: name,
        email: email
    };
    
    alert(`Account created successfully! Welcome to TastyBites, ${currentUser.name}!`);
    closeAllModals();
    
    // Update UI for logged in user
    updateUserUI();
}

// Update UI for logged in user
function updateUserUI() {
    const userActions = document.querySelector('.user-actions');
    userActions.innerHTML = `
        <div class="user-profile">
            <span>Hi, ${currentUser.name}</span>
            <button class="btn btn-outline logout-btn">Logout</button>
        </div>
    `;
    
    document.querySelector('.logout-btn').addEventListener('click', handleLogout);
}

// Handle logout
function handleLogout() {
    currentUser = null;
    
    // Reset UI
    const userActions = document.querySelector('.user-actions');
    userActions.innerHTML = `
        <button class="btn btn-outline login-btn">Login</button>
        <button class="btn btn-primary signup-btn">Sign Up</button>
    `;
    
    // Reattach event listeners to new buttons
    document.querySelector('.login-btn').addEventListener('click', () => openModal(loginModal));
    document.querySelector('.signup-btn').addEventListener('click', () => openModal(signupModal));
}

// Handle language change
function handleLanguageChange() {
    const selectedLanguage = languageSelect.value;
    localStorage.setItem('language', selectedLanguage);
    
    // In a real app, you would update all text content based on selected language
    alert(`Language changed to ${languageSelect.options[languageSelect.selectedIndex].text}`);
}

// Load trending recipes
function loadTrendingRecipes() {
    const trendingRecipes = recipes.filter(recipe => recipe.trending);
    displayRecipes(trendingRecipes, trendingRecipesContainer);
}

// Load latest recipes
function loadLatestRecipes() {
    // For demo, just show all non-trending recipes as latest
    const latestRecipes = recipes.filter(recipe => !recipe.trending);
    displayRecipes(latestRecipes, latestRecipesContainer);
}

// Display recipes in a container
function displayRecipes(recipesArray, container) {
    if (recipesArray.length === 0) {
        container.innerHTML = '<p>No recipes found.</p>';
        return;
    }
    
    container.innerHTML = recipesArray.map(recipe => `
        <div class="recipe-card" data-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${recipe.cookingTime} mins</span>
                    <span><i class="fas fa-user"></i> ${recipe.author}</span>
                </div>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-actions">
                    <div class="recipe-rating">
                        ${generateStarRating(recipe.rating)}
                        <span>${recipe.rating}</span>
                    </div>
                    <div class="recipe-likes">
                        <i class="far fa-heart"></i>
                        <span>${recipe.likes}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click event to recipe cards
    container.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const recipeId = parseInt(card.getAttribute('data-id'));
            const recipe = recipes.find(r => r.id === recipeId);
            if (recipe) {
                showRecipeDetail(recipe);
            }
        });
    });
    
    // Add like functionality
    container.querySelectorAll('.recipe-likes').forEach(likeBtn => {
        likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLike(likeBtn);
        });
    });
}

// Generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Toggle like on a recipe
function toggleLike(likeBtn) {
    const icon = likeBtn.querySelector('i');
    const count = likeBtn.querySelector('span');
    
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        count.textContent = parseInt(count.textContent) + 1;
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        count.textContent = parseInt(count.textContent) - 1;
    }
}

// Load categories
function loadCategories() {
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = categories.map(category => `
        <div class="category-card" data-category="${category.name.toLowerCase()}">
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <div class="category-info">
                <h3 class="category-name">${category.name}</h3>
                <p class="category-count">${category.count} Recipes</p>
            </div>
        </div>
    `).join('');
    
    // Add click event to category cards
    categoriesGrid.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const categoryName = card.getAttribute('data-category');
            filterRecipesByCategory(categoryName);
        });
    });
}

// Filter recipes by category
function filterRecipesByCategory(category) {
    // In a full implementation, this would filter and display recipes
    alert(`Showing recipes for ${category}`);
    // For demo, just navigate to home page
    navigateToPage('home');
}

// Show recipe detail
function showRecipeDetail(recipe) {
    // Create recipe detail HTML
    const recipeHTML = `
        <div class="recipe-hero">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-info">
                <h1 class="recipe-title-large">${recipe.title}</h1>
                <div class="recipe-meta-large">
                    <div class="meta-item">
                        <i class="far fa-clock"></i>
                        <span>${recipe.cookingTime} mins</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-user"></i>
                        <span>${recipe.author}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-star"></i>
                        <span>${recipe.rating} (${recipe.likes} likes)</span>
                    </div>
                </div>
                <p>${recipe.description}</p>
                
                <div class="recipe-actions-large">
                    <button class="action-btn like-recipe-btn">
                        <i class="far fa-heart"></i>
                        <span>Like</span>
                    </button>
                    <button class="action-btn save-recipe-btn">
                        <i class="far fa-bookmark"></i>
                        <span>Save</span>
                    </button>
                    <button class="action-btn print-recipe-btn">
                        <i class="fas fa-print"></i>
                        <span>Print</span>
                    </button>
                    <button class="action-btn share-recipe-btn">
                        <i class="fas fa-share-alt"></i>
                        <span>Share</span>
                    </button>
                </div>
                
                <h2>Ingredients</h2>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                
                <h2>Cooking Steps</h2>
                <ol class="steps-list">
                    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        </div>
        
        <div class="ai-suggestion">
            <h4><i class="fas fa-robot"></i> AI Cooking Tip</h4>
            <p>For an extra flavor boost, try adding a pinch of smoked paprika to this recipe. It complements the existing flavors beautifully!</p>
        </div>
        
        <div class="similar-recipes">
            <h2>Similar Recipes</h2>
            <div class="recipe-grid" id="similar-recipes">
                <!-- Similar recipes will be loaded here -->
            </div>
        </div>
    `;
    
    // Update recipe page content
    const recipePage = document.getElementById('recipe-page');
    recipePage.querySelector('.container').innerHTML = recipeHTML;
    
    // Load similar recipes
    const similarRecipes = recipes.filter(r => r.category === recipe.category && r.id !== recipe.id).slice(0, 3);
    const similarRecipesContainer = document.getElementById('similar-recipes');
    if (similarRecipesContainer) {
        displayRecipes(similarRecipes, similarRecipesContainer);
    }
    
    // Add event listeners to action buttons
    const likeBtn = document.querySelector('.like-recipe-btn');
    const saveBtn = document.querySelector('.save-recipe-btn');
    const printBtn = document.querySelector('.print-recipe-btn');
    const shareBtn = document.querySelector('.share-recipe-btn');
    
    likeBtn.addEventListener('click', () => {
        const icon = likeBtn.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            recipe.likes += 1;
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            recipe.likes -= 1;
        }
    });
    
    saveBtn.addEventListener('click', () => {
        if (!currentUser) {
            alert('Please log in to save recipes');
            openModal(loginModal);
            return;
        }
        
        const icon = saveBtn.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            savedRecipes.push(recipe.id);
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            alert('Recipe saved to your collection!');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            savedRecipes = savedRecipes.filter(id => id !== recipe.id);
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            alert('Recipe removed from your collection');
        }
    });
    
    printBtn.addEventListener('click', () => {
        window.print();
    });
    
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: recipe.title,
                text: recipe.description,
                url: window.location.href,
            })
            .catch(error => console.log('Error sharing:', error));
        } else {
            alert('Share functionality is not supported in your browser. You can copy the URL manually.');
        }
    });
    
    // Navigate to recipe page
    navigateToPage('recipe');
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
