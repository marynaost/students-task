import userIcon from '../../img/user-icon.jpg'
import s from './UserIcon.module.scss'
import Icon from 'components/Icon'

export default function UserIcon(params) {
  return (
    <div className={s.iconWrap}>
      <img className={s.icon} src={userIcon} alt="User icon" />
      <Icon
        width="24px"
        height="24px"
        fill=" #777777"
        iconName="icon-arrow_drop_down"
      />
    </div>
  )
}
