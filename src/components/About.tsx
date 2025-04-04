
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-lg mb-6">
          <span className="text-primary">#</span> About Me
        </h2>
        <div className="space-y-6 text-muted-foreground">
          <p>
            Hello! I'm a passionate web developer with a strong foundation in modern web technologies. 
            My journey in web development started in 2018, and I've been hooked ever since.
          </p>
          <p>
            I focus on creating responsive, accessible, and performant web applications. 
            I enjoy solving complex problems and turning ideas into reality through clean and efficient code.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
            or enjoying the outdoors. I believe in continuous learning and staying updated with the latest industry trends.
          </p>
        </div>
        
        <div className="mt-12">
          <h3 className="heading-md mb-6">My Journey</h3>
          <div className="space-y-8">
            <div className="flex">
              <div className="mr-6">
                <div className="w-1 h-full bg-primary relative">
                  <div className="absolute -left-1.5 top-1 w-4 h-4 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="pb-8">
                <span className="text-primary font-semibold">2022 - Present</span>
                <h4 className="text-xl font-semibold mt-1">Senior Web Developer</h4>
                <p className="text-muted-foreground mt-2">
                  Leading development of responsive web applications using modern technologies.
                  Mentoring junior developers and implementing best practices.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-6">
                <div className="w-1 h-full bg-primary relative">
                  <div className="absolute -left-1.5 top-1 w-4 h-4 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="pb-8">
                <span className="text-primary font-semibold">2020 - 2022</span>
                <h4 className="text-xl font-semibold mt-1">Web Developer</h4>
                <p className="text-muted-foreground mt-2">
                  Developed and maintained multiple client websites and web applications.
                  Collaborated with designers and stakeholders to deliver high-quality products.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-6">
                <div className="w-1 h-full bg-primary relative">
                  <div className="absolute -left-1.5 top-1 w-4 h-4 rounded-full bg-primary"></div>
                </div>
              </div>
              <div>
                <span className="text-primary font-semibold">2018 - 2020</span>
                <h4 className="text-xl font-semibold mt-1">Junior Developer</h4>
                <p className="text-muted-foreground mt-2">
                  Started my career as a junior developer working on frontend projects.
                  Learned the fundamentals of web development and teamwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
