import React from 'react'

const Experience = () => {

const experiences = [
 
  {
    designation:'Full Stack Developer',
    company: 'Fission Tech',
    toDate:'Oct 2022',
    fromDate:'Present',
    duties:["As a key member of the Fission Tech team, I actively participate in the development and enhancement of cutting-edge web applications. Leveraging my expertise in ReactJS, AngularJS, WordPress, and NestJS, I collaborate closely with cross-functional teams to deliver high-quality solutions that align with clients' goals and needs.",
  "Develop and maintain responsive and interactive web applications using ReactJS and AngularJS.",
  "Collaborate with design teams to transform wireframes and mockups into seamless user interfaces.",
  "Customize and optimize WordPress websites to ensure exceptional performance and functionality.",
  "Architect and implement server-side applications using NestJS to enhance backend capabilities",
  "Work closely with project managers and clients to understand requirements and provide technical insights.",
  "Stay updated with the latest industry trends and best practices to ensure the incorporation of innovative solutions into projects"
  ],

  },
  {
    designation:'Frontend Developer',
    company: 'Designer Dev',
    toDate:'DEC 2020',
    fromDate:'JULY 2022',
    duties:["Maintained complex technology infrastructure and collaborated with product team to implement new features and strategically plan for future products.","Develop and maintain responsive and interactive web applications using ReactJS and AngularJS.",
  "Used JavaScript, SQL, and HTML to develop app solutions. Consulted with engineering team members to determine system loads and develop improvement point.",
  "Reviewed code, debugged problems and corrected issues.",
  "Developed clear specifications for projects plans using client requirements.",
  "Convert Figma and AdobeXD designs to HTML/Css, React and Nextjs."
  ],

  },
  {
    designation:'Freelance Web Developer',
    company: '',
    toDate:'DEC 2020',
    fromDate:'Present',
    duties:[
     "Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding.",
     "Implemented changes and integrated requested elements to streamline business operations",
     "Coded websites using React JS, Next JS, Gatsby JS, Redux, JavaScript and Typescript. Built and styled new mobile-friendly websites, transitioning legacy presentations to simultaneous easy-to-use versions."
  ],

  },
  {
    designation:'Web Developer Intern',
    company: 'Designer Dev',
    toDate:'JUNE 2020',
    fromDate:'DEC 2020',
    duties:[
     "During my six-month internship at Panacloud, I had the valuable opportunity to gain hands-on experience in web development. Immersed in a dynamic learning environment, I honed my skills in HTML, CSS, JavaScript, and ReactJS while contributing to real-world projects",
     "Collaborated with senior developers to assist in the creation of interactive and user-friendly web applications",
     "Translated design concepts into functional HTML and CSS code, ensuring pixel-perfect implementations.",
     "Developed front-end features using JavaScript, enhancing the user experience and overall functionality"
  ],

  },

]
    return (
        <div id='experience' className='mb-[80px] md:px-20 lg:px-0'>

            <h1 className='mb-4 text-[24px] md:text-[35px] font-bold text-[#46a7c8] text-center lg:text-left'>EXPERIENCE</h1>
            <div className='grid lg:grid-cols-2 gap-8'>
                {experiences.map((el,i)=>{
                    return(

                        <div key={i} className='mb-6'>
                            <h2 className='text-[20px] md:text-[25px]'>{el.designation}</h2>
                            <div className='sm:flex text-[#a4a7b1] mb-6 gap-2'>
                            <p className=''>{el.company}</p>
                            <span className='hidden sm:block'>-</span>
                            <p> {el.toDate} - {el.fromDate}</p>
                            </div>
                            <ul className='list-disc pl-4 text-[#a4a7b1]'>
                            {el.duties.map((ol,i)=>{
                                return(
                                <li key={i}>{ol}</li>
                                )
                            })}
                            </ul>

                        </div>
                    )
                })}

                {/* <div>
                    <h2>Frontend Developer</h2>
                    <p>Designer Dev <span>-</span> DEC 2020 - JULY 2022</p>
                </div> */}

            </div>
        </div>
    )
}

export default Experience