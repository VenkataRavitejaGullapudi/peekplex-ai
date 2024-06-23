# Peekplex: AI-Powered Movie Exploration

Peekplex is a cutting-edge web application that empowers you to delve into the world of cinema with the combined brilliance of human intuition and AI-driven search.

##Key Technologies:

- React: Building a dynamic and interactive user interface.
- Tailwind CSS: Streamlined utility-first styling for a clean and responsive experience.
- Firebase: Seamless user authentication, data management, and deployment.
- TMDB API: Accessing a vast collection of movie information and trailers.
- Cohere (or similar AI service): Implementing AI-powered movie search capabilities.

##Features:

- **Intuitive User Experience:**
    - Streamlined sign-up and login process for personalized access.
    - Browse through a curated selection of different categorized movie sections.
    - Explore detailed information and trailers for each movie.
    - Discover an array of recommended movies based on your preferences.
- **AI-Powered Search:**
    - Leverage the power of AI to find movies that perfectly align with your interests.

##Technical Details:

- Built with React and Redux.
- Utilizes form validation and hooks for efficient user input handling.
- Leverages Redux to manage application state effectively.
- Prioritizes responsiveness across various screen sizes.
- Securely stores API keys in a `.env` file.

##Note:
- It is a pure frontend application.

##### Project ScratchPad.
- Created using Create React App
- Configured Tailwind CSS
- Header
- Routing App
- Login Form
- SignUp form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying app to firebase
- Create Signup user account firebase
- Implement sign in user api
- Created redux store with user slice
- Implemented validations
- Profile updation
- Implemented signout
- Fixing signup user display name and profile picture update
- Register TMDB API & Created an app to get access token
- Get Data from the now playing movies using list API
- Custom hook for now playing movies and getting videos by movie id
- Planning for main continaer & secondary container
- Fetch data from trailer video
- Styling trailer video
- Secondary component
- Build Movie List and card
- TMDB images CDN URL
- Hooks for each movie list
- AI search bar
- Multi language feature in search bar page
- Responsive
- Cohere integration
- Prompting
- Movie search with TMDB
- Memoization
- Moved keys to .env

**Features**
- Sign In/ SignUp
    - Redirect to browse page
- Browse (After authentication)
    - Header
    - Main movie
        - trailer in background
        - title & description
    - Movie suggesions
        - Movie list * N
        - Vertically scrollable

- Peekplex gpt
    - Search bar
    - Movie suggestions
