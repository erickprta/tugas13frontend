/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */

import styled from "styled-components";


function Footer() {
    return (
      <FooterStyle>
            <div className='container'>
            <footer className='footer'>
                <h2 className='footer__title'>Movie App</h2>
                <p className='footer__author'>Create by Angkasa</p>
            </footer>
        </div>
      </FooterStyle>
    )
}

const FooterStyle = styled.nav`
.container {
    background-color: #051b75;
    color: #fff;
    padding: 1rem;
    text-align: center;
}

.footer__title {
    margin-bottom: 1rem;
}

.footer__author {
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    
}

@media (min-width: 992px) {
   
}
`
export default Footer;