
import Link from 'react-router-dom';

import './App.scss';

import imgOne from './ph-0.png';
import imgTwo from './ph-1.png';
import imgFree from './ph-2.png';
import VideoBox from './video.02.mp4';

function App() {
  return (
<div className="disableZoom">
      {/* главный контейнер */}
      <div className="App">
        {/* шапка */}
        <header className="header-app">
          <div className="logo-container">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path
                d="M18.0458 10.0209C15.0544 10.0209 12.0641 9.67639 9.16128 8.99608C8.86706 8.92718 8.6844 8.63405 8.75331 8.33874C8.82221 8.04561 9.10878 7.86296 9.41174 7.93077C15.7478 9.41608 22.4821 9.22905 28.7471 7.38608C29.0424 7.30296 29.3421 7.46593 29.4263 7.75577C29.5116 8.04671 29.3464 8.34968 29.0566 8.43499C25.4789 9.48718 21.7744 10.0209 18.0458 10.0209Z"
                fill="#4AFF93"
              />
              <path
                d="M28.9013 28.8334C28.8499 28.8334 28.7985 28.8258 28.746 28.8105C21.7909 26.7641 14.3009 26.7641 7.34572 28.8105C7.0515 28.8925 6.75072 28.7306 6.6665 28.4408C6.58119 28.1498 6.74635 27.8469 7.03619 27.7616C14.1948 25.655 21.8981 25.655 29.0567 27.7616C29.3465 27.8469 29.5117 28.1498 29.4263 28.4408C29.3563 28.6803 29.1376 28.8334 28.9013 28.8334Z"
                fill="#4AFF93"
              />
              <path
                d="M17.3776 33.5114C17.2704 33.5114 17.1644 33.4808 17.0692 33.4163C11.9647 29.9327 8.91748 24.2047 8.91748 18.0939C8.91748 13.1425 10.8654 8.48204 14.4048 4.9711C14.6203 4.75563 14.967 4.76 15.1781 4.97329C15.3914 5.18766 15.3892 5.53438 15.1759 5.74657C11.8454 9.05079 10.0112 13.4356 10.0112 18.0939C10.0112 23.8427 12.8801 29.2338 17.6872 32.5128C17.9365 32.6823 18 33.0236 17.8304 33.273C17.7233 33.4283 17.5515 33.5114 17.3776 33.5114Z"
                fill="#4AFF93"
              />
              <path
                d="M18.761 33.5114C18.5871 33.5114 18.4154 33.4283 18.3093 33.273C18.1398 33.0225 18.2032 32.6823 18.4526 32.5128C23.2596 29.2337 26.1285 23.8426 26.1285 18.0939C26.1285 12.3451 23.2596 6.95405 18.4526 3.67499C18.2032 3.50545 18.1398 3.1642 18.3093 2.91483C18.4799 2.66545 18.8212 2.6042 19.0694 2.77155C24.174 6.25514 27.2212 11.9831 27.2212 18.0939C27.2212 24.2047 24.174 29.9326 19.0694 33.4162C18.9754 33.4797 18.8682 33.5114 18.761 33.5114Z"
                fill="#4AFF93"
              />
              <path
                d="M18.0459 33.3484C17.744 33.3484 17.499 33.1034 17.499 32.8016V3.38626C17.499 3.08439 17.744 2.83939 18.0459 2.83939C18.3478 2.83939 18.5928 3.08439 18.5928 3.38626V32.8016C18.5928 33.1045 18.3478 33.3484 18.0459 33.3484Z"
                fill="#4AFF93"
              />
              <path
                d="M33.3006 18.6408H4.979C4.67713 18.6408 4.43213 18.3958 4.43213 18.0939C4.43213 17.792 4.67713 17.547 4.979 17.547H33.3017C33.6035 17.547 33.8485 17.792 33.8485 18.0939C33.8485 18.3958 33.6035 18.6408 33.3006 18.6408Z"
                fill="#4AFF93"
              />
              <path
                d="M18.0459 33.9533C9.30137 33.9533 2.18652 26.8384 2.18652 18.0939C2.18652 14.2428 3.58434 10.5262 6.12402 7.63218C6.32309 7.40468 6.66762 7.38281 6.89621 7.58187C7.12262 7.78093 7.14449 8.12656 6.94652 8.35406C4.58293 11.048 3.28027 14.5075 3.28027 18.0939C3.28027 26.2358 9.90402 32.8595 18.0459 32.8595C26.1878 32.8595 32.8115 26.2358 32.8115 18.0939C32.8115 9.95203 26.1878 3.32828 18.0459 3.32828C14.6793 3.32828 11.5096 4.43078 8.88137 6.51656C8.64512 6.70468 8.30168 6.6664 8.11355 6.42796C7.92543 6.19171 7.9648 5.84828 8.20215 5.66015C11.0251 3.41906 14.4289 2.23453 18.0459 2.23453C26.7904 2.23453 33.9053 9.34937 33.9053 18.0939C33.9053 26.8384 26.7904 33.9533 18.0459 33.9533Z"
                fill="#4AFF93"
              />
            </svg>
            <h1 className="logo-name">
              <span>Web</span> Component
            </h1>
              <ul className='ul-container'>
                <li className='btn-con'>
                  <button className='ul_li-btn'>
                    <Link className='link-nav'>
                      <p className='continer_tx-nav'><span>о</span> проекте</p>
                    </Link>
                  </button>
                </li>
                <li className='btn-con'>
                  <button className='ul_li-btn'>
                    <Link className='link-nav'>
                      <p className='continer_tx-nav'><span>к</span>то мы?</p>
                    </Link>
                  </button>
                </li>
                <li className='btn-con'>
                  <button className='ul_li-btn'>
                    <Link className='link-nav'>
                      <p className='continer_tx-nav'><span>к</span>ак это работает?</p>
                    </Link>
                  </button>
                </li>
              </ul>
          </div>
        </header>
        {/* контейнер с контентом */}
        <div className="container">
          {/* контейнер 1 */}
          <div className="container-in-0">
            {/* текст контейнера */}
            <div className="container-tx-0">
              <h1 className="logo-name name-info">
                <span>Web</span> Component -
              </h1>
              <p className="info-tx-01">
                В этом приложении вы можете <br />
                сделать для своего сайта <br />
                слайдер, шапку, анимации и <br />
                многое другое.
              </p>
            </div>
            {/* фото */}
            <div className="img-tx-info">
              <img src={imgOne} alt="" />
            </div>
          </div>
          <div className="start-content">
            <p className="start-tx">Что бы начать работу нажмите на кнопку</p>
            <Link to="#" className="btn-st-0">
              начать
            </Link>
          </div>
          {/* контейнер 2 */}
          <div className="container-in-0 container-01">
            {/* видео */}
            <div className="img-tx-info controler-img-0">
              <img src={imgTwo} alt="" />
              <video autoPlay loop muted className="video-player">
                <source src={VideoBox} type="video/mp4" />
              </video>
            </div>
            {/* текст контейнера */}
            <div className="container-tx-0 controler-txt-0">
              <h1 className="logo-name name-info">
                У <span>Web</span> Component
              </h1>
              <p className="info-tx-01">
                Простой и поятный интерфейс <br />
                при входе в него вас встретит <br />
                подсказка которая обьяснит <br />
                вам всё.
              </p>
            </div>
          </div>
          {/* контейнер 3 */}
          <div className="container-in-0 controler-in-01">
            {/* текст контейнера */}
            <div className="container-tx-0">
              <h1 className="logo-name name-info controler-txt-01">
                На <span>Web</span> Component
              </h1>
              <p className="info-tx-01">
                Вы можете сразу посмотреть <br />
                готовый код вашего компонента <br />
                или скачать его. <br />
              </p>
            </div>
            {/* фото */}
            <div className="img-tx-info controler-im-0">
              <img src={imgFree} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
