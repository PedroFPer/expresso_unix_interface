import { Link } from 'react-router-dom'
import SideBar from "../../../common-components/pagina-modelo/Components/SideBar";
import { useState } from 'react';
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
            
            <main>
                <div className='title-support'>
                    <h1>Suport</h1>
                </div>

                <div>
                    <div className='question-layout' >
                        <p className='title-question'>Primeira Pergunta</p>

                        <button className='button-question' onClick={
                            () => setQuestionOneIsClicked(!QuestionOneIsClicked)}>{QuestionOneIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                        </button>
                    </div>
                    {QuestionOneIsClicked ? (


                        <div className='text-question'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>  

                    ):( <p ></p> )}
                </div>
                <div>
                    <div className='question-layout' >
                        <p className='title-question'>Segunda Pergunta</p>

                        <button className='button-question' onClick={
                            () => setQuestionTwoIsClicked(!QuestionTwoIsClicked)}>{QuestionTwoIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                        </button>
                    </div>
                    {QuestionTwoIsClicked ? (


                        <div className='text-question'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>  

                    ):( <p></p> )}
                </div>

                <div>
                    <div className='question-layout' >
                        <p className='title-question'>Terceira Pergunta</p>

                        <button className='button-question' onClick={
                            () => setQuestionTreeIsClicked(!QuestionTreeIsClicked)}>{QuestionTreeIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                        </button>
                    </div>
                    {QuestionTreeIsClicked ? (


                        <div className='text-question'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>  

                    ):( <p></p> )}
                </div>
                <div>
                    <div className='question-layout' >
                        <p className='title-question'>Quarta Pergunta</p>

                        <button className='button-question' onClick={
                            () => setQuestionFourIsClicked(!QuestionFourIsClicked)}>{QuestionFourIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                        </button>
                    </div>
                    {QuestionFourIsClicked ? (


                        <div className='text-question'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>  

                    ):( <p></p> )}
                </div>
                <div>
                    <div  className='question-layout' >
                        <p className='title-question'>Quinta Pergunta</p>

                        <button className='button-question'  onClick={
                            () => setQuestionFiveIsClicked(!QuestionFiveIsClicked)}>{QuestionFiveIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                        </button>
                    </div>
                    {QuestionFiveIsClicked ? (


                        <div className='text-question'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>  

                    ):( <p></p> )}
                </div>
                <div>
                    <div className='question-layout' >
                        <p className='title-question'>Sexta Pergunta</p>

                        <button className='button-question' onClick={
                            () => setQuestionSixIsClicked(!QuestionSixIsClicked)}>{QuestionSixIsClicked?(<i class="bi bi-caret-up"></i>):(<i class="bi bi-caret-down"></i>)}
                        </button>
                    </div>
                    {QuestionSixIsClicked ? (


                        <div className='text-question'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>  

                    ):( <p></p> )}
                </div>

                    
                
                 

            </main>

            <footer>
                <div>
                    <p>Não encontrou o que buscava ?</p>
                    <p>Então entre em contato com conosco atráves de nossos canais de atendimentos</p>
                </div>
                <div>

                </div>
            </footer>
            
        </div>
    )
}
export default AdminstratorSupport;