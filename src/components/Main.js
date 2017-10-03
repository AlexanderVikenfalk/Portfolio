import React from 'react'

export default function Main() {
return (
    <main id="info">
        <div className="container mainBorder">
        <div className="row mainText">
            <div className="col-xs-1 col-md-6">
                <h1>Hi There!</h1>
                <p>I'm a Swedish frontend and backend student living in Berlin that loves coding and creative processes.
                <span className='bold'> Currently looking for an intership within frontend web development!</span> 
                </p>
              
                <p>Please don't hesitate to contact me if you have any leads or if there's anything more you would like to know! </p>
            </div>
            <div className="col-xs-1 col-md-4 skills">
         
                <h1>What I Use </h1>
                <ul className="fa-ul ">
                <li>
                        <i className="fa-li fa fa-laptop"></i>
                        <span className="bold">Mobile first and responsive design</span>
                    </li>
                    <li>
                    
                        <i className="fa-li fa fa-paint-brush"></i>
                        <span className="bold">Web Design</span>
                        <ul className="fa-ul">
                            <li>
                                <i className="fa-li fa fa-html5"></i>
                                HTML5 and CSS3 
                            </li>
                        </ul>
                    </li>
                   
                    <li>
                        <i className="fa-li fa fa-wrench"></i>
                        <span className="bold">Front-End</span>  
                        <ul className="fa-ul">
                            <li>
                                <i className="fa-li fa fa-code"></i>
                                React+Redux 
                            </li>
                            <li>
                                <i className="fa-li fa fa-code"></i>
                                JavaScript & Jquery
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i className="fa-li fa fa-wrench"></i>
                        <span className="bold">Back-End</span>
                        <ul className="fa-ul">
                            <li>
                                <i className="fa-li fa fa-code"></i>
                                C# /.NET
                            </li>
                            <li>
                                <i className="fa-li fa fa-code"></i>
                                Node
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="col-xs-1 col-md-2 middle align-middle ">
            <h1 className='hideOnSmall'> Contact </h1>   
            <ul className="social-icons ">
                    <li><a href="https://de.linkedin.com/in/alexander-vikenfalk-6b993b42" className="social-icon "> <i className="fa fa-linkedin fa-3x"></i></a></li>
                    <li><a href="https://github.com/AlexanderVikenfalk" className="social-icon"> <i className="fa fa-github fa-3x"></i></a></li>
                    <li><a href="mailto:alexander.wikenfalk@gmail.com" className="social-icon"> <i className="fa fa-envelope fa-3x"></i></a></li>                    
                </ul>
            </div>
        </div> 
        </div>    
    </main>
    )

}