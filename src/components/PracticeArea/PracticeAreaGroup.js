import React from 'react';
import PropTypes from 'prop-types';
import PracticeAreaItem from './PracticeAreaItem';

const PracticeAreaGroup = ({ group, items, groupIdx }) => {
    const groupName = `group${groupIdx}`;
    return <article className='card card-custom card-default card-default-arrow'>
        <div className='card-header' id='accordion2Heading1' role='tab'>
            <div className='card-title'>
                <a role='button' data-toggle='collapse'
                   data-parent='#accordion-practice'
                   href={`#${groupName}`}
                   aria-controls={groupName}
                   aria-expanded='true'>{group}
                    <div className='card-arrow'/>
                </a>
            </div>
        </div>
        <div className='collapse show' id={groupName} role='tabpanel'
             aria-labelledby='accordion2Heading1'>
            <div className='card-body'><span className='text-primary'/>
                <div className='row row-60 justify-content-sm-center row-xl offset-top-80 offset-xl-top-95'>
                    {items.map((item, idx) => <PracticeAreaItem key={idx} item={item}/>)}
                </div>
            </div>
        </div>
    </article>;
};

PracticeAreaGroup.displayName = 'Practice Area Group';
PracticeAreaGroup.propTypes = {
    posts: PropTypes.array,
};

export default PracticeAreaGroup;
