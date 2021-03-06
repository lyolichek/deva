import React from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { Layout } from '../../components/layout/Layout';
import { Title } from '../../components/title/Title';
import about1 from '../../../images/about-1.jpg';
import about2 from '../../../images/about-2.jpg';
import about3 from '../../../images/about-3.jpg';
import about4 from '../../../images/about-4.jpg';
import about5 from '../../../images/about-5.jpg';
import { StyledAboutArticle } from './StyledAbout';

export const About = () => {
    return (
        <>
            <Navigation />
            <Layout>
                <StyledAboutArticle>
                    <Title />
                    <div className="img-1"> </div>
                    <div className="img-2"> </div>
                    <blockquote className="blockquote" cite="http://developer.mozilla.org">
                        <p>Наше сознание – это все. Вы становитесь тем, о чем думаете...</p>
                    </blockquote>
                    <p className="text-1">Уверенно следуйте за своими мечтами. Живите жизнью, которой  Вам хочется жить!</p>
                    <div className="block-1">
                        <div className="block-1__img-1"> </div>
                        <p className="block-1__text-1">Добро пожаловать в мир, о котором Вы мечтали.
                            Меня зовут Светлана.  Я профессиональный таропсихолог, космоэнергет и автор волшебной коллекции свечей "Дэва".
                            Вам наверное интересно что это, какую пользу несёт окружающим и как это работает?
                            Давайте знакомиться!
                            Таропсихология - это микс эзотерики с классической психологией. С помощью карт Таро я считываю энергии, а с помощью энергопотоков с космическими частотами корректирую Вашу реальность.
                            Я не рассказываю истории о далёком прошлом. Не вижу в этом смысла. Будущее можно корректировать, а в прошлом больше не живем. А вот дать консультацию по текущему вопросу на 1-3 месяцалегко. Тогда точность 99%</p>
                    </div>
                    <p className="text-2">Ко мне обращаются разные клиенты: владельцы бизнесов, влюбленные пары, люди столкнувшиеся с трудностями. Кому-то достаточно одной консультации, чтобы решить проблемы, а кого-то необходимо освобождать от астральных блоков. Я работаю не только с подсознанием, а также корректирую сознательное восприятие.</p>
                    <p className="text-3">test</p>
                    <div className="img-3"> </div>
                    <div className="img-4"> </div>
                    <blockquote className="blockquote-2" cite="http://developer.mozilla.org">
                        <p>Красота есть во всем, но не всем дано это видеть. Конфуций</p>
                    </blockquote>
                </StyledAboutArticle>

               {/* <article>
                    <StyledAboutFirstSection>
                        <Title />
                        <div className="block-1">
                            <div className="img-1"> </div>
                            <p className="block-1__text-2">Мне немного за 30. Меня зовут Светлана. Мне немного за 30. Мне немного за 30. Меня зовут Светлана. Светлана. Мне немного Меня зовут Меня зовут Светлана. СветланаСветлана. Меня зовут Светлана. Мне немного за 30. Меня зовут Светлана. Мне немного за 30. Меня зовут Светлана. Мне немного за 30. Меня зовут Светлана. Мне немного за 30. Меня зовут Светлана. Мне немного за 30. Меня зовут Светлана. Мне немного за 30. Меня зовут Светлана. Мне немного за 30. Мне немного за 30. Меня зовут Светлана. Светлана. Мне немного Меня зовут Меня зовут Светлана. Светлана. Мне немного Светлана. Светлана. Мне немного за 30. Меня зовут Светлана. Меня зовут Светлана. Мне немного за 30. Мне немного за 30. Я профессиональный таропсихолог сихологии знаете как с ней справиться, а волшебные свечи "Дэва" воплощают Ваши мечты в реальность.Секрет успеха прост Секрет успеха прост</p>
                        </div>
                        <div className="block-2">
                            <div className="img-2"> </div>
                            <div className="img-3"> </div>
                            <p className="block-2__text-1">Меня зовут Светлана. Мне немного за 30 Мне немного.</p>
                            <p className="block-2__text-2">Меня зовут Светлана. Мне немного за 30. Мне немного за 30 Мне немного за 30.</p>
                        </div>
                    </StyledAboutFirstSection>

                    <StyledAboutSecondSection>
                        <p className="text-1">Меня зовут Светлана. Мне немного за 30 Мне немного. Меня зовут Светлана. Мне немного за 30 Мне немного. Меня зовут Светлана. Мне немного за 30 Мне немного. Меня зовут Светлана. Мне немного за 30 Мне немного. Меня зовут Светлана. Мне немного за 30 Мне немного. Меня зовут Светлана. Мне немного за 30 Мне немного. Меня зовут Светлана. Мне немного за 30 Мне немного. Меня зовут Светлана. Мне немного за 30 Мне немного. Мне немного за 30 Мне немного.</p>
                        <div className="img-1"> </div>
                        <div className="img-2"> </div>
                        <div className="img-3"> </div>
                        <p className="text-2">Меня зовут Светлана. Мне немного за 30 Мне немного. Мне немного за 30 Мне немного.</p>
                    </StyledAboutSecondSection>
                </article>*/}
            </Layout>
        </>
    )
};
