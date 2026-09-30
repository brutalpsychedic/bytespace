import Button from '../components/Button.jsx';
import { Squiggle } from '../components/Shapes.jsx';
import './CreatorCTA.css';

export default function CreatorCTA() {
  return (
    <section className="section creator-cta grid-bg">
      <Squiggle className="creator-cta__shape creator-cta__shape--top" />
      <Squiggle className="creator-cta__shape creator-cta__shape--left" />
      <Squiggle className="creator-cta__shape creator-cta__shape--right" />

      <div className="container creator-cta__inner">
        <h2 className="creator-cta__title">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="creator-cta__text">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button to="/signup">Join as Creator</Button>
      </div>
    </section>
  );
}
