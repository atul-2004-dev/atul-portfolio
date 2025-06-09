import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

import profile_icon from '../../assets/profile_icon.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Atul
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Web Developer',
                'Fullstack Developer',
                'Frontend Developer',
                'Web Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-white sm:text-lg md:text-lg  mb-10 mt-8 leading-relaxed text-justify md:ml-4">
            I'm Atul, a dedicated full-stack developer with a strong command of the MERN stack — React.js, Node.js, Express, and MongoDB. I specialize in building modern, scalable, and high-performance web applications with a focus on clean code and intuitive user experiences. My strength lies in both front-end and back-end development, ensuring seamless functionality across the stack. I stay up to date with the latest industry trends and technologies to deliver impactful digital solutions. I thrive in collaborative environments and enjoy turning innovative ideas into reality.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1lleo5g9lzjzbnLyDp4aHbH6QExlvuSvQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-end">
          <Tilt
            className="w-48 h-48 sm:w-52 sm:h-52 md:w-64 md:h-64 border-4 border-purple-700 rounded-full ml-auto"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profile_icon}
              alt="Atul"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
