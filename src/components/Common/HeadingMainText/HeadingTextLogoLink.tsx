import { Link } from 'react-router-dom'
import HeadingMainText from './HeadingMainText'

const HeadingTextLogoLink = (): JSX.Element => {
  return (
    <Link to={'/workspace'}>
      <HeadingMainText />
    </Link>
  )
}

export default HeadingTextLogoLink
