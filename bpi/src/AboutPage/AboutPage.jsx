import React from 'react'
import Navigation from '../components/Navigation'
import DeveloperCard from '../components/DeveloperCard.jsx'
import circle from '../assets/circle.png'
import image_1 from '../assets/Richard.png'
import image_2 from '../assets/Angelo.png'
import image_3 from '../assets/Roent.png'
import image_4 from '../assets/Nathaniel.png'

const AboutPage = () => {
  return (
    
    <div className='parent w-full'>
    <Navigation/>
    <div className='max-w-7xl m-auto'>
      <div className='flex max-w-7xl flex-wrap pt-52'>
        <div className='w-7/12 grid gap-3'>
          <h2 className=''>About Project SOL</h2>
          <h1 className='text-4xl font-semibold mb-2'>Empowering MSMEs with Localized Generative AI Solutions</h1>
          <p className='text-sm max-w-2xl text-white/50 '>Welcome to Project SOL, a transformative initiative developed to empower Micro, Small, and Medium Enterprises (MSMEs) with cutting-edge AI solutions tailored to their unique needs. Our mission is to make data-driven decision-making accessible and effective for MSMEs, ensuring they remain competitive in an evolving digital landscape.</p>
        </div>
        <div className='w-5/12'>
          <img src="" alt="" />
        </div>
      </div>

      <div className='max-w-2xl text-center m-auto my-96'>
          <h1 className='text-header font-semibold py-4'>Our Mission</h1>
          <p className='text-xl'>To enable MSMEs to unlock their full potential by providing AI-powered tools that deliver actionable insights, foster growth, and improve decision-making processes.</p>
      </div>
      
      <div className=''>
      <h2 className='text-4xl  my-20 font-semibold' >Core Features of <br /> Project SOL</h2>
        <div className='Card flex justify-center gap-10 font-light flex-wrap'>

          <div className='h-feature-card-height w-feature-card-width border px-9 py-10 rounded-2xl flex-col gap-5 flex'>
            <h3 className='text-2xl font-semibold'>Localized AI <br /> Solutions</h3>
            <p className='text-sm'>By leveraging Llama 3.2, a state-of-the-art language model, Project SOL operates as a locally deployed AI assistant. This ensures data security, privacy, and cost-effectiveness, eliminating reliance on external companies or cloud-based infrastructure.</p>
          </div>

          <div className='h-feature-card-height w-feature-card-width border px-9 py-10 rounded-2xl flex-col gap-5 flex'>
            <h3 className='text-2xl font-semibold'>Tailored for <br />MSMEs</h3>
            <p className='text-sm'>Project SOL is fine-tuned with MSME-specific data to address challenges in areas such as:</p>

              <div className='circle-container py-5'>

                <div className='flex items-center gap-3'>
                  <div className='rounded-full w-3 h-3 bg-gray-400'></div>
                  <element class="italic text-lg text-gray-200">Sales Forecasting</element>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='rounded-full w-3 h-3 bg-gray-400'></div>
                  <element class="italic text-lg text-gray-200">Customer Targeting</element>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='rounded-full w-3 h-3 bg-gray-400'></div>
                  <element class="italic text-lg text-gray-200">Inventory Optimization</element>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='rounded-full w-3 h-3 bg-gray-400'></div>
                  <element class="italic text-lg text-gray-200">Financial Management</element>
                </div>


              </div>

          </div>
          <div className='h-feature-card-height w-feature-card-width border px-9 py-10 rounded-2xl flex-col gap-5 flex '>
            <h3 className='text-2xl font-semibold '>Automated Database <br /> Query Assistant</h3>
            <p className='text-sm'>By leveraging Llama 3.2, a state-of-the-art language model, Project SOL operates as a locally deployed AI assistant. This ensures data security, privacy, and cost-effectiveness, eliminating reliance on external companies or cloud-based infrastructure.</p>
          </div>
        </div>
      </div>

      <div className='w-full mb-20'>
        <div className='py-20'>
          <h2 className='text-4xl font-semibold'>About the Team</h2>
          <p className='py-2'>Project SOL is brought to life by a passionate group of innovators from Team Sol:</p>
        </div>

        <div className='flex flex-wrap gap-2'>
            <DeveloperCard name="Richard Parado" position="Front-end Developer" image={image_1} quotes="The frontend is where ideas meet reality and where users fall in love with experiences." github="https://github.com/RichardPharads" gmail="richard05parado@gmail.com
" linkedIn="https://www.linkedin.com/in/richard-parado-8a508b32b/"/>
            <DeveloperCard name="Angelo Egwaras" position="Project Manager" image={image_2} quotes="An AI engineer doesn’t just build models; they teach machines to think, learn, and evolve." github="https://github.com/tenshi33
https://www.linkedin.com/in/angelo-egwaras/" gmail="angeloegwaras@gmail.com" linkedIn="https://www.linkedin.com/in/angelo-egwaras/"/>
            <DeveloperCard name="Roent Traballo" position="Ai Engineer" image={image_3} quotes="A great project manager builds bridges between ideas and execution, guiding teams to success." github="https://github.com/TFG-Patatas" gmail="roent09@outlook.com" linkedIn="https://www.linkedin.com/in/roentgen-traballo-7ab196338"/>  
            <DeveloperCard name="Nathaniel Hernandez" position="Full-Stack Developer" image={image_4} quotes="A great backend is like the foundation of a skyscraper—unseen but critical to holding everything together." github="https://github.com/Noirakumaaa" gmail="hernandezlnathaniel@gmail.com" linkedIn="https://www.linkedin.com/in/hernandezlnathaniel"/>
            
        </div>
      </div>

    </div>
    
    <div className="absolute flex items-center justify-center max-w-72 rounded-full top-14 left-10">
          <img
            className="animate-spin-slow object-fill rounded-full blur-3xl bg-gradient-to-bl from-glow-primary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge opacity-20"
            src={circle}
            alt="Circle Gradient Rotating"
          />
    </div>

    <div className="absolute flex items-center justify-center max-w-lg rounded-full -right-10 -bottom-20">
          <img
            className="animate-spin-slow object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge opacity-20"
            src={circle}
            alt="circle Gradient Rotating"
          />
    </div>
      
    </div>
  )
}

export default AboutPage