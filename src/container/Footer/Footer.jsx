import React from 'react';

import {images} from "../../constants";
import {AppWrap, MotionWrap} from "../../wrapper";

import './Footer.scss';
import {HiChevronRight} from "react-icons/hi";

import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Footer() {
  const list = [
    {
      name: 'Overflow Season',
      desc: 'And so, a forbidden bathing experience began. Me, my sister, and childhood friend—one man and two women—are sharing one bath. After involuntarily "overflowing," the sister\'s secret love comes out?!',
      img: 'https://git-covers.pages.dev/images/overflow-season-1-cv2.png',
      link: 'https://hanime.tv/videos/hentai/overflow-season-1',
    },
    {
      name: 'Ane wa Yanmama Junyuu-chuu',
      desc: 'After some difficulties with her scumbag husband, his sister ended up moving back into their family home with her youngest child. She had a habit of letting her tits out everywhere and eventually one night while both of them were drunk he made his move',
      img: 'https://git-covers.pages.dev/images/ane-wa-yanmama-junyuu-chuu-1-cv1.png',
      link: 'https://hanime.tv/videos/hentai/ane-wa-yanmama-junyuu-chuu-1',
    },
    {
      name: 'Garden: Takamine-ke no Nirinka',
      desc: 'With their Mom away on a business trip, the sisters make their move...',
      img: 'https://cdn.statically.io/img/akidoo.top/f=auto,q=100/images/covers/garden-takamine-ke-no-nirinka-1-cv1.png',
      link: 'https://hanime.tv/videos/hentai/garden-takamine-ke-no-nirinka-1',
    },
    {
      name: 'Akane wa Tsumare Somerareru',
      desc: 'The manager of the baseball club, loved by the players... and also loves one of the players. However, she has caught the eye of some of the higher ups and just might be in over her head.',
      img: 'https://cdn.statically.io/img/akidoo.top/f=auto,q=100/images/covers/akane-wa-tsumare-somerareru-1-cv1.png',
      link: 'https://hanime.tv/videos/hentai/akane-wa-tsumare-somerareru-1',
    },
    {
      name: 'Mako-chan Kaihatsu Nikki',
      desc: 'After being confessed to, her heart is aflutter. She can\'t calm down and has to go relieve herself in her room. Her older brother moved in a while back and comes into her room "Hey I know what you\'ve been doing in here..."',
      img: 'https://cdn.statically.io/img/ba.alphafish.top/f=auto,q=100/images/covers/mako-chan-kaihatsu-nikki-1-cv1.png',
      link: 'https://hanime.tv/videos/hentai/mako-chan-kaihatsu-nikki-1',
    },
    {
      name: 'Chizuru-chan Kaihatsu Nikki',
      desc: 'A serious honor student "Chizuru Shiina" was shunned by her classmates due to her being a teacher\'s pet, but none of that mattered whenever she ran into her favorite teacher that she so deeply admired...',
      img: 'https://cdn.statically.io/img/ba.alphafish.top/f=auto,q=100/images/covers/chizuru-chan-kaihatsu-nikki-1-cv2.png',
      link: 'https://hanime.tv/videos/hentai/chizuru-chan-kaihatsu-nikki-1',
    },
    {
      name: 'Kyonyuu Onna Senshi Dogeza Saimin',
      desc: 'An arena where the strongest in the world compete. A man at the very bottom of the ranking has been pitied by the universe and granted the power of hyponosis...',
      img: 'https://cdn.statically.io/img/akidoo.top/f=auto,q=100/images/covers/kyonyuu-onna-senshi-dogeza-saimin-1-cv2.png',
      link: 'https://hanime.tv/videos/hentai/kyonyuu-onna-senshi-dogeza-saimin-1',
    },
    {
      name: 'Saimin Seishidou',
      desc: 'The main character, Tanaka Hajime, uses his hypnosis abilities to hypnotize his classmates. Due to a law passed by the government, instructions given by sex instructors are absolute. Additionally, couples have to receive instruction from the instructors before having sex or even kissing.',
      img: 'https://git-covers.pages.dev/images/saimin-seishidou-2.png',
      link: 'https://hanime.tv/videos/hentai/saimin-seishidou-2',
    },
    {
      name: 'Ajisai no Chiru Koro ni',
      desc: 'Yuuta Yamano and Shinomiya Natsuha are dating. But it seems that he has no idea that she is hiding a secret relationship that gives her more satisfaction than dating him',
      img: 'https://git-covers.pages.dev/images/ajisai-no-chiru-koro-ni-1-cv1.png',
      link: 'https://hanime.tv/videos/hentai/ajisai-no-chiru-koro-ni-1',
    },
    {
      name: 'Master Piece',
      desc: 'Widow and mother to twin daughters. Her hobby these days is seducing her son-in-law. A MILF weak to kisses. The elder of the twins. Her following at school is so large that she has a fanclub, but is a bit shy. The younger of the twins, she is chairman of a committee. She is very established, but is slow when it comes to romance. She is actually a scaredy-cat and likes cute things.',
      img: 'https://git-covers.pages.dev/images/master-piece-1-cv1.png',
      link: 'https://hanime.tv/videos/hentai/master-piece-1',
    },
    {
      name: 'Netosis',
      desc: '"I love you!" He tells his big sis, the girl at his school who helps with his studies and stays with him while his parents are away. A friend tells him about a certain website and who else does he find on there with everything hanging out getting completely used like a piece of meat?',
      img: 'https://cdn.statically.io/img/ba.alphafish.top/f=auto,q=100/images/covers/netosis-1-cv1.png',
      link: 'https://hanime.tv/videos/hentai/netosis-1',
    },
    {
      name: 'Imouto Bitch ni Shiboraretai',
      desc: 'One day, our protagonist returns home to find a strange hole in the wall separating his room from his younger sister’s. He peeks through and sees Sayaka masturbating. The next day, he musters his courage, faces the hole in the wall, and sticks his penis through. Sayaka pretends it’s a mushroom and starts to lick it. Sayaka, who struggles to show her honest feelings to her brother, has her deepest desires fulfilled thanks to the hole in the wall. They have sex, she gets creampied…',
      img: 'https://git-covers.pages.dev/images/imouto-bitch-ni-shiboraretai-2-zqcaoBGjMB.jpg',
      link: 'https://hanime.tv/videos/hentai/imouto-bitch-ni-shiboraretai-2',
    },
    {
      name: 'Netokano',
      desc: 'Childhood friends and lovers, promising each other to be together. She is a track and field star who pushes extremely hard to get a recommendation to the same school as her lover. Unfortunately it looks like the ugly bastard of a track and field coach has been NTR\'ing the fuck out of her, utterly destroying their dreams.',
      img: 'https://cdn.statically.io/img/ba.alphafish.top/f=auto,q=100/images/covers/netokano-1-cv1.png',
      link: 'https://hanime.tv/videos/hentai/netokano-1',
    },
    {
      name: 'Ijirare: Fukushuu Saimin',
      desc: 'Everything and everyone is just a toy to her. Playthings for her to use or destroy. This sad lonely fat kid is no different than an ant on the sidewalk to her... and after she found him sniffing panties in the restroom, she is never going to let him hear the end of it.',
      img: 'https://git-covers.pages.dev/images/ijirare-fukushuu-saimin-1-cv1.png',
      link: 'https://hanime.tv/videos/hentai/ijirare-fukushuu-saimin-1',
    },
    {
      name: 'Yarichin Kateikyoushi Netori Houkoku: Dosukebe Kyonyuu Oyakodon',
      desc: 'Alpha MC gets hired to NTR an ugly bastard\'s super hot, big-tittied family!',
      img: 'https://git-covers.pages.dev/images/yarichin-kateikyoushi-netori-houkoku-dosukebe-kyonyuu-oyakodon-1-cv2b.png',
      link: 'https://hanime.tv/videos/hentai/yarichin-kateikyoushi-netori-houkoku-dosukebe-kyonyuu-oyakodon-1',
    },
    {
      name: 'Mankitsu Happening',
      desc: 'A guy gets fired from his job again. He reluctantly decides to work with a friend at a manga shop – with two lovely female co-workers. This situation just happens to play out in four different sex scenes in the first episode alone! Yep, shit happens. Good shit.',
      img: 'https://git-covers.pages.dev/images/mankitsu-happening-1.jpg',
      link: 'https://hanime.tv/videos/hentai/mankitsu-happening-1',
    },
    {
      name: 'Muttsuri Do Sukebe',
      desc: 'Takashi Komiya, our leading character who lives with his blonde bombshell foreign mother and his sisters, decides he wants a piece of all of them. Starting with his sisters, one who does lewd cam-shows online, easily blackmailed. The other fucks strangers in a club...all he had to do was show up. Soon enough he has his sisters as his personal harem, but what happens when someone is caught watching their fun?',
      img: 'https://git-covers.pages.dev/images/muttsuri-do-sukebe-1.jpg',
      link: 'https://hanime.tv/videos/hentai/muttsuri-do-sukebe-1',
    },
    {
      name: 'Baku Ane Otouto Shibocchau zo!',
      desc: 'A soccer player returns to his parents’ house after training in another city for a few months and getting injured in the process. Luckily, he has four older sisters waiting for him back home, aching to bring him back to full form however they can!',
      img: 'https://git-covers.pages.dev/images/baku-ane-otouto-shibocchau-zo-the-animation-1-cv2.png',
      link: 'https://hanime.tv/videos/hentai/baku-ane-otouto-shibocchau-zo-the-animation-1',
    },
    {
      name: 'Mayohiga no Onee-san The Animation',
      desc: '"Mayohiga": An illusionary house that bestows wealth upon lost travelers, Unlike houses in the mysterious and slightly eerie stories of legend, in this modern retelling, Mayohiga is a cafe staffed by beautiful Onee-san. However, unchanged from the tales of old, Mayohiga appears only to a chosen few, and those who enter are thoroughly "engulfed in pleasure". These lewd yet gentle Onee-san await your patronage! ♪ ♪ ♪',
      img: 'https://git-covers.pages.dev/images/mayohiga-no-onee-san-the-animation-1-JVlXhvSQJA.jpg',
      link: 'https://hanime.tv/videos/hentai/mayohiga-no-onee-san-the-animation-1',
    },
  ]

  return (
    <>
      <h2 className="head-text">Take a rest buddy</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email"/>
          <a href="mailto:hello@micael.com" className="p-text">askhatorazaliev@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile"/>
          <a href="tel:+7 (705) 575-21-44" className="p-text">+7 (705) 575-21-44</a>
        </div>
      </div>

      <>
        {list.length && (
          <Splide
            hasTrack={false}
            aria-label="My Favorite Images"
            options={{
              rewind: true,
              gap: '1rem',
              type: 'loop',
            }}
            className="slider"
          >
            <SplideTrack>
              {list.map((item) => (
                <SplideSlide className="slider__item" key={item.name}>
                  <img src={item.img}/>

                  <div className="slider__info">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                    <button onClick={() => window.open(item.link, '_blank')}>Open</button>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="splide__arrows slider__arrows">
              <button className="splide__arrow splide__arrow--prev slider__arrow slider__arrow--prev">
                <HiChevronRight />
              </button>
              <button className="splide__arrow splide__arrow--next slider__arrow slider__arrow--next">
                <HiChevronRight />
              </button>
            </div>

            <ul className="splide__pagination slider__pagination"></ul>
          </Splide>
        )}
      </>
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__primarybg"
);