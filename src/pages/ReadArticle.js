import React, {useState, useEffect} from 'react'

import {Link }  from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";

import { Input, Box } from "@chakra-ui/react";
import { EditIcon, CloseIcon, CheckIcon } from '@chakra-ui/icons'

import axios from 'axios';


export default function ReadArticle() {
    const navigate = useNavigate();
    const { id_articulo } = useParams();

    const [isContentInEditMode, setContentStatus] = useState(false) 
    const [isTitleInEditMode, setTitleStatus] = useState(false)
    const [bodyArticle, setBodyArticle] = useState("El contenidooo")
    const [titleArticle, setTitleArticle] = useState("El tituloo")

    const [article, setArticle] = useState([]);
    useEffect(() => getArticle(), []);
  
    const getArticle = async () => {
      const articleResponse = await fetch("https://notion-sinsecurity.herokuapp.com/api/articulos/mostrar/" + parseInt(id_articulo));
      const data = await articleResponse.json();
      setArticle(data);

      setTitleArticle(data.titulo)
      setBodyArticle(data.contenido)
    };

    function deleteArticle() {

        if (window.confirm('¿Estás seguro que quieres borrar este artículo?')) {
            
            axios.delete("https://notion-sinsecurity.herokuapp.com/api/articulos/eliminar/" + parseInt(id_articulo))
                .then(() => console.log('articulo eliminado'))
                .catch((err) => console.log(err))
            
            alert('El artículo ha sido borrado. Ahora podrás crear uno nuevo')
            // Go back to Index page:
            navigate('/')

        } else { console.log('anulada operacion') }

    }
    // Edit feature Functions:
    function changeEditTitleMode (){ setTitleStatus(isTitleInEditMode => !isTitleInEditMode) }
    function changeEditContentMode () { setContentStatus(isContentInEditMode => !isContentInEditMode) }

    function updateContentValue () { 
        setContentStatus(false) 
   
        axios.put('https://notion-sinsecurity.herokuapp.com/api/articulos/modificar', { 
            id: parseInt(id_articulo),
            contenido: bodyArticle
        }).then(() => console.log("Se ha editado correctamente el titulo"))
          .catch(error => console.error(error))

    }
    function updateTitleValue (e) { 
        setTitleStatus(false) 
        console.log(id_articulo, titleArticle)
        axios.put('https://notion-sinsecurity.herokuapp.com/api/articulos/modificar', { 
            id: id_articulo,
            titulo: titleArticle
        }).then(() => console.log("Se ha editado correctamente el titulo"))
          .catch(error => console.error(error))

    }
    
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
            <h2>Estás viendo el artículo número {id_articulo}</h2>
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