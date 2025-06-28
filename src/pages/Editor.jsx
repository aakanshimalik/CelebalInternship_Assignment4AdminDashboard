import React from "react";
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent,Toolbar } from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from '../contexts/ContextProvider';

const Editor = () => {
     const { currentMode } = useStateContext();
    return (
       <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  bg-cover bg-center" style={{backgroundImage: "url('https://as1.ftcdn.net/jpg/06/54/65/86/1000_F_654658649_E0aZl5AjvWJkVgabkNe5Xn5kog4moHIG.webp')"}}>
            <Header category="App" title="Editor" className="bg-white dark:bg-secondary-dark-bg" />
            <RichTextEditorComponent>
                  <EditorData />

                <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
            </RichTextEditorComponent>

        </div>
    )
}

export default Editor;