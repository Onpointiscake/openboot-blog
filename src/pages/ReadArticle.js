import React, {useState, useEffect} from 'react'
import {Link }  from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { Grid, GridItem, Box , IconButton} from "@chakra-ui/react";

export default function ReadArticle() {
    const navigate = useNavigate();
    const [isContentInEditMode, setContentStatus] = useState(false) 
    const [isTitleInEditMode, setTitleStatus] = useState(false)
    const [bodyArticle, setBodyArticle] = useState("El contenidooo")
    const [titleArticle, setTitleArticle] = useState("El tituloo")

    function editArticle() {
        console.log('intentando editar articulo')
    }

    function deleteArticle() {

        if (window.confirm('¿Estás seguro que quieres borrar esta Lista?')) {
            /*
            axios.delete(`/api/article/${id_lista}`)
                .then(() => console.log('lista eliminada'))
                .catch((err) => console.log(err))
            */
            alert('El artículo ha sido borrado. Ahora podrás crear una nueva')
            // Go back to Index page:
            navigate('/')

        } else {
            console.log('anulada operacion')
        }

    }
    function changeEditTitleMode (){
        console.log('should go to edit mode now')
        setTitleStatus()
    }
    function changeEditContentMode (){
        console.log('should go to edit mode now')
        setContentStatus(!setContentStatus)
    }
    function updateContentValue () {
        setContentStatus(false)
        setBodyArticle("probando nueva funcionalidad")
            
    }
    function updateTitleValue () {
        setTitleStatus(false)
        setTitleArticle("probando nueva funcionalidad")
    }
    function renderEditContentView (){
        return (
            <React.Fragment>
                <input
                    type="text"
                    defaultValue={bodyArticle}
                    useRef="TheTextInput"
                />
                <div className="buttons-edit-list">
                    <button className="btn btn-secondary" onClick={changeEditContentMode}>CANCELAR content</button>
                    <button className="btn btn-success" onClick={updateContentValue}>GUARDAR</button>
                </div>
            </React.Fragment>
        )
    }
    function renderEditTitleView (){
        return (
            <React.Fragment>
                <input
                    type="text"
                    defaultValue={titleArticle}
                    useRef="TheTextInput"
                />
                <div className="buttons-edit-list">
                    <button className="btn btn-secondary" onClick={changeEditTitleMode}>CANCELAR</button>
                    <button className="btn btn-success" onClick={updateTitleValue}>GUARDAR</button>
                </div>
            </React.Fragment>
        )
    }
    function renderDefaultContentView (){
        return (
            <div className="list-non-edit">
                <h2>{bodyArticle}</h2>
                <IconButton onClick={changeEditContentMode} size="lg"/>
            </div>
        )
    }
    function renderDefaultTitleView (){
        return (
            <div className="list-non-edit">
                <h2>{titleArticle}</h2>
                <IconButton onClick={changeEditTitleMode} size="lg" />
            </div>
        )
    }

    return (
        <div>

            <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <h1>The Title of the Article</h1>
            {isContentInEditMode ? renderEditContentView() : renderDefaultContentView()}
            <button onClick={editArticle}> EDIT </button>

            <hr />
            <div>
                <p>Share Icons</p>
            </div>
            <hr />

            <div>
                <button onClick={deleteArticle}>DELETE</button>
            </div>

            <hr />
            <Link to="/"> <button>Go HOME</button> </Link>
            </Box>
            
        </div>
    )
}