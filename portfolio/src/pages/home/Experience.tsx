import { useMemo, Fragment, type FC } from "react";
import { EXPERIENCE, type ExperienceItem } from "../../data/experience";
import "./Experience.css";

const getRefDate = (item: ExperienceItem): Date => {
  const end = item.endTime ? new Date(item.endTime) : null;
  const start = new Date(item.startTime);
  return end ?? start;
};

export const ExperienceSection: FC = () => {
  const sortedItems = useMemo(
    () =>
      [...EXPERIENCE.payload].sort((a, b) => {
        const aRef = getRefDate(a).getTime();
        const bRef = getRefDate(b).getTime();
        return bRef - aRef;
      }),
    []
  );

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">{EXPERIENCE.title}</h2>

        <div className="timeline" id="timeline">
          {sortedItems.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-content">
                <span
                  className={
                    "badge " +
                    (item.type === "Deneyim" ? "badge-exp" : "badge-edu")
                  }
                >
                  {item.type}
                </span>

                <span className="date">{item.dateLabel}</span>
                <h3>{item.title}</h3>
                <p className="org">{item.org}</p>
                <p>
                  {item.description.split("\n").map((line, idx) => (
                    <Fragment key={idx}>
                      {line}
                      {idx < item.description.split("\n").length - 1 && <br />}
                    </Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
