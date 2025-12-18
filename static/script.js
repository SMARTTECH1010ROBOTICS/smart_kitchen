// ============================================
// SMART_KITCHEN - COMPLETE WORKING JAVASCRIPT
// Built by: AJIBADE SAMUEL (AKA SMART TECH)
// ============================================

// ============================================
// RECIPE DATABASE
// ============================================

const recipeDatabase = [
    {
        id: 1,
        name: "Classic Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "bacon", "parmesan", "black pepper"],
        time: 25,
        difficulty: "easy",
        cuisine: "italian",
        mealType: "dinner",
        icon: "🍝",
        instructions: [
            "Boil pasta in salted water according to package directions",
            "While pasta cooks, fry bacon until crispy in a large pan",
            "In a bowl, mix eggs with grated parmesan cheese",
            "Drain pasta, reserving 1 cup of pasta water",
            "Remove pan from heat, add hot pasta to bacon",
            "Pour egg mixture over pasta, tossing quickly",
            "Add pasta water if needed to create creamy sauce",
            "Season with black pepper and serve immediately"
        ],
        substitutes: { 
            bacon: "pancetta or guanciale", 
            parmesan: "pecorino romano" 
        }
    },
    {
        id: 2,
        name: "Chicken Fried Rice",
        ingredients: ["rice", "chicken", "eggs", "soy sauce", "vegetables", "garlic", "onions"],
        time: 20,
        difficulty: "easy",
        cuisine: "chinese",
        mealType: "dinner",
        icon: "🍚",
        instructions: [
            "Cook rice and let cool (day-old rice works best)",
            "Cut chicken into small pieces and cook in hot wok",
            "Remove chicken, set aside",
            "Add vegetables and stir-fry",
            "Push vegetables to side, scramble eggs",
            "Add rice, breaking up any clumps",
            "Return chicken to wok",
            "Add soy sauce and mix everything together"
        ],
        substitutes: { 
            chicken: "shrimp or tofu", 
            "soy sauce": "tamari" 
        }
    },
    {
        id: 3,
        name: "Beef Tacos",
        ingredients: ["ground beef", "taco shells", "lettuce", "tomatoes", "cheese", "onions"],
        time: 30,
        difficulty: "easy",
        cuisine: "mexican",
        mealType: "dinner",
        icon: "🌮",
        instructions: [
            "Brown ground beef in large skillet",
            "Drain excess fat",
            "Add taco seasoning and water, simmer 5 minutes",
            "Warm taco shells in oven",
            "Chop lettuce, tomatoes, and onions",
            "Assemble tacos with meat and toppings"
        ],
        substitutes: { 
            "ground beef": "ground turkey or beans" 
        }
    },
    {
        id: 4,
        name: "Chicken Curry",
        ingredients: ["chicken", "curry powder", "coconut milk", "onions", "tomatoes", "garlic", "ginger"],
        time: 45,
        difficulty: "medium",
        cuisine: "indian",
        mealType: "dinner",
        icon: "🍛",
        instructions: [
            "Sauté onions, garlic, ginger until golden",
            "Add chicken pieces and brown",
            "Add curry powder and toast",
            "Pour coconut milk and add tomatoes",
            "Simmer 25-30 minutes until tender",
            "Garnish with cilantro"
        ],
        substitutes: { 
            chicken: "chickpeas or paneer" 
        }
    },
    {
        id: 5,
        name: "Caesar Salad",
        ingredients: ["romaine lettuce", "parmesan", "croutons", "caesar dressing", "lemon"],
        time: 15,
        difficulty: "easy",
        cuisine: "american",
        mealType: "lunch",
        icon: "🥗",
        instructions: [
            "Wash and chop lettuce",
            "Toss with caesar dressing",
            "Add parmesan cheese",
            "Top with croutons",
            "Squeeze lemon and serve"
        ],
        substitutes: { 
            "romaine lettuce": "kale or mixed greens" 
        }
    },
    {
        id: 6,
        name: "Fluffy Pancakes",
        ingredients: ["flour", "eggs", "milk", "sugar", "butter", "baking powder"],
        time: 20,
        difficulty: "easy",
        cuisine: "american",
        mealType: "breakfast",
        icon: "🥞",
        instructions: [
            "Mix dry ingredients in bowl",
            "Whisk wet ingredients separately",
            "Combine and don't overmix",
            "Cook on heated griddle",
            "Serve with syrup and butter"
        ],
        substitutes: { 
            milk: "buttermilk or almond milk" 
        }
    },
    {
        id: 7,
        name: "Vegetable Stir Fry",
        ingredients: ["broccoli", "carrots", "bell peppers", "soy sauce", "garlic", "ginger", "oil"],
        time: 15,
        difficulty: "easy",
        cuisine: "chinese",
        mealType: "lunch",
        icon: "🥦",
        instructions: [
            "Heat wok or large pan",
            "Stir-fry garlic and ginger",
            "Add hard vegetables first",
            "Add softer vegetables",
            "Season with soy sauce"
        ],
        substitutes: {}
    },
    {
        id: 8,
        name: "Margherita Pizza",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil", "olive oil"],
        time: 25,
        difficulty: "medium",
        cuisine: "italian",
        mealType: "dinner",
        icon: "🍕",
        instructions: [
            "Preheat oven to 450°F",
            "Roll out pizza dough",
            "Spread tomato sauce",
            "Add mozzarella cheese",
            "Bake 12-15 minutes",
            "Top with fresh basil"
        ],
        substitutes: { 
            mozzarella: "burrata or provolone" 
        }
    },
    {
        id: 9,
        name: "Greek Salad",
        ingredients: ["cucumber", "tomatoes", "feta cheese", "olives", "onions", "olive oil", "lemon"],
        time: 10,
        difficulty: "easy",
        cuisine: "greek",
        mealType: "lunch",
        icon: "🥒",
        instructions: [
            "Chop all vegetables",
            "Add olives and feta",
            "Drizzle olive oil",
            "Squeeze lemon juice",
            "Toss gently and serve"
        ],
        substitutes: {}
    },
    {
        id: 10,
        name: "Chocolate Chip Cookies",
        ingredients: ["flour", "butter", "sugar", "eggs", "chocolate chips", "vanilla"],
        time: 30,
        difficulty: "easy",
        cuisine: "american",
        mealType: "snack",
        icon: "🍪",
        instructions: [
            "Cream butter and sugar",
            "Add eggs and vanilla",
            "Mix in flour",
            "Fold in chocolate chips",
            "Bake at 350°F for 10-12 minutes"
        ],
        substitutes: { 
            butter: "coconut oil" 
        }
    },
    {
        id: 11,
        name: "Grilled Salmon",
        ingredients: ["salmon", "lemon", "garlic", "olive oil", "herbs"],
        time: 20,
        difficulty: "medium",
        cuisine: "american",
        mealType: "dinner",
        icon: "🐟",
        instructions: [
            "Season salmon with salt and pepper",
            "Heat grill to medium-high",
            "Oil the grates",
            "Grill 4-5 minutes per side",
            "Squeeze lemon before serving"
        ],
        substitutes: { 
            salmon: "trout or mahi-mahi" 
        }
    },
    {
        id: 12,
        name: "Smoothie Bowl",
        ingredients: ["banana", "berries", "yogurt", "granola", "honey"],
        time: 10,
        difficulty: "easy",
        cuisine: "american",
        mealType: "breakfast",
        icon: "🥣",
        instructions: [
            "Blend frozen fruit with yogurt",
            "Pour into bowl",
            "Top with granola",
            "Add fresh berries",
            "Drizzle honey"
        ],
        substitutes: { 
            yogurt: "coconut yogurt or milk" 
        }
    },
    {
        id: 13,
        name: "Beef Stir Fry",
        ingredients: ["beef", "bell peppers", "onions", "soy sauce", "ginger", "garlic"],
        time: 25,
        difficulty: "medium",
        cuisine: "chinese",
        mealType: "dinner",
        icon: "🥩",
        instructions: [
            "Slice beef thinly against grain",
            "Heat wok until smoking",
            "Stir-fry beef quickly",
            "Remove beef, add vegetables",
            "Return beef and add sauce"
        ],
        substitutes: { 
            beef: "chicken or tofu" 
        }
    },
    {
        id: 14,
        name: "French Toast",
        ingredients: ["bread", "eggs", "milk", "cinnamon", "vanilla", "butter"],
        time: 15,
        difficulty: "easy",
        cuisine: "american",
        mealType: "breakfast",
        icon: "🍞",
        instructions: [
            "Whisk eggs, milk, cinnamon, vanilla",
            "Dip bread slices in mixture",
            "Cook in buttered pan",
            "Flip when golden brown",
            "Serve with syrup"
        ],
        substitutes: { 
            milk: "almond milk" 
        }
    },
    {
        id: 15,
        name: "Tomato Soup",
        ingredients: ["tomatoes", "onions", "garlic", "cream", "basil", "vegetable broth"],
        time: 30,
        difficulty: "easy",
        cuisine: "american",
        mealType: "lunch",
        icon: "🍅",
        instructions: [
            "Sauté onions and garlic",
            "Add tomatoes and broth",
            "Simmer 20 minutes",
            "Blend until smooth",
            "Stir in cream and basil"
        ],
        substitutes: { 
            cream: "coconut milk" 
        }
    }
];

// Academy Lessons Database
const academyLessons = [
    {
        title: "Knife Skills Basics",
        icon: "🔪",
        content: "Master essential cutting techniques: julienne, dice, chiffonade, and mince. Learn proper grip, safety, and how to maintain your knives for optimal performance."
    },
    {
        title: "Perfect Frying",
        icon: "🍳",
        content: "Learn temperature control, oil selection, and techniques for shallow and deep frying. Achieve crispy, golden results every time without burning."
    },
    {
        title: "Boiling & Blanching",
        icon: "💧",
        content: "Understand when to use boiling vs. simmering, how to blanch vegetables properly, and pasta cooking techniques for perfect al dente texture."
    },
    {
        title: "Grilling Mastery",
        icon: "🔥",
        content: "Direct vs indirect heat, temperature zones, marinades, and achieving perfect grill marks on meats and vegetables. Master the grill!"
    },
    {
        title: "Steaming Techniques",
        icon: "♨️",
        content: "Healthy cooking method that preserves nutrients and flavors. Learn bamboo steamer, electric steamer, and improvised steaming methods."
    },
    {
        title: "Baking Fundamentals",
        icon: "🥖",
        content: "Understanding oven temperatures, ingredient ratios, mixing methods, and troubleshooting common baking problems. Perfect your pastries!"
    },
    {
        title: "Seasoning Guide",
        icon: "🧂",
        content: "When to season, layering flavors, herb and spice pairings, and creating balanced dishes with salt, acid, heat, and fat."
    },
    {
        title: "Sauce Basics",
        icon: "🥫",
        content: "Master the five mother sauces and their derivatives. Learn emulsification, reduction, and thickening techniques for restaurant-quality sauces."
    },
    {
        title: "Food Safety",
        icon: "🛡️",
        content: "Proper food storage, cross-contamination prevention, temperature guidelines, and kitchen hygiene practices to keep your food safe."
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let currentRecipes = [];

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    document.getElementById(page).classList.add('active');
    const navLink = document.querySelector('[data-page="' + page + '"]');
    if (navLink) navLink.classList.add('active');

    if (page === 'academy') loadAcademy();
    if (page === 'trending') showTrendingCategory('top10');
    if (page === 'favorites') loadFavorites();
}

// ============================================
// RECIPE GENERATOR FUNCTIONS
// ============================================

function generateRecipes() {
    const ingredientsInput = document.getElementById('ingredientsInput').value;
    const ingredients = ingredientsInput.toLowerCase().split(',').map(i => i.trim()).filter(i => i);
    const time = document.getElementById('timeFilter').value;
    const difficulty = document.getElementById('difficultyFilter').value;
    const cuisine = document.getElementById('cuisineFilter').value;
    const mealType = document.getElementById('mealTypeFilter').value;

    let filtered = recipeDatabase;

    if (ingredients.length > 0) {
        filtered = filtered.filter(recipe => {
            return ingredients.some(ing => 
                recipe.ingredients.some(recipeIng => recipeIng.toLowerCase().includes(ing))
            );
        });
    }

    if (time === 'quick') filtered = filtered.filter(r => r.time < 30);
    if (time === 'medium') filtered = filtered.filter(r => r.time >= 30 && r.time <= 60);
    if (time === 'long') filtered = filtered.filter(r => r.time > 60);

    if (difficulty) filtered = filtered.filter(r => r.difficulty === difficulty);
    if (cuisine) filtered = filtered.filter(r => r.cuisine === cuisine);
    if (mealType) filtered = filtered.filter(r => r.mealType === mealType);

    currentRecipes = filtered;
    displayRecipes(filtered, 'generatorResults');
}

// ============================================
// DISPLAY RECIPES FUNCTION
// ============================================

function displayRecipes(recipes, containerId) {
    const container = document.getElementById(containerId);
    
    if (recipes.length === 0) {
        container.innerHTML = '<div style="background: white; padding: 40px; border-radius: 15px; text-align: center; grid-column: 1 / -1;"><h3 style="color: #667eea; margin-bottom: 15px;">No recipes found</h3><p style="color: #666;">Try different ingredients or adjust your filters</p></div>';
        return;
    }

    container.innerHTML = recipes.map(recipe => 
        '<div class="recipe-card">' +
            '<div class="recipe-image">' + recipe.icon + '</div>' +
            '<div class="recipe-content">' +
                '<div class="recipe-title">' + recipe.name + '</div>' +
                '<div class="recipe-meta">' +
                    '<div class="meta-item">⏱️ ' + recipe.time + ' min</div>' +
                    '<div class="meta-item">📊 ' + recipe.difficulty + '</div>' +
                    '<div class="meta-item">🌍 ' + recipe.cuisine + '</div>' +
                '</div>' +
                '<div class="recipe-ingredients">' +
                    '<h4>Ingredients:</h4>' +
                    recipe.ingredients.slice(0, 4).map(ing => '<span class="ingredient-tag">' + ing + '</span>').join('') +
                    (recipe.ingredients.length > 4 ? '<span class="ingredient-tag">+' + (recipe.ingredients.length - 4) + ' more</span>' : '') +
                '</div>' +
                '<div class="recipe-actions">' +
                    '<button class="btn btn-primary btn-small" onclick="viewRecipe(' + recipe.id + ')">View Recipe</button>' +
                    '<button class="btn favorite-btn btn-small ' + (isFavorite(recipe.id) ? 'active' : '') + '" onclick="toggleFavorite(' + recipe.id + ')">' +
                        (isFavorite(recipe.id) ? '❤️' : '🤍') +
                    '</button>' +
                '</div>' +
            '</div>' +
        '</div>'
    ).join('');
}

// ============================================
// RECIPE DETAIL MODAL FUNCTIONS
// ============================================

function viewRecipe(id) {
    const recipe = recipeDatabase.find(r => r.id === id);
    if (!recipe) return;

    const modal = document.getElementById('recipeModal');
    const content = document.getElementById('modalContent');

    let substitutesHTML = '';
    if (Object.keys(recipe.substitutes).length > 0) {
        substitutesHTML = '<h3 style="color: #667eea; margin: 25px 0 15px;">Substitutes</h3>' +
            '<div style="background: #f9fafb; padding: 15px; border-radius: 10px; margin-bottom: 30px;">';
        for (let key in recipe.substitutes) {
            substitutesHTML += '<div style="margin: 8px 0;"><strong>' + key + ':</strong> ' + recipe.substitutes[key] + '</div>';
        }
        substitutesHTML += '</div>';
    }

    content.innerHTML = 
        '<div style="text-align: center; font-size: 80px; margin-bottom: 20px;">' + recipe.icon + '</div>' +
        '<h2 style="color: #667eea; margin-bottom: 20px;">' + recipe.name + '</h2>' +
        '<div class="recipe-meta" style="justify-content: center; margin-bottom: 30px;">' +
            '<div class="meta-item">⏱️ ' + recipe.time + ' minutes</div>' +
            '<div class="meta-item">📊 ' + recipe.difficulty + '</div>' +
            '<div class="meta-item">🌍 ' + recipe.cuisine + '</div>' +
            '<div class="meta-item">🍽️ ' + recipe.mealType + '</div>' +
        '</div>' +
        '<h3 style="color: #667eea; margin: 25px 0 15px;">Ingredients</h3>' +
        '<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 30px;">' +
            recipe.ingredients.map(ing => '<span class="ingredient-tag" style="font-size: 14px; padding: 8px 15px;">' + ing + '</span>').join('') +
        '</div>' +
        substitutesHTML +
        '<h3 style="color: #667eea; margin: 25px 0 15px;">Instructions</h3>' +
        '<ol style="line-height: 2; padding-left: 20px;">' +
            recipe.instructions.map(step => '<li style="margin: 10px 0;">' + step + '</li>').join('') +
        '</ol>' +
        '<button class="btn btn-primary" style="width: 100%; margin-top: 30px;" onclick="toggleFavorite(' + recipe.id + '); closeModal();">' +
            (isFavorite(recipe.id) ? '❤️ Remove from Favorites' : '🤍 Add to Favorites') +
        '</button>';

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('recipeModal').classList.remove('active');
}

// ============================================
// FAVORITES FUNCTIONS
// ============================================

function isFavorite(id) {
    return favorites.includes(id);
}

function toggleFavorite(id) {
    if (isFavorite(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    const currentPage = document.querySelector('.page.active').id;
    if (currentPage === 'favorites') loadFavorites();
    if (currentPage === 'generator' && currentRecipes.length > 0) {
        displayRecipes(currentRecipes, 'generatorResults');
    }
}

function loadFavorites() {
    const favoriteRecipes = recipeDatabase.filter(r => favorites.includes(r.id));
    if (favoriteRecipes.length === 0) {
        document.getElementById('favoritesResults').innerHTML = 
            '<div style="background: white; padding: 40px; border-radius: 15px; text-align: center; grid-column: 1 / -1;">' +
                '<h3 style="color: #667eea; margin-bottom: 15px;">No favorites yet</h3>' +
                '<p style="color: #666;">Start adding recipes to your favorites collection!</p>' +
                '<button class="btn btn-primary" style="margin-top: 20px;" onclick="navigateTo(\'generator\')">Discover Recipes</button>' +
            '</div>';
    } else {
        displayRecipes(favoriteRecipes, 'favoritesResults');
    }
}

// ============================================
// RANDOM RECIPE FUNCTION
// ============================================

function getRandomRecipe() {
    const random = recipeDatabase[Math.floor(Math.random() * recipeDatabase.length)];
    viewRecipe(random.id);
}

// ============================================
// ACADEMY FUNCTIONS
// ============================================

function loadAcademy() {
    const container = document.getElementById('academyContent');
    container.innerHTML = academyLessons.map(lesson => 
        '<div class="lesson-card">' +
            '<div class="lesson-icon">' + lesson.icon + '</div>' +
            '<h3>' + lesson.title + '</h3>' +
            '<div class="lesson-content">' + lesson.content + '</div>' +
        '</div>'
    ).join('');
}

// ============================================
// TRENDING FUNCTIONS
// ============================================

function showTrendingCategory(category) {
    let recipes = [];
    
    if (category === 'top10') {
        recipes = recipeDatabase.slice(0, 10);
    } else if (category === 'quick') {
        recipes = recipeDatabase.filter(r => r.time <= 15);
    } else if (category === 'budget') {
        recipes = recipeDatabase.filter(r => r.difficulty === 'easy');
    } else if (category === 'healthy') {
        recipes = recipeDatabase.filter(r => 
            r.ingredients.some(i => ['vegetables', 'salmon', 'berries', 'yogurt', 'salad', 'broccoli', 'lettuce'].includes(i.toLowerCase()))
        );
    }
    
    displayRecipes(recipes, 'trendingResults');
}

// ============================================
// AI ASSISTANT FUNCTIONS
// ============================================

let aiOpen = false;

function toggleAI() {
    aiOpen = !aiOpen;
    const chat = document.getElementById('aiChat');
    if (!chat) return;
    
    chat.classList.toggle('active');
    
    if (aiOpen && document.getElementById('aiMessages').children.length === 0) {
        addAIMessage('bot', "Hi! I'm your Smart Kitchen AI Assistant. Ask me anything about cooking, recipes, or techniques!");
    }
}

function sendAIMessage() {
    const input = document.getElementById('aiInput');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    addAIMessage('user', message);
    input.value = '';
    
    setTimeout(function() {
        const response = getAIResponse(message);
        addAIMessage('bot', response);
    }, 500);
}

function addAIMessage(type, text) {
    const messages = document.getElementById('aiMessages');
    if (!messages) return;
    
    const div = document.createElement('div');
    div.className = 'ai-message ' + type;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function getAIResponse(message) {
    const lower = message.toLowerCase();
    
    // Check for specific recipes
    for (let i = 0; i < recipeDatabase.length; i++) {
        const recipe = recipeDatabase[i];
        if (lower.includes(recipe.name.toLowerCase())) {
            return recipe.name + " is a " + recipe.difficulty + " " + recipe.cuisine + " " + recipe.mealType + " that takes " + recipe.time + " minutes. Main ingredients: " + recipe.ingredients.slice(0, 4).join(', ') + ". Want the full recipe?";
        }
    }
    
    // Ingredient suggestions
    if (lower.includes('ingredient') || lower.includes('have') || lower.includes('make with')) {
        return "Tell me what ingredients you have, and I'll suggest recipes! You can also use our Recipe Generator to find perfect matches based on what's in your kitchen.";
    }
    
    // Cooking techniques
    if (lower.includes('how to') || lower.includes('technique')) {
        return "Check out our Smart Kitchen Academy for detailed cooking techniques! We cover knife skills, frying, boiling, grilling, steaming, baking, and more.";
    }
    
    // Recipe recommendations
    if (lower.includes('recipe') || lower.includes('cook') || lower.includes('make')) {
        return "I'd love to help! Use our Recipe Generator to find recipes based on your ingredients, or browse Trending recipes for popular options. You can also try the Random Recipe feature!";
    }
    
    // Timing questions
    if (lower.includes('time') || lower.includes('quick') || lower.includes('fast')) {
        return "For quick meals, check our Trending page and select '10-Minute Meals'. We have delicious recipes you can make in no time!";
    }
    
    // Difficulty
    if (lower.includes('easy') || lower.includes('beginner') || lower.includes('simple')) {
        return "Perfect! Filter recipes by 'Easy' difficulty in our Recipe Generator. Also check out our Academy for beginner-friendly cooking lessons!";
    }

    // Substitutes
    if (lower.includes('substitute') || lower.includes('replace')) {
        return "Each recipe includes ingredient substitutes! View any recipe to see what you can use as alternatives. Common swaps: butter for oil, milk for almond milk, meat for tofu.";
    }

    // Favorites
    if (lower.includes('favorite') || lower.includes('save')) {
        return "Click the heart icon on any recipe card to save it to your Favorites! All your saved recipes appear in the Favorites page.";
    }
    
    // Default response
    return "I can help you with recipes (we have " + recipeDatabase.length + " total!), cooking techniques, ingredient suggestions, and more! Try asking about specific dishes or what you can cook with ingredients you have.";
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo(link.dataset.page);
        });
    });
    
    // AI input Enter key
    const aiInput = document.getElementById('aiInput');
    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendAIMessage();
        });
    }
    
    // Recipe generator Enter key
    const ingredientsInput = document.getElementById('ingredientsInput');
    if (ingredientsInput) {
        ingredientsInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') generateRecipes();
        });
    }

    // Close modal on outside click
    const modal = document.getElementById('recipeModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target.id === 'recipeModal') closeModal();
        });
    }

    console.log('🍳 Smart_Kitchen loaded!');
    console.log('Built by: AJIBADE SAMUEL (AKA SMART TECH)');
});
