import { useAtomValue } from 'jotai';
import { fullNameAtom } from '../../stores/user.js';
import { skillsAtom, skillsCountAtom } from '../../stores/skills.js';

const Home = () => {
  const fullName = useAtomValue(fullNameAtom);
  const skills = useAtomValue(skillsAtom);
  const skillsCount = useAtomValue(skillsCountAtom);
  if (skillsCount === 0) {
    return (
      <div><h1>Welcome</h1>
        <p>You should register to add more skills</p>
      </div>
      
    )
  }else{
    return (
      <div><h1>Welcome {fullName}</h1> 
        <ul>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </ul>
      </div>
      
    )
  }
  
}

export default Home