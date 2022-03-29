import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const PostItem = ({ post }) => {
    let featuredImgFluid = post.node.frontmatter.featuredImage.childImageSharp.fluid;

    return <article className='news-post news-post-reverse' key={post.node.id}>
        <div className='news-post-header'>
            <Link className='news-post-media' to={post.node.frontmatter.path}>
                <Img className='img-responsive' fluid={featuredImgFluid} style={{ width: '100%', height: 506 }}/>
            </Link>
            <ul className='label-list'>
                <li><Link className='label-custom' to={post.node.frontmatter.path}>Mergers & Acquisitions</Link></li>
            </ul>
        </div>
        <div className='news-post-body'>
            <h4><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h4>
            <p>{post.node.frontmatter.description}</p>
            <Link
                className='btn btn-primary' to={post.node.frontmatter.path}>Read more</Link>
            <ul className='list-inline offset-top-30 offset-xl-top-80'>
                <li><h6 className='h6 text-regular'>
                    <time dateTime='2020'>{post.node.frontmatter.date}</time>
                </h6></li>
            </ul>
        </div>
    </article>;
};

PostItem.displayName = 'GalleryItem';
PostItem.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostItem;