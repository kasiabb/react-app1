import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
const ColumnForm = (props) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <div className={styles.inputContainer}>
        Title:
        <TextInput
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter title...'
        />
        Icon:{' '}
        <TextInput
          type='text'
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder='Enter icon...'
        />
        <Button type='submit' className={styles.Button}>
          Add column
        </Button>
      </div>
    </form>
  );
};
export default ColumnForm;
