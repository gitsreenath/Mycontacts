import React from 'react'
import Form_add from '../Components/Form_add'
import {useForm} from 'react-hook-form'


const Home = () => {

  return (
    <div className='container   '>
      <div className='row justify-content-center'>
        < div className='col-lg-5 shadow p-2 mt-4'>
<Form_add/>

</div>
</div>
    </div>
  )
}

export default Home