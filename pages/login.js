import Image from "next/image"
import Button from "../components/Button"
import BG from '../public/login-bg.svg'
const Login = ({props}) => {
  return(
    <div className="">
      <div>Login page</div>
      <Button name='Login' size="lg"/>
      <Image src={BG} layout="fill" objectFit='cover' priority alt='bg image'/>
    </div>
  )
}
export default Login