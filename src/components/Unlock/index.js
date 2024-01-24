import {useState} from 'react'

import {
  UnlockContainer,
  ImgContainer,
  Heading,
  Image,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [unLock, setUnlock] = useState(false)


  const imgUrl = unLock ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png' : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = unLock ?  'unlock' : 'lock'
  const text = unLock ?  "Your Device is Unlocked" : "Your Device is Locked"
  const buttonText = unLock ? "lock" : "unlock" 

  const clickUnlock = () => setUnlock(prevState => !prevState)

  return (
    <UnlockContainer>
      <ImgContainer>
        <Image src={imgUrl} alt={altText}></Image>
        <Heading>{text}</Heading>
      </ImgContainer>
      <Button type="button" onClick={clickUnlock}>{buttonText}</Button>
    </UnlockContainer>
  )
}
export default Unlock
