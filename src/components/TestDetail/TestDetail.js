import Icon from 'components/Icon'
import TestTable from './TestTable'
import s from './TestDetail.module.scss'
export default function TestDetail({ name, id, tests, score, speed }) {
  return (
    <tr className={s.tr}>
      <td colSpan="8">
        <div className={s.wrap}>
          <div className={s.infoWrap}>
            <p style={{ marginRight: '15px' }}>
              Student: <b>{name}</b>
            </p>
            <p>
              ID: <b>{id}</b>
            </p>
          </div>
          <div className={s.filterWrap}>
            <ul className={s.list}>
              <li className={s.item}>
                <button className={s.button}>
                  All concepts
                  <Icon
                    className={s.icon}
                    width="20px"
                    height="20px"
                    fill="#C0C0C0"
                    iconName="icon-arrow_drop_down"
                  />
                </button>
              </li>
              <li className={s.item}>
                <button className={s.button}>
                  All score
                  <Icon
                    className={s.icon}
                    width="20px"
                    height="20px"
                    fill="#C0C0C0"
                    iconName="icon-arrow_drop_down"
                  />
                </button>
              </li>
              <li className={s.item}>
                <button className={s.button}>
                  All speed
                  <Icon
                    className={s.icon}
                    width="20px"
                    height="20px"
                    fill="#C0C0C0"
                    iconName="icon-arrow_drop_down"
                  />
                </button>
              </li>
            </ul>
            <div className={s.periodWrap}>
              <p className={s.text}>Selected period</p>
              <Icon
                width="16px"
                height="16px"
                fill="#C0C0C0"
                iconName="icon-calendar"
              />
            </div>
            <div className={s.updateIcon}>
              <Icon
                width="16px"
                height="16px"
                fill="#C0C0C0"
                iconName="icon-cached"
              />
            </div>
          </div>
          <div className={s.listWrap}>
            <ul className={s.scoreList}>
              <li>Score</li>
              <li className={s.scoreItemBlue}>90%+ accuracy</li>
              <li className={s.scoreItemGreen}>80 - 89% accuracy</li>
              <li className={s.scoreItemYellow}>50 - 79% accuracy</li>
              <li className={s.scoreItemOrange}>below 50% accuracy</li>
            </ul>
            <ul className={s.speedList}>
              <li>Speed</li>
              <li className={s.speedItemBlue}>above expected</li>
              <li className={s.speedItemGreen}>as expected</li>
              <li className={s.speedItemOrange}>below expected</li>
            </ul>
          </div>
          <TestTable tests={tests} score={score} speed={speed} />
        </div>
      </td>
    </tr>
  )
}
