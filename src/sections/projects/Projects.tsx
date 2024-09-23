"use client"
import { Suspense, memo, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { useTrail, animated } from '@react-spring/web'; 
import { myProjects } from './vars/data';
import CanvasLoader from '@/shared/loaders/CanvasLoader';
import DemoComputer from './components/DemoComputer';
import Image from 'next/image'; 

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [direction, setDirection] = useState(''); 

  const handleNavigation = (direction:string) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  const [trail, api] = useTrail(3, () => ({
    opacity: 1,
    config: { duration: 1000 },
    from: { opacity: 0 }
  }));

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    api.start({
      opacity: 1,
      from: { opacity: 0 },
      reset: true
    });
  }, [selectedProjectIndex]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">My Selected Work
      <span style={{ display: 'inline-block', transform: 'rotate(-5deg)', color: 'white' }}>
        (Unfinished)
      </span>
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <Image
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
              width={500}
              height={384} 
            />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <Image
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
              width={40} 
              height={40} 
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <animated.p style={trail[0]} className="text-white text-2xl font-semibold">{currentProject.title}</animated.p>
            <animated.p style={trail[1]}>{currentProject.desc}</animated.p>
            <animated.p style={trail[2]}>{currentProject.subdesc}</animated.p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
           <Image
  src={tag.path.startsWith('/') ? tag.path : `/${tag.path}`}
  alt={tag.name}
  width={40}
  height={40}
/>
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <Image
                src="/assets/arrow-up.png"
                alt="arrow"
                className="w-3 h-3"
                width={12} 
                height={12} 
              />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => {
                setDirection('previous');
                handleNavigation(direction);
            }}>
              <Image
                src="/assets/left-arrow.png"
                alt="left arrow"
                width={24} 
                height={24} 
              />
            </button>

            <button className="arrow-btn" onClick={() => {
                setDirection('next');
                handleNavigation(direction);
            }}>
              <Image
                src="/assets/right-arrow.png"
                alt="right arrow"
                width={24} 
                height={24} 
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} direction={direction}/>
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);

