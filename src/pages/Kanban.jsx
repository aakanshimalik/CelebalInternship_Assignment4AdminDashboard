import React from "react";
import {KanbanComponent , ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-kanban';

import {kanbanData, kanbanGrid} from '../data/dummy';
import { Header } from "../components";

const Kanban = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl bg-no-repeat bg-cover bg-center"  style={{backgroundImage: "url('https://img.freepik.com/premium-vector/realistic-colorful-blank-paper-sheets-light-grey-board-kanban-taskboard-agile-scrum-management_208581-120.jpg')"}}>
           <Header category="App" title="Kanban" />
           <KanbanComponent
           id="kanban"
           dataSource={kanbanData}
           cardSettings={{ contentField: 'Summary', headerField: 'Id'}}
           keyField="Status"
           >
            <ColumnsDirective>
              {kanbanGrid.map((item, index) => 
               <ColumnDirective key={index} {...item}/>
            )}
            </ColumnsDirective>
            </KanbanComponent>
        </div>
    )
}

export default Kanban;