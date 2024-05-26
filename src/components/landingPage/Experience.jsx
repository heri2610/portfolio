import React from 'react'
import { Timeline, Flowbite  } from "flowbite-react";
import { MdOutlineWorkHistory } from "react-icons/md";

const customTheme = {
  timeline:{
    item: {
      point: {
        marker: {
          icon: {
            base: "h-3 w-3 text-primary dark:text-primary",
            wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-slate-100 dark:bg-cyan-900 dark:ring-gray-900"
          }
        },
      }
    }
  }
};

const Experience = () => {
  return (
    <div className='bg-slate-100 pt-36 pb-32 dark:bg-dark'>
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Experience</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Work Experience</h2>
          </div>
        </div>
        <Flowbite theme={{ theme: customTheme }}>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point icon={MdOutlineWorkHistory}/>
              <Timeline.Content>
                <Timeline.Time>October 2023 - March 2023</Timeline.Time>
                <Timeline.Title>Sofware Enginer <span className='text-primary'>@Platon</span></Timeline.Title>
                <Timeline.Body>
                  Responsible for end-to-end development of web and mobile applications across diverse industries, ensuring security, performance, and scalability. Manages frontend slicing, collaborates closely with clients to meet specifications, delivers progress presentations, and offers ongoing technical support and maintenance, including updates and issue resolution.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point  icon={MdOutlineWorkHistory}/>
              <Timeline.Content>
                <Timeline.Time>January 2023 - October 2023</Timeline.Time>
                <Timeline.Title>Sofware Enginer <span className='text-primary'>@Platon</span></Timeline.Title>
                <Timeline.Body>
                  Collaborates with product managers via Google Meet to discuss project requirements, executes assigned tasks including slicing, integration, and database setup using technologies like Next.js, Prisma ORM, React.js, and others. Works independently to meet deadlines, communicates regularly with clients for updates and feedback, ensuring high-quality results aligned with client expectations.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point  icon={MdOutlineWorkHistory}/>
              <Timeline.Content>
                <Timeline.Time>August 2023 - October 2023</Timeline.Time>
                <Timeline.Title>Full Stack Developer <span className='text-primary'>@PT Okta Prima Mulya</span></Timeline.Title>
                <Timeline.Body>
                  Created a comprehensive e-commerce platform incorporating auctions, concierge services, buying/selling, and item requests. Utilized Next.js and Tailwind CSS for frontend design, MongoDB for database schemas, and Express.js for backend support. Integrated RabbitMQ and Socket.io for real-time notifications, Stripe for payment processing, and Node Mailer for user communications.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point  icon={MdOutlineWorkHistory}/>
              <Timeline.Content>
                <Timeline.Time>March 2022 - January 2023</Timeline.Time>
                <Timeline.Title> Web DeveloperWeb Developer <span className='text-primary'>@Freelance</span></Timeline.Title>
                <Timeline.Body>
                  Developed applications for Ngawi District Agriculture Department with Express, React, PostgreSQL, Socket.io, Swagger. Created pharmacist admin dashboard using CodeIgniter 4, Tailwind CSS, MySQL. Engaged in slicing, integration, API utilization with HTML, jQuery, Ajax, Bootstrap.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </Flowbite>
      </div>
    </div>
  )
}

export default Experience

