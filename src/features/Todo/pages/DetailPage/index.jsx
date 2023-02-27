import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

DetailPage.propTypes = {
  
};

function DetailPage(props) {
  const params = useParams();
  return (
    <div>
      Todo detail {params.todoId}
    </div>
  );
}

export default DetailPage;