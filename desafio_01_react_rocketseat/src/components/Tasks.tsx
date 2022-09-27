import styles from './Tasks.module.css'
import clipBoardImg from '../assets/Clipboard.svg'
import { TaskList } from './TaskList'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'



export interface taskProps {
  id: number;
  content: string;
  isComplete?: boolean;
}

export function Tasks(){

  const[taskList, setTaskList] = useState<taskProps[]>([])

  const [newTaskText, setNewTaskText] = useState('');

  const quantTasks = taskList.length
  const quantCompletedTasks = taskList.filter((task) => task.isComplete==true).length


  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
    const newTask=([
      ...taskList,
       {
        id: Math.floor(Math.random() * 100),
        content: newTaskText,
        isComplete: false,
    },/*pega as tarefas que ja tem e adiciona a nova*/
    ]);
    setTaskList(newTask);
    setNewTaskText(''); /*voltando o valor inicial do campo de texto da tarefa para vazio*/
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value)
  }

  function deleteTask(id:number){
    const tasksWihoutDeletedOne = taskList.filter(task =>{
      return task.id !== id;
    })
    setTaskList(tasksWihoutDeletedOne);
  }

  function concludeTask(id:number){
    const completedTasks = taskList.map(task => {
      if(task.id === id){
        return {
          ...task,
          isComplete: !task.isComplete
        };
      }
      return task
    })
    setTaskList(completedTasks)
  }
  

  const isNewTaskEmpty= newTaskText.length === 0;

  return(
    <article>
      <section>
            <form onSubmit={handleCreateNewTask} className={styles.newtask}>

              <input 
              name="taskText"
              value={newTaskText}
              placeholder='Add a new task'
              onChange={handleNewTaskChange}
              required/>
              <button type='submit' disabled={isNewTaskEmpty}>
                Criar
                <PlusCircle/>
                </button>

            </form>    
          </section>     
        
        <section className={styles.taskContainer}>     

          <header className={styles.headerTask}>
            <div className={styles.createdTasks}>
              <strong>Created Tasks</strong>
              <span>{quantTasks}</span>
            </div>
            <div className={styles.concludeTasks}>
              <strong>Conclude</strong>
              <span>{quantCompletedTasks} de {quantTasks}</span>
            </div>
          </header>   

            {taskList.length ===0? 
            <div className={styles.taskList}>
              <img src={clipBoardImg} alt="clipboardImage" />
              <div className={styles.taskListText}>
                <strong>You don't have tasks registered yet</strong>
                <span>Create tasks and organize your to-do-list</span>
            </div>
          </div>:''}
            
          <div>
              {
                taskList.map(task => {
                  return(
                    <TaskList
                      onDeletedTask={deleteTask}
                      onConcludeTask={concludeTask}
                      isComplete={task.isComplete}
                      id={task.id}
                      content={task.content}
                      />
                  );
                })
              }
              
            </div>
        </section>
    
    </article>
  )
}