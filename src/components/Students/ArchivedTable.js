import ArchivedStudents from './ArchivedStudents'
import s from './Students.module.scss'
export default function ArchivedTable({ archivedStudents, cancelArchive }) {
  return (
    <>
      <tr
        className={s.tr}
        style={{
          height: '33px',
          boxShadow: 'none',
          background: '#fff',
          borderTop: '2px solid rgb(192, 192, 192)',

          textTransform: 'uppercase',
        }}
      >
        <td colSpan="8" style={{ paddingLeft: '24px', color: '#5B5B5B' }}>
          archived
        </td>
      </tr>
      {archivedStudents.length > 0 &&
        archivedStudents.map((student, idx) => (
          <ArchivedStudents
            key={student.id}
            {...student}
            index={idx}
            cancelArchive={cancelArchive}
          />
        ))}
    </>
  )
}
