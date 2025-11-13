# Totle Frontend Developer Internship - Round 1

This project is a submission for the Round 1 coding challenge. It features a React component that displays a list of topics and allows a user to filter them in real-time.

## Setup and Workflow Process

Follow these steps to run the application locally:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Pawan-Yaduveer/Totle-Topic-Search
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd totle-submission
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    ```
4.  **Run the Application (Dev):**
    ```bash
    npm run dev
    ```
    This will open the application in your default browser at `http://localhost:5173` (or a similar address).

5.  **Build for Production (Optional):**
    ```bash
    npm run build
    ```
6.  **Preview Production Build (Optional):**
    ```bash
    npm run preview
    ```

## Project Structure

```
totle-submission/
├─ src/
│  ├─ App.jsx               # App shell rendering TopicSearch
│  ├─ App.css               # Global styles + layout
│  ├─ TopicSearch.jsx       # Main component per the challenge
│  ├─ TopicSearch.css       # Styles for TopicSearch UI
│  └─ main.jsx              # React entry point
├─ public/                  # Static assets served at root
├─ index.html               # Vite HTML template
├─ package.json             # Scripts and dependencies
└─ vite.config.js           # Vite config
```

## How It Works

- `TopicSearch.jsx` keeps an in-memory list of topics (9 sample topics).
- A controlled `<input>` updates `searchTerm` on every keystroke.
- Filtering is case-insensitive and trims whitespace (e.g., `"   "` is treated as empty and shows all topics).
- Matching topics render as simple cards showing `name` and `category`.
- If nothing matches, a friendly "No topics found" message is shown.

Edge cases handled:
- Empty input: shows all topics.
- Whitespace-only input: treated as empty due to trimming.
- Mixed case queries (e.g., `tHeRmO`) work as expected.

## Links


- **GitHub Repository Link:** https://github.com/Pawan-Yaduveer/Totle-Topic-Search
- **2-Minute Video Explanation:** /demo.mp4
- **Video Goole Drive Link:**  https://drive.google.com/file/d/1yG371Z07pAwTQZThPurzHg23IhrquUK0/view?usp=sharing

### Embedded Video

<video src="/demo.mp4" controls width="720" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 6px 18px rgba(0,0,0,0.08);"></video>


