import React, { Component } from 'react';


class ResetPassword extends Component{
    render(){
        return(
            <>
            <>
                <div>
                    <span className="icon icon-chevron-left text-left"></span>
                    <span className="text-left">Regresar</span>
                </div>
            </>

            <div className="container-fluid">
                <div className="row justify-content-center ">

                <h4 className="text-center mt-4">
                    <span className="icon-padlock"></span>
                </h4>    

                <form className="mt-2 mb-5"
                style={{
                    width: "80%"
                }}>

                    <div className="form-group row">
                        <div className="col-2 pr-0">
                            <span className="icon icon-user"
                            style={{
                                textAlign: "center"
                            }}></span>
                        </div>

                        <div className="col-10 pl-0">
                            <input type="email" className="form-control" 
                            placeholder="Nombre y apellido" />
                        </div>                        
                    </div>

                    <div className="form-group row">
                        <div className="col-2 pr-0">
                            <span className="icon icon-padlock"
                            style={{
                                textAlign: "center"
                            }}></span>
                        </div>

                        <div className="col-10 pl-0">
                            <input type="password" className="form-control" 
                            placeholder="Nombre de usuario" />
                        </div>                        
                    </div>

                    <div className="form-group row">
                        <div className="col-2 pr-0">
                            <span className="icon icon-padlock"
                            style={{
                                textAlign: "center"
                            }}></span>
                        </div>

                        <div className="col-10 pl-0">
                            <input type="password" className="form-control" 
                            placeholder="Correo electrónico" />
                        </div>                        
                    </div>

                    <div className="form-group row">
                        <div className="col-2 pr-0">
                            <span className="icon icon-user"
                            style={{
                                textAlign: "center"
                            }}></span>
                        </div>

                        <div className="col-10 pl-0">
                            <input type="email" className="form-control" 
                            placeholder="Nombre y apellido" />
                        </div>                        
                    </div>

                    <div className="form-group row">
                        <div className="col-2 pr-0">
                            <span className="icon icon-user"
                            style={{
                                textAlign: "center"
                            }}></span>
                        </div>

                        <div className="col-10 pl-0">
                            <input type="email" className="form-control" 
                            placeholder="Nombre y apellido" />
                        </div>                        
                    </div>
                    

                    

                    <button type="button" 
                    className="btn btn-block btn-primary mt-4"
                    style={{
                        height: "48px",
                        textTransform: "uppercase",
                        fontWeight: "bold"
                    }}
                    >
                        Crear
                    </button>


                    
                </form>      
                </div>
            </div>
            </>
        )
    }
}

export default ResetPassword;