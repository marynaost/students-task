import { CSVLink } from 'react-csv'
import Icon from 'components/Icon'
import s from '../SelectedStudent/SelectedStudent.module.scss'

const headers = [
  { label: 'Name', key: 'name' },
  { label: 'Class', key: 'class' },
  { label: 'ID', key: 'id' },
  { label: 'Score', key: 'score' },
  { label: 'Speed', key: 'speed' },
]
export default function ExportBtn({ selectStudents = [], styles }) {
  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: selectStudents,
  }

  return (
    <>
      <button type="button" className={`${s.button} ${styles}`}>
        <CSVLink {...csvReport} separator={'   '}>
          <Icon
            className={s.icon}
            width="16px"
            height="16px"
            fill="inherid"
            iconName="icon-upload"
          />
          export csv
        </CSVLink>
      </button>
    </>
  )
}
