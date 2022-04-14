import React from 'react';

import Layout from '../components/layout';
import PracticeAreaItem from '../components/PracticeArea/PracticeAreaItem';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

function MyMapComponent() {
    const ref = React.useRef();

    React.useEffect(() => {
        const map = new window.google.maps.Map(ref.current, {
            center: { lng: 23.30187088675736, lat: 42.6755904569865 },
            zoom: 18,
        });

        const marker = new window.google.maps.Marker({
            position: { lng: 23.30187088675736, lat: 42.6755904569865 },
            map,
        });
    });

    return <div ref={ref} className={'google-map'} id='map'/>;
}

function Error() {
    return <div>Error</div>;
}

function Loader() {
    return <div>Loading...</div>;
}

const renderMapFallback = (status) => {
    switch (status) {
        case Status.LOADING:
            return <Loader/>;
        case Status.FAILURE:
            return <Error/>;
        case Status.SUCCESS:
            return <MyMapComponent/>;
    }
};
const HomeIndex = () => {

    React.useEffect(() => {

    }, []);

    return (<Layout>
        <main className='page-content'>
            <section>
                <Carousel showArrows
                          infiniteLoop
                          showThumbs={false}
                          showStatus={false}
                          sx={{
                              xs: {
                                  mt: 5
                              }
                          }}
                >
                    <div>
                        <img src='images/custom/home-slide-1.jpg'/>
                    </div>
                    <div>
                        <img src='images/custom/home-slide-2.jpg'/>
                    </div>
                </Carousel>
            </section>
            <section className='section-50 section-sm-65 section-md-85 section-lg-115'>
                <div className='container text-center'>
                    <h2>KlasseNzimmer einmal anders!</h2>
                    <div
                        className='row row-60 justify-content-sm-center row-xl offset-top-65 offset-md-top-80 offset-xl-top-95'>
                        <PracticeAreaItem item={{
                            title: 'Иноватовна школа',
                            description: `„KlasseNzimmer” e иноватовна школа по Немски език предназначена за деца от 4 до 14 годишна възраст и базирана на материали от Cornelsen Verlag, е едно от трите най-големи германски издателства на учебници за училищата в Германия, Австрия и Швейцария.`,
                            html: `„KlasseNzimmer” e иноватовна школа по Немски език предназначена за деца от 4 до 14 годишна възраст и базирана на материали от Cornelsen Verlag, е едно от трите най-големи германски издателства на учебници за училищата в Германия, Австрия и Швейцария.`,
                        }}/>
                        <PracticeAreaItem item={{
                            title: 'Страхотно обучение',
                            html: `Часовете, продължителността и времето на провеждане на курсовете, както и вида и съдържанието им, могат да варират в зависимост от Вашите желания, нужди, цели и свободно време.`,
                            description: `Часовете, продължителността и времето на провеждане на курсовете, както и вида и съдържанието им, могат да варират в зависимост от Вашите желания, нужди, цели и свободно време.`
                        }}/>
                        <PracticeAreaItem item={{
                            title: 'Силна като мечка концепция!',
                            description: `С учебника на DaF „Bruno und ich“ децата изучават немски като първи чужд език по забавен начин.`,
                            html: `<p>С учебника на DaF <b>„Bruno und ich“</b> децата изучават немски като първи чужд език по забавен начин.</p> 
                                   <p>Цветно, богато на картинки оформление, емоционално привлекателни теми, игриви задачи и лек изказ - с <b>„Bruno und ich“</b> ученето и преподаването са просто забавни. С помощта на стихчета, песнички, стихотворения, игри и видео караоке децата научават езиковите структури, както и правилното произношение и тренират слушането с разбиране. Малкото мече Бруно ги придружава и премахва страха им от новия език.</p>
<ul style={{listStyle:'initial'}}>
<li>Разработен за първи контакт с немски като чужд език</li>
<li>Нежно въведение в езика</li>
<li>Изучаване на немски език с картинки и игри, подходящи за деца</li>
<li>Разнообразни песни и стихчета</li>
</ul>
`
                        }}/>
                    </div>
                </div>
            </section>
            <section className='section-50 section-sm-65 section-md-85 section-xl-115 bg-gray-darker'>
                <div className='container text-center'>
                    <h2>Нашият екип</h2>
                    <div className='row row-40 row-xl-50'>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='d-inline-block person-block'><img className='img-responsive'
                                                                              src='/images/custom/nadya.jpg'
                                                                              alt='' width='387' height='381'/>
                                <h4 className='offset-top-20'>Надя Атанасова</h4>
                                <p>Friedrich-Alexander-Universität Erlangen-Nürnberg <br/>
                                    Schwerpunkt Betriebswirtschaftslehre (BWL) des Bachelorstudiengangs Wirtschaftswissenschaften
                                </p>

                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='d-inline-block person-block'><img className='img-responsive'
                                                                              src='/images/custom/tatyana.jpg'
                                                                              alt='' width='387' height='381'/>
                                <h4 className='offset-top-20'>Татяна Ананиева</h4>
                                <p>Софийски университет „Св. Климент Охридски”
                                    ОКС: бакалавър, специалност: Начална училищна педагогика и чужд език<br/>
                                    Учител в начален етап на средно образование, учител по чужд език</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='google-map'>
                    <Wrapper apiKey={''}
                             render={renderMapFallback}>
                        {/*<YourComponent/>*/}
                    </Wrapper>
                </div>
                {/*<div className='google-map-container' data-center='9870 St Vincent Place, Glasgow, DC 45 Fr 45.'*/}
                {/*     data-zoom='5' data-icon='images/gmap_marker.png' data-icon-active='images/gmap_marker_active.png'*/}
                {/*     data-styles='[{&quot;featureType&quot;:&quot;water&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#e9e9e9&quot;},{&quot;lightness&quot;:17}]},{&quot;featureType&quot;:&quot;landscape&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f5f5f5&quot;},{&quot;lightness&quot;:20}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:17}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:29},{&quot;weight&quot;:0.2}]},{&quot;featureType&quot;:&quot;road.arterial&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:18}]},{&quot;featureType&quot;:&quot;road.local&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:16}]},{&quot;featureType&quot;:&quot;poi&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f5f5f5&quot;},{&quot;lightness&quot;:21}]},{&quot;featureType&quot;:&quot;poi.park&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#dedede&quot;},{&quot;lightness&quot;:21}]},{&quot;elementType&quot;:&quot;labels.text.stroke&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;on&quot;},{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:16}]},{&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;saturation&quot;:36},{&quot;color&quot;:&quot;#333333&quot;},{&quot;lightness&quot;:40}]},{&quot;elementType&quot;:&quot;labels.icon&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;off&quot;}]},{&quot;featureType&quot;:&quot;transit&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f2f2f2&quot;},{&quot;lightness&quot;:19}]},{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#fefefe&quot;},{&quot;lightness&quot;:20}]},{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#fefefe&quot;},{&quot;lightness&quot;:17},{&quot;weight&quot;:1.2}]}]'>*/}

                {/*    <ul className='google-map-markers'>*/}
                {/*        <li data-location='9870 St Vincent Place, Glasgow, DC 45 Fr 45.'*/}
                {/*            data-description='9870 St Vincent Place, Glasgow'/>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </section>
            <section className='section-50 section-sm-65 section-md-85 section-xl-115'>
                <div className='container text-center'>
                    <h2>Контакти</h2>
                    <div className='row justify-content-md-center row-md'>
                        <div className='col-lg-10 col-xl-8 col-xxl-6'>
                            <form className='rd-mailform text-center' data-form-output='form-output-global'
                                  action='https://getform.io/f/23347d72-f86d-4a42-b8e6-a70635133249'
                                  data-form-type='contact' method='post'>
                                <div className='form-wrap'>
                                    <label className='form-label' htmlFor='contact-name'>Вашето име</label>
                                    <input className='form-input' id='contact-name' type='text' name='name'
                                           data-constraints='@Required'/>
                                </div>
                                <div className='form-wrap'>
                                    <label className='form-label' htmlFor='contact-email'>E-mail</label>
                                    <input className='form-input' id='contact-email' type='email' name='email'
                                           data-constraints='@Email @Required'/>
                                </div>
                                <div className='form-wrap'>
                                    <label className='form-label' htmlFor='contact-message'>Съобщение</label>
                                    <textarea className='form-input' id='contact-message' name='message'
                                              data-constraints='@Required'/>
                                </div>
                                <button className='btn btn-primary' type='submit'>Изпрати</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Layout>);
};

export default HomeIndex;
