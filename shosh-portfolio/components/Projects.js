import Project from "./Project";
import TalkingCircles from '../public/images/talking-icon.svg';
import TalkingDark from '../public/images/talking-icon-dark.svg';
import LearningDictionaries from '../public/images/book-atlas-solid.svg';
import Reddit from '../public/images/reddit-alien.svg';
import SongSnake from '../public/images/snake-flip.svg';

export default function Projects() {

  const projectInfo = [{
    title: 'Talking in Circles',
    repoLink: 'https://github.com/ShoshBeer/talking-circles',
    siteLink: 'https://shoshbeer.github.io/talking-circles/',
    icon: TalkingCircles,
    iconDark: TalkingDark,
    skills: ['ReactJS', 'ReduxJS', 'React-Bootstrap', 'JSX', 'React Router', 'NodeJS', 'Git'],
    description: 'Practise speaking to improve your language fluency with this 2+ player game! Set the difficulty according to your proficiency and give clues until your partner figures out the secret word.'
  },
  {
    title: 'Learning Dictionaries',
    repoLink: 'https://github.com/ShoshBeer/LearningDictionaries',
    siteLink: null,
    icon: LearningDictionaries,
    skills: ['Python', 'JSON', 'Various APIs', 'Git'],
    description: 'Create dictionaries of common words with definitions, frequencies, and related words. Dictionaries already created for English, German, French, Spanish, Portugese, and Italian.'
  },
  {
    title: 'Museum of Reddit Natural History',
    repoLink: 'https://github.com/ShoshBeer/museum-of-reddit-natural-history',
    siteLink: null,
    icon: Reddit,
    skills: ['ReactJS', 'ReduxJS', 'Collaboration', 'Reddit API', 'React-Bootstrap', 'React Router', 'NodeJS', 'Git'],
    description: 'A Chrome extension to improve the Reddit experience. No more navigating back and forth when the comments are full of links to other Reddit posts!'
  },
  {
    title: 'Song Snake',
    repoLink: 'https://github.com/ShoshBeer/Song-Snake',
    siteLink: 'https://song-snake.netlify.app/',
    icon: SongSnake,
    skills: ['ReactJS', 'Spotify API', 'NodeJS', 'Git'],
    description: "Create unique Spotify playlists! Each song added triggers a new search for a single word from the title, artist, or album. Make a game of guessing where a playlist's theme will go!"
  },
];

  return (
    <section id='projects' className="scroll-mt-[138px] sm:scroll-mt-[102px] mb-6">
      <div className="max-w-6xl mx-auto py-14 antialiased">
        <h2 className="text-4xl lg:text-5xl font-bold text-center">
          Projects
        </h2>
      </div>
      <div className="relative max-w-5xl md:mx-4 lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectInfo.map((project) => <Project key={project.title} project={project} />)}
      </div>
    </section>
  );
}