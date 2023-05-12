import Jumbotron from '@/components/Jumbotron'
import Navbar from '@/components/Navbar'
import CardLists from '@/components/CardLists'
import InfoModal from '@/components/InfoModal'
import useInfoModal from '@/hooks/useInfoModal'

const projects = require('@/json/projects')
const skills = require('@/json/skills')
const contact = require('@/json/contact')
const bio = require('@/json/bio')

export default function Home() {
  const { isOpen, closeModal } = useInfoModal()

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Jumbotron bio={bio} />
      <div className='pb-40'>
        <CardLists title='Projects' details={projects} />
        <CardLists title='Skills' details={skills} />
      </div>
    </>
  )
}
