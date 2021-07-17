import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
import './footer.css'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Hakkımızda</Footer.Title>
                        <Footer.Link href="#">Hikaye</Footer.Link>
                        <Footer.Link href="#">Müşteriler</Footer.Link>
                        <Footer.Link href="#">Referanslar</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Hizmetler</Footer.Title>
                        <Footer.Link href="#">Pazarlama</Footer.Link>
                        <Footer.Link href="#">Danışmanlık</Footer.Link>
                        <Footer.Link href="#">Geliştirme</Footer.Link>
                        <Footer.Link href="#">Tasarım</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Bizimle İletişime Geçin</Footer.Title>
                        <Footer.Link href="#">Türkiye</Footer.Link>
                        <Footer.Link href="#">ABD</Footer.Link>
                        <Footer.Link href="#">İngiltere</Footer.Link>
                        <Footer.Link href="#">Destek</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Sosyal Medya</Footer.Title>
                        <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-linkedin" />Linkedin</Footer.Link>
                        <Footer.Link href="https://github.com/AbdurrahmanKaraoglu"><Icon className="fab fa-github" />Github</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <div className="design">
                    © 2021 Copyright  
                    <a href="https://www.linkedin.com/in/abdurrahman-karaoglu-405369207/"> Abdurrahman Karaoğlu</a>
                </div>
            </Footer.Wrapper>

        </Footer>
    )
}