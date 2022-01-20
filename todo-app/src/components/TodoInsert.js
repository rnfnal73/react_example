import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
import {useState,useCallback} from 'react';

const TodoInsert = ({onInsert}) => {
    const [value,setValue] = useState('');

    const onChange = useCallback(e=>{
        console.log(value);
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(e=>{
        e.preventDefault();//submit 이벤트는 페이지 새로고침을 하는데 이를 방지해줌
        onInsert(value);
        setValue('');
    },[onInsert,value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세용" onChange={onChange} value={value}/>
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;;