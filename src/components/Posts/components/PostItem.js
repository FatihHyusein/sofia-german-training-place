import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const PostItem = ({ post }) => {
    let featuredImgFluid = post.node.frontmatter.featuredImage.childImageSharp.fluid;

    return (<article key={post.node.id} className='6u 12u$(xsmall) work-item'>
        <Link className='image fit thumb' to={post.node.frontmatter.path}><Img fluid={featuredImgFluid}/></Link>

        <h3>{post.node.frontmatter.title}</h3>
        <p>{post.node.frontmatter.description}</p>
    </article>);
};

PostItem.displayName = 'GalleryItem';
PostItem.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostItem;