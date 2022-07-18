import Icon from 'components/Icon'
import ExportBtn from 'components/ExportBtn/ExportBtn'
import s from './SelectedStudent.module.scss'
export default function SelectedStudent({
  selectStudents,
  cancelSelected,
  toggleArchivedStudent,
}) {
  return (
    <div className={s.selectedWrap}>
      <div className={s.container}>
        <p>
          {selectStudents.length}{' '}
          {selectStudents.length === 1 ? 'student' : 'students'} selected
        </p>
        <div style={{ display: 'flex' }}>
          <button type="button" className={s.button} onClick={cancelSelected}>
            <Icon
              className={s.icon}
              width="16px"
              height="16px"
              fill="#FFFFFF"
              iconName="icon-clear"
            />
            cancel selection
          </button>
          <ExportBtn selectStudents={selectStudents} />

          <button
            style={{ color: '#424242' }}
            type="button"
            className={s.button}
            onClick={() => {
              toggleArchivedStudent(selectStudents)
            }}
          >
            <Icon
              className={s.icon}
              width="16px"
              height="16px"
              fill="#424242"
              iconName="icon-archive"
            />
            archive selected
          </button>
        </div>
      </div>
    </div>
  )
}
