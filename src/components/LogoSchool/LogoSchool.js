import Icon from '../Icon'
import logo from 'img/logo.png'
import s from './LogoSchool.module.scss'
export default function LogoSchool(params) {
  return (
    <div className={s.logoWrap}>
      <img src={logo} alt="Logo" />
      <div className={s.wrap}>
        <p className={s.text}>School 1</p>
        <Icon
          width="24px"
          height="24px"
          fill=" #777777"
          iconName="icon-arrow_drop_down"
        />
      </div>
    </div>
  )
}
