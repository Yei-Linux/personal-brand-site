import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap-trial/MotionPathPlugin';
import { useEffect } from 'react';

export const useScrollytelling = () => {
  const draw = (el: any) => {
    let tl = gsap.timeline({ paused: true });
    tl.to(el, {
      drawSVG: true,
      duration: 0.5,
    })
      .to(
        `${el}-2`,
        {
          drawSVG: '100% 100%',
          duration: 0.5,
        },
        '<'
      )
      .to(
        '.line-circle',
        {
          duration: 0.5,
          motionPath: {
            path: el,
            align: el,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
        },
        '<'
      )
      .set(`${el}-2`, {
        autoAlpha: 0,
      });
    return tl;
  };

  const handleInit = () => {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
    gsap.set(['.home-container', '#line-svg'], { autoAlpha: 1 });
    gsap.set(
      [
        '#catedral-fill',
        '#pirulo-fill',
        '#arc-fill',
        '#wella-fill',
        '#sagrada-fill',
      ],
      { autoAlpha: 0 }
    );

    const linesBase = gsap.utils.toArray('#base path');
    const linesrunning = gsap.utils.toArray('#running path');
    gsap.set([linesBase, linesrunning], { drawSVG: '0% 0%' });
    gsap.set(['.logo', 'h1', '.start'], { y: 40 });

    gsap.to(['.logo', 'h1', '.start', '.border'], {
      autoAlpha: 1,
      y: 0,
      stagger: 0.1,
      ease: 'power2.inOut',
    });

    const texts = ['.text-1', '.text-2', '.text-3', '.text-4', '.text-5'];
    texts.forEach((text) => {
      ScrollTrigger.create({
        trigger: text,
        start: 'top 50%',
        toggleActions: 'play reverse play reverse',
        animation: gsap.from(text, {
          autoAlpha: 0,
          y: 70,
          duration: 1,
          ease: 'sine.out',
        }),
      });
    });

    ScrollTrigger.create({
      trigger: '#base #line-1',
      scrub: true,
      start: 'top 50%',
      end: 'bottom center',
      // markers: { startColor: "pink", endColor: "pink" },
      fastScrollEnd: true,
      onEnter: () =>
        gsap.to(['#sagrada-fill'], {
          autoAlpha: 1,
          stagger: 0.01,
          duration: 2,
        }),
      onEnterBack: () =>
        gsap.to(['#sagrada-fill'], {
          autoAlpha: 0,
          stagger: 0.01,
          duration: 2,
        }),
      animation: draw('#line-1'),
    });

    ScrollTrigger.create({
      trigger: '#base #line-2',
      scrub: true,
      start: 'top+=42.5% 50%',
      end: 'bottom center',
      //markers: {startColor: "yellow", endColor: "yellow"},
      fastScrollEnd: true,
      onEnter: () =>
        gsap.to(['#wella-fill'], {
          autoAlpha: 1,
          stagger: 0.01,
          duration: 1,
        }),
      onEnterBack: () =>
        gsap.to(['#wella-fill'], {
          autoAlpha: 0,
          stagger: 0.01,
          duration: 1,
        }),
      animation: draw('#line-2'),
    });
  };

  useEffect(() => {
    handleInit();
  }, []);

  return {};
};
