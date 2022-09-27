import styles from './TaskList.module.css';
import {Check, Trash} from 'phosphor-react';
import { taskProps } from './Tasks';

interface taskListProps extends taskProps{
  
  onDeletedTask: (id:number) => void;
  onConcludeTask: (id:number) => void;
 
}

export function TaskList({content, onDeletedTask, id, onConcludeTask, isComplete}:taskListProps){

 function handleDeleteTask(){
  onDeletedTask(id);
 }
 function handleCompletedTask(){
  onConcludeTask(id)
 }

  return(
    
    <div className={styles.listContainer}> 
      <ul>
        <li className={styles.listContainer__item}>

            <div className={styles.checkTask}>
              <button className={styles.listContainer__checkCircle} onClick={handleCompletedTask}>
                  {isComplete? <Check className={styles.checked}/> : <div className={styles.unchecked}/>}
              </button>

                    <p className={isComplete? styles.completed:''}>
                      {content}
                    </p>
            </div>
              
              <button className={styles.listContainer__Trash} onClick={handleDeleteTask}>
              <Trash size={20}/>
              </button>
              
        </li>
      </ul>
  </div>
  )
}


