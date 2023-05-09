import react from "react";
import Project from "./Project";
import TalkingCircles from '../public/talking-in-circles-snap.png';
import LearningDictionaries from '../public/talking-in-circles-snap.png';
import Reddit from '../public/talking-in-circles-snap.png';
import SongSnake from '../public/talking-in-circles-snap.png';

export default function Projects() {

  const projectInfo = [{
    title: 'Talking in Circles',
    repoLink: 'https://github.com/ShoshBeer/talking-circles',
    siteLink: 'https://shoshbeer.github.io/talking-circles/',
    skills: ['ReactJS', 'ReduxJS', 'React-Bootstrap', 'JSX', 'React Router', 'NodeJS', 'Git'],
    description: 'Practise speaking to improve your language fluency with this 2+ player game! Set the difficulty according to your proficiency and give clues until your partner figures out the secret word.',
    image: TalkingCircles
  },
  {
    title: 'Learning Dictionaries',
    repoLink: 'https://github.com/ShoshBeer/LearningDictionaries',
    siteLink: null,
    skills: ['Python', 'JSON', 'Various APIs', 'Git'],
    description: 'Create dictionaries of common words with definitions, frequencies, and related words. Dictionaries already created for English, German, French, Spanish, Portugese, and Italian.',
    image: LearningDictionaries
  },
  {
    title: 'Museum of Reddit Natural History',
    repoLink: 'https://github.com/ShoshBeer/museum-of-reddit-natural-history',
    siteLink: null,
    skills: ['ReactJS', 'ReduxJS', 'Collaboration', 'Reddit API', 'React-Bootstrap', 'React Router', 'NodeJS', 'Git'],
    description: 'A Chrome extension to improve the Reddit experience. No more navigating back and forth when the comments are full of links to other Reddit posts!',
    image: Reddit
  },
  {
    title: 'Song Snake',
    repoLink: 'https://github.com/ShoshBeer/Song-Snake',
    siteLink: 'https://song-snake.netlify.app/',
    skills: ['ReactJS', 'Spotify API', 'NodeJS', 'Git'],
    description: "Create unique Spotify playlists! Each song added triggers a new search for a single word from the title, artist, or album. Make a game of guessing where a playlist's theme will go!",
    image: SongSnake
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