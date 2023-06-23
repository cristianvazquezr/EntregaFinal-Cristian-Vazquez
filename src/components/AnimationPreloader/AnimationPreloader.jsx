import "./AnimationPreloader.scss"
import logo from '../images/Logo-loader.png';

function AnimationPreloader(){
    return (
        <>
            <div className="scene">
                <div className="cube-wrapper">
                    <div className="cube">
                    <div className="cube-faces">
                        <div className="cube-face shadow"></div>
                        <div className="cube-face bottom"></div>
                        <div className="cube-face top"></div>
                        <div className="cube-face left"></div>
                        <div className="cube-face right"><img className="logoLoader" src={logo} alt="Logo del mejor lugar de comidas"/></div>
                        <div className="cube-face back"></div>
                        <div className="cube-face front"></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnimationPreloader