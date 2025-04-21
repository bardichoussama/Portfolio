const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          {/* Experience Column */}
          <div className="col col-md">
            {/* Title */}
            <div className="title">
              <div className="title_inner">Expériencs</div>
            </div>
            {/* Resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">17 Juin 2024 - 17 Juillet 2024</div>
                <div className="name">
                  Al Maghribia Li Attaemine — Développeur Full Stack | Stage
                </div>
                <div className="text">
                  Optimisation d’une application : amélioration de la structure métier,
                  interface modernisée et ajout de nouvelles fonctionnalités.
                </div>
              </div>
              <div className="resume-item content-box ">
                <div className="date">2021 - 2023</div>
                <div className="name">Graphiste – Fiverr</div>
                <div className="text">
                  Réalisation de créations graphiques pour des clients internationaux : logos, affiches, bannières, etc.
                </div>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="col col-md">
            {/* Title */}
            <div className="title">
              <div className="title_inner">Formatiosn</div>
            </div>
            {/* Resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">2024 - Présent</div>
                <div className="name">
                  Développeur Full-Stack (Web et Mobile) – Tanger
                </div>
                <div className="text"></div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2023 - 2024</div>
                <div className="name">
                  Développeur Full-Stack (Web) – Tanger
                </div>
                <div className="text"></div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2019</div>
                <div className="name">
                  Baccalauréat en Sciences de la Vie et de la Terre – Marrakech
                </div>
                <div className="text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
