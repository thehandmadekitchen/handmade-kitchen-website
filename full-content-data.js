const contentData = {
  recipes: [
    {
      title: "Honey Sweetened Chocolate Chip Cookies",
      category: "Desserts",
      time: "25 min",
      servings: "24 cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop",
      ingredients: [
        "1/2 cup butter, softened",
        "1/2 cup honey",
        "2 eggs",
        "2 teaspoons vanilla extract",
        "2 cups all-purpose flour",
        "1 teaspoon baking soda",
        "1/2 teaspoon salt",
        "1 1/2 cups dark chocolate chips (70% cacao or higher)"
      ],
      instructions: [
        "Preheat oven to 350°F and line baking sheets with parchment paper.",
        "In large bowl, cream butter and honey together until fluffy.",
        "Beat in eggs and vanilla.",
        "In separate bowl, whisk together flour, baking soda, and salt.",
        "Gradually add dry ingredients to wet ingredients, mixing until just combined.",
        "Fold in chocolate chips.",
        "Drop rounded tablespoons of dough onto prepared baking sheets, spacing 2 inches apart.",
        "Bake for 10-12 minutes until edges are golden.",
        "Let cool on baking sheet for 5 minutes before transferring to wire rack.",
        "Store in airtight container for up to 1 week."
      ]
    },
    {
      title: "Fluffy Sourdough Pancakes",
      category: "Breakfasts",
      time: "20 min",
      servings: "4 servings",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&h=600&fit=crop",
      ingredients: [
        "1 cup sourdough starter (unfed/discard)",
        "1 cup milk",
        "1 egg",
        "2 tablespoons melted butter",
        "1 tablespoon honey",
        "1 cup all-purpose flour",
        "1/2 teaspoon baking soda",
        "1/2 teaspoon salt"
      ],
      instructions: [
        "In large bowl, whisk together sourdough starter, milk, egg, melted butter, and honey.",
        "Add flour, baking soda, and salt. Stir until just combined (batter will be slightly lumpy).",
        "Heat griddle or large skillet over medium heat. Grease lightly with butter.",
        "Pour 1/4 cup batter for each pancake onto hot griddle.",
        "Cook until bubbles form on surface and edges look set, about 2-3 minutes.",
        "Flip and cook until golden brown on other side, about 1-2 minutes more.",
        "Serve warm with butter and pure maple syrup."
      ]
    },
    {
      title: "Homemade Chicken & Vegetable Soup",
      category: "Dinners",
      time: "60 min",
      servings: "8 servings",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop",
      ingredients: [
        "1 whole chicken (3-4 lbs) or 2 lbs chicken pieces",
        "8 cups water",
        "3 carrots, peeled and diced",
        "3 celery stalks, diced",
        "1 large onion, diced",
        "4 cloves garlic, minced",
        "2 bay leaves",
        "1 teaspoon dried thyme",
        "Salt and pepper to taste",
        "2 cups egg noodles or rice (optional)",
        "Fresh parsley for garnish"
      ],
      instructions: [
        "Place chicken in large pot with water. Bring to boil, then reduce to simmer.",
        "Skim off any foam that rises to the top.",
        "Add bay leaves, thyme, salt, and pepper. Simmer for 45 minutes.",
        "Remove chicken from pot and let cool slightly. Remove meat from bones and shred.",
        "Strain broth through fine mesh strainer and return to pot.",
        "Add carrots, celery, onion, and garlic to broth. Simmer 15 minutes.",
        "Add shredded chicken back to pot. If using noodles/rice, add now and cook until tender.",
        "Taste and adjust seasonings. Remove bay leaves.",
        "Garnish with fresh parsley before serving."
      ]
    },
    {
      title: "No-Bake Energy Bites",
      category: "Kid Snacks",
      time: "15 min",
      servings: "20 bites",
      image: "https://images.unsplash.com/photo-1564768353-3c0150b4b0a6?w=800&h=600&fit=crop",
      ingredients: [
        "1 cup old-fashioned oats",
        "1/2 cup natural peanut butter",
        "1/3 cup honey",
        "1/2 cup dark chocolate chips",
        "1/4 cup ground flaxseed",
        "1 teaspoon vanilla extract",
        "Pinch of salt"
      ],
      instructions: [
        "Mix all ingredients together in a medium bowl until well combined.",
        "Cover and refrigerate for 30 minutes (this makes them easier to roll).",
        "Roll mixture into 1-inch balls using your hands.",
        "Store in airtight container in refrigerator for up to 2 weeks.",
        "Perfect for lunchboxes, after-school snacks, or pre-workout fuel!"
      ]
    },
    {
      title: "Sheet Pan Lemon Herb Chicken",
      category: "Dinners",
      time: "45 min",
      servings: "6 servings",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop",
      ingredients: [
        "6 chicken thighs (bone-in, skin-on)",
        "1 lb baby potatoes, halved",
        "3 cups broccoli florets",
        "1/4 cup olive oil",
        "3 cloves garlic, minced",
        "2 tablespoons fresh lemon juice",
        "1 tablespoon dried herbs (thyme, rosemary, oregano)",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Preheat oven to 425°F. Line large baking sheet with parchment paper.",
        "In small bowl, whisk together olive oil, garlic, lemon juice, herbs, salt, and pepper.",
        "Place chicken thighs and potatoes on baking sheet. Brush with half the olive oil mixture.",
        "Roast for 25 minutes.",
        "Remove from oven, add broccoli, and brush everything with remaining olive oil mixture.",
        "Return to oven for 15-20 minutes until chicken reaches 165°F and vegetables are tender.",
        "Let rest 5 minutes before serving."
      ]
    }
  ],
  blogPosts: [
    {
      title: "The 5-Meal Framework (Because Who Plans More?)",
      category: "Meal Planning",
      excerpt: "Stop trying to plan 21 dinners a week. Here's why rotating 5 solid meals will change your life and free up approximately 47% of your mental load.",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=600&fit=crop",
      content: `Listen, I know what the meal planning experts say. "Plan all 7 dinners!" "Batch cook on Sundays!" "Color-code your grocery list!"

But here's what they don't tell you: **you don't actually need 7 different dinners.**

## The Truth About Meal Planning

Most families eat the same 5-7 meals on rotation anyway. We just feel guilty about it because Instagram told us we should be making something different and photogenic every single night.

Spoiler alert: Your kids don't care if you serve spaghetti twice in one week. Neither does your spouse. The only person judging you is... you.

## How the Framework Works

**Pick 5 meals. That's it. Just 5.**

These should be:
- **Quick** (30 minutes or less)
- **Simple** (basic ingredients you always have)
- **Flexible** (can be modified based on what's in the fridge)
- **Kid-approved** (or at least kid-tolerated)
- **Actually meals you like**

## My Personal 5-Meal Rotation

**Monday: Sheet Pan Chicken**
Throw chicken thighs and whatever vegetables on a pan. Season. Roast. Done in 35 minutes with one dirty pan.

**Tuesday: Taco Tuesday**
Ground beef or chicken, tortillas, toppings. Kids can build their own. Leftovers become Wednesday's quesadillas.

**Wednesday: Pasta Night**
Rotate between marinara, Alfredo, or just butter and Parmesan. Add frozen meatballs if you're feeling fancy.

**Thursday: Slow Cooker Whatever**
This is what I start in the morning. Usually a soup, chili, or pulled pork. Comes home to dinner ready.

**Friday: Breakfast for Dinner**
Pancakes. Eggs. Bacon. Nobody ever complains.

## Why This Actually Works

**1. Less Decision Fatigue**
You're not deciding what's for dinner every night. You already know: it's Monday, so it's sheet pan chicken.

**2. Grocery Shopping is Automatic**
You buy the same core ingredients every week. No more wandering the aisles wondering what to make.

**3. You Get Really Good at These 5 Meals**
When you make the same thing every week, you get FAST. That sheet pan chicken that took 45 minutes the first time? Now it's 20 minutes because you know exactly what to do.

**4. Flexibility Within Structure**
Sheet pan chicken doesn't mean the same chicken every Monday. You can do lemon herb one week, honey garlic the next, BBQ the week after. Same method, different flavors.

## What About Variety?

Here's the thing: you're still eating different food every night. Monday's chicken is nothing like Wednesday's pasta is nothing like Friday's pancakes.

Plus, you can swap out meals in your rotation as the seasons change. Summer might be more grilling, winter might be more soups. But you still only have to think about 5 meals at a time.

## Getting Started

Want to try this? Here's what to do:

**Week 1:** Write down the 5 meals your family already eats most often. That's your starting rotation.

**Week 2:** Try cooking those 5 meals in order Monday-Friday. See how it feels.

**Week 3:** Keep what works, swap what doesn't.

**Week 4:** You've got your system.

## The Bottom Line

Meal planning doesn't have to be complicated. In fact, it works better when it's simple.

Five meals. One week. On repeat.

That's it. That's the whole system.

And somehow, it's the most revolutionary thing I've ever done for my sanity.

**Try the 5-meal framework for one week and let me know how it goes!**`
    },
    {
      title: "Essential Pantry Staples for Clean Eating",
      category: "Mom Hacks",
      excerpt: "Stock your pantry with these real-food essentials and you'll always be ready to make a wholesome meal.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
      content: `The secret to clean eating isn't fancy ingredients or complicated recipes. It's having the RIGHT ingredients always on hand.

Here are the 15 essentials that live in my pantry year-round.

## Healthy Fats

**Extra Virgin Olive Oil**
Your everyday oil for cooking, salad dressings, and roasting. Buy a good one - you'll taste the difference. I go through about 2 bottles a month.

**Coconut Oil**
Perfect for high-heat cooking and baking. The slight coconut flavor works in both sweet and savory dishes. Use refined if you don't want the coconut taste.

**Real Butter (Grass-Fed)**
Yes, REAL butter. Not margarine. Not "spreads." Butter from grass-fed cows. It's what our grandparents used, and they were onto something.

**Avocado Oil**
High smoke point makes it perfect for searing meat or stir-frying. Neutral flavor means it won't compete with your other ingredients.

## Natural Sweeteners

**Raw Honey**
Local honey if you can get it. Use it in everything from tea to salad dressings to baking. One jar lasts me about 6 weeks.

**Pure Maple Syrup**
The REAL stuff, not the corn syrup impostor with maple flavoring. Grade A for delicate flavor, Grade B (now called "dark") for robust maple taste.

**Medjool Dates**
Nature's candy. Blend into smoothies, chop into energy bites, or just eat them plain. They're also great for naturally sweetening desserts.

## Spices & Seasonings

**Sea Salt**
Get a good quality sea salt. Pink Himalayan or grey Celtic sea salt. Your food will actually taste like something.

**Garlic Powder**
For when you don't feel like mincing fresh garlic. Make sure it's JUST garlic - no added salt or other ingredients.

**Cinnamon**
Ceylon cinnamon is the "true" cinnamon with a sweeter, more delicate flavor. Use it in both sweet dishes and savory curries.

## Basics

**Apple Cider Vinegar (with the Mother)**
The murky stuff at the bottom is good for you! Use in salad dressings, marinades, or diluted in water as a health tonic.

**Coconut Aminos**
Your clean eating alternative to soy sauce. All the umami flavor, none of the soy or gluten. I use this in stir-fries, marinades, and dipping sauces.

**Bone Broth**
Keep a few boxes on hand for soups and sauces. Or just heat it up and sip it from a mug - it's incredibly nourishing.

## Baking

**Almond Flour**
Your go-to for gluten-free baking. Higher protein and lower carb than regular flour. Makes great pancakes, muffins, and cookies.

**Old-Fashioned Oats**
Not instant - the real, rolled oats. Use them in breakfast, baking, energy bites, or even as a binder in meatballs.

## Why These 15?

With just these items, you can make:
- Homemade salad dressings
- Healthy baked goods
- Quick stir-fries
- Nourishing soups
- Energy-boosting snacks
- Basically any clean eating recipe

More importantly, you'll STOP buying:
- Seed oils (canola, vegetable, soybean)
- Refined white sugar
- Processed sauces full of additives
- Anything with ingredients you can't pronounce

## The Shopping Strategy

**Buy in Bulk**
These staples don't go bad quickly. Save money by buying larger quantities at stores like Costco, Thrive Market, or Azure Standard.

**Always Check Labels**
Even "healthy" products can have hidden junk. If the ingredient list is long or includes things you don't recognize, skip it.

**Invest in Quality**
Yes, good olive oil costs more than the cheap stuff. But you're not spending money on processed foods anymore, so it balances out.

## Quick Meal Ideas Using Just These Staples

**Breakfast:**
- Oatmeal with honey, cinnamon, and butter
- Smoothie with dates for natural sweetness

**Lunch:**
- Quick bone broth soup
- Homemade vinaigrette over any salad

**Dinner:**
- Roasted vegetables in olive oil and sea salt
- Stir-fry with coconut aminos

**Snacks:**
- Energy bites with oats, honey, and nut butter
- Dates stuffed with almond butter

## Getting Started

Don't rush out and buy everything at once. Start by swapping:

**Week 1:** Replace your cooking oils with olive oil and coconut oil
**Week 2:** Replace sugar with honey and maple syrup
**Week 3:** Add the spices and vinegars
**Week 4:** Stock up on the baking essentials

## The Bottom Line

A well-stocked pantry with real, whole-food ingredients makes clean eating EASY.

No more wondering what to make for dinner. No more running to the store three times a week.

Just open your pantry, grab what you need, and cook.

**What's your must-have pantry staple? Share below!**`
    },
    {
      title: "My Simple Sunday Meal Prep Routine",
      category: "Meal Planning",
      excerpt: "Spend 2 hours on Sunday to make your weeknights so much easier. Here's exactly what I do.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      content: `I used to think meal prep meant spending my entire Sunday making 21 individual meals in little containers.

No wonder I never did it!

Then I figured out the secret: **you're not trying to cook everything for the week. You're just making weeknights EASIER.**

## My 2-Hour Sunday System

I spend exactly 2 hours on Sunday afternoon prepping. Not all day. Just 2 focused hours.

Here's what that looks like:

### Hour 1: Proteins (11 AM - 12 PM)

**What I Cook:**
- Sheet pan of chicken thighs (6-8 pieces)
- Ground beef (2 lbs, browned)
- Hard boiled eggs (12)

**Why These Three?**
They're the most time-consuming things to cook during the week. Having them ready means dinner comes together in 15 minutes instead of 45.

**The Process:**

11:00 - Start the eggs boiling (set 12-minute timer)

11:02 - Season chicken thighs and get them in the oven at 425°F (they'll take 35 minutes)

11:05 - Brown the ground beef in a large skillet while everything else cooks

11:15 - Move eggs to ice bath when timer goes off

11:37 - Pull chicken from oven, let rest

11:45 - Everything is cooked and cooling

### Hour 2: Vegetables & Basics (12 PM - 1 PM)

**What I Prep:**
- Wash and chop 3 types of vegetables
- Make one big salad base
- Cook a batch of rice or quinoa
- Portion fruit for snacks

**My Three Vegetables:**
I choose 3 vegetables that work multiple ways:
- Bell peppers (stir-fry, quesadillas, omelets)
- Broccoli (roasted, steamed, added to anything)
- Carrots (snacks, soups, roasted)

**The Salad Base:**
One large container of:
- Mixed greens
- Shredded carrots
- Sliced cucumbers
- Cherry tomatoes

This becomes the foundation for quick salads all week. I add protein and dressing fresh each day.

## The Container System

Here's what I actually use:

**Proteins:** 4 glass containers (1 for chicken, 1 for beef, 1 for eggs, 1 extra)
**Vegetables:** 3 plastic containers with lids
**Salad:** 1 large bowl with lid
**Grain:** 1 medium container

That's it. I'm not making individual meal boxes. I'm making components.

## How It Plays Out During the Week

**Monday: Chicken & Roasted Veggies**
Grab chicken, grab broccoli, roast together 20 minutes. Done.

**Tuesday: Ground Beef Tacos**
Beef is ready, just heat it up. Chop some fresh toppings. 15 minutes.

**Wednesday: Chicken Salad**
Dice prepped chicken, mix with mayo and celery. Serve over salad base. 10 minutes.

**Thursday: Grain Bowl**
Layer rice, add chicken or beef, top with prepped vegetables, drizzle with sauce. 10 minutes.

**Friday: Breakfast for Dinner**
Use those hard-boiled eggs chopped in a scramble with the prepped peppers. Or just make fresh eggs - it's Friday!

## What I DON'T Prep

This is important:

**I don't prep:**
- Full assembled meals
- Anything that gets soggy (like assembled salads)
- Things that are quick to make fresh (eggs, pasta)
- Anything my kids won't eat reheated

## The Game Changer: Assembly vs. Cooking

Here's what finally clicked for me:

Weeknight cooking isn't about being a chef. It's about ASSEMBLY.

When your proteins and vegetables are prepped, you're not "cooking dinner." You're just putting things together.

Huge mental difference.

## Common Questions

**"Doesn't reheated chicken taste bad?"**

Not if you:
- Add a splash of broth when reheating
- Don't overheat it (just warm through)
- Or serve it cold in salads and wraps

**"What if my family doesn't like leftovers?"**

They're not eating leftovers! You're using the same ingredients in different ways.

Monday's roasted chicken becomes Tuesday's chicken salad becomes Wednesday's quesadilla filling. Same chicken, totally different meals.

**"Do I really save time?"**

The first few Sundays? Maybe not much time saved.

After a month? You'll wonder how you ever survived without this system.

## Tips for Success

**Start Small**
Your first time, just prep ONE protein and TWO vegetables. That's it. See how it helps your week.

**Pick Your Day**
Doesn't have to be Sunday. Pick whatever day works for your schedule.

**Get the Family Involved**
Kids can wash vegetables. Partner can brown the beef. Make it a team effort.

**Adjust as Needed**
Some weeks I only prep proteins. Some weeks I add extra vegetables. Some weeks I skip it entirely.

The point isn't perfection. It's having SOME components ready so weeknights aren't starting from zero.

## The Real Impact

Here's what changed for us:

**Before:**
- 5 PM panic every single day
- Multiple grocery store runs per week
- Lots of drive-through dinners
- Constant stress about "what's for dinner"

**After:**
- Calm weeknight cooking
- One grocery trip per week
- Eating at home 5 nights a week
- Actually enjoying cooking

## Start This Sunday

Here's your action plan:

**This Sunday, prep:**
- 1 batch of chicken
- 1 batch of ground beef
- 1 chopped vegetable

**Next Sunday, add:**
- Hard boiled eggs
- Another vegetable
- A grain

**By Week 3:**
You'll have your own system dialed in.

## The Bottom Line

Two hours on Sunday buys me about 10 hours of peace during the week.

No more 5 PM panic.
No more drive-through runs.
No more wondering what's for dinner.

Just open the fridge, grab components, and assemble.

That's the magic.

**Ready to try it? Start small this Sunday and report back!**`
    }
  ],
  shopItems: [
    {
      title: "The Simple Meal Planning System",
      type: "Digital Planner",
      description: "The exact framework I use to plan meals without losing my mind. Includes templates, shopping lists, and the 5-Meal rotation system.",
      price: "$27",
      icon: "📋",
      featured: true
    },
    {
      title: "30 Family-Friendly Clean Eating Recipes",
      type: "eBook",
      description: "No refined sugars, no seed oils - just real food your kids will actually eat. Digital download includes shopping lists and meal prep tips.",
      price: "$19",
      icon: "📖",
      featured: true
    },
    {
      title: "The Clean Eating Pantry Checklist",
      type: "Printable",
      description: "Never wonder what to stock again. This comprehensive checklist covers all the essentials for a well-stocked clean eating pantry.",
      price: "$7",
      icon: "✓",
      featured: false
    }
  ]
};
