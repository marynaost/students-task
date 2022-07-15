// import { useSelector, useDispatch } from 'react-redux'
// import { getFilter } from '../../redux/contacts/contacts-selectors'
// import { changeFilter } from 'redux/contacts/contacts-actions'
import Icon from 'components/Icon'
import s from './Filter.module.scss'

export default function Filter({ search, onChange }) {
  // const value = useSelector(getFilter)
  // const dispatch = useDispatch()

  return (
    <div className={s.filterWrap}>
      {/* <label className={s.label}> */}
      <input
        className={s.input}
        type="text"
        name="name"
        placeholder="Enter Student Name, Parent or ID here"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={search}
        // value={value}
        // onChange={e => dispatch(changeFilter(e.target.value))}
        onChange={onChange}
      />
      {/* </label> */}
      <Icon
        className={s.icon}
        width="16px"
        height="16px"
        fill="#C0C0C0"
        iconName="icon-search"
      />
    </div>
  )
}
