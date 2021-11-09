import React, {useState, useEffect} from 'react'
import {Link }  from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { Input, Box , IconButton} from "@chakra-ui/react";
import { EditIcon, CloseIcon, CheckIcon } from '@chakra-ui/icons'


export default function ReadArticle() {
    const navigate = useNavigate();
    const [isContentInEditMode, setContentStatus] = useState(false) 
    const [isTitleInEditMode, setTitleStatus] = useState(false)
    const [bodyArticle, setBodyArticle] = useState("El contenidooo")
    const [titleArticle, setTitleArticle] = useState("El tituloo")

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
    // Edit feature Functions:
    function changeEditTitleMode (){ setTitleStatus(isTitleInEditMode => !isTitleInEditMode) }
    function changeEditContentMode () { setContentStatus(isContentInEditMode => !isContentInEditMode) }
    function updateContentValue () { setContentStatus(false) }
    function updateTitleValue () { setTitleStatus(false) }
    
    function renderEditContentView (){
        return (
            <React.Fragment>
                <Input
                    onChange={e => setBodyArticle(e.target.value)}
                    type="text"
                    defaultValue={bodyArticle}
                    useRef="TheContentInput"
                />
                <div className="buttons-edit-list">
                    <button className="btn btn-secondary" onClick={changeEditContentMode}>Cancelar <CloseIcon w={6} h={6} /></button>
                    <button className="btn btn-success" onClick={updateContentValue}>Guardar <CheckIcon w={6} h={6} /></button>
                </div>
            </React.Fragment>
        )
    }
    function renderEditTitleView (){
        return (
            <React.Fragment>
                <Input
                    onChange={e => setTitleArticle(e.target.value)}
                    type="text"
                    defaultValue={titleArticle}
                    useRef="TheTitleInput"
                />
                <div className="buttons-edit-list">
                    <button className="btn btn-secondary" onClick={changeEditTitleMode}>Cancelar <CloseIcon w={6} h={6} /></button>
                    <button className="btn btn-success" onClick={updateTitleValue}>Guardar <CheckIcon w={6} h={6} /></button>
                </div>
            </React.Fragment>
        )
    }
    function renderDefaultContentView (){
        return (
            <div className="list-non-edit">
                <h2>{bodyArticle}</h2>
                <button onClick={changeEditContentMode}><EditIcon w={6} h={6} /></button>
            </div>
        )
    }
    function renderDefaultTitleView (){
        return (
            <div className="list-non-edit">
                <h2>{titleArticle}</h2>
                <button onClick={changeEditTitleMode}><EditIcon w={6} h={6}/></button>
            </div>
        )
    }

    return (
        <div>

            <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                {isTitleInEditMode ? renderEditTitleView() : renderDefaultTitleView() }  
                {isContentInEditMode ? renderEditContentView() : renderDefaultContentView()}
    

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