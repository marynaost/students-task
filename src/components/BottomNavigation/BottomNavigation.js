import { Data } from './Data'
import Icon from 'components/Icon'
import s from './BottomNavigation.module.scss'

export default function BottomNavigation(params) {
  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        {Data.map(data => (
          <li className={s.item} key={data.value}>
            <button className={s.button}>
              {data.value}
              <Icon
                className={s.icon}
                width="20px"
                height="20px"
                fill="#C0C0C0"
                iconName="icon-arrow_drop_down"
              />
            </button>
          </li>
        ))}
        <li className={s.item}>
          <button className={s.buttonClear}>
            <Icon
              className={s.iconClear}
              width="16px"
              height="16px"
              fill="#C0C0C0"
              iconName="icon-clear"
            />
            clear all
          </button>
        </li>
      </ul>
    </div>
  )
}
