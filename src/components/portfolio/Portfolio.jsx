import "./portfolio.scss";


export default function Portfolio() {
return (
  <div className="container">
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      {/* first row */}
      <div className="row align-items-center">
      <ul>
          <li>
            <div className="card col-sm">
              <img className="card-img-top" src="assets/horiseon.JPG" alt="" />
                <div className="card-body">
                  <h3 className="card-title">Horiseon Refactor</h3>
                  
                  <a href="https://erinknapp.github.io/refactor-homework/" className="btn btn-primary">Horiseon Refactor Code</a>
                </div>
            </div>
            
          </li>

          <li>
          <div className="card col-sm">
              <img className="card-img-top" src="assets/regex.JPG" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Regex</h5>
                 
                  <a href="https://github.com/erinknapp/regex-tutorial/blob/main/Develop/gist-template.md" className="btn btn-primary">Regex Gist Tutorial</a>
                </div>
            </div>
          </li>

          <li>
          <div className="card col-sm">
              <img className="card-img-top" src="assets/git-it-done.JPG" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Git-It-Done</h5>

                  <a href="https://erinknapp.github.io/git-it-done/" className="btn btn-primary">Git-It-Done Code</a>
                </div>
            </div>
          </li>
          </ul>
    </div>

  {/* second row */}

    <div className="row align-items-center">
    <ul>
          <li>
          <div className="card col-sm">
              <img className="card-img-top" src="assets/pwa.JPG" alt="" />
                <div className="card-body">
                  <h3 className="card-title">PWA Budget Tracker</h3>

                  <a href="https://ancient-meadow-60782.herokuapp.com/" className="btn btn-primary">PWA App Deployed on Heroku</a>
                </div>
            </div>
          </li>

          <li>
          <div className="card col-sm">
              <img className="card-img-top" src="assets/horiseon.JPG" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Horiseon Refactor</h5>
                  <p className="card-text">some words</p>
                  <a href="https://erinknapp.github.io/refactor-homework/" className="btn btn-primary">go somwhere</a>
                </div>
            </div>

          </li>
          <li>
          <div className="card col-sm">
              <img className="card-img-top" src="assets/horiseon.JPG" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Horiseon Refactor</h5>
                  <p className="card-text">some words</p>
                  <a href="https://erinknapp.github.io/refactor-homework/" className="btn btn-primary">go somwhere</a>
                </div>
            </div>

          </li>         

        </ul>
        </div>
      </div>
</div>
  );
}
