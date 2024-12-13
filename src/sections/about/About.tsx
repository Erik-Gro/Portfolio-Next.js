"use client";

import { useState } from 'react';
import Button from '@/shared/components/button.tsx/Button';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText('erik.gro@proton.me');
      setHasCopied(true);

      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/SuperDeveloper.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
              width={500} 
              height={276} 
            />
            <div>
              <p className="grid-headtext">I’m Eric Gro</p>
              <p className="grid-subtext">
              I’m a passionate developer who loves crafting responsive, visually appealing UIs and developing secure, scalable backends.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/mohammad-rahmani-unsplash.jpg"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
              width={500}
              height={276}
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              I work with a variety of programming languages and frameworks, with a strong focus on JavaScript, Python, and C#. I enjoy using these tools to build powerful and easy-to-maintain applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Kassel, Germany', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Kassel, Germany.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
              width={500}
              height={266}
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              I thrive on solving challenges and creating innovative solutions through code. Programming is not just my career; it’s my true passion. I actively explore new technologies to continually enhance my skills
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <Image
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              width={500}
              height={276}
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <Image
                  src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt="copy"
                  width={24} 
                  height={24} 
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Erik.Gro@proton.me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
