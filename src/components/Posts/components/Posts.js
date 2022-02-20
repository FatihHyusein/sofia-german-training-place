import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';
import PostItem from './PostItem';

const Posts = ({ posts }) => {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleLightbox = useCallback(selectedIndex => {
        setLightboxIsOpen(!lightboxIsOpen);
        setSelectedIndex(selectedIndex);
    }, [lightboxIsOpen]);

    return (
        <div>
            {posts && (<div className='row'>
                    {posts.map((obj, i) => {
                        return (<PostItem
                            post={obj}
                            key={i}
                        />);
                    })}
                </div>
            )}
            <ModalGateway>
                {lightboxIsOpen && (
                    <Modal onClose={toggleLightbox}>
                        <Carousel currentIndex={selectedIndex} views={posts}/>
                    </Modal>
                )}
            </ModalGateway>
        </div>
    );
};

Posts.displayName = 'Posts';
Posts.propTypes = {
    posts: PropTypes.array,
};

export default Posts;
