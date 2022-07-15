import Filter from 'components/Filter/Filter'
import Icon from 'components/Icon'
import s from './Headline.module.scss'
export default function Headline({ filter, changeFilter }) {
  return (
    <div className={s.headlineWrap}>
      <h2>Students</h2>
      <Filter search={filter} onChange={changeFilter} />
      <button type="button" className={s.button}>
        <Icon
          className={s.icon}
          width="16px"
          height="16px"
          fill="#C0C0C0"
          iconName="icon-upload"
        />
        Export CSV
      </button>
    </div>
  )
}
