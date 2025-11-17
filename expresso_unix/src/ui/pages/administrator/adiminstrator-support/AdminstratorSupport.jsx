import { Link } from 'react-router-dom'
import { useState } from 'react';
import SideBar from "../../../common-components/pagina-modelo/Components/SideBar";
import "./styles/AdminstratorSupport.css";

function AdminstratorSupport(){
const[QuestionOneIsClicked, setQuestionOneIsClicked] = useState(false);
const[QuestionTwoIsClicked, setQuestionTwoIsClicked] = useState(false);
const[QuestionTreeIsClicked, setQuestionTreeIsClicked] = useState(false);
const[QuestionFourIsClicked, setQuestionFourIsClicked] = useState(false);
const[QuestionFiveIsClicked, setQuestionFiveIsClicked] = useState(false);
const[QuestionSixIsClicked, setQuestionSixIsClicked] = useState(false);


    return(
        <div className="grid-geral">
            <SideBar/>
            
            <div>
                <main>
                    <div className='title-support'>
                        <h1>Suporte</h1>
                    </div>

                    <p className='text-faq'>Perguntas Frequentes</p>

                    <div>
                        <div className='question-layout' >
                            <p className='title-question'>Pergunta Aleatoria 1</p>

                            <button className='button-question' onClick={
                                () => setQuestionOneIsClicked(!QuestionOneIsClicked)}>{QuestionOneIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                            </button>
                        </div>
                        {QuestionOneIsClicked ? (


                            <div className='text-question'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>  

                        ):( <p ></p> )}
                    </div>
                    <div>
                        <div className='question-layout' >
                            <p className='title-question'>Pergunta Aleatoria 2</p>

                            <button className='button-question' onClick={
                                () => setQuestionTwoIsClicked(!QuestionTwoIsClicked)}>{QuestionTwoIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                            </button>
                        </div>
                        {QuestionTwoIsClicked ? (


                            <div className='text-question'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div> 

                        ):( <p></p> )}
                    </div>

                    <div>
                        <div className='question-layout' >
                            <p className='title-question'>Pergunta Aleatoria 3</p>

                            <button className='button-question' onClick={
                                () => setQuestionTreeIsClicked(!QuestionTreeIsClicked)}>{QuestionTreeIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                            </button>
                        </div>
                        {QuestionTreeIsClicked ? (


                            <div className='text-question'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>  

                        ):( <p></p> )}
                    </div>
                    <div>
                        <div className='question-layout' >
                            <p className='title-question'>Pergunta Aleatoria 4</p>

                            <button className='button-question' onClick={
                                () => setQuestionFourIsClicked(!QuestionFourIsClicked)}>{QuestionFourIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                            </button>
                        </div>
                        {QuestionFourIsClicked ? (


                            <div className='text-question'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div> 

                        ):( <p></p> )}
                    </div>
                    <div>
                        <div  className='question-layout' >
                            <p className='title-question'>Pergunta Aleatoria 5</p>

                            <button className='button-question'  onClick={
                                () => setQuestionFiveIsClicked(!QuestionFiveIsClicked)}>{QuestionFiveIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                            </button>
                        </div>
                        {QuestionFiveIsClicked ? (


                            <div className='text-question'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>   

                        ):( <p></p> )}
                    </div>
                    <div>
                        <div className='question-layout' >
                            <p className='title-question'>Pergunta Aleatoria 6</p>

                            <button className='button-question' onClick={
                                () => setQuestionSixIsClicked(!QuestionSixIsClicked)}>{QuestionSixIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                            </button>
                        </div>
                        {QuestionSixIsClicked ? (


                            <div className='text-question'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>  

                        ):( <p></p> )}
                    </div>

                        
                    
                    

                </main>

                <footer>
                    <div className='text-footer'>
                        <p className='text-find'>Não encontrou o que buscava ?</p>
                        <p className='text-channel'>Então entre em contato com conosco <br />
                             atráves de nossos canais de atendimentos
                        </p>
                    </div>
                    <div className='layout-icon-text'>
                        <div className='whatsapp-text'>
                            <i class="bi bi-whatsapp"></i>
                            <p>75983588878</p>
                        </div>
                        <div className='email-text'>
                            <i class="bi bi-envelope"></i>
                            <p>ExpressoUnixSuporte@gmail.com</p>
                        </div>

                    </div>
                </footer>
            </div>
            
        </div>
    )
}
export default AdminstratorSupport;