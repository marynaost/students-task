import Filter from 'components/Filter/Filter'
import ExportBtn from 'components/ExportBtn/ExportBtn'
import s from './Headline.module.scss'

export default function Headline({ filter, changeFilter }) {
  return (
    <div className={s.headlineWrap}>
      <h2>Students</h2>
      <Filter search={filter} onChange={changeFilter} />
      <ExportBtn styles={s.active} />
    </div>
  )
}
