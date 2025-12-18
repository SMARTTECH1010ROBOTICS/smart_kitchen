# ============================================
# SMART_KITCHEN BACKEND - COMPLETE & FIXED
# Built by: AJIBADE SAMUEL (AKA SMART TECH)
# ============================================

from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import json
from datetime import datetime
import random
import os

app = Flask(__name__)
CORS(app)

# ============================================
# COMPLETE RECIPE DATABASE
# ============================================

RECIPES = [
    {
        "id": 1,
        "name": "Classic Spaghetti Carbonara",
        "ingredients": ["spaghetti", "eggs", "bacon", "parmesan", "black pepper"],
        "time": 25,
        "difficulty": "easy",
        "cuisine": "italian",
        "mealType": "dinner",
        "icon": "🍝",
        "instructions": [
            "Boil pasta in salted water",
            "Fry bacon until crispy",
            "Mix eggs with parmesan",
            "Combine hot pasta with egg mixture",
            "Add bacon and pepper"
        ],
        "substitutes": {"bacon": "pancetta or guanciale", "parmesan": "pecorino romano"},
        "rating": 4.8,
        "calories": 450
    },
    {
        "id": 2,
        "name": "Chicken Fried Rice",
        "ingredients": ["rice", "chicken", "eggs", "soy sauce", "vegetables", "garlic", "onions"],
        "time": 20,
        "difficulty": "easy",
        "cuisine": "chinese",
        "mealType": "dinner",
        "icon": "🍚",
        "instructions": [
            "Cook rice and let cool",
            "Stir-fry chicken",
            "Add vegetables",
            "Scramble eggs",
            "Mix everything with soy sauce"
        ],
        "substitutes": {"chicken": "shrimp or tofu", "soy sauce": "tamari"},
        "rating": 4.6,
        "calories": 380
    },
    {
        "id": 3,
        "name": "Beef Tacos",
        "ingredients": ["ground beef", "taco shells", "lettuce", "tomatoes", "cheese", "onions"],
        "time": 30,
        "difficulty": "easy",
        "cuisine": "mexican",
        "mealType": "dinner",
        "icon": "🌮",
        "instructions": [
            "Brown ground beef",
            "Add taco seasoning",
            "Warm taco shells",
            "Chop vegetables",
            "Assemble tacos"
        ],
        "substitutes": {"ground beef": "ground turkey or beans"},
        "rating": 4.7,
        "calories": 420
    },
    {
        "id": 4,
        "name": "Chicken Curry",
        "ingredients": ["chicken", "curry powder", "coconut milk", "onions", "tomatoes", "garlic", "ginger"],
        "time": 45,
        "difficulty": "medium",
        "cuisine": "indian",
        "mealType": "dinner",
        "icon": "🍛",
        "instructions": [
            "Sauté onions, garlic, ginger",
            "Add chicken and brown",
            "Add curry powder",
            "Pour coconut milk",
            "Simmer until tender"
        ],
        "substitutes": {"chicken": "chickpeas or paneer"},
        "rating": 4.9,
        "calories": 520
    },
    {
        "id": 5,
        "name": "Caesar Salad",
        "ingredients": ["romaine lettuce", "parmesan", "croutons", "caesar dressing", "lemon"],
        "time": 15,
        "difficulty": "easy",
        "cuisine": "american",
        "mealType": "lunch",
        "icon": "🥗",
        "instructions": [
            "Wash and chop lettuce",
            "Toss with dressing",
            "Add parmesan",
            "Top with croutons"
        ],
        "substitutes": {"romaine lettuce": "kale or mixed greens"},
        "rating": 4.5,
        "calories": 280
    },
    {
        "id": 6,
        "name": "Pancakes",
        "ingredients": ["flour", "eggs", "milk", "sugar", "butter", "baking powder"],
        "time": 20,
        "difficulty": "easy",
        "cuisine": "american",
        "mealType": "breakfast",
        "icon": "🥞",
        "instructions": [
            "Mix dry ingredients",
            "Whisk wet ingredients",
            "Combine and don't overmix",
            "Cook on griddle",
            "Serve with syrup"
        ],
        "substitutes": {"milk": "buttermilk or almond milk"},
        "rating": 4.8,
        "calories": 350
    },
    {
        "id": 7,
        "name": "Vegetable Stir Fry",
        "ingredients": ["broccoli", "carrots", "bell peppers", "soy sauce", "garlic", "ginger", "oil"],
        "time": 15,
        "difficulty": "easy",
        "cuisine": "chinese",
        "mealType": "lunch",
        "icon": "🥦",
        "instructions": [
            "Heat wok",
            "Stir-fry garlic and ginger",
            "Add hard vegetables first",
            "Add soft vegetables",
            "Season with soy sauce"
        ],
        "substitutes": {},
        "rating": 4.4,
        "calories": 220
    },
    {
        "id": 8,
        "name": "Margherita Pizza",
        "ingredients": ["pizza dough", "tomato sauce", "mozzarella", "basil", "olive oil"],
        "time": 25,
        "difficulty": "medium",
        "cuisine": "italian",
        "mealType": "dinner",
        "icon": "🍕",
        "instructions": [
            "Prepare pizza dough",
            "Spread tomato sauce",
            "Add mozzarella cheese",
            "Bake at 450°F",
            "Top with fresh basil"
        ],
        "substitutes": {"mozzarella": "burrata or provolone"},
        "rating": 4.9,
        "calories": 480
    },
    {
        "id": 9,
        "name": "Greek Salad",
        "ingredients": ["cucumber", "tomatoes", "feta cheese", "olives", "onions", "olive oil", "lemon"],
        "time": 10,
        "difficulty": "easy",
        "cuisine": "greek",
        "mealType": "lunch",
        "icon": "🥒",
        "instructions": [
            "Chop all vegetables",
            "Add olives and feta",
            "Drizzle olive oil",
            "Squeeze lemon",
            "Toss gently"
        ],
        "substitutes": {},
        "rating": 4.6,
        "calories": 260
    },
    {
        "id": 10,
        "name": "Chocolate Chip Cookies",
        "ingredients": ["flour", "butter", "sugar", "eggs", "chocolate chips", "vanilla"],
        "time": 30,
        "difficulty": "easy",
        "cuisine": "american",
        "mealType": "snack",
        "icon": "🍪",
        "instructions": [
            "Cream butter and sugar",
            "Add eggs and vanilla",
            "Mix in flour",
            "Fold in chocolate chips",
            "Bake at 350°F"
        ],
        "substitutes": {"butter": "coconut oil"},
        "rating": 4.9,
        "calories": 180
    },
    {
        "id": 11,
        "name": "Grilled Salmon",
        "ingredients": ["salmon", "lemon", "garlic", "olive oil", "herbs"],
        "time": 20,
        "difficulty": "medium",
        "cuisine": "american",
        "mealType": "dinner",
        "icon": "🐟",
        "instructions": [
            "Season salmon",
            "Heat grill",
            "Oil the grates",
            "Grill 4-5 minutes per side",
            "Squeeze lemon"
        ],
        "substitutes": {"salmon": "trout or mahi-mahi"},
        "rating": 4.7,
        "calories": 380
    },
    {
        "id": 12,
        "name": "Smoothie Bowl",
        "ingredients": ["banana", "berries", "yogurt", "granola", "honey"],
        "time": 10,
        "difficulty": "easy",
        "cuisine": "american",
        "mealType": "breakfast",
        "icon": "🥣",
        "instructions": [
            "Blend frozen fruit with yogurt",
            "Pour into bowl",
            "Top with granola",
            "Add fresh berries",
            "Drizzle honey"
        ],
        "substitutes": {"yogurt": "coconut yogurt"},
        "rating": 4.8,
        "calories": 320
    },
    {
        "id": 13,
        "name": "Beef Stir Fry",
        "ingredients": ["beef", "bell peppers", "onions", "soy sauce", "ginger", "garlic"],
        "time": 25,
        "difficulty": "medium",
        "cuisine": "chinese",
        "mealType": "dinner",
        "icon": "🥩",
        "instructions": [
            "Slice beef thinly",
            "Heat wok until smoking",
            "Stir-fry beef quickly",
            "Add vegetables",
            "Add sauce and toss"
        ],
        "substitutes": {"beef": "chicken or tofu"},
        "rating": 4.6,
        "calories": 400
    },
    {
        "id": 14,
        "name": "French Toast",
        "ingredients": ["bread", "eggs", "milk", "cinnamon", "vanilla", "butter"],
        "time": 15,
        "difficulty": "easy",
        "cuisine": "american",
        "mealType": "breakfast",
        "icon": "🍞",
        "instructions": [
            "Whisk eggs, milk, cinnamon, vanilla",
            "Dip bread slices",
            "Cook in buttered pan",
            "Flip when golden",
            "Serve with syrup"
        ],
        "substitutes": {"milk": "almond milk"},
        "rating": 4.7,
        "calories": 310
    },
    {
        "id": 15,
        "name": "Tomato Soup",
        "ingredients": ["tomatoes", "onions", "garlic", "cream", "basil", "vegetable broth"],
        "time": 30,
        "difficulty": "easy",
        "cuisine": "american",
        "mealType": "lunch",
        "icon": "🍅",
        "instructions": [
            "Sauté onions and garlic",
            "Add tomatoes and broth",
            "Simmer 20 minutes",
            "Blend until smooth",
            "Stir in cream"
        ],
        "substitutes": {"cream": "coconut milk"},
        "rating": 4.5,
        "calories": 240
    }
]

# ============================================
# ACADEMY LESSONS
# ============================================

ACADEMY_LESSONS = [
    {
        "id": 1,
        "title": "Knife Skills Basics",
        "category": "fundamentals",
        "icon": "🔪",
        "description": "Master essential cutting techniques",
        "content": "Learn proper grip, julienne, dice, and mince techniques."
    },
    {
        "id": 2,
        "title": "Perfect Frying",
        "category": "techniques",
        "icon": "🍳",
        "description": "Temperature control and oil selection",
        "content": "Master shallow and deep frying for crispy results."
    },
    {
        "id": 3,
        "title": "Boiling & Blanching",
        "category": "techniques",
        "icon": "💧",
        "description": "Water-based cooking methods",
        "content": "Understand boiling vs simmering and blanching."
    },
    {
        "id": 4,
        "title": "Grilling Mastery",
        "category": "techniques",
        "icon": "🔥",
        "description": "Direct and indirect heat",
        "content": "Temperature zones and perfect grill marks."
    },
    {
        "id": 5,
        "title": "Steaming Techniques",
        "category": "techniques",
        "icon": "♨️",
        "description": "Healthy cooking method",
        "content": "Preserve nutrients with steaming methods."
    },
    {
        "id": 6,
        "title": "Baking Fundamentals",
        "category": "baking",
        "icon": "🥖",
        "description": "Oven temperatures and ratios",
        "content": "Understanding ingredient ratios and mixing methods."
    },
    {
        "id": 7,
        "title": "Seasoning Guide",
        "category": "fundamentals",
        "icon": "🧂",
        "description": "Flavor development",
        "content": "Layering flavors and herb pairings."
    },
    {
        "id": 8,
        "title": "Sauce Basics",
        "category": "sauces",
        "icon": "🥫",
        "description": "Master the mother sauces",
        "content": "Five mother sauces and derivatives."
    },
    {
        "id": 9,
        "title": "Food Safety",
        "category": "fundamentals",
        "icon": "🛡️",
        "description": "Kitchen hygiene practices",
        "content": "Proper storage and temperature guidelines."
    }
]

# ============================================
# BASIC API ROUTES
# ============================================

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    """Get all recipes"""
    return jsonify({
        "success": True,
        "count": len(RECIPES),
        "recipes": RECIPES
    })

@app.route('/api/recipes/<int:recipe_id>', methods=['GET'])
def get_recipe(recipe_id):
    """Get specific recipe by ID"""
    recipe = next((r for r in RECIPES if r['id'] == recipe_id), None)
    if recipe:
        return jsonify({"success": True, "recipe": recipe})
    return jsonify({"success": False, "message": "Recipe not found"}), 404

@app.route('/api/recipes/search', methods=['POST'])
def search_recipes():
    """Search recipes by ingredients and filters"""
    data = request.json
    ingredients = [i.strip().lower() for i in data.get('ingredients', [])]
    time_filter = data.get('time')
    difficulty = data.get('difficulty')
    cuisine = data.get('cuisine')
    meal_type = data.get('mealType')
    
    filtered = RECIPES.copy()
    
    # Filter by ingredients
    if ingredients:
        filtered = [r for r in filtered if any(
            ing in ' '.join(r['ingredients']).lower() 
            for ing in ingredients
        )]
    
    # Filter by time
    if time_filter == 'quick':
        filtered = [r for r in filtered if r['time'] < 30]
    elif time_filter == 'medium':
        filtered = [r for r in filtered if 30 <= r['time'] <= 60]
    elif time_filter == 'long':
        filtered = [r for r in filtered if r['time'] > 60]
    
    # Filter by difficulty
    if difficulty:
        filtered = [r for r in filtered if r['difficulty'] == difficulty]
    
    # Filter by cuisine
    if cuisine:
        filtered = [r for r in filtered if r['cuisine'] == cuisine]
    
    # Filter by meal type
    if meal_type:
        filtered = [r for r in filtered if r['mealType'] == meal_type]
    
    return jsonify({
        "success": True,
        "count": len(filtered),
        "recipes": filtered
    })

@app.route('/api/recipes/random', methods=['GET'])
def random_recipe():
    """Get random recipe"""
    recipe = random.choice(RECIPES)
    return jsonify({"success": True, "recipe": recipe})

@app.route('/api/academy', methods=['GET'])
def get_academy():
    """Get all academy lessons"""
    return jsonify({
        "success": True,
        "count": len(ACADEMY_LESSONS),
        "lessons": ACADEMY_LESSONS
    })

@app.route('/api/academy/<int:lesson_id>', methods=['GET'])
def get_lesson(lesson_id):
    """Get specific lesson by ID"""
    lesson = next((l for l in ACADEMY_LESSONS if l['id'] == lesson_id), None)
    if lesson:
        return jsonify({"success": True, "lesson": lesson})
    return jsonify({"success": False, "message": "Lesson not found"}), 404

@app.route('/api/trending', methods=['GET'])
def get_trending():
    """Get trending recipes by category"""
    category = request.args.get('category', 'top10')
    
    if category == 'top10':
        trending = sorted(RECIPES, key=lambda x: x['rating'], reverse=True)[:10]
    elif category == 'quick':
        trending = [r for r in RECIPES if r['time'] <= 15]
    elif category == 'budget':
        trending = [r for r in RECIPES if r['difficulty'] == 'easy']
    elif category == 'healthy':
        trending = [r for r in RECIPES if r['calories'] < 400]
    else:
        trending = RECIPES[:10]
    
    return jsonify({
        "success": True,
        "category": category,
        "count": len(trending),
        "recipes": trending
    })

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get application statistics"""
    return jsonify({
        "success": True,
        "stats": {
            "total_recipes": len(RECIPES),
            "total_lessons": len(ACADEMY_LESSONS),
            "cuisines": list(set(r['cuisine'] for r in RECIPES)),
            "difficulty_levels": list(set(r['difficulty'] for r in RECIPES)),
            "meal_types": list(set(r['mealType'] for r in RECIPES)),
            "avg_cooking_time": sum(r['time'] for r in RECIPES) // len(RECIPES)
        }
    })

# ============================================
# REAL AI CHAT WITH OPENAI
# ============================================

@app.route('/api/ai/chat', methods=['POST'])
def ai_chat():
    """AI Assistant with real OpenAI responses"""
    data = request.json
    message = data.get('message', '')
    conversation_history = data.get('history', [])
    
    try:
        # Try to use OpenAI (NEW VERSION)
        from openai import OpenAI
        
        # Get API key from environment variable (SAFE WAY!)
        api_key = os.getenv("OPENAI_API_KEY")
        
        if not api_key:
            # Fallback if no API key
            return jsonify({
                "success": True,
                "response": get_smart_fallback_response(message),
                "timestamp": datetime.now().isoformat(),
                "note": "Set OPENAI_API_KEY environment variable for AI responses"
            })
        
        # Initialize OpenAI client (NEW WAY)
        client = OpenAI(api_key=api_key)
        
        # Build context about recipes
        recipes_context = "\n".join([
            "{} ({}, {} min, {})".format(r['name'], r['cuisine'], r['time'], r['difficulty'])
            for r in RECIPES[:10]
        ])
        
        # System prompt
        system_message = """You are a helpful cooking assistant for Smart_Kitchen app.

Available recipes:
{}

Answer cooking questions concisely. Suggest recipes when appropriate.
Keep responses under 100 words unless explaining detailed recipes.""".format(recipes_context)

        # Build messages
        messages = [{"role": "system", "content": system_message}]
        
        # Add conversation history (last 6 messages)
        for msg in conversation_history[-6:]:
            messages.append(msg)
        
        # Add current message
        messages.append({"role": "user", "content": message})
        
        # Call OpenAI API (NEW WAY)
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=200,
            temperature=0.7
        )
        
        ai_response = response.choices[0].message.content
        
        return jsonify({
            "success": True,
            "response": ai_response,
            "timestamp": datetime.now().isoformat()
        })
        
    except ImportError:
        # OpenAI not installed
        return jsonify({
            "success": True,
            "response": get_smart_fallback_response(message),
            "timestamp": datetime.now().isoformat(),
            "note": "Install OpenAI: pip install openai"
        })
        
    except Exception as e:
        # Any other error
        return jsonify({
            "success": True,
            "response": get_smart_fallback_response(message),
            "timestamp": datetime.now().isoformat(),
            "error": str(e)
        })

# ============================================
# SMART FALLBACK RESPONSES (FIXED)
# ============================================

def get_smart_fallback_response(message):
    """Enhanced responses when AI is unavailable"""
    lower = message.lower()
    
    # Check for specific recipes
    for recipe in RECIPES:
        if recipe['name'].lower() in lower:
            ingredients_list = ', '.join(recipe['ingredients'][:3])
            return "{} is a {} {} {} that takes {} minutes. Ingredients: {} and more!".format(
                recipe['name'], recipe['difficulty'], recipe['cuisine'], 
                recipe['mealType'], recipe['time'], ingredients_list
            )
    
    # Ingredient questions
    if 'what can i make' in lower or 'i have' in lower:
        common = ['chicken', 'beef', 'rice', 'pasta', 'eggs', 'tomatoes']
        found = [ing for ing in common if ing in lower]
        
        if found:
            matches = [r for r in RECIPES if any(ing in ' '.join(r['ingredients']) for ing in found)]
            if matches:
                recipe_names = ', '.join([r['name'] for r in matches[:3]])
                return "With {}, try: {}! Use the Recipe Generator for more.".format(', '.join(found), recipe_names)
    
    # Quick meals
    if 'quick' in lower or 'fast' in lower:
        quick = [r for r in RECIPES if r['time'] <= 20]
        quick_list = ', '.join(["{} ({}min)".format(r['name'], r['time']) for r in quick[:3]])
        return "Quick recipes: {}. Check Trending for more!".format(quick_list)
    
    # Cooking techniques
    techniques = {
        'boil': 'Boiling cooks food in water at 100°C. Great for pasta and vegetables! Check our Academy.',
        'fry': 'Frying uses hot oil (350-375°F) for crispy results. See our Frying lesson in Academy!',
        'bake': 'Baking uses dry oven heat. Always preheat! Temperature is key. Check Baking Fundamentals!',
        'grill': 'Grilling uses direct heat. Oil grates well and don\'t flip too early. See Grilling Mastery!',
        'steam': 'Steaming preserves nutrients using water vapor. Healthy and gentle! See Steaming Techniques!',
        'sauté': 'Sautéing cooks quickly in hot fat over high heat. Keep food moving! Great technique.',
        'roast': 'Roasting uses dry oven heat at high temps. Creates caramelization and deep flavors!'
    }
    
    for tech, resp in techniques.items():
        if tech in lower:
            return resp
    
    # Cuisine-based
    cuisines = ['italian', 'chinese', 'mexican', 'indian', 'american', 'greek']
    for cuisine in cuisines:
        if cuisine in lower:
            cuisine_recipes = [r for r in RECIPES if r['cuisine'] == cuisine]
            if cuisine_recipes:
                names = ', '.join([r['name'] for r in cuisine_recipes[:3]])
                return "{} recipes: {}. Filter by {} in Recipe Generator!".format(cuisine.title(), names, cuisine)
    
    # Meal types
    meal_types = {
        'breakfast': 'breakfast',
        'lunch': 'lunch',
        'dinner': 'dinner',
        'snack': 'snack'
    }
    
    for keyword, meal_type in meal_types.items():
        if keyword in lower:
            meals = [r for r in RECIPES if r['mealType'] == meal_type]
            if meals:
                names = ', '.join([r['name'] for r in meals[:3]])
                return "For {}, try: {}. Use Recipe Generator to see all!".format(meal_type, names)
    
    # Substitutions
    if 'substitute' in lower or 'replace' in lower:
        return "Common substitutes: butter/oil, milk/almond milk, eggs/flax eggs, meat/tofu. View any recipe for specific substitutes! What do you need to replace?"
    
    # Difficulty
    if 'easy' in lower or 'beginner' in lower or 'simple' in lower:
        easy_recipes = [r for r in RECIPES if r['difficulty'] == 'easy']
        names = ', '.join([r['name'] for r in easy_recipes[:4]])
        return "Perfect for beginners! Try: {}. Filter by Easy in Recipe Generator!".format(names)
    
    # Healthy eating
    if 'healthy' in lower or 'diet' in lower or 'calorie' in lower:
        healthy = [r for r in RECIPES if r['calories'] < 400]
        names = ', '.join([r['name'] for r in healthy[:3]])
        return "Healthier options: {}. Check Trending > Healthy Options!".format(names)
    
    # Random/inspiration
    if 'random' in lower or 'surprise' in lower or 'inspiration' in lower:
        random_recipe = random.choice(RECIPES)
        return "How about {}? It's a {} {} dish that takes {} minutes. Sounds good?".format(
            random_recipe['name'], random_recipe['difficulty'], 
            random_recipe['cuisine'], random_recipe['time']
        )
    
    # Favorites
    if 'favorite' in lower or 'save' in lower:
        return "Click the heart icon on any recipe card to save to Favorites! All saved recipes appear in the Favorites page."
    
    # Help
    if 'help' in lower:
        return "I can help with: Recipe suggestions, cooking techniques, ingredient substitutes, meal planning, and kitchen tips. What would you like to know?"
    
    # Default helpful response
    return "I can help with recipes (we have {} total!), cooking techniques, ingredients, and more. Ask me about specific dishes, techniques, or what you can make with ingredients you have!".format(len(RECIPES))

# ============================================
# RUN SERVER
# ============================================

if __name__ == '__main__':
    print("=" * 60)
    print("🍳 SMART_KITCHEN API SERVER")
    print("=" * 60)
    print("Built by: AJIBADE SAMUEL (AKA SMART TECH)")
    print("=" * 60)
    print("\n📋 Setup for Real AI:")
    print("  1. Install: pip install openai")
    print("  2. Set environment variable:")
    print("     Windows: set OPENAI_API_KEY=your-key-here")
    print("     Mac/Linux: export OPENAI_API_KEY=your-key-here")
    print("\n✅ Smart fallback responses active!")
    print("🚀 Server: http://localhost:5000")
    print("=" * 60)
    
    app.run(debug=True, host='0.0.0.0', port=5000)