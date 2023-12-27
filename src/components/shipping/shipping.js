import { useState } from 'react';




function Shipping() {

  const initialFirstName = '';
  const initialLastName = '';
  const initialStreetName = '';
  const initialPostCode = '';
  const initialCityName = '';
  const initialCountryName = '';

  // State variables and their update functions
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [streetName, setStreetName] = useState(initialStreetName);
  const [postCode, setPostCode] = useState(initialPostCode);
  const [cityName, setCityName] = useState(initialCityName);
  const [countryName, setCountryName] = useState(initialCountryName);
  const setfirstName = () => {

  }
  const setlastName = () => {

  }
  const setstreetName = () => {

  }
  const setpostCode = () => {

  }
  const setcityName = () => {

  }
    const setcountryName = () => {

    }
    return(<div className='bg-[transparent] mb-0 mr-16 ml-4 text-[#282828]'>
<p className='font-MontserratSmall text-2xl leading-7  tracking-normal text-left'>Shipping Address</p>
<div className=''>
  <div className='w-289 h-56 border border-solid border-[#A0A0A0] flex   bg-white my-4'>
<input
        type="text"
        placeholder="First Name "
        value={firstName}
        className='bg-[transparent] text-[#282828]'
      />
</div>
<div className='w-289 h-56 border border-solid border-[#A0A0A0] flex  items-center bg-white my-4'>
<input
        type="text"
        placeholder="Last Name "
        value={lastName}
        className='bg-[transparent] text-[#282828]'
      />
</div>
<div className='w-289 h-56 border border-solid font-MontserratSmall flex items-center text-base leading-6 tracking-tight text-left text-custom-color border-[#A0A0A0] bg-white my-4'>
  <input
    type="text"
    placeholder="Street and house number"
    value={streetName}
    className='bg-transparent text-custom-color'
  />
</div>



</div>
<div className='flex'>
<div className='w-145 h-56 mr-4 border border-solid flex items-center border-[#A0A0A0] bg-white my-4'>
<input
        type="text"
        placeholder="PostCode"
        value={postCode}
        className='bg-[transparent]'
      />
</div>
<div className='w-129 h-56 border border-solid flex items-center border-[#A0A0A0] bg-white my-4'>
<input
        type="text"
        placeholder="City "
        value={cityName}
        className='bg-[transparent]'
      />
</div>
</div>
<div className='w-289 h-56 border border-solid flex  border-[#A0A0A0] bg-white my-4'>
<input
        type="text"
        placeholder="Country "
        value={countryName}
        className='bg-[transparent]'
      />
      </div>
    </div>)}
    export default Shipping;