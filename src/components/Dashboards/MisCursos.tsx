import React, {PropsWithRef, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Wrapper from '../Wrapper';

const MisCursos = (props: PropsWithRef<any>) => {
    const [cursos, setCursos] = useState([]);
    // carga de lista de cursos
    useEffect(() => {
        (
            async () => {
                // Consumir API
                const response = await fetch('http://localhost:8000/api/users');

                const data = await response.json();
                console.log(data);
                localStorage.setItem("datodeprueba",'dato');
                setCursos(data);
            }
        )();
    }, []);
    return(
            <Wrapper>
                <main role="main">
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div >
                                <h1 className = "text-center">
                                    Mis Cursos
                                </h1>
                            </div>
                            <div className="row">
                                <div className="col-md-4 p-1">
                                    <div className="card  ">
                                        <div className="card-body ">
                                            <img src="#" height="180" className = "card-img-top"/>
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 p-1">
                                    <div className="card  ">
                                        <div className="card-body ">
                                            <img src="#" height="180" className = "card-img-top"/>
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </Wrapper>
        )
} 
export default MisCursos;