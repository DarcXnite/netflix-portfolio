import Jumbotron from '@/components/Jumbotron'
import Navbar from '@/components/Navbar'
import CardLists from '@/components/CardLists'

const projects = require('@/json/projects')
const skills = require('@/json/skills')
const contact = require('@/json/contact')

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className='pb-40'>
        <CardLists title='Projects' details={projects} />
        <CardLists title='Skills' details={skills} />
      </div>
    </>
  )
}
