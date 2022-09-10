import React from 'react';
import s from './Dialogs.module.css'
import { Link } from 'react-router-dom';

const Dialogs = (props) => {

    return (<div>

        <div className={s.dialogs}>
            <div className={s.dialogsUsers}>
                <div>
                    <Link to=''>Kostya</Link>
                </div>
                <div>
                    <Link to=''> Viktor</Link>
                </div>
                <div>
                    <Link to=''> Elena</Link>
                </div>
            </div>
            <div className='s.messages'>
                <div>Message1</div>
                <div>Message2</div>
                <div>Message3</div>

            </div>
        </div>

    </div>)


}

export default Dialogs;