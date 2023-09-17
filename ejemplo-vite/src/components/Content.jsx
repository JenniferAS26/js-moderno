import banner from '../assets/images/banner.png'
import '../styles/Content.scss'

const Content = () => {
  return (
    <div className='content-container'>
      <div className='content-container__image-container'>
        <img src={banner} alt='banner image' />
      </div>
      <article className='content-container__article'>
        <h2 className='content-container__article--title'>The leader in interactive vr</h2>
        <p className='content-container__article--text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fugiat non culpa quisquam sed officia dignissimos. Odit, fuga. Obcaecati incidunt placeat provident et nemo aspernatur iure cumque minima laboriosam doloribus.</p>
      </article>
    </div>
  )
}

export default Content