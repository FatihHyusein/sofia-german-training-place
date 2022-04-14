import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalGateway } from 'react-images';

const PracticeAreaItem = ({ item }) => {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

    return <div className='col-lg-5 col-md-6 col-xxl-4 col-xl-4 wow fadeIn'>
        <div className='box-info'>
            <div className='box-info-content'><span
                className='icon icon-xl icon-primary fl-fill-round-icons-attachment12'/>
                <h4><a href='#' onClick={e => {
                    e.preventDefault();
                    setLightboxIsOpen(true);
                }}>{item.title}</a></h4>
                <p>{item.description}</p>
            </div>
        </div>
        <ModalGateway>
            {lightboxIsOpen && (
                <Modal onClose={() => setLightboxIsOpen(false)}>
                    <section
                        style={{ width: '90%', margin: 'auto' }}>
                        <div className='bg-white box-info box-info-modal'>
                            <div>
                                <span className='icon icon-xl icon-primary fl-fill-round-icons-attachment12'/>
                                <h4>{item.title}</h4>
                                <div className='col-lg-12 col-md-12 col-xxl-12 col-xl-12 wow fadeIn'
                                     dangerouslySetInnerHTML={{ __html: item.html }}/>
                            </div>
                        </div>
                    </section>
                </Modal>
            )}
        </ModalGateway>
    </div>;
};

PracticeAreaItem.displayName = 'Practice Area Item';
PracticeAreaItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default PracticeAreaItem;