import react from "react";
import Project from "./Project";

export default function Projects() {

  const projectInfo = [{
    title: 'Talking in Circles',
    repoLink: 'https://github.com/ShoshBeer/talking-circles',
    siteLink: 'https://shoshbeer.github.io/talking-circles/',
    skills: ['ReactJS', 'ReduxJS', 'React-Bootstrap', 'JSX', 'React Router', 'NodeJS', 'Git'],
    description: 'Practise speaking to improve your language fluency with this 2+ player game! Set the difficulty according to your proficiency and give clues until your partner figures out the secret word.',
    image: '/talking-in-circles-snap.png'
  },
  {
    title: 'Learning Dictionaries',
    repoLink: 'https://github.com/ShoshBeer/LearningDictionaries',
    siteLink: null,
    skills: ['Python', 'JSON', 'Various APIs', 'Git'],
    description: 'Create a dictionary in many languages with words above a specified frequency threshold. Entries will contain definitions, the frequency, related words, and definitions of related words. Dictionaries already created for English, German, French, Spanish, Portugese, and Italian.',
    image: '/talking-in-circles-snap.png'
  },
  {
    title: 'Museum of Reddit Natural History',
    repoLink: 'https://github.com/ShoshBeer/museum-of-reddit-natural-history',
    siteLink: null,
    skills: ['ReactJS', 'ReduxJS', 'Collaboration', 'Reddit API', 'React-Bootstrap', 'React Router', 'NodeJS', 'Git'],
    description: 'A Chrome extension to improve the Reddit experience. No more navigating back and forth when the comments get really meta!',
    image: '/talking-in-circles-snap.png'
  },
  {
    title: 'Song Snake',
    repoLink: 'https://github.com/ShoshBeer/Song-Snake',
    siteLink: 'https://song-snake.netlify.app/',
    skills: ['ReactJS', 'Spotify API', 'NodeJS', 'Git'],
    description: "Create Spotify playlists related by single words. Each song you add will trigger a new search for a single word from the title, artist, or album of the song you just added. Find music in different genres and make a game of guessing where a playlist's theme might end up!",
    image: '/talking-in-circles-snap.png'
  },
];

  return (
    <section id='projects' className="scroll-mt-[138px] sm:scroll-mt-[102px]">
      <div className="max-w-6xl mx-auto py-10 bg-white dark:bg-[#121212] antialiased">
        <h2 className="text-4xl lg:text-5xl font-bold text-center">
          Projects
        </h2>
      </div>
      <div className="relative rounded-md shadow-md p-4 md:p-10 lg:p-10 max-w-6xl mx-auto -mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectInfo.map((project) => <Project key={project.title} project={project} />)}
      </div>
    </section>
  );
}