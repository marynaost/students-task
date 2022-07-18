import { useState } from 'react'
import Icon from 'components/Icon'
import s from './Students.module.scss'
export default function ArchivedStudents({
  name,
  id,
  class: group,
  score,
  speed,
  parents,
  cancelArchive,
  index,
}) {
  const [showInfo, setShowInfo] = useState(false)
  const changeCheckbox = () => {}

  const canselArchive = () => {
    cancelArchive(index)
  }

  return (
    <>
      <tr className={s.tr} style={{ background: '#F9F9F9', color: '#C0C0C0' }}>
        <td className={s.td} style={{ paddingLeft: '20px' }}>
          <input
            type="checkbox"
            name="check"
            checked={false}
            onChange={changeCheckbox}
          />
        </td>
        <td className={s.name}>{name}</td>
        <td className={s.td}>{id}</td>
        <td className={s.td}>{group}</td>

        <td className={s.td}>
          <span
            style={{
              color: '#C0C0C0',
            }}
          >
            {score}
          </span>
        </td>
        <td className={s.td}>
          <span
            style={{
              color: '#C0C0C0',
            }}
          >
            {speed}
          </span>
        </td>
        <td className={s.td}>{parents.join(', ')}</td>
        <td className={s.td} style={{ paddingRight: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end ' }}>
            <button type="button" className={s.button} onClick={canselArchive}>
              <Icon
                className={s.icon}
                width="16px"
                height="16px"
                fill="#828282"
                iconName="icon-unarchive"
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
    </>
  )
}
