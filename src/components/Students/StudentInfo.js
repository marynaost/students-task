import { useState } from 'react'
import Icon from 'components/Icon'
import TestDetail from 'components/TestDetail/TestDetail'
import s from './Students.module.scss'
export default function StudentInfo({
  name,
  tests,
  id,
  class: group,
  score,
  speed,
  parents,
  checked,
  changeCheckbox,
}) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <>
      <tr className={s.tr}>
        <td className={s.td} style={{ paddingLeft: '20px' }}>
          <input
            type="checkbox"
            name="check"
            checked={checked}
            onChange={changeCheckbox}
          />
        </td>
        <td className={s.name}>{name}</td>
        <td className={s.td}>{id}</td>
        <td className={s.td}>{group}</td>

        <td className={s.td}>
          <span
            style={{
              color:
                score < 50 + '%'
                  ? '#DB4437'
                  : score < 80 + '%'
                  ? '#E2B534'
                  : score < 90 + '%'
                  ? '#0F9D58'
                  : score >= 90 + '%'
                  ? '#4285F4'
                  : ' #828282',
            }}
          >
            {score}
          </span>
        </td>
        <td className={s.td}>
          <span
            style={{
              color:
                speed === 'As Expected'
                  ? '#0F9D58'
                  : speed === 'Above Expected'
                  ? '#4285F4'
                  : speed === 'Below Expected'
                  ? '#DB4437'
                  : ' #828282',
            }}
          >
            {speed}
          </span>
        </td>
        <td className={s.td}>{parents.join(', ')}</td>
        <td className={s.td}>
          <button
            type="button"
            className={s.button}
            onClick={() => setShowInfo(!showInfo)}
          >
            <Icon
              className={s.icon}
              width="24px"
              height="24px"
              fill="#C0C0C0"
              iconName={
                !showInfo ? 'icon-arrow_drop_down' : 'icon-arrow_drop_up'
              }
              //   iconName="icon-arrow_drop_down"
              //   arrow_drop_up
            />
          </button>
        </td>
      </tr>

      {showInfo ? (
        <TestDetail
          score={score}
          speed={speed}
          tests={tests}
          name={name}
          id={id}
        />
      ) : null}
    </>
  )
}
