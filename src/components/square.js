import PropTypes from 'prop-types';
import './square.css';

export const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
};
