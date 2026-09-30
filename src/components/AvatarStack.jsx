import Avatar from './Avatar.jsx';
import './AvatarStack.css';

// Row of overlapping avatars, optionally ending with a dark "+N" bubble.
export default function AvatarStack({ people, extra, size = 32, max = people.length }) {
  return (
    <ul className="avatar-stack" style={{ '--stack-size': `${size}px` }}>
      {people.slice(0, max).map((person) => (
        <li key={person.name}>
          <Avatar {...person} size={size} />
        </li>
      ))}
      {extra && (
        <li>
          <span className="avatar-stack__more">{extra}</span>
        </li>
      )}
    </ul>
  );
}
