import {Link} from 'react-router-dom'
import { useAtomValue } from 'jotai';
import { fullNameAtom } from '../../stores/user.js';
import { skillsCountAtom } from '../../stores/skills.js';

const Header = () => {
  const fullName = useAtomValue(fullNameAtom);
  const skillCount = useAtomValue(skillsCountAtom); 

  return (
    <div>
      <img src=''/>
      <Link key={`home`} to={`/`}>Home </Link>
      <Link key={`profile`} to={`/profile`}>Profile </Link>
      <p key={'fullName'}>{fullName}</p>
      <p key={'skillsCount'}>{skillCount} skills</p>
    </div>
  )
}

export default Header