import React from "react";
import "./App.scss";

function App() {
  const imgPath = process.env.PUBLIC_URL + "/img";

  return (
    <div className="container">
      <header className="header">
        <img src={`${imgPath}/logo.png`} alt="trillo logo" className="logo" />
        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search hotels"
          />
          <button className="search__button">
            <svg className="search__icon">
              <use xlinkHref={`${imgPath}/sprite.svg#icon-magnifying-glass`} />
            </svg>
          </button>
        </form>
        <nav class="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref={`${imgPath}/sprite.svg#icon-bookmark`} />
            </svg>
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref={`${imgPath}/sprite.svg#icon-chat`} />
            </svg>
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <img
              src={`${imgPath}/user.jpg`}
              alt="user pic"
              className="user-nav__user-photo"
            />
            <span className="user-nav__user-name">Jonas</span>
          </div>
        </nav>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${imgPath}/sprite.svg#icon-home`} />
                </svg>
                <span>Hotel</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use
                    xlinkHref={`${imgPath}/sprite.svg#icon-aircraft-take-off`}
                  />
                </svg>
                <span>Flight</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${imgPath}/sprite.svg#icon-key`} />
                </svg>
                <span>Car rental</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${imgPath}/sprite.svg#icon-map`} />
                </svg>
                <span>Tours</span>
              </a>
            </li>
          </ul>
          <div className="legal">
            &copy; 2017 by trillo. All rights reserved
          </div>
        </nav>
        <main className="hotel-view">
          <div className="gallery">
            <figure className="gallery__item">
              <img
                className="gallery__photo"
                src={`${imgPath}/hotel-1.jpg`}
                alt="Pic of hotel 1"
              />
            </figure>
            <figure className="gallery__item">
              <img
                className="gallery__photo"
                src={`${imgPath}/hotel-2.jpg`}
                alt="Pic of hotel 2"
              />
            </figure>
            <figure className="gallery__item">
              <img
                className="gallery__photo"
                src={`${imgPath}/hotel-3.jpg`}
                alt="Pic of hotel 3"
              />
            </figure>
          </div>
          <div className="overview">
            <h1 className="overview__heading">Hotel las palmas</h1>
            <div className="overview__stars">
              <svg className="overview__icon-star">
                <use xlinkHref={`${imgPath}/sprite.svg#icon-star`} />
              </svg>
              <svg className="overview__icon-star">
                <use xlinkHref={`${imgPath}/sprite.svg#icon-star`} />
              </svg>
              <svg className="overview__icon-star">
                <use xlinkHref={`${imgPath}/sprite.svg#icon-star`} />
              </svg>
              <svg className="overview__icon-star">
                <use xlinkHref={`${imgPath}/sprite.svg#icon-star`} />
              </svg>
              <svg className="overview__icon-star">
                <use xlinkHref={`${imgPath}/sprite.svg#icon-star`} />
              </svg>
            </div>
            <div className="overview__location">
              <svg className="overview__icon-location">
                <use xlinkHref={`${imgPath}/sprite.svg#icon-location-pin`} />
              </svg>
              <button className="btn-inline">Albufeira, Portugal</button>
            </div>
            <div className="overview__rating">
              <div className="overview__rating-average">8.6</div>
              <div className="overview__rating-count">429 votes</div>
            </div>
          </div>
          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate.
              </p>
              <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>
              <ul className="list">
                <li className="list__item">
                  <svg className="list__icon">
                    <use
                      xlinkHref={`${imgPath}/sprite.svg#icon-chevron-thin-right`}
                    />
                  </svg>
                  Close to the beach
                </li>
                <li className="list__item">
                  <svg className="list__icon">
                    <use
                      xlinkHref={`${imgPath}/sprite.svg#icon-chevron-thin-right`}
                    />
                  </svg>
                  Breakfast included
                </li>
                <li className="list__item">
                  <svg className="list__icon">
                    <use
                      xlinkHref={`${imgPath}/sprite.svg#icon-chevron-thin-right`}
                    />
                  </svg>
                  Free airport shuttle
                </li>
                <li className="list__item">
                  <svg className="list__icon">
                    <use
                      xlinkHref={`${imgPath}/sprite.svg#icon-chevron-thin-right`}
                    />
                  </svg>
                  Free wifi in all rooms
                </li>
                <li className="list__item">
                  <svg className="list__icon">
                    <use
                      xlinkHref={`${imgPath}/sprite.svg#icon-chevron-thin-right`}
                    />
                  </svg>
                  Air conditioning and heating
                </li>
                <li className="list__item">
                  <svg className="list__icon">
                    <use
                      xlinkHref={`${imgPath}/sprite.svg#icon-chevron-thin-right`}
                    />
                  </svg>
                  Pets allowed
                </li>
                <li className="list__item">
                  <svg className="list__icon">
                    <use
                      xlinkHref={`${imgPath}/sprite.svg#icon-chevron-thin-right`}
                    />
                  </svg>
                  We speak all languages
                </li>
                <li className="list__item">
                  <svg className="list__icon">
                    <use
                      xlinkHref={`${imgPath}/sprite.svg#icon-chevron-thin-right`}
                    />
                  </svg>
                  Perfect for families
                </li>
              </ul>
              <div className="recommend">
                <p className="recommend__count">
                  Lucy and 3 other friends recommend this hotel
                </p>
                <div className="recommend__friends">
                  <img
                    src={`${imgPath}/user-3.jpg`}
                    alt="Friend 1"
                    className="recommend__photo"
                  />
                  <img
                    src={`${imgPath}/user-4.jpg`}
                    alt="Friend 2"
                    className="recommend__photo"
                  />
                  <img
                    src={`${imgPath}/user-5.jpg`}
                    alt="Friend 3"
                    className="recommend__photo"
                  />
                  <img
                    src={`${imgPath}/user-6.jpg`}
                    alt="Friend 4"
                    className="recommend__photo"
                  />
                </div>
              </div>
            </div>
            <div className="user-review">
              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  doloremque architecto dicta animi, totam, itaque officia ex.
                </blockquote>
                <figcaption className="review__user">
                  <img
                    src={`${imgPath}/user-1.jpg`}
                    alt="review 1"
                    className="review__photo"
                  />
                  <div className="review__user-box">
                    <p className="review__user-name">Nick Smith</p>
                    <p className="review__user-date">Feb 23rd, 2020</p>
                  </div>
                  <div className="review__rating">7.8</div>
                </figcaption>
              </figure>

              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  doloremque architecto dicta animi.
                </blockquote>
                <figcaption className="review__user">
                  <img
                    src={`${imgPath}/user-2.jpg`}
                    alt="review 1"
                    className="review__photo"
                  />
                  <div className="review__user-box">
                    <p className="review__user-name">Mary Thomas</p>
                    <p className="review__user-date">Sep 17th, 2020</p>
                  </div>
                  <div className="review__rating">9.3</div>
                </figcaption>
              </figure>
              <button className="btn-inline">
                Show all<span>&rarr;</span>
              </button>
            </div>
          </div>
          <div className="cta">
            <h2 className="cta__book-now">
              Good news! We have 4 free rooms for your selected dates!
            </h2>
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible">Only 4 rooms left</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
