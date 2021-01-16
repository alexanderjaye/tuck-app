# BROWSER ROUTES

/ - landing page (if logged in redirect to dashboard)

--NotLoggedIn--
/login
/register

--LoggedIn--
/dashboard
/favorites/:username
/recipe/:recipeid/:variantid
/add-recipe
/edit-recipe
/submit-recipe

(user profile)
/setting/:username
/profile/:username
