import React, {FunctionComponent} from "react";

const Sign: FunctionComponent=()=>{

    return(
        <div className="form_container my-5 px-4 py-2">


            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                        aria-controls="pills-login" aria-selected="true">Connexion</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                        aria-controls="pills-register" aria-selected="false">Inscription</a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form method="POST" action="">
                    <div className="form-outline mb-4">
                        <input type="email" id="loginName" className="form-control" name="email" required />
                        <label className="form-label" htmlFor="loginName">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="loginPassword" className="form-control" name="password" required />
                        <label className="form-label" htmlFor="loginPassword">Mot de passe</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6 d-flex justify-content-center">
                        <div className="form-check mb-3 mb-md-0">
                            <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked name="remember" />
                            <label className="form-check-label" htmlFor="loginCheck"> Se souvenir de moi </label>
                        </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center">
                        {/* Lien simple */}
                        <a href="#!">Mot de passe oublié ?</a>
                        </div>
                    </div>

                    {/* Bouton de soumission */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">Se connecter</button>

                    {/* Boutons d'inscription */}
                    <div className="text-center">
                        <p>Vous n'avez pas de compte ? <a href="#!">Inscrivez-vous</a></p>
                    </div>
                    </form>
                </div>

                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form method="POST" action="">
                    {/* Champ nom */}
                    <div className="form-outline mb-4">
                        <input type="text" id="registerName" className="form-control" name="full_name" required />
                        <label className="form-label" htmlFor="registerName">Nom & Prénoms</label>
                    </div>

                    {/* Champ nom d'utilisateur */}
                    <div className="form-outline mb-4">
                        <input type="text" id="registerUsername" className="form-control" name="username" required />
                        <label className="form-label" htmlFor="registerUsername">Nom d'utilisateur</label>
                    </div>

                    {/* Champ email */}
                    <div className="form-outline mb-4">
                        <input type="email" id="registerEmail" className="form-control" name="email" required />
                        <label className="form-label" htmlFor="registerEmail">Email</label>
                    </div>

                    {/* Champ mot de passe */}
                    <div className="form-outline mb-4">
                        <input type="password" id="registerPassword" className="form-control" name="password" required />
                        <label className="form-label" htmlFor="registerPassword">Mot de passe</label>
                    </div>

                    {/* Champ répéter le mot de passe */}
                    <div className="form-outline mb-4">
                        <input type="password" id="registerRepeatPassword" className="form-control" name="password_confirmation" required />
                        <label className="form-label" htmlFor="registerRepeatPassword">Répéter le mot de passe</label>
                    </div>

                    {/* Case à cocher */}
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                        aria-describedby="registerCheckHelpText" />
                        <label className="form-check-label" htmlFor="registerCheck">
                        J'ai lu et j'accepte les conditions d'utilisation
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-3">S'inscrire</button>
                    </form>
                </div>
    </div>

            
        </div>
    )
}

export default Sign;