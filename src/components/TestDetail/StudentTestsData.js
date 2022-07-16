import s from './TestDetail.module.scss'
export default function StudentTestsData({
  numberList,
  label,
  score,
  speed,
  total,
  expSpeed,
  concept,
  date,
  absent,
}) {
  const onChange = () => {
    console.log('onChange')
  }
  return (
    <tr className={s.tr}>
      <td className={s.td} style={{ color: absent ? '#C0C0C0' : '#777777' }}>
        <span>{numberList}.</span>
      </td>
      <td className={s.td} style={{ color: absent ? '#C0C0C0' : '#777777' }}>
        <span>Finding {label}</span>
      </td>
      <td className={s.td} style={{ color: absent ? '#C0C0C0' : '#777777' }}>
        <span style={{ color: '#4285F4' }}>{score}</span>
      </td>
      <td className={s.td} style={{ color: absent ? '#C0C0C0' : '#777777' }}>
        <span style={{ color: '#DB4437' }}>{speed}</span>
      </td>
      <td className={s.td} style={{ color: absent ? '#C0C0C0' : '#777777' }}>
        <span>{total}</span>
      </td>
      <td className={s.td} style={{ color: absent ? '#C0C0C0' : '#777777' }}>
        <span>{expSpeed}</span>
      </td>
      <td className={s.td} style={{ color: absent ? '#C0C0C0' : '#777777' }}>
        <span>{concept}</span>
      </td>
      <td className={s.td} style={{ color: absent ? '#C0C0C0' : '#777777' }}>
        <span>{date}</span>
      </td>
      <td className={s.td}>
        <input type="checkbox" checked={absent} onChange={onChange} />
      </td>
    </tr>
  )
}
