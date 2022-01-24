import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { fadeInUp, stagger, routeAnimation } from '../animations';

export default function Home() {
  return (
    <motion.div className='flex flex-col flex-grow px-6 pt-1' variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <h5 className='my-3 font-medium'>I describe my self as someone who is persistent, a quick learner and loves problem solving by using simple, efficient and scalable solutions.</h5>

      <div className='flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-100' style={{ margin: '0 -1.5rem' }}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>

        <motion.div className='grid gap-6 lg:grid-cols-2 lg:grid-rows-3' variants={stagger} initial="initial" animate="animate">
          {
            services.map(service => (
              <motion.div key={service.title} variants={fadeInUp} className='bg-gray-300 rounded-lg dark:bg-dark-200 lg:col-span-1'>
                <ServiceCard service={service} />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}
