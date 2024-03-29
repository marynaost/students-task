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
  toggleSelectStudent,
  selected = false,
  index,
}) {
  const [showInfo, setShowInfo] = useState(false)

  const changeCheckbox = () => {
    toggleSelectStudent(index, !selected)
  }

  return (
    <>
      <tr
        className={s.tr}
        style={{
          background: selected && '#F2F2F2',
          border: selected && '1px solid #C0C0C0',
        }}
      >
        <td className={s.td} style={{ paddingLeft: '20px' }}>
          <input
            type="checkbox"
            name="check"
            checked={selected}
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
        <td className={s.td} style={{ paddingRight: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end ' }}>
            <button
              type="button"
              className={s.button}
              onClick={() => setShowInfo(!showInfo)}
            >
              <Icon
                className={s.icon}
                width="16px"
                height="16px"
                fill="#828282"
                iconName="icon-create"
              />
            </button>
            <button
              type="button"
              className={s.button}
              onClick={() => setShowInfo(!showInfo)}
            >
              <Icon
                className={s.icon}
                width="16px"
                height="16px"
                fill="#828282"
                iconName="icon-trending_up"
              />
            </button>

            <button
              type="button"
              className={s.button}
              style={{
                background: 'transparent',
              }}
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
              />
            </button>
          </div>
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
