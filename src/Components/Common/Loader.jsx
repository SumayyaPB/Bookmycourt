import './Loader.css'
import loadingIcon from '@/assets/loading.svg'

const Loader = () => {
  return (
    <div>
      <div className="spinner-container">
         <img src={loadingIcon} alt="Loader-gif" className='loader-gif'/>
      </div>
    </div>
  )
}

export default Loader
