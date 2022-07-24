import React, {useState} from 'react';
import {motion} from "framer-motion";

import {AppWrap} from '../../wrapper';

import {images} from "../../constants";

import './Header.scss';

import audioS from '../../assets/audio.mp3';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

function Header() {
  const [modal, setModal] = useState(false);
  const [sakura, setSakura] = useState(false);
  const [audio] = useState(new Audio(audioS));

  const showModal = () => {
    setModal(true);
  }

  const showSakura = () => {
    setSakura(true);
    audio.play();
    setModal(false);
  }

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <img src={images.uchiha} alt="uchiha logo"/>
            <div style={{marginLeft: 20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Sasuke</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Konoha shadow hokage</p>
            <p className="p-text">Freelancer</p>
          </div>

          {
            !sakura ?
              <button className="app__header-btn" onClick={showModal}>
                Quick test <br/>
                <span>(not for posers)</span>
              </button>
              :
              <img
                src={images.sakura}
                alt="Hot sakura"
                style={{
                  width: 400,
                  marginTop: 50,
                }}
              />
          }
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <motion.img
          src={images.profile} alt="profile_bg"
          whileInView={{x: [-200, 0], opacity: [0, 1]}}
          transition={{duration: 1}}
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.sharingan1, images.rinnengan, images.sharingan2].map((circle, index) => (
          <motion.div
            className="circle-cmp app__flex"
            key={`circle-${index}`}
            whileInView={{rotate: 720}}
            transition={{duration: 2}}
          >
            <img src={circle} alt="circle"/>
          </motion.div>
        ))}
      </motion.div>

      {
        modal ? <div className="app__header-modal header-modal">
          <div className="header-modal__box">
            <h4>Who wins?</h4>

            <div className="header-modal__buttons">
              <button onClick={() => {
                window.open('https://memchik.ru/images/mems/5c8a3cffd196d.jpg', '_blank');
              }
              }>Naruto
              </button>
              <button onClick={showSakura}>Sasuke</button>
            </div>
          </div>
        </div> : null
      }
    </div>
  );
}

export default AppWrap(Header, 'home');