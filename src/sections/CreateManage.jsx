import { CheckIcon } from '../components/Icons.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { HappyStudentsCard, RevenueCard } from '../components/StatCards.jsx';
import { creatorBenefits } from '../data/content.js';
import { images } from '../data/images.js';
import './CreateManage.css';

export default function CreateManage() {
  return (
    <section className="section create-manage" id="creators">
      <div className="container create-manage__inner">
        <div className="create-manage__visual">
          <img
            className="create-manage__person"
            src={images.creator}
            alt="Course creator wearing headphones"
            loading="lazy"
          />
          <RevenueCard className="create-manage__revenue" label="Total Revenue" sub="This month" value="$120.29" />
          <RevenueCard className="create-manage__ytd" label="Year to Date" sub="2026" value="$1,200.38" badge="+12%" />
          <HappyStudentsCard className="create-manage__students" extra="26+" />
        </div>

        <div>
          <SectionHeading
            align="left"
            title="Create & Manage Courses Easily."
            text="ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses."
          />
          <ul className="create-manage__list">
            {creatorBenefits.map((benefit) => (
              <li key={benefit}>
                <span className="create-manage__check">
                  <CheckIcon width={12} height={12} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
