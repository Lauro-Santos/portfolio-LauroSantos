import "./BarraSocialMidia.css"

const BarraSocialMidia = ({ classe }) => {
    return (
        <nav className={classe}>
            <a href="https://www.linkedin.com/in/lauro-santos-728234226/" class="socialMedia-icon" target="_blank"
                aria-label="Meu linkedin"><i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://codepen.io/lauro-santos" class="socialMedia-icon" target="_blank"
                aria-label="Meu CodePen"><i class="fa-brands fa-codepen"></i>
            </a>
            <a href="https://github.com/Lauro-Santos" class="socialMedia-icon" target="_blank"
                aria-label="Meu GitHub"><i class="fa-brands fa-github"></i>
            </a>
        </nav>
    )
}

export default BarraSocialMidia