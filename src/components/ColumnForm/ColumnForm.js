import { useState } from 'react';
import styles from './ColumnForm.module.scss';
const ColumnForm = (props) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: value });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <div className={styles.inputContainer}>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
        />
        <button type='submit' className={styles.button}>
          Add column
        </button>
      </div>
    </form>
  );
};
export default ColumnForm;
